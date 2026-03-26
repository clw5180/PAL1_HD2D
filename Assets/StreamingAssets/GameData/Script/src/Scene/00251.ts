['Event_00251_00001_Trigger'];
SceneEnter(253);
PartySetPos(55, 70, 0);
FadeOut(0);

['Scene_00251_Enter'];
Dos_SetBattlefield(FbpDos.乱葬岗_2);

['Event_00251_00002_Trigger'];
EventSetTriggerMode(-1, -1, false, 0);
EventSetAutoScript(-1, -1, "@836C");
SetBattleMusic(Music.势如破竹_副本);
BattleStart(315, "@A073", "");
SetBattleMusic(Music.心急如焚);

['Event_00251_00004_Trigger'];
EventSetState(-1, 0, 0);
RoleSetDirFrame(2, 0, 0);
WaitEventAutoScriptRun(4, false, false);
EventSetState(4410, 0, 0);
EventSetState(4411, 1, 0);
FadeToScene(0, -1);
RoleSetDirFrame(2, 0, 1);
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//李逍遥：
//可恶～无路可逃了！
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//巫后：
//你退开～　我来对付它！
['@839E'];
RoleMoveOneStep(16, -8, 0);
WaitEventAutoScriptRun(0, false, false);
GotoWithNop("@839E", 3);
SetDlgLower(73, 0, false);
//巫后：
//年轻人～虽然我还不知道你
//的姓名，但是．．希望你能
//答应我．．
VideoRestore();
//日后～如果你遇到我的女儿
//请你能代我好好照顾她．．
RoleSetDirFrame(3, 0, 0);
VideoUpdate(0, false);
RoleSetDirFrame(0, 12, 0);
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//巫后：
//你去吧！
VideoUpdate(0, false);
PartySetRole(4, 0, 0);
RoleSetDirFrame(0, 12, 0);
EventSetState(4413, 1, 0);
EventSetState(4414, 1, 0);
PlaySound(103);
WaitEventAutoScriptRun(20, false, false);
EventSetAutoScript(251, 6, "Event_00251_00005_Auto");
WaitEventAutoScriptRun(4, false, false);
EventSetAutoScript(251, 3, "Event_00253_00002_Auto");
WaitEventAutoScriptRun(5, false, false);
RoleSetDirFrame(3, 0, 0);
WaitEventAutoScriptRun(0, false, false);
RoleSetDirFrame(2, 0, 0);
WaitEventAutoScriptRun(22, false, false);
EventSetState(4413, 1, 0);
EventSetState(4414, 0, 0);
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//巫后：
//妖孽！你我原本都不该存在这
//世上，与我一同化为尘土吧！
FadeColor(127, 4, false);
SceneEnter(252);

['Event_00251_00005_Auto'];
EventWalkOneStep(-1, -1, 0, -1);
EventWalkOneStep(-1, -1, 0, -1);
EventWalkOneStep(-1, -1, 0, -2);
EventWalkOneStep(-1, -1, 0, -2);
EventWalkOneStep(-1, -1, 0, -3);
EventWalkOneStep(-1, -1, 0, -3);
EventWalkOneStep(-1, -1, 0, -4);
EventWalkOneStep(-1, -1, 0, -4);
['@8402'];
EventWalkOneStep(-1, -1, 0, -5);
GotoWithNop("@8402", 0);

['Event_00251_00011_Trigger'];
Call("@8E99", 0, 0);
SetDlgBox(0);
//获得八仙石
AddItem(54, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

