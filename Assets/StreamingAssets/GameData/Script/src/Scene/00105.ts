['Event_00105_00003_Trigger'];
SceneEnter(107);
PartySetPos(52, 32, 1);
FadeOut(0);

['Event_00105_00001_Trigger'];
SceneEnter(104);
PartySetPos(23, 53, 0);
FadeOut(0);

['Event_00105_00002_Trigger'];
SceneEnter(104);
PartySetPos(26, 49, 1);
FadeOut(0);

['Scene_00105_Enter'];
Dos_SetBattlefield(FbpDos.木秘宫_2);
SetBattleMusic(Music.势如破竹);
MusicPlay(Music.险境_2, false, false);

['Event_00105_00039_Trigger'];
Call("@8E99", 0, 0);
SetDlgBox(0);
//获得雪蛤蟆
AddItem(72, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

['Event_00105_00031_Trigger'];
Call("@8E99", 0, 0);
SetDlgBox(0);
//获得紫罂粟
AddItem(68, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

['Event_00105_00032_Trigger'];
Call("@8E99", 0, 0);
SetDlgBox(0);
//获得九只蛊
AddItem(88, 9);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

['Event_00105_00035_Trigger'];
Call("@8E99", 0, 0);
SetDlgBox(0);
//获得灵蛊
AddItem(85, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

