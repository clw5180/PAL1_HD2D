['Scene_00005_Enter'];
MusicPlay(Music.晨光, false, false);
['@0002'];
ReplaceAndPause();

['Event_00005_00019_Trigger'];
PartySetPos(33, 104, 0);
SceneEnter(4);
FadeOut(0);

['Event_00005_00022_Trigger'];
PartySetPos(20, 31, 1);
SceneEnter(9);
FadeOut(0);

['Event_00005_00026_Auto'];
EventSyncState(5, 27, 0);
ReplaceAndPauseWithNop("Event_00005_00026_Auto", 0);

['Event_00005_00027_Auto'];
EventSyncState(5, 26, 0);
ReplaceAndPauseWithNop("Event_00005_00027_Auto", 0);

['Event_00005_00028_Auto'];
EventSyncState(5, 29, 0);
ReplaceAndPauseWithNop("Event_00005_00028_Auto", 0);

['Event_00005_00029_Auto'];
EventSyncState(5, 28, 0);
ReplaceAndPauseWithNop("Event_00005_00029_Auto", 0);

['Event_00005_00010_Trigger'];
//旺财嫂：
//喂～　你知道吗？
//听说卖盐的老王，上个月生了
//一场怪病，所有大夫都说没得
//医了，结果你猜怎么着？
SetDlgLower(0, 0, false);
//来福婶：
//怎么了？
//老王还活着好好的啊！
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//旺财嫂：
//那是他的儿子小虎跑到"仙灵岛"
//上，死求活求的，结果岛上的
//仙女给他一颗仙丹，老王吃了
//仙丹，病马上好了一大半．
SetDlgLower(0, 0, false);
//来福婶：
//真有这种新鲜事？　呵～
//看不出来，小虎子还真行哪．
ReplaceAndPause();
//旺财嫂：
//常言道．．好人有好命
//而且老王平日一向乐善好施
//应该说是老天有眼．．

['Event_00005_00011_Trigger'];
//来福婶：
//嗨～小李子！你婶婶还在店
//里头忙啊？怎么没见她来这
//洗衣服．．
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//是啊．．今天一大早就来了
//一伙人要住店
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//来福婶：
//李大娘真是劳碌命啊．．
ReplaceAndPause();
//来福婶：
//洗呀～　洗呀～

['Event_00005_00012_Trigger'];
//阿珠：
//咕．．咕．．
//快快吃，快快长大喔．．

['Event_00005_00012_Auto'];
NpcSetFrame(1);
GotoWithProbability(8, "Event_00005_00012_Auto");
ReplaceAndPause();
NpcSetFrame(3);
ReplaceAndPause();
NpcSetFrame(0);
WaitEventAutoScriptRun(8, false, false);
NpcSetFrame(1);
ReplaceAndPause();
NpcSetFrame(2);
NpcSetFrame(3);
NpcSetFrame(4);
EventSetAutoScript(5, 13, "@0348");
WaitEventAutoScriptRun(6, false, false);
ReplaceAndPauseWithNop("Event_00005_00012_Auto", 0);

['Event_00005_00001_Trigger'];
VideoUpdate(0, false);
EventSetTriggerMode(-1, -1, false, 3);
SetDlgUpper(87, 0, false);
//王小虎：
//逍遥哥哥！你今天再带我去
//树林里去找鸟窝，好不好吗
SetDlgLower(1, 0, false);
//李逍遥：
//小虎子，大哥哥还有事要忙
//今天不能带你去啰．．
VideoUpdate(0, false);
SetDlgUpper(87, 0, false);
//王小虎：
//呜．．好可惜喔
//那明天．．
//明天你要带我去喔！
SetDlgLower(6, 0, false);
//李逍遥：
//呵．．再说啦
ReplaceAndPause();
['@0360'];
//王小虎：
//明天你一定要带我去玩
//不可以赖皮喔！
SetDlgLower(0, 0, false);
//李逍遥：
//好啦，好啦，你去玩你的吧！
ReplaceAndPauseWithNop("@0360", 0);

