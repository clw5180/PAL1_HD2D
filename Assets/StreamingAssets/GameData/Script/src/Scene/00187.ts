['Event_00187_00005_Trigger'];
SceneEnter(188);
PartySetPos(47, 61, 0);
FadeOut(0);

['Event_00187_00004_Trigger'];
SceneEnter(179);
PartySetPos(52, 106, 0);
FadeOut(0);

['Event_00187_00002_Trigger'];
SceneEnter(180);
PartySetPos(52, 90, 0);
RoleSetDirFrame(0, 0, 0);
FadeOut(0);

['Event_00187_00003_Trigger'];
SceneEnter(193);
PartySetPos(46, 94, 1);
RoleSetDirFrame(0, 0, 0);
FadeOut(0);

['Event_00187_00006_Trigger'];
SetDlgBox(0);
//摘得一颗"蟠果"
AddItem(42, 0);
ReplaceAndPause();

['Scene_00187_Enter'];
Dos_SetBattlefield(FbpDos.满地菌);
MusicPlay(Music.灵山, false, false);
SetBattleMusic(Music.战意昂_副本);

['Event_00187_00016_Trigger'];
EventSetState(-1, 0, 0);
VideoUpdate(0, false);
PlaySound(78);
SetDlgBox(0);
//摘得醍醐香
AddItem(66, 0);

