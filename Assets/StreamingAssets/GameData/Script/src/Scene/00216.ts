['Event_00216_00001_Trigger'];
SceneEnter(215);
PartySetPos(12, 54, 0);
FadeOut(0);

['Event_00216_00002_Trigger'];
SceneEnter(217);
PartySetPos(14, 72, 0);
FadeOut(0);

['Event_00216_00003_Trigger'];
SceneEnter(217);
PartySetPos(21, 80, 0);
FadeOut(0);

['Event_00216_00004_Trigger'];
SceneEnter(217);
PartySetPos(33, 52, 1);
FadeOut(0);

['Event_00216_00012_Auto'];
NpcMoveToBlock(36, 22, 0, 3);
NpcMoveToBlock(36, 21, 1, 3);
NpcSetDirFrame(2, 0);

['Event_00216_00005_Trigger'];
MusicStop(0);
SetDlgCenter(0, false);
//谁！？
SetBattleMusic(Music.势如破竹_副本);
BattleStart(223, "", "");
SetBattleMusic(Music.势如破竹);
BattleEnd();
EventSetState(3665, 1, 0);
WaitEventAutoScriptRun(18, false, false);
SetDlgLower(0, 0, false);
//阿奴：
//通通给我住手！！
WaitEventAutoScriptRun(18, false, false);
SetDlgLower(28, 0, false);
//阿奴：
//盖姐！你这是做什么？
//为何对逍遥大哥动手？
VideoUpdate(0, false);
SetDlgUpper(44, 0, false);
//盖罗娇：
//此人看见我军的机密
//为了谨慎起见，所以属下
//必须将他擒下
VideoRestore();
//咱们在这培养毒兽的事
//可不能让外人知道啊！
VideoUpdate(0, false);
SetDlgLower(30, 0, false);
//阿奴：
//他是我和婆婆的朋友
//你们不许对他无礼！
//而且，是婆婆要他来这里的
VideoUpdate(0, false);
SetDlgUpper(44, 0, false);
//盖罗娇：
//是．．既然是圣姑的朋友
//那也就是我族的朋友
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//阿奴～盖将军是职责所在
//这只是一场误会，大家把话
//说明白就没事了
EventSetDirFrame(216, 12, 3, 0);
VideoUpdate(0, false);
SetDlgUpper(27, 0, false);
//阿奴：
//逍遥哥～你有没有怎样？
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//我．．没什么～还好
VideoUpdate(0, false);
SetDlgUpper(44, 0, false);
//盖罗娇：
//小少主．．．
//你怎么跟这汉人在一起？
//他可是有妻室的人呢．．
EventSetDirFrame(216, 12, 1, 0);
VideoUpdate(0, false);
SetDlgLower(27, 0, false);
//阿奴：
//盖姐～　你别管人家嘛！
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//盖大姐，我来此地别无他意
//而是此谷盛产傀儡虫，老婆婆
//要我替他前来采集，还请大姐
//通融放行．．
VideoUpdate(0, false);
SetDlgUpper(44, 0, false);
//盖罗娇：
//呦～李公子这么说就太客
//气了，您可是位大贵人呢！
//我等先前无知冒犯，还请您
//大人不记小人过才是
VideoRestore();
//不打扰您和小少主
//．．．告辞了！
EventSetState(2862, 0, 0);
EventSetState(2866, 1, 0);
EventSetStateSequence(216, 5, 11, 0);
EventSetDirFrame(216, 12, 3, 0);
RoleSetDirFrame(3, 0, 0);
FadeOut(0);
VideoUpdate(0, false);
RoleSetDirFrame(0, 0, 0);
WaitEventAutoScriptRun(2, false, false);
RoleSetDirFrame(1, 0, 0);
WaitEventAutoScriptRun(2, false, false);
SetDlgLower(1, 0, false);
//李逍遥：
//你怎么也来了？我女儿呢？
VideoUpdate(0, false);
SetDlgUpper(27, 0, false);
//阿奴：
//小宝宝要妈妈抱才肯乖乖的
//其他人抱着就一直哭个不停
//我就交给灵儿姐姐啦
VideoRestore();
//对了．．
//是婆婆要你来收集傀儡虫吗？
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//是的，要凑齐三十六只
VideoUpdate(0, false);
SetDlgUpper(27, 0, false);
//阿奴：
//这么多啊！？
VideoRestore();
//奇怪．．婆婆一次要
//这么多傀儡虫做什么？
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//我也不清楚．．总之～
//你快完成老婆婆交待的事吧
EventSetState(3665, 0, 0);
PartySetRole(1, 5, 0);
MusicPlay(Music.灵山, false, false);

