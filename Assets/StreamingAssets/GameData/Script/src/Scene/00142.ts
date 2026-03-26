['Event_00142_00001_Auto'];
NpcMoveToBlockMutexLock(43, 25, 0, 2);

['Event_00142_00002_Auto'];
EventAnimate(Direction.Current);
EventAnimate(Direction.Current);
WaitEventAutoScriptRun(5, false, false);
EventAnimate(Direction.Current);
WaitEventAutoScriptRun(2, false, false);
ReplaceAndPauseWithNop("Event_00142_00002_Auto", 0);

['Scene_00142_Enter'];
SetPalette(Palette.忆往昔_日夜);
ViewportMove(42, 24, -1);
WaitEventAutoScriptRun(36, false, false);
EventSetDirFrame(142, 1, 1, 0);
WaitEventAutoScriptRun(4, false, false);
SetDlgLower(0, 0, false);
//刘晋元：
//$07．．？
//有只蝴蝶黏在蜘蛛网上了~30
WaitEventAutoScriptRun(4, false, false);
EventSetAutoScript(142, 1, "@56AF");
WaitEventAutoScriptRun(8, false, false);
//刘晋元：
//哗．．好美的蝴蝶~30
VideoRestore();
//别怕！　我来救你了~40
EventSetState(2381, 0, 0);
WaitEventAutoScriptRun(5, false, false);
EventWalkOneStep(142, 3, 8, 4);
WaitEventAutoScriptRun(3, false, false);
EventWalkOneStep(142, 3, -4, -2);
WaitEventAutoScriptRun(0, false, false);
EventModifyPos(142, 1, 8, 4);
EventSetDirFrame(142, 1, 1, 1);
WaitEventAutoScriptRun(0, false, false);
EventModifyPos(142, 1, 8, 4);
EventSetDirFrame(142, 1, 1, 0);
WaitEventAutoScriptRun(0, false, false);
//刘晋元：
//哎呦～　好痛！
//这蜘蛛会咬人呐？~40
WaitEventAutoScriptRun(8, false, false);
EventSetDirFrame(142, 1, 0, 0);
WaitEventAutoScriptRun(0, false, false);
EventSetDirFrame(142, 1, 3, 0);
WaitEventAutoScriptRun(2, false, false);
EventSetState(2381, 1, 0);
EventModifyPos(142, 2, 48, 8);
EventSetAutoScript(142, 2, "@56B8");
WaitEventAutoScriptRun(36, false, false);
SceneEnter(141);
FadeOut(2);
ReplaceAndPause();

