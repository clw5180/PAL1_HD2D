using System.Collections.Generic;

/// <summary>
/// 仙剑奇侠传1 场景数据。
///
/// 【数据来源】
/// 从 palmod 导出的 Scene.txt 解析而来（文本格式，由 SceneDataLoader 解析）。
/// 原版二进制数据存储在 SSS.MKF 等打包文件中，palmod 已帮我们转为可读文本。
///
/// 【场景与地图的关系】
/// 一个 Map 可对应多个 Scene（如李大婶家 Map12 对应"仙灵岛李大婶家"等场景）。
/// 每个 Scene 都有自己的事件对象列表（EventObjects），场景事件位置用原版像素坐标存储。
///
/// 【碰撞检测中的事件对象】
/// 事件对象也参与碰撞检测（当 IsBlocking == true 时）。
/// 碰撞判定使用菱形距离：|evt.X - px| + |evt.Y - py| * 2 < 16
/// 这与 sdlpal 原版 CheckObstacle 中的事件碰撞逻辑一致。
/// </summary>
public class SceneData
{
    public int SceneId;
    public string Name;
    public int MapId;
    public int ScriptOnEnter;
    public int ScriptOnTeleport;
    public int EventObjectIndex;
    public List<EventObjectData> EventObjects = new List<EventObjectData>();
}

/// <summary>
/// 场景中的事件对象数据。
///
/// 【坐标说明】
/// X, Y 为原版像素坐标系中的位置（与角色像素坐标同一坐标系）。
/// Layer 为层级信息，用于确定事件对象的渲染层级。
///
/// 【State 含义】
///   State = 0: 不可见、不阻挡
///   State = 1: 可见但不阻挡
///   State >= 2: 可见且阻挡通行（IsBlocking = true）
///
/// 【精灵帧计算】
/// 帧索引 = Direction * FramesPerDirection + CurrentFrameId
/// 标准旧版形象 FramesPerDirection=3（4方向×3帧=12帧），新仙剑形象为9帧。
/// </summary>
public class EventObjectData
{
    public int Index;
    public string Name;
    public int VanishTime;
    public int X;
    public int Y;
    public int Layer;
    public int TriggerScript;
    public int AutoScript;
    public int State;
    public int TriggerMode;
    public int SpriteId;
    public int FramesPerDirection;
    public int Direction;
    public int CurrentFrameId;
    public int TriggerIdleFrame;

    public bool IsBlocking => State >= 2;
    public bool IsVisible => State > 0;
}
