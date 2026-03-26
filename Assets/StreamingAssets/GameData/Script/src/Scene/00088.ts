['Event_00088_00001_Trigger'];
SceneEnter(99);
PartySetPos(14, 31, 0);
FadeOut(0);

['Event_00088_00002_Trigger'];
SceneEnter(99);
PartySetPos(44, 30, 0);
FadeOut(0);

['Event_00088_00003_Trigger'];
BattleStart(31, "@A073", "@A071");
GotoWithNop("@A0A7", 0);

['Event_00088_00004_Trigger'];
BattleStart(32, "@A073", "@A071");
GotoWithNop("@A0A7", 0);

