['Event_00134_00002_Trigger'];
//小雪：
//呜．．我怎么又搞砸了
//是不是什么地方又弄错了？
//怎么办．．我一定会被
//妈妈责罚的！
ReplaceAndPause();
//小雪：
//呜．．．我好命苦啊．．
ReplaceAndPause();
//小雪：
//不行！　我要更努力

['Event_00134_00003_Auto'];
NpcMoveToBlock(34, 69, 0, 3);
NpcMoveToBlock(36, 66, 1, 3);
NpcMoveToBlock(34, 64, 0, 3);
NpcSetDirFrame(2, 0);
EventSetDirFrame(134, 2, 0, 0);
WaitEventAutoScriptRun(4, false, false);
NpcSetDirFrame(3, 0);

['Scene_00134_Enter'];
PartySetPos(35, 70, 1);
WaitEventAutoScriptRun(8, false, false);
PartyWalkToBlock(34, 69, 0, 4);
RoleSetDirFrame(2, 0, 0);
WaitEventAutoScriptRun(4, false, false);
PartyWalkToBlock(37, 65, 1, 4);
PartyWalkToBlock(36, 64, 0, 4);
WaitEventAutoScriptRun(4, false, false);
SetDlgLower(0, 0, false);
//老鸨：
//她就是小雪姑娘
EventSetDirFrame(134, 3, 2, 0);
VideoUpdate(0, false);
//老鸨：
//小雪！  见过公子
WaitEventAutoScriptRun(2, false, false);
EventSetDirFrame(134, 2, 3, 0);
VideoUpdate(0, false);
//小雪：
//公子万安～
EventSetDirFrame(134, 3, 3, 0);
VideoUpdate(0, false);
//老鸨：
//咱们小雪呀～
//琴棋书画、花鸟刺绣、
//诗词歌赋样样精通
//是咱们怡红院的才女哟！
EventSetDirFrame(134, 3, 2, 0);
VideoUpdate(0, false);
EventSetDirFrame(134, 2, 0, 0);
VideoUpdate(0, false);
//老鸨：
//小雪，好好的伺候公子
//知道吗！？
VideoUpdate(0, false);
//小雪：
//是．．妈妈．．
EventSetAutoScript(134, 3, "@3EAA");
WaitEventAutoScriptRun(8, false, false);
RoleSetDirFrame(0, 0, 0);
WaitEventAutoScriptRun(10, false, false);
EventSetDirFrame(134, 3, 2, 0);
VideoUpdate(0, false);
//老鸨：
//记住呀！
//这次不许又搞砸了
WaitEventAutoScriptRun(14, false, false);
RoleSetDirFrame(1, 0, 0);
WaitEventAutoScriptRun(6, false, false);
EventSetDirFrame(134, 2, 3, 0);
WaitEventAutoScriptRun(4, false, false);
SetDlgUpper(0, 0, false);
//小雪：
//公子．．那．．我们开始吧
VideoUpdate(0, false);
RoleSetDirFrame(0, 0, 0);
WaitEventAutoScriptRun(6, false, false);
RoleSetDirFrame(1, 0, 0);
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//李逍遥：
//怎么不先来点酒助兴？
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//小雪：
//公子．．
//我．．我不会喝酒．．
SetDlgLower(0, 0, false);
//李逍遥：
//  不会喝酒！？
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//小雪：
//我．．我可以弹琴给您听
//我会很多曲子！
VideoRestore();
//那．．．那．．
//还是．．我陪您下盘棋？
VideoRestore();
//要不然．．
//我写字、画画给你看？
//我会临摹王羲之的真迹哦
SetDlgLower(0, 0, false);
//李逍遥：
//你总该会点特别的吧？
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//小雪：
//我．．我还会．．刺绣
//要不要小雪替您绣一条手绢
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//李逍遥：
//算了～不用、不用！
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//小雪：
//不．．我还会吟诗作赋！
//我念一首自己做的诗给您听
WaitEventAutoScriptRun(4, false, false);
EventSetDirFrame(134, 2, 0, 0);
WaitEventAutoScriptRun(6, false, false);
//床前人成双、衣裳脱光光
//举头捉小鸟、低头吃香蕉
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//李逍遥：
//这．．这是什么怪诗！
EventSetDirFrame(134, 2, 3, 0);
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//小雪：
//您～不喜欢吗？
//可是．．上个月来的
//那位李公子很喜欢呢
VideoRestore();
//他说他听过这首诗后，突然
//灵感大发，写出许多首好诗
//后来，皇上看到他写的诗后
//还召见他到长乐宫喝酒呢
VideoRestore();
//但是．．后来
//那位李公子就再也没来了
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//李逍遥：
//小雪姑娘，我看你还是
//别当妓女了～不适合你啊
SetDlgUpper(0, 0, false);
//小雪：
//不．．不行啊．．
//我又不会做别的工作

