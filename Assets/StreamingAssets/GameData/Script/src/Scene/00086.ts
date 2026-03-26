['Event_00086_00001_Trigger'];
SceneEnter(94);
PartySetPos(23, 31, 0);
FadeOut(0);

['Event_00086_00002_Trigger'];
SceneEnter(99);
PartySetPos(18, 35, 0);
FadeOut(0);

['Event_00086_00003_Trigger'];
SceneEnter(99);
PartySetPos(40, 33, 1);
FadeOut(0);

['Event_00086_00004_Trigger'];
SceneEnter(99);
PartySetPos(13, 68, 1);
FadeOut(0);

['Event_00086_00005_Trigger'];
EventSetAutoScript(86, 5, "@3487");
EventSetTriggerMode(-1, -1, false, 0);
PlaySound(178);
ReplaceAndPause();
EventSetAutoScript(86, 5, "@348B");
EventSetTriggerMode(-1, -1, false, 0);
PlaySound(178);

['Scene_00086_Enter'];
Dos_SetBattlefield(FbpDos.七星磐龙柱);

['Event_00086_00006_Auto'];
WaitEventAutoScriptRun(20, false, false);
PlaySound(52);
WaitEventAutoScriptRun(10, false, false);
GotoWithProbability(8, "");
GotoWithProbability(50, "@96EA");
PlaySound(53);
WaitEventAutoScriptRun(15, false, false);
GotoWithProbability(50, "@96ED");
GotoWithProbability(4, "");
PlaySound(53);
WaitEventAutoScriptRun(10, false, false);
GotoWithProbability(8, "");
['@96EA'];
PlaySound(52);
WaitEventAutoScriptRun(30, false, false);
GotoWithProbability(6, "");
['@96ED'];
PlaySound(53);
GotoWithProbability(3, "");
ReplaceAndPauseWithNop("Event_00086_00006_Auto", 0);

