using System;
using System.Collections.Generic;
using System.IO;
using UnityEngine;

/// <summary>
/// 解析 Library.ts 和 Enum.ts，建立：
///   - 函数名 → opcode 映射（funcName → ushort）
///   - 枚举类型 → (枚举名 → int) 映射
///   - 函数参数类型表（funcName → string[]）
///   - 函数多 opcode 分支表（AssemblyCases）
///
/// 对应 SDLPal-CS 的 PalMessage.ReadFunction / ReadEnum / ReadType。
///
/// Library.ts 格式说明：
///   每个函数前有注释行 "* -  0xXXXX" 或 "* -  0xXXXX; 0xXXXX"（多 opcode）
///   然后是 "function funcName(args): void;" 声明行
///   可能紧跟一行 "// 0[val=0xXXXX, other=0xXXXX]" 描述 AssemblyCase
///
/// Enum.ts 格式：
///   "enum EnumName {" 开头，条目 "Key = value,"，"}" 结尾
/// </summary>
public class PalScriptMessageParser
{
    private Dictionary<string, ushort> _funcToOpcode = new Dictionary<string, ushort>();
    private Dictionary<string, string[]> _funcArgTypes = new Dictionary<string, string[]>();
    private Dictionary<string, bool[]> _funcArgCanOmit = new Dictionary<string, bool[]>();
    private Dictionary<string, AssemblyCaseData> _funcAssemblyCases = new Dictionary<string, AssemblyCaseData>();
    private Dictionary<string, Dictionary<string, int>> _enumForward = new Dictionary<string, Dictionary<string, int>>();
    private Dictionary<string, Dictionary<int, string>> _enumReverse = new Dictionary<string, Dictionary<int, string>>();

    public bool IsLoaded { get; private set; }

    public class AssemblyCaseData
    {
        public int ArgId;
        public Dictionary<int, ushort> Forwards = new Dictionary<int, ushort>();
        public const int OtherCode = 0x10000;
    }

    public void LoadAll(string scriptIncludeDir)
    {
        string enumPath = Path.Combine(scriptIncludeDir, "Enum.ts");
        string libPath = Path.Combine(scriptIncludeDir, "Library.ts");

        if (!File.Exists(enumPath))
        {
            Debug.LogError($"[PalScriptMessageParser] Enum.ts not found: {enumPath}");
            return;
        }
        if (!File.Exists(libPath))
        {
            Debug.LogError($"[PalScriptMessageParser] Library.ts not found: {libPath}");
            return;
        }

        ReadEnum(enumPath);
        ReadFunction(libPath);
        IsLoaded = true;

        Debug.Log($"[PalScriptMessageParser] Loaded {_funcToOpcode.Count} functions, {_enumForward.Count} enum types");
    }

    void ReadEnum(string filePath)
    {
        bool isInEnum = false;
        string enumName = null;
        int currentValue = 0;
        Dictionary<string, int> forward = null;
        Dictionary<int, string> reverse = null;

        foreach (var rawLine in File.ReadLines(filePath))
        {
            var line = rawLine.Trim();
            if (string.IsNullOrEmpty(line))
                continue;

            if (!isInEnum)
            {
                if (line.StartsWith("enum ") && line.EndsWith("{"))
                {
                    enumName = line.Substring(5, line.Length - 6).Trim();
                    isInEnum = true;
                    currentValue = 0;
                    forward = new Dictionary<string, int>();
                    reverse = new Dictionary<int, string>();
                }
            }
            else
            {
                if (line.Contains('}'))
                {
                    isInEnum = false;
                    if (enumName != null)
                    {
                        _enumForward[enumName] = forward;
                        _enumReverse[enumName] = reverse;
                    }
                }
                else if (line.Contains(','))
                {
                    int commentIdx = line.IndexOf("//");
                    if (commentIdx >= 0)
                        line = line.Substring(0, commentIdx).TrimEnd();

                    if (string.IsNullOrWhiteSpace(line))
                        continue;

                    string keyName;
                    if (line.Contains('='))
                    {
                        int eqIdx = line.IndexOf('=');
                        keyName = line.Substring(0, eqIdx).Trim();
                        string valStr = line.Substring(eqIdx + 1).TrimEnd(',').Trim();

                        if (valStr.StartsWith("\""))
                            continue;

                        currentValue = ParseInt(valStr);
                    }
                    else
                    {
                        keyName = line.TrimEnd(',').Trim();
                    }

                    if (string.IsNullOrEmpty(keyName))
                        continue;

                    forward[keyName] = currentValue;
                    reverse[currentValue] = keyName;
                    currentValue++;
                }
            }
        }
    }

