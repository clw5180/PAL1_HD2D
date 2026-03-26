['Event_00083_00001_Trigger'];
SceneEnter(85);
PartySetPos(6, 23, 1);
FadeOut(0);

['Event_00083_00002_Trigger'];
SceneEnter(85);
PartySetPos(11, 80, 1);
FadeOut(0);

['Event_00083_00003_Trigger'];
SceneEnter(94);
PartySetPos(25, 56, 1);
FadeOut(0);

['Event_00083_00004_Trigger'];
SceneEnter(97);
PartySetPos(21, 41, 0);
FadeOut(0);

['Event_00083_00005_Trigger'];
SceneEnter(97);
PartySetPos(45, 42, 1);
FadeOut(0);

['Event_00083_00006_Trigger'];
SceneEnter(97);
PartySetPos(17, 67, 0);
FadeOut(0);

['Event_00083_00007_Trigger'];
SceneEnter(96);
PartySetPos(17, 44, 0);
FadeOut(0);

['Event_00083_00008_Trigger'];
SceneEnter(95);
PartySetPos(15, 31, 0);
FadeOut(0);

['Event_00083_00009_Auto'];
NpcMoveToBlock(29, 71, 0, 3);
NpcMoveToBlock(28, 72, 0, 3);
['Event_00083_00010_Auto'];
NpcMoveToBlock(29, 73, 0, 3);
NpcMoveToBlock(30, 72, 0, 3);
GotoWithNop("Event_00083_00009_Auto", 0);

['Event_00083_00011_Auto'];
NpcMoveToBlockMutexLock(29, 41, 0, 2);
NpcMoveToBlockMutexLock(21, 33, 1, 2);
ReplaceAndPause();
NpcSetDirFrame(2, 0);
WaitEventAutoScriptRun(15, false, false);
NpcSetDirFrame(3, 0);
WaitEventAutoScriptRun(3, false, false);
NpcSetDirFrame(2, 0);
WaitEventAutoScriptRun(6, false, false);
NpcSetDirFrame(3, 0);
ReplaceAndPause();
NpcMoveToBlockMutexLock(30, 42, 0, 2);
NpcMoveToBlockMutexLock(50, 21, 1, 2);
NpcMoveToBlock(49, 20, 1, 3);
GotoWithNop("Event_00083_00011_Auto", 0);

['Event_00083_00014_Auto'];
NpcMoveToBlockMutexLock(42, 87, 0, 2);
NpcMoveToBlockMutexLock(28, 73, 1, 2);
NpcSetDirFrame(2, 0);
WaitEventAutoScriptRun(8, false, false);
NpcSetDirFrame(1, 0);
ReplaceAndPause();
NpcMoveToBlockMutexLock(20, 65, 0, 2);
NpcMoveToBlockMutexLock(45, 40, 0, 2);
WaitEventAutoScriptRun(8, false, false);
NpcSetDirFrame(3, 0);
NpcSetDirFrame(0, 0);
WaitEventAutoScriptRun(6, false, false);
NpcMoveToBlockMutexLock(20, 65, 0, 2);
NpcMoveToBlockMutexLock(42, 87, 0, 2);
NpcMoveToBlockMutexLock(57, 72, 0, 2);
ReplaceAndPauseWithNop("Event_00083_00014_Auto", 0);

['Event_00083_00015_Auto'];
NpcMoveToBlockMutexLock(41, 86, 1, 2);
NpcMoveToBlockMutexLock(29, 74, 1, 2);
WaitEventAutoScriptRun(10, false, false);
NpcMoveToBlockMutexLock(19, 64, 1, 2);
NpcMoveToBlockMutexLock(44, 39, 1, 2);
WaitEventAutoScriptRun(3, false, false);
NpcSetDirFrame(3, 0);
NpcSetDirFrame(0, 0);
WaitEventAutoScriptRun(3, false, false);
NpcMoveToBlockMutexLock(19, 64, 1, 2);
NpcMoveToBlockMutexLock(41, 86, 1, 2);
NpcMoveToBlockMutexLock(56, 71, 1, 2);
ReplaceAndPauseWithNop("Event_00083_00015_Auto", 0);

['Event_00083_00016_Auto'];
NpcMoveToBlockMutexLock(42, 87, 1, 2);
NpcMoveToBlockMutexLock(30, 75, 1, 2);
WaitEventAutoScriptRun(10, false, false);
NpcMoveToBlockMutexLock(20, 65, 1, 2);
NpcMoveToBlockMutexLock(45, 40, 1, 2);
WaitEventAutoScriptRun(2, false, false);
NpcSetDirFrame(3, 0);
NpcSetDirFrame(0, 0);
WaitEventAutoScriptRun(4, false, false);
NpcMoveToBlockMutexLock(20, 65, 1, 2);
NpcMoveToBlockMutexLock(42, 87, 1, 2);
NpcMoveToBlockMutexLock(57, 72, 1, 2);
ReplaceAndPauseWithNop("Event_00083_00016_Auto", 0);

