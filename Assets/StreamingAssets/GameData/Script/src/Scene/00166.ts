['Event_00166_00001_Trigger'];
SceneEnter(167);
PartySetPos(32, 45, 0);
FadeOut(0);

['Event_00166_00025_Trigger'];
Call("@8E99", 0, 0);
SetDlgBox(0);
//获得银杏子
AddItem(14, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

['Event_00166_00028_Trigger'];
Call("@8E99", 0, 0);
SetDlgBox(0);
//获得风灵符
AddItem(7, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

['Event_00166_00018_Trigger'];
Call("@8E99", 0, 0);
SetDlgBox(0);
//获得雷灵符
AddItem(8, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

['Event_00166_00024_Trigger'];
Call("@8E99", 0, 0);
SetDlgBox(0);
//获得水灵符
AddItem(9, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

['Event_00166_00020_Trigger'];
Call("@8E99", 0, 0);
SetDlgBox(0);
//获得火灵符
AddItem(10, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

