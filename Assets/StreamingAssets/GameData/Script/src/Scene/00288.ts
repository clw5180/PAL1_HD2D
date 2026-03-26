['Event_00288_00001_Trigger'];
SceneEnter(286);
PartySetPos(31, 44, 1);
FadeOut(0);

['Event_00288_00002_Trigger'];
SceneEnter(289);
PartySetPos(54, 104, 1);
FadeOut(0);

['Event_00288_00003_Trigger'];
SceneEnter(290);
PartySetPos(30, 117, 1);
FadeOut(0);

['Event_00288_00019_Trigger'];
Call("@8E99", 0, 0);
SetDlgBox(0);
//获得天香续命露
AddItem(38, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

Call("@8E99", 0, 0);
SetDlgBox(0);
//获得大蒜
AddItem(24, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

