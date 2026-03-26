['Scene_00126_Enter'];
PartySetPos(27, 36, 0);
RoleSetDirFrame(2, 0, 0);
VideoUpdate(0, false);
SetDlgUpper(40, 0, false);
//刘晋元：
//如妹，谢谢你又救了我
VideoRestore();
//你也亲眼看见了吧！
//那女人～会．．会使妖法
VideoRestore();
//我早就怀疑她不是人类
//她一定是妖怪，要来害我的！
SetDlgLower(24, 0, false);
//林月如：
//刘大哥！　真相尚未
//查明切莫妄加猜测呀
//你一定是误会大嫂了
VideoUpdate(0, false);
SetDlgUpper(40, 0, false);
//刘晋元：
//如妹！你要相信我
//这桩婚事是爹娘擅自作主的
//我对她从来没有感情。
VideoRestore();
//你可知道．．
//这些日子我有多痛苦吗？
SetDlgLower(24, 0, false);
//林月如：
//但是．．刘大哥．．
//你不能因为这样就抹煞
//大嫂对你的好
VideoUpdate(0, false);
SetDlgUpper(40, 0, false);
//刘晋元：
//那都是假的！我与她朝夕相
//处。她的行为举动，怎么看
//都不像是正常人！
SetDlgLower(24, 0, false);
//林月如：
//刘大哥，你冷静点．．
EventSetDirFrame(126, 2, 3, 0);
WaitEventAutoScriptRun(6, false, false);
EventSetDirFrame(126, 2, 0, 0);
VideoUpdate(0, false);
SetDlgUpper(40, 0, false);
//刘晋元：
//对，我要去找爹娘商量！
EventSetAutoScript(126, 2, "@4A69");
WaitEventAutoScriptRun(8, false, false);
RoleSetDirFrame(3, 0, 0);
WaitEventAutoScriptRun(6, false, false);
RoleSetDirFrame(3, 0, 1);
WaitEventAutoScriptRun(2, false, false);
RoleSetDirFrame(0, 0, 0);
WaitEventAutoScriptRun(4, false, false);
RoleSetDirFrame(0, 0, 1);
WaitEventAutoScriptRun(12, false, false);
SetDlgUpper(0, 0, false);
//李逍遥：
//等一下！　刘兄．．
WaitEventAutoScriptRun(20, false, false);
RoleSetDirFrame(2, 0, 1);
WaitEventAutoScriptRun(4, false, false);
SetDlgLower(1, 0, false);
//李逍遥：
//月如，我们跟去看看！
EventSetState(2170, 0, 0);
EventSetState(2166, 0, 0);
EventSetState(2167, 0, 0);
EventSetTriggerScript(101, 18, "@4D9D");
EventSetState(2006, 2, 0);
RoleSetDirFrame(0, 0, 0);
ReplaceAndPause();

