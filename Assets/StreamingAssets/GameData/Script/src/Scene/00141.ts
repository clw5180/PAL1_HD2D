['Scene_00141_Enter'];
PartySetPos(42, 83, 0);
RoleSetDirFrame(3, 0, 0);
MusicPlay(Music.蝶恋_1_副本, false, false);
VideoUpdate(0, false);
SetDlgUpper(6, 0, false);
//李逍遥：
//蝶．．．啊不～嫂子
//真对不起。先前我们错怪您了
//幸好罪魁祸首已死，现在一切
//都没事了．．
VideoUpdate(0, false);
SetDlgLower(49, 0, false);
//彩　依：
//呜．．来不及了．．
//相公．．已经没救了
VideoRestore();
//毒娘子一死，相公的毒
//．．就没人能解了
VideoUpdate(0, false);
SetDlgUpper(37, 0, false);
//酒剑仙：
//小蝴蝶．．你要面对现实
//就算你赔上一命，那只蜘蛛精
//也不可能履行诺言的
VideoUpdate(0, false);
SetDlgLower(49, 0, false);
//彩　依：
//可是．．可是．．
//我已经～没有别的办法了
VideoRestore();
//只有．．只有．．．
EventSetAutoScript(141, 2, "@5745");
WaitEventAutoScriptRun(42, false, false);
SetDlgLower(0, 0, false);
//酒剑仙：
//小蝴蝶．．　何苦．．
//千年修行得来不易呀！
WaitEventAutoScriptRun(12, false, false);
//彩　依：
//我这条命．．是相公给我的
//不能眼睁睁的．．看他死掉
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//酒剑仙：
//你这样子～自废千年道行
//也只能换得他十年的寿命而已
VideoUpdate(0, false);
//彩　依：
//只要相公能活下去
//妾身．．此生心愿已了
WaitEventAutoScriptRun(4, false, false);
EventSetDirFrame(141, 2, 0, 8);
EventSetState(2372, 1, 0);
WaitEventAutoScriptRun(6, false, false);
SetDlgLower(49, 0, false);
//彩　依：
//这件事．．
//请诸位永远不要让相公知道
SetDlgUpper(24, 0, false);
//林月如：
//为什么？　你为刘大哥做如
//此大的牺牲，还不要他知道！
VideoUpdate(0, false);
SetDlgLower(49, 0, false);
//彩　依：
//因为．．如果让相公知道这件
//事，只是徒令他自责伤心罢了
VideoRestore();
//这是～奴家最后的心愿
//请诸位成全．．
MusicStop(1);
Delay(10);
MusicPlay(Music.来世再续未了缘, false, false);
FadeToScene(5, -1);
EventSetLayer(141, 1, 33);
EventSetAutoScript(141, 1, "@5666");
WaitEventAutoScriptRun(48, false, false);
EventSetState(2372, 0, 0);
EventSetState(2377, 1, 0);
FadeToScene(7, -1);
WaitEventAutoScriptRun(60, false, false);
FadeOut(2);
SceneEnter(142);
ReplaceAndPause();
SetPalette(Palette.平常_日夜);
EventSetState(2378, 1, 0);
EventSetState(2379, 1, 0);
ViewportMove(0, 0, 0);
WaitEventAutoScriptRun(50, false, false);
SceneEnter(143);
FadeOut(2);
ReplaceAndPause();
SetPalette(Palette.平常_日夜);
EventSetState(2373, 0, 0);
EventSetState(2374, 1, 0);
ViewportMove(0, 0, 0);
WaitEventAutoScriptRun(40, false, false);
EventSetDirFrame(141, 5, 0, 0);
WaitEventAutoScriptRun(8, false, false);
RoleSetDirFrame(0, 0, 0);
WaitEventAutoScriptRun(32, false, false);
MusicStop(1);
FadeOut(5);
EventSetState(2377, 0, 0);
EventSetDirFrame(141, 4, 0, 0);
EventModifyPos(141, 5, 4, 32);
EventSetState(2374, 0, 0);
EventSetState(2378, 0, 0);
EventSetState(2379, 0, 0);
MusicPlay(Music.蝶恋_3, false, false);
VideoUpdate(0, true);
SetDlgUpper(37, 0, false);
//酒剑仙：
//$03唉．．哎．．
//世间有无情人，妖却有深情
VideoRestore();
//自从三十六岁下山以来，立誓
//尝遍人间美酒、杀尽天下妖魔
VideoRestore();
//唉．．孰知～孰知～如今．．
//酒喝多了，只是成瘾乱性
//妖怪杀光了，也无法渡化人心
VideoRestore();
//唉．．哎～扪心自问
//这些年来究竟干了啥正事？
//罢矣～不如回山上重新修炼吧
WaitEventAutoScriptRun(5, false, false);
EventSetDirFrame(141, 5, 1, 0);
VideoUpdate(0, false);
SetDlgLower(24, 0, false);
//林月如：
//$04李大哥．．如果～有一天
//我也遇到这种事，你．．
//会不会牺牲自己来救我？
RoleSetDirFrame(3, 0, 0);
VideoUpdate(0, false);
SetDlgLower(5, 0, false);
//李逍遥：
//$02啧～别说这种不吉利的话！
VideoUpdate(0, false);
SetDlgLower(21, 0, false);
//林月如：
//问一问而已嘛．．
//若换作是你，我也会这么做
//因为～没有人希望自己心爱
//的人比自己先离开人世
//为了让自己所爱的人好好的
//活下去，再大的牺牲都是值
//得的．．彩依的心情，我想
//我能体会
VideoUpdate(0, false);
SetDlgLower(6, 0, false);
//李逍遥：
//傻瓜～想这些干什么
//这种事不会发生在我们身上的
VideoUpdate(0, false);
SetDlgLower(21, 0, false);
//林月如：
//女孩子比较多愁善感嘛～
VideoUpdate(0, false);
SetDlgLower(9, 0, false);
//李逍遥：
//哦！　你哪一点像女孩子了？
VideoUpdate(0, false);
SetDlgLower(22, 0, false);
//林月如：
//你！　真不知好歹
EventSetDirFrame(141, 5, 3, 0);
WaitEventAutoScriptRun(6, false, false);
EventSetDirFrame(141, 4, 1, 0);
VideoUpdate(0, false);
SetDlgUpper(37, 0, false);
//酒剑仙：
//我要走了，你们二人好自为之
RoleSetDirFrame(1, 0, 0);
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//师父！　您要去哪里？
SetDlgUpper(37, 0, false);
//酒剑仙：
//回蜀山闭关修炼去也
PartyWalkToBlock(41, 82, 1, 4);
EventSetDirFrame(141, 5, 1, 0);
VideoUpdate(0, false);
SetDlgLower(3, 0, false);
//李逍遥：
//蜀山！
//师父，您认识独孤剑圣吗？
EventSetDirFrame(141, 4, 3, 0);
VideoUpdate(0, false);
SetDlgUpper(37, 0, false);
//酒剑仙：
//怎么不认识？他是我大师兄
VideoUpdate(0, false);
SetDlgLower(3, 0, false);
//李逍遥：
//太好了！　可否带徒儿前去？
//徒儿有一位朋友被剑圣师伯
//救走了，徒儿想去找她！
VideoUpdate(0, false);
SetDlgUpper(37, 0, false);
//酒剑仙：
//也好～　你也算是仙剑派
//的弟子，应该去师门看看
EventSetDirFrame(141, 4, 1, 0);
VideoUpdate(0, false);
SetDlgUpper(37, 0, false);
//酒剑仙：
//闭上双眼，我要施法啰！
FadeOut(2);
SetPalette(Palette.动画_长空万里展飞仙);
SetRng(3);
MusicPlay(Music.凌云壮志, false, false);
PlayRng(0, 0, 8);
MusicStop(1);
FadeOut(2);
SetPalette(Palette.平常_日夜);
SceneEnter(156);

