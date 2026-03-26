['Event_00209_00001_Trigger'];
SceneEnter(207);
PartySetPos(47, 106, 1);
FadeOut(0);

['Event_00209_00002_Trigger'];
SceneEnter(210);
PartySetPos(22, 87, 0);
FadeOut(0);

['Event_00209_00003_Trigger'];
SceneEnter(210);
PartySetPos(28, 59, 0);
FadeOut(0);

['Event_00209_00004_Trigger'];
SceneEnter(210);
PartySetPos(42, 59, 0);
FadeOut(0);

['Event_00209_00005_Trigger'];
SceneEnter(210);
PartySetPos(24, 28, 1);
FadeOut(0);

['Event_00209_00006_Trigger'];
SceneEnter(210);
PartySetPos(45, 28, 0);
FadeOut(0);

['Event_00209_00008_Trigger'];
WaitEventAutoScriptRun(3, false, false);
//阿蛮：
//汉家哥哥～你是真心爱我吗？
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//汉家郎：
//我当然是真心的！
//纵使石可烂、海可枯．．
//我仍然要一辈子守着你
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//阿蛮：
//这里哪来的海呀？你们汉人
//最会编这些花言巧语了～
NpcSetDirFrame(1, 0);
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//汉家郎：
//那就这条河吧！
//我对这条河发誓．．
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//阿蛮：
//换别的啦～
//这条河都已经干了
NpcSetDirFrame(2, 0);
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//汉家郎：
//．．．．．．．．
ReplaceAndPause();
WaitEventAutoScriptRun(3, false, false);
SetDlgLower(0, 0, false);
//汉家郎：
//阿蛮～嫁给我吧
//我发誓，我会使你幸福的！

['Event_00209_00013_Trigger'];
//汉人居民：
//唉．．何时才会下雨呢？

['Event_00209_00017_Auto'];
NpcMoveToBlockMutexLock(27, 39, 0, 2);
NpcSetDirFrame(2, 0);
ReplaceAndPause();
EventSetAutoScript(209, 13, "Event_00023_00016_Auto");
ReplaceAndPause();
GotoWithProbability(4, "");
NpcMoveToBlockMutexLock(33, 45, 1, 2);
NpcMoveToBlockMutexLock(32, 46, 1, 2);
NpcMoveToBlockMutexLock(34, 48, 0, 2);
NpcMoveToBlockMutexLock(32, 49, 1, 2);
NpcSetDirFrame(1, 0);

['Event_00209_00014_Trigger'];
//汉人居民：
//吃的食物没了倒还好，如果
//连喝的水都没有，就不知道
//还能熬多久了。

['Event_00209_00015_Trigger'];
//汉人妇女：
//不光是没水喝，衣服也没得洗
//澡也没得泡，真不是人过的生活

['Event_00209_00016_Trigger'];
//汉人居民：
//唉！现在连唯一的水井都干了
//该怎么办呢？

['Event_00209_00017_Trigger'];
//汉人居民：
//每天都要过着战战兢兢的日子
//谁知道黑苗族的人什么时候又
//会打过来。

['Event_00209_00018_Trigger'];
//汉人少女：
//多亏白苗人的宽宏大量
//我们汉苗两方才能融洽相处
VideoRestore();
//但是黑苗族的人就不一样了
//见到汉人就像仇人似的
//不知道是为了什么。

['Event_00209_00009_Trigger'];
//小孩：
//看，我可以跳那么多下
//你行吗？

['Event_00209_00010_Trigger'];
//小孩：
//大姊姊，来啊！
//一起跟我们玩嘛！

['Event_00209_00011_Trigger'];
//苗族小孩：
//还要多久嘛
//人家等不及了啦！

['Event_00209_00012_Trigger'];
WaitEventAutoScriptRun(0, false, false);
//小孩：
//不要急，就快要轮到我们玩了。