['Event_00005_00001_Auto'];
NpcMoveToBlockMutexLock(41, 99, 0, 2);
NpcMoveToBlockMutexLock(40, 98, 1, 2);
NpcMoveToBlock(44, 94, 1, 3);
NpcMoveToBlock(41, 91, 0, 3);
NpcMoveToBlock(43, 88, 1, 3);
NpcMoveToBlock(39, 84, 1, 3);
NpcMoveToBlock(37, 87, 0, 3);
NpcMoveToBlock(36, 86, 0, 3);
NpcMoveToBlock(25, 97, 0, 3);
NpcMoveToBlock(25, 97, 1, 3);
NpcMoveToBlock(27, 95, 1, 3);
NpcMoveToBlock(36, 104, 0, 3);
GotoWithNop("Event_00005_00001_Auto", 0);

['Event_00005_00007_Trigger'];
EventSetDirFrame(5, 7, 0, 4);
VideoUpdate(0, false);
EventSetAutoScript(5, 7, "@8D77");
//丁大伯：
//年青人应该勤快些，可别学人
//好吃懒做！
ReplaceAndPause();
EventSetDirFrame(5, 7, 0, 4);
VideoUpdate(0, false);
EventSetAutoScript(5, 7, "@8D77");
//丁大伯：
//李大娘也真辛苦，守这么多年
//寡，自己一个人经营这间客栈
//还把你一手带大，你啊～应该
//好好孝顺她！
SetDlgLower(0, 0, false);
//李逍遥：
//是～丁伯伯，我知道啦．
ReplaceAndPause();
EventSetDirFrame(5, 7, 0, 4);
VideoUpdate(0, false);
EventSetAutoScript(5, 7, "@8D77");
//丁大伯：
//不是我爱说你，你也这么大了
//还整天不正经似的，该找份工
//作，老老实实的做人才对

['Event_00005_00008_Trigger'];
VideoUpdate(0, false);
EventSetTriggerMode(-1, -1, false, 3);
SetDlgUpper(52, 0, false);
//香兰：
//李家哥哥．．早安～
//我．．我想．．
SetDlgLower(1, 0, false);
//李逍遥：
//哦？什么事．．说啊！
VideoUpdate(0, false);
SetDlgUpper(52, 0, false);
//香兰：
//没．．没什么．．

['Event_00005_00009_Trigger'];
SetDlgUpper(33, 0, false);
//秀兰：
//李大哥今天怎么起的这么早啊
SetDlgLower(6, 0, false);
//李逍遥：
//啊．．早，秀兰妹子今天这么
//早就在帮丁伯伯挑水浇菜呀．
VideoUpdate(0, false);
SetDlgUpper(33, 0, false);
//秀兰：
//可不是嘛．．谁能像你这么闲
//我大姊今天天没亮就起了个早
//烧了一大锅甜粥，也不知道是
//弄给谁吃的？
//等一下我有件东西要送给你
//你等会再来找我拿
EventSetTriggerScript(5, 8, "@04D5");
ReplaceAndPause();
SetDlgUpper(33, 0, false);
//秀兰：
//李大哥．．早～

