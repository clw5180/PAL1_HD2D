['Event_00274_00001_Trigger'];
SceneEnter(268);
PartySetPos(51, 72, 1);
FadeOut(0);

['Event_00274_00004_Trigger'];
SceneEnter(275);
PartySetPos(19, 75, 0);
FadeOut(0);

['Event_00274_00003_Trigger'];
SceneEnter(276);
PartySetPos(21, 37, 1);
FadeOut(0);

['Event_00274_00002_Trigger'];
SceneEnter(277);
PartySetPos(21, 55, 0);
FadeOut(0);

['Event_00274_00011_Auto'];
NpcMoveToBlock(28, 85, 1, 3);
WaitEventAutoScriptRun(5, false, false);
NpcSetDirFrame(1, 0);
WaitEventAutoScriptRun(6, false, false);
NpcSetDirFrame(2, 0);
WaitEventAutoScriptRun(5, false, false);
NpcSetDirFrame(3, 0);
WaitEventAutoScriptRun(4, false, false);
NpcMoveToBlock(29, 86, 0, 3);

['Event_00274_00006_Trigger'];
//船商：
//公子～我的船运行缺人手
//您愿意来我这工作吗？
ReplaceAndPause();
//船商：
//如果你知道有合适的人
//可以介绍给我，我会付
//介绍费的！

