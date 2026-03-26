['Event_00102_00001_Trigger'];
SceneEnter(103);
PartySetPos(19, 67, 1);
FadeOut(0);

['Event_00102_00003_Trigger'];
//"古董商印堂发紫，脸上长满青
//绿色肿瘤、显然是中剧毒而死"
VideoUpdate(0, false);
SetDlgUpper(24, 0, false);
//林月如：
//啊～　好恶心！
//他．．他是遇到盗匪吗？
SetDlgLower(1, 0, false);
//李逍遥：
//我看看．．
VideoUpdate(0, false);
SetDlgBox(0);
//搜得布包
AddItem(211, 0);
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//应该不是．．
//他身上带的财物都还在
SetDlgUpper(24, 0, false);
//林月如：
//又不像毒蛇咬死的
//还是．．蛤蟆精咬死的？
ReplaceAndPause();
SetDlgCenter(0, false);
//此人已死

['Event_00102_00004_Trigger'];
EventSetState(-1, 0, 0);
SetDlgCenter(0, false);
//"前方栈道已塌"

['Event_00102_00005_Trigger'];
PartyWalkToBlock(25, 55, 1, 8);
RoleSetDirFrame(3, 0, 0);
RoleSetDirFrame(3, 0, 1);
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//李逍遥：
//咦．．姑娘，你受伤了吗？
EventSetState(-1, 0, 0);
EventSetState(1848, 1, 0);
VideoUpdate(0, false);
SetDlgLower(83, 0, false);
//女子：
//．．．．．．．
VideoUpdate(0, false);
SetDlgUpper(6, 0, false);
//李逍遥：
//唔～姑娘．．
//咱们好像曾见过面喔？
EventSetAutoScript(102, 6, "@537B");
WaitEventAutoScriptRun(16, false, false);
RoleSetDirFrame(2, 0, 0);
WaitEventAutoScriptRun(8, false, false);
PartyWalkToBlock(26, 56, 1, 4);
RoleSetDirFrame(2, 0, 0);
VideoUpdate(0, false);
SetDlgLower(3, 0, false);
//李逍遥：
//喂～姑娘！　你去哪啊？
VideoUpdate(0, false);
SetDlgUpper(83, 0, false);
//女子：
//这是我家！
VideoUpdate(0, false);
SetDlgLower(6, 0, false);
//李逍遥：
//你的脸色不太好呢．．
//需要帮忙吗？
EventSetDirFrame(102, 6, 3, 0);
VideoUpdate(0, false);
SetDlgUpper(83, 0, false);
//女子：
//别跟来～
//靠近我的男人会没命的！
EventSetAutoScript(102, 6, "@537F");
WaitEventAutoScriptRun(10, false, false);
SetDlgLower(9, 0, false);
//李逍遥：
//哇～　这娘们还挺酷的！
VideoUpdate(0, false);
SetDlgUpper(22, 0, false);
//林月如：
//瞧你那付无赖嘴脸
//人家会理你才怪！
RoleSetDirFrame(1, 0, 0);
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//我可是好心好意耶
RoleSetDirFrame(2, 0, 0);
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//你瞧～像那样的美女，怎么
//会住在这么一个山洞之中，
//你不觉得有点古怪吗？
VideoUpdate(0, false);
SetDlgUpper(25, 0, false);
//林月如：
//你还有闲功夫去管人家？
//咱们还得找路呢
SetDlgLower(6, 0, false);
//李逍遥：
//既然那姑娘是住在这里的
//直接找她问路岂不是比较快？

['Event_00102_00002_Trigger'];
SceneEnter(104);
PartySetPos(17, 113, 0);
FadeOut(0);

['Event_00102_00033_Trigger'];
Call("@8E99", 0, 0);
SetDlgBox(0);
//获得９个毒蟾卵
AddItem(59, 9);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

['Event_00102_00036_Trigger'];
Call("@8E99", 0, 0);
SetDlgBox(0);
//获得化尸水
AddItem(74, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

['Event_00102_00031_Trigger'];
Call("@8E99", 0, 0);
SetDlgBox(0);
//获得食妖虫
AddItem(84, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

['Event_00102_00027_Trigger'];
EventSetState(-1, 0, 0);
VideoUpdate(0, false);
PlaySound(78);
SetDlgBox(0);
//摘得鬼枯藤
AddItem(69, 0);

['Event_00102_00030_Trigger'];
EventSetState(-1, 0, 0);
VideoUpdate(0, false);
PlaySound(78);
SetDlgBox(0);
//获得银杏子
AddItem(14, 0);

['Event_00102_00032_Trigger'];
EventSetState(-1, 0, 0);
VideoUpdate(0, false);
PlaySound(78);
SetDlgBox(0);
//摘得忘魂花
AddItem(67, 0);

['Event_00102_00035_Trigger'];
EventSetState(-1, 0, 0);
VideoUpdate(0, false);
PlaySound(78);
SetDlgBox(0);
//获得紫罂粟
AddItem(68, 0);

['Event_00102_00007_Auto'];
GotoWithProbability(8, "");
PlaySound(80);
WaitEventAutoScriptRun(16, false, false);
GotoWithProbability(40, "Event_00102_00007_Auto");
GotoWithProbability(5, "");
PlaySound(74);
WaitEventAutoScriptRun(8, false, false);
ReplaceAndPauseWithNop("Event_00102_00007_Auto", 0);

['Event_00102_00008_Auto'];
NpcChase(10, 8, false);
NpcChase(10, 8, false);
NpcChase(10, 8, false);
EventAnimate(Direction.Current);
WaitEventAutoScriptRun(4, false, false);
ReplaceAndPauseWithNop("Event_00102_00008_Auto", 0);

