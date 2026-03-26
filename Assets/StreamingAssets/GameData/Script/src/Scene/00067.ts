['Scene_00067_Enter'];
PartySetPos(15, 18, 0);
HeroSetSprite(0, Sprite.空空如也, false);
PartySetRole(1, 0, 0);
RoleSetDirFrame(0, 0, 0);
VideoShake(90, 0);
SetRng(0);
MusicPlay(Music.十面埋伏, false, false);
WaitEventAutoScriptRun(25, false, false);
PlaySound(117);
PlayRng(0, 0, 14);
EventSetState(1338, 0, 0);
EventSetState(1337, 0, 0);
EventSetState(1339, 0, 0);
SceneEnter(60);
FadeOut(0);

['Event_00067_00001_Auto'];
WaitEventAutoScriptRun(7, false, false);
NpcSetDirFrame(3, 0);
NpcSetDirFrame(0, 0);
WaitEventAutoScriptRun(6, false, false);
NpcSetDirFrame(1, 0);
WaitEventAutoScriptRun(2, false, false);
NpcSetDirFrame(0, 0);

['Event_00067_00002_Auto'];
WaitEventAutoScriptRun(4, false, false);
NpcSetDirFrame(2, 0);
WaitEventAutoScriptRun(4, false, false);
NpcSetDirFrame(3, 0);
WaitEventAutoScriptRun(5, false, false);
NpcSetDirFrame(2, 0);
WaitEventAutoScriptRun(3, false, false);
NpcSetDirFrame(3, 0);

['Event_00067_00003_Auto'];
WaitEventAutoScriptRun(3, false, false);
NpcSetDirFrame(1, 0);
WaitEventAutoScriptRun(8, false, false);
NpcSetDirFrame(2, 0);
WaitEventAutoScriptRun(3, false, false);
NpcSetDirFrame(3, 0);
WaitEventAutoScriptRun(4, false, false);
NpcSetDirFrame(1, 0);

