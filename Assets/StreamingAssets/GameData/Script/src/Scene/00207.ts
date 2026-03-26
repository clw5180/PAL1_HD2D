['Scene_00207_Enter'];
Dos_SetBattlefield(FbpDos.扬州屋顶);
MusicPlay(Music.白河寒秋, false, false);

['Event_00207_00001_Trigger'];
SceneEnter(203);
PartySetPos(47, 26, 0);
FadeOut(0);

SceneEnter(229);
PartySetPos(47, 26, 0);
FadeOut(0);

['Event_00207_00002_Trigger'];
SceneEnter(209);
PartySetPos(16, 29, 1);
FadeOut(0);

['Event_00207_00003_Trigger'];
SceneEnter(206);
PartySetPos(46, 99, 1);
FadeOut(0);

['Event_00207_00004_Trigger'];
SceneEnter(212);
PartySetPos(17, 79, 1);
FadeOut(0);

['Event_00207_00005_Trigger'];
SceneEnter(208);
PartySetPos(35, 85, 1);
FadeOut(0);

['Event_00207_00006_Trigger'];
SceneEnter(208);
PartySetPos(44, 112, 1);
FadeOut(0);

['Event_00207_00007_Trigger'];
SceneEnter(208);
PartySetPos(23, 110, 0);
FadeOut(0);

['Event_00207_00008_Trigger'];
SceneEnter(208);
PartySetPos(20, 81, 1);
FadeOut(0);

['Event_00207_00009_Trigger'];
SceneEnter(208);
PartySetPos(19, 54, 0);
FadeOut(0);

['Event_00207_00010_Trigger'];
SceneEnter(208);
PartySetPos(45, 59, 0);
FadeOut(0);

['Event_00207_00011_Trigger'];
SceneEnter(208);
PartySetPos(44, 32, 0);
FadeOut(0);

['Event_00207_00012_Trigger'];
SceneEnter(208);
PartySetPos(17, 24, 1);
FadeOut(0);

['Event_00207_00013_Trigger'];
SceneEnter(213);
PartySetPos(8, 100, 1);
FadeOut(0);

['Event_00207_00014_Trigger'];
//守卫：
//此处是火麒麟洞圣地
//没有族长的准许，不得擅入

['Event_00207_00022_Auto'];
NpcMoveToBlockMutexLock(20, 94, 1, 2);
NpcMoveToBlockMutexLock(24, 90, 1, 2);
NpcMoveToBlockMutexLock(20, 86, 0, 2);
NpcMoveToBlockMutexLock(16, 90, 0, 2);
NpcSetDirFrame(1, 0);
ReplaceAndPause();
GotoWithProbability(2, "");
NpcMoveToBlockMutexLock(15, 91, 0, 2);
NpcMoveToBlockMutexLock(18, 94, 1, 2);
NpcMoveToBlockMutexLock(18, 95, 0, 2);
NpcMoveToBlockMutexLock(19, 96, 0, 2);
NpcMoveToBlockMutexLock(20, 95, 0, 2);
NpcMoveToBlockMutexLock(25, 100, 1, 2);
NpcSetDirFrame(2, 0);
ReplaceAndPause();
GotoWithProbability(5, "");
NpcMoveToBlockMutexLock(26, 99, 1, 2);
ReplaceAndPause();
GotoWithProbability(4, "");
NpcSetDirFrame(1, 0);
NpcSetDirFrame(0, 0);
GotoWithProbability(8, "");
NpcMoveToBlockMutexLock(26, 100, 0, 2);
GotoWithProbability(15, "");
ReplaceAndPause();
ReplaceAndPauseWithNop("Event_00207_00022_Auto", 0);

['Event_00207_00023_Auto'];
NpcMoveToBlockMutexLock(30, 114, 1, 2);
NpcMoveToBlockMutexLock(36, 109, 0, 2);
NpcMoveToBlockMutexLock(37, 110, 1, 2);
NpcMoveToBlockMutexLock(44, 103, 1, 2);
NpcMoveToBlockMutexLock(56, 115, 0, 2);
NpcMoveToBlockMutexLock(44, 103, 1, 2);
NpcMoveToBlockMutexLock(37, 110, 1, 2);
NpcMoveToBlockMutexLock(36, 109, 0, 2);
NpcMoveToBlockMutexLock(30, 114, 1, 2);
NpcMoveToBlockMutexLock(20, 104, 0, 2);
NpcSetDirFrame(0, 0);
GotoWithProbability(3, "");
ReplaceAndPauseWithNop("Event_00207_00023_Auto", 0);

