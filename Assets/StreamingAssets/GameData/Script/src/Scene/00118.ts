['Event_00118_00002_Trigger'];
SceneEnter(109);
PartySetPos(34, 67, 1);
FadeOut(0);

['Event_00118_00004_Auto'];
NpcMoveToBlock(11, 110, 0, 3);

['Event_00118_00005_Auto'];
NpcMoveToBlock(13, 104, 0, 8);
NpcMoveToBlock(14, 105, 1, 3);
NpcMoveToBlock(13, 106, 1, 3);

['Event_00118_00006_Trigger'];
EventSetTriggerMode(-1, -1, false, 2);
SetDlgCenter(0, false);
//一张巨大的蜘蛛网
//挡住了树林的入口

['Event_00118_00001_Trigger'];
SceneEnter(140);
PartySetPos(15, 113, 0);
FadeOut(0);