['Event_00005_00008_Auto'];
NpcMoveToBlockMutexLock(54, 102, 1, 2);
NpcMoveToBlockMutexLock(52, 100, 1, 2);
NpcMoveToBlockMutexLock(55, 97, 1, 2);
NpcMoveToBlockMutexLock(50, 92, 0, 2);
WaitEventAutoScriptRun(5, false, false);
NpcSetDirFrame(2, 0);
WaitEventAutoScriptRun(5, false, false);
NpcMoveToBlockMutexLock(41, 100, 1, 2);
WaitEventAutoScriptRun(4, false, false);
NpcMoveToBlockMutexLock(40, 99, 0, 2);
NpcMoveToBlockMutexLock(38, 101, 0, 2);
ReplaceAndPause();
NpcSetDirFrame(1, 0);
WaitEventAutoScriptRun(8, false, false);
NpcMoveToBlockMutexLock(37, 102, 0, 2);
ReplaceAndPause();
NpcSetDirFrame(1, 0);
WaitEventAutoScriptRun(3, false, false);
NpcSetDirFrame(3, 0);
WaitEventAutoScriptRun(5, false, false);
NpcMoveToBlockMutexLock(43, 108, 0, 2);
NpcMoveToBlockMutexLock(48, 103, 0, 2);
WaitEventAutoScriptRun(8, false, false);
NpcMoveToBlockMutexLock(47, 102, 1, 2);
NpcMoveToBlockMutexLock(47, 103, 0, 2);
WaitEventAutoScriptRun(4, false, false);
NpcMoveToBlockMutexLock(45, 104, 1, 2);
WaitEventAutoScriptRun(9, false, false);
NpcMoveToBlockMutexLock(45, 105, 0, 2);
NpcMoveToBlockMutexLock(45, 105, 1, 2);
WaitEventAutoScriptRun(2, false, false);
NpcMoveToBlockMutexLock(49, 109, 0, 2);
NpcSetDirFrame(0, 0);
WaitEventAutoScriptRun(2, false, false);
EventSetAutoScript(5, 7, "@8D77");
WaitEventAutoScriptRun(7, false, false);
NpcMoveToBlock(51, 106, 1, 3);
NpcSetDirFrame(1, 0);
WaitEventAutoScriptRun(4, false, false);
NpcMoveToBlock(54, 104, 0, 3);
NpcMoveToBlockMutexLock(53, 103, 1, 2);
NpcSetDirFrame(0, 0);
WaitEventAutoScriptRun(3, false, false);
NpcSetDirFrame(3, 0);
WaitEventAutoScriptRun(2, false, false);
ReplaceAndPauseWithNop("Event_00005_00008_Auto", 0);

['Event_00005_00009_Auto'];
WaitEventAutoScriptRun(15, false, false);
NpcSetDirFrame(3, 0);
WaitEventAutoScriptRun(2, false, false);
NpcSetDirFrame(0, 0);
NpcMoveToBlockMutexLock(31, 67, 0, 2);
NpcMoveToBlockMutexLock(35, 71, 0, 2);
NpcMoveToBlockMutexLock(33, 73, 0, 2);
NpcMoveToBlockMutexLock(44, 84, 0, 2);
NpcMoveToBlockMutexLock(42, 86, 0, 2);
NpcMoveToBlockMutexLock(46, 90, 0, 2);
NpcMoveToBlockMutexLock(44, 92, 0, 2);
NpcMoveToBlockMutexLock(45, 93, 0, 2);
NpcMoveToBlockMutexLock(40, 98, 0, 2);
NpcMoveToBlockMutexLock(47, 105, 1, 2);
NpcMoveToBlockMutexLock(46, 106, 1, 2);
NpcMoveToBlockMutexLock(48, 108, 1, 2);
NpcMoveToBlockMutexLock(50, 106, 1, 2);
WaitEventAutoScriptRun(15, false, false);
NpcSetDirFrame(0, 0);
WaitEventAutoScriptRun(4, false, false);
NpcMoveToBlock(47, 109, 1, 3);
ReplaceAndPause();
EventSetAutoScript(5, 7, "@8D77");
WaitEventAutoScriptRun(10, false, false);
NpcMoveToBlockMutexLock(39, 101, 1, 2);
NpcMoveToBlockMutexLock(49, 91, 1, 2);
NpcMoveToBlockMutexLock(29, 71, 1, 2);
NpcMoveToBlockMutexLock(34, 66, 1, 2);
NpcMoveToBlockMutexLock(33, 65, 1, 2);
NpcMoveToBlockMutexLock(34, 64, 1, 2);
WaitEventAutoScriptRun(2, false, false);
NpcMoveToBlockMutexLock(34, 64, 0, 2);
WaitEventAutoScriptRun(2, false, false);
NpcSetDirFrame(3, 0);
WaitEventAutoScriptRun(4, false, false);
NpcSetDirFrame(2, 0);
ReplaceAndPauseWithNop("Event_00005_00009_Auto", 0);

