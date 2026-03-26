['Scene_00007_Enter'];
Dos_SetBattlefield(FbpDos.木秘宫_1);
SetBattleMusic(Music.势如破竹);

['Scene_00007_Teleport'];
PartySetPos(7, 86, 0);
SceneEnter(5);
FadeOut(0);

['Event_00007_00002_Trigger'];
PartySetPos(44, 58, 1);
SceneEnter(8);
FadeOut(0);

['Event_00007_00019_Trigger'];
EventSetState(-1, 0, 0);
VideoUpdate(0, false);
PlaySound(78);
SetDlgBox(0);
//摘得止血草
AddItem(39, 0);

['Event_00007_00020_Trigger'];
EventSetState(-1, 0, 0);
VideoUpdate(0, false);
PlaySound(78);
SetDlgBox(0);
//摘得龙涎草
AddItem(46, 0);

['Event_00007_00021_Auto'];
WaitEventAutoScriptRun(8, false, false);
PlaySound(66);
GotoWithProbability(60, "@96F8");
WaitEventAutoScriptRun(6, false, false);
GotoWithProbability(20, "");
PlaySound(66);
WaitEventAutoScriptRun(8, false, false);
['@96F8'];
GotoWithProbability(8, "");
GotoWithProbability(33, "Event_00007_00021_Auto");
WaitEventAutoScriptRun(20, false, false);
PlaySound(73);
WaitEventAutoScriptRun(20, false, false);
GotoWithProbability(70, "Event_00007_00021_Auto");
PlaySound(73);
GotoWithProbability(2, "");
ReplaceAndPauseWithNop("Event_00007_00021_Auto", 0);

['Event_00007_00007_Auto'];
NpcChase(8, 6, true);
GotoWithNop("Event_00007_00007_Auto", 0);

NpcChase(8, 6, false);
GotoWithNop("Event_00007_00007_Auto", 0);

['Event_00007_00003_Auto'];
NpcChase(8, 4, true);
GotoWithNop("Event_00007_00003_Auto", 0);

['Event_00007_00005_Auto'];
NpcChase(6, 2, false);
GotoWithNop("Event_00007_00005_Auto", 0);

['Event_00007_00005_Trigger'];
BattleStart(0, "@A073", "@A071");
GotoWithNop("@A0A7", 0);

['Event_00007_00003_Trigger'];
BattleStart(1, "@A073", "@A071");
GotoWithNop("@A0A7", 0);

['Event_00007_00004_Trigger'];
BattleStart(2, "@A073", "@A071");
GotoWithNop("@A0A7", 0);

['Event_00007_00012_Trigger'];
BattleStart(3, "@A073", "@A071");
GotoWithNop("@A0A7", 0);

['Event_00007_00007_Trigger'];
BattleStart(4, "@A073", "@A071");
GotoWithNop("@A0A7", 0);

['Event_00007_00009_Trigger'];
BattleStart(5, "@A073", "@A071");
GotoWithNop("@A0A7", 0);

['Event_00007_00018_Trigger'];
BattleStart(6, "@A073", "@A071");
GotoWithNop("@A0A7", 0);

['Event_00007_00011_Trigger'];
BattleStart(8, "@A073", "@A071");
GotoWithNop("@A0A7", 0);

['Event_00007_00015_Trigger'];
BattleStart(9, "@A073", "@A071");
GotoWithNop("@A0A7", 0);

['Event_00007_00016_Trigger'];
BattleStart(10, "@A073", "@A071");
GotoWithNop("@A0A7", 0);

['Event_00007_00013_Trigger'];
BattleStart(11, "@A073", "@A071");
GotoWithNop("@A0A7", 0);

['Event_00007_00014_Trigger'];
BattleStart(12, "@A073", "@A071");
GotoWithNop("@A0A7", 0);

