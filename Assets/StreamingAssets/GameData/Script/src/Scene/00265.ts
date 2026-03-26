['Event_00265_00001_Trigger'];
SceneEnter(262);
PartySetPos(35, 59, 1);
FadeOut(0);

['Event_00265_00022_Trigger'];
EventSetDirFrame(265, 22, 0, 1);
EventSetState(4628, 1, 0);
EventSetState(4629, 0, 0);
EventSetTriggerMode(265, 22, false, 0);

['Event_00265_00024_Trigger'];
EventSetDirFrame(265, 24, 0, 1);
EventSetState(4630, 1, 0);
EventSetState(4631, 0, 0);
EventSetTriggerMode(265, 24, false, 0);

['Event_00265_00026_Trigger'];
EventSetDirFrame(265, 26, 0, 1);
EventSetState(4632, 1, 0);
EventSetState(4633, 0, 0);
EventSetTriggerMode(265, 26, false, 0);

['Event_00265_00039_Trigger'];
Call("@8E99", 0, 0);
SetDlgBox(0);
//获得步云靴
AddItem(186, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

