['Event_00116_00001_Trigger'];
SceneEnter(117);
PartySetPos(54, 111, 1);
FadeOut(0);

['Event_00116_00002_Trigger'];
SceneEnter(119);
PartySetPos(22, 32, 1);
FadeOut(0);

['Event_00116_00012_Trigger'];
EventSetTriggerMode(-1, -1, false, 2);
EventSetTriggerScript(116, 2, "@5050");
WaitEventAutoScriptRun(6, false, false);
NpcSetDirFrame(0, 1);
WaitEventAutoScriptRun(2, false, false);
NpcSetDirFrame(0, 2);
WaitEventAutoScriptRun(20, false, false);
NpcSetDirFrame(0, 3);
WaitEventAutoScriptRun(8, false, false);
NpcSetDirFrame(0, 4);
WaitEventAutoScriptRun(2, false, false);
NpcSetDirFrame(0, 5);
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//酒剑仙：
//啊～　这酒来劲．．
WaitEventAutoScriptRun(4, false, false);
NpcSetDirFrame(0, 7);
WaitEventAutoScriptRun(2, false, false);
NpcSetDirFrame(0, 6);
WaitEventAutoScriptRun(2, false, false);
NpcSetDirFrame(0, 7);
WaitEventAutoScriptRun(2, false, false);
NpcSetDirFrame(0, 6);
WaitEventAutoScriptRun(2, false, false);
NpcSetDirFrame(0, 7);
WaitEventAutoScriptRun(2, false, false);
NpcSetDirFrame(0, 6);
WaitEventAutoScriptRun(2, false, false);
NpcSetDirFrame(0, 7);
WaitEventAutoScriptRun(4, false, false);
NpcSetDirFrame(0, 8);
WaitEventAutoScriptRun(5, false, false);
NpcSetDirFrame(0, 9);
WaitEventAutoScriptRun(0, false, false);
NpcSetDirFrame(0, 10);
WaitEventAutoScriptRun(0, false, false);
NpcSetDirFrame(0, 11);
WaitEventAutoScriptRun(4, false, false);
SetDlgLower(37, 0, false);
//酒剑仙：
//我要开始施法啰！
//我在还没完成以前，你们二人
//千万不要离开我七步以外
VideoRestore();
//无论发生了什么事，切记不可
//轻举妄动。要不然有什么不良
//后果，我可不负责喔！
VideoUpdate(0, false);
PlaySound(265);
SetDlgCenter(0, false);
//喝～！
MusicPlay(Music.醉仙驱魔, false, false);
WaitEventAutoScriptRun(8, false, false);
Call("@50E9", 0, 0);
Call("@510E", 0, 0);
Call("@50E9", 0, 0);
WaitEventAutoScriptRun(4, false, false);
NpcSetDirFrame(0, 21);
WaitEventAutoScriptRun(2, false, false);
NpcSetDirFrame(0, 19);
WaitEventAutoScriptRun(6, false, false);
NpcSetDirFrame(0, 22);
WaitEventAutoScriptRun(0, false, false);
NpcSetDirFrame(0, 23);
EventSetAutoScript(116, 3, "@50DB");
WaitEventAutoScriptRun(32, false, false);
MusicStop(1);
SetDlgLower(2, 0, false);
//李逍遥：
//师．．师父！？
PartyWalkToBlock(34, 32, 1, 4);
PartyWalkToBlock(36, 34, 0, 4);
SetDlgCenter(0, false);
//Ｚ．．Ｚ．．Ｚ．．～
WaitEventAutoScriptRun(8, false, false);
SetDlgUpper(24, 0, false);
//林月如：
//他．．睡着了！？
SetDlgLower(4, 0, false);
//李逍遥：
//看起来～好像是的．．
VideoUpdate(0, false);
SetDlgUpper(25, 0, false);
//林月如：
//什么跟什么嘛！
//又是一个来装神弄鬼的
RoleSetDirFrame(1, 0, 0);
VideoUpdate(0, false);
SetDlgLower(2, 0, false);
//李逍遥：
//不～师父的本领真的很高强
//也许．．也许是．．
VideoUpdate(0, false);
SetDlgUpper(22, 0, false);
//林月如：
//也许是酒喝多了，是不是？
EventSetAutoScript(116, 13, "@5129");
WaitEventAutoScriptRun(8, false, false);
RoleSetDirFrame(0, 0, 0);
WaitEventAutoScriptRun(3, false, false);
SetDlgLower(2, 0, false);
//李逍遥：
//月如！　等一下，你要去哪？
WaitEventAutoScriptRun(0, false, false);
SetDlgUpper(23, 0, false);
//林月如：
//去找出妖怪呀！
//难道还要在这里浪费时间？
WaitEventAutoScriptRun(5, false, false);
RoleSetDirFrame(3, 0, 0);
WaitEventAutoScriptRun(6, false, false);
RoleSetDirFrame(0, 0, 0);
VideoUpdate(0, false);
EventSetState(2012, 1, 0);
EventSetState(2010, 1, 0);
EventSetState(2011, 1, 0);
SceneSetScript(115, "@50D9", "");
SceneSetScript(116, "@50D9", "");
SceneSetScript(117, "@50D9", "");
SceneSetScript(109, "@50D9", "");
SceneSetScript(119, "@50D9", "");
SceneSetScript(120, "@50D9", "");
SceneSetScript(122, "@50D9", "");
SceneSetScript(123, "@50D9", "");
SceneSetScript(124, "@50D9", "");
SceneSetScript(125, "@50D9", "");
VideoWave(0, 0);
MusicPlay(Music.宿命, false, false);
ReplaceAndPause();
SetDlgCenter(0, false);
//酒剑仙呼呼大睡中．．

