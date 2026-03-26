['Event_00233_00001_Trigger'];
SceneEnter(230);
PartySetPos(14, 59, 0);
FadeOut(0);

['Event_00233_00002_Trigger'];
SceneEnter(235);
PartySetPos(9, 87, 0);
FadeOut(0);

['Event_00233_00015_Auto'];
NpcMoveToBlock(28, 59, 1, 3);
NpcSetDirFrame(0, 0);
WaitEventAutoScriptRun(30, false, false);
NpcMoveToBlock(36, 51, 1, 3);
WaitEventAutoScriptRun(10, false, false);
NpcMoveToBlock(34, 49, 0, 3);
ReplaceAndPauseWithNop("Event_00002_00026_Auto", 0);

['Scene_00233_Enter'];
PartySetPos(17, 79, 1);
ReplaceAndPause();

['Event_00233_00003_Trigger'];
//士兵：
//死守神殿！

['Event_00233_00024_Trigger'];
//盖罗娇：
//少主！你们赶紧到神殿内避难
//黑苗人已经攻进城了。不过您
//放心，属下一定会死守这里
//绝不让敌人踏入神殿半步！

