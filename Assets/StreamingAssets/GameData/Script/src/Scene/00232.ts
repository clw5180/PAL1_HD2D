['Scene_00232_Enter'];
AddItem(200, 0);
AddItem(203, 0);
AddItem(204, 0);
AddItem(205, 0);
AddItem(206, 0);
AddItem(207, 0);
MusicPlay(Music.雨_1, false, false);
HeroSetSprite(0, Sprite.李逍遥, false);
PartySetRole(2, 1, 5);
RoleSetDirFrame(0, 0, 0);
PartySetPos(30, 73, 1);
PartyWalkToBlock(29, 74, 1, 4);
['@7D5F'];
RoleMoveOneStep(-6, 7, 0);
WaitEventAutoScriptRun(0, false, false);
GotoWithNop("@7D5F", 8);
WaitEventAutoScriptRun(8, false, false);
EventSetAutoScript(232, 24, "@7DD5");
WaitEventAutoScriptRun(26, false, false);
SetDlgUpper(45, 0, false);
//白苗族长：
//公主殿下～
//我代全族的人向您致谢
VideoUpdate(0, false);
SetDlgLower(89, 0, false);
//赵灵儿：
//我只是遵照我娘未竟之志
//做我应该做的事罢了
VideoUpdate(0, false);
SetDlgUpper(45, 0, false);
//白苗族长：
//您是我族的大恩人
//请您留下来继承巫后娘娘
//留下的祭司之位好吗？
VideoUpdate(0, false);
SetDlgLower(89, 0, false);
//赵灵儿：
//谢谢．．我会考虑看看
VideoUpdate(0, false);
SetDlgUpper(45, 0, false);
//白苗族长：
//请您一定要答应，这场庆功
//大典就是为您而开的，大家
//都希望您能留下来呢！
EventSetAutoScript(232, 24, "@7DDA");
WaitEventAutoScriptRun(18, false, false);
PartyWalkToBlock(27, 78, 1, 2);
ViewportMove(-2, 1, 48);
WaitEventAutoScriptRun(32, false, false);
MusicStop(1);
VideoShake(99, 1);
WaitEventAutoScriptRun(10, false, false);
EventSetAutoScript(0, 0, "Event_00231_00007_Auto");
EventSetAutoScript(232, 24, "Event_00231_00007_Auto");
WaitEventAutoScriptRun(4, false, false);
EventSetStateSequence(232, 1, 3, 0);
EventSetStateSequence(232, 12, 14, 1);
WaitEventAutoScriptRun(2, false, false);
EventSetStateSequence(232, 4, 5, 0);
EventSetStateSequence(232, 15, 16, 1);
WaitEventAutoScriptRun(2, false, false);
EventSetStateSequence(232, 6, 9, 0);
EventSetStateSequence(232, 17, 20, 1);
VideoShake(99, 2);
WaitEventAutoScriptRun(3, false, false);
EventSetStateSequence(232, 10, 11, 0);
EventSetStateSequence(232, 21, 22, 1);
WaitEventAutoScriptRun(20, false, false);
VideoShake(99, 5);
EventSetState(4168, 1, 0);
PlaySound(132);
WaitEventAutoScriptRun(2, false, false);
MusicPlay(Music.十面埋伏, false, false);
VideoShake(28, 4);
EventSetAutoScript(232, 24, "@7DDE");
EventSetAutoScript(232, 12, "@7DE4");
EventSetAutoScript(232, 13, "@7DEA");
EventSetAutoScript(232, 14, "@7DF0");
EventSetAutoScript(232, 15, "@7DF6");
EventSetAutoScript(232, 16, "@7DFD");
EventSetAutoScript(232, 17, "@7E03");
EventSetAutoScript(232, 18, "@7E09");
EventSetAutoScript(232, 19, "@7E0E");
EventSetAutoScript(232, 20, "@7E14");
EventSetAutoScript(232, 21, "@7E1B");
EventSetAutoScript(232, 22, "@7E21");
WaitEventAutoScriptRun(36, false, false);
SetDlgLower(45, 0, false);
//白苗族长：
//地魔兽！？黑苗人竟然
//真的使用魔兽来作战！
VideoUpdate(0, false);
SetDlgLower(88, 0, false);
//赵灵儿：
//收拾这妖孽！
//不能让它伤害到无辜的人
EventSetAutoScript(232, 23, "");
EventSetDirFrame(232, 23, 0, 6);
EventSetLayer(232, 23, -10);
SetBattleMusic(Music.势如破竹_副本);
Dos_SetBattlefield(FbpDos.桃花林);
BattleStart(287, "@A073", "");
BattleEnd();
PartySetPos(27, 79, 0);
ViewportMove(0, 0, 0);
SetDlgUpper(27, 0, false);
//阿奴：
//一定有人在背后操纵魔兽
//我们去揪出这幕后的主使者！
VideoUpdate(0, false);
SetDlgLower(88, 0, false);
//赵灵儿：
//．．．．．．．
VideoUpdate(0, false);
SetDlgUpper(4, 0, false);
//李逍遥：
//灵儿．．有什么困难吗？
VideoUpdate(0, false);
SetDlgLower(88, 0, false);
//赵灵儿：
//没什么．．
VideoRestore();
//该面对的．．总是该去面对
VideoRestore();
//我们走吧～
['@7DCF'];
RoleMoveOneStep(-6, 7, 0);
WaitEventAutoScriptRun(0, false, false);
GotoWithNop("@7DCF", 8);
FadeOut(0);
SceneEnter(292);

['Event_00232_00023_Auto'];
EventAnimate(Direction.Current);
ReplaceAndPause();
ReplaceAndPauseWithNop("Event_00232_00023_Auto", 5);

['Event_00232_00001_Auto'];
EventAnimate(Direction.Current);
ReplaceAndPause();
ReplaceAndPauseWithNop("Event_00232_00001_Auto", 0);

