['Scene_00214_Enter'];
PartySetPos(45, 19, 1);
MusicPlay(Music.情怨_1, false, false);

['Scene_00214_Teleport'];
SceneEnter(216);
PartySetPos(26, 46, 0);
FadeOut(0);

['Event_00214_00001_Trigger'];
EventSetState(-1, 0, 0);
AddItem(234, 0);
SetDlgBox(0);
//拾起芦苇漂

['Event_00214_00001_Auto'];
JumpIfEventNotInZone(214, 2, 0, "Event_00214_00001_Auto");
EventSetState(3608, 0, 0);
EventSetState(-1, 1, 0);
EventSetTriggerMode(-1, -1, true, 0);
EventSetTriggerScript(-1, -1, "@7A3C");

['Event_00214_00008_Trigger'];
PartySetPosToFirstRole();
RideNpcToPos(19, 94, 1, 4);
PartyWalkToBlock(20, 94, 0, 4);
ReplaceAndPause();
PartySetPosToFirstRole();
RideNpcToPos(16, 97, 1, 4);
PartyWalkToBlock(16, 98, 0, 4);
ReplaceAndPauseWithNop("Event_00214_00008_Trigger", 0);

['Event_00214_00009_Trigger'];
PartySetPosToFirstRole();
RideNpcToPos(18, 100, 1, 4);
PartyWalkToBlock(19, 101, 0, 4);
ReplaceAndPause();
PartySetPosToFirstRole();
RideNpcToPos(16, 98, 1, 4);
PartyWalkToBlock(16, 98, 0, 4);
ReplaceAndPauseWithNop("Event_00214_00009_Trigger", 0);

['Event_00214_00010_Trigger'];
PartySetPosToFirstRole();
RideNpcToPos(17, 91, 1, 4);
PartyWalkToBlock(17, 91, 0, 4);
ReplaceAndPause();
PartySetPosToFirstRole();
RideNpcToPos(19, 93, 1, 4);
PartyWalkToBlock(20, 94, 0, 4);
ReplaceAndPauseWithNop("Event_00214_00010_Trigger", 0);

['Event_00214_00011_Trigger'];
PartySetPosToFirstRole();
RideNpcToPos(23, 86, 1, 4);
PartyWalkToBlock(24, 87, 0, 4);
ReplaceAndPause();
PartySetPosToFirstRole();
RideNpcToPos(22, 85, 1, 4);
PartyWalkToBlock(22, 86, 0, 4);
ReplaceAndPauseWithNop("Event_00214_00011_Trigger", 0);

['Event_00214_00012_Trigger'];
PartySetPosToFirstRole();
RideNpcToPos(24, 102, 1, 4);
PartyWalkToBlock(25, 103, 0, 4);
ReplaceAndPause();
PartySetPosToFirstRole();
RideNpcToPos(21, 99, 0, 4);
PartyWalkToBlock(20, 98, 1, 4);
ReplaceAndPauseWithNop("Event_00214_00012_Trigger", 0);

['Event_00214_00013_Trigger'];
PartySetPosToFirstRole();
RideNpcToPos(29, 99, 0, 4);
PartyWalkToBlock(29, 98, 1, 4);
ReplaceAndPause();
PartySetPosToFirstRole();
RideNpcToPos(25, 102, 1, 4);
PartyWalkToBlock(25, 103, 0, 4);
ReplaceAndPauseWithNop("Event_00214_00013_Trigger", 0);

['Event_00214_00014_Trigger'];
PartySetPosToFirstRole();
RideNpcToPos(26, 93, 1, 4);
PartyWalkToBlock(26, 93, 0, 4);
ReplaceAndPause();
PartySetPosToFirstRole();
RideNpcToPos(30, 97, 0, 4);
PartyWalkToBlock(30, 97, 1, 4);
ReplaceAndPauseWithNop("Event_00214_00014_Trigger", 0);

['Event_00214_00015_Trigger'];
PartySetPosToFirstRole();
RideNpcToPos(34, 93, 1, 4);
PartyWalkToBlock(35, 93, 0, 4);
ReplaceAndPause();
PartySetPosToFirstRole();
RideNpcToPos(31, 97, 0, 4);
PartyWalkToBlock(30, 97, 1, 4);
ReplaceAndPauseWithNop("Event_00214_00015_Trigger", 0);

['Event_00214_00016_Trigger'];
PartySetPosToFirstRole();
RideNpcToPos(42, 87, 1, 4);
PartyWalkToBlock(43, 87, 0, 4);
ReplaceAndPause();
PartySetPosToFirstRole();
RideNpcToPos(38, 92, 0, 4);
PartyWalkToBlock(37, 92, 1, 4);
ReplaceAndPauseWithNop("Event_00214_00016_Trigger", 0);

