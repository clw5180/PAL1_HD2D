['Event_00023_00008_Trigger'];
SceneEnter(24);

['Event_00023_00009_Trigger'];
SceneEnter(22);
PartySetPos(42, 24, 1);
FadeOut(0);

['Event_00023_00001_Trigger'];
//大宝：
//一、二、三··嗯··
ReplaceAndPause();
//大宝：
//五、六··八、十····

['Event_00023_00002_Trigger'];
//二宝：
//马儿快跑、马儿快跑
//马儿不吃墙头草···

['Event_00023_00006_Trigger'];
SceneEnter(25);
PartySetPos(10, 67, 0);
FadeOut(0);

['Event_00023_00007_Trigger'];
SceneEnter(25);
PartySetPos(37, 69, 1);
FadeOut(0);

['Event_00023_00003_Trigger'];
//小宝：
//呜．．哥哥都不跟我玩

['Event_00023_00004_Trigger'];
//员外：
//哎．．．．
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//老伯～　您为何唉声叹气呢？
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//员外：
//我的宝贝女儿小玉，前些日子
//到城外河边游玩时人就不见了
//我派许多人去找一直找不到
VideoRestore();
//有人看到她是被妖怪给抓走的
//呜．．如果真是这样，我可能
//永远再也见不到小玉了．．
VideoUpdate(0, false);
SetDlgLower(11, 0, false);
//赵灵儿：
//老伯，这也很难说呀
//并非妖怪都是会害人的
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//员外：
//如果我女儿真的有什么三长
//两短，只能怪她命不好
VideoRestore();
//我担心的是．．听说那妖怪
//是只生性淫恶的半人蛇妖
//要是．．要是．．叫她以后
//如何做人呐！
SetDlgLower(15, 0, false);
//赵灵儿：
//．．．．．．．
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//员外：
//对了．．这位姑娘
//你最好也要小心，那蛇妖所
//抓走的，都是像你这般年纪
//的女孩子
ReplaceAndPause();
//员外：
//呜．．我的女儿

['Scene_00023_Enter'];
MusicPlay(Music.风光, false, false);

['Event_00023_00004_Auto'];
NpcMoveToBlockMutexLock(39, 101, 1, 2);
WaitEventAutoScriptRun(8, false, false);
NpcMoveToBlockMutexLock(41, 99, 1, 2);
NpcMoveToBlockMutexLock(37, 95, 0, 2);
WaitEventAutoScriptRun(4, false, false);
NpcMoveToBlockMutexLock(39, 93, 0, 2);
NpcMoveToBlockMutexLock(37, 94, 1, 2);
WaitEventAutoScriptRun(4, false, false);
NpcMoveToBlockMutexLock(25, 82, 0, 2);
NpcMoveToBlockMutexLock(23, 83, 1, 2);
NpcMoveToBlockMutexLock(32, 92, 0, 2);
NpcMoveToBlockMutexLock(33, 91, 0, 2);
WaitEventAutoScriptRun(8, false, false);
NpcMoveToBlockMutexLock(41, 99, 1, 2);
NpcMoveToBlockMutexLock(42, 99, 0, 2);
ReplaceAndPauseWithNop("Event_00023_00004_Auto", 0);

['Event_00023_00005_Auto'];
NpcMoveToBlockMutexLock(25, 85, 0, 2);
WaitEventAutoScriptRun(4, false, false);
NpcMoveToBlockMutexLock(29, 89, 1, 2);
NpcMoveToBlockMutexLock(22, 82, 1, 2);
NpcMoveToBlockMutexLock(23, 82, 0, 2);
WaitEventAutoScriptRun(5, false, false);
NpcSetDirFrame(1, 0);
WaitEventAutoScriptRun(8, false, false);
NpcSetDirFrame(2, 0);
WaitEventAutoScriptRun(4, false, false);
NpcMoveToBlockMutexLock(18, 77, 0, 2);
NpcMoveToBlockMutexLock(12, 82, 1, 2);
WaitEventAutoScriptRun(8, false, false);
NpcMoveToBlockMutexLock(13, 83, 0, 2);
NpcMoveToBlockMutexLock(18, 78, 0, 2);
WaitEventAutoScriptRun(2, false, false);
NpcMoveToBlockMutexLock(26, 86, 0, 2);
NpcMoveToBlockMutexLock(28, 84, 0, 2);
WaitEventAutoScriptRun(3, false, false);
NpcMoveToBlockMutexLock(27, 83, 0, 2);
WaitEventAutoScriptRun(5, false, false);
ReplaceAndPauseWithNop("Event_00023_00005_Auto", 0);

['Event_00023_00005_Trigger'];
//少女：
//大家都说苏州出美女
//你们瞧～我算不算是美女啊
ReplaceAndPause();
//少女：
//哼～真没眼光

