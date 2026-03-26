['Scene_00122_Enter'];
RoleModifyHPMP(true, 9999);
PartySetPos(17, 32, 1);
RoleSetDirFrame(2, 0, 0);
PartySetRole(3, 1, 0);
VideoUpdate(0, false);
SetDlgLower(21, 0, false);
//林月如：
//云姨！
//李大哥是第一次来到京城
//我想带他到处去逛逛
VideoUpdate(0, false);
SetDlgUpper(67, 0, false);
//刘夫人：
//呵呵．．你呀～就是闲不住
//去吧～你们去玩吧
EventSetState(1825, 2, 0);
EventSetState(1826, 2, 0);
EventSetState(2001, 2, 0);
EventSetState(2208, 0, 0);
ReplaceAndPause();

['Event_00122_00002_Trigger'];
//刘夫人：
//这城里有些地方很乱
//不要随便乱闯哦！

['Event_00122_00003_Trigger'];
WaitEventAutoScriptRun(0, false, false);
//婢　女：
//呜．．这么多碗要洗

