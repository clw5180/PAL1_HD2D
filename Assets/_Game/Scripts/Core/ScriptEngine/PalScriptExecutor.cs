using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

/// <summary>
/// 移植自 SDLPal-CS TriggerScript.cs 的脚本执行器。
///
/// 【执行模型】
/// - Coroutine 驱动，每条指令可 yield return null 等待一帧
/// - 对话指令 yield 等待用户按键确认
/// - 场景切换/淡入淡出 yield 等待动画完成
///
/// 【Scene 1 用到的 opcode】
/// - 0x0000 End: 结束执行
/// - 0x0005 VideoUpdate: 刷新画面（延迟）
/// - 0x0015 RoleSetDirFrame: 设方向和帧
/// - 0x003B SetDlgCenter: 对话框居中
/// - 0x003D SetDlgLower: 对话框居下
/// - 0x0046 PartySetPos: 设置队伍位置
/// - 0x0059 SceneEnter: 切换场景
/// - 0x0065 HeroSetSprite: 设置角色精灵
/// - 0x0075 PartySetRole: 设队伍成员
/// - 0x008E VideoRestore: 还原屏幕/翻页
/// - 0xFFFF Dialogue: 显示对话文本
///
/// 【运行时依赖】
/// - ScriptExecutorContext: 提供游戏运行时状态访问（队伍、场景、精灵）
/// - IDialogueUI: 对话框 UI 接口
/// </summary>
public class PalScriptExecutor
{
    private CompiledScript _script;
    private int _pc;
    private bool _ended;
    private int _nextAddress;

    public bool IsRunning { get; private set; }
    public int CurrentAddress => _pc;

    public delegate IEnumerator OpcodeHandler(AsmInstruction inst);
    private Dictionary<ushort, OpcodeHandler> _handlers;

    private ScriptExecutorContext _ctx;

    public PalScriptExecutor(ScriptExecutorContext context)
    {
        _ctx = context;
        InitHandlers();
    }

    void InitHandlers()
    {
        _handlers = new Dictionary<ushort, OpcodeHandler>
        {
            { 0x0000, Op_End },
            { 0x0001, Op_ReplaceAndPause },
            { 0x0005, Op_VideoUpdate },
            { 0x0015, Op_RoleSetDirFrame },
            { 0x003B, Op_SetDlgCenter },
            { 0x003C, Op_SetDlgUpper },
            { 0x003D, Op_SetDlgLower },
            { 0x0046, Op_PartySetPos },
            { 0x0049, Op_EventSetState },
            { 0x0050, Op_FadeOut },
            { 0x0051, Op_FadeIn },
            { 0x0059, Op_SceneEnter },
            { 0x0065, Op_HeroSetSprite },
            { 0x0075, Op_PartySetRole },
            { 0x008E, Op_VideoRestore },
            { 0xFFFF, Op_Dialogue },
        };
    }

    public IEnumerator Run(CompiledScript script, int startAddress)
    {
        _script = script;
        _pc = startAddress;
        _ended = false;
        _nextAddress = 0;
        IsRunning = true;

        Debug.Log($"[Executor] Start running from address {startAddress}");

        while (_pc > 0 && _pc < _script.Instructions.Length && !_ended)
        {
            var inst = _script.Instructions[_pc];
            if (inst == null)
            {
                _pc++;
                continue;
            }

            string labelInfo = _script.AddressToLabel.TryGetValue(_pc, out string lbl) ? $" ({lbl})" : "";
            Debug.Log($"[Executor] [{_pc:D4}] 0x{inst.Opcode:X4}{labelInfo} args=[{string.Join(",", inst.IntArgs)}]");

            if (_handlers.TryGetValue(inst.Opcode, out var handler))
            {
                yield return handler(inst);
            }
            else
            {
                Debug.LogWarning($"[Executor] Unhandled opcode 0x{inst.Opcode:X4} at address {_pc}");
                _pc++;
            }
        }

        IsRunning = false;
        Debug.Log($"[Executor] Execution ended at address {_pc}");
    }

    IEnumerator Op_End(AsmInstruction inst)
    {
        _ended = true;
        yield break;
    }

    IEnumerator Op_ReplaceAndPause(AsmInstruction inst)
    {
        _ended = true;
        _nextAddress = _pc + 1;
        Debug.Log($"[Executor] ReplaceAndPause: will resume at {_nextAddress}");
        yield break;
    }

    IEnumerator Op_VideoUpdate(AsmInstruction inst)
    {
        int delay = inst.IntArgs[0];
        bool updateGestures = inst.IntArgs.Length > 1 && inst.IntArgs[1] != 0;

        if (delay > 0)
        {
            float seconds = delay * 0.06f;
            yield return new WaitForSeconds(seconds);
        }
        else
        {
            yield return null;
        }

        _pc++;
    }

    IEnumerator Op_RoleSetDirFrame(AsmInstruction inst)
    {
        int direction = inst.IntArgs[0];
        int frameId = inst.IntArgs[1];
        int roleId = inst.IntArgs.Length > 2 ? inst.IntArgs[2] : 0;

        _ctx?.SetRoleDirectionAndFrame(roleId, direction, frameId);
        _pc++;
        yield break;
    }

