['Event_00168_00001_Trigger'];
SceneEnter(149);
PartySetPos(40, 18, 0);
FadeOut(0);

['Event_00168_00028_Trigger'];
Call("@8E99", 0, 0);
SetDlgBox(0);
//获得鬼针胄
AddItem(159, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

['Event_00168_00025_Trigger'];
Call("@8E99", 0, 0);
SetDlgBox(0);
//获得玉菩提
AddItem(13, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

['Event_00168_00027_Trigger'];
Call("@8E99", 0, 0);
SetDlgBox(0);
//获得驱魔香
AddItem(30, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

['Event_00168_00026_Trigger'];
Call("@8E99", 0, 0);
SetDlgBox(0);
//获得捆仙绳
AddItem(100, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

