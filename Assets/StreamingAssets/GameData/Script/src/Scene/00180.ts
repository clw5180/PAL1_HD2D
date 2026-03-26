['Event_00180_00001_Trigger'];
PartyWalkToBlock(40, 44, 0, 4);
ViewportMove(0, -4, 16);
PartySetPos(40, 40, 0);
ViewportMove(0, 0, 0);
PartyWalkToBlock(38, 41, 1, 4);

['Event_00180_00002_Trigger'];
PartyWalkToBlock(40, 40, 0, 4);
ViewportMove(0, 4, 16);
PartySetPos(40, 44, 0);
ViewportMove(0, 0, 0);
PartyWalkToBlock(41, 45, 1, 4);

['Event_00180_00003_Trigger'];
PartyWalkToBlock(27, 39, 1, 4);
ViewportMove(0, 8, 48);
PartySetPos(27, 63, 1);
ViewportMove(0, 0, 0);
PartyWalkToBlock(29, 65, 0, 4);

['Event_00180_00004_Trigger'];
PartyWalkToBlock(27, 63, 1, 4);
ViewportMove(0, -8, 48);
PartySetPos(27, 39, 1);
ViewportMove(0, 0, 0);
PartyWalkToBlock(28, 40, 1, 4);

['Event_00180_00005_Trigger'];
SceneEnter(187);
PartySetPos(57, 64, 1);
RoleSetDirFrame(3, 0, 0);
FadeOut(0);

['Scene_00180_Teleport'];
SceneEnter(177);
PartySetPos(12, 59, 0);
FadeOut(0);

['Event_00180_00006_Trigger'];
SceneEnter(203);
PartySetPos(6, 31, 1);
FadeOut(0);

['Event_00180_00010_Trigger'];
EventSetState(-1, 0, 0);
VideoUpdate(0, false);
PlaySound(78);
SetDlgBox(0);
//摘得断肠草
AddItem(65, 0);

