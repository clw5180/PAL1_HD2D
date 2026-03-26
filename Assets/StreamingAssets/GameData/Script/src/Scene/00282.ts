['Event_00282_00001_Trigger'];
SceneEnter(281);
PartySetPos(40, 49, 0);
FadeOut(0);

['Event_00282_00002_Trigger'];
SceneEnter(283);
PartySetPos(36, 106, 1);
FadeOut(0);

['Event_00282_00003_Trigger'];
SceneEnter(284);
PartySetPos(9, 54, 1);
FadeOut(0);

['Event_00282_00004_Trigger'];
SceneEnter(279);
PartySetPos(22, 106, 0);
FadeOut(0);

['Event_00282_00005_Trigger'];
SceneEnter(279);
PartySetPos(9, 91, 0);
FadeOut(0);

['Event_00282_00006_Trigger'];
SceneEnter(278);
PartySetPos(22, 103, 1);
FadeOut(0);

['Event_00282_00010_Auto'];
NpcMoveToBlock(36, 84, 1, 8);

['Event_00282_00009_Trigger'];
EventSetState(-1, 0, 0);
PartyWalkToBlock(35, 84, 1, 8);
PartyWalkToBlock(34, 85, 1, 8);
SetDlgLower(5, 0, false);
//李逍遥：
//我要替灵儿报仇！
EventSetState(4802, 1, 0);
WaitEventAutoScriptRun(4, false, false);
EventSetDirFrame(282, 7, 3, 0);
WaitEventAutoScriptRun(2, false, false);
EventSetDirFrame(282, 7, 2, 0);
WaitEventAutoScriptRun(2, false, false);
SetDlgUpper(81, 0, false);
//拜月教主：
//哈哈哈．．我的魔神兽
//再也不必惧怕任何人了
VideoRestore();
//十年了！老夫已经隐忍十年了
//要不是顾忌巫后还留个孽种在
//人世，我也不必等到现在
VideoRestore();
//现在．．没有了那臭丫头
//我的魔神兽就是真正的不死
//之身，这天下再也没有任何
//力量可以阻碍我的！
VideoUpdate(0, false);
SetDlgLower(30, 0, false);
//阿奴：
//果然～这一切都是你在搞鬼！
//十年前苗疆发生的那次大洪水
//一直到这几年来的可怕的干旱
VideoRestore();
//都是你们黑苗族破坏女娲大神
//封印，召唤太古魔兽，破坏大
//地灵气的平衡而造成的灾难。
//然后嫁祸给巫后娘娘！
VideoUpdate(0, false);
SetDlgUpper(81, 0, false);
//拜月教主：
//那些只不过是我小小的实验罢
//了，这证明我只要掌握魔神兽
//就可以操控所有天地间的力量
//我要风就风、要雨就雨。
//任何部族不听从我，我就让他
//们万劫不复！你们白苗族就是
//最好的榜样！
VideoUpdate(0, false);
SetDlgLower(31, 0, false);
//阿奴：
//你疯了．．．！
VideoUpdate(0, false);
SetDlgUpper(81, 0, false);
//拜月教主：
//谁说本座疯了！？
VideoRestore();
//王国是我的，全苗疆所有部族
//都要对本座伏首称臣！
VideoRestore();
//我第一步就要先灭掉白苗族
//然后进兵中原，让我伟大的
//黑苗族君临天下！再也没有
//人再可以轻视我黑苗族！
VideoRestore();
//你们这两个小毛头哪里知道
//老夫花了毕生的心血，为了
//就是这伟大的计划！
EventSetDirFrame(282, 7, 3, 0);
VideoUpdate(0, false);
SetDlgUpper(81, 0, false);
//拜月教主：
//现在我只要再献上一男一女的
//鲜血，而且～最好是灵力越强
//的人．．我这心爱的水魔神兽
//就能够再次的复活了！
VideoUpdate(0, false);
SetDlgLower(5, 0, false);
//李逍遥：
//做你的春秋大梦！
EventSetDirFrame(282, 7, 2, 0);
VideoUpdate(0, false);
SetDlgUpper(81, 0, false);
//拜月教主：
//呵呵．．你们两人就做为
//迎接这伟大日子的祭品吧！
VideoUpdate(0, false);
PlaySound(212);
EventSetState(4803, 1, 0);
FadeToScene(2, -1);
SetDlgUpper(2, 0, false);
//李逍遥：
//灵儿．．！
VideoUpdate(0, false);
SetDlgLower(88, 0, false);
//赵灵儿：
//逍遥哥哥、阿奴．．
//请你们务必帮我阻止他！
VideoUpdate(0, false);
SetDlgUpper(81, 0, false);
//拜月教主：
//你．．？　你没死！？
VideoUpdate(0, false);
SetDlgLower(88, 0, false);
//赵灵儿：
//在没有粉碎你的疯狂的野心
//之前，我是不会到阴间和我
//爹娘见面的！
PartySetRole(1, 2, 5);
SetBattleMusic(Music.逆天而行);
Dos_SetBattlefield(FbpDos.片尾_监制);
BattleStart(313, "@A073", "");
BattleEnd();
MusicPlay(Music.危机, false, false);
SetRng(9);
PlayRng(0, 1, 8);
SetDlgLower(9, 0, true);
//李逍遥：
//你已经无路可逃了
//伏首认罪吧！
VideoUpdate(0, false);
PlayRng(1, 16, 8);
SetDlgLower(81, 0, true);
//哼．．休得羞辱老夫！
VideoUpdate(0, false);
PlayRng(17, 54, 8);
SetDlgUpper(1, 0, true);
//李逍遥：
//这老家伙居然自己了断
VideoUpdate(0, false);
PlayRng(55, 59, 8);
SetDlgUpper(32, 0, true);
//阿奴：
//太好了～这坏蛋再也不能
//耍什么阴谋了！
VideoUpdate(0, false);
SetDlgLower(88, 0, true);
//赵灵儿：
//嗯．．．从今以后
//终于恢复和平的日子
VideoUpdate(0, false);
PlayRng(60, 74, 8);
SetDlgUpper(1, 0, true);
//李逍遥：
//这次可真多亏了阿奴
SetDlgLower(29, 0, false);
//阿奴：
//嘻．．那当然
VideoUpdate(0, false);
MusicStop(1);
VideoShake(90, 1);
PlayRng(75, 109, 8);
SetDlgUpper(1, 0, true);
//李逍遥：
//咦．．怎么回事？
SetDlgLower(88, 0, false);
//赵灵儿：
//糟了！　快走！
VideoUpdate(0, false);
QuitGame();