['Event_00214_00017_Trigger'];
PartySetPosToFirstRole();
RideNpcToPos(24, 92, 0, 4);
PartyWalkToBlock(24, 91, 1, 4);
ReplaceAndPause();
PartySetPosToFirstRole();
RideNpcToPos(21, 94, 1, 4);
PartyWalkToBlock(21, 95, 0, 4);
ReplaceAndPauseWithNop("Event_00214_00017_Trigger", 0);

['Event_00214_00018_Trigger'];
PartySetPosToFirstRole();
RideNpcToPos(28, 87, 1, 4);
PartyWalkToBlock(29, 87, 0, 4);
ReplaceAndPause();
PartySetPosToFirstRole();
RideNpcToPos(26, 90, 0, 4);
PartyWalkToBlock(25, 90, 1, 4);
ReplaceAndPauseWithNop("Event_00214_00018_Trigger", 0);

['Event_00214_00019_Trigger'];
PartySetPosToFirstRole();
RideNpcToPos(27, 87, 1, 4);
RideNpcToPos(28, 88, 1, 4);
RideNpcToPos(29, 87, 1, 4);
PartyWalkToBlock(29, 87, 0, 4);
EventSetState(3611, 2, 0);
EventSetState(3609, 0, 0);
ReplaceAndPause();
PartySetPosToFirstRole();
EventSetState(3609, 2, 0);
EventSetState(3610, 0, 0);
RideNpcToPos(28, 88, 1, 4);
RideNpcToPos(27, 87, 0, 4);
RideNpcToPos(28, 85, 1, 4);
RideNpcToPos(29, 86, 1, 4);
PartyWalkToBlock(29, 87, 0, 4);
ReplaceAndPause();
['@7AB9'];
PartySetPosToFirstRole();
RideNpcToPos(36, 79, 1, 4);
PartyWalkToBlock(37, 79, 0, 4);
ReplaceAndPause();
PartySetPosToFirstRole();
RideNpcToPos(29, 86, 1, 4);
PartyWalkToBlock(29, 87, 0, 4);
ReplaceAndPauseWithNop("@7AB9", 0);

['Event_00214_00020_Trigger'];
PartySetPosToFirstRole();
RideNpcToPos(33, 75, 1, 4);
PartyWalkToBlock(33, 75, 0, 4);
ReplaceAndPause();
PartySetPosToFirstRole();
RideNpcToPos(36, 78, 1, 4);
PartyWalkToBlock(37, 79, 0, 4);
ReplaceAndPauseWithNop("Event_00214_00020_Trigger", 0);

['Event_00214_00021_Trigger'];
PartySetPosToFirstRole();
RideNpcToPos(33, 79, 0, 4);
PartyWalkToBlock(33, 79, 1, 4);
ReplaceAndPause();
PartySetPosToFirstRole();
RideNpcToPos(31, 77, 1, 4);
PartyWalkToBlock(31, 77, 0, 4);
ReplaceAndPauseWithNop("Event_00214_00021_Trigger", 0);

['Event_00214_00022_Trigger'];
PartySetPosToFirstRole();
RideNpcToPos(31, 82, 0, 4);
PartyWalkToBlock(30, 82, 1, 4);
ReplaceAndPause();
PartySetPosToFirstRole();
RideNpcToPos(33, 80, 0, 4);
PartyWalkToBlock(33, 79, 1, 4);
ReplaceAndPauseWithNop("Event_00214_00022_Trigger", 0);

['Event_00214_00023_Trigger'];
PartySetPosToFirstRole();
RideNpcToPos(27, 81, 1, 4);
PartyWalkToBlock(27, 81, 0, 4);
ReplaceAndPause();
PartySetPosToFirstRole();
RideNpcToPos(29, 83, 0, 4);
PartyWalkToBlock(29, 83, 1, 4);
ReplaceAndPauseWithNop("Event_00214_00023_Trigger", 0);

['Event_00214_00024_Trigger'];
PartySetPosToFirstRole();
RideNpcToPos(23, 97, 1, 4);
PartyWalkToBlock(24, 98, 0, 4);
ReplaceAndPause();
PartySetPosToFirstRole();
RideNpcToPos(21, 95, 1, 4);
PartyWalkToBlock(21, 95, 0, 4);
ReplaceAndPauseWithNop("Event_00214_00024_Trigger", 0);

['Event_00214_00025_Trigger'];
PartySetPosToFirstRole();
RideNpcToPos(30, 92, 0, 4);
PartyWalkToBlock(30, 91, 1, 4);
ReplaceAndPause();
PartySetPosToFirstRole();
RideNpcToPos(24, 97, 1, 4);
PartyWalkToBlock(24, 98, 0, 4);
ReplaceAndPauseWithNop("Event_00214_00025_Trigger", 0);

