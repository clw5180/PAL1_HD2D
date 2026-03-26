['Event_00039_00001_Trigger'];
SceneEnter(36);
PartySetPos(33, 8, 0);
FadeOut(0);

['Event_00039_00002_Trigger'];
SceneEnter(36);
PartySetPos(41, 16, 0);
FadeOut(0);

['Event_00039_00003_Trigger'];
SceneEnter(36);
PartySetPos(54, 29, 1);
FadeOut(0);

['Scene_00039_Enter'];
MusicPlay(Music.富甲一方, false, false);
PartySetPos(48, 67, 0);
RoleSetDirFrame(3, 0, 0);
VideoUpdate(0, false);
//春兰：
//姑爷～您若是还有任何需要的
//请尽量吩咐我们下人们，奴婢
//先下去了
WaitEventAutoScriptRun(16, false, false);
RoleSetDirFrame(0, 0, 0);
WaitEventAutoScriptRun(8, false, false);
RoleSetDirFrame(3, 0, 0);
WaitEventAutoScriptRun(4, false, false);
RoleSetDirFrame(2, 0, 0);
WaitEventAutoScriptRun(0, false, false);
RoleSetDirFrame(1, 0, 0);
WaitEventAutoScriptRun(8, false, false);
RoleSetDirFrame(2, 0, 0);
WaitEventAutoScriptRun(4, false, false);
SetDlgLower(1, 0, false);
//李逍遥：
//哇．．好漂亮的房子
//大户人家就是不一样
ReplaceAndPause();
SetPaletteTime(0);

['Event_00039_00005_Auto'];
ReplaceAndPause();
['Event_00039_00004_Auto'];
NpcMoveToBlockMutexLock(43, 73, 1, 4);
EventSetState(-1, 0, 0);

['Event_00039_00012_Trigger'];
PlaySound(78);
SetDlgBox(0);
//发现木鞋
AddItem(176, 0);
EventSetState(-1, 0, 0);

['Event_00039_00009_Trigger'];
PlaySound(78);
SetDlgBox(0);
//发现香袋
AddItem(188, 0);
EventSetState(-1, 0, 0);

['Event_00039_00011_Trigger'];
PlaySound(78);
SetDlgBox(0);
//发现金刚符
AddItem(3, 0);
EventSetState(-1, 0, 0);

