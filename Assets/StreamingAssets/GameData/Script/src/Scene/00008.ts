['Event_00008_00001_Trigger'];
EventSetState(172, 0, 0);
EventSetState(173, 0, 0);
PartySetPos(6, 11, 1);
SceneEnter(7);
FadeOut(0);

['Event_00008_00002_Trigger'];
SceneEnter(12);
PartySetPos(14, 31, 1);
FadeOut(0);

['Scene_00008_Teleport'];
SceneEnter(8);
PartySetPos(32, 44, 0);
FadeOut(0);

['Event_00008_00003_Trigger'];
EventSetTriggerMode(-1, -1, false, 0);
SetDlgLower(0, 0, false);
//白苗使者：
//请问一下．．
//往余杭县怎么走？
RoleSetDirFrame(3, 0, 0);
VideoUpdate(0, false);
SetDlgUpper(1, 0, false);
//李逍遥：
//往这方向一直走
//过了十里坡就到了．．
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//白苗使者：
//好．．谢谢
EventSetAutoScript(8, 4, "@0F81");
WaitEventAutoScriptRun(2, false, false);
EventSetAutoScript(8, 3, "@0F81");
WaitEventAutoScriptRun(8, false, false);
EventSetDirFrame(8, 3, 1, 0);
VideoUpdate(0, false);
EventSetDirFrame(8, 4, 0, 0);
SetDlgLower(0, 0, false);
//白苗使者：
//对了．．再请问一下
//城里头有客栈可以投宿吗？
VideoUpdate(0, false);
SetDlgUpper(1, 0, false);
//李逍遥：
//只有一间，就是我家开的
//不过．．已经有客人包下了
//暂时不作别人的生意
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//白苗使者：
//啧．．好吧
//我们另外想办法
WaitEventAutoScriptRun(4, false, false);