['Event_00214_00026_Trigger'];
PartySetPosToFirstRole();
RideNpcToPos(36, 87, 0, 4);
PartyWalkToBlock(36, 86, 1, 4);
ReplaceAndPause();
PartySetPosToFirstRole();
RideNpcToPos(32, 90, 1, 4);
PartyWalkToBlock(32, 90, 0, 4);
ReplaceAndPauseWithNop("Event_00214_00026_Trigger", 0);

['Event_00214_00027_Trigger'];
PartySetPosToFirstRole();
RideNpcToPos(29, 79, 1, 4);
PartyWalkToBlock(29, 79, 0, 4);
ReplaceAndPause();
PartySetPosToFirstRole();
RideNpcToPos(36, 86, 0, 4);
PartyWalkToBlock(36, 86, 1, 4);
ReplaceAndPauseWithNop("Event_00214_00027_Trigger", 0);

['Event_00214_00028_Trigger'];
PartySetPosToFirstRole();
RideNpcToPos(40, 83, 1, 4);
PartyWalkToBlock(41, 83, 0, 4);
ReplaceAndPause();
PartySetPosToFirstRole();
RideNpcToPos(37, 86, 1, 4);
PartyWalkToBlock(37, 87, 0, 4);
ReplaceAndPauseWithNop("Event_00214_00028_Trigger", 0);

['Event_00214_00029_Trigger'];
PartySetPosToFirstRole();
EventSetState(3612, 0, 0);
RideNpcToPos(39, 83, 0, 4);
RideNpcToPos(41, 85, 0, 4);
RideNpcToPos(43, 83, 0, 4);
RideNpcToPos(42, 82, 0, 4);
PartyWalkToBlock(41, 82, 1, 4);
EventSetState(3613, 2, 0);
ReplaceAndPause();
['@7B1C'];
PartySetPosToFirstRole();
RideNpcToPos(34, 74, 0, 4);
PartyWalkToBlock(34, 73, 1, 4);
ReplaceAndPause();
PartySetPosToFirstRole();
RideNpcToPos(42, 82, 0, 4);
PartyWalkToBlock(41, 82, 1, 4);
ReplaceAndPauseWithNop("@7B1C", 0);

['Event_00214_00030_Trigger'];
HeroAddMagic(30001, 5);
EventSetState(-1, 0, 0);
PlaySound(263);
SetDlgBox(0);
//获得召唤术 风神

['Event_00214_00031_Trigger'];
HeroAddMagic(30002, 1);
EventSetState(-1, 0, 0);
PlaySound(263);
SetDlgBox(0);
//获得召唤术 雷神

['Event_00214_00032_Trigger'];
HeroAddMagic(30003, 5);
EventSetState(-1, 0, 0);
PlaySound(263);
SetDlgBox(0);
//获得召唤术 雪妖

['Event_00214_00033_Trigger'];
EventSetState(-1, 0, 0);
PlaySound(263);
SetDlgBox(0);
//获得召唤术 火神
JumpIfHeroInParty(2, "@7B3E");
HeroAddMagic(30009, 5);

['Event_00214_00034_Trigger'];
HeroAddMagic(30004, 1);
EventSetState(-1, 0, 0);
PlaySound(263);
SetDlgBox(0);
//获得召唤术 山神

['Event_00214_00035_Trigger'];
Call("@8E99", 0, 0);
SetDlgBox(0);
//获得玄冥宝刀
AddItem(127, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

['Event_00214_00036_Trigger'];
Call("@8E99", 0, 0);
SetDlgBox(0);
//获得冥蛇杖
AddItem(134, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

['Event_00214_00037_Trigger'];
Call("@8E99", 0, 0);
SetDlgBox(0);
//获得无尘剑
AddItem(131, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

Call("@8E99", 0, 0);
SetDlgBox(0);
//获得头巾
AddItem(136, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

Call("@8E99", 0, 0);
SetDlgBox(0);
//获得青丝巾
AddItem(137, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

Call("@8E99", 0, 0);
SetDlgBox(0);
//获得发饰
AddItem(138, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

Call("@8E99", 0, 0);
SetDlgBox(0);
//获得皮帽
AddItem(141, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

['Event_00214_00039_Trigger'];
Call("@8E99", 0, 0);
SetDlgBox(0);
//获得魅影神靴
AddItem(187, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

Call("@8E99", 0, 0);
SetDlgBox(0);
//获得护腕
AddItem(189, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

['Event_00214_00038_Trigger'];
Call("@8E99", 0, 0);
SetDlgBox(0);
//获得金罡珠
AddItem(201, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

