['Event_00038_00002_Trigger'];
SceneEnter(40);
PartySetPos(51, 60, 1);
FadeOut(0);

['Event_00038_00007_Auto'];
NpcMoveToBlock(34, 42, 1, 3);

['Event_00038_00008_Auto'];
NpcMoveToBlockMutexLock(34, 42, 1, 2);

['Event_00038_00009_Auto'];
WaitEventAutoScriptRun(2, false, false);
NpcMoveToBlockMutexLock(35, 42, 0, 2);