    IEnumerator Op_SetDlgCenter(AsmInstruction inst)
    {
        _ctx?.SetDialoguePosition(DialoguePosition.Center);
        _pc++;
        yield break;
    }

    IEnumerator Op_SetDlgUpper(AsmInstruction inst)
    {
        _ctx?.SetDialoguePosition(DialoguePosition.Upper);
        _pc++;
        yield break;
    }

    IEnumerator Op_SetDlgLower(AsmInstruction inst)
    {
        _ctx?.SetDialoguePosition(DialoguePosition.Lower);
        _pc++;
        yield break;
    }

    IEnumerator Op_PartySetPos(AsmInstruction inst)
    {
        int bx = inst.IntArgs[0];
        int by = inst.IntArgs[1];
        int bh = inst.IntArgs.Length > 2 ? inst.IntArgs[2] : 0;

        _ctx?.SetPartyPosition(bx, by, bh);
        _pc++;
        yield break;
    }

    IEnumerator Op_EventSetState(AsmInstruction inst)
    {
        int sceneId = inst.IntArgs[0];
        int eventId = inst.IntArgs[1];
        int stateCode = inst.IntArgs[2];

        _ctx?.SetEventState(sceneId, eventId, stateCode);
        _pc++;
        yield break;
    }

    IEnumerator Op_FadeOut(AsmInstruction inst)
    {
        int delay = inst.IntArgs[0];
        if (delay <= 0) delay = 1;

        Debug.Log($"[Executor] FadeOut(delay={delay})");

        if (_ctx != null)
        {
            yield return _ctx.FadeOut(delay);
        }
        else
        {
            yield return new WaitForSeconds(delay * 0.1f);
        }

        _pc++;
    }

    IEnumerator Op_FadeIn(AsmInstruction inst)
    {
        int delay = inst.IntArgs[0];
        if (delay <= 0) delay = 1;

        Debug.Log($"[Executor] FadeIn(delay={delay})");

        if (_ctx != null)
        {
            yield return _ctx.FadeIn(delay);
        }
        else
        {
            yield return new WaitForSeconds(delay * 0.1f);
        }

        _pc++;
    }

    IEnumerator Op_SceneEnter(AsmInstruction inst)
    {
        int sceneId = inst.IntArgs[0];

        Debug.Log($"[Executor] SceneEnter({sceneId}) - 切换场景");

        if (_ctx != null)
        {
            yield return _ctx.EnterScene(sceneId);
        }

        _ended = true;
    }

    IEnumerator Op_HeroSetSprite(AsmInstruction inst)
    {
        int heroId = inst.IntArgs[0];
        int spriteId = inst.IntArgs[1];
        bool applyNow = inst.IntArgs.Length > 2 && inst.IntArgs[2] != 0;

        _ctx?.SetHeroSprite(heroId, spriteId, applyNow);
        _pc++;
        yield break;
    }

    IEnumerator Op_PartySetRole(AsmInstruction inst)
    {
        string rolesStr = inst.StringArg;
        if (string.IsNullOrEmpty(rolesStr) && inst.RawArgs.Length > 0)
            rolesStr = inst.RawArgs[0];

        _ctx?.SetPartyRoles(rolesStr);
        _pc++;
        yield break;
    }

    IEnumerator Op_VideoRestore(AsmInstruction inst)
    {
        Debug.Log($"[Executor] VideoRestore - 还原屏幕/翻页");
        _ctx?.VideoRestore();
        _pc++;
        yield break;
    }

    IEnumerator Op_Dialogue(AsmInstruction inst)
    {
        string text = inst.StringArg;

        if (string.IsNullOrEmpty(text))
        {
            _pc++;
            yield break;
        }

        Debug.Log($"[Executor] Dialogue: \"{text}\"");

        if (_ctx != null)
        {
            yield return _ctx.ShowDialogue(text);
        }
        else
        {
            yield return new WaitForSeconds(0.5f);
        }

        _pc++;
    }
}

public enum DialoguePosition
{
    Center,
    Upper,
    Lower
}

/// <summary>
/// 脚本执行器上下文 —— 提供游戏运行时状态访问。
/// 由 SceneService / GameManager 实现。
/// </summary>
public abstract class ScriptExecutorContext : MonoBehaviour
{
    public abstract void SetPartyPosition(int bx, int by, int bh);
    public abstract void SetHeroSprite(int heroId, int spriteId, bool applyNow);
    public abstract void SetRoleDirectionAndFrame(int roleId, int direction, int frameId);
    public abstract void SetPartyRoles(string rolesStr);
    public abstract void SetEventState(int sceneId, int eventId, int stateCode);
    public abstract void SetDialoguePosition(DialoguePosition pos);
    public abstract IEnumerator ShowDialogue(string text);
    public abstract IEnumerator FadeOut(int delay);
    public abstract IEnumerator FadeIn(int delay);
    public abstract IEnumerator EnterScene(int sceneId);
    public abstract void VideoRestore();
}
