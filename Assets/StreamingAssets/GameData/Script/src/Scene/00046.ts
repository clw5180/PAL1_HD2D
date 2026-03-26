['Event_00046_00001_Trigger'];
SceneEnter(47);
PartySetPos(43, 49, 1);
FadeOut(0);

['Event_00046_00002_Trigger'];
SceneEnter(47);
PartySetPos(32, 64, 1);
FadeOut(0);

['Event_00046_00003_Trigger'];
SceneEnter(47);
PartySetPos(25, 102, 0);
FadeOut(0);

['Event_00046_00021_Trigger'];
Call("@8E99", 0, 0);
SetDlgBox(0);
//获得藤甲
AddItem(149, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

