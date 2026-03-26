['Scene_00245_Enter'];
PartySetPos(21, 81, 0);
ViewportMove(0, 2, 150);
VideoFadeAndUpdate(-2);
SceneEnter(246);

['Event_00245_00019_Auto'];
PlaySound(256);
WaitEventAutoScriptRun(28, false, false);
ReplaceAndPauseWithNop("Event_00245_00019_Auto", 0);

['Event_00245_00001_Auto'];
WaitEventAutoScriptRun(6, false, false);
NpcMoveToBlock(24, 82, 0, 3);
NpcMoveToBlock(21, 85, 0, 3);
NpcMoveToBlock(21, 85, 1, 3);
['@7CAD'];
NpcMoveToBlock(22, 85, 0, 3);
NpcMoveToBlock(21, 84, 0, 3);
NpcMoveToBlock(20, 85, 0, 3);
NpcMoveToBlock(21, 86, 0, 3);
GotoWithNop("@7CAD", 0);

['Event_00245_00002_Auto'];
WaitEventAutoScriptRun(12, false, false);
NpcMoveToBlock(23, 80, 1, 3);
WaitEventAutoScriptRun(5, false, false);
NpcMoveToBlock(24, 81, 1, 3);
WaitEventAutoScriptRun(6, false, false);
NpcMoveToBlock(22, 83, 1, 3);
WaitEventAutoScriptRun(4, false, false);
NpcSetDirFrame(3, 0);
WaitEventAutoScriptRun(5, false, false);
NpcSetDirFrame(0, 0);
WaitEventAutoScriptRun(6, false, false);
NpcSetDirFrame(3, 0);
WaitEventAutoScriptRun(4, false, false);
NpcSetDirFrame(0, 0);

['Event_00245_00003_Auto'];
WaitEventAutoScriptRun(6, false, false);
NpcMoveToBlock(18, 89, 0, 3);
WaitEventAutoScriptRun(8, false, false);
NpcSetDirFrame(2, 0);
WaitEventAutoScriptRun(4, false, false);
NpcMoveToBlock(19, 87, 0, 3);
WaitEventAutoScriptRun(5, false, false);
NpcSetDirFrame(3, 0);
WaitEventAutoScriptRun(4, false, false);
NpcSetDirFrame(0, 0);
WaitEventAutoScriptRun(5, false, false);
NpcSetDirFrame(3, 0);
WaitEventAutoScriptRun(4, false, false);
NpcSetDirFrame(2, 0);
NpcMoveToBlock(19, 87, 0, 3);
NpcMoveToBlock(20, 86, 0, 3);
NpcMoveToBlock(24, 90, 1, 3);
WaitEventAutoScriptRun(6, false, false);
NpcSetDirFrame(2, 0);
WaitEventAutoScriptRun(5, false, false);
NpcSetDirFrame(1, 0);
WaitEventAutoScriptRun(6, false, false);
NpcMoveToBlock(22, 88, 0, 3);
WaitEventAutoScriptRun(2, false, false);
NpcSetDirFrame(0, 0);

['Event_00245_00004_Auto'];
WaitEventAutoScriptRun(30, false, false);
NpcMoveToBlockMutexLock(17, 89, 0, 2);
WaitEventAutoScriptRun(8, false, false);
NpcMoveToBlock(17, 88, 1, 3);
WaitEventAutoScriptRun(6, false, false);
ReplaceAndPauseWithNop("Event_00231_00007_Auto", 0);

['Event_00245_00018_Auto'];
EventWalkOneStep(-1, -1, 0, 2);
GotoWithNop("Event_00245_00018_Auto", 0);

