['Event_00258_00001_Trigger'];
SceneEnter(256);
PartySetPos(40, 79, 1);
FadeOut(0);

['Event_00258_00002_Trigger'];
PartyWalkToBlock(27, 96, 0, 8);
RoleSetDirFrame(3, 0, 0);
['@84AA'];
RoleMoveOneStep(8, 8, 0);
WaitEventAutoScriptRun(0, false, false);
GotoWithNop("@84AA", 3);
['Scene_00250_Teleport'];
SceneEnter(250);
PartySetPos(10, 43, 1);
FadeOut(0);

