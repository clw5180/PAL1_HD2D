['Event_00294_00001_Trigger'];
SceneEnter(293);
PartySetPos(56, 35, 1);
FadeOut(0);

['Event_00294_00002_Trigger'];
SceneEnter(280);
PartySetPos(44, 44, 0);
FadeOut(0);

['Event_00294_00020_Trigger'];
Call("@8E99", 0, 0);
SetDlgBox(0);
//获得玄武战袍
AddItem(163, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

['Event_00294_00023_Trigger'];
PlaySound(78);
SetDlgBox(0);
//发现灵山仙芝
AddItem(47, 0);
EventSetState(-1, 0, 0);

