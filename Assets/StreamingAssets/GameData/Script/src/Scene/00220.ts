['Event_00220_00001_Trigger'];
SceneEnter(219);
PartySetPos(52, 95, 1);
FadeOut(0);

['Event_00220_00002_Trigger'];
SceneEnter(219);
PartySetPos(30, 40, 0);
FadeOut(0);

['Event_00220_00003_Trigger'];
SceneEnter(221);
PartySetPos(23, 30, 0);
FadeOut(0);

['Event_00220_00030_Trigger'];
Call("@8E99", 0, 0);
SetDlgBox(0);
//获得毒龙砂
AddItem(97, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

['Event_00220_00016_Trigger'];
Call("@8E99", 0, 0);
SetDlgBox(0);
//获得９个毒蛇卵
AddItem(57, 9);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

['Event_00220_00017_Trigger'];
Call("@8E99", 0, 0);
SetDlgBox(0);
//获得９个毒蝎卵
AddItem(58, 9);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

['Event_00220_00020_Trigger'];
Call("@8E99", 0, 0);
SetDlgBox(0);
//获得９个蜈蚣卵
AddItem(61, 9);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

Call("@8E99", 0, 0);
SetDlgBox(0);
//获得腐尸肉
AddItem(56, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

Call("@8E99", 0, 0);
SetDlgBox(0);
//获得腹蛇涎
AddItem(70, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

