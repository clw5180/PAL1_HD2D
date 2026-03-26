['Event_00119_00001_Trigger'];
SceneEnter(116);
PartySetPos(32, 58, 0);
FadeOut(0);

['Event_00119_00002_Trigger'];
Call("@8E0D", 0, 0);
SceneEnter(120);
PartySetPos(22, 32, 0);
FadeOut(0);

['Event_00119_00003_Trigger'];
SceneEnter(115);
PartySetPos(40, 66, 1);
FadeOut(0);

['Event_00119_00005_Auto'];
NpcMoveToBlockMutexLock(23, 32, 1, 2);
NpcMoveToBlockMutexLock(28, 37, 1, 2);
NpcMoveToBlockMutexLock(25, 40, 1, 2);
NpcMoveToBlockMutexLock(28, 43, 0, 2);
NpcMoveToBlockMutexLock(24, 46, 1, 2);
ReplaceAndPause();
NpcSetDirFrame(1, 0);
WaitEventAutoScriptRun(10, false, false);
['@3D5B'];
WaitEventAutoScriptRun(2, false, false);
GotoWithProbability(10, "@3D5B");
ReplaceAndPause();
NpcSetDirFrame(1, 0);
ReplaceAndPause();
NpcMoveToBlockMutexLock(28, 43, 0, 2);
NpcMoveToBlockMutexLock(29, 44, 1, 2);
WaitEventAutoScriptRun(3, false, false);
NpcSetDirFrame(2, 0);
WaitEventAutoScriptRun(13, false, false);
NpcSetDirFrame(3, 0);
WaitEventAutoScriptRun(5, false, false);
NpcSetDirFrame(2, 0);
ReplaceAndPause();
NpcSetDirFrame(1, 0);
ReplaceAndPause();
NpcMoveToBlockMutexLock(19, 34, 0, 2);
WaitEventAutoScriptRun(2, false, false);
NpcSetDirFrame(2, 0);
WaitEventAutoScriptRun(6, false, false);
NpcMoveToBlockMutexLock(26, 41, 0, 2);
NpcMoveToBlockMutexLock(28, 38, 1, 2);
WaitEventAutoScriptRun(3, false, false);
NpcSetDirFrame(1, 0);
ReplaceAndPause();
NpcMoveToBlockMutexLock(23, 33, 0, 2);
NpcMoveToBlockMutexLock(31, 25, 0, 2);
WaitEventAutoScriptRun(7, false, false);
ReplaceAndPauseWithNop("Event_00119_00005_Auto", 0);

