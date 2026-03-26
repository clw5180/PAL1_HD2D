['Scene_00144_Enter'];
ViewportMove(28, 35, -1);
VideoUpdate(0, false);
SetDlgCenter(0, false);
//少爷．．您该服药了~50
WaitEventAutoScriptRun(8, false, false);
EventSetDirFrame(144, 1, 0, 0);
WaitEventAutoScriptRun(6, false, false);
EventSetDirFrame(144, 4, 3, 0);
EventSetDirFrame(144, 5, 1, 0);
WaitEventAutoScriptRun(8, false, false);
EventSetDirFrame(144, 4, 2, 0);
EventSetDirFrame(144, 5, 2, 0);
WaitEventAutoScriptRun(4, false, false);
SetDlgUpper(67, 0, false);
//尚书夫人：
//$05彩依～你该改口叫相公啦！~60
VideoUpdate(0, false);
EventSetState(2387, 0, 0);
EventSetState(2388, 1, 0);
WaitEventAutoScriptRun(2, false, false);
EventSetDirFrame(144, 3, 0, 0);
WaitEventAutoScriptRun(2, false, false);
SetDlgLower(48, 0, false);
//彩　依：
//承蒙老爷和夫人收留，奴婢
//已感激不尽。奴婢不敢忘记
//自己原来的身份．．~50
WaitEventAutoScriptRun(6, false, false);
SetDlgUpper(67, 0, false);
//尚书夫人：
//你千万别这么想～元儿能
//娶到你，是我们刘家的福气~40
VideoRestore();
//等到元儿的病好了，我们还
//要等你替我们刘家添个胖小
//子呢！　．．呵呵~55
SetDlgLower(48, 0, false);
//彩　依：
//是．．．。~70
FadeOut(4);
SceneEnter(141);
ReplaceAndPause();

