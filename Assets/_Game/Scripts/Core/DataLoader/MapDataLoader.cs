using System;
using System.IO;
using UnityEngine;

/// <summary>
/// 仙剑奇侠传1 地图数据加载器。
///
/// 【文件格式】
/// 地图文件为纯二进制，路径格式: MapData/Map/Map{XXXX}（如 Map0012）
/// 数据结构: DWORD Tiles[128][64][2]，总大小 65536 字节
/// 遍历顺序: 外层 Y(0~127) → 中层 X(0~63) → 内层 H(0~1)
///
/// 【Bug 修复历史 —— 文件大小校验】
/// 最初使用 bytes.Length == TileDataSize（65536）严格校验，
/// 但 palmod 导出的文件会将 tile 数据写两遍（131072 字节），导致加载失败。
/// 报错信息: "Map file size mismatch: expected 65536, got 131072"
/// 修复: 改为 bytes.Length >= TileDataSize，只取前 65536 字节。
///
/// 【碰撞检测】
/// IsTileBlocked 查询某个网格坐标是否被阻挡。
/// 边界外的坐标一律视为阻挡（返回 true），防止角色走出地图。
/// 
/// 【碰撞 Bug 修复历史】
/// 1. 碰撞区域与地图发生错位 → 原因是 Gizmo 绘制时缺少 transform.localToWorldMatrix
///    以及瓦片渲染偏移 (-16, -8) 没有应用到碰撞可视化中
/// 2. 碰撞体"延迟一格"才起作用 → 原因是 PixelToGrid 使用矩形坐标而非菱形坐标
///    改用 sdlpal 的菱形区域判定算法后解决（见 PalCoordinate.PixelToGrid）
/// </summary>
public class MapDataLoader
{
    public const int TileCountY = 128;
    public const int TileCountX = 64;
    public const int TileCountH = 2;
    public const int TileDataSize = TileCountY * TileCountX * TileCountH * 4;

    public MapTileData[,,] LoadMapTiles(string mapFilePath)
    {
        if (!File.Exists(mapFilePath))
        {
            Debug.LogError($"Map file not found: {mapFilePath}");
            return null;
        }

        byte[] bytes = File.ReadAllBytes(mapFilePath);
        if (bytes.Length < TileDataSize)
        {
            Debug.LogError($"Map file too small: need at least {TileDataSize}, got {bytes.Length}");
            return null;
        }

        if (bytes.Length > TileDataSize)
            Debug.Log($"[MapDataLoader] File has {bytes.Length} bytes, using first {TileDataSize} (palmod writes tile data twice)");

        var tiles = new MapTileData[TileCountY, TileCountX, TileCountH];

        int offset = 0;
        for (int y = 0; y < TileCountY; y++)
        {
            for (int x = 0; x < TileCountX; x++)
            {
                for (int h = 0; h < TileCountH; h++)
                {
                    uint dword = BitConverter.ToUInt32(bytes, offset);
                    tiles[y, x, h] = MapTileData.Decode(dword);
                    offset += 4;
                }
            }
        }

        return tiles;
    }

    public MapTileData[,,] LoadMapTilesById(string mapDir, int mapId)
    {
        string path = Path.Combine(mapDir, $"Map{mapId:D4}");
        return LoadMapTiles(path);
    }

    public bool IsTileBlocked(MapTileData[,,] tiles, int x, int y, int h)
    {
        if (y < 0 || y >= TileCountY || x < 0 || x >= TileCountX || h < 0 || h > 1)
            return true;
        return tiles[y, x, h].IsBlocked;
    }

    public static void PrintMapStats(MapTileData[,,] tiles)
    {
        if (tiles == null)
        {
            Debug.Log("[MapDataLoader] tiles is null");
            return;
        }

        int blocked = 0;
        int total = 0;
        int hasTopLayer = 0;

        for (int y = 0; y < TileCountY; y++)
        {
            for (int x = 0; x < TileCountX; x++)
            {
                for (int h = 0; h < TileCountH; h++)
                {
                    total++;
                    if (tiles[y, x, h].IsBlocked) blocked++;
                    if (tiles[y, x, h].TopSpriteId >= 0) hasTopLayer++;
                }
            }
        }

        Debug.Log($"[MapDataLoader] Total tiles: {total}, Blocked: {blocked}, HasTopLayer: {hasTopLayer}");
    }
}
