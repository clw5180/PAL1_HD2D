['Event_00290_00001_Trigger'];
SceneEnter(288);
PartySetPos(35, 59, 1);
FadeOut(0);

['Event_00290_00037_Trigger'];
Call("@8E99", 0, 0);
SetDlgBox(0);
//获得冲天冠
AddItem(147, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

Call("@8E99", 0, 0);
SetDlgBox(0);
//获得披风
AddItem(165, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

['Event_00290_00035_Trigger'];
Call("@8E99", 0, 0);
SetDlgBox(0);
//获得雪莲子
AddItem(48, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

