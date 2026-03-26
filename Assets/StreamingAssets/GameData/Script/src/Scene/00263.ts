['Event_00263_00001_Trigger'];
SceneEnter(262);
PartySetPos(28, 59, 1);
FadeOut(0);

['Event_00263_00002_Trigger'];
SceneEnter(264);
PartySetPos(53, 98, 0);
FadeOut(0);

['Event_00263_00003_Trigger'];
SetDlgUpper(0, 0, false);
//石长老：
//你来这里干什么？走开！
//这不是小兵该来的地方
RoleSetDirFrame(3, 0, 0);
RoleMoveOneStep(16, 8, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(16, 8, 0);
WaitEventAutoScriptRun(0, false, false);

['Event_00263_00016_Trigger'];
Call("@8E99", 0, 0);
SetDlgBox(0);
//获得７００文钱
CashModify(700, "");
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

['Event_00263_00020_Trigger'];
Call("@8E99", 0, 0);
SetDlgBox(0);
//获得９００文钱
CashModify(900, "");
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

['Event_00263_00015_Trigger'];
Call("@8E99", 0, 0);
SetDlgBox(0);
//获得２０００文钱
CashModify(2000, "");
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

['Event_00263_00017_Trigger'];
Call("@8E99", 0, 0);
SetDlgBox(0);
//获得３０００文钱
CashModify(3000, "");
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

Call("@8E99", 0, 0);
SetDlgBox(0);
//获得４０００文钱
CashModify(4000, "");
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

