using System.Collections.Generic;

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
