['Event_00151_00002_Auto'];
EventWalkOneStep(-1, -1, 8, -4);
GotoWithNop("Event_00151_00002_Auto", 0);

['Event_00151_00003_Auto'];
EventModifyPos(-1, -1, 6, 0);
EventModifyPos(-1, -1, 8, -1);
EventModifyPos(-1, -1, 10, -2);
EventModifyPos(-1, -1, 12, -3);
['@61A3'];
EventModifyPos(-1, -1, 12, -4);
GotoWithNop("@61A3", 0);

['Scene_00151_Enter'];
VideoShake(0, 0);
PartySetPos(35, 33, 0);
WaitEventAutoScriptRun(15, false, false);
EventSetAutoScript(151, 2, "");
WaitEventAutoScriptRun(4, false, false);
EventSetDirFrame(151, 2, 1, 0);
VideoUpdate(0, false);
SetDlgLower(63, 0, false);
//剑圣：
//$03你怎么不阻止他们呢！？~60
WaitEventAutoScriptRun(4, false, false);
EventSetDirFrame(151, 1, 3, 0);
VideoUpdate(0, false);
SetDlgUpper(37, 0, false);
//$05师兄．．你不觉得
//这是天意吗？~70
VideoUpdate(0, false);
SetDlgLower(63, 0, false);
//剑圣：
//$02岂有此理！~60
EventSetDirFrame(151, 2, 3, 0);
WaitEventAutoScriptRun(4, false, false);
EventSetState(2466, 0, 0);
EventSetState(2467, 1, 0);
WaitEventAutoScriptRun(8, false, false);
EventSetDirFrame(151, 1, 2, 0);
WaitEventAutoScriptRun(12, false, false);
SetDlgLower(37, 0, false);
//$05唉．．．．~65$02
FadeOut(0);
VideoShake(99, 0);
SetRng(4);
PlayRng(0, 21, 6);
VideoShake(0, 0);
PlayRng(22, 0, 9);
MusicStop(1);
FadeOut(3);
SceneEnter(152);