['Scene_00119_Enter'];
PartyWalkToBlock(30, 36, 1, 8);
PartyWalkToBlock(35, 31, 1, 8);
EventSetDirFrame(119, 8, 0, 0);
EventSetDirFrame(0, 0, 0, 0);
PartyWalkToBlock(36, 32, 0, 2);
RoleSetDirFrame(2, 0, 0);
RoleSetDirFrame(2, 0, 1);
VideoUpdate(0, false);
SetDlgLower(21, 0, false);
//林月如：
//云姨，月如给您请安
//您老人家近来身体可好？
VideoUpdate(0, false);
SetDlgUpper(67, 0, false);
//刘夫人：
//乖～　你这小丫头．．
//几年不见，长得更标致了呢
//看样子．．不怕嫁不出去了
SetDlgLower(21, 0, false);
//林月如：
//云姨．．您又取笑人家．．
VideoUpdate(0, false);
SetDlgUpper(67, 0, false);
//刘夫人：
//这位可是李公子？
SetDlgLower(1, 0, false);
//李逍遥：
//是～　晚辈李逍遥，见过夫人
VideoUpdate(0, false);
SetDlgUpper(67, 0, false);
//刘夫人：
//别那么见外，你也叫我云姨
//就行了。我一向把月如当自
//己的女儿看待
//所以大家都是一家人
VideoUpdate(0, false);
SetDlgLower(21, 0, false);
//林月如：
//云姨～　您怎么这样说嘛
//我跟他又没有．．
VideoUpdate(0, false);
SetDlgUpper(67, 0, false);
//刘夫人：
//还没有～也快了吧？
VideoRestore();
//你的事情，晋元都跟我说了
//呵呵．．你小时候就很好强
//不愿服输
VideoRestore();
//这位李公子能在比武招亲
//赢得你的芳心，想必武功
//一定非常了得
VideoUpdate(0, false);
SetDlgLower(21, 0, false);
//林月如：
//哪有～　他呀．．只会那么
//一招半式罢了。我要是认真
//打，他才不是我的对手呢
RoleSetDirFrame(3, 0, 1);
VideoUpdate(0, false);
SetDlgUpper(10, 0, false);
//李逍遥：
//耶？ 说起来好像
//是你故意让我似的？
RoleSetDirFrame(1, 0, 0);
VideoUpdate(0, false);
SetDlgLower(22, 0, false);
//林月如：
//哼～本来就是！
//这一路上要不是我
//你早就被妖怪吃了
VideoUpdate(0, false);
SetDlgUpper(8, 0, false);
//李逍遥：
//你给我点面子行不行？
//老是在别人面前漏我的气
VideoUpdate(0, false);
SetDlgUpper(67, 0, false);
//刘夫人：
//好了．．你们别拌嘴了
RoleSetDirFrame(2, 0, 0);
VideoUpdate(0, false);
SetDlgUpper(67, 0, false);
//刘夫人：
//月如．．你的个性就是这样
//得理不饶人，硬嘴巴。
//这毛病怎么老是改不掉
SetDlgLower(21, 0, false);
//林月如：
//　云姨．．　！
VideoUpdate(0, false);
SetDlgUpper(67, 0, false);
//刘夫人：
//呵呵～　不过．．
//还是这样的月如才可爱
VideoRestore();
//唉．．晋元就是没那福份
//从前云姨就希望你能当我
//们家的媳妇，要是你能嫁到
//我们刘家来，那该多好．．
SetDlgLower(21, 0, false);
//林月如：
//从小我一直把晋元哥哥当
//亲大哥看待，没有想过那些
VideoUpdate(0, false);
SetDlgUpper(67, 0, false);
//刘夫人：
//我知道．．晋元的个性
//太文弱了，你也不会喜欢
VideoUpdate(0, false);
SetDlgLower(21, 0, false);
//林月如：
//对了！
//怎么不见晋元大哥呢？
VideoUpdate(0, false);
SetDlgUpper(67, 0, false);
//刘夫人：
//晋元自从上次从苏州回来后
//就染上一种怪病，找了许多
//大夫都查不出病因
VideoRestore();
//最近一个月以来，我都让他
//在后花园的厢房中静养
VideoUpdate(0, false);
SetDlgLower(21, 0, false);
//林月如：
//哦～　病了！？
//我可以去看他吗？
SetDlgUpper(67, 0, false);
//刘夫人：
//当然可以，你去看他
//他一定很高兴的
ReplaceAndPause();

['Event_00119_00008_Trigger'];
SetDlgUpper(67, 0, false);
//刘夫人：
//最近我们的后花园种了许多名
//贵的牡丹，花朵盛开的时候非
//常美呢，你们不妨去观赏
ReplaceAndPause();
SetDlgUpper(67, 0, false);
//刘夫人：
//我已经叫厨房准备饭菜
//你们一定要留下来用餐喔

//刘夫人：
//你们见到晋元了吗？
//他今天吃过药了没有？

['Event_00119_00004_Trigger'];
SceneEnter(121);
PartySetPos(17, 42, 0);
FadeOut(0);

['Event_00119_00010_Trigger'];
//刘夫人：
//你爹怎么突然又离开了？
ReplaceAndPause();
//刘夫人：
//唉．．
//其实林大哥也是用心良苦

['Event_00119_00006_Trigger'];
//婢女阿香：
//林小姐好、李公子好

['Event_00119_00007_Trigger'];
//婢女阿萍：
//林小姐好、李公子好

['Event_00119_00012_Trigger'];
PlaySound(78);
SetDlgBox(0);
//发现绣花鞋
AddItem(178, 0);
EventSetState(-1, 0, 0);

