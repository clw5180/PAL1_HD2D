using System.Collections.Generic;
using System.IO;
using UnityEngine;

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
