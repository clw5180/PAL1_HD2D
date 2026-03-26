['Scene_00212_Enter'];
MusicPlay(Music.白河寒秋, false, false);

['Event_00212_00001_Trigger'];
SceneEnter(207);
PartySetPos(14, 59, 0);
FadeOut(0);

['Event_00212_00002_Trigger'];
SceneEnter(204);
PartySetPos(9, 87, 0);
FadeOut(0);

['Event_00212_00005_Auto'];
NpcMoveToBlockMutexLock(39, 47, 1, 2);
ReplaceAndPause();
NpcSetDirFrame(0, 0);
WaitEventAutoScriptRun(4, false, false);
NpcMoveToBlockMutexLock(40, 48, 1, 2);
ReplaceAndPause();
NpcSetDirFrame(0, 0);
WaitEventAutoScriptRun(3, false, false);
ReplaceAndPauseWithNop("Event_00212_00005_Auto", 0);

['Event_00212_00005_Trigger'];
EventSetTriggerMode(-1, -1, false, 2);
//守卫：
//少主，带外族人进入神殿
//是违反族规的
VideoUpdate(0, false);
SetDlgLower(27, 0, false);
//阿奴：
//我只是带他参观一下不行？
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//守卫：
//属下是按律行事．．
//请少主不要为难属下
VideoUpdate(0, false);
SetDlgLower(30, 0, false);
//阿奴：
//我是族长的女儿
//我说了算！
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//守卫：
//是．．．
ReplaceAndPause();
//守卫：
//少主您可别让族长知道啊

['Event_00212_00003_Trigger'];
//守卫：
//此神殿乃供奉女娲娘娘圣灵
//之所在，而且也是城内唯一
//仅存的水源之处

['Event_00212_00004_Trigger'];
//守卫：
//我等奉命在此严密看守
//以防敌人潜入破坏