['Event_00005_00020_Trigger'];
PartySetPos(8, 103, 0);
SceneEnter(6);
FadeOut(0);

['Event_00005_00023_Trigger'];
PartySetPos(21, 102, 1);
SceneEnter(9);
FadeOut(0);

['Event_00005_00024_Trigger'];
PartySetPos(30, 33, 0);
SceneEnter(10);
FadeOut(0);

['Event_00005_00021_Trigger'];
PartySetPos(56, 119, 0);
SceneEnter(7);
FadeOut(0);

['Event_00005_00032_Trigger'];
PlaySound(78);
SetDlgBox(0);
//采得一颗龙涎草
AddItem(46, 0);
EventSetState(-1, 0, 0);

['Event_00005_00033_Trigger'];
PlaySound(78);
SetDlgBox(0);
//采得一颗止血草
AddItem(39, 0);
EventSetState(-1, 0, 0);

['Event_00005_00034_Trigger'];
PlaySound(78);
SetDlgBox(0);
//得到水果
AddItem(32, 0);
EventSetState(-1, 0, 0);

['Event_00005_00035_Trigger'];
PlaySound(78);
SetDlgBox(0);
//得到水果
AddItem(32, 0);
EventSetState(-1, 0, 0);

['Event_00005_00025_Trigger'];
SceneEnter(11);
PartySetPos(31, 96, 0);
FadeOut(0);

['Event_00005_00037_Trigger'];
//林木匠：
//啊～逍遥，你来的正好
//过来帮帮我吧．．
SetDlgLower(0, 0, false);
//李逍遥：
//喔．．林师父，对不起啦
//我家里头还有事，帮不了您了
ReplaceAndPause();
//唉．．你们这些年青人真是的
//村子里的围篱破了这么大一个
//洞也没人管，还得我这把老骨
//头动手来修
SetDlgLower(0, 0, false);
//李逍遥：
//林师父的木工手艺是咱们这镇
//上最在行的，这种事只要您出
//马就搞定了
ReplaceAndPause();
//就会耍嘴皮子．．
ReplaceAndPause();
//去！去！
//不想帮忙就给我站一边去
//别老是在这儿碍手碍脚的

['Event_00005_00002_Trigger'];
//孩童唱道：
//小李子、志气高
//想学剑仙登云霄
//日上三竿不觉醒
//天天梦里乐陶陶。
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//李逍遥：
//你们三个小鬼
//竟敢编歌来笑我！
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//孩童：
//呵呵！这是我哥教我的
//全村的孩童都会唱呢！
ReplaceAndPause();
//孩童唱道：
//吕洞宾，乘风飘
//肩背龙剑斩群妖
//悲心救苦传妙道
//至今万古姓名标。
//韩湘子，品玉箫
//志学修行家室抛
//雪拥蓝关难行马
//曾度文公上九霄。
ReplaceAndPause();
//孩童唱道：
//曹国舅，爱逍遥
//不恋荣华卸锦袍
//世上万般修行好
//手执云阳仙板敲。
//李铁拐，相咆哮
//黑脸浓眉腿又跷
//虔心修炼长生法
//挂拐登云蔼蔼飘。
ReplaceAndPause();
//孩童唱道：
//汉钟离，性儿矫
//识透人情事态枭
//终南山上修妙道
//列位仙班道行高。
//何仙姑，容貌娇
//懒伴红尘愿寂寥
//苦志真修千百载
//也归仙界乐逍遥。
ReplaceAndPause();
//孩童唱道：
//蓝采和，年纪小
//最爱修行却富饶
//名山修炼成真果
//使执棕篮驾海潮。
//张果老，年纪高
//须发苍苍两鬓萧
//倒骑驴子呵呵笑
//竟把繁华世界抛。
ReplaceAndPause();
//孩童：
//嘻．．哈．．

