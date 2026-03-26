['Scene_00157_Enter'];
MusicPlay(Music.步步为营, false, false);
PartySetPos(10, 107, 0);
RoleMoveOneStep(0, 0, 6);
['Scene_00169_Enter'];
Dos_SetBattlefield(FbpDos.蛤蟆洞_2);

['Event_00157_00001_Trigger'];
SceneEnter(169);
PartySetPos(14, 53, 1);
FadeOut(0);

['Event_00157_00006_Trigger'];
PlaySound(134);
EventSetTriggerMode(-1, -1, false, 0);
NpcSetFrame(1);
EventSetAutoScript(157, 2, "@8EA1");
EventSetAutoScript(157, 3, "@8EA1");
EventSetState(2525, 0, 0);
EventSetState(2526, 0, 0);

['Event_00157_00013_Trigger'];
PlaySound(134);
EventSetTriggerMode(-1, -1, false, 0);
NpcSetFrame(1);
EventSetAutoScript(157, 7, "@8EA1");
EventSetAutoScript(157, 8, "@8EA1");
EventSetAutoScript(157, 9, "@8EA1");
EventSetAutoScript(157, 10, "@8EA1");
EventSetState(2532, 0, 0);
EventSetState(2533, 0, 0);

['Event_00157_00020_Trigger'];
PlaySound(134);
EventSetTriggerMode(-1, -1, false, 0);
NpcSetFrame(1);
EventSetAutoScript(157, 14, "@8EA1");
EventSetAutoScript(157, 15, "@8EA1");
EventSetAutoScript(157, 16, "@8EA1");
EventSetAutoScript(157, 17, "@8EA1");
EventSetState(2539, 0, 0);
EventSetState(2540, 0, 0);

['Event_00157_00021_Auto'];
NpcSetFrame(0);
GotoWithProbability(3, "");
NpcSetFrame(1);
ReplaceAndPause();
NpcSetFrame(2);
ReplaceAndPause();
NpcSetFrame(3);
ReplaceAndPause();
NpcSetFrame(4);
ReplaceAndPause();
NpcSetFrame(5);
ReplaceAndPause();
NpcSetFrame(6);
ReplaceAndPause();
NpcSetFrame(7);
ReplaceAndPause();
ReplaceAndPause();
ReplaceAndPause();
NpcSetFrame(8);
ReplaceAndPause();
NpcSetFrame(9);
ReplaceAndPause();
NpcSetFrame(10);
ReplaceAndPause();
NpcSetFrame(11);
ReplaceAndPause();
NpcSetFrame(12);
ReplaceAndPause();
NpcSetFrame(13);
ReplaceAndPauseWithNop("Event_00157_00021_Auto", 0);

['Event_00157_00056_Trigger'];
Call("@8E99", 0, 0);
SetDlgBox(0);
//获得八卦镜
AddItem(197, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

['Event_00157_00064_Trigger'];
Call("@8E99", 0, 0);
SetDlgBox(0);
//获得圣灵符
AddItem(2, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

['Event_00157_00057_Trigger'];
Call("@8E99", 0, 0);
SetDlgBox(0);
//获得试炼果
AddItem(52, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

