['Event_00188_00001_Trigger'];
SceneEnter(187);
PartySetPos(7, 88, 0);
FadeOut(0);

['Event_00188_00002_Trigger'];
SceneEnter(185);
PartySetPos(9, 88, 1);
FadeOut(0);

['Event_00188_00005_Trigger'];
EventSetTriggerMode(-1, -1, false, 0);
NpcSetFrame(1);
EventSetAutoScript(188, 3, "@8EA6");
EventSetState(3153, 1, 0);
EventSetState(3154, 0, 0);

['Scene_00188_Enter'];
Dos_SetBattlefield(FbpDos.凤凰巢);
MusicPlay(Music.神木林_变奏, false, false);

