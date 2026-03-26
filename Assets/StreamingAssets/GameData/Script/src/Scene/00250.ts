['Scene_00250_Enter'];
MusicPlay(Music.历险, false, false);

['Event_00250_00001_Trigger'];
RoleSetDirFrame(1, 0, 0);
['@84B2'];
RoleMoveOneStep(-8, -8, 0);
WaitEventAutoScriptRun(0, false, false);
GotoWithNop("@84B2", 4);
SceneEnter(258);
PartySetPos(26, 95, 1);
FadeOut(0);

['Event_00250_00002_Trigger'];
PartyWalkToBlock(32, 43, 1, 8);
WaitEventAutoScriptRun(0, false, false);
RoleSetDirFrame(3, 0, 0);
WaitEventAutoScriptRun(0, false, false);
HeroSetSprite(0, Sprite.空空如也, true);
RoleSetDirFrame(0, 0, 0);
EventSetDirFrame(250, 3, 0, 1);
WaitEventAutoScriptRun(2, false, false);
EventSetAutoScript(250, 3, "Event_00023_00011_Auto");
PlaySound(155);
WaitEventAutoScriptRun(16, false, false);
FadeOut(0);
EventSetDirFrame(250, 3, 0, 0);
EventSetAutoScript(250, 3, "");
HeroSetSprite(0, Sprite.逍遥假扮苗人, true);
RoleSetDirFrame(2, 0, 0);
['Scene_00262_Teleport'];
SceneEnter(262);
PartySetPos(15, 91, 1);

['Event_00250_00004_Trigger'];
SceneEnter(261);
PartySetPos(50, 99, 0);
FadeOut(0);

['Event_00250_00005_Trigger'];
SceneEnter(261);
PartySetPos(41, 108, 0);
FadeOut(0);

['Event_00250_00006_Trigger'];
SceneEnter(261);
PartySetPos(21, 43, 1);
FadeOut(0);

['Event_00250_00007_Trigger'];
SceneEnter(261);
PartySetPos(29, 51, 0);
FadeOut(0);

['Event_00250_00008_Trigger'];
SceneEnter(261);
PartySetPos(36, 65, 1);
FadeOut(0);

