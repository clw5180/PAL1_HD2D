['Event_00125_00001_Trigger'];
SceneEnter(124);
PartySetPos(11, 39, 0);
FadeOut(0);

['Event_00125_00002_Auto'];
NpcMoveToBlockMutexLock(24, 42, 0, 4);
NpcSetDirFrame(2, 0);
WaitEventAutoScriptRun(3, false, false);
NpcMoveToBlock(29, 37, 0, 8);
NpcMoveToBlock(28, 36, 0, 8);

['Event_00125_00003_Trigger'];
SetDlgUpper(48, 0, false);
//彩　依：
//相公已经入睡了，二位
//若还有事请改明儿再来
ReplaceAndPause();
//彩　依：
//二位还有事吗？

['Event_00125_00004_Trigger'];
//刘晋元：
//呜．．哇．．好痛苦啊
//彩依．．彩依！
VideoUpdate(0, false);
SetDlgLower(2, 0, false);
//李逍遥：
//他．．怎么了！？
EventSetState(2207, 1, 0);
WaitEventAutoScriptRun(31, false, false);
SetDlgLower(48, 0, false);
//彩　依：
//啊！　相公，真对不起
//妾身回来晚了，我马上
//伺候您服药
WaitEventAutoScriptRun(0, false, false);
EventSetState(-1, 0, 0);
EventSetState(2207, 0, 0);
EventSetState(2210, 1, 0);
EventSetState(2211, 1, 0);
EventSetState(2212, 1, 0);
PartySetPos(27, 36, 1);
RoleSetDirFrame(2, 0, 0);
PartySetRole(3, 0, 0);
FadeOut(0);
WaitEventAutoScriptRun(4, false, false);
EventSetDirFrame(125, 6, 0, 1);
WaitEventAutoScriptRun(6, false, false);
EventSetDirFrame(125, 6, 0, 0);
WaitEventAutoScriptRun(4, false, false);
EventSetDirFrame(125, 6, 0, 1);
WaitEventAutoScriptRun(8, false, false);
EventSetDirFrame(125, 6, 0, 0);
WaitEventAutoScriptRun(4, false, false);
EventSetDirFrame(125, 5, 0, 1);
WaitEventAutoScriptRun(2, false, false);
SetDlgLower(48, 0, false);
//彩　依：
//相公．．您觉得怎么样了？
VideoUpdate(0, false);
SetDlgUpper(40, 0, false);
//刘晋元：
//呼．．舒坦些了
VideoRestore();
//不过，服了这么久的药，每次
//发病时却是一次比一次难受。
//我这病真的能医得好吗？
VideoUpdate(0, false);
SetDlgLower(48, 0, false);
//彩　依：
//相公，您要忍耐
//妾身相信只要再过几天
//您就会好起来的．．
VideoUpdate(0, false);
SetDlgLower(21, 0, false);
//林月如：
//相公！？
VideoRestore();
//刘大哥，你何时娶了这么美丽
//的妻子，怎么都不曾通知小妹
VideoUpdate(0, false);
SetDlgUpper(40, 0, false);
//刘晋元：
//这．．．说来话长
VideoUpdate(0, false);
SetDlgLower(21, 0, false);
//林月如：
//刘大哥您究竟得的是什么病？
//这一路上我们有认识一些名医
//或许能有些帮助
VideoUpdate(0, false);
SetDlgUpper(40, 0, false);
//刘晋元：
//唉．．不用了
//你们的好意我心领了。
VideoRestore();
//爹娘已经不知道请过多少大夫
//可是～连我得的是什么病也查
//不出来
VideoRestore();
//还好有彩依从家乡带来的药
//方，我最近才好转了一些
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//大嫂是哪里人？
EventSetState(2211, 0, 0);
EventSetState(2208, 2, 0);
WaitEventAutoScriptRun(5, false, false);
EventSetDirFrame(125, 3, 0, 0);
WaitEventAutoScriptRun(2, false, false);
SetDlgUpper(48, 0, false);
//彩　依：
//奴家的父母是苏州人
SetDlgLower(21, 0, false);
//林月如：
//嗯？你也住苏州城！
//我怎么从没见过你
VideoUpdate(0, false);
SetDlgUpper(48, 0, false);
//彩　依：
//我．．．．
EventSetDirFrame(125, 5, 0, 0);
VideoUpdate(0, false);
SetDlgUpper(9, 0, false);
//李逍遥：
//人家是名门闺秀，足不出户
//怎么可能天天让你看到
RoleSetDirFrame(1, 0, 0);
VideoUpdate(0, false);
SetDlgLower(22, 0, false);
//林月如：
//你这句话是在讽刺我吗！？
VideoUpdate(0, false);
EventSetDirFrame(125, 3, 1, 0);
WaitEventAutoScriptRun(5, false, false);
EventSetDirFrame(125, 3, 0, 0);
WaitEventAutoScriptRun(2, false, false);
SetDlgUpper(48, 0, false);
//彩　依：
//失礼了，相公服过药后
//需要安静歇息，二位有话
//等明天再跟我家相公聊
RoleSetDirFrame(2, 0, 0);
VideoUpdate(0, false);
SetDlgLower(6, 0, false);
//李逍遥：
//喔！　那我们不打扰了
SetDlgUpper(48, 0, false);
//彩　依：
//真是抱歉，没有招待二位
EventSetAutoScript(125, 3, "Event_00002_00026_Auto");
EventSetState(2212, 0, 0);
PartySetRole(3, 1, 0);
EventSetState(2002, 1, 0);
SceneSetScript(124, "@463E", "");
ReplaceAndPause();

