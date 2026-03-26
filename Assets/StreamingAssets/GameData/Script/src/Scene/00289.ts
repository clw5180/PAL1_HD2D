['Event_00289_00001_Trigger'];
SceneEnter(288);
PartySetPos(28, 59, 1);
FadeOut(0);

['Event_00289_00002_Trigger'];
SceneEnter(280);
PartySetPos(53, 98, 0);
FadeOut(0);

['Event_00289_00040_Trigger'];
Call("@8E99", 0, 0);
SetDlgBox(0);
//获得断肠草
AddItem(65, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

