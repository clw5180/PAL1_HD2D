using System.Collections.Generic;
using System.Text;

public class AsmInstruction
{
    public ushort Opcode;
    public string[] RawArgs;
    public int[] IntArgs;
    public string StringArg;
    public string AddressArg;

    public AsmInstruction(ushort opcode, string[] rawArgs)
    {
        Opcode = opcode;
        RawArgs = rawArgs ?? new string[0];
        IntArgs = new int[RawArgs.Length];
    }

    public override string ToString()
    {
        var sb = new StringBuilder();
        sb.Append($"0x{Opcode:X4}");
        for (int i = 0; i < IntArgs.Length; i++)
            sb.Append($" {IntArgs[i]}");
        if (!string.IsNullOrEmpty(StringArg))
            sb.Append($" \"{StringArg}\"");
        return sb.ToString();
    }
}

public class ScriptBlock
{
    public string Label;
    public int StartAddress;

    public ScriptBlock(string label, int startAddress)
    {
        Label = label;
        StartAddress = startAddress;
    }
}

public class CompiledScript
{
    public AsmInstruction[] Instructions;
    public Dictionary<string, int> LabelToAddress;
    public Dictionary<int, string> AddressToLabel;

    public CompiledScript(AsmInstruction[] instructions, Dictionary<string, int> labelToAddress)
    {
        Instructions = instructions;
        LabelToAddress = labelToAddress;
        AddressToLabel = new Dictionary<int, string>();
        foreach (var kv in labelToAddress)
            AddressToLabel[kv.Value] = kv.Key;
    }

    public int GetAddress(string label)
    {
        if (string.IsNullOrEmpty(label))
            return 0;
        if (LabelToAddress.TryGetValue(label, out int addr))
            return addr;
        return 0;
    }
}
