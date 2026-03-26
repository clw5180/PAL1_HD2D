['Event_00016_00001_Trigger'];
PartySetPos(18, 72, 0);
SceneEnter(18);
FadeOut(0);

['Scene_00016_Teleport'];
PartySetPos(56, 60, 0);
SceneEnter(16);
FadeOut(0);

['Scene_00016_Enter'];
Dos_SetBattlefield(FbpDos.蜀山云海);

['Event_00016_00004_Trigger'];
BattleStart(15, "@A073", "@A071");
NpcSetVanishTime(150);
FadeOut(0);

['Event_00016_00003_Trigger'];
BattleStart(16, "@A073", "@A071");
NpcSetVanishTime(100);
FadeOut(0);

['Event_00016_00006_Trigger'];
BattleStart(17, "@A073", "@A071");
GotoWithNop("@A0A7", 0);

['Event_00016_00005_Trigger'];
BattleStart(40, "@A073", "@A071");
GotoWithNop("@A0A7", 0);

BattleStart(41, "@A073", "@A071");
GotoWithNop("@A0A7", 0);

BattleStart(42, "@A073", "@A071");
GotoWithNop("@A0A7", 0);

