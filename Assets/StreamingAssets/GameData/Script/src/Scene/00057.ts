['Event_00057_00001_Trigger'];
SceneEnter(55);
PartySetPos(13, 34, 0);
FadeOut(0);

FadeOut(0);
PartySetPos(32, 71, 0);
SceneEnter(57);

['Event_00057_00003_Trigger'];
EventSetTriggerMode(-1, -1, false, 0);
SetDlgUpper(0, 0, false);
//智泽：
//啊．．．施主．．是．．
//．．是来参佛的吗？
SetDlgLower(1, 0, false);
//李逍遥：
//我们想求见贵寺的智修大师
NpcSetDirFrame(3, 0);
VideoUpdate(0, false);
NpcSetDirFrame(2, 0);
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//智泽：
//方．．方丈～有人来啦！！
NpcSetDirFrame(3, 0);
VideoUpdate(0, false);
NpcSetDirFrame(0, 0);
VideoUpdate(0, false);
//智泽：
//各位．．各位施主．．请留步
//贫．．贫僧先进去通报一声
EventSetAutoScript(-1, -1, "@2BD5");
WaitEventAutoScriptRun(8, false, false);
RoleSetDirFrame(1, 0, 1);
WaitEventAutoScriptRun(4, false, false);
SetDlgLower(25, 0, false);
//林月如：
//这个和尚怎么一见我们神色如
//此慌张，正眼也不敢瞧一下？
RoleSetDirFrame(0, 0, 0);
WaitEventAutoScriptRun(0, false, false);
SetDlgUpper(6, 0, false);
//李逍遥：
//哈～　出家人四大皆空
//突然看到两位美女驾到
//怎么可能面不改色呢？
SetDlgLower(22, 0, false);
//林月如：
//　　哼～一脸不正经！
RoleSetDirFrame(2, 0, 1);
WaitEventAutoScriptRun(4, false, false);
RoleSetDirFrame(3, 0, 1);
WaitEventAutoScriptRun(6, false, false);
RoleSetDirFrame(0, 0, 1);
WaitEventAutoScriptRun(0, false, false);
SetDlgUpper(11, 0, false);
//赵灵儿：
//．．．．．．．．．。
SetDlgLower(1, 0, false);
//李逍遥：
//　　灵儿．．你怎么了？
RoleSetDirFrame(3, 0, 1);
WaitEventAutoScriptRun(0, false, false);
SetDlgUpper(17, 0, false);
//赵灵儿：
//我总觉得这间寺庙四周
//似乎．．有股妖气
RoleSetDirFrame(1, 0, 2);
WaitEventAutoScriptRun(0, false, false);
SetDlgLower(2, 0, false);
//李逍遥：
//妖气？　怎么可能！
//这里可是佛门清修之地呢
RoleSetDirFrame(2, 0, 1);
WaitEventAutoScriptRun(2, false, false);
SetDlgUpper(17, 0, false);
//赵灵儿：
//我也说不上来．．
//但．．并非是邪恶的妖气
EventSetAutoScript(-1, -1, "@2BD7");
WaitEventAutoScriptRun(8, false, false);
RoleSetDirFrame(2, 0, 0);
WaitEventAutoScriptRun(2, false, false);
SetDlgUpper(0, 0, false);
//智泽：
//三位施主，很抱歉．．
//寺里出了点事，不便待客
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//哦！　智修大师不在寺中吗？
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//小和尚：
//不．．不是。　寺中有些杂乱
//尚未打扫，请施主莫见怪．．
RoleSetDirFrame(2, 0, 2);
VideoUpdate(0, false);
SetDlgLower(23, 0, false);
//林月如：
//罗哩八嗦！　叫你们方丈出来
//难道寺内有什么见不得人的事
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//智泽：
//是．．是！
EventSetAutoScript(-1, -1, "@2BD9");

['Event_00057_00002_Trigger'];
SceneEnter(59);
PartySetPos(43, 87, 1);
FadeOut(0);