['Event_00141_00006_Auto'];
EventAnimate(Direction.Current);
EventAnimate(Direction.Current);
EventAnimate(Direction.Current);
EventAnimate(Direction.Current);
EventAnimate(Direction.Current);
EventAnimate(Direction.Current);
EventAnimate(Direction.Current);
EventAnimate(Direction.Current);
EventAnimate(Direction.Current);
EventAnimate(Direction.Current);
EventAnimate(Direction.Current);
EventAnimate(Direction.Current);
EventAnimate(Direction.Current);
EventAnimate(Direction.Current);
EventAnimate(Direction.Current);
EventAnimate(Direction.Current);
EventAnimate(Direction.Current);
EventAnimate(Direction.Current);
EventAnimate(Direction.Current);
EventAnimate(Direction.Current);
NpcMoveToBlock(43, 81, 0, 3);
NpcMoveToBlock(44, 82, 0, 3);
NpcMoveToBlock(46, 80, 0, 3);
NpcMoveToBlock(44, 78, 0, 3);
NpcMoveToBlock(42, 80, 0, 3);
NpcMoveToBlock(42, 80, 1, 3);
NpcMoveToBlock(42, 81, 0, 3);
NpcMoveToBlock(43, 82, 1, 3);
NpcMoveToBlock(45, 80, 1, 3);
NpcMoveToBlock(44, 79, 1, 3);
NpcMoveToBlock(43, 80, 1, 3);
NpcSetDirFrame(3, 0);
EventWalkOneStep(-1, -1, 4, 2);
EventWalkOneStep(-1, -1, 2, 1);
EventAnimate(Direction.Current);
EventAnimate(Direction.Current);
EventAnimate(Direction.Current);
EventAnimate(Direction.Current);
EventAnimate(Direction.Current);
EventAnimate(Direction.Current);
EventAnimate(Direction.Current);
EventAnimate(Direction.Current);
EventAnimate(Direction.Current);
EventAnimate(Direction.Current);
EventAnimate(Direction.Current);
EventAnimate(Direction.Current);
EventWalkOneStep(-1, -1, 1, 1);
EventAnimate(Direction.Current);
EventAnimate(Direction.Current);
EventWalkOneStep(-1, -1, 1, 1);
EventAnimate(Direction.Current);
EventWalkOneStep(-1, -1, 1, 1);
EventWalkOneStep(-1, -1, 1, 1);
EventAnimate(Direction.Current);
EventWalkOneStep(-1, -1, 1, 1);
EventAnimate(Direction.Current);
EventAnimate(Direction.Current);
EventAnimate(Direction.Current);
EventAnimate(Direction.Current);
EventAnimate(Direction.Current);
EventAnimate(Direction.Current);
NpcSetDirFrame(0, 0);
EventAnimate(Direction.Current);
EventWalkOneStep(-1, -1, -2, 1);
EventWalkOneStep(-1, -1, -4, 1);
['@56AA'];
EventWalkOneStep(-1, -1, -6, 2);
GotoWithNop("@56AA", 0);

['Event_00141_00007_Auto'];
NpcMoveToBlock(44, 85, 1, 3);

['Event_00141_00008_Auto'];
NpcMoveToBlock(46, 86, 0, 3);

