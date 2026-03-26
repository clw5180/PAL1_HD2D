['Event_00190_00001_Trigger'];
SceneEnter(181);
PartySetPos(55, 39, 0);
FadeOut(0);

['Event_00190_00002_Trigger'];
SceneEnter(181);
PartySetPos(7, 80, 0);
FadeOut(0);

['Event_00190_00031_Trigger'];
Call("@8E99", 0, 0);
SetDlgBox(0);
//获得火蚕蛊
AddItem(83, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

['Event_00190_00033_Trigger'];
Call("@8E99", 0, 0);
SetDlgBox(0);
//获得爆烈蛊
AddItem(86, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

Call("@8E99", 0, 0);
SetDlgBox(0);
//获得盐巴
AddItem(17, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

