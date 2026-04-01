using System;
using System.Collections.Generic;
using System.IO;
using System.Text;
using UnityEngine;

/// <summary>
/// 移植自 SDLPal-CS Script.cs 的 PreprocessingTypeScript + CompileAsm。
///
/// 编译管线：
///   .ts 文件
///     ↓  PreprocessTypeScript()
///   FunctionEntry[] (函数名 + 原始参数字符串[])
///     ↓  CompileAsm()
///   AsmInstruction[]  + 标签地址字典
///
/// .ts 文件四种行格式：
///   1. //对话文本      → opcode=0xFFFF, args=[text]
///   2. FuncName(args); → 函数调用（枚举值解析、地址引用收集）
///   3. ['标签名'];     → 注册地址标签（address = 当前指令索引 + 1）
///   4. 空行            → opcode=0x0000 (End/块分隔符)
///
/// 地址引用（"@XXXX" 格式的字符串参数）在 CompileAsm 时转换为整数地址。
/// </summary>
public class PalScriptCompiler
{
    private struct FunctionEntry
    {
        public string Name;
        public string[] Args;
    }

    private PalScriptMessageParser _parser;
    private List<FunctionEntry> _entries;
    private Dictionary<string, int> _labelToAddress;
    private int _addressCounter;

    public PalScriptCompiler(PalScriptMessageParser parser)
    {
        _parser = parser;
    }

    public CompiledScript CompileFile(string tsFilePath)
    {
        if (!File.Exists(tsFilePath))
        {
            Debug.LogError($"[PalScriptCompiler] File not found: {tsFilePath}");
            return null;
        }

        _entries = new List<FunctionEntry>();
        _labelToAddress = new Dictionary<string, int>();
        _addressCounter = 1;

        _labelToAddress[""] = 0;

        PreprocessTypeScript(tsFilePath);
        var instructions = CompileAsm();

        return new CompiledScript(instructions, _labelToAddress);
    }

    public CompiledScript CompileFiles(IEnumerable<string> tsFilePaths)
    {
        _entries = new List<FunctionEntry>();
        _labelToAddress = new Dictionary<string, int>();
        _addressCounter = 1;

        _labelToAddress[""] = 0;

        foreach (var path in tsFilePaths)
        {
            if (!File.Exists(path))
            {
                Debug.LogWarning($"[PalScriptCompiler] Skipping missing file: {path}");
                continue;
            }
            PreprocessTypeScript(path);
        }

        var instructions = CompileAsm();
        return new CompiledScript(instructions, _labelToAddress);
    }

    void PreprocessTypeScript(string filePath)
    {
        int lineId = 0;
        foreach (var rawLine in File.ReadLines(filePath, Encoding.UTF8))
        {
            lineId++;
            var line = rawLine.Trim();

            string funcName = null;
            var args = new List<string>();

            if (line.StartsWith("//"))
            {
                var message = line.Substring(2);
                funcName = GetDialogueFuncName();
                args.Add(message);
            }
            else if (line.Contains('(') && line.EndsWith(");") && line.IndexOf('(') < line.LastIndexOf(')'))
            {
                int parenOpen = line.IndexOf('(');
                funcName = line.Substring(0, parenOpen).Trim();

                int parenClose = line.LastIndexOf(')');
                string argsStr = line.Substring(parenOpen + 1, parenClose - parenOpen - 1).Trim();

                if (!string.IsNullOrEmpty(argsStr))
                {
                    foreach (var rawArg in SplitArgs(argsStr))
                    {
                        var arg = rawArg.Trim();

                        if (arg.StartsWith("\"") && arg.EndsWith("\""))
                        {
                            args.Add(arg.Substring(1, arg.Length - 2));
                        }
                        else if (arg.Contains('.'))
                        {
                            int dotIdx = arg.IndexOf('.');
                            string enumType = arg.Substring(0, dotIdx);
                            string entryName = arg.Substring(dotIdx + 1);
                            if (_parser.TryGetEnumValue(enumType, entryName, out int enumVal))
                                args.Add(enumVal.ToString());
                            else
                            {
                                Debug.LogWarning($"[PalScriptCompiler] Unknown enum '{enumType}.{entryName}' at {Path.GetFileName(filePath)}:{lineId}");
                                args.Add("0");
                            }
                        }
                        else
                        {
                            args.Add(arg);
                        }
                    }
                }
            }
            else if (line.StartsWith("['") && line.EndsWith("'];"))
            {
                int begin = line.IndexOf("['") + 2;
                int end = line.IndexOf("']");
                string label = line.Substring(begin, end - begin).Trim();
                _labelToAddress[label] = _addressCounter;
                continue;
            }
            else if (line == "")
            {
                funcName = GetEndFuncName();
            }
            else if (string.IsNullOrWhiteSpace(line))
            {
                continue;
            }
            else
            {
                Debug.LogWarning($"[PalScriptCompiler] Unrecognized line at {Path.GetFileName(filePath)}:{lineId}: '{line}'");
                continue;
            }

            if (funcName == null)
                continue;

            _entries.Add(new FunctionEntry { Name = funcName, Args = args.ToArray() });
            _addressCounter++;

            if (_addressCounter >= 0xFFFF)
            {
                Debug.LogError($"[PalScriptCompiler] Address overflow at {Path.GetFileName(filePath)}:{lineId}");
                break;
            }
        }

        _entries.Add(new FunctionEntry { Name = GetEndFuncName(), Args = new string[0] });
        _addressCounter++;
    }

