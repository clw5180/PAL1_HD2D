['Event_00197_00003_Auto'];
NpcMoveToBlockMutexLock(27, 63, 1, 2);

['Scene_00197_Enter'];
PartySetPos(28, 64, 0);
FadeToScene(4, -1);
SetDlgUpper(0, 0, false);
//李逍遥：
//$04要不要我送你回家？~50
WaitEventAutoScriptRun(7, false, false);
EventSetDirFrame(197, 1, 0, 0);
WaitEventAutoScriptRun(2, false, false);
SetDlgLower(0, 0, false);
//林月如：
//$03少假惺惺～　看剑！~50
WaitEventAutoScriptRun(0, false, false);
EventSetDirFrame(197, 1, 0, 1);
VideoUpdate(0, false);
EventSetState(3344, 0, 0);
EventSetState(3345, 1, 0);
WaitEventAutoScriptRun(3, false, false);
EventSetDirFrame(197, 1, 0, 2);
WaitEventAutoScriptRun(3, false, false);
EventSetState(3343, 0, 0);
EventSetDirFrame(197, 4, 0, 2);
WaitEventAutoScriptRun(8, false, false);
EventSetDirFrame(197, 4, 0, 3);
WaitEventAutoScriptRun(10, false, false);
SceneEnter(198);

