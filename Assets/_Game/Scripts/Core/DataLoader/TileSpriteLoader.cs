using System;
using System.IO;
using UnityEngine;

/// <summary>
/// 仙剑奇侠传1 地图瓦片精灵加载器。
///
/// 【文件格式 —— Sub16（RLE 编码的 8-bit 索引色精灵）】
/// 瓦片文件路径: MapData/Tile/Tile{XXXX}（如 Tile0012，与地图编号对应）
/// 文件结构:
///   - 前 4 字节: DWORD sizeHeader（整个文件大小，加载时可忽略）
///   - 偏移 4 开始: Sub16 精灵数据块
///     - 前 2 字节 (WORD): (帧数 + 1)，实际帧数 = 该值 - 1
///     - 紧接帧偏移表: WORD offsets[帧数+1]，每个偏移值需左移1位（<< 1）得到实际字节偏移
///     - 每帧数据: 可选的 magic 头 (0x00000002) + WORD width + WORD height + RLE 像素数据
///
/// 【RLE 解码规则】
///   - 读取 1 字节 count:
///     - 如果 (count & 0x80) != 0 且 count <= 0x80 + width: 跳过 (count - 0x80) 个像素（透明）
///     - 否则: 连续读取 count 个像素索引值
///   - 像素索引值通过调色板（Palette）映射为 RGBA 颜色
///   - 索引 255 (0xFF) 视为透明色（alpha=0）
///
/// 【调色板格式】
/// 调色板文件路径: MapData/Palette
///   - 前 8 字节为文件头（跳过）
///   - 之后 256 × 3 字节: 每组 3 字节 = (R, G, B)，VGA 6-bit 格式
///   - 转换公式: realR = (r << 2) | (r >> 4)，即将 6-bit 扩展为 8-bit
///
/// 【瓦片尺寸】
/// 标准瓦片: 32×15 像素（等距菱形瓦片，上下尖角各占 1px）
/// 但实际解码时使用帧头中的 width/height，可能存在非标准尺寸的瓦片。
///
/// 【Bug 修复历史 —— 全部渲染同一个图块】
/// 最初 GetSub16FrameOffset 使用 offsets[frameIndex + 1] 读取偏移，
/// 导致所有瓦片都偏移了一帧，渲染出完全相同的图块。
/// 修复: 改为 offsets[frameIndex]（直接使用当前帧索引）。
///
/// 【图集构建】
/// 加载完所有瓦片后，由 MapRenderer.BuildAtlas() 将所有瓦片打包到 2048×N 的纹理图集中，
/// 避免逐瓦片 Draw Call，提高渲染性能。
/// </summary>
public class TileSpriteLoader
{
    public const int TileWidth = 32;
    public const int TileHeight = 15;

    private Color32[] _palette;
    private Texture2D[] _tileTextures;

    public int TileCount => _tileTextures?.Length ?? 0;

    public void Load(string tileFilePath, string paletteFilePath)
    {
        LoadPalette(paletteFilePath);
        LoadTileSprites(tileFilePath);
    }

    public Texture2D GetTileTexture(int index)
    {
        if (_tileTextures == null || index < 0 || index >= _tileTextures.Length)
            return null;
        return _tileTextures[index];
    }

    /// <summary>
    /// 加载 VGA 6-bit 调色板。
    /// 跳过 8 字节文件头，读取 256 色 × 3 通道(RGB)。
    /// 6-bit → 8-bit 转换: real = (val << 2) | (val >> 4)
    /// 索引 255 设为全透明（仙剑使用 0xFF 作为透明色）。
    /// </summary>
    private void LoadPalette(string path)
    {
        byte[] data = File.ReadAllBytes(path);
        int offset = 8;
        _palette = new Color32[256];
        for (int i = 0; i < 256; i++)
        {
            byte r = (byte)((data[offset + i * 3 + 0] << 2) | (data[offset + i * 3 + 0] >> 4));
            byte g = (byte)((data[offset + i * 3 + 1] << 2) | (data[offset + i * 3 + 1] >> 4));
            byte b = (byte)((data[offset + i * 3 + 2] << 2) | (data[offset + i * 3 + 2] >> 4));
            _palette[i] = new Color32(r, g, b, 255);
        }
        _palette[255] = new Color32(0, 0, 0, 0);
    }

