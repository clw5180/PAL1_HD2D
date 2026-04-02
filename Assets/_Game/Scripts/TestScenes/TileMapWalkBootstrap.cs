using System.Collections.Generic;
using System.IO;
using UnityEngine;

/// <summary>
/// 仙剑奇侠传1 TileMap 行走测试场景引导器。
///
/// 【职责】
/// 纯粹的场景初始化和编排：加载二进制地图数据、加载精灵、创建角色、设置相机。
/// 角色控制逻辑委托给 SimplePlayerController，
/// 碰撞检测委托给 PalCollisionSystem，
/// 精灵渲染委托给 PalSpriteRenderer。
///
/// 【默认配置】
/// 地图: MapId=12（余杭客栈房间）
/// 角色: SpriteId=2（李逍遥）
/// 初始位置: (1400, 290) 像素坐标
///
/// 【摄像机设置】
/// 正交摄像机，orthographicSize=1.2，旋转 Euler(90,0,0) 俯视 XZ 平面。
/// 使用 CameraFollow 组件跟随角色，带地图边界限制。
/// </summary>
public class TileMapWalkBootstrap : MonoBehaviour
{
    [Header("地图配置")]
    [SerializeField] private int mapId = 12;

    [Header("角色初始像素坐标（原版坐标系）")]
    [SerializeField] private int startPixelX = 1400;
    [SerializeField] private int startPixelY = 290;

    [Header("角色精灵ID")]
    [SerializeField] private int playerSpriteId = 2;

    [Header("Debug: 显示碰撞格")]
    [SerializeField] private bool showCollisionDebug = false;

    private MapDataLoader _mapLoader;
    private TileSpriteLoader _tileLoader;
    private MapTileData[,,] _tiles;
    private MapRenderer _mapRenderer;
    private GameObject _player;

    void Start()
    {
        string projectRoot = Path.GetFullPath(Path.Combine(Application.dataPath, ".."));
        string palmodRoot = Path.GetFullPath(Path.Combine(projectRoot, "Pal_Resources", "palmod"));
        string spriteRoot = Path.GetFullPath(Path.Combine(Application.dataPath, "_Game", "Textures", "Sprites"));

        LoadMap(palmodRoot);
        if (_tiles == null) return;

        var events = LoadSceneEvents(palmodRoot);
        CreatePlayer(spriteRoot, events);
        SetupCamera();
    }

    void LoadMap(string palmodRoot)
    {
        _mapLoader = new MapDataLoader();
        _tileLoader = new TileSpriteLoader();

        string mapFile = Path.Combine(palmodRoot, "MapData", "Map", $"Map{mapId:D4}");
        string tileFile = Path.Combine(palmodRoot, "MapData", "Tile", $"Tile{mapId:D4}");
        string paletteFile = Path.Combine(palmodRoot, "MapData", "Palette");

        _tiles = _mapLoader.LoadMapTiles(mapFile);
        _tileLoader.Load(tileFile, paletteFile);

        if (_tiles == null)
        {
            Debug.LogError("[TileMapWalkBootstrap] Failed to load map tiles");
            return;
        }

        MapDataLoader.PrintMapStats(_tiles);

        _mapRenderer = gameObject.AddComponent<MapRenderer>();
        _mapRenderer.Render(_tiles, _tileLoader);
    }

    List<EventObjectData> LoadSceneEvents(string palmodRoot)
    {
        string sceneTxt = Path.Combine(palmodRoot, "Scene.txt");
        var loader = new SceneDataLoader();
        var allScenes = loader.LoadAllScenes(sceneTxt);

        var events = new List<EventObjectData>();
        foreach (var scene in allScenes)
        {
            if (scene.MapId == mapId)
            {
                events.AddRange(scene.EventObjects);
                Debug.Log($"[TileMapWalkBootstrap] Loaded {scene.EventObjects.Count} events from scene \"{scene.Name}\" (SceneId={scene.SceneId})");
            }
        }
        return events;
    }

    void CreatePlayer(string spriteRoot, List<EventObjectData> events)
    {
        var textures = PalSpriteRenderer.LoadSpriteTextures(spriteRoot, playerSpriteId);
        if (textures == null || textures.Length == 0) return;

        _player = new GameObject("Player");

        var spriteRenderer = _player.AddComponent<PalSpriteRenderer>();
        spriteRenderer.Init(textures);

        var collision = new PalCollisionSystem();
        collision.Init(_mapLoader, _tiles, events);

        var controller = _player.AddComponent<SimplePlayerController>();
        controller.Init(startPixelX, startPixelY, spriteRenderer, collision);
    }

    void SetupCamera()
    {
        var cam = Camera.main;
        if (cam == null || _player == null) return;

        cam.orthographic = true;
        cam.orthographicSize = 1.2f;
        cam.transform.rotation = Quaternion.Euler(90f, 0f, 0f);

        var follow = cam.GetComponent<CameraFollow>();
        if (follow == null)
            follow = cam.gameObject.AddComponent<CameraFollow>();
        follow.target = _player.transform;
        follow.mapMinX = 0f;
        follow.mapMaxX = 64f * 32f / 100f;
        follow.mapMinZ = -(128f * 16f / 100f);
        follow.mapMaxZ = 0f;
    }

    /// <summary>
    /// Debug: 在 Scene 视图中绘制碰撞格可视化。
    ///
    /// 【Bug 修复历史】
    /// 1. 碰撞格与地图错位 → 缺少 Gizmos.matrix = transform.localToWorldMatrix
    /// 2. 仍然错位 → 碰撞格绘制位置需要加上瓦片渲染偏移 (-16, -8) 像素
    ///    即 px = (x*32 + h*16 - 16)/100, pz = -(y*16 + h*8 - 8)/100
    /// </summary>
    void OnDrawGizmos()
    {
        if (!showCollisionDebug || _tiles == null) return;

        Gizmos.matrix = transform.localToWorldMatrix;
        Gizmos.color = new Color(1, 0, 0, 0.3f);
        for (int y = 0; y < MapDataLoader.TileCountY; y++)
        {
            for (int x = 0; x < MapDataLoader.TileCountX; x++)
            {
                for (int h = 0; h < 2; h++)
                {
                    if (!_tiles[y, x, h].IsBlocked) continue;
                    float px = (x * 32 + h * 16 - 16) / 100f;
                    float pz = -(y * 16 + h * 8 - 8) / 100f;
                    Gizmos.DrawCube(new Vector3(px + 0.16f, 0f, pz - 0.075f), new Vector3(0.32f, 0.01f, 0.15f));
                }
            }
        }
        Gizmos.matrix = Matrix4x4.identity;
    }
}
