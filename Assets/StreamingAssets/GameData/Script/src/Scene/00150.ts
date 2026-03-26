['Event_00150_00001_Auto'];
NpcMoveToBlock(28, 64, 1, 3);
NpcMoveToBlock(23, 69, 1, 3);
NpcMoveToBlock(29, 75, 0, 3);

['Event_00150_00002_Auto'];
NpcMoveToBlock(24, 69, 0, 3);
WaitEventAutoScriptRun(3, false, false);
NpcSetDirFrame(2, 0);
WaitEventAutoScriptRun(3, false, false);
NpcMoveToBlock(30, 75, 0, 8);

['Event_00150_00003_Auto'];
NpcMoveToBlock(26, 66, 0, 3);
NpcMoveToBlock(28, 63, 1, 3);
NpcMoveToBlock(27, 62, 0, 3);
NpcMoveToBlock(28, 63, 0, 3);
NpcMoveToBlock(22, 68, 1, 3);

['Event_00150_00004_Auto'];
NpcMoveToBlock(27, 65, 0, 3);
NpcMoveToBlock(26, 64, 1, 3);
NpcMoveToBlock(24, 66, 1, 3);
NpcMoveToBlock(25, 65, 1, 3);
NpcMoveToBlock(23, 68, 0, 3);
NpcMoveToBlock(30, 75, 1, 3);

['Event_00150_00005_Auto'];
NpcSetDirFrame(3, 0);
WaitEventAutoScriptRun(5, false, false);
NpcSetDirFrame(2, 0);
WaitEventAutoScriptRun(5, false, false);
NpcSetDirFrame(3, 0);
WaitEventAutoScriptRun(4, false, false);
NpcSetDirFrame(2, 0);
WaitEventAutoScriptRun(4, false, false);
NpcMoveToBlock(23, 69, 0, 3);
WaitEventAutoScriptRun(2, false, false);
NpcMoveToBlock(30, 75, 0, 3);

['Event_00150_00006_Auto'];
NpcMoveToBlock(25, 66, 1, 3);
NpcMoveToBlock(26, 67, 1, 3);
NpcMoveToBlock(26, 68, 0, 3);
NpcMoveToBlock(25, 68, 0, 3);
NpcMoveToBlock(25, 69, 0, 3);
NpcMoveToBlock(24, 68, 0, 3);
NpcMoveToBlock(21, 70, 1, 3);
NpcMoveToBlock(21, 71, 1, 3);
NpcMoveToBlock(28, 78, 1, 3);

['Scene_00150_Enter'];
PartySetPos(26, 65, 0);
HeroSetSprite(0, Sprite.空空如也, false);
RoleSetDirFrame(0, 0, 0);
PartySetRole(1, 0, 0);
VideoShake(999, 4);
SetRng(5);
PlayRng(0, 0, 7);
FadeOut(0);
VideoFadeAndUpdate(8);
WaitEventAutoScriptRun(30, false, false);
VideoFadeAndUpdate(-2);
VideoShake(999, 1);
SetRng(2);
PlayRng(0, 0, 0);
FadeOut(0);
SceneEnter(151);

['Event_00150_00007_Auto'];
NpcMoveToBlock(29, 63, 0, 3);
NpcMoveToBlock(30, 62, 0, 3);
WaitEventAutoScriptRun(5, false, false);
NpcMoveToBlock(28, 63, 1, 8);
NpcMoveToBlock(22, 57, 0, 8);

['Event_00150_00008_Auto'];
NpcMoveToBlock(29, 75, 0, 3);
NpcMoveToBlock(23, 69, 1, 3);
NpcMoveToBlock(30, 63, 0, 3);
NpcMoveToBlock(29, 63, 1, 3);
NpcMoveToBlock(20, 54, 1, 3);

