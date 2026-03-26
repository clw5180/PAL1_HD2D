['Event_00045_00001_Trigger'];
SceneEnter(43);
PartySetPos(15, 46, 0);
FadeOut(0);

['Event_00045_00002_Trigger'];
SceneEnter(47);
PartySetPos(17, 42, 1);
FadeOut(0);

['Event_00045_00004_Trigger'];
SceneEnter(47);
PartySetPos(47, 86, 0);
FadeOut(0);

['Event_00045_00003_Trigger'];
SceneEnter(47);
PartySetPos(24, 33, 1);
FadeOut(0);

['Scene_00045_Enter'];
Dos_SetBattlefield(FbpDos.巨蜘蛛网);
SetBattleMusic(Music.势如破竹);
MusicPlay(Music.步步为营, false, false);

['Event_00045_00015_Trigger'];
Call("@8E99", 0, 0);
SetDlgBox(0);
//获得还神丹
AddItem(45, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

