using System.Collections.Generic;
using System.IO;
using UnityEngine;

/// <summary>
/// 仙剑奇侠传1 游戏数据管理器（单例）。
///
/// 【职责】
/// 统一管理所有数据加载器，提供全局访问点。
/// 包含: SceneDataLoader（场景）、MapDataLoader（地图）、SpriteLoader（精灵）
///
/// 【初始化流程】
/// 1. Init() 设置 palmod 根目录和精灵目录
/// 2. 立即加载所有场景数据（Scene.txt 一次性全部加载）
/// 3. 地图和精灵按需加载（LoadMap / LoadSpriteFrames）
///
/// 【目录结构】
/// palmodRoot/
///   ├── Scene.txt          - 场景定义文件
///   └── MapData/
///       ├── Map/Map{XXXX}  - 地图瓦片数据（二进制）
///       ├── Tile/Tile{XXXX} - 地图瓦片精灵（Sub16 格式）
///       └── Palette         - 调色板文件
/// spriteRoot/
///   └── {XXXXX}/           - 精灵目录（如 00002/ = 李逍遥）
///       └── {XXXXX}.png    - 精灵帧图片
///
/// 【CheckObstacle 方法】
/// 封装了完整的碰撞检测逻辑：像素坐标→网格坐标→查询碰撞+事件碰撞。
/// 使用 PalCoordinate.PixelToGrid 的菱形区域判定算法。
/// </summary>
public class GameDataManager
{
    private static GameDataManager _instance;
    public static GameDataManager Instance => _instance ??= new GameDataManager();

    public SceneDataLoader SceneLoader { get; private set; }
    public MapDataLoader MapLoader { get; private set; }
    public SpriteLoader SpriteLoader { get; private set; }

    public List<SceneData> AllScenes { get; private set; }
    public MapTileData[,,] CurrentMapTiles { get; private set; }
    public int CurrentMapId { get; private set; }

    private string _palmodRoot;
    private string _spriteRoot;

    public void Init(string palmodRoot, string spriteRoot)
    {
        _palmodRoot = palmodRoot;
        _spriteRoot = spriteRoot;

        SceneLoader = new SceneDataLoader();
        MapLoader = new MapDataLoader();
        SpriteLoader = new SpriteLoader();

        string sceneTxtPath = Path.Combine(_palmodRoot, "Scene.txt");
        AllScenes = SceneLoader.LoadAllScenes(sceneTxtPath);
        Debug.Log($"[GameDataManager] Loaded {AllScenes.Count} scenes");
    }

    public SceneData GetScene(int sceneId)
    {
        return SceneLoader.LoadScene(AllScenes, sceneId);
    }

    public MapTileData[,,] LoadMap(int mapId)
    {
        string mapDir = Path.Combine(_palmodRoot, "MapData", "Map");
        CurrentMapTiles = MapLoader.LoadMapTilesById(mapDir, mapId);
        CurrentMapId = mapId;
        return CurrentMapTiles;
    }

    public bool IsTileBlocked(int x, int y, int h)
    {
        return MapLoader.IsTileBlocked(CurrentMapTiles, x, y, h);
    }

    public bool CheckObstacle(int px, int py, List<EventObjectData> events, bool checkEvents = true)
    {
        PalCoordinate.PixelToGrid(px, py, out int x, out int y, out int h);

        if (MapLoader.IsTileBlocked(CurrentMapTiles, x, y, h))
            return true;

        if (checkEvents && events != null)
        {
            foreach (var evt in events)
            {
                if (!evt.IsBlocking) continue;
                if (System.Math.Abs(evt.X - px) + System.Math.Abs(evt.Y - py) * 2 < 16)
                    return true;
            }
        }

        return false;
    }

    public Sprite[] LoadSpriteFrames(int spriteId)
    {
        return SpriteLoader.LoadAllFrames(_spriteRoot, spriteId);
    }
}
