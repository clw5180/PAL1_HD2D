['Scene_00149_Enter'];
MusicPlay(Music.灵怨, false, false);
SetBattleMusic(Music.势如破竹);

['Event_00149_00001_Trigger'];
SceneEnter(155);
PartySetPos(45, 86, 1);
FadeOut(0);

['Event_00149_00008_Auto'];
NpcMoveToBlockMutexLock(12, 38, 0, 4);
ReplaceAndPause();
NpcSetDirFrame(1, 0);
WaitEventAutoScriptRun(3, false, false);
NpcMoveToBlockMutexLock(11, 37, 1, 4);

['Event_00149_00003_Trigger'];
SetDlgCenter(0, false);
//一扇厚重的铜门．．

['Event_00149_00026_Trigger'];
Call("@8E99", 0, 0);
SetDlgBox(0);
//获得天师帽
AddItem(143, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

['Event_00149_00027_Trigger'];
Call("@8E99", 0, 0);
SetDlgBox(0);
//获得舍利子
AddItem(12, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

['Event_00149_00028_Trigger'];
Call("@8E99", 0, 0);
SetDlgBox(0);
//获得灵心符
AddItem(5, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

['Event_00149_00025_Trigger'];
Call("@8E99", 0, 0);
SetDlgBox(0);
//获得九节菖蒲
AddItem(29, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

['Event_00149_00010_Trigger'];
BattleStart(44, "@A073", "@A071");
GotoWithNop("@A0A7", 0);

