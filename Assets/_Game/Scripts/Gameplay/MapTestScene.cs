using System.Collections.Generic;
using System.IO;
using UnityEngine;

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

    private MapDataLoader _mapLoader;
    private TileSpriteLoader _tileLoader;
    private MapTileData[,,] _tiles;
    private MapRenderer _mapRenderer;

    private GameObject _player;
    private SpriteRenderer _playerSR;
    private Sprite[] _playerFrames;
    private int _playerPx;
    private int _playerPy;
    private int _direction;
    private int _frameIndex;
    private int _walkCount;
    private float _accTime;
    private const float FrameTime = 1f / 10f;

    private List<EventObjectData> _events;

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
        _player = new GameObject("Player");
        _player.transform.rotation = Quaternion.Euler(90f, 0f, 0f);

        _playerSR = _player.AddComponent<SpriteRenderer>();
        _playerSR.sortingOrder = 10;

        _playerFrames = LoadPlayerSprites(spriteRoot);
        if (_playerFrames != null && _playerFrames.Length > 0)
            _playerSR.sprite = _playerFrames[0];

        _playerPx = startPixelX;
        _playerPy = startPixelY;
        SyncPlayerWorldPos();
    }

    Sprite[] LoadPlayerSprites(string spriteRoot)
    {
        string dir = Path.Combine(spriteRoot, $"{playerSpriteId:D5}");
        if (!Directory.Exists(dir))
        {
            Debug.LogWarning($"[MapTestScene] Player sprite dir not found: {dir}");
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

        Debug.Log($"[MapTestScene] Loaded {sprites.Length} player sprite frames");
        return sprites;
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

    void SyncPlayerWorldPos()
    {
        float wx = _playerPx / 100f;
        float wz = -_playerPy / 100f;
        _player.transform.position = new Vector3(wx, 0.02f, wz);
    }

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

    void UpdateSprite()
    {
        if (_playerFrames == null || _playerFrames.Length < 12) return;
        int idx = _direction * 3 + _frameIndex;
        if (idx >= 0 && idx < _playerFrames.Length)
            _playerSR.sprite = _playerFrames[idx];
    }

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
