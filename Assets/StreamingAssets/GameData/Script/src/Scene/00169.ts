['Event_00169_00001_Trigger'];
SceneEnter(146);
PartySetPos(14, 72, 1);
FadeOut(0);

['Event_00169_00018_Trigger'];
Call("@8E99", 0, 0);
SetDlgBox(0);
//获得双龙剑
AddItem(121, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

Call("@8E99", 0, 0);
SetDlgBox(0);
//获得玄铁剑
AddItem(115, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

Call("@8E99", 0, 0);
SetDlgBox(0);
//获得青锋剑
AddItem(118, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

