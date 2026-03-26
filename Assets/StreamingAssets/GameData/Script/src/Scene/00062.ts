['Event_00062_00003_Trigger'];
SceneEnter(63);
PartySetPos(30, 48, 0);
FadeOut(0);

['Event_00062_00004_Trigger'];
SceneEnter(63);
PartySetPos(29, 100, 0);
FadeOut(0);

['Event_00062_00005_Trigger'];
SceneEnter(63);
PartySetPos(39, 82, 0);
FadeOut(0);

['Event_00062_00001_Trigger'];
SceneEnter(55);
PartySetPos(43, 20, 0);
FadeOut(0);

['Event_00062_00002_Trigger'];
SceneEnter(64);
PartySetPos(57, 118, 1);
FadeOut(0);

['Scene_00062_Enter'];
Dos_SetBattlefield(FbpDos.片尾_美术);
MusicPlay(Music.历险, false, false);
SetBattleMusic(Music.战意昂);

['Event_00062_00016_Trigger'];
Call("@8E99", 0, 0);
SetDlgBox(0);
//获得引路蜂
AddItem(91, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

['Event_00062_00006_Auto'];
WaitEventAutoScriptRun(20, false, false);
GotoWithProbability(6, "");
PlaySound(60);
WaitEventAutoScriptRun(15, false, false);
['@9706'];
GotoWithProbability(50, "@970A");
GotoWithProbability(10, "");
PlaySound(61);
WaitEventAutoScriptRun(12, false, false);
['@970A'];
GotoWithProbability(10, "");
PlaySound(62);
WaitEventAutoScriptRun(20, false, false);
GotoWithProbability(4, "");
GotoWithProbability(30, "@9706");
GotoWithProbability(2, "");
ReplaceAndPauseWithNop("Event_00062_00006_Auto", 0);