['Event_00023_00010_Trigger'];
//来、来、来！
//要看精彩的表演赶紧来
ReplaceAndPause();
['Event_00023_00011_Trigger'];
//我们兄弟尽走大江南北
//靠的是真功夫、硬本事
//请大家多多捧场
ReplaceAndPause();
//呵～　啊～！

['Event_00023_00012_Trigger'];
//观众：
//哎呦．．好可怕
ReplaceAndPause();
//观众：
//把剑吞下去，肚子不痛吗？
ReplaceAndPauseWithNop("Event_00023_00012_Trigger", 0);

['Event_00023_00013_Trigger'];
//小孩：
//他真的把剑吞到肚子里面吗？
ReplaceAndPause();
//小孩：
//好像是真的呢

['Event_00023_00014_Trigger'];
//观众：
//老把戏～看多啦！

['Event_00023_00015_Trigger'];
//观众：
//这两位功夫耍的不错
//就不知一天能赚多少钱

['Event_00023_00016_Trigger'];
//小孩：
//哗．．好厉害喔！

['Event_00023_00011_Auto'];
EventAnimate(Direction.Current);
GotoWithNop("Event_00023_00011_Auto", 0);

['Event_00023_00016_Auto'];
NpcSetDirFrame(0, 0);
ReplaceAndPauseWithNop("Event_00023_00016_Auto", 0);

['Event_00023_00002_Auto'];
EventAnimate(Direction.Current);
ReplaceAndPause();
EventAnimate(Direction.Southeast);
EventAnimate(Direction.Southeast);
EventAnimate(Direction.Southeast);
EventAnimate(Direction.Southeast);
ReplaceAndPause();
EventAnimate(Direction.Southeast);
EventAnimate(Direction.Southeast);
EventAnimate(Direction.Southeast);
EventAnimate(Direction.Southeast);
ReplaceAndPause();
EventAnimate(Direction.Southeast);
EventAnimate(Direction.Southeast);
EventAnimate(Direction.Southeast);
EventAnimate(Direction.Southeast);
ReplaceAndPause();
ReplaceAndPause();
EventAnimate(Direction.Southwest);
EventAnimate(Direction.Southwest);
EventAnimate(Direction.Southwest);
EventAnimate(Direction.Southwest);
ReplaceAndPause();
EventAnimate(Direction.Southwest);
EventAnimate(Direction.Southwest);
EventAnimate(Direction.Southwest);
EventAnimate(Direction.Southwest);
['@8CF5'];
ReplaceAndPause();
GotoWithProbability(20, "@8CF5");
EventAnimate(Direction.Northwest);
EventAnimate(Direction.Northwest);
EventAnimate(Direction.Northwest);
EventAnimate(Direction.Northwest);
ReplaceAndPause();
EventAnimate(Direction.Northwest);
EventAnimate(Direction.Northwest);
EventAnimate(Direction.Northwest);
EventAnimate(Direction.Northwest);
EventAnimate(Direction.Southwest);
EventAnimate(Direction.Southwest);
EventAnimate(Direction.Southwest);
EventAnimate(Direction.Southwest);
['@8D04'];
ReplaceAndPause();
GotoWithProbability(20, "@8D04");
EventAnimate(Direction.Northeast);
EventAnimate(Direction.Northeast);
EventAnimate(Direction.Northeast);
EventAnimate(Direction.Northeast);
ReplaceAndPause();
EventAnimate(Direction.Northeast);
EventAnimate(Direction.Northeast);
EventAnimate(Direction.Northeast);
EventAnimate(Direction.Northeast);
ReplaceAndPause();
EventAnimate(Direction.Northeast);
EventAnimate(Direction.Northeast);
EventAnimate(Direction.Northeast);
EventAnimate(Direction.Northeast);
ReplaceAndPause();
ReplaceAndPause();
EventAnimate(Direction.Northwest);
EventAnimate(Direction.Northwest);
EventAnimate(Direction.Northwest);
EventAnimate(Direction.Northwest);
ReplaceAndPauseWithNop("Event_00023_00002_Auto", 0);

['Event_00023_00003_Auto'];
ReplaceAndPause();
GotoWithProbability(5, "Event_00023_00003_Auto");
NpcSetDirFrame(2, 0);
['@8D27'];
ReplaceAndPause();
GotoWithProbability(8, "@8D27");
NpcSetDirFrame(1, 0);
ReplaceAndPauseWithNop("Event_00023_00003_Auto", 0);

['Event_00023_00010_Auto'];
NpcSetFrame(0);
WaitEventAutoScriptRun(8, false, false);
NpcSetFrame(1);
WaitEventAutoScriptRun(2, false, false);
NpcSetFrame(2);
WaitEventAutoScriptRun(2, false, false);
NpcSetFrame(3);
WaitEventAutoScriptRun(20, false, false);
NpcSetFrame(2);
ReplaceAndPause();
NpcSetFrame(1);
ReplaceAndPauseWithNop("Event_00023_00010_Auto", 0);

