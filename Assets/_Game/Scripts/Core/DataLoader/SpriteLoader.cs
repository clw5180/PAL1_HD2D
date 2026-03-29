using System.IO;
using UnityEngine;

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
