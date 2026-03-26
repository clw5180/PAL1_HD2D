['Scene_00127_Enter'];
PartySetPos(25, 34, 1);
RoleSetDirFrame(3, 0, 0);
VideoUpdate(0, false);
ViewportMove(4, 2, 10);
EventSetDirFrame(127, 4, 3, 0);
WaitEventAutoScriptRun(6, false, false);
EventSetDirFrame(127, 4, 0, 0);
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//茅山道士：
//哎呀．．好重的妖气啊
//妖怪一定就在这附近！
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//刘夫人：
//道长．．请您想想办法
EventSetState(2219, 0, 0);
EventSetState(2220, 1, 0);
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//茅山道士：
//您放心～
//本山人是有备而来的
EventSetDirFrame(127, 5, 0, 1);
VideoUpdate(0, false);
SetDlgCenter(0, false);
//铃～　铃～　铃．．
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//茅山道士：
//天灵灵、地灵灵
//四方神明听我令．．
EventSetDirFrame(127, 5, 0, 2);
VideoUpdate(0, false);
SetDlgCenter(0, false);
//唔！？
VideoUpdate(0, false);
EventSetAutoScript(127, 5, "@4CAD");
WaitEventAutoScriptRun(12, false, false);
SetDlgLower(0, 0, false);
//茅山道士：
//这．．．．！？
SetDlgUpper(0, 0, false);
//刘夫人：
//道长，怎么回事？
VideoUpdate(0, false);
EventSetDirFrame(127, 5, 0, 0);
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//茅山道士：
//喔．．没事．．没事！
EventSetDirFrame(127, 5, 0, 13);
WaitEventAutoScriptRun(2, false, false);
EventSetDirFrame(127, 5, 0, 14);
WaitEventAutoScriptRun(2, false, false);
EventSetDirFrame(127, 5, 0, 13);
WaitEventAutoScriptRun(2, false, false);
EventSetDirFrame(127, 5, 0, 14);
WaitEventAutoScriptRun(2, false, false);
EventSetDirFrame(127, 5, 0, 15);
WaitEventAutoScriptRun(2, false, false);
EventSetDirFrame(127, 5, 0, 16);
WaitEventAutoScriptRun(2, false, false);
SetDlgLower(0, 0, false);
//茅山道士：
//看我的～张天师金刚降魔符！
WaitEventAutoScriptRun(4, false, false);
EventSetDirFrame(127, 5, 0, 17);
VideoUpdate(0, false);
SetDlgCenter(0, false);
//咦！？
EventSetDirFrame(127, 5, 0, 18);
WaitEventAutoScriptRun(4, false, false);
EventSetAutoScript(127, 5, "@4CAD");
WaitEventAutoScriptRun(12, false, false);
EventSetState(2220, 0, 0);
EventSetState(2219, 2, 0);
EventSetDirFrame(127, 4, 3, 0);
WaitEventAutoScriptRun(6, false, false);
EventSetDirFrame(127, 4, 0, 0);
WaitEventAutoScriptRun(5, false, false);
EventSetDirFrame(127, 4, 3, 0);
WaitEventAutoScriptRun(4, false, false);
SetDlgLower(0, 0, false);
//茅山道士：
//大胆妖孽，竟敢戏弄本天师
//还不快给我现形！
WaitEventAutoScriptRun(5, false, false);
//茅山道士：
//．．．．．．．．．。
EventSetState(2219, 0, 0);
EventSetState(2220, 1, 0);
EventSetDirFrame(127, 5, 0, 0);
VideoUpdate(0, false);
EventSetDirFrame(127, 5, 0, 19);
WaitEventAutoScriptRun(2, false, false);
EventSetDirFrame(127, 5, 0, 20);
WaitEventAutoScriptRun(4, false, false);
EventSetDirFrame(127, 5, 0, 21);
WaitEventAutoScriptRun(2, false, false);
EventSetDirFrame(127, 5, 0, 22);
WaitEventAutoScriptRun(2, false, false);
SetDlgLower(0, 0, false);
//茅山道士：
//休怪我拿出真本领了！
VideoRestore();
//太上老君、急急如令
//天兵天将、速速驾临！
VideoUpdate(0, false);
EventSetAutoScript(127, 5, "@4CB9");
WaitEventAutoScriptRun(6, false, false);
EventSetState(2221, 1, 0);
WaitEventAutoScriptRun(0, false, false);
SetDlgCenter(0, false);
//哇．．救命呀！
WaitEventAutoScriptRun(8, false, false);
EventSetAutoScript(127, 2, "@4CCD");
WaitEventAutoScriptRun(8, false, false);
RoleSetDirFrame(0, 0, 0);
WaitEventAutoScriptRun(2, false, false);
EventSetDirFrame(127, 3, 0, 0);
WaitEventAutoScriptRun(6, false, false);
SetDlgUpper(0, 0, false);
//刘夫人：
//道长！　道长．．
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//茅山道士：
//哇～我还想活命啊！
//您另请高明吧
EventSetState(2219, 0, 0);
WaitEventAutoScriptRun(4, false, false);
EventSetDirFrame(127, 2, 1, 0);
WaitEventAutoScriptRun(6, false, false);
EventSetDirFrame(127, 2, 0, 0);
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//刘夫人：
//怎么办！元儿若是有个三长
//两短，叫我怎么向刘家列祖
//列宗交代啊．．
EventSetAutoScript(127, 2, "@4CD0");
WaitEventAutoScriptRun(15, false, false);
ViewportMove(-2, -1, 20);
EventSetDirFrame(127, 3, 3, 0);
WaitEventAutoScriptRun(2, false, false);
SetDlgUpper(23, 0, false);
//林月如：
//花了大把银子
//就请来这个笨蛋！？
EventSetDirFrame(127, 3, 2, 0);
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//可能我们这回遇到的
//真的是非常厉害的妖怪
//而且就躲在这尚书府中
EventSetState(2218, 0, 0);
PartySetRole(3, 1, 0);
EventSetState(2327, 2, 0);
SceneSetScript(109, "@4CEF", "");
ReplaceAndPause();

['Event_00127_00006_Auto'];
EventWalkOneStep(-1, -1, -10, 5);
GotoWithNop("Event_00127_00006_Auto", 0);

