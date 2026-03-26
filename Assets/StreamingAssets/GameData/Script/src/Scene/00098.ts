['Event_00098_00001_Trigger'];
SceneEnter(94);
PartySetPos(37, 45, 1);
FadeOut(0);

['Event_00098_00002_Trigger'];
SceneEnter(94);
PartySetPos(32, 40, 0);
FadeOut(0);

['Event_00098_00003_Trigger'];
SceneEnter(94);
PartySetPos(27, 35, 0);
FadeOut(0);

['Event_00098_00007_Trigger'];
EventSetState(-1, 0, 0);
EventSetTriggerMode(94, 1, false, 0);
EventSetTriggerMode(95, 1, false, 0);
EventSetTriggerMode(96, 1, false, 0);
EventSetState(1736, 0, 0);
EventSetState(1737, 0, 0);
EventSetState(1738, 0, 0);
EventSetState(1740, 0, 0);
EventSetState(1741, 0, 0);
EventSetState(1742, 2, 0);
EventSetState(1743, 0, 0);
EventSetState(1744, 0, 0);
EventSetState(1745, 0, 0);
EventSetState(1746, 0, 0);
EventSetState(1747, 0, 0);
EventSetState(1748, 0, 0);
EventSetState(1749, 0, 0);
EventSetState(1785, 0, 0);
EventSetState(1765, 0, 0);
EventSetState(1608, 2, 0);
EventSetState(1609, 2, 0);
EventSetState(1630, 2, 0);
EventSetState(1631, 2, 0);
EventSetState(1784, 0, 0);
EventSetPos(98, 4, 1408, 400);
EventSetTriggerScript(98, 4, "@36E7");
PartyWalkToBlock(17, 27, 0, 8);
PartyWalkToBlock(15, 25, 0, 8);
WaitEventAutoScriptRun(3, false, false);
RoleSetDirFrame(2, 0, 0);
WaitEventAutoScriptRun(0, false, false);
RoleSetDirFrame(1, 0, 1);
WaitEventAutoScriptRun(4, false, false);
RoleSetDirFrame(3, 0, 0);
WaitEventAutoScriptRun(0, false, false);
SetDlgUpper(1, 0, false);
//李逍遥：
//这．．只有一张床
//怎么办？
VideoUpdate(0, false);
SetDlgLower(25, 0, false);
//林月如：
//什．．什么怎么办？
//不就只好这样了，还能怎么办
VideoUpdate(0, false);
SetDlgUpper(3, 0, false);
//李逍遥：
//那．．你是女孩子，你睡床上
//我就委屈点趴在桌上就行了
VideoUpdate(0, false);
EventSetState(1788, 1, 0);
PartySetRole(1, 0, 0);
PartyWalkToBlock(14, 25, 1, 4);
PartyWalkToBlock(17, 28, 1, 4);
EventSetDirFrame(98, 9, 0, 0);
PartyWalkToBlock(16, 29, 1, 4);
EventSetDirFrame(98, 9, 3, 0);
SetDlgUpper(22, 0, false);
//林月如：
//大木头～
RoleSetDirFrame(1, 0, 0);
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//你说什么？
EventSetDirFrame(98, 9, 1, 0);
VideoUpdate(0, false);
SetDlgUpper(25, 0, false);
//林月如：
//没事～　我在打嗝
EventSetAutoScript(98, 9, "@3523");
WaitEventAutoScriptRun(15, false, false);
MusicStop(1);
FadeOut(2);
MusicPlay(Music.神木林, false, false);
RoleModifyHPMP(true, 9999);
PartySetPos(16, 30, 0);
HeroSetSprite(0, Sprite.睡案李逍遥, false);
PartySetRole(1, 0, 0);
RoleSetDirFrame(0, 0, 0);
RoleMoveOneStep(0, 0, 5);
EventSetState(1788, 0, 0);
EventSetState(1787, 1, 0);
SetPaletteTime(0);
WaitEventAutoScriptRun(5, false, false);
EventSetState(1787, 0, 0);
RoleSetDirFrame(0, 1, 0);
WaitEventAutoScriptRun(8, false, false);
RoleSetDirFrame(0, 2, 0);
WaitEventAutoScriptRun(10, false, false);
SetDlgUpper(24, 0, false);
//林月如：
//$08唉．．．．
VideoRestore();
//李大哥．．在你心中
//我到底是什么呢？$02
MusicStop(0);
WaitEventAutoScriptRun(5, false, false);
//"门外有人喊叫：有贼啊！"
MusicPlay(Music.神木林_变奏, false, false);
RoleSetDirFrame(0, 3, 0);
EventSetState(1787, 1, 0);
EventSetDirFrame(98, 8, 0, 0);
VideoUpdate(0, false);
SetDlgUpper(23, 0, false);
//林月如：
//　　贼！？
EventSetAutoScript(98, 8, "@35CB");
WaitEventAutoScriptRun(4, false, false);
EventSetDirFrame(98, 8, 3, 0);
WaitEventAutoScriptRun(5, false, false);
EventSetDirFrame(98, 8, 0, 0);
WaitEventAutoScriptRun(5, false, false);
EventSetAutoScript(98, 8, "@35CE");
WaitEventAutoScriptRun(5, false, false);
RoleSetDirFrame(0, 4, 0);
WaitEventAutoScriptRun(8, false, false);
SetDlgLower(10, 0, false);
//李逍遥：
//　　怎么了！？
HeroSetSprite(0, Sprite.李逍遥, true);
RoleSetDirFrame(0, 0, 0);
PartySetPos(16, 29, 1);
RoleMoveOneStep(0, 0, 0);
EventSetState(1759, 1, 0);
EventSetState(1760, 1, 0);

['Event_00098_00004_Trigger'];
//古董商：
//我顺道经过扬州来做生意
//谁知道进城后就出不去了
ReplaceAndPause();
//古董商：
//现在城内又传女飞贼到处做
//案，害得我成天提心吊胆的

