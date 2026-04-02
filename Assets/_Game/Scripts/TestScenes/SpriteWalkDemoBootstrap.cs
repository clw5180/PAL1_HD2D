using System.IO;
using UnityEngine;

/// <summary>
/// SpriteWalkDemo 场景引导器。
///
/// 该场景用于早期资源验证——MapGround（静态 PNG 贴图）+ Player（角色精灵行走）。
/// 没有瓦片地图数据，因此角色自由行走，不做碰撞检测。
///
/// 【运行时初始化流程】
/// 1. 将 MapGround 从竖立（Euler 90,0,0）改为平放在 XZ 平面
/// 2. 清理 Player 旧组件（SpriteRenderer、旧 rotation），从 Editor 中的位置反算像素坐标
/// 3. 加载精灵纹理，初始化 PalSpriteRenderer + SimplePlayerController
/// 4. 设置正交相机俯视 + CameraFollow 跟随
///
/// 【MapGround 布局】
/// 场景中的 MapGround 是早期创建的 Unity Plane（Euler 90,0,0 竖立 + Map0012.png 材质）。
/// 运行时改为平放在 XZ 平面，与 SimplePlayerController 的坐标系对齐。
/// 地图 PNG 2096×2079 px，PPU=100 → 世界尺寸 20.96×20.79 单位。
/// 坐标原点在左上角，X 向右递增，Z 向下取负。
///
/// 【使用方式】
/// 挂载到 SpriteWalkDemo 场景中的任意物体上即可。
/// Player 物体上需预先挂好 PalSpriteRenderer 和 SimplePlayerController。
/// 角色初始位置取 Player 在 Editor 中的 Transform.position。
/// </summary>
public class SpriteWalkDemoBootstrap : MonoBehaviour
{
    [Header("角色精灵ID")]
    [SerializeField] private int playerSpriteId = 2;

    private const float MapPixelW = 2096f;
    private const float MapPixelH = 2079f;

    void Start()
    {
        string spriteRoot = Path.GetFullPath(Path.Combine(Application.dataPath, "_Game", "Textures", "Sprites"));

        SetupMapGround();

        var playerGO = InitPlayer(spriteRoot);
        if (playerGO != null)
            SetupCamera(playerGO.transform);
    }

    /// <summary>
    /// 将场景中的 MapGround（早期创建的 Unity Plane）下移到底层 Y 值。
    ///
    /// 【问题背景】
    /// MapGround 在编辑器中位于 Y=0，使用 Opaque + ZWrite On 的材质。
    /// 角色的 Y 坐标由 SortYFromPlayerPixelY 计算，是一个接近 0 的极小值
    /// （例如 playerPy=735 时，sortY ≈ 0.0745）。
    /// 当 MapGround 的 Y=0 而角色 sortY 也接近 0 时，
    /// 深度测试（ZTest LEqual）可能导致 MapGround 遮挡角色。
    ///
    /// 【解决方案】
    /// 将 MapGround 的 Y 设为 MapRenderer.BaseLayerY（-1），
    /// 与 MapRenderer 中地面瓦片层使用相同的底层深度，
    /// 确保地面始终在角色和所有动态对象的后面。
    /// </summary>
    void SetupMapGround()
    {
        var mapGround = GameObject.Find("MapGround");
        if (mapGround == null) return;

        mapGround.transform.rotation = Quaternion.Euler(90f, 0f, 0f);
        mapGround.transform.position = new Vector3(
            mapGround.transform.position.x,
            MapRenderer.BaseLayerY,
            mapGround.transform.position.z
        );
    }

    GameObject InitPlayer(string spriteRoot)
    {
        var playerGO = GameObject.Find("Player");
        if (playerGO == null)
        {
            Debug.LogError("[SpriteWalkDemoBootstrap] Player not found in scene");
            return null;
        }

        Vector3 editorPos = playerGO.transform.position;
        int startPx = Mathf.RoundToInt(editorPos.x * MapRenderer.Ppu);
        int startPy = Mathf.RoundToInt(-editorPos.z * MapRenderer.Ppu);

        playerGO.transform.rotation = Quaternion.identity;

        var oldSR = playerGO.GetComponent<SpriteRenderer>();
        if (oldSR != null) DestroyImmediate(oldSR);

        var textures = PalSpriteRenderer.LoadSpriteTextures(spriteRoot, playerSpriteId);
        if (textures == null || textures.Length == 0)
        {
            Debug.LogError("[SpriteWalkDemoBootstrap] Failed to load sprite textures");
            return null;
        }

        var spriteRenderer = playerGO.GetComponent<PalSpriteRenderer>();
        if (spriteRenderer == null)
            spriteRenderer = playerGO.AddComponent<PalSpriteRenderer>();
        spriteRenderer.Init(textures);

        var controller = playerGO.GetComponent<SimplePlayerController>();
        if (controller == null)
            controller = playerGO.AddComponent<SimplePlayerController>();
        controller.Init(startPx, startPy, spriteRenderer, null);

        Debug.Log($"[SpriteWalkDemoBootstrap] Player initialized at editorPos={editorPos} → pixel=({startPx},{startPy})");
        return playerGO;
    }

    void SetupCamera(Transform playerTransform)
    {
        var cam = Camera.main;
        if (cam == null) return;

        cam.orthographic = true;
        cam.orthographicSize = 1.2f;
        cam.transform.rotation = Quaternion.Euler(90f, 0f, 0f);
        cam.transform.position = new Vector3(
            playerTransform.position.x,
            10f,
            playerTransform.position.z
        );

        float mapW = MapPixelW / MapRenderer.Ppu;
        float mapH = MapPixelH / MapRenderer.Ppu;

        var follow = cam.GetComponent<CameraFollow>();
        if (follow == null)
            follow = cam.gameObject.AddComponent<CameraFollow>();
        follow.target = playerTransform;
        follow.mapMinX = 0f;
        follow.mapMaxX = mapW;
        follow.mapMinZ = -mapH;
        follow.mapMaxZ = 0f;
    }
}