    /// <summary>
    /// 加载 Sub16 格式的瓦片精灵。
    /// 跳过前 4 字节（文件大小头），然后从偏移 4 开始解析 Sub16 数据块。
    /// </summary>
    private void LoadTileSprites(string path)
    {
        byte[] data = File.ReadAllBytes(path);
        int sizeHeader = BitConverter.ToInt32(data, 0);
        int spriteDataOffset = 4;
        int spriteDataLength = data.Length - 4;

        int tileCount = GetSub16Count(data, spriteDataOffset);
        _tileTextures = new Texture2D[tileCount];

        Debug.Log($"[TileSpriteLoader] Loading {tileCount} tile sprites from {Path.GetFileName(path)}");

        for (int i = 0; i < tileCount; i++)
        {
            int frameOffset = GetSub16FrameOffset(data, spriteDataOffset, i);
            if (frameOffset < 0)
            {
                _tileTextures[i] = CreateEmptyTile();
                continue;
            }
            _tileTextures[i] = DecodeTileRle(data, spriteDataOffset + frameOffset);
        }
    }

    /// <summary>
    /// 获取 Sub16 数据块中的帧数。
    /// 前 2 字节 (WORD) 的值减 1 即为实际帧数。
    /// </summary>
    private int GetSub16Count(byte[] data, int baseOffset)
    {
        return (data[baseOffset] | (data[baseOffset + 1] << 8)) - 1;
    }

    /// <summary>
    /// 获取指定帧的数据偏移量（相对于 baseOffset）。
    /// 偏移表中每个条目为 WORD，实际偏移 = 条目值 << 1（左移1位）。
    ///
    /// 【Bug 修复历史】
    /// 最初使用 offsets[frameIndex + 1]（多偏移了一帧），导致所有瓦片渲染为同一个图块。
    /// 修复: 改为 offsets[frameIndex]，直接使用当前帧索引。
    /// </summary>
    private int GetSub16FrameOffset(byte[] data, int baseOffset, int frameIndex)
    {
        int idx = baseOffset + frameIndex * 2;
        if (idx + 1 >= data.Length) return -1;
        int offset = (data[idx] | (data[idx + 1] << 8)) << 1;
        return offset;
    }

    /// <summary>
    /// 解码单帧 RLE 压缩的瓦片数据为 Texture2D。
    /// 
    /// 数据结构:
    ///   [可选 4字节 magic 0x00000002] + [2字节 width] + [2字节 height] + [RLE 像素数据]
    ///
    /// RLE 规则:
    ///   - (count & 0x80) != 0 且 count <= 0x80+width: 跳过 (count-0x80) 个像素（透明/0xFF）
    ///   - 否则: 连续读取 count 个 8-bit 调色板索引
    ///
    /// 最终将像素索引通过 _palette 映射为 RGBA32 颜色，Y 轴翻转（原版从上到下，Unity 从下到上）。
    /// </summary>
    private Texture2D DecodeTileRle(byte[] data, int offset)
    {
        if (offset + 4 >= data.Length) return CreateEmptyTile();

        int magic = BitConverter.ToInt32(data, offset);
        if (magic == 0x00000002) offset += 4;

        if (offset + 4 >= data.Length) return CreateEmptyTile();

        int width = data[offset] | (data[offset + 1] << 8);
        int height = data[offset + 2] | (data[offset + 3] << 8);
        offset += 4;

        byte[] pixels = new byte[width * height];
        for (int i = 0; i < pixels.Length; i++) pixels[i] = 0xFF;

        int pixelsDecoded = 0;
        int pixelIndex = 0;
        int totalPixels = width * height;

        while (pixelsDecoded < totalPixels && offset < data.Length)
        {
            byte count = data[offset++];

            if ((count & 0x80) != 0 && count <= 0x80 + width)
            {
                int skipCount = count - 0x80;
                pixelIndex += skipCount;
                pixelsDecoded += skipCount;
            }
            else
            {
                for (int j = 0; j < count && offset < data.Length; j++)
                {
                    if (pixelIndex < totalPixels)
                        pixels[pixelIndex] = data[offset];
                    pixelIndex++;
                    offset++;
                }
                pixelsDecoded += count;
            }
        }

        var tex = new Texture2D(width, height, TextureFormat.RGBA32, false);
        tex.filterMode = FilterMode.Point;
        tex.wrapMode = TextureWrapMode.Clamp;

        Color32[] colors = new Color32[width * height];
        for (int y = 0; y < height; y++)
        {
            for (int x = 0; x < width; x++)
            {
                int srcIdx = y * width + x;
                int dstIdx = (height - 1 - y) * width + x;
                colors[dstIdx] = _palette[pixels[srcIdx]];
            }
        }

        tex.SetPixels32(colors);
        tex.Apply();
        return tex;
    }

    private Texture2D CreateEmptyTile()
    {
        var tex = new Texture2D(TileWidth, TileHeight, TextureFormat.RGBA32, false);
        tex.filterMode = FilterMode.Point;
        var colors = new Color32[TileWidth * TileHeight];
        for (int i = 0; i < colors.Length; i++)
            colors[i] = new Color32(0, 0, 0, 0);
        tex.SetPixels32(colors);
        tex.Apply();
        return tex;
    }
}
