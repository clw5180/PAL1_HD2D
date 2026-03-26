['Event_00042_00001_Trigger'];
SceneEnter(48);
PartySetPos(40, 83, 0);
FadeOut(0);

['Event_00042_00003_Trigger'];
SceneEnter(47);
PartySetPos(50, 98, 0);
FadeOut(0);

['Event_00042_00004_Trigger'];
SceneEnter(47);
PartySetPos(20, 64, 0);
FadeOut(0);

['Event_00042_00005_Trigger'];
SceneEnter(47);
PartySetPos(7, 71, 0);
FadeOut(0);

['Event_00042_00002_Trigger'];
EventSetTriggerMode(-1, -1, false, 2);
SetDlgUpper(57, 0, false);
//蛇妖男：
//你们闯进我的洞府来做什么？
VideoUpdate(0, false);
SetDlgLower(5, 0, false);
//李逍遥：
//你就是那只蛇妖！？
//把灵儿还我
VideoUpdate(0, false);
SetDlgUpper(57, 0, false);
//蛇妖男：
//谁是灵儿？
VideoUpdate(0, false);
SetDlgLower(5, 0, false);
//李逍遥：
//再不交出人就吃我一剑！
NpcSetFrame(1);
SetBattleMusic(Music.心急如焚);
Dos_SetBattlefield(FbpDos.巨蜘蛛网);
BattleStart(45, "@A073", "");
SetBattleMusic(Music.战意昂);
ReplaceAndPause();
SetDlgCenter(0, false);
//蛇妖已死．．

['Event_00042_00014_Trigger'];
Call("@8E99", 0, 0);
SetDlgBox(0);
//获得３００文钱
CashModify(300, "");
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

Call("@8E99", 0, 0);
SetDlgBox(0);
//获得４００文钱
CashModify(400, "");
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

Call("@8E99", 0, 0);
SetDlgBox(0);
//获得５００文钱
CashModify(500, "");
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

