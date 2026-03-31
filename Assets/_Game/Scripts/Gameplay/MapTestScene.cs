using System.Collections.Generic;
using System.IO;
using UnityEngine;

/// <summary>
/// 仙剑奇侠传1 地图测试场景。
///
/// 【功能概述】
/// 加载指定地图（默认 Map12 = 仙灵岛李大婶家），渲染地图瓦片，
/// 创建可控角色（李逍遥），实现移动、碰撞检测、动画播放。
///
/// 【角色初始位置】
/// 默认 (1400, 290) 像素坐标，对应李大婶家的室内位置。
/// 早期版本使用了不正确的坐标导致角色位置偏差，
/// 通过反推原版2D坐标确认了正确的初始位置。
///
/// 【游戏帧率】
/// 与 sdlpal 原版一致: 10 FPS 逻辑帧率（game.h 中的 FPS=10）。
/// 在 Update 中累加时间，每 100ms 执行一次 GameFrame 逻辑。
/// 每帧最多移动一格（±16/±8 像素），无插值纯格子跳。
///
/// 【角色渲染排序】
/// 角色不直接按脚底线阈值排序，而是对齐 scene.c 中加入绘制列表时的 `pos.y`。
/// 当前测试场景未实现原版 `wLayer`，所以暂按 `playerPy + 10` 排序；不必落在 tile 中心。
///
/// 【角色精灵】
/// 从 Assets/_Game/Textures/Sprites/{spriteId:D5}/ 目录加载 PNG 序列。
/// 标准旧版形象: 4方向 × 3帧 = 12帧 PNG 文件。
/// 精灵 Mesh 铺在 XZ 平面上（与地图瓦片同平面），锚点在脚底中心。
///
/// 【摄像机设置】
/// 正交摄像机，orthographicSize=1.2，旋转 Euler(90,0,0) 俯视 XZ 平面。
/// 使用 CameraFollow 组件跟随角色，带地图边界限制。
/// 早期版本摄像机旋转设置不正确，导致地图无法正常显示。
/// </summary>
public class MapTestScene : MonoBehaviour
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

    [Header("渲染：角色排序像素偏移")]
    [Tooltip("对齐 scene.c：队伍精灵加入绘制列表时 pos.y = party.y + wLayer + 10。当前测试场景尚未实现 wLayer，因此默认 +10。")]
    [SerializeField] private float playerSortPixelOffset = 10f;

    private MapDataLoader _mapLoader;
    private TileSpriteLoader _tileLoader;
    private MapTileData[,,] _tiles;
    private MapRenderer _mapRenderer;

    private GameObject _player;
    private MeshFilter _playerMF;
    private MeshRenderer _playerMR;
    private Material _playerMat;
    private Texture2D[] _playerTextures;
    private int _playerTexW;
    private int _playerTexH;
    private int _playerPx;
    private int _playerPy;
    private int _direction;
    private int _frameIndex;
    private int _walkCount;
    private float _accTime;
    private const float FrameTime = 1f / 10f;

    private List<EventObjectData> _events;

    /// <summary>
    /// 4方向每帧移动的像素偏移量（与 SDLPal-CS 一致）。
    /// 
    /// 【Bug 修复历史】
    /// 早期版本 Y 分量符号写反（参考了错误的资料），导致按 D 键角色却向 W 方向移动。
    /// 对照 SDLPal-CS 源码中的 PAL_X/PAL_Y 宏修正后解决:
    ///   South(0): X减少, Y增加 → (-16, +8) 屏幕左下
    ///   West(1):  X减少, Y减少 → (-16, -8) 屏幕左上
    ///   North(2): X增加, Y减少 → (+16, -8) 屏幕右上
    ///   East(3):  X增加, Y增加 → (+16, +8) 屏幕右下
    /// </summary>
    static readonly Vector2Int[] DirMovePixel = new Vector2Int[]
    {
        new Vector2Int(-16,  8),  // South(0): 左下
        new Vector2Int(-16, -8),  // West(1):  左上
        new Vector2Int( 16, -8),  // North(2): 右上
        new Vector2Int( 16,  8),  // East(3):  右下
    };

    void Start()
    {
        string projectRoot = Path.GetFullPath(Path.Combine(Application.dataPath, ".."));
        string palmodRoot = Path.GetFullPath(Path.Combine(projectRoot, "Pal_Resources", "palmod"));
        string spriteRoot = Path.GetFullPath(Path.Combine(Application.dataPath, "_Game", "Textures", "Sprites"));

        _mapLoader = new MapDataLoader();
        _tileLoader = new TileSpriteLoader();

        string mapFile = Path.Combine(palmodRoot, "MapData", "Map", $"Map{mapId:D4}");
        string tileFile = Path.Combine(palmodRoot, "MapData", "Tile", $"Tile{mapId:D4}");
        string paletteFile = Path.Combine(palmodRoot, "MapData", "Palette");

        _tiles = _mapLoader.LoadMapTiles(mapFile);
        _tileLoader.Load(tileFile, paletteFile);

        if (_tiles == null)
        {
            Debug.LogError("[MapTestScene] Failed to load map tiles");
            return;
        }

        MapDataLoader.PrintMapStats(_tiles);

        _mapRenderer = gameObject.AddComponent<MapRenderer>();
        _mapRenderer.Render(_tiles, _tileLoader);

        LoadSceneEvents(palmodRoot);

        CreatePlayer(spriteRoot);

        SetupCamera();
    }

    void LoadSceneEvents(string palmodRoot)
    {
        string sceneTxt = Path.Combine(palmodRoot, "Scene.txt");
        var loader = new SceneDataLoader();
        var allScenes = loader.LoadAllScenes(sceneTxt);

        _events = new List<EventObjectData>();
        foreach (var scene in allScenes)
        {
            if (scene.MapId == mapId)
            {
                _events.AddRange(scene.EventObjects);
                Debug.Log($"[MapTestScene] Loaded {scene.EventObjects.Count} events from scene \"{scene.Name}\" (SceneId={scene.SceneId})");
            }
        }
    }

    void CreatePlayer(string spriteRoot)
    {
        _playerTextures = LoadPlayerTextures(spriteRoot);
        if (_playerTextures == null || _playerTextures.Length == 0) return;

        _playerTexW = _playerTextures[0].width;
        _playerTexH = _playerTextures[0].height;

        _player = new GameObject("Player");

        float ppu = 100f;
        float quadW = _playerTexW / ppu;
        float quadH = _playerTexH / ppu;

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

        _playerMF = _player.AddComponent<MeshFilter>();
        _playerMF.mesh = mesh;

        _playerMR = _player.AddComponent<MeshRenderer>();
        _playerMat = new Material(Shader.Find("PAL/MapBase"));
        _playerMat.mainTexture = _playerTextures[0];
        _playerMat.SetFloat("_Cutoff", 0.01f);
        _playerMR.material = _playerMat;
        _playerMR.shadowCastingMode = UnityEngine.Rendering.ShadowCastingMode.Off;
        _playerMR.receiveShadows = false;

        _playerPx = startPixelX;
        _playerPy = startPixelY;
        SyncPlayerWorldPos();
    }

    Texture2D[] LoadPlayerTextures(string spriteRoot)
    {
        string dir = Path.Combine(spriteRoot, $"{playerSpriteId:D5}");
        if (!Directory.Exists(dir))
        {
            Debug.LogWarning($"[MapTestScene] Player sprite dir not found: {dir}");
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

        Debug.Log($"[MapTestScene] Loaded {textures.Length} player sprite textures");
        return textures;
    }

    void SetupCamera()
    {
        var cam = Camera.main;
        if (cam == null) return;

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

    void Update()
    {
        if (_tiles == null || _player == null) return;

        _accTime += Time.deltaTime;
        if (_accTime >= FrameTime)
        {
            _accTime -= FrameTime;
            GameFrame();
        }
    }

    void GameFrame()
    {
        float h = Input.GetAxisRaw("Horizontal");
        float v = Input.GetAxisRaw("Vertical");
        bool isWalking = h != 0f || v != 0f;

        if (isWalking)
        {
            int dir = InputToDirection(h, v);
            _direction = dir;

            int targetPx = _playerPx + DirMovePixel[dir].x;
            int targetPy = _playerPy + DirMovePixel[dir].y;

            if (!CheckObstacle(targetPx, targetPy))
            {
                _playerPx = targetPx;
                _playerPy = targetPy;
                SyncPlayerWorldPos();
            }
        }

        UpdateGestures(isWalking);
        UpdateSprite();
    }

    /// <summary>
    /// 碰撞检测：判断目标像素坐标是否被阻挡。
    ///
    /// 【碰撞逻辑】
    /// 1. 边界检查：超出地图范围视为阻挡
    /// 2. 地图瓦片碰撞：通过 PixelToGrid 将像素坐标转为网格坐标，查询 IsBlocked 标记
    /// 3. 事件对象碰撞：遍历当前场景的事件对象，用菱形距离判定
    ///
    /// 【菱形距离碰撞判定】
    /// |evt.X - px| + |evt.Y - py| * 2 < 16
    /// 这是 sdlpal 原版的碰撞公式，形成一个菱形碰撞区域而非矩形。
    ///
    /// 【PixelToGrid 算法说明】
    /// 使用 sdlpal 的菱形区域判定（非简单整数除法），
    /// 详见 PalCoordinate.PixelToGrid 的注释。
    /// 早期使用简单除法时出现"碰撞体延迟一格"的 Bug。
    /// </summary>
    bool CheckObstacle(int px, int py)
    {
        if (px < 0 || px > MapDataLoader.TileCountX * 32 ||
            py < 0 || py > MapDataLoader.TileCountY * 16)
            return true;

        int x = px / 32;
        int y = py / 16;
        int h = 0;

        int xr = px % 32;
        int yr = py % 16;

        if (xr + yr * 2 >= 16)
        {
            if (xr + yr * 2 >= 48)
            {
                x++;
                y++;
            }
            else if (32 - xr + yr * 2 < 16)
            {
                x++;
            }
            else if (32 - xr + yr * 2 < 48)
            {
                h = 1;
            }
            else
            {
                y++;
            }
        }

        if (_mapLoader.IsTileBlocked(_tiles, x, y, h))
            return true;

        if (_events != null)
        {
            foreach (var evt in _events)
            {
                if (!evt.IsBlocking) continue;
                if (Mathf.Abs(evt.X - px) + Mathf.Abs(evt.Y - py) * 2 < 16)
                    return true;
            }
        }

        return false;
    }

    /// <summary>
    /// 同步角色的 Unity 世界坐标。
    /// wx/wz 仍按逻辑像素定位；sortY 改为对齐原版加入绘制列表时的角色排序像素 Y。
    /// </summary>
    void SyncPlayerWorldPos()
    {
        float wx = _playerPx / MapRenderer.Ppu;
        float wz = -_playerPy / MapRenderer.Ppu;
        float sortY = MapRenderer.SortYFromPlayerPixelY(_playerPy, playerSortPixelOffset);
        _player.transform.position = new Vector3(wx, sortY, wz);
    }

    /// <summary>
    /// 更新角色行走姿态（参考 SDLPal Scene.cs 的 UpdateCharacterGestures）。
    /// 3帧模式（旧版形象）: walkCount % 4 → 映射为帧索引 [0, 1, 0, 2]
    /// 实现左脚-站立-右脚-站立的循环动画。
    /// </summary>
    void UpdateGestures(bool isWalking)
    {
        if (isWalking)
        {
            if (_walkCount == 0)
                _walkCount = (Random.value > 0.5f) ? 1 : 3;
            else
                _walkCount++;

            _frameIndex = _walkCount % 4;
            if (_frameIndex == 2) _frameIndex = 0;
            if (_frameIndex == 3) _frameIndex = 2;
        }
        else
        {
            _walkCount = 0;
            _frameIndex = 0;
        }
    }

    /// <summary>
    /// 更新角色精灵贴图。帧索引 = direction * 3 + frameIndex。
    /// 纹理数组按方向排列: [South0-2, West3-5, North6-8, East9-11]
    /// </summary>
    void UpdateSprite()
    {
        if (_playerTextures == null || _playerTextures.Length < 12) return;
        int idx = _direction * 3 + _frameIndex;
        if (idx >= 0 && idx < _playerTextures.Length)
            _playerMat.mainTexture = _playerTextures[idx];
    }

    /// <summary>
    /// 将键盘输入映射到仙剑方向索引。
    /// 等距视角下键盘映射:
    ///   A+W → West(1) 左上    D+W → North(2) 右上
    ///   A+S → South(0) 左下   D+S → East(3) 右下
    ///   纯A → West(1)  纯D → East(3)  纯W → North(2)  纯S → South(0)
    /// </summary>
    static int InputToDirection(float h, float v)
    {
        if (h <= -0.5f && v >= 0.5f) return 1;
        if (h >= 0.5f && v >= 0.5f) return 2;
        if (h >= 0.5f && v <= -0.5f) return 3;
        if (h <= -0.5f && v <= -0.5f) return 0;
        if (h <= -0.5f) return 1;
        if (h >= 0.5f) return 3;
        if (v >= 0.5f) return 2;
        return 0;
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