    AsmInstruction[] CompileAsm()
    {
        int count = _entries.Count + 1;
        var instructions = new AsmInstruction[count];

        for (int i = 0; i < _entries.Count; i++)
        {
            var entry = _entries[i];
            int addr = i + 1;

            ushort opcode;
            if (string.IsNullOrEmpty(entry.Name))
                opcode = 0x0000;
            else if (entry.Name == GetDialogueFuncName())
                opcode = 0xFFFF;
            else if (entry.Name == GetEndFuncName())
                opcode = 0x0000;
            else
            {
                if (!_parser.TryGetOpcode(entry.Name, out opcode))
                {
                    Debug.LogWarning($"[PalScriptCompiler] Addr {addr}: Unknown func '{entry.Name}', using 0x0000");
                    opcode = 0x0000;
                }
            }

            if (_parser.TryGetAssemblyCase(entry.Name, out var asmCase) && entry.Args.Length > asmCase.ArgId)
            {
                if (int.TryParse(entry.Args[asmCase.ArgId], out int argKeyVal))
                {
                    if (asmCase.Forwards.TryGetValue(argKeyVal, out ushort caseCmd))
                        opcode = caseCmd;
                    else if (asmCase.Forwards.TryGetValue(PalScriptMessageParser.AssemblyCaseData.OtherCode, out ushort otherCmd))
                        opcode = otherCmd;
                }
            }

            var inst = new AsmInstruction(opcode, entry.Args);

            for (int argIdx = 0; argIdx < entry.Args.Length; argIdx++)
            {
                var rawArg = entry.Args[argIdx];

                if (string.IsNullOrEmpty(rawArg))
                {
                    inst.IntArgs[argIdx] = 0;
                    continue;
                }

                if (rawArg == "true" || rawArg == "false")
                {
                    inst.IntArgs[argIdx] = rawArg == "true" ? 1 : 0;
                    continue;
                }

                if (_labelToAddress.TryGetValue(rawArg, out int labelAddr))
                {
                    inst.IntArgs[argIdx] = labelAddr;
                    inst.AddressArg = rawArg;
                    continue;
                }

                if (rawArg.StartsWith("@") && rawArg.Length > 1)
                {
                    if (TryParseInt("0x" + rawArg.Substring(1), out int absAddr))
                    {
                        inst.IntArgs[argIdx] = absAddr;
                        inst.AddressArg = rawArg;
                        continue;
                    }
                }

                if (TryParseInt(rawArg, out int intVal))
                {
                    inst.IntArgs[argIdx] = intVal;
                    continue;
                }

                if (opcode == 0xFFFF)
                {
                    inst.StringArg = rawArg;
                    inst.IntArgs[argIdx] = 0;
                    continue;
                }

                Debug.LogWarning($"[PalScriptCompiler] Addr {addr}: Cannot parse arg[{argIdx}]='{rawArg}' for func '{entry.Name}'");
                inst.IntArgs[argIdx] = 0;
            }

            instructions[addr] = inst;
        }

        if (instructions[0] == null)
            instructions[0] = new AsmInstruction(0x0000, new string[0]);

        return instructions;
    }

    string GetDialogueFuncName() => "__dialogue__";
    string GetEndFuncName() => "__end__";

    static IEnumerable<string> SplitArgs(string argsStr)
    {
        var args = new List<string>();
        int depth = 0;
        bool inString = false;
        int start = 0;

        for (int i = 0; i < argsStr.Length; i++)
        {
            char c = argsStr[i];
            if (c == '"') inString = !inString;
            if (!inString)
            {
                if (c == '(') depth++;
                else if (c == ')') depth--;
                else if (c == ',' && depth == 0)
                {
                    args.Add(argsStr.Substring(start, i - start));
                    start = i + 1;
                }
            }
        }
        args.Add(argsStr.Substring(start));
        return args;
    }

    static bool TryParseInt(string s, out int value)
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
}
