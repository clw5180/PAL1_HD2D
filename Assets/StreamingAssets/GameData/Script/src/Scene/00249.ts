['Scene_00249_Enter'];
MusicPlay(Music.回梦, false, false);

['Event_00249_00001_Trigger'];
SceneEnter(256);
PartySetPos(20, 100, 0);
FadeOut(0);

['Event_00249_00002_Trigger'];
SceneEnter(255);
PartySetPos(8, 60, 0);
FadeOut(0);

['Event_00249_00003_Auto'];
NpcMoveToBlockMutexLock(38, 51, 0, 2);

['Event_00249_00004_Auto'];
NpcMoveToBlock(38, 50, 0, 3);
NpcMoveToBlock(37, 49, 0, 3);
NpcSetDirFrame(3, 0);

['Event_00249_00005_Auto'];
NpcMoveToBlock(39, 51, 0, 3);
NpcMoveToBlock(40, 52, 0, 3);
NpcSetDirFrame(1, 0);

['Event_00249_00024_Trigger'];
EventSetState(-1, 0, 0);
PartyWalkToBlock(31, 60, 0, 8);
PartyWalkToBlock(32, 59, 0, 2);
ViewportMove(8, -4, 14);
SetDlgUpper(0, 0, false);
//石长老：
//你们聚集在这里想做什么？
//这里是王宫，你们想造反吗？
VideoUpdate(0, false);
Call("@8413", 0, 0);
SetDlgLower(0, 0, false);
//众士兵：
//　我们要见教主！
VideoUpdate(0, false);
Call("@8420", 0, 0);
EventSetAutoScript(249, 6, "@80E7");
WaitEventAutoScriptRun(5, false, false);
EventSetState(4373, 2, 0);
EventSetState(4374, 2, 0);
EventSetState(4375, 2, 0);
ViewportMove(2, -1, 32);
WaitEventAutoScriptRun(24, false, false);
Call("@8413", 0, 0);
SetDlgLower(0, 0, false);
//众士兵：
//教主英明！教主万岁！
VideoUpdate(0, false);
Call("@8420", 0, 0);
VideoUpdate(0, false);
SetDlgUpper(80, 0, false);
//拜月教主：
//各位！　我们的国家、我们
//的人民，正面临着一场劫难
VideoRestore();
//我们的城楼淹没在洪水之中
//我们的族人已经无家可归
//我们的耕地化为一片泽国
//这些～都是谁造成的！？
VideoUpdate(0, false);
Call("@8413", 0, 0);
SetDlgLower(0, 0, false);
//众士兵：
//是蛇妖女！！
VideoUpdate(0, false);
Call("@8420", 0, 0);
SetDlgUpper(80, 0, false);
//拜月教主：
//国之将亡、必有妖孽
//历代先祖亡灵降坛昭示于我
//南诏王国数百基业将毁于一
//妖女之手，我们若再不有所
//行动，黑苗族将会遭到灭亡
//的命运！而我们的一国之主
//却受美色所惑，迟迟不肯下
//令处死那妖女。这样下去，
//先祖亡灵的愤怒无法平息
//我们将会面临更大的灾难
VideoRestore();
//本人身为大祭师，又是你们
//的教主，有这义务负起责任
//拯救我们的社稷！
VideoUpdate(0, false);
Call("@8413", 0, 0);
SetDlgLower(0, 0, false);
//众士兵：
//教主英明！！教主万岁！！
VideoUpdate(0, false);
Call("@8420", 0, 0);
SetDlgUpper(80, 0, false);
//拜月教主：
//请各位弟兄务必支持我
//杀妖孽、清君侧！
VideoRestore();
//今天一定要大王下令当众处死
//巫后，所有站在巫后那边的人
//也全都要铲除！
VideoUpdate(0, false);
Call("@8413", 0, 0);
SetDlgLower(0, 0, false);
//众士兵：
//　杀！　杀！　杀！
EventSetAutoScript(249, 6, "@8173");
WaitEventAutoScriptRun(3, false, false);
Call("@8420", 0, 0);
WaitEventAutoScriptRun(2, false, false);
SetDlgLower(0, 0, false);
//石长老：
//教主！你这样做是犯上啊！
//大王纵然有所不是，毕竟是
//我们的大王啊。你带兵包围
//王宫更不是大臣所应为！
VideoUpdate(0, false);
SetDlgUpper(80, 0, false);
//拜月教主：
//要救国家，就要用非常的手段
//这时候墨守成规，就不是忠臣
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//石长老：
//　但是．．
VideoUpdate(0, false);
SetDlgUpper(80, 0, false);
//拜月教主：
//石长老，这件事你不必管
//一切后果由我承担！
EventSetAutoScript(249, 3, "@8178");
WaitEventAutoScriptRun(10, false, false);
EventSetAutoScript(249, 11, "@817B");
EventSetAutoScript(249, 12, "@8181");
WaitEventAutoScriptRun(0, false, false);
EventSetAutoScript(249, 13, "@8184");
EventSetAutoScript(249, 14, "@8187");
EventSetAutoScript(249, 15, "@818A");
WaitEventAutoScriptRun(0, false, false);
EventSetAutoScript(249, 16, "@818F");
WaitEventAutoScriptRun(0, false, false);
EventSetAutoScript(249, 17, "@8192");
WaitEventAutoScriptRun(0, false, false);
EventSetAutoScript(249, 18, "@8196");
EventSetAutoScript(249, 19, "@8199");
WaitEventAutoScriptRun(8, false, false);
EventSetDirFrame(249, 6, 0, 0);
WaitEventAutoScriptRun(6, false, false);
EventSetDirFrame(249, 6, 1, 0);
WaitEventAutoScriptRun(10, false, false);
EventSetDirFrame(249, 6, 0, 0);
WaitEventAutoScriptRun(8, false, false);
EventSetDirFrame(249, 6, 3, 0);
WaitEventAutoScriptRun(0, false, false);
EventSetAutoScript(249, 6, "@8176");
WaitEventAutoScriptRun(6, false, false);
ViewportMove(-4, 2, 44);

['Event_00249_00020_Trigger'];
//士兵：
//东张西望贼头贼脑的干什么？
//快去前面集合！

['Event_00249_00021_Trigger'];
//士兵：
//站王宫门口的卫兵真是辛苦

['Event_00249_00022_Trigger'];
//士兵：
//看什么？　有什么好看的？

['Event_00249_00023_Trigger'];
//士兵：
//今天雨终于停了
//前些日子下的大雨真是可怕呀

['Event_00249_00004_Trigger'];
//士兵：
//教主万岁！

['Event_00249_00005_Trigger'];
//士兵：
//教主万岁！

['Event_00249_00007_Trigger'];
//士兵：
//这座王宫是先王所建
//已经有五十年历史了

['Event_00249_00008_Trigger'];
//士兵：
//要进去就赶快进去
//别在这逗留！

['Event_00249_00009_Trigger'];
//士兵：
//下一班卫兵什么时候来换班啊
//我也想跟进去看热闹

['Event_00249_00010_Trigger'];
//士兵：
//唉．．希望别出乱子才好
VideoRestore();
//喂～你是站在哪一边的？
//听说替王后讲话的人，都要
//被拜月教徒视为乱党而杀害

