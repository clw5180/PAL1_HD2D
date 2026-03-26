['Scene_00075_Teleport'];
SceneEnter(69);
PartySetPos(43, 58, 0);
FadeOut(0);

['Event_00075_00002_Trigger'];
SceneEnter(69);
PartySetPos(28, 56, 0);
FadeOut(0);

['Event_00075_00003_Trigger'];
Call("@8E99", 0, 0);
SetDlgBox(0);
//获得赤蝎粉
AddItem(73, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

