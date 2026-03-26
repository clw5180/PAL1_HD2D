['Event_00167_00001_Trigger'];
SceneEnter(148);
PartySetPos(47, 72, 1);
FadeOut(0);

['Event_00167_00022_Trigger'];
Call("@8E99", 0, 0);
SetDlgBox(0);
//获得龙涎草
AddItem(46, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

['Event_00167_00032_Trigger'];
Call("@8E99", 0, 0);
SetDlgBox(0);
//获得女娲石
AddItem(53, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

