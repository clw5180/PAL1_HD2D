['Scene_00071_Teleport'];
SceneEnter(69);
PartySetPos(53, 108, 0);
FadeOut(0);

['Event_00071_00002_Trigger'];
SceneEnter(56);
PartySetPos(7, 95, 1);
FadeOut(0);

['Scene_00071_Enter'];
Dos_SetBattlefield(FbpDos.南绍_王宫);

['Event_00071_00009_Trigger'];
Call("@8E99", 0, 0);
SetDlgBox(0);
//获得袖里剑
AddItem(94, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

['Event_00071_00008_Trigger'];
Call("@8E99", 0, 0);
SetDlgBox(0);
//获得吸星锁
AddItem(98, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

['Event_00071_00004_Trigger'];
BattleStart(19, "@A073", "@A071");
GotoWithNop("@A0A7", 0);

BattleStart(20, "@A073", "@A071");
GotoWithNop("@A0A7", 0);

BattleStart(21, "@A073", "@A071");
GotoWithNop("@A0A7", 0);

BattleStart(22, "@A073", "@A071");
GotoWithNop("@A0A7", 0);

['Event_00071_00006_Trigger'];
BattleStart(33, "@A073", "@A071");
GotoWithNop("@A0A7", 0);

BattleStart(34, "@A073", "@A071");
GotoWithNop("@A0A7", 0);

BattleStart(35, "@A073", "@A071");
GotoWithNop("@A0A7", 0);

BattleStart(36, "@A073", "@A071");
GotoWithNop("@A0A7", 0);

BattleStart(37, "@A073", "@A071");
GotoWithNop("@A0A7", 0);

BattleStart(38, "@A073", "@A071");
GotoWithNop("@A0A7", 0);

BattleStart(39, "@A073", "@A071");
GotoWithNop("@A0A7", 0);

