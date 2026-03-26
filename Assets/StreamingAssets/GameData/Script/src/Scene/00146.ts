['Scene_00146_Enter'];
MusicPlay(Music.险境_1, false, false);

['Event_00146_00001_Trigger'];
SceneEnter(169);
PartySetPos(40, 44, 1);
FadeOut(0);

['Event_00146_00006_Auto'];
EventModifyPos(-1, -1, -16, 8);
EventModifyPos(-1, -1, -16, 8);
EventModifyPos(-1, -1, -12, 6);
EventModifyPos(-1, -1, -12, 6);
EventModifyPos(-1, -1, -8, 4);
EventModifyPos(-1, -1, -8, 4);
EventModifyPos(-1, -1, -6, 3);
EventModifyPos(-1, -1, -6, 3);
EventModifyPos(-1, -1, -4, 2);
EventModifyPos(-1, -1, -4, 2);
EventModifyPos(-1, -1, -2, 1);
EventModifyPos(-1, -1, -2, 1);

['Event_00146_00003_Trigger'];
EventSetState(-1, 0, 0);
MusicStop(0);
PartyWalkToBlock(49, 25, 1, 8);
RoleSetDirFrame(2, 0, 0);
ViewportMove(4, -4, 24);
ViewportMove(0, -2, 56);
SetDlgLower(90, 0, false);
//逍遥哥．．哥．．
EventSetState(2401, 1, 0);
PartySetRole(1, 0, 0);
ViewportMove(0, 0, 0);
RoleMoveOneStep(-16, 8, 0);
WaitEventAutoScriptRun(6, false, false);
EventSetDirFrame(146, 4, 3, 0);
WaitEventAutoScriptRun(2, false, false);
RoleMoveOneStep(-8, 4, 0);
WaitEventAutoScriptRun(3, false, false);
RoleMoveOneStep(-8, 4, 0);
WaitEventAutoScriptRun(2, false, false);
SetDlgLower(0, 0, false);
//李逍遥：
//$09灵儿．．你．．真的．．
//．．真的是你吗？~70
ViewportMove(52, 11, -1);
SetDlgLower(90, 0, false);
//$07我只是丑陋的蛇女
//又失去化成人形的能力
//活着对我来说．．已经
//没有意义
//你．．又何必犯险来救我~80
ViewportMove(0, 0, 0);
WaitEventAutoScriptRun(4, false, false);
RoleSetDirFrame(3, 0, 0);
WaitEventAutoScriptRun(4, false, false);
//$04不．．不可能！~70
RoleSetDirFrame(0, 0, 0);
VideoUpdate(0, false);
//$05我的灵儿．．我的灵儿是．．~60
SceneEnter(170);
PlayCDOrMusic(CD.情怨, Music.魂萦梦牵);
FadeOut(2);

