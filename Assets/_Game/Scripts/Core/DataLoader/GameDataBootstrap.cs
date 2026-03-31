using System.IO;
using UnityEngine;

/// <summary>
/// 游戏数据引导/验证脚本。
///
/// 【用途】
/// 挂载到场景中用于初始化 GameDataManager 并验证数据加载是否正确。
/// 在开发阶段用于快速检查：场景数据、地图数据、精灵数据是否加载成功。
///
/// 【验证内容】
/// 1. 场景数据: 打印前5个场景信息 + 指定 testSceneId 的详细信息
/// 2. 地图数据: 加载 testMapId 并打印统计信息（总瓦片数、碰撞数、有顶层的数量）
/// 3. 精灵数据: 加载 testSpriteId 的所有帧并打印帧数和尺寸
///
/// 【注意】
/// 此脚本与 MapTestScene 独立使用（不同场景），两者都会加载数据但方式不同。
/// MapTestScene 直接使用 MapDataLoader/TileSpriteLoader，
/// 而 GameDataBootstrap 通过 GameDataManager 单例统一管理。
/// </summary>
public class GameDataBootstrap : MonoBehaviour
{
    [Header("palmod 根目录（相对于 Pal_Resources）")]
    [SerializeField] private string palmodRelativePath = "../Pal_Resources/palmod";

    [Header("精灵图片根目录（相对于项目 Assets）")]
    [SerializeField] private string spriteRelativePath = "Assets/_Game/Textures/Sprites";

    [Header("验证用场景ID")]
    [SerializeField] private int testSceneId = 2;

    [Header("验证用地图ID")]
    [SerializeField] private int testMapId = 12;

    [Header("验证用精灵ID（李逍遥=2）")]
    [SerializeField] private int testSpriteId = 2;

    void Start()
    {
        string projectRoot = Path.GetFullPath(Path.Combine(Application.dataPath, ".."));
        string palmodRoot = Path.GetFullPath(Path.Combine(projectRoot, "Pal_Resources", "palmod"));
        string spriteRoot = Path.GetFullPath(Path.Combine(Application.dataPath, "_Game", "Textures", "Sprites"));

        Debug.Log($"[Bootstrap] palmodRoot: {palmodRoot}");
        Debug.Log($"[Bootstrap] spriteRoot: {spriteRoot}");

        GameDataManager.Instance.Init(palmodRoot, spriteRoot);

        VerifySceneData();
        VerifyMapData();
        VerifySpriteData();
    }

    void VerifySceneData()
    {
        Debug.Log("=== Scene Data Verification ===");

        var allScenes = GameDataManager.Instance.AllScenes;
        Debug.Log($"Total scenes loaded: {allScenes.Count}");

        for (int i = 0; i < Mathf.Min(5, allScenes.Count); i++)
        {
            var scene = allScenes[i];
            Debug.Log($"  Scene {scene.SceneId}: \"{scene.Name}\" MapId={scene.MapId} Events={scene.EventObjects.Count}");
        }

        var testScene = GameDataManager.Instance.GetScene(testSceneId);
        if (testScene != null)
        {
            Debug.Log($"[Test] Scene {testSceneId}: \"{testScene.Name}\" MapId={testScene.MapId}");
            Debug.Log($"  ScriptOnEnter=0x{testScene.ScriptOnEnter:X4}, ScriptOnTeleport=0x{testScene.ScriptOnTeleport:X4}");
            Debug.Log($"  Event objects: {testScene.EventObjects.Count}");

            for (int i = 0; i < Mathf.Min(5, testScene.EventObjects.Count); i++)
            {
                var evt = testScene.EventObjects[i];
                Debug.Log($"    Event[{evt.Index}]: \"{evt.Name}\" Pos=({evt.X},{evt.Y}) State={evt.State} SpriteId={evt.SpriteId} Blocked={evt.IsBlocking}");
            }
        }
        else
        {
            Debug.LogWarning($"[Test] Scene {testSceneId} not found");
        }
    }

    void VerifyMapData()
    {
        Debug.Log("=== Map Data Verification ===");

        var tiles = GameDataManager.Instance.LoadMap(testMapId);
        if (tiles != null)
        {
            MapDataLoader.PrintMapStats(tiles);

            Debug.Log($"[Test] Sample tiles from MapId={testMapId}:");
            for (int y = 0; y < 3; y++)
            {
                for (int x = 0; x < 3; x++)
                {
                    var t = tiles[y, x, 0];
                    Debug.Log($"  Tile[{y},{x},0]: Bottom={t.BottomSpriteId} Top={t.TopSpriteId} Blocked={t.IsBlocked} BH={t.BottomHeight} TH={t.TopHeight}");
                }
            }
        }
        else
        {
            Debug.LogError($"[Test] Failed to load map {testMapId}");
        }
    }

    void VerifySpriteData()
    {
        Debug.Log("=== Sprite Data Verification ===");

        var frames = GameDataManager.Instance.LoadSpriteFrames(testSpriteId);
        if (frames != null && frames.Length > 0)
        {
            Debug.Log($"[Test] Sprite {testSpriteId}: {frames.Length} frames loaded");
            Debug.Log($"  Frame[0] size: {frames[0].texture.width}x{frames[0].texture.height}");
        }
        else
        {
            Debug.LogWarning($"[Test] No sprites found for id {testSpriteId}. " +
                $"This is expected if sprites are in Assets/_Game/Textures/Sprites/{testSpriteId:D5}/");
        }
    }
}
