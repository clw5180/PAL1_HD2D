['Event_00196_00002_Auto'];
NpcMoveToBlock(34, 42, 1, 3);

['Event_00196_00001_Auto'];
NpcMoveToBlockMutexLock(34, 43, 1, 2);
NpcSetDirFrame(3, 0);
NpcSetFrame(12);
WaitEventAutoScriptRun(3, false, false);
EventSetAutoScript(196, 4, "Event_00021_00024_Auto");
WaitEventAutoScriptRun(12, false, false);
NpcSetDirFrame(3, 0);
WaitEventAutoScriptRun(3, false, false);
NpcMoveToBlockMutexLock(34, 43, 0, 2);
NpcMoveToBlockMutexLock(33, 43, 1, 2);
NpcSetDirFrame(1, 0);

['Scene_00196_Enter'];
SetPaletteTime(0);
PartySetPos(33, 43, 0);
VideoFadeAndUpdate(4);
EventSetState(3339, 1, 0);
TogglePaletteTime(false);
WaitEventAutoScriptRun(6, false, false);
SetDlgUpper(0, 0, false);
//丫鬟：
//$04小姐！奴婢四处都找过了
//都没看见赵姑娘~50
VideoUpdate(0, false);
EventSetDirFrame(196, 1, 2, 0);
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//林月如：
//$03叫所有的人都去找，城里找
//不到就到城外去找，翻遍全苏
//州也要把人找回来！~70
SceneEnter(197);

