['Event_00024_00037_Trigger'];
SceneEnter(23);

['Event_00024_00001_Trigger'];
SceneEnter(33);
PartySetPos(43, 54, 0);
FadeOut(0);

['Event_00024_00017_Trigger'];
//报名者甲：
//唉呦～别挤啦！

['Event_00024_00018_Trigger'];
//报名者乙：
//喂～别插队！

['Event_00024_00019_Trigger'];
//报名者丁：
//你也是来报名比武招亲的吗？
//听说参加的资格蛮苛的呢
ReplaceAndPause();
//不过～要是真的当上林家姑爷
//那可是一辈子的荣华富贵呀！
ReplaceAndPauseWithNop("Event_00024_00019_Trigger", 0);

['Event_00024_00026_Trigger'];
//报名者戊：
//哇～这么多人排队，什么时候
//才轮到我呀，我已经在这站了
//三个时辰．．唉．．
ReplaceAndPause();
//喂～你哪里来的，排后面去！

['Event_00024_00027_Trigger'];
SetDlgLower(0, 0, false);
//李逍遥：
//这位大哥能否请问一下．．
//为何这里聚集了这么多人？
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//报名者丙：
//你不知道吗！比武招亲报名啊
//林堡主替他唯一的千金办这次
//的比武招亲，闻风而来的年青
//小伙子把林家大院给挤满了
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//李逍遥：
//这么轰动！莫非～那林家小姐
//是位绝世美女？
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//报名者丙：
//呵．．还好啦．．  若是林家
//大小姐脾气稍为好一点
//也可以算是位大美人啦，只不
//过林家的财富更吸引人呢！
ReplaceAndPause();
//林堡主膝下就这么一位独生女
//娶了她，将来就是林家堡的主
//人了．．

//．流氓乙

//．流氓甲

['Event_00024_00003_Trigger'];
//算命仙：
//  算命吗？

['Event_00024_00009_Trigger'];
SetDlgUpper(0, 0, false);
//路人甲：
//嘿～你知道吗，听说啊．．
//这回林家办这场比武招亲哪
//肯定又是比不出个结果来
SetDlgLower(0, 0, false);
//李逍遥：
//　　怎么说？？
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//路人甲：
//怎么说！那林家大小姐自幼便
//承袭家传剑指双绝，十三岁起
//全苏州城就没一个男孩子打得
//过她
VideoRestore();
//更何况那林家千金眼高于顶
//咱们这城里公子哥们登门求
//亲的，也不下十几位啦
VideoRestore();
//哪一个不是连滚带爬的被她
//给轰了出来
ReplaceAndPause();
//路人甲：
//姑娘家呀～还是温柔点比较好
//岂码容易找到丈夫

['Event_00024_00010_Trigger'];
//路人乙：
//这几天街坊都在谈论林家办
//比武招亲的事呢．．
ReplaceAndPause();
//路人乙：
//以前有个看相的居然说～
//林家小姐将来会出家当道姑呢
//林堡主一听，可紧张的不得了
//想尽办法要把女儿嫁出去
//其实说哪～
//林堡主这么急着找女婿也不
//是办法，林大小姐看不上眼
//任谁也没辄！
ReplaceAndPauseWithNop("Event_00024_00010_Trigger", 0);

['Event_00024_00013_Trigger'];
//民女乙：
//有事吗？

['Event_00024_00012_Trigger'];
//民女甲：
//林家的千金小姐可风光了
//每次举办招亲的活动都有
//成百上千的人参加。
VideoUpdate(0, false);
//民女乙：
//就是说嘛！已经第五次了
//她的眼光未免也太高了吧？

['Event_00024_00014_Trigger'];
//书生：
//要是我会武功，能去参加林家
//比武招亲的话，那该有多好。

