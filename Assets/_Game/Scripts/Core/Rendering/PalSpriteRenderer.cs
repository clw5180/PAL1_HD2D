using System.IO;
using UnityEngine;

/// <summary>
/// 仙剑奇侠传1 通用精灵渲染组件（XZ 平面 Mesh 方式）。
///
/// 【为什么不用 SpriteRenderer？】
/// 项目使用正交相机 rotation=(90,0,0) 俯视 XZ 平面。
/// SpriteRenderer 默认在 XY 平面（面朝 Z 轴负方向），从正上方往下看完全不可见。
///
/// 【解决方案】
/// 手动创建 Mesh，顶点在 XZ 平面上（Y=0），面朝 Y 轴正方向（对着相机）。
/// 使用 PAL/MapBase shader（Opaque + clip alpha），与地图瓦片渲染一致。
/// 锚点在脚底中心（底边中点），精灵从脚底向上展开。
///
/// 【使用方式】
/// 1. 调用 LoadSprite(spriteRoot, spriteId) 加载精灵帧纹理
/// 2. 调用 SetFrame(direction, frameIndex) 切换显示帧
/// 3. 自动根据纹理尺寸调整 Mesh 大小
///
/// 角色、NPC、事件对象均可复用此组件。
/// </summary>
public class PalSpriteRenderer : MonoBehaviour
{
    private MeshFilter _meshFilter;
    private MeshRenderer _meshRenderer;
    private Material _material;
    private Texture2D[] _textures;
    private int _texW;
    private int _texH;

    public int FrameCount => _textures != null ? _textures.Length : 0;
    public int FramesPerDirection => _textures != null && _textures.Length >= 4 ? _textures.Length / 4 : 3;

    public void Init(Texture2D[] textures)
    {
        _textures = textures;
        if (_textures != null && _textures.Length > 0)
        {
            _texW = _textures[0].width;
            _texH = _textures[0].height;
        }
        BuildMesh();
    }

    public void SetFrame(int direction, int frameIndex)
    {
        if (_textures == null || _textures.Length < 4 || _material == null) return;
        int framesPerDir = _textures.Length / 4;
        int idx = direction * framesPerDir + frameIndex;
        if (idx >= 0 && idx < _textures.Length)
            _material.mainTexture = _textures[idx];
    }

    void BuildMesh()
    {
        if (_textures == null || _textures.Length == 0) return;

        float ppu = MapRenderer.Ppu;
        float quadW = _texW / ppu;
        float quadH = _texH / ppu;

        var mesh = new Mesh();
        mesh.vertices = new Vector3[]
        {
            new Vector3(-quadW / 2f, 0f, quadH),
            new Vector3( quadW / 2f, 0f, quadH),
            new Vector3( quadW / 2f, 0f, 0f),
            new Vector3(-quadW / 2f, 0f, 0f),
        };
        mesh.uv = new Vector2[]
        {
            new Vector2(0f, 1f),
            new Vector2(1f, 1f),
            new Vector2(1f, 0f),
            new Vector2(0f, 0f),
        };
        mesh.triangles = new int[] { 0, 1, 2, 0, 2, 3 };

        _meshFilter = gameObject.GetComponent<MeshFilter>();
        if (_meshFilter == null)
            _meshFilter = gameObject.AddComponent<MeshFilter>();
        _meshFilter.mesh = mesh;

        _meshRenderer = gameObject.GetComponent<MeshRenderer>();
        if (_meshRenderer == null)
            _meshRenderer = gameObject.AddComponent<MeshRenderer>();
        _material = new Material(Shader.Find("PAL/MapBase"));
        _material.mainTexture = _textures[0];
        _material.SetFloat("_Cutoff", 0.01f);
        _meshRenderer.material = _material;
        _meshRenderer.shadowCastingMode = UnityEngine.Rendering.ShadowCastingMode.Off;
        _meshRenderer.receiveShadows = false;
    }

    public static Texture2D[] LoadSpriteTextures(string spriteRoot, int spriteId)
    {
        string dir = Path.Combine(spriteRoot, $"{spriteId:D5}");
        if (!Directory.Exists(dir))
        {
            Debug.LogWarning($"[PalSpriteRenderer] Sprite dir not found: {dir}");
            return null;
        }

        string[] files = Directory.GetFiles(dir, "*.png");
        System.Array.Sort(files);

        var textures = new Texture2D[files.Length];
        for (int i = 0; i < files.Length; i++)
        {
            byte[] bytes = File.ReadAllBytes(files[i]);
            var tex = new Texture2D(2, 2, TextureFormat.RGBA32, false);
            tex.LoadImage(bytes);
            tex.filterMode = FilterMode.Point;
            tex.wrapMode = TextureWrapMode.Clamp;
            textures[i] = tex;
        }

        Debug.Log($"[PalSpriteRenderer] Loaded {textures.Length} textures for sprite {spriteId}");
        return textures;
    }
}
