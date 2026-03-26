['Event_00087_00002_Trigger'];
Call("Event_00002_00002_Trigger", 0, 0);
SceneEnter(85);

['Event_00087_00001_Trigger'];
SceneEnter(99);
PartySetPos(17, 65, 0);
FadeOut(0);

['Event_00087_00006_Trigger'];
EventSetTriggerMode(-1, -1, false, 0);
MusicPlay(Music.停止播放, false, false);
//哈～别想跑！
SetBattleMusic(Music.御剑伏魔_1);
BattleStart(29, "@A073", "");
PartySetRole(1, 3, 0);
PartySetPos(39, 16, 0);
BattleEnd();
VideoUpdate(0, false);
TogglePaletteTime(true);
SetDlgLower(41, 0, false);
//女飞贼：
//哎呦～　天都亮了！
//东西还给你们，我不玩了
EventSetStateSequence(88, 3, 10, 0);
EventSetAutoScript(-1, -1, "@362E");
EventSetTriggerMode(94, 1, true, 1);
EventSetTriggerMode(95, 1, true, 1);
EventSetTriggerMode(96, 1, true, 1);
EventSetState(1742, 0, 0);
EventSetState(1741, 2, 0);
EventSetTriggerScript(94, 18, "@37FB");
EventSetState(1765, 2, 0);
EventSetState(1746, 2, 0);
EventSetState(1747, 2, 0);
WaitEventAutoScriptRun(3, false, false);
PartyWalkToBlock(40, 17, 1, 8);
PartyWalkToBlock(35, 23, 0, 8);
WaitEventAutoScriptRun(8, false, false);
SetDlgLower(22, 0, false);
//林月如：
//逃的真快！
MusicPlay(Music.大开眼界, false, false);

['Event_00087_00007_Trigger'];
EventSetState(-1, 0, 0);
VideoUpdate(0, false);
SetDlgBox(0);
//拾起布包
AddItem(211, 0);

['Event_00087_00008_Trigger'];
SetDlgLower(1, 0, false);
//李逍遥：
//你在生什么气啊？
NpcSetDirFrame(3, 0);
VideoUpdate(0, false);
SetDlgUpper(23, 0, false);
//林月如：
//你去跟那个不要脸的女人
//一起算了！
VideoUpdate(0, false);
SetDlgLower(10, 0, false);
//李逍遥：
//我又哪里得罪你了？
VideoUpdate(0, false);
SetDlgUpper(22, 0, false);
//林月如：
//你们男人都是一个样
//看到漂亮的女人就失了魂似的
VideoUpdate(0, false);
SetDlgLower(6, 0, false);
//李逍遥：
//那个寡妇？我怎么会？
//她又没有你漂亮？
NpcSetDirFrame(2, 0);
VideoUpdate(0, false);
SetDlgUpper(24, 0, false);
//林月如：
//你．．你最爱骗人了
NpcSetDirFrame(3, 0);
WaitEventAutoScriptRun(7, false, false);
MusicStop(1);
SetDlgUpper(25, 0, false);
//林月如：
//咦．．！？
EventSetAutoScript(87, 8, "@37D5");
WaitEventAutoScriptRun(8, false, false);
EventSetDirFrame(87, 8, 2, 0);
VideoUpdate(0, false);
SetDlgUpper(23, 0, false);
//林月如：
//李大哥！　快躲起来！
EventSetDirFrame(87, 8, 3, 0);
PartyWalkToBlock(10, 15, 0, 8);
SetDlgLower(0, 0, false);
//李逍遥：
//又怎么了？
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//林月如：
//嘘～　你看！
MusicPlay(Music.惊, false, false);
EventSetState(1633, 1, 0);
ViewportMove(4, 0, 48);
WaitEventAutoScriptRun(60, false, false);
ViewportMove(-16, 0, 12);
EventSetAutoScript(87, 8, "@37EA");
WaitEventAutoScriptRun(4, false, false);
PartyWalkToBlock(12, 12, 1, 4);
RoleSetDirFrame(3, 0, 0);
SetDlgUpper(22, 0, false);
//林月如：
//鬼鬼祟祟的．．
//井里头一定有古怪！
EventSetState(1610, 1, 0);
PartySetRole(3, 1, 0);
EventSetState(-1, 0, 0);
EventSetState(1615, 0, 0);
EventSetState(1650, 2, 0);
EventSetStateSequence(90, 3, 11, 0);

['Event_00087_00009_Auto'];
NpcMoveToBlockMutexLock(18, 20, 1, 2);
NpcMoveToBlockMutexLock(16, 18, 0, 2);
WaitEventAutoScriptRun(5, false, false);
NpcSetDirFrame(0, 0);
NpcSetDirFrame(3, 0);
WaitEventAutoScriptRun(5, false, false);
NpcSetDirFrame(0, 0);
WaitEventAutoScriptRun(4, false, false);
NpcSetDirFrame(3, 0);
NpcSetDirFrame(2, 0);
WaitEventAutoScriptRun(3, false, false);
EventSetState(1634, 1, 0);
EventSetState(-1, 0, 0);

['Event_00087_00010_Auto'];
NpcMoveToBlock(18, 20, 0, 3);
NpcMoveToBlock(15, 22, 1, 3);
EventSetState(-1, 0, 0);

