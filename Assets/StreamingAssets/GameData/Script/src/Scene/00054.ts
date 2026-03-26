['Event_00054_00001_Trigger'];
SceneEnter(53);
PartySetPos(28, 52, 0);
FadeOut(0);

['Event_00054_00006_Auto'];
NpcSetDirFrame(2, 0);
GotoWithProbability(6, "Event_00054_00006_Auto");
NpcSetDirFrame(3, 0);
WaitEventAutoScriptRun(4, false, false);
NpcMoveToBlockMutexLock(40, 33, 0, 2);
WaitEventAutoScriptRun(2, false, false);
NpcSetDirFrame(0, 0);
WaitEventAutoScriptRun(7, false, false);
NpcMoveToBlockMutexLock(38, 35, 0, 2);
NpcMoveToBlockMutexLock(37, 34, 1, 2);
WaitEventAutoScriptRun(3, false, false);
NpcMoveToBlockMutexLock(36, 35, 1, 2);
NpcMoveToBlockMutexLock(35, 34, 0, 2);
ReplaceAndPause();
NpcSetDirFrame(2, 0);
WaitEventAutoScriptRun(11, false, false);
NpcSetDirFrame(3, 0);
ReplaceAndPause();
NpcMoveToBlockMutexLock(36, 35, 1, 2);
NpcMoveToBlockMutexLock(35, 37, 0, 2);
NpcMoveToBlockMutexLock(33, 35, 1, 2);
WaitEventAutoScriptRun(2, false, false);
NpcSetDirFrame(2, 0);
WaitEventAutoScriptRun(7, false, false);
NpcMoveToBlockMutexLock(35, 37, 0, 2);
NpcMoveToBlockMutexLock(38, 34, 0, 2);
WaitEventAutoScriptRun(9, false, false);
NpcSetDirFrame(2, 0);
ReplaceAndPause();
NpcMoveToBlockMutexLock(37, 33, 0, 2);
WaitEventAutoScriptRun(10, false, false);
NpcMoveToBlockMutexLock(38, 34, 1, 2);
NpcMoveToBlockMutexLock(34, 38, 1, 2);
NpcMoveToBlockMutexLock(35, 39, 1, 2);
NpcMoveToBlockMutexLock(33, 41, 1, 2);
NpcSetDirFrame(3, 0);
WaitEventAutoScriptRun(14, false, false);
NpcSetDirFrame(2, 0);
WaitEventAutoScriptRun(9, false, false);
NpcSetDirFrame(3, 0);
WaitEventAutoScriptRun(12, false, false);
NpcMoveToBlockMutexLock(36, 38, 1, 2);
NpcMoveToBlockMutexLock(35, 37, 0, 2);
NpcMoveToBlockMutexLock(39, 32, 1, 2);
NpcMoveToBlockMutexLock(40, 33, 0, 2);
WaitEventAutoScriptRun(5, false, false);
NpcMoveToBlockMutexLock(38, 31, 0, 2);
ReplaceAndPauseWithNop("Event_00054_00006_Auto", 0);

['Event_00054_00003_Trigger'];
EventSetTriggerMode(-1, -1, false, 2);
RoleSetDirFrame(2, 0, 0);
RoleSetDirFrame(2, 0, 1);
VideoUpdate(0, false);
SetDlgLower(3, 0, false);
//李逍遥：
//灵儿．．！！
VideoUpdate(0, false);
SetDlgUpper(65, 0, false);
//韩医仙：
//二位认识她吗？
RoleSetDirFrame(1, 0, 1);
VideoUpdate(0, false);
SetDlgLower(21, 0, false);
//林月如：
//赵姑娘在我家作客时突然失踪
//还好．．吉人天相
RoleSetDirFrame(1, 0, 0);
VideoUpdate(0, false);
SetDlgLower(3, 0, false);
//李逍遥：
//医仙，谢谢您
//是您救了灵儿吧？
VideoUpdate(0, false);
SetDlgUpper(65, 0, false);
//韩医仙：
//呵～小女出外采药时
//发现赵姑娘昏倒在村外林子
//里，于是将她带回来
VideoUpdate(0, false);
SetDlgLower(2, 0, false);
//李逍遥：
//灵儿病了吗？严不严重？
VideoUpdate(0, false);
SetDlgUpper(65, 0, false);
//韩医仙：
//这．．你放心，我会医好她的
VideoUpdate(0, false);
SetDlgLower(2, 0, false);
//李逍遥：
//我能帮的上忙吗？
//医仙若有何差遣，我一定
//万死不辞
VideoUpdate(0, false);
SetDlgUpper(65, 0, false);
//韩医仙：
//嗯．．这样吧
//最近因为病患实在太多
//许多药材都用完了
VideoRestore();
//我这里有种药方应该可以
//对赵姑娘的身体有所帮助
//但是因药材缺乏而作罢
VideoRestore();
//既然二位有心，就麻烦二
//位替我弄到这些药材来
NpcSetDirFrame(2, 0);
WaitEventAutoScriptRun(5, false, false);
NpcSetDirFrame(3, 0);
VideoUpdate(0, false);
SetDlgUpper(65, 0, false);
//韩医仙：
//你把这药单交给门口的阿宝
//叫他照单子上的配方煎药
EventSetTriggerScript(53, 14, "@2805");
ReplaceAndPause();
SetDlgUpper(65, 0, false);
//韩医仙：
//药煎好了吗？
ReplaceAndPause();
SetDlgUpper(65, 0, false);
//韩医仙：
//老夫身为村长，又是村里唯一
//的医生，能多救一个算一个。

