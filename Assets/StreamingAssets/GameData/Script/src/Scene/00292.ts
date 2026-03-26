['Scene_00292_Enter'];
PartySetPos(7, 104, 1);
Replace();
['Scene_00294_Enter'];
Dos_SetBattlefield(FbpDos.桃花林);
MusicPlay(Music.十面埋伏, false, false);

['Event_00292_00001_Trigger'];
SceneEnter(293);
PartySetPos(6, 112, 1);
FadeOut(0);

['Event_00292_00027_Trigger'];
Call("@8E99", 0, 0);
SetDlgBox(0);
//获得凤纹披风
AddItem(172, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

['Event_00292_00026_Trigger'];
Call("@8E99", 0, 0);
SetDlgBox(0);
//获得白虎之铠
AddItem(162, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

