['Event_00050_00030_Trigger'];
SceneEnter(51);
PartySetPos(25, 57, 1);
FadeOut(0);

['Event_00050_00003_Trigger'];
SceneEnter(53);
PartySetPos(13, 79, 0);
FadeOut(0);

['Event_00050_00002_Trigger'];
SceneEnter(55);
PartySetPos(27, 106, 0);
FadeOut(0);

['Event_00050_00004_Trigger'];
SceneEnter(52);
PartySetPos(23, 28, 1);
FadeOut(0);

['Event_00050_00005_Trigger'];
SceneEnter(52);
PartySetPos(20, 67, 1);
FadeOut(0);

['Event_00050_00006_Trigger'];
SceneEnter(52);
PartySetPos(26, 104, 0);
FadeOut(0);

['Event_00050_00007_Trigger'];
SceneEnter(52);
PartySetPos(50, 62, 1);
FadeOut(0);

['Event_00050_00008_Trigger'];
SceneEnter(52);
PartySetPos(51, 28, 1);
FadeOut(0);

['Event_00050_00009_Trigger'];
SceneEnter(52);
PartySetPos(48, 106, 0);
FadeOut(0);

['Event_00050_00001_Trigger'];
SceneEnter(49);
PartySetPos(55, 95, 1);
FadeOut(0);

['Event_00050_00010_Trigger'];
//阿九：
//大哥哥，告诉你喔！
//遇到僵尸的时候，想要
//活命的话就停止呼吸！

['Event_00050_00010_Auto'];
ReplaceAndPause();
GotoWithProbability(5, "Event_00050_00010_Auto");
NpcMoveToBlockMutexLock(25, 89, 0, 2);
NpcMoveToBlockMutexLock(25, 89, 1, 2);
NpcMoveToBlock(25, 89, 0, 3);
NpcMoveToBlock(22, 91, 1, 3);
NpcMoveToBlock(18, 87, 0, 3);
NpcMoveToBlock(20, 85, 0, 3);
NpcMoveToBlock(19, 84, 0, 3);
WaitEventAutoScriptRun(2, false, false);
NpcSetDirFrame(3, 0);
WaitEventAutoScriptRun(6, false, false);
NpcMoveToBlockMutexLock(26, 77, 0, 2);
WaitEventAutoScriptRun(3, false, false);
NpcSetDirFrame(1, 0);
WaitEventAutoScriptRun(5, false, false);
NpcMoveToBlock(31, 82, 1, 3);
NpcMoveToBlock(26, 87, 1, 3);
NpcMoveToBlock(27, 87, 0, 3);
WaitEventAutoScriptRun(11, false, false);
NpcMoveToBlock(22, 91, 1, 3);
ReplaceAndPauseWithNop("Event_00050_00010_Auto", 0);

['Event_00050_00011_Trigger'];
//小孩：
//妈妈说不可以跟陌生人讲话
EventSetAutoScript(-1, -1, "@2659");
ReplaceAndPause();

['Event_00050_00012_Trigger'];
//居民：
//韩医仙不但医术好、人也好
//所以啊～他当上本村的村长
//实在是众望所归
ReplaceAndPause();
//居民：
//韩医仙的女儿是个大美人哩！
//更难得是～她的心地跟他爹一
//样的善良，不知道哪家小伙子
//有幸能娶到她当媳妇呢！

['Event_00050_00013_Trigger'];
//小孩：
//妈妈带我去给韩医仙看病
//我的肚子就不痛了

['Event_00050_00014_Trigger'];
//守桥壮丁：
//这座桥再过去的黑水村正
//在闹僵尸，千万别到那边去。
VideoRestore();
//这是村长下的令

['Event_00050_00017_Trigger'];
//小童：
//我们在玩骑马赛跑
//看谁的木马比较快

['Event_00050_00018_Trigger'];
//小孩：
//好好玩喔！

['Event_00050_00017_Auto'];
NpcSetDirFrame(1, 0);
GotoWithProbability(50, "Event_00050_00017_Auto");
NpcMoveToBlock(38, 49, 0, 3);
NpcMoveToBlock(37, 49, 1, 3);
NpcMoveToBlock(42, 54, 1, 3);
NpcMoveToBlock(43, 54, 0, 3);
GotoWithNop("Event_00050_00017_Auto", 0);

['Event_00050_00018_Auto'];
WaitEventAutoScriptRun(3, false, false);
NpcMoveToBlock(39, 48, 0, 3);
NpcSetDirFrame(0, 0);
NpcMoveToBlock(44, 53, 1, 3);
NpcSetDirFrame(0, 0);
NpcSetDirFrame(1, 0);
NpcMoveToBlock(44, 53, 0, 3);
GotoWithNop("Event_00050_00018_Auto", 0);

['Event_00050_00019_Trigger'];
SetDlgLower(0, 0, false);
//李逍遥：
//小朋友你知不知道村长
//的家怎么去啊？
NpcSetDirFrame(2, 0);
VideoUpdate(0, false);
//小童：
//我知道啊！
//韩爷爷的家就在前面。

['Event_00050_00033_Trigger'];
SetDlgLower(0, 0, false);
//李逍遥：
//你们在这儿做什么啊？
SetDlgUpper(0, 0, false);
//我们在排队买糯米呀！
//难道你不知道糯米可以
//治僵尸的吗？

['Event_00050_00034_Trigger'];
//村民：
//唉！骆记的米店老板趁这个
//紧急的时候抬高售价，苦的
//是我们老百姓啊！

['Event_00050_00035_Trigger'];
//村民：
//不知道那黑水镇的尸妖会不会
//跑到咱们白河村来作怪。

['Event_00050_00036_Trigger'];
//村民：
//要不是韩村长好心收留从黑水
//镇逃出来的百姓，真不知道现
//在他们该怎么办。

['Event_00050_00037_Trigger'];
//村民：
//不要挤啊！
//小兄弟，买东西是要排队的。

['Event_00050_00038_Trigger'];
//村民：
//小兄弟，我看你是外地来
//的吧？！你可能不知道河东
//的黑水镇现在正在闹僵尸
//千万不要接近那儿！

['Event_00050_00039_Trigger'];
//村民：
//小伙子，别挤！

['Event_00050_00040_Trigger'];
//村民：
//不知道糯米对付僵尸
//是不是真的有效。

['Event_00050_00031_Trigger'];
SetDlgBox(0);
//河中有鲤鱼游来游去．．

['Scene_00050_Enter'];
MusicPlay(Music.小桥流水, false, false);

['Event_00050_00032_Auto'];
NpcChase(24, 4, false);
GotoWithProbability(10, "Event_00050_00032_Auto");
['@8E8D'];
ReplaceAndPause();
GotoWithProbability(20, "@8E8D");
ReplaceAndPauseWithNop("Event_00050_00032_Auto", 0);

