['Event_00063_00001_Trigger'];
SceneEnter(62);
PartySetPos(39, 51, 0);
FadeOut(0);

['Event_00063_00002_Trigger'];
SceneEnter(62);
PartySetPos(29, 42, 1);
FadeOut(0);

['Event_00063_00003_Trigger'];
SceneEnter(62);
PartySetPos(15, 33, 1);
FadeOut(0);

['Scene_00063_Enter'];
Dos_SetBattlefield(FbpDos.隐龙窟);

['Event_00063_00006_Trigger'];
Call("@8E99", 0, 0);
SetDlgBox(0);
//获得金刚符
AddItem(3, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

['Event_00063_00005_Trigger'];
Call("@8E99", 0, 0);
SetDlgBox(0);
//获得糯米
AddItem(15, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

Call("@8E99", 0, 0);
SetDlgBox(0);
//获得糯米糕
AddItem(16, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

['Event_00063_00011_Trigger'];
PlaySound(78);
SetDlgBox(0);
//发现雄黄酒
AddItem(28, 0);
EventSetState(-1, 0, 0);

['Event_00063_00008_Trigger'];
PlaySound(78);
SetDlgBox(0);
//发现布袍
AddItem(148, 0);
EventSetState(-1, 0, 0);

