['Event_00278_00002_Trigger'];
PartyWalkToBlock(27, 96, 0, 8);
RoleSetDirFrame(3, 0, 0);
['@88EC'];
RoleMoveOneStep(8, 8, 0);
WaitEventAutoScriptRun(0, false, false);
GotoWithNop("@88EC", 3);
SceneEnter(286);
PartySetPos(10, 43, 1);
FadeOut(0);

['Event_00278_00001_Trigger'];
SceneEnter(282);
PartySetPos(40, 79, 1);
FadeOut(0);

['Scene_00278_Enter'];
PartySetPos(26, 95, 1);
Replace();
Dos_SetBattlefield(FbpDos.片尾_监制);

