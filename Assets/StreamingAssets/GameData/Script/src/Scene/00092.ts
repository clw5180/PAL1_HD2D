['Event_00092_00001_Trigger'];
RoleMoveOneStep(8, -8, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(8, -8, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(8, -8, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(8, -8, 0);
WaitEventAutoScriptRun(0, false, false);
SceneEnter(89);
PartySetPos(14, 98, 0);
FadeOut(0);

['Event_00092_00016_Trigger'];
SetDlgLower(1, 0, false);
//李逍遥：
//月如．．你还好吗？
NpcSetDirFrame(2, 0);
VideoUpdate(0, false);
//林月如：
//哼．．还不都是你害的
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//别这样嘛．．
//我发誓～我一定抓到真正
//的女飞贼，救你出来
NpcSetDirFrame(0, 0);
VideoUpdate(0, false);
SetDlgUpper(22, 0, false);
//林月如：
//最好是这样
//不然我一辈子都不理你了
NpcSetDirFrame(2, 0);
EventSetTriggerMode(-1, -1, false, 0);

['Event_00092_00002_Trigger'];
Call("@8E29", 0, 0);
Call("@8E29", 0, 0);

['Event_00092_00003_Trigger'];
Call("@8E0D", 0, 0);
Call("@8E0D", 0, 0);

['Event_00092_00023_Auto'];
NpcMoveToBlockMutexLock(32, 100, 0, 2);
GotoWithProbability(10, "");
NpcMoveToBlockMutexLock(34, 102, 1, 2);
GotoWithProbability(10, "");
ReplaceAndPauseWithNop("Event_00092_00023_Auto", 0);

['Event_00092_00018_Trigger'];
EventSetTriggerMode(-1, -1, false, 2);
SetDlgLower(0, 0, false);
//衙役：
//探监的吗？照规定要缴
//三百文的探监许可费
GotoWithSelect("@3C26");
CashModify(-300, "@3C26");
VideoUpdate(0, false);
//衙役：
//你可以过去了
ReplaceAndPause();
SetDlgLower(0, 0, false);
//衙役：
//很好～你很懂规矩

['Event_00092_00019_Trigger'];
//犯人：
//格老子的，老子只不过
//揍了衙役一拳，就被罚
//五千文钱外加坐牢一年
//这简直是没有天理了！

['Event_00092_00020_Trigger'];
//犯人：
//看什么看！ 没看过坏人吗？

['Event_00092_00021_Trigger'];
//胖男：
//呜．．自从新太守上任后
//上青楼寻欢也犯法了
//而且越胖的人罚得越重

['Event_00092_00022_Trigger'];
//妓女：
//真是倒楣～奴家才刚到迎春阁
//做不到三天呢，就被抓来这了
ReplaceAndPause();
//妓女：
//唉．．妈妈怎么
//还不来保我出去呢？

['Event_00092_00023_Trigger'];
//乞丐：
//太守新官上任三把火
//定下一大堆新的禁令
//就连沿街讨饭也算犯法
VideoRestore();
//我才不过讨了两块铜钱
//就被捕快抓进来了
ReplaceAndPause();
//乞丐：
//不过这样也好，至少在牢
//里不愁吃也不愁住，只是
//不太自由罢了

['Event_00092_00017_Trigger'];
//女飞贼：
//啧～　这种烂牢房
//哪是给人住的啊！
VideoRestore();
//伙食又这么差，这些官差
//们真不知怜香惜玉啊！