['Event_00005_00002_Auto'];
EventAnimate(Direction.Current);
ReplaceAndPauseWithNop("Event_00005_00002_Auto", 0);

['Event_00005_00026_Trigger'];
EventSetState(-1, 0, 0);

['Event_00005_00030_Trigger'];
SetDlgCenter(0, false);
//此门已上锁

['Event_00005_00007_Auto'];
ReplaceAndPause();
NpcSetFrame(0);
WaitEventAutoScriptRun(2, false, false);
NpcSetFrame(1);
WaitEventAutoScriptRun(2, false, false);
NpcSetFrame(2);
WaitEventAutoScriptRun(3, false, false);
NpcSetFrame(3);
ReplaceAndPauseWithNop("Event_00005_00007_Auto", 0);

['Event_00005_00014_Auto'];
NpcSetFrame(0);
NpcSetFrame(1);
GotoWithProbability(35, "Event_00005_00014_Auto");
NpcSetFrame(0);
ReplaceAndPause();
NpcSetFrame(1);
ReplaceAndPause();
NpcSetFrame(2);
ReplaceAndPause();
NpcSetFrame(3);
WaitEventAutoScriptRun(4, false, false);
ReplaceAndPauseWithNop("Event_00005_00014_Auto", 0);

['Event_00005_00015_Auto'];
EventAnimate(Direction.Current);
GotoWithProbability(50, "Event_00005_00015_Auto");
ReplaceAndPauseWithNop("Event_00005_00015_Auto", 0);

['Event_00005_00016_Auto'];
EventAnimate(Direction.Current);
GotoWithProbability(10, "Event_00005_00016_Auto");
EventAnimate(Direction.Southeast);
ReplaceAndPause();
EventAnimate(Direction.Southeast);
WaitEventAutoScriptRun(3, false, false);
['@8DA2'];
EventAnimate(Direction.Current);
GotoWithProbability(10, "@8DA2");
WaitEventAutoScriptRun(3, false, false);
EventAnimate(Direction.Northeast);
EventAnimate(Direction.Northeast);
['@8DA7'];
EventAnimate(Direction.Current);
GotoWithProbability(10, "@8DA7");
EventAnimate(Direction.Northwest);
ReplaceAndPause();
EventAnimate(Direction.Northwest);
['@8DAC'];
EventAnimate(Direction.Current);
GotoWithProbability(10, "@8DAC");
EventAnimate(Direction.Southwest);
EventAnimate(Direction.Southwest);
ReplaceAndPause();
ReplaceAndPauseWithNop("Event_00005_00016_Auto", 0);

['Event_00005_00017_Auto'];
EventAnimate(Direction.Current);
GotoWithProbability(16, "Event_00005_00017_Auto");
EventAnimate(Direction.Southwest);
EventAnimate(Direction.Southwest);
ReplaceAndPause();
EventAnimate(Direction.Southwest);
EventAnimate(Direction.Southwest);
ReplaceAndPause();
ReplaceAndPause();
['@8DBC'];
EventAnimate(Direction.Current);
GotoWithProbability(16, "@8DBC");
EventAnimate(Direction.Northwest);
EventAnimate(Direction.Northwest);
ReplaceAndPause();
EventAnimate(Direction.Northwest);
EventAnimate(Direction.Northwest);
ReplaceAndPause();
ReplaceAndPause();
['@8DC5'];
EventAnimate(Direction.Current);
GotoWithProbability(16, "@8DC5");
EventAnimate(Direction.Southeast);
EventAnimate(Direction.Southeast);
ReplaceAndPause();
EventAnimate(Direction.Northeast);
EventAnimate(Direction.Northeast);
ReplaceAndPause();
ReplaceAndPause();
['@8DCE'];
EventAnimate(Direction.Current);
GotoWithProbability(16, "@8DCE");
EventAnimate(Direction.Southeast);
EventAnimate(Direction.Southeast);
ReplaceAndPause();
EventAnimate(Direction.Northeast);
EventAnimate(Direction.Northeast);
ReplaceAndPauseWithNop("Event_00005_00017_Auto", 0);

