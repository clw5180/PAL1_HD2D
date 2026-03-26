['Scene_00072_Teleport'];
SceneEnter(69);
PartySetPos(44, 73, 0);
FadeOut(0);

['Event_00072_00002_Trigger'];
SceneEnter(69);
PartySetPos(45, 37, 0);
FadeOut(0);

['Event_00072_00009_Trigger'];
Call("@8E99", 0, 0);
SetDlgBox(0);
//获得迷魂香
AddItem(75, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

['Event_00072_00005_Trigger'];
BattleStart(23, "@A073", "@A071");
GotoWithNop("@A0A7", 0);

BattleStart(24, "@A073", "@A071");
GotoWithNop("@A0A7", 0);

BattleStart(25, "@A073", "@A071");
GotoWithNop("@A0A7", 0);

BattleStart(26, "@A073", "@A071");
GotoWithNop("@A0A7", 0);

BattleStart(27, "@A073", "@A071");
GotoWithNop("@A0A7", 0);

BattleStart(28, "@A073", "@A071");
GotoWithNop("@A0A7", 0);

BattleStart(29, "@A073", "@A071");
GotoWithNop("@A0A7", 0);

BattleStart(30, "@A073", "@A071");
GotoWithNop("@A0A7", 0);