['Event_00083_00017_Auto'];
NpcMoveToBlockMutexLock(16, 69, 0, 2);
ReplaceAndPause();
NpcSetDirFrame(2, 0);
WaitEventAutoScriptRun(7, false, false);
NpcSetDirFrame(1, 0);
WaitEventAutoScriptRun(4, false, false);
NpcSetDirFrame(0, 0);
WaitEventAutoScriptRun(10, false, false);
NpcSetDirFrame(1, 0);
NpcMoveToBlockMutexLock(7, 60, 1, 2);
WaitEventAutoScriptRun(2, false, false);
NpcSetDirFrame(0, 0);
WaitEventAutoScriptRun(10, false, false);
NpcMoveToBlockMutexLock(30, 83, 0, 2);
WaitEventAutoScriptRun(3, false, false);
ReplaceAndPauseWithNop("Event_00083_00017_Auto", 0);

['Event_00083_00024_Trigger'];
//醉鬼：
//辣块妈妈地，这县太爷真不是
//东西···呃！··
//我弟弟也没犯什么罪，无缘无
//故地就被抓了起来···
EventSetAutoScript(-1, -1, "@34AF");
EventSetTriggerMode(-1, -1, false, 0);

['Event_00083_00025_Trigger'];
//醉鬼：
//呃！···好喝、真好喝！
EventSetAutoScript(-1, -1, "@34C9");
EventSetTriggerMode(-1, -1, false, 0);

['Event_00083_00024_Auto'];
NpcSetFrame(0);
ReplaceAndPause();
NpcSetFrame(1);
WaitEventAutoScriptRun(4, false, false);
NpcSetFrame(0);
WaitEventAutoScriptRun(2, false, false);
NpcSetFrame(2);
WaitEventAutoScriptRun(2, false, false);
NpcSetFrame(0);
ReplaceAndPause();
NpcSetFrame(3);
WaitEventAutoScriptRun(5, false, false);
NpcSetFrame(0);
ReplaceAndPause();
NpcSetFrame(2);
WaitEventAutoScriptRun(3, false, false);
ReplaceAndPauseWithNop("Event_00083_00024_Auto", 0);

['Event_00083_00025_Auto'];
NpcSetFrame(0);
GotoWithProbability(40, "Event_00083_00025_Auto");
WaitEventAutoScriptRun(12, false, false);
NpcSetFrame(1);
ReplaceAndPause();
ReplaceAndPauseWithNop("Event_00083_00025_Auto", 0);

['Event_00083_00018_Trigger'];
//告示：
//"近日女飞贼集团目无法纪
//於城中四处行窃、作恶多端
//特颁此令，有消息密报经证
//实者赏银二百两。"

['Event_00083_00019_Trigger'];
//少女：
//客人，要买什么东西，尽管挑。
VideoUpdate(0, false);
ShowBuyItemMenu(12);

['Event_00083_00020_Trigger'];
//当铺老板：
//是不是要典当些什么东西啊？
//赶紧拿出来吧！
VideoUpdate(0, false);
ShowSellItemMenu();

['Event_00083_00009_Trigger'];
//大宝：
//喂，你不要跑嘛！
SetDlgLower(0, 0, false);
//二宝：
//你不要追，我就不会跑了呀！

['Event_00083_00014_Trigger'];
//巡捕：
//小子，你是从哪儿来的？
//一副贼头贼脑的样子，说！
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//李逍遥：
//我是从余杭县来的
//只是要找人而已。

['Event_00083_00015_Trigger'];
//官差：
//小伙子，在扬州城里可别
//想动什么歪脑筋喔！

['Event_00083_00016_Trigger'];
//官差：
//看你是外地来的吧？！
//小心一点，晚上不要到处乱跑

['Event_00083_00012_Trigger'];
//路人：
//最近女飞贼实在有够猖狂
//什么好东西都偷走了
//搞得我们只好喝西北风。

['Event_00083_00013_Trigger'];
//路人：
//唉！这也难怪扬州城的治
//安日渐恶化，太守没作为
//养的手下又是一群废物
//想破案，难喔！

['Event_00083_00011_Trigger'];
//居民：
//城内人心惶惶，老百姓们都
//想要快快离开这个鬼地方。