    void ReadFunction(string filePath)
    {
        ushort[] pendingCommands = null;
        string currentFuncName = null;
        string[] currentArgTypes = null;
        bool[] currentArgCanOmit = null;

        foreach (var rawLine in File.ReadLines(filePath))
        {
            var line = rawLine.Trim();

            if (string.IsNullOrEmpty(line))
                continue;

            if (line.StartsWith("* -  0x"))
            {
                int hexStart = line.IndexOf("0x");
                var cmdPart = line.Substring(hexStart);
                var parts = cmdPart.Split(';');
                pendingCommands = new ushort[parts.Length];
                for (int i = 0; i < parts.Length; i++)
                    pendingCommands[i] = (ushort)ParseUInt16(parts[i].Trim());
                currentFuncName = null;
                continue;
            }

            if (line.StartsWith("function ") && line.EndsWith(": void;"))
            {
                if (pendingCommands == null)
                    continue;
                int parenOpen = line.IndexOf('(');
                int parenClose = line.IndexOf(')');
                currentFuncName = line.Substring(9, parenOpen - 9).Trim();

                _funcToOpcode[currentFuncName] = pendingCommands[0];

                string argSection = line.Substring(parenOpen + 1, parenClose - parenOpen - 1).Trim();
                if (!string.IsNullOrEmpty(argSection))
                {
                    var argParts = argSection.Split(',');
                    currentArgTypes = new string[argParts.Length];
                    currentArgCanOmit = new bool[argParts.Length];
                    for (int i = 0; i < argParts.Length; i++)
                    {
                        var ap = argParts[i].Trim();
                        currentArgCanOmit[i] = ap.Contains('?');
                        int colonIdx = ap.IndexOf(':');
                        if (colonIdx >= 0)
                            currentArgTypes[i] = ap.Substring(colonIdx + 1).Trim();
                        else
                            currentArgTypes[i] = "int";
                    }
                    _funcArgTypes[currentFuncName] = currentArgTypes;
                    _funcArgCanOmit[currentFuncName] = currentArgCanOmit;
                }
                else
                {
                    _funcArgTypes[currentFuncName] = new string[0];
                    _funcArgCanOmit[currentFuncName] = new bool[0];
                }

                pendingCommands = null;
                continue;
            }
            if (line.StartsWith("//") && currentFuncName != null)
            {
                var commentContent = line.Substring(2).Trim();

                if (commentContent.Contains('[') && commentContent.Contains(']'))
                {
                    int bracketOpen = commentContent.IndexOf('[');
                    int bracketClose = commentContent.IndexOf(']');
                    string argIdStr = commentContent.Substring(0, bracketOpen).Trim();
                    string casesStr = commentContent.Substring(bracketOpen + 1, bracketClose - bracketOpen - 1);

                    if (int.TryParse(argIdStr, out int argId))
                    {
                        var asmCase = new AssemblyCaseData { ArgId = argId };
                        foreach (var kv in casesStr.Split(','))
                        {
                            var kvTrimmed = kv.Trim();
                            int eqIdx = kvTrimmed.IndexOf('=');
                            if (eqIdx < 0) continue;
                            string keyStr = kvTrimmed.Substring(0, eqIdx).Trim();
                            string valStr = kvTrimmed.Substring(eqIdx + 1).Trim();
                            ushort cmd = (ushort)ParseUInt16(valStr);
                            if (keyStr == "other")
                                asmCase.Forwards[AssemblyCaseData.OtherCode] = cmd;
                            else if (TryParseIntLocal(keyStr, out int keyInt))
                                asmCase.Forwards[keyInt] = cmd;
                        }
                        _funcAssemblyCases[currentFuncName] = asmCase;
                    }
                }
            }
        }
    }

    public bool TryGetOpcode(string funcName, out ushort opcode) =>
        _funcToOpcode.TryGetValue(funcName, out opcode);

    public ushort GetOpcode(string funcName)
    {
        if (_funcToOpcode.TryGetValue(funcName, out ushort op))
            return op;
        Debug.LogWarning($"[PalScriptMessageParser] Unknown function: '{funcName}'");
        return 0xFFFF;
    }

    public bool TryGetEnumValue(string enumType, string entryName, out int value)
    {
        value = 0;
        return _enumForward.TryGetValue(enumType, out var dict) && dict.TryGetValue(entryName, out value);
    }

    public string[] GetArgTypes(string funcName)
    {
        _funcArgTypes.TryGetValue(funcName, out var types);
        return types ?? new string[0];
    }

    public bool[] GetArgCanOmit(string funcName)
    {
        _funcArgCanOmit.TryGetValue(funcName, out var arr);
        return arr ?? new bool[0];
    }

    public bool TryGetAssemblyCase(string funcName, out AssemblyCaseData asmCase)
    {
        return _funcAssemblyCases.TryGetValue(funcName, out asmCase);
    }

    public IReadOnlyDictionary<string, ushort> FuncToOpcode => _funcToOpcode;
    public IReadOnlyDictionary<string, Dictionary<string, int>> EnumForward => _enumForward;

    static int ParseInt(string s)
    {
        s = s.Trim();
        if (s.StartsWith("0x") || s.StartsWith("0X"))
            return (int)Convert.ToUInt32(s, 16);
        if (s.StartsWith("-0x") || s.StartsWith("-0X"))
            return -(int)Convert.ToUInt32(s.Substring(1), 16);
        if (int.TryParse(s, out int v)) return v;
        return 0;
    }

    static bool TryParseIntLocal(string s, out int value)
    {
        value = 0;
        if (string.IsNullOrEmpty(s)) return false;
        s = s.Trim();
        if (s.StartsWith("0x") || s.StartsWith("0X"))
        {
            try { value = (int)Convert.ToUInt32(s, 16); return true; }
            catch { return false; }
        }
        if (s.StartsWith("-0x") || s.StartsWith("-0X"))
        {
            try { value = -(int)Convert.ToUInt32(s.Substring(1), 16); return true; }
            catch { return false; }
        }
        return int.TryParse(s, out value);
    }

    static int ParseUInt16(string s)
    {
        s = s.Trim();
        if (s.StartsWith("0x") || s.StartsWith("0X"))
            return (int)Convert.ToUInt16(s, 16);
        if (ushort.TryParse(s, out ushort v)) return v;
        return 0;
    }
}
