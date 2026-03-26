['Event_00004_00006_Trigger'];
PartySetPos(38, 47, 1);
SceneEnter(3);
FadeOut(0);

['Event_00004_00007_Trigger'];
PartySetPos(37, 22, 1);
SceneEnter(2);
FadeOut(0);

['Event_00004_00008_Trigger'];
PartySetPos(39, 69, 0);
SceneEnter(2);
FadeOut(0);

['Event_00004_00009_Trigger'];
PartySetPos(14, 23, 1);
SceneEnter(2);
FadeOut(0);

['Event_00004_00010_Trigger'];
PartySetPos(20, 79, 1);
SceneEnter(2);
FadeOut(0);

['Event_00004_00002_Trigger'];
PartySetPos(17, 49, 0);
SceneEnter(2);
FadeOut(0);

['Event_00004_00013_Trigger'];
EventSetTriggerMode(-1, -1, false, 3);
SetDlgUpper(55, 0, false);
//李大娘：
//搞什么～慢吞吞的！
EventSetDirFrame(-1, -1, 2, 0);
VideoUpdate(0, false);
Delay(4);
EventSetState(56, 0, 0);
VideoUpdate(0, false);
EventSetState(55, 0, 0);
VideoUpdate(0, false);
Delay(4);
EventSetDirFrame(-1, -1, 1, 0);
VideoUpdate(0, false);
//李大娘：
//各位客官．．里边儿请．．
VideoUpdate(0, false);
EventSetDirFrame(-1, -1, 3, 0);
VideoUpdate(0, false);
//李大娘：
//逍遥！帮我招呼客官们歇歇腿
//我到厨房准备酒菜．．
EventSetAutoScript(4, 13, "@0175");
WaitEventAutoScriptRun(10, false, false);
EventSetAutoScript(4, 16, "@0196");
EventSetAutoScript(4, 17, "@019B");
EventSetAutoScript(4, 18, "@01A4");
WaitEventAutoScriptRun(15, false, false);
SetDlgUpper(59, 0, false);
//苗人头领：
//小二！这间客栈我们包下了，
//除了老板和伙计，其他不相干
//的人全都给我请出去
SetDlgLower(3, 0, false);
//李逍遥：
//小店今天没别的客人，各位客
//官．．啊～不！请问各位大爷
//们还有啥吩咐的？
VideoUpdate(0, false);
SetDlgUpper(59, 0, false);
//苗人头领：
//以后没有我们的吩咐，不许闲
//杂人等上楼来，知道了吗？
SetDlgLower(6, 0, false);
//李逍遥：
//是．．这容易，小的一定照办
VideoUpdate(0, false);
SetDlgUpper(59, 0, false);
//苗人头领：
//很好！这些银子你拿去，往后
//这几天只要你乖乖听我们的话
//办事，赏银不会少你的。
SetDlgLower(3, 0, false);
//李逍遥：
//是～谢大爷的赏．．
//小店一定让您宾至如归！
EventSetTriggerScript(2, 10, "@005E");
CashModify(500, "");
VideoUpdate(0, false);
SetDlgBox(0);
//得到５００文钱
WaitEventAutoScriptRun(8, false, false);
RoleSetDirFrame(0, 0, 0);
WaitEventAutoScriptRun(0, false, false);
SetDlgLower(0, 0, false);
//李逍遥：
//哇哈！真是遇到财神爷了
ReplaceAndPause();
//别怠慢了客人

['Event_00004_00016_Trigger'];
SetDlgUpper(59, 0, false);
//苗人头领：
//没事了．．去忙你的吧

['Event_00004_00017_Trigger'];
//苗人喽啰：
//没事．．你可以走了

['Event_00004_00018_Trigger'];
EventSetTriggerMode(-1, -1, false, 3);
//苗人喽啰：
//喂！店小二，大爷们饿了
//快点把酒菜送上来
ReplaceAndPause();
//去忙你的吧．．

['Event_00004_00020_Auto'];
EventSyncState(4, 19, 0);
ReplaceAndPauseWithNop("Event_00004_00020_Auto", 0);

['Event_00004_00019_Trigger'];
SetDlgCenter(0, false);
//"一名衣衫褴褛的醉汉躺在门口"

['Event_00004_00019_Auto'];
ReplaceAndPause();
NpcSetFrame(1);
ReplaceAndPause();
NpcSetFrame(0);
WaitEventAutoScriptRun(10, false, false);
ReplaceAndPauseWithNop("Event_00004_00019_Auto", 0);

['Event_00004_00001_Trigger'];
PartySetPos(39, 56, 0);
SceneEnter(5);
FadeOut(0);

['Event_00004_00005_Trigger'];
SetDlgCenter(0, false);
//"婶婶房里传来声音．．"
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//李大娘：
//是逍遥吗？　要去哪呀？
//怎么这么晚了怎么还不睡啊？
//你是不是又想溜出去鬼混哪？
VideoUpdate(0, false);
PartySetPos(39, 91, 1);
RoleSetDirFrame(2, 0, 0);
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//啊．．没事
//我这就回房去了
VideoUpdate(0, false);
PartyWalkToBlock(39, 91, 0, 2);

['Event_00004_00022_Trigger'];
PlaySound(78);
SetDlgBox(0);
//得到糯米糕
AddItem(16, 0);
EventSetState(-1, 0, 0);

['Event_00004_00023_Trigger'];
PlaySound(78);
SetDlgBox(0);
//得到还魂香
AddItem(35, 0);
EventSetState(-1, 0, 0);

['Event_00004_00027_Trigger'];
Call("@8B3C", 4, 27);
Call("@8B3C", 4, 28);

['Event_00004_00030_Trigger'];
Call("@8B3C", 4, 30);
Call("@8B3C", 4, 31);

['Event_00004_00003_Trigger'];
RoleSetDirFrame(1, 0, 0);
RoleMoveOneStep(-10, -10, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(-6, -6, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(-10, -10, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(-6, -6, 0);
WaitEventAutoScriptRun(0, false, false);
['Event_00002_00003_Trigger'];
RoleSetDirFrame(1, 0, 0);
RoleMoveOneStep(-10, -10, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(-6, -6, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(-10, -10, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(-6, -6, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(-10, -10, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(-6, -6, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(-10, -10, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(-6, -6, 0);
WaitEventAutoScriptRun(0, false, false);

['Event_00004_00004_Trigger'];
RoleSetDirFrame(3, 0, 0);
RoleMoveOneStep(10, 10, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(6, 6, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(10, 10, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(6, 6, 0);
WaitEventAutoScriptRun(0, false, false);
['Event_00002_00002_Trigger'];
RoleSetDirFrame(3, 0, 0);
RoleMoveOneStep(10, 10, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(6, 6, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(10, 10, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(6, 6, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(10, 10, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(6, 6, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(10, 10, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(6, 6, 0);
WaitEventAutoScriptRun(0, false, false);

['Event_00004_00024_Trigger'];
PlaySound(78);
SetDlgBox(0);
//发现水果
AddItem(32, 0);
EventSetState(-1, 0, 0);

['Event_00004_00032_Auto'];
PlaySound(48);
WaitEventAutoScriptRun(10, false, false);
PlaySound(48);
WaitEventAutoScriptRun(4, false, false);
PlaySound(48);
WaitEventAutoScriptRun(12, false, false);
PlaySound(49);
WaitEventAutoScriptRun(10, false, false);
PlaySound(49);
WaitEventAutoScriptRun(4, false, false);
PlaySound(49);
WaitEventAutoScriptRun(40, false, false);
GotoWithNop("Event_00004_00032_Auto", 0);

