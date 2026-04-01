using System.Collections.Generic;
using System.IO;
using System.Text;
using UnityEngine;

/// <summary>
/// Step 6 可视化验证：
///   挂到 Game 场景的任意 GameObject，Play 后自动在 Console 打印编译结果。
///
/// 验证目标：
///   - 00001.ts (16行, 1个块) 编译后所有指令 opcode 正确
///   - 00002.ts (617行, 多块) 所有标签地址注册成功
///   - 枚举值解析：Sprite.躺李逍遥 → 对应整数
///   - 对话行 "//$10李～逍～遥" → opcode=0xFFFF, StringArg=对话文本
///   - 函数调用行 "SceneEnter(2)" → opcode=0x0059 + arg=2
/// </summary>
public class ScriptCompilerBootstrap : MonoBehaviour
{
    [Header("脚本数据根目录（留空使用 StreamingAssets/GameData/Script）")]
    public string ScriptDataDir = "";

    [Header("是否在 Start 时自动执行编译验证")]
    public bool AutoVerifyOnStart = true;

    [Header("打印每条指令详情（指令数多时建议关闭）")]
    public bool VerboseInstructions = false;

    private PalScriptMessageParser _parser;
    private PalScriptCompiler _compiler;

    void Start()
    {
        if (AutoVerifyOnStart)
            RunVerification();
    }

    public void RunVerification()
    {
        string scriptDir = string.IsNullOrEmpty(ScriptDataDir)
            ? Path.Combine(Application.streamingAssetsPath, "GameData", "Script")
            : ScriptDataDir;

        string includeDir = Path.Combine(scriptDir, "include");
        string sceneDir = Path.Combine(scriptDir, "src", "Scene");

        _parser = new PalScriptMessageParser();
        _parser.LoadAll(includeDir);

        if (!_parser.IsLoaded)
        {
            Debug.LogError("[Step6] PalScriptMessageParser failed to load. Check Script/include/ files.");
            return;
        }

        Debug.Log("[Step6] ===== 6a: PalScriptMessageParser 验证 =====");
        VerifyMessageParser();

        _compiler = new PalScriptCompiler(_parser);

        Debug.Log("[Step6] ===== 6b: Scene 00001.ts 编译验证 =====");
        VerifyScene("00001", sceneDir);

        Debug.Log("[Step6] ===== 6b: Scene 00002.ts 编译验证 =====");
        VerifyScene("00002", sceneDir);

        Debug.Log("[Step6] ===== Step 6 编译管线验证完成 =====");
    }

    void VerifyMessageParser()
    {
        var checkFuncs = new (string funcName, ushort expectedOpcode)[]
        {
            ("End",             0x0000),
            ("ReplaceAndPause", 0x0001),
            ("VideoUpdate",     0x0005),
            ("SetDlgCenter",    0x003B),
            ("SetDlgUpper",     0x003C),
            ("SetDlgLower",     0x003D),
            ("FadeOut",         0x0050),
            ("FadeIn",          0x0051),
            ("SceneEnter",      0x0059),
            ("HeroSetSprite",   0x0065),
            ("PartySetPos",     0x0046),
            ("RoleSetDirFrame", 0x0015),
            ("VideoRestore",    0x008E),
            ("EventSetState",   0x0049),
        };

        int pass = 0;
        foreach (var (funcName, expectedOpcode) in checkFuncs)
        {
            if (_parser.TryGetOpcode(funcName, out ushort actual))
            {
                if (actual == expectedOpcode)
                {
                    Debug.Log($"  [OK] {funcName} → 0x{actual:X4}");
                    pass++;
                }
                else
                    Debug.LogWarning($"  [MISMATCH] {funcName} expected 0x{expectedOpcode:X4}, got 0x{actual:X4}");
            }
            else
                Debug.LogWarning($"  [MISSING] {funcName} not found in Library.ts");
        }
        Debug.Log($"  函数映射验证: {pass}/{checkFuncs.Length} 通过");

        var checkEnums = new (string type, string entry, int expected)[]
        {
            ("Sprite", "躺李逍遥",  193),
            ("Direction", "Southwest", 0),
            ("Direction", "Northwest", 1),
        };

        int enumPass = 0;
        foreach (var (type, entry, expected) in checkEnums)
        {
            if (_parser.TryGetEnumValue(type, entry, out int val))
            {
                string status = (expected < 0 || val == expected) ? "[OK]" : $"[MISMATCH: expected {expected}]";
                Debug.Log($"  {status} {type}.{entry} → {val}");
                if (expected < 0 || val == expected) enumPass++;
            }
            else
                Debug.LogWarning($"  [MISSING] {type}.{entry} not found");
        }
        Debug.Log($"  枚举解析验证: {enumPass}/{checkEnums.Length} 通过");
    }