['Event_00057_00006_Trigger'];
EventSetState(-1, 0, 0);
EventSetState(943, 2, 0);
EventSetState(944, 2, 0);
WaitEventAutoScriptRun(12, false, false);
//小和尚：
//哇～！~30
PartySetPos(43, 55, 0);
PartyWalkToBlock(45, 52, 1, 4);
WaitEventAutoScriptRun(8, false, false);
PartyWalkToBlock(45, 52, 0, 4);
RoleSetDirFrame(2, 0, 0);
RoleSetDirFrame(2, 0, 1);
RoleSetDirFrame(2, 0, 2);
WaitEventAutoScriptRun(4, false, false);
SetDlgLower(10, 0, false);
//李逍遥：
//喂喂～大师！　有话好说！
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//智杖：
//我受不了啦！
//让我砍了这小王八蛋
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//可否告诉在下怎么一回事？
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//智杖：
//这小王八蛋骗俺！
//俺本来是个杀猪的
//每天至少要吃五斤肉
//不然浑身都会不对劲
//他骗俺说来这里当和尚
//可以每天有吃有喝的
//结果俺一来才发现根本
//不是那么一回事
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//智泽：
//是有吃有喝没错啊？
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//智杖：
//吃大米喝凉茶是吗！？
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//可能你弄错了．．
//出家人本来就不能吃荤的
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//智杖：
//老子不当和尚了行不行？
VideoRestore();
//刚才俺好不容易抓到一头鹿
//正想煮来解解馋，谁料居然
//被这小兔崽子把一锅子连肉
//带汤全给倒掉了
VideoUpdate(0, false);
SetDlgLower(10, 0, false);
//李逍遥：
//鹿．．．？
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//智杖：
//是啊～有只头上断了角而且
//脚也受伤的雄鹿跑进寺内来
//我看它伤口都烂的透骨了
//就让它早早解脱啦！
VideoUpdate(0, false);
SetDlgLower(5, 0, false);
//李逍遥：
//你．．．．(
VideoUpdate(0, false);
SetDlgLower(22, 0, false);
//林月如：
//你不想继续出家，何不还俗
//归乡，这样实在太难看了
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//智杖：
//俺能回去早就回去了
VideoUpdate(0, false);
SetDlgLower(24, 0, false);
//林月如：
//此话怎讲？
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//智杖：
//自从方丈大师替俺剃渡后
//出家以前的事俺就全记不起
//来了。俺只知道俺是杀猪的
//俺只想要吃肉！
VideoUpdate(0, false);
SetDlgLower(21, 0, false);
//林月如：
//真可笑，有这种怪人！
EventSetAutoScript(57, 7, "@2C73");
WaitEventAutoScriptRun(20, false, false);
SetDlgUpper(0, 0, false);
//智泽：
//各位施主，我来引见各位
//见方丈大师吧
RoleSetDirFrame(1, 0, 0);
WaitEventAutoScriptRun(6, false, false);
RoleSetDirFrame(2, 0, 0);
WaitEventAutoScriptRun(4, false, false);
RoleSetDirFrame(1, 0, 0);

['Event_00057_00008_Trigger'];
//智杖：
//俺要吃肉．．

['Event_00057_00007_Auto'];
NpcMoveToBlock(47, 53, 0, 8);
NpcSetDirFrame(2, 0);
NpcSetDirFrame(1, 0);
WaitEventAutoScriptRun(3, false, false);
NpcMoveToBlock(48, 51, 1, 8);
NpcMoveToBlock(47, 50, 0, 8);
NpcMoveToBlock(43, 54, 0, 8);
NpcSetDirFrame(3, 0);
NpcSetDirFrame(2, 0);

['Event_00057_00008_Auto'];
NpcMoveToBlock(47, 53, 0, 8);
ReplaceAndPause();
NpcSetDirFrame(2, 0);
WaitEventAutoScriptRun(3, false, false);
NpcMoveToBlock(48, 51, 1, 8);
NpcMoveToBlock(47, 50, 0, 8);
NpcMoveToBlock(46, 51, 0, 8);

['Scene_00057_Enter'];
MusicPlay(Music.忧, false, false);

['Event_00057_00004_Auto'];
NpcMoveToBlockMutexLock(38, 113, 0, 2);
NpcMoveToBlockMutexLock(44, 106, 1, 2);
NpcMoveToBlockMutexLock(39, 101, 0, 2);
NpcMoveToBlockMutexLock(34, 106, 0, 2);
NpcMoveToBlockMutexLock(29, 101, 0, 2);
NpcMoveToBlockMutexLock(31, 99, 0, 2);
NpcMoveToBlockMutexLock(30, 98, 0, 2);
NpcMoveToBlockMutexLock(40, 88, 0, 2);
NpcMoveToBlockMutexLock(38, 86, 1, 2);
NpcMoveToBlockMutexLock(40, 84, 1, 2);
NpcMoveToBlockMutexLock(34, 78, 0, 2);
NpcMoveToBlockMutexLock(31, 81, 0, 2);
NpcMoveToBlockMutexLock(28, 78, 0, 2);
NpcMoveToBlockMutexLock(34, 72, 0, 2);
NpcMoveToBlockMutexLock(33, 71, 0, 2);
NpcMoveToBlockMutexLock(36, 68, 0, 2);
EventSetState(-1, 0, 0);

['Event_00057_00005_Trigger'];
//和尚：
//阿弥陀佛．．

['Event_00057_00004_Trigger'];
//和尚：
//阿弥陀佛．．
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//大师～请问此去是玉佛寺吗？
VideoUpdate(0, false);
//和尚：
//阿弥陀佛．．
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//大师，我们是．．
VideoUpdate(0, false);
//和尚：
//阿弥陀佛．．
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//这．．．．(
ReplaceAndPause();
//和尚：
//阿弥陀佛．．

