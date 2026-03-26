['Event_00108_00002_Trigger'];
SceneEnter(113);
PartySetPos(38, 108, 0);
FadeOut(0);

['Event_00108_00005_Trigger'];
PlaySound(177);
SetDlgCenter(0, false);
//哞．．．

['Event_00108_00001_Trigger'];
SceneEnter(107);
PartySetPos(12, 66, 0);
FadeOut(0);

['Scene_00108_Enter'];
MusicPlay(Music.小桥流水, false, false);

['Event_00108_00003_Trigger'];
RoleSetDirFrame(2, 0, 0);
RoleMoveOneStep(12, -16, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(12, -16, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(12, -16, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(12, -8, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(16, -8, 0);
WaitEventAutoScriptRun(0, false, true);

['Event_00108_00004_Trigger'];
RoleSetDirFrame(0, 0, 0);
RoleMoveOneStep(-12, 16, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(-12, 16, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(-12, 16, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(-12, 8, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(-16, 8, 0);
WaitEventAutoScriptRun(0, false, true);

