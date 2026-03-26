['Event_00077_00002_Trigger'];
SceneEnter(70);
PartySetPos(36, 47, 1);
FadeOut(0);

['Event_00077_00003_Trigger'];
SceneEnter(68);
PartySetPos(25, 106, 1);
FadeOut(0);

['Event_00077_00061_Trigger'];
EventSetState(-1, 0, 0);
VideoUpdate(0, false);
SetDlgBox(0);
//获得戒刀
AddItem(114, 0);

Call("@8E99", 0, 0);
SetDlgBox(0);
//获得柳月刀
AddItem(117, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

Call("@8E99", 0, 0);
SetDlgBox(0);
//获得九节鞭
AddItem(104, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

['Event_00077_00053_Trigger'];
Call("@8E99", 0, 0);
SetDlgBox(0);
//获得武士披风
AddItem(167, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

Call("@8E99", 0, 0);
SetDlgBox(0);
//获得护心镜
AddItem(168, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

['Event_00077_00054_Trigger'];
Call("@8E99", 0, 0);
SetDlgBox(0);
//获得铁锁衣
AddItem(151, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

Call("@8E99", 0, 0);
SetDlgBox(0);
//获得夜行衣
AddItem(152, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

Call("@8E99", 0, 0);
SetDlgBox(0);
//获得青铜甲
AddItem(153, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

Call("@8E99", 0, 0);
SetDlgBox(0);
//获得罗汉袍
AddItem(154, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

Call("@8E99", 0, 0);
SetDlgBox(0);
//获得铁鳞甲
AddItem(155, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

Call("@8E99", 0, 0);
SetDlgBox(0);
//获得天师道袍
AddItem(156, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

Call("@8E99", 0, 0);
SetDlgBox(0);
//获得精铁战甲
AddItem(157, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

Call("@8E99", 0, 0);
SetDlgBox(0);
//获得金缕衣
AddItem(158, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

['Event_00077_00006_Trigger'];
BattleStart(18, "@A073", "@A071");
GotoWithNop("@A0A7", 0);