['Event_00054_00020_Trigger'];
//待诊病人：
//我娘亲已经被妖怪杀害了
//我爹也身受重伤躺在里面
//如果连我爹都····
VideoRestore();
//我孤苦无依的一个人该怎么办

['Event_00054_00006_Trigger'];
SetDlgUpper(51, 0, false);
//韩梦慈：
//河东的黑水镇尸妖肆虐，百姓
//们束手无策，只好逃到本村来
//而且许多人都受了伤，我和爹
//实在忙不过来

['Event_00054_00008_Trigger'];
SetDlgBox(0);
//得到一包九阴散
AddItem(76, 0);
EventSetState(-1, 0, 0);

['Event_00054_00009_Trigger'];
SetDlgBox(0);
//得到九节菖蒲
AddItem(29, 0);
EventSetState(-1, 0, 0);

['Event_00054_00010_Trigger'];
SetDlgBox(0);
//得到天香续命露
AddItem(38, 0);
EventSetState(-1, 0, 0);

['Event_00054_00011_Trigger'];
SetDlgBox(0);
//得到神仙茶
AddItem(50, 0);
EventSetState(-1, 0, 0);

['Event_00054_00012_Trigger'];
SetDlgBox(0);
//得到试炼果
AddItem(52, 0);
EventSetState(-1, 0, 0);

['Event_00054_00002_Trigger'];
SetDlgBox(0);
//赵灵儿仍昏迷不醒

['Event_00054_00004_Trigger'];
FadeOut(0);
EventSetState(-1, 0, 0);
EventSetState(908, 2, 0);
EventSetState(814, 0, 0);
EventSetTriggerScript(56, 4, "@2A35");
EventSetTriggerScript(56, 5, "@2A35");
VideoUpdate(0, false);
SetDlgUpper(65, 0, false);
//韩医仙：
//不好了～梦慈被抓走了！
VideoUpdate(0, false);
SetDlgLower(2, 0, false);
//李逍遥：
//是谁干的？
VideoUpdate(0, false);
SetDlgUpper(65, 0, false);
//韩医仙：
//那带头的人自称是拜月教的长老
//他说～如果要我女儿平安，就要
//赵姑娘自己一个人到"鬼阴山"
VideoUpdate(0, false);
SetDlgLower(8, 0, false);
//李逍遥：
//可恶．．
//又是那些阴魂不散的苗人！
VideoUpdate(0, false);
SetDlgLower(11, 0, false);
//赵灵儿：
//韩伯父～您放心，他们的目的
//是我，不会对梦慈姐姐不利的
VideoUpdate(0, false);
SetDlgLower(11, 0, false);
//赵灵儿：
//逍遥哥哥～梦慈姐姐对我有恩
//我一定要去救她
VideoUpdate(0, false);
SetDlgLower(9, 0, false);
//李逍遥：
//那当然！这次我一定要
//把他们全部打回老家
//永远不敢再来烦你！

['Event_00054_00005_Trigger'];
//韩医仙：
//求求你们，救救梦慈啊！

['Event_00054_00007_Trigger'];
SetDlgUpper(38, 0, false);
//江少云：
//　　谢谢你们

['Event_00054_00018_Trigger'];
//病人：
//我是从河东黑水镇逃出来的人
//幸好我命大只伤了一条腿。

['Event_00054_00019_Trigger'];
//病人：
//我手臂上被僵尸咬的伤口
//不知道为了什么奇痒无比？

['Event_00054_00013_Trigger'];
//病人：
//哎呦····好痛喔！

['Event_00054_00014_Trigger'];
//病人：
//····好可怕的妖怪呀！

['Event_00054_00015_Trigger'];
//病人：
//玉儿啊～玉儿、你在哪里呀？

['Event_00054_00016_Trigger'];
//病人：
//····嗯！好难受！

['Event_00054_00017_Trigger'];
//病人：
//小兄弟，您行行好
//脖子可不可以借我咬一下？

