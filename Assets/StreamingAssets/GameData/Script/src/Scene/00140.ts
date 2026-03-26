['Scene_00140_Enter'];
Dos_SetBattlefield(FbpDos.木道人);
SetBattleMusic(Music.心急如焚);
MusicPlay(Music.神木林_变奏, false, false);

['Event_00140_00002_Trigger'];
SceneEnter(139);
PartySetPos(48, 89, 1);
FadeOut(0);

['Event_00140_00004_Auto'];
EventModifyPos(-1, -1, 0, 2);
EventModifyPos(-1, -1, 0, 4);
EventModifyPos(-1, -1, 0, 8);
EventModifyPos(-1, -1, 0, 12);
EventModifyPos(-1, -1, 0, 16);
EventModifyPos(-1, -1, 0, 18);
EventModifyPos(-1, -1, 0, 18);
EventModifyPos(-1, -1, 0, 18);

['Event_00140_00003_Trigger'];
EventSetState(-1, 0, 0);
SetDlgLower(0, 0, false);
//月如～小心！
EventSetState(2348, 1, 0);
PlaySound(182);
WaitEventAutoScriptRun(4, false, false);
RoleMoveOneStep(8, 4, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(8, 4, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(8, 4, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(8, 4, 0);
WaitEventAutoScriptRun(2, false, false);
SetDlgUpper(0, 0, false);
//黑蜘蛛：
//唧～唧～　擅入者死！
EventSetState(2348, 0, 0);
BattleStart(43, "@A073", "");

['Event_00140_00021_Trigger'];
Call("@8E99", 0, 0);
SetDlgBox(0);
//获得灵山仙芝
AddItem(47, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

['Event_00140_00018_Trigger'];
Call("@8E99", 0, 0);
SetDlgBox(0);
//获得缠魂丝
AddItem(99, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

['Event_00140_00019_Trigger'];
Call("@8E99", 0, 0);
SetDlgBox(0);
//获得９个蜘蛛卵
AddItem(60, 9);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

['Event_00140_00022_Trigger'];
Call("@8E99", 0, 0);
SetDlgBox(0);
//获得醍醐香
AddItem(66, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

['Event_00140_00020_Trigger'];
Call("@8E99", 0, 0);
SetDlgBox(0);
//获得蜂巢
AddItem(55, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

['Event_00140_00016_Trigger'];
EventSetState(-1, 0, 0);
VideoUpdate(0, false);
PlaySound(78);
SetDlgBox(0);
//获得试炼果
AddItem(52, 0);

['Event_00140_00024_Trigger'];
EventSetState(-1, 0, 0);
VideoUpdate(0, false);
PlaySound(78);
SetDlgBox(0);
//获得九节菖蒲
AddItem(29, 0);

