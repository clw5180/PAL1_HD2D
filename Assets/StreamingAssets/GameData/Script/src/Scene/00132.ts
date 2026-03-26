['Event_00132_00001_Trigger'];
Call("@8E29", 0, 0);
SceneEnter(131);
FadeOut(0);

['Event_00132_00002_Trigger'];
SceneEnter(135);
PartySetPos(15, 24, 1);
FadeOut(0);

['Event_00132_00003_Trigger'];
SceneEnter(133);
PartySetPos(14, 48, 0);
FadeOut(0);

['Event_00132_00004_Trigger'];
SceneEnter(133);
PartySetPos(14, 70, 1);
FadeOut(0);

['Event_00132_00005_Trigger'];
SceneEnter(133);
PartySetPos(18, 90, 0);
FadeOut(0);

['Event_00132_00006_Trigger'];
SceneEnter(133);
PartySetPos(16, 113, 1);
FadeOut(0);

['Event_00132_00007_Trigger'];
SceneEnter(133);
PartySetPos(35, 22, 1);
FadeOut(0);

['Event_00132_00008_Trigger'];
SceneEnter(133);
PartySetPos(31, 43, 0);
FadeOut(0);

['Event_00132_00009_Trigger'];
SceneEnter(133);
PartySetPos(34, 69, 1);
FadeOut(0);

['Event_00132_00010_Trigger'];
SceneEnter(133);
PartySetPos(35, 90, 1);
FadeOut(0);

['Event_00132_00011_Trigger'];
SceneEnter(133);
PartySetPos(34, 111, 1);
FadeOut(0);

['Event_00132_00012_Trigger'];
//老鸨：
//哟呵～　英俊的公子爷～
//第一次来吗？要叫姑娘吗？
//一次只要二千文钱．．
GotoWithSelect("@3E7F");
VideoUpdate(0, false);
CashModify(-2000, "@3E8D");
//老鸨：
//呵呵呵～　公子～
//您喜欢清纯一点的呀！
VideoRestore();
//那好极了，我给您介绍一位
//本院最出色的新人～"小雪"
FadeOut(0);
SceneEnter(134);
ReplaceAndPause();
//老鸨：
//怎么样？
//公子．．还满意吗？
GotoWithSelect("@3E60");
VideoUpdate(0, false);
//老鸨：
//呵呵呵～您满意就好了
//下次再来啊！

['Event_00132_00013_Auto'];
NpcMoveToBlockMutexLock(41, 48, 1, 2);
NpcMoveToBlockMutexLock(37, 53, 0, 2);
['@3F37'];
NpcMoveToBlockMutexLock(33, 49, 0, 2);
NpcMoveToBlockMutexLock(27, 55, 0, 2);
NpcMoveToBlockMutexLock(25, 53, 0, 2);
NpcMoveToBlockMutexLock(19, 58, 1, 2);
NpcMoveToBlockMutexLock(12, 51, 0, 2);
NpcMoveToBlockMutexLock(13, 50, 0, 2);
WaitEventAutoScriptRun(9, false, false);
NpcMoveToBlockMutexLock(12, 51, 0, 2);
WaitEventAutoScriptRun(5, false, false);
NpcMoveToBlockMutexLock(20, 59, 0, 2);
NpcMoveToBlockMutexLock(27, 52, 0, 2);
NpcMoveToBlockMutexLock(29, 53, 1, 2);
NpcMoveToBlockMutexLock(33, 49, 1, 2);
WaitEventAutoScriptRun(2, false, false);
ReplaceAndPauseWithNop("@3F37", 0);

['Event_00132_00013_Trigger'];
//茶水小妹：
//公子您找错人了
//我只是倒茶小妹，不接客的

['Event_00132_00014_Auto'];
NpcMoveToBlockMutexLock(9, 49, 1, 4);
NpcSetDirFrame(0, 0);

['Event_00132_00014_Trigger'];
SetDlgUpper(56, 0, false);
//莺莺夫人：
//你．．你想对他怎么样？
//你不要伤害他呀．．

