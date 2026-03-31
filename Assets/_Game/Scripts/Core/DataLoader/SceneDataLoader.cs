using System;
using System.Collections.Generic;
using System.Globalization;
using System.IO;
using System.Text.RegularExpressions;
using UnityEngine;

/// <summary>
/// 仙剑奇侠传1 场景数据加载器。
///
/// 【数据来源】
/// 从 palmod 导出的 Scene.txt 文本文件解析场景和事件对象数据。
/// palmod 将原版二进制数据（SSS.MKF 等）转为可读的文本格式。
///
/// 【Scene.txt 格式说明】
/// 场景头格式（正则匹配）:
///   (场景名) $十六进制(场景ID) [地图ID 进入脚本 传送脚本 事件索引]
///   例: (仙灵岛李大婶家) $0002(2) [12 0000 0000 0]
///
/// 事件对象格式（正则匹配）:
///   $十六进制(索引) [消失时间 X Y 层级 触发脚本 自动脚本 状态 触发模式 精灵ID 每方向帧数 方向 当前帧 空闲帧 ...] 名称
///   例: $0001(1) [0 1400 290 0 0100 0000 2 1 2 3 0 0 0 0 0 0] 李逍遥
///
/// 【注意事项】
/// - 脚本ID为十六进制
/// - 坐标为原版像素坐标
/// - LoadScene 方法使用1-based索引（sceneId从1开始）
/// </summary>
public class SceneDataLoader
{
    private static readonly Regex SceneHeaderRegex =
        new Regex(@"\((.+?)\)\s+\$[0-9A-Fa-f]+\((\d+)\)\s+\[(\d+)\s+([0-9A-Fa-f]+)\s+([0-9A-Fa-f]+)\s+(\d+)\]");

    private static readonly Regex EventRegex =
        new Regex(@"\$[0-9A-Fa-f]+\((\d+)\)\s+\[(-?\d+)\s+(-?\d+)\s+(-?\d+)\s+(-?\d+)\s+([0-9A-Fa-f]+)\s+([0-9A-Fa-f]+)\s+(-?\d+)\s+(\d+)\s+(\d+)\s+(\d+)\s+(\d+)\s+(\d+)\s+(\d+)\s+(\d+)\s+(\d+)\s+(\d+)\]\s*(.*)");

    public List<SceneData> LoadAllScenes(string sceneTxtPath)
    {
        var scenes = new List<SceneData>();

        if (!File.Exists(sceneTxtPath))
        {
            Debug.LogError($"Scene.txt not found: {sceneTxtPath}");
            return scenes;
        }

        var lines = File.ReadAllLines(sceneTxtPath);
        SceneData currentScene = null;

        for (int i = 0; i < lines.Length; i++)
        {
            string line = lines[i];

            var sceneMatch = SceneHeaderRegex.Match(line);
            if (sceneMatch.Success)
            {
                currentScene = new SceneData
                {
                    Name = sceneMatch.Groups[1].Value,
                    SceneId = int.Parse(sceneMatch.Groups[2].Value),
                    MapId = int.Parse(sceneMatch.Groups[3].Value),
                    ScriptOnEnter = int.Parse(sceneMatch.Groups[4].Value, NumberStyles.HexNumber),
                    ScriptOnTeleport = int.Parse(sceneMatch.Groups[5].Value, NumberStyles.HexNumber),
                    EventObjectIndex = int.Parse(sceneMatch.Groups[6].Value),
                };
                scenes.Add(currentScene);
                continue;
            }

            if (currentScene == null) continue;

            var eventMatch = EventRegex.Match(line);
            if (eventMatch.Success)
            {
                var evt = new EventObjectData
                {
                    Index = int.Parse(eventMatch.Groups[1].Value),
                    VanishTime = int.Parse(eventMatch.Groups[2].Value),
                    X = int.Parse(eventMatch.Groups[3].Value),
                    Y = int.Parse(eventMatch.Groups[4].Value),
                    Layer = int.Parse(eventMatch.Groups[5].Value),
                    TriggerScript = int.Parse(eventMatch.Groups[6].Value, NumberStyles.HexNumber),
                    AutoScript = int.Parse(eventMatch.Groups[7].Value, NumberStyles.HexNumber),
                    State = int.Parse(eventMatch.Groups[8].Value),
                    TriggerMode = int.Parse(eventMatch.Groups[9].Value),
                    SpriteId = int.Parse(eventMatch.Groups[10].Value),
                    FramesPerDirection = int.Parse(eventMatch.Groups[11].Value),
                    Direction = int.Parse(eventMatch.Groups[12].Value),
                    CurrentFrameId = int.Parse(eventMatch.Groups[13].Value),
                    TriggerIdleFrame = int.Parse(eventMatch.Groups[14].Value),
                    Name = eventMatch.Groups[18].Value.Trim(),
                };
                currentScene.EventObjects.Add(evt);
            }
        }

        return scenes;
    }

    public SceneData LoadScene(List<SceneData> allScenes, int sceneId)
    {
        if (sceneId < 1 || sceneId > allScenes.Count)
            return null;
        return allScenes[sceneId - 1];
    }
}
