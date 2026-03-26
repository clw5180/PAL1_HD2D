['Scene_00199_Enter'];
PartySetPos(12, 109, 0);
FadeToScene(4, -1);
SetDlgUpper(9, 0, false);
//李逍遥：
//$04我只是一个不学无术的浪子
//你跟着我，不怕到时候两人
//一起去当要饭的？~55
EventSetDirFrame(199, 2, 2, 0);
VideoUpdate(0, false);
SetDlgLower(21, 0, false);
//林月如：
//如果真是这样
//就怪我自己倒霉啦！~55
VideoUpdate(0, false);
SetDlgUpper(3, 0, false);
//李逍遥：
//好吧～等我找到灵儿的下落~50
VideoRestore();
//把一切事情都结束后
//我带你四处游山玩水，一同
//吃遍天下珍味，看遍人间美景~55
EventSetDirFrame(199, 2, 2, 0);
VideoUpdate(0, false);
SetDlgLower(21, 0, false);
//林月如：
//$03嘻．．吃到老！　玩到老！~60
WaitEventAutoScriptRun(0, false, false);
EventWalkOneStep(199, 2, 4, -2);
WaitEventAutoScriptRun(2, false, false);
EventWalkOneStep(199, 2, 4, -2);
WaitEventAutoScriptRun(0, false, false);
EventSetDirFrame(199, 2, 2, 0);
EventWalkOneStep(199, 1, -4, 2);
WaitEventAutoScriptRun(2, false, false);
EventWalkOneStep(199, 1, -4, 2);
WaitEventAutoScriptRun(2, false, false);
EventSetDirFrame(199, 1, 0, 0);
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//李逍遥：
//$08那．．我们．．．．~70
EventSetState(3349, 2, 0);
WaitEventAutoScriptRun(18, false, false);
SetDlgUpper(0, 0, false);
//彩　依：
//$02啊．．！！~35
EventWalkOneStep(199, 1, 8, -4);
WaitEventAutoScriptRun(0, false, false);
EventWalkOneStep(199, 2, -8, 4);
WaitEventAutoScriptRun(0, false, false);
EventSetDirFrame(199, 1, 2, 0);
EventSetDirFrame(199, 2, 3, 0);
WaitEventAutoScriptRun(0, false, false);
EventSetDirFrame(199, 2, 0, 0);
WaitEventAutoScriptRun(10, false, false);
FadeOut(2);
SceneEnter(200);

['Event_00199_00003_Auto'];
NpcMoveToBlock(13, 104, 0, 8);
NpcMoveToBlock(14, 105, 1, 3);
NpcMoveToBlock(13, 106, 1, 3);

