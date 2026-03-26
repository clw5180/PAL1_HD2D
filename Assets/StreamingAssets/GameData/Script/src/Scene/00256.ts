['Scene_00256_Enter'];
MusicPlay(Music.颓城, false, false);

['Event_00256_00001_Trigger'];
SceneEnter(249);
PartySetPos(40, 49, 0);
FadeOut(0);

['Event_00256_00002_Trigger'];
SceneEnter(259);
PartySetPos(36, 106, 1);
FadeOut(0);

['Event_00256_00003_Trigger'];
SceneEnter(260);
PartySetPos(9, 54, 1);
FadeOut(0);

['Event_00256_00004_Trigger'];
SceneEnter(257);
PartySetPos(22, 106, 0);
FadeOut(0);

['Event_00256_00005_Trigger'];
SceneEnter(257);
PartySetPos(9, 91, 0);
FadeOut(0);

['Event_00256_00006_Trigger'];
SceneEnter(258);
PartySetPos(22, 103, 1);
FadeOut(0);

['Event_00256_00045_Auto'];
NpcMoveToBlockMutexLock(49, 90, 1, 2);
NpcMoveToBlockMutexLock(27, 68, 1, 2);
NpcMoveToBlockMutexLock(30, 66, 0, 2);
EventSetState(-1, 0, 0);

['Event_00256_00046_Auto'];
NpcMoveToBlockMutexLock(29, 90, 0, 2);
NpcMoveToBlockMutexLock(25, 94, 0, 2);
GotoWithProbability(10, "");
NpcSetDirFrame(1, 0);
GotoWithProbability(8, "");
NpcSetDirFrame(0, 0);
NpcSetDirFrame(3, 0);
GotoWithProbability(10, "");
NpcMoveToBlockMutexLock(29, 90, 0, 2);
NpcMoveToBlockMutexLock(36, 97, 0, 2);
NpcMoveToBlockMutexLock(31, 102, 0, 2);
NpcMoveToBlockMutexLock(35, 106, 1, 2);
NpcMoveToBlockMutexLock(43, 99, 0, 2);
NpcMoveToBlockMutexLock(39, 95, 0, 2);

['Event_00256_00007_Auto'];
GotoWithProbability(40, "");
EventModifyPos(-1, -1, 0, 1);
WaitEventAutoScriptRun(6, false, false);
EventModifyPos(-1, -1, 0, -1);
GotoWithProbability(50, "");
WaitEventAutoScriptRun(6, false, false);
ReplaceAndPauseWithNop("Event_00256_00007_Auto", 0);

['Event_00256_00045_Trigger'];
//士兵：
//哈哈～真是大快人心，这些
//外来的汉狗仗着他们是天朝
//子民，一直欺压我们苗人
VideoRestore();
//教主一声令下，把汉人通通
//抓起来，不愿归化入黑苗族
//者就通通处死，归化者可免
//一死，然后下放成为奴隶

['Event_00256_00046_Trigger'];
//士兵：
//别跟汉人做生意，他们最
//奸诈了。上次有个外地来的
//汉人用一箱假的黄金骗走我
//全部的田产
//这回我可逮着机会，逼他全
//家做奴隶，夺回我的土地！

['Event_00256_00039_Trigger'];
//刽子手：
//砍头是我最拿手的
//我一天可以砍一百二十个
//人头，手还不会酸呢

['Event_00256_00025_Trigger'];
//刽子手：
//一天之内要杀那么多人
//我都有点手软了

['Event_00256_00037_Trigger'];
//士兵：
//革命就要流血！
//当然～要流血的是汉人
//要生存下去的是我们

['Event_00256_00038_Trigger'];
//士兵：
//南诏城内外的汉人不是逃走
//就是都被抓来了，几乎一个
//都不剩

['Event_00256_00040_Trigger'];
//士兵：
//教主下令女人小孩也不能放过
//这就有点残忍了．．

['Event_00256_00041_Trigger'];
//士兵：
//这些汉人还真不识好歹
//在脸上刺个青，当了奴隶
//就可以保住性命，却不要

['Event_00256_00042_Trigger'];
//士兵：
//黑苗族的士兵之中，大多数人
//信仰拜月教，这任杨教主又身
//兼大祭司，所以他的势力相当
//的大，大王也要敬他三分

['Event_00256_00043_Trigger'];
//士兵：
//我们也不想屠杀汉人
//但是上面的命令如此
//我们是军人，必需听命

['Event_00256_00044_Trigger'];
//士兵：
//这王宫变成血淋淋的屠宰场了

['Event_00256_00026_Trigger'];
//汉人俘虏：
//呜．．．我不要死