['Event_00024_00007_Trigger'];
//小孩：
//两斤猪肉、四两葱花····
SetDlgLower(11, 0, false);
//赵灵儿：
//小弟弟，你嘴里念念有词地
//在说些什么啊？
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//小孩：
//我娘叫我出来买东西，我要
//一直念着念着才记得住啊
//····哎唷！都是你啦！
//我已经忘记我要买什么了
VideoUpdate(0, false);
SetDlgLower(11, 0, false);
//赵灵儿：
//对不起、真是对不起！
ReplaceAndPause();
//小孩：
//好像．．好像是．．
//四两猪肉、二斤葱花吧？

['Event_00024_00011_Trigger'];
JumpIfHeroInParty(2, "@18CD");
['@18C8'];
Replace();
//杂货小贩：
//来喔～来喔～便宜卖喔！
ShowBuyItemMenu(7);

['Event_00024_00004_Trigger'];
//卖吃小贩：
//最近咱们这苏州城可热闹了
//上个月林家才办过绣球选亲
//这一回又搞个比武招亲，林
//家还真是有钱有闲呀！
//说起上回的绣球选亲可有趣了
//林家大小姐居然在绣球里装火
//药，把好几个有钱公子的眉毛
//给烧掉了，真是．．
VideoUpdate(0, false);
//啊．．我不该说这些的
Replace();
//两位要买什么吗？
ShowBuyItemMenu(4);

['Event_00024_00005_Trigger'];
RemoveItem(16, 1, "@1911");
//小豆子：
//姊姊．．我肚子好饿
//你的糯米糕分给我吃好不好？
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//赵灵儿：
//好．．给你，真的那么饿啊？
ReplaceAndPause();
RemoveItem(20, 1, "@1911");
//小豆子：
//大哥哥．．我好想吃糖葫芦喔
SetDlgLower(0, 0, false);
//赵灵儿：
//还不够！？　好好．．给你
ReplaceAndPause();
RemoveItem(18, 1, "@1911");
//小豆子：
//大哥哥．．我还想吃茶叶蛋
SetDlgLower(0, 0, false);
//赵灵儿：
//　　还不够啊！？
ReplaceAndPause();
['@1911'];
//小豆子：
//　　肚子好饿．．

['Event_00024_00031_Trigger'];
SceneEnter(26);
PartySetPos(30, 51, 0);
FadeOut(0);

['Event_00024_00032_Trigger'];
SceneEnter(30);
PartySetPos(22, 39, 0);
FadeOut(0);

['Event_00024_00033_Trigger'];
SceneEnter(31);
PartySetPos(26, 41, 0);
FadeOut(0);

['Event_00024_00034_Trigger'];
SceneEnter(32);
PartySetPos(26, 46, 0);
FadeOut(0);

['Event_00024_00035_Trigger'];
SceneEnter(25);
PartySetPos(11, 28, 1);
FadeOut(0);

['Event_00024_00036_Trigger'];
SceneEnter(25);
PartySetPos(38, 29, 1);
FadeOut(0);

['Event_00024_00006_Trigger'];
//小豆子：
//哗～里面好热闹喔，是林家的
//月如姐姐在比武招亲呢！

['Event_00024_00008_Trigger'];
//小花：
//好像很好玩呢～我也想进去看

