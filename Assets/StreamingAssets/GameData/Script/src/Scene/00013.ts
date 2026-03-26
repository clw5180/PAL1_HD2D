['Event_00013_00001_Trigger'];
SceneEnter(6);
PartySetPos(20, 78, 0);
FadeOut(0);

['Event_00013_00002_Trigger'];
NpcSetFrame(0);
//曾伯：
//要买什么就自个儿挑吧．．
VideoUpdate(0, false);
ShowBuyItemMenu(2);

['Event_00013_00002_Auto'];
NpcSetFrame(0);
WaitEventAutoScriptRun(2, false, false);
NpcSetFrame(1);
WaitEventAutoScriptRun(4, false, false);
NpcSetFrame(2);
PlaySound(135);
WaitEventAutoScriptRun(2, false, false);
NpcSetFrame(3);
WaitEventAutoScriptRun(3, false, false);
ReplaceAndPauseWithNop("Event_00013_00002_Auto", 0);

