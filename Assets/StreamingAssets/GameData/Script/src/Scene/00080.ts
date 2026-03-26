['Scene_00080_Enter'];
MusicPlay(Music.大开眼界, false, false);
SetBattleMusic(Music.势如破竹_副本);

['Event_00080_00001_Trigger'];
SceneEnter(84);
PartySetPos(53, 47, 0);
FadeOut(0);

['Event_00080_00005_Trigger'];
//官差：
//小兄弟，要进城的话，小心
//自己身上的财物。

['Event_00080_00006_Trigger'];
//官差：
//看什么看！没见过官差啊！

['Event_00080_00004_Trigger'];
EventSetTriggerMode(-1, -1, false, 2);
//巡捕：
//我是扬州府巡捕，为了过滤盘
//查疑犯，要进去可以，不过一
//概不准出城。
EventWalkOneStep(-1, -1, -8, 0);
WaitEventAutoScriptRun(0, false, false);
EventWalkOneStep(-1, -1, -8, 0);
WaitEventAutoScriptRun(0, false, false);
EventWalkOneStep(-1, -1, -8, 0);
WaitEventAutoScriptRun(0, false, false);
EventWalkOneStep(-1, -1, -8, 0);
NpcSetDirFrame(3, 0);
WaitEventAutoScriptRun(4, false, false);
PartyWalkToBlock(13, 75, 0, 2);
RoleSetDirFrame(2, 0, 0);
RoleMoveOneStep(8, -4, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(8, -4, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(8, -4, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(8, -4, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(8, -4, 0);
EventSetDirFrame(80, 5, 3, 0);
EventSetDirFrame(80, 6, 1, 0);
EventWalkOneStep(-1, -1, 8, 4);
EventWalkOneStep(80, 5, 8, 4);
EventWalkOneStep(80, 6, -8, -4);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(8, -4, 0);
EventWalkOneStep(0, 0, 8, 4);
EventWalkOneStep(80, 5, 8, 4);
EventWalkOneStep(80, 6, -8, -4);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(8, -4, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(8, -4, 0);
WaitEventAutoScriptRun(0, false, false);
SceneEnter(83);

['Event_00080_00007_Trigger'];
//告示上写着：
//"奉扬州太守之令，近日城内宵
//小猖獗，为确实追查嫌疑犯，
//一干人等一律只许进城不许出城"

['Event_00080_00008_Trigger'];
//路人：
//最近扬州城里不太平静
//偷窃案、灭门血案还有强盗案
//到处都是，你们如果是来旅行
//还是考虑一下比较好。

