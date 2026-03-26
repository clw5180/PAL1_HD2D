['Event_00065_00001_Trigger'];
SceneEnter(64);
PartySetPos(49, 18, 0);
FadeOut(0);

['Event_00065_00002_Trigger'];
JumpIfItemNotEquipped(214, 0, "@2ED7");
EventSetState(1221, 0, 0);
FadeToScene(0, -1);
ReplaceAndPauseWithNop("@2E58", 0);

['Scene_00065_Enter'];
Dos_SetBattlefield(FbpDos.片尾_赵灵儿);
MusicPlay(Music.历险, false, false);

['Event_00065_00015_Trigger'];
Call("@8E99", 0, 0);
SetDlgBox(0);
//获得６００文钱
CashModify(600, "");
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

['Event_00065_00012_Trigger'];
Call("@8E99", 0, 0);
SetDlgBox(0);
//获得十里香
AddItem(31, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

['Event_00065_00018_Trigger'];
Call("@8E99", 0, 0);
SetDlgBox(0);
//获得天师符
AddItem(6, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

