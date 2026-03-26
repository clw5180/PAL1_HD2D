['Scene_00246_Enter'];
PlaySound(256);
PartySetPos(39, 46, 0);
VideoUpdate(0, false);
//白苗族长：
//$05这．．这是神迹啊！~70
SetRng(8);
PlaySound(256);
FadeOut(0);
PlayRng(0, 0, 8);
PlaySound(256);
FadeOut(0);
EventSetState(4334, 1, 0);
EventSetState(4335, 1, 0);
EventSetStateSequence(246, 7, 15, 1);
PartySetPos(26, 61, 0);
VideoUpdate(0, false);
//士兵：
//$00哗～　快逃啊！
//女娲娘娘显灵了！~50
PlaySound(256);
WaitEventAutoScriptRun(30, false, false);
PlaySound(256);
WaitEventAutoScriptRun(10, false, false);
EventSetDirFrame(246, 7, 0, 0);
WaitEventAutoScriptRun(0, false, false);
SetDlgLower(81, 0, false);
//拜月教主：
//不许退！　通通不许走！~50$02
PlaySound(256);
VideoFadeAndUpdate(-2);
HeroSetSprite(0, Sprite.空空如也, true);
SceneEnter(228);

['Event_00246_00008_Auto'];
GotoWithProbability(30, "");
NpcSetDirFrame(0, 0);
['@7D06'];
EventWalkOneStep(-1, -1, -8, 4);
GotoWithNop("@7D06", 0);

['Event_00246_00010_Auto'];
WaitEventAutoScriptRun(10, false, false);
ReplaceAndPauseWithNop("Event_00246_00008_Auto", 0);

['Event_00246_00011_Auto'];
WaitEventAutoScriptRun(5, false, false);
ReplaceAndPauseWithNop("Event_00246_00008_Auto", 0);

['Event_00246_00014_Auto'];
WaitEventAutoScriptRun(4, false, false);
ReplaceAndPauseWithNop("Event_00246_00008_Auto", 0);

['Event_00246_00015_Auto'];
WaitEventAutoScriptRun(7, false, false);
ReplaceAndPauseWithNop("Event_00246_00008_Auto", 0);

