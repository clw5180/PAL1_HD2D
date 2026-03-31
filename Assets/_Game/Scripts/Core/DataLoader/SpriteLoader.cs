using System.IO;
using UnityEngine;

/// <summary>
/// 仙剑奇侠传1 精灵加载器（从预导出的 PNG 文件加载）。
///
/// 【精灵目录结构】
/// spriteRoot/{spriteId:D5}/
///   ├── 00000.png  (帧0)
///   ├── 00001.png  (帧1)
///   └── ...
///
/// 【精灵ID对照表（部分）】
///   2 = 李逍遥（旧版形象，4方向×3帧=12帧）
///   其他角色/NPC的精灵ID在 Scene.txt 的事件对象中定义
///
/// 【Sprite 锚点】
/// pivot = (0.5, 0) 即底部中心，这样精灵的 position 对应角色脚底位置。
/// PPU = 100，与地图渲染的 PPU 保持一致。
///
/// 【与 TileSpriteLoader 的区别】
/// TileSpriteLoader: 从 Sub16 二进制格式解码地图瓦片（运行时解码）
/// SpriteLoader: 从预导出的 PNG 文件加载角色/NPC精灵（已由外部工具导出）
/// </summary>
public class SpriteLoader
{
    public Sprite LoadSpriteFrame(string spriteDir, int spriteId, int frameId)
    {
        string path = Path.Combine(spriteDir, $"{spriteId:D5}", $"{frameId:D5}.png");
        if (!File.Exists(path))
            return null;

        byte[] bytes = File.ReadAllBytes(path);
        var tex = new Texture2D(2, 2, TextureFormat.RGBA32, false);
        tex.LoadImage(bytes);
        tex.filterMode = FilterMode.Point;

        return Sprite.Create(
            tex,
            new Rect(0, 0, tex.width, tex.height),
            new Vector2(0.5f, 0f),
            100f
        );
    }

    public Sprite[] LoadAllFrames(string spriteDir, int spriteId)
    {
        string dir = Path.Combine(spriteDir, $"{spriteId:D5}");
        if (!Directory.Exists(dir))
        {
            Debug.LogWarning($"[SpriteLoader] Sprite directory not found: {dir}");
            return null;
        }

        string[] files = Directory.GetFiles(dir, "*.png");
        System.Array.Sort(files);

        var sprites = new Sprite[files.Length];
        for (int i = 0; i < files.Length; i++)
        {
            byte[] bytes = File.ReadAllBytes(files[i]);
            var tex = new Texture2D(2, 2, TextureFormat.RGBA32, false);
            tex.LoadImage(bytes);
            tex.filterMode = FilterMode.Point;
            sprites[i] = Sprite.Create(
                tex,
                new Rect(0, 0, tex.width, tex.height),
                new Vector2(0.5f, 0f),
                100f
            );
        }

        Debug.Log($"[SpriteLoader] Loaded {sprites.Length} frames for sprite {spriteId}");
        return sprites;
    }

    public int GetSpriteFrameCount(string spriteDir, int spriteId)
    {
        string dir = Path.Combine(spriteDir, $"{spriteId:D5}");
        if (!Directory.Exists(dir))
            return 0;
        return Directory.GetFiles(dir, "*.png").Length;
    }
}
