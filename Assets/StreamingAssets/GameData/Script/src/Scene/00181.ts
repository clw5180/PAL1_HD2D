['Event_00181_00002_Trigger'];
SceneEnter(183);
PartySetPos(44, 103, 1);
FadeOut(0);

['Scene_00181_Teleport'];
SceneEnter(187);
PartySetPos(38, 70, 0);
FadeOut(0);

['Scene_00181_Enter'];
MusicStop(0);
PlaySound(103);
FadeToScene(2, -1);
SetDlgCenter(0, false);
//阿奴祭起风灵珠
//随即一阵风吹散了浓雾
Replace();
Dos_SetBattlefield(FbpDos.片尾_阿奴);
SetBattleMusic(Music.心急如焚);
MusicPlay(Music.神木林, false, false);

['Event_00181_00012_Trigger'];
SceneEnter(190);
PartySetPos(19, 120, 0);
FadeOut(0);

['Event_00181_00013_Trigger'];
SceneEnter(190);
PartySetPos(55, 44, 1);
FadeOut(0);

['Event_00181_00014_Trigger'];
EventSetState(-1, 0, 0);
VideoUpdate(0, false);
PlaySound(78);
SetDlgBox(0);
//摘得蟠果
AddItem(42, 0);

['Event_00181_00006_Auto'];
NpcChase(8, 0, false);
NpcChase(8, 0, false);
NpcSetDirFrame(-1, 0);
ReplaceAndPause();
ReplaceAndPause();
ReplaceAndPauseWithNop("Event_00181_00006_Auto", 0);