['Event_00024_00003_Auto'];
EventAnimate(Direction.Southwest);
ReplaceAndPause();
EventAnimate(Direction.Southwest);
ReplaceAndPause();
EventAnimate(Direction.Southwest);
ReplaceAndPause();
EventAnimate(Direction.Southwest);
ReplaceAndPause();
ReplaceAndPause();
EventAnimate(Direction.Southwest);
ReplaceAndPause();
ReplaceAndPause();
EventAnimate(Direction.Southwest);
ReplaceAndPause();
ReplaceAndPause();
EventAnimate(Direction.Southwest);
ReplaceAndPause();
ReplaceAndPause();
EventAnimate(Direction.Southwest);
ReplaceAndPause();
ReplaceAndPause();
ReplaceAndPause();
ReplaceAndPause();
NpcSetDirFrame(3, 0);
GotoWithProbability(50, "@1B7F");
['@1B7D'];
ReplaceAndPause();
GotoWithProbability(2, "@1B7D");
['@1B7F'];
EventAnimate(Direction.Northeast);
WaitEventAutoScriptRun(2, false, false);
EventAnimate(Direction.Northeast);
WaitEventAutoScriptRun(2, false, false);
EventAnimate(Direction.Northeast);
ReplaceAndPause();
EventAnimate(Direction.Northeast);
ReplaceAndPause();
EventAnimate(Direction.Northeast);
ReplaceAndPause();
EventAnimate(Direction.Northeast);
ReplaceAndPause();
EventAnimate(Direction.Northeast);
ReplaceAndPause();
EventAnimate(Direction.Northeast);
ReplaceAndPause();
EventAnimate(Direction.Northeast);
ReplaceAndPause();
EventAnimate(Direction.Northeast);
ReplaceAndPause();
EventAnimate(Direction.Northeast);
ReplaceAndPause();
EventAnimate(Direction.Northeast);
ReplaceAndPause();
NpcSetDirFrame(1, 0);
ReplaceAndPause();
EventAnimate(Direction.Southwest);
ReplaceAndPause();
EventAnimate(Direction.Southwest);
ReplaceAndPause();
EventAnimate(Direction.Southwest);
ReplaceAndPause();
EventAnimate(Direction.Southwest);
ReplaceAndPauseWithNop("Event_00024_00003_Auto", 0);

['Event_00024_00007_Auto'];
NpcMoveToBlock(37, 27, 0, 3);
NpcMoveToBlockMutexLock(36, 27, 1, 2);
NpcMoveToBlockMutexLock(45, 36, 0, 2);
NpcMoveToBlockMutexLock(45, 35, 1, 2);
NpcMoveToBlockMutexLock(51, 41, 0, 2);
NpcMoveToBlockMutexLock(35, 56, 1, 2);
NpcMoveToBlockMutexLock(34, 55, 0, 2);
['@1C54'];
ReplaceAndPause();
GotoWithProbability(4, "@1C54");
NpcMoveToBlockMutexLock(35, 53, 1, 2);
NpcMoveToBlockMutexLock(35, 53, 0, 2);
['@1C58'];
ReplaceAndPause();
GotoWithProbability(4, "@1C58");
NpcMoveToBlockMutexLock(45, 42, 1, 2);
NpcMoveToBlockMutexLock(43, 40, 0, 2);
NpcMoveToBlockMutexLock(46, 38, 0, 2);
NpcMoveToBlockMutexLock(31, 23, 1, 2);
NpcMoveToBlockMutexLock(28, 27, 0, 2);
NpcMoveToBlock(32, 22, 1, 3);
ReplaceAndPauseWithNop("Event_00024_00007_Auto", 0);

['Event_00024_00038_Trigger'];
EventSetTriggerMode(-1, -1, false, 3);
PlaySound(54);

['Event_00024_00005_Auto'];
ReplaceAndPause();
GotoWithProbability(5, "Event_00024_00005_Auto");
NpcSetDirFrame(2, 0);
['@8D1F'];
ReplaceAndPause();
GotoWithProbability(8, "@8D1F");
NpcSetDirFrame(3, 0);
ReplaceAndPauseWithNop("Event_00024_00005_Auto", 0);

['Event_00024_00038_Auto'];
NpcSetDirFrame(-1, 0);
ReplaceAndPause();
NpcSetDirFrame(-1, 1);
ReplaceAndPause();
GotoWithProbability(32, "Event_00024_00038_Auto");
['@8E82'];
NpcSetDirFrame(-1, 0);
EventAnimate(Direction.Current);
EventAnimate(Direction.Current);
EventAnimate(Direction.Current);
ReplaceAndPause();
GotoWithProbability(50, "@8E82");
EventSetTriggerMode(-1, -1, true, 3);
GotoWithNop("Event_00024_00038_Auto", 0);

