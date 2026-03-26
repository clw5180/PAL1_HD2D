['Event_00037_00001_Trigger'];
SceneEnter(36);
PartySetPos(16, 52, 1);
FadeOut(0);

['Event_00037_00002_Trigger'];
SetDlgLower(2, 0, false);
//李逍遥：
//灵儿，你怎么了？
//看你脸色似乎不太好呢！
VideoUpdate(0, false);
SetDlgUpper(15, 0, false);
//赵灵儿：
//我．．胸口很闷，头有点疼
//不过．．不碍事的。
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//哎呀～病了可就不好
//早点睡．．别着凉了
VideoUpdate(0, false);
SetDlgUpper(17, 0, false);
//赵灵儿：
//逍遥哥哥～你还记不记得姥姥
//死的时候对你说的．．．
SetDlgLower(1, 0, false);
//李逍遥：
//我怎么会忘呢！你放心．．
//我会照顾你，直到找到你娘为
//止，我答应过的事，绝不反悔
VideoUpdate(0, false);
SetDlgUpper(17, 0, false);
//赵灵儿：
//可是．．．．
SetDlgLower(1, 0, false);
//李逍遥：
//嗯～　你想说什么？
VideoUpdate(0, false);
SetDlgUpper(15, 0, false);
//赵灵儿：
//如果．．我．．是．．
SetDlgLower(6, 0, false);
//李逍遥：
//嗯？？　别胡思乱想了
//傻丫头～不会有事的．．
EventSetState(604, 2, 0);
EventSetState(591, 2, 0);
EventSetState(593, 2, 0);
EventSetState(594, 2, 0);
EventSetTriggerScript(36, 10, "@23A4");
ReplaceAndPause();
SetDlgLower(6, 0, false);
//李逍遥：
//早点睡吧，明天一早我再
//陪你去街上玩

['Event_00037_00004_Trigger'];
//夏竹：
//姑爷您要找小姐吗？小姐不在
//房里，她在后花园赏月

['Event_00037_00003_Trigger'];
EventSetState(598, 0, 0);
EventSetState(599, 0, 0);
EventSetState(600, 0, 0);
EventSetState(574, 0, 0);
EventSetState(576, 0, 0);
EventSetState(578, 0, 0);
EventSetState(579, 0, 0);
EventSetState(582, 0, 0);
EventSetTriggerScript(36, 8, "@1DFD");
PartySetRole(1, 3, 0);
Dos_SetBattlefield(FbpDos.隐龙窟);
SetBattleMusic(Music.御剑伏魔_2);
BattleStart(25, "", "");
MusicStop(1);
SceneSetScript(38, "@2299", "");
SceneEnter(38);

['Scene_00037_Enter'];
SetPaletteTime(0);

['Event_00037_00008_Trigger'];
Call("@8E99", 0, 0);
SetDlgBox(0);
//获得绣花鞋
AddItem(178, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

['Event_00037_00010_Trigger'];
PlaySound(78);
SetDlgBox(0);
//发现１５文钱
CashModify(15, "");
EventSetState(-1, 0, 0);

['Event_00037_00011_Trigger'];
PlaySound(78);
SetDlgBox(0);
//发现银针
AddItem(195, 0);
EventSetState(-1, 0, 0);

['Event_00037_00009_Trigger'];
PlaySound(78);
SetDlgBox(0);
//发现玉镯
AddItem(193, 0);
EventSetState(-1, 0, 0);