['Event_00207_00018_Auto'];
NpcSetDirFrame(2, 0);
GotoWithProbability(8, "Event_00207_00018_Auto");
NpcSetDirFrame(0, 0);
WaitEventAutoScriptRun(6, false, false);
NpcSetDirFrame(3, 0);
WaitEventAutoScriptRun(4, false, false);
NpcSetDirFrame(0, 0);
NpcSetDirFrame(1, 0);
WaitEventAutoScriptRun(4, false, false);
GotoWithProbability(20, "");
NpcMoveToBlock(47, 90, 1, 3);
WaitEventAutoScriptRun(5, false, false);
NpcSetDirFrame(2, 0);
WaitEventAutoScriptRun(7, false, false);
NpcSetDirFrame(3, 0);
WaitEventAutoScriptRun(5, false, false);
NpcSetDirFrame(1, 0);
ReplaceAndPause();
EventSetAutoScript(207, 19, "@724E");
NpcMoveToBlock(45, 88, 0, 3);
ReplaceAndPause();
GotoWithProbability(10, "");
EventSetAutoScript(207, 19, "@7250");
WaitEventAutoScriptRun(5, false, false);
NpcSetDirFrame(3, 0);
WaitEventAutoScriptRun(2, false, false);
NpcMoveToBlock(48, 91, 1, 3);
WaitEventAutoScriptRun(3, false, false);
GotoWithProbability(10, "");
EventSetAutoScript(207, 19, "@7256");
WaitEventAutoScriptRun(3, false, false);
NpcMoveToBlockMutexLock(49, 92, 1, 2);
ReplaceAndPauseWithNop("Event_00002_00020_Auto", 0);

['Event_00207_00018_Trigger'];
//小孩：
//阿奴姊姊，你有没有看到
//我阿妹躲在哪里？
ReplaceAndPause();
//小孩：
//我们在玩躲猫猫，我当鬼

['Event_00207_00019_Trigger'];
//小孩：
//嘻嘻～阿妹都抓不到我

['Event_00207_00026_Trigger'];
WaitEventAutoScriptRun(0, false, false);
//小玉：
//呜．．人家不要小咪死掉

['Event_00207_00031_Trigger'];
PlaySound(178);
SetDlgCenter(0, false);
//喵～

['Event_00207_00024_Auto'];
NpcSetDirFrame(3, 0);
GotoWithProbability(6, "Event_00207_00024_Auto");
NpcMoveToBlockMutexLock(52, 80, 1, 2);
NpcSetDirFrame(3, 0);
GotoWithProbability(6, "");
NpcMoveToBlockMutexLock(51, 79, 1, 2);
GotoWithProbability(4, "");
ReplaceAndPauseWithNop("Event_00207_00024_Auto", 0);

['Event_00207_00016_Trigger'];
//白苗女兵：
//小少主，您回来啦！
ReplaceAndPause();
//白苗女兵：
//此地是族长居住的宫社

['Event_00207_00017_Trigger'];
//白苗女兵：
//族长正在和各部长老开会。
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//阿奴：
//开会？开什么会？
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//白苗女兵：
//对不起，小少主，属下不知。

['Event_00207_00020_Trigger'];
//白苗居民：
//这些黑苗族真不是个东西
//三番两次地来触我们霉头
//老虎不发威还给他们当成
//病猫了！

['Event_00207_00021_Trigger'];
//白苗居民：
//我决定要跟我们白苗族的战士
//一同去抵抗黑苗人的入侵。

['Event_00207_00022_Trigger'];
//白苗居民：
//如果我也能成为白苗族战士
//和族人一同并肩作战，是一
//件多么光荣的事啊！

['Event_00207_00023_Trigger'];
//白苗居民：
//最近黑苗族的动静很不寻常
//所以要特别的小心。

['Event_00207_00024_Trigger'];
//苗女：
//小鸡啊！小鸡，快快长大
//我们家已经没有什么粮食吃了
//就看你们怎样报答我们啰。

['Event_00207_00025_Trigger'];
//白苗妇女：
//没办法，家里已经没有什么
//粮食可吃了，所以这只小猫
//我们不得不····

['Event_00207_00027_Trigger'];
WaitEventAutoScriptRun(0, false, false);
SetDlgLower(0, 0, false);
//白苗壮丁：
//为了我们白苗族，我要出征了
//你千万不要阻止我。
VideoUpdate(0, false);
//白苗少女：
//为了我们两个，你要尽力杀敌
//喔我会等你回来的，永远！

['Event_00207_00029_Trigger'];
//路人：
//·········
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//阿奴：
//咦？你看到我怎么没打招呼呢？
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//路人：
//我为什么要跟你打招呼？
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//阿奴：
//你是谁？我怎么从没见过你。
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//路人：
//你这小丫头才是谁呐！
//为什么一定要见过我？
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//阿奴：
//我阿娘是白苗族的族长
//全白苗族的人谁不认得我？
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//路人：
//喔！对对对，你是族长的
//女儿嘛！我知道、我知道。
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//阿奴：
//不对，你不是白苗族的人
//你是不是黑苗族派来的间谍！
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//路人：
//呸！臭丫头，被你给发现了
//留你不得！
EventSetState(-1, 0, 0);
Dos_SetBattlefield(FbpDos.扬州屋顶);
SetBattleMusic(Music.势如破竹);
BattleStart(240, "@A073", "");

['Event_00207_00030_Trigger'];
//小孩：
//我阿爹被族长叫去，听说
//好像有什么重要的会要开