['Event_00005_00018_Auto'];
EventAnimate(Direction.Current);
EventAnimate(Direction.Current);
ReplaceAndPause();
GotoWithProbability(10, "Event_00005_00018_Auto");
NpcSetFrame(9);
WaitEventAutoScriptRun(4, false, false);
GotoWithProbability(25, "Event_00005_00018_Auto");
NpcSetFrame(8);
WaitEventAutoScriptRun(5, false, false);
NpcSetFrame(9);
NpcSetFrame(10);
WaitEventAutoScriptRun(6, false, false);
NpcSetFrame(11);
WaitEventAutoScriptRun(4, false, false);
NpcSetFrame(12);
NpcSetFrame(13);
WaitEventAutoScriptRun(5, false, false);
['@8DE8'];
EventAnimate(Direction.Current);
GotoWithProbability(10, "@8DE8");
EventAnimate(Direction.Southeast);
EventAnimate(Direction.Southeast);
['@8DEC'];
EventAnimate(Direction.Current);
GotoWithProbability(10, "@8DEC");
ReplaceAndPause();
EventAnimate(Direction.Southeast);
ReplaceAndPause();
EventAnimate(Direction.Southeast);
ReplaceAndPause();
['@8DF3'];
EventAnimate(Direction.Current);
GotoWithProbability(10, "@8DF3");
GotoWithProbability(50, "@8DF8");
NpcSetFrame(10);
GotoWithProbability(10, "@8DF3");
['@8DF8'];
ReplaceAndPause();
EventAnimate(Direction.Northwest);
EventAnimate(Direction.Current);
EventAnimate(Direction.Current);
WaitEventAutoScriptRun(2, false, false);
EventAnimate(Direction.Northwest);
EventAnimate(Direction.Northwest);
['@8DFF'];
ReplaceAndPause();
EventAnimate(Direction.Current);
GotoWithProbability(40, "@8E04");
NpcSetFrame(13);
GotoWithProbability(40, "@8DFF");
['@8E04'];
ReplaceAndPause();
EventAnimate(Direction.Current);
ReplaceAndPause();
EventAnimate(Direction.Current);
EventAnimate(Direction.Current);
WaitEventAutoScriptRun(2, false, false);
EventAnimate(Direction.Northwest);
ReplaceAndPauseWithNop("Event_00005_00018_Auto", 0);

['Event_00005_00037_Auto'];
NpcSetFrame(5);
GotoWithProbability(40, "Event_00005_00037_Auto");
WaitEventAutoScriptRun(3, false, false);
NpcSetFrame(4);
ReplaceAndPause();
ReplaceAndPauseWithNop("Event_00005_00037_Auto", 0);

['Event_00005_00010_Auto'];
NpcSetFrame(0);
ReplaceAndPause();
NpcSetFrame(1);
ReplaceAndPause();
GotoWithProbability(5, "Event_00005_00010_Auto");
NpcSetFrame(2);
ReplaceAndPause();
NpcSetFrame(3);
ReplaceAndPause();
NpcSetFrame(4);
ReplaceAndPause();
NpcSetFrame(5);
ReplaceAndPause();
NpcSetFrame(6);
WaitEventAutoScriptRun(5, false, false);
ReplaceAndPauseWithNop("Event_00005_00010_Auto", 0);

['Event_00005_00036_Trigger'];
PlaySound(78);
SetDlgBox(0);
//发现鸡蛋
AddItem(19, 0);
EventSetState(-1, 0, 0);

