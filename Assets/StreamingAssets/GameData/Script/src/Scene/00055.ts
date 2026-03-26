['Scene_00055_Teleport'];
RoleSetDirFrame(3, 0, 0);
SceneEnter(50);
PartySetPos(30, 39, 0);
FadeOut(0);

['Event_00055_00003_Trigger'];
SceneEnter(56);
PartySetPos(54, 93, 0);
FadeOut(0);

['Event_00055_00004_Trigger'];
SceneEnter(57);
PartySetPos(46, 114, 0);
FadeOut(0);

['Event_00055_00002_Trigger'];
SceneEnter(62);
PartySetPos(41, 86, 0);
FadeOut(0);

['Scene_00055_Enter'];
Dos_SetBattlefield(FbpDos.木秘宫_1);
MusicPlay(Music.步步为营, false, false);

['Event_00055_00005_Auto'];
NpcChase(8, 0, false);
NpcChase(8, 0, false);
NpcChase(8, 0, false);
NpcChase(8, 0, false);
NpcSetDirFrame(-1, 0);
ReplaceAndPause();
ReplaceAndPause();
ReplaceAndPauseWithNop("Event_00055_00005_Auto", 0);