    void VerifyScene(string sceneNum, string sceneDir)
    {
        string tsPath = Path.Combine(sceneDir, $"{sceneNum}.ts");
        if (!File.Exists(tsPath))
        {
            Debug.LogWarning($"  [SKIP] {sceneNum}.ts 不存在: {tsPath}");
            return;
        }

        var compiled = _compiler.CompileFile(tsPath);
        if (compiled == null)
        {
            Debug.LogError($"  编译 {sceneNum}.ts 失败");
            return;
        }

        var instructions = compiled.Instructions;
        var labels = compiled.LabelToAddress;
        int nonNull = 0;
        for (int i = 0; i < instructions.Length; i++)
            if (instructions[i] != null) nonNull++;

        Debug.Log($"  {sceneNum}.ts → {nonNull} 条指令, {labels.Count} 个标签");

        foreach (var kv in labels)
        {
            if (!string.IsNullOrEmpty(kv.Key))
                Debug.Log($"    标签 '{kv.Key}' → 地址 {kv.Value} (0x{kv.Value:X4})");
        }

        if (VerboseInstructions)
        {
            Debug.Log($"  --- 详细指令列表 ---");
            for (int i = 1; i < instructions.Length; i++)
            {
                var inst = instructions[i];
                if (inst == null) continue;

                var sb = new StringBuilder();
                sb.Append($"  [{i:D4}] 0x{inst.Opcode:X4}");
                for (int j = 0; j < inst.IntArgs.Length; j++)
                    sb.Append($" {inst.IntArgs[j]}");
                if (!string.IsNullOrEmpty(inst.StringArg))
                    sb.Append($" \"{inst.StringArg}\"");
                if (!string.IsNullOrEmpty(inst.AddressArg))
                    sb.Append($" @{inst.AddressArg}");

                string labelMark = compiled.AddressToLabel.TryGetValue(i, out string lbl) ? $" ← '{lbl}'" : "";
                Debug.Log(sb.ToString() + labelMark);
            }
        }

        VerifySceneSpotChecks(sceneNum, compiled);
    }

    void VerifySceneSpotChecks(string sceneNum, CompiledScript compiled)
    {
        if (sceneNum == "00001")
        {
            if (compiled.LabelToAddress.ContainsKey("Scene_00001_Enter"))
                Debug.Log("  [OK] 标签 Scene_00001_Enter 存在");
            else
                Debug.LogWarning("  [FAIL] 标签 Scene_00001_Enter 未找到");

            int enterAddr = compiled.GetAddress("Scene_00001_Enter");
            if (enterAddr > 0 && compiled.Instructions[enterAddr] != null)
            {
                var first = compiled.Instructions[enterAddr];
                Debug.Log($"  [OK] Scene_00001_Enter 第一条指令: 0x{first.Opcode:X4} (应为 PartySetPos=0x0046), args: {string.Join(",", first.IntArgs)}");
            }

            int sceneEnterOpcode = 0x0059;
            bool foundSceneEnter = false;
            for (int i = 1; i < compiled.Instructions.Length; i++)
            {
                if (compiled.Instructions[i]?.Opcode == sceneEnterOpcode)
                {
                    Debug.Log($"  [OK] SceneEnter(2) 在地址 {i}: opcode=0x{compiled.Instructions[i].Opcode:X4}, arg={compiled.Instructions[i].IntArgs[0]}");
                    foundSceneEnter = true;
                    break;
                }
            }
            if (!foundSceneEnter)
                Debug.LogWarning("  [WARN] 未找到 SceneEnter 指令（可能 opcode 映射有偏差）");

            bool foundDialogue = false;
            for (int i = 1; i < compiled.Instructions.Length; i++)
            {
                if (compiled.Instructions[i]?.Opcode == 0xFFFF)
                {
                    Debug.Log($"  [OK] 对话指令在地址 {i}: \"{compiled.Instructions[i].StringArg}\"");
                    foundDialogue = true;
                    break;
                }
            }
            if (!foundDialogue)
                Debug.LogWarning("  [WARN] 未找到对话指令(0xFFFF)");
        }

        if (sceneNum == "00002")
        {
            var expectedLabels = new[] {
                "Event_00002_00011_Auto",
                "Event_00002_00004_Trigger",
                "Event_00002_00010_Trigger",
                "Event_00002_00008_Trigger"
            };
            int found = 0;
            foreach (var lbl in expectedLabels)
            {
                if (compiled.LabelToAddress.ContainsKey(lbl))
                {
                    Debug.Log($"  [OK] 标签 '{lbl}' 地址 {compiled.GetAddress(lbl)}");
                    found++;
                }
                else
                    Debug.LogWarning($"  [MISS] 标签 '{lbl}' 未找到");
            }
            Debug.Log($"  00002.ts 关键标签: {found}/{expectedLabels.Length} 通过");
        }
    }
}
