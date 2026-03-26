['Event_00056_00002_Trigger'];
SceneEnter(55);
PartySetPos(8, 79, 0);
FadeOut(0);

['Event_00056_00003_Trigger'];
SceneEnter(71);
PartySetPos(51, 45, 0);
FadeOut(0);

['Event_00056_00004_Trigger'];
EventSetTriggerMode(56, 4, false, 2);
EventSetTriggerMode(56, 5, false, 2);
EventSetDirFrame(56, 4, 3, 0);
EventSetDirFrame(56, 5, 3, 0);
//苗人：
//看什么看！　滚开！
ReplaceAndPause();
//苗人：
//没听到是不是？！你欠扁吗？

['Scene_00056_Enter'];
Dos_SetBattlefield(FbpDos.鬼阴山);

