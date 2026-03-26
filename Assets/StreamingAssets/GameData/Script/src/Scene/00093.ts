['Event_00093_00001_Trigger'];
Call("@8E0D", 0, 0);
SceneEnter(93);
PartySetPos(17, 106, 0);
FadeOut(0);

['Event_00093_00002_Trigger'];
Call("Event_00205_00005_Trigger", 0, 0);
SceneEnter(93);
PartySetPos(46, 74, 1);
FadeOut(0);

['Event_00093_00003_Trigger'];
EventSetState(-1, 0, 0);
VideoUpdate(0, false);
//找到紫金葫芦
EventSetState(1594, 1, 0);
EventSetState(1595, 1, 0);
EventSetState(1596, 1, 0);
EventSetState(1597, 1, 0);
EventSetState(1598, 1, 0);
EventSetState(1599, 1, 0);
SceneSetScript(85, "@38D9", "");
SceneEnter(85);
FadeOut(0);

['Event_00093_00004_Trigger'];
HeroSetSprite(0, Sprite.躺李逍遥, true);
RoleSetDirFrame(0, 1, 0);
RoleMoveOneStep(16, 8, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(0, 8, 0);
RoleSetDirFrame(0, 1, 0);
VideoUpdate(0, false);
RoleMoveOneStep(0, 16, 0);
RoleSetDirFrame(0, 1, 0);
VideoUpdate(0, false);
RoleMoveOneStep(0, 24, 0);
RoleSetDirFrame(0, 2, 0);
VideoUpdate(0, false);
PlaySound(93);
WaitEventAutoScriptRun(5, false, false);
HeroSetSprite(0, Sprite.李逍遥, true);
RoleSetDirFrame(0, 0, 0);

['Event_00093_00005_Trigger'];
SetDlgUpper(42, 0, false);
//姬三娘：
//呦～这么快就追来啦？
SetDlgLower(1, 0, false);
//李逍遥：
//看你还逃到哪去！
VideoUpdate(0, false);
NpcSetDirFrame(0, 0);
PlaySound(201);
VideoUpdate(0, false);
NpcSetDirFrame(1, 0);
VideoUpdate(0, false);
NpcSetDirFrame(2, 0);
VideoUpdate(0, false);
EventSetState(-1, 0, 0);
EventSetState(1694, 2, 0);
WaitEventAutoScriptRun(4, false, false);
SetDlgLower(41, 0, false);
//女飞贼：
//小哥哥～要奴家杀了你这
//英俊小生，真有点舍不得呢
SetBattleMusic(Music.战意昂);
BattleStart(30, "@A073", "");
BattleEnd();
EventSetState(1694, 0, 0);
EventSetState(1695, 0, 0);
EventSetState(1696, 0, 0);
EventSetTriggerScript(85, 5, "Event_00085_00005_Trigger");
SceneSetScript(82, "@3973", "");
SceneEnter(82);

['Event_00093_00014_Trigger'];
Call("@8E99", 0, 0);
SetDlgBox(0);
//得到五把袖里剑
AddItem(94, 5);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

['Scene_00093_Enter'];
MusicPlay(Music.险境_1, false, false);
VideoUpdate(0, false);
SetDlgUpper(2, 0, false);
//李逍遥：
//这井底之下居然别有洞天！
VideoUpdate(0, false);
SetDlgLower(21, 0, false);
//林月如：
//这里面一定有什么名堂
//我们进去探它一探
ReplaceAndPause();
MusicPlay(Music.险境_1, false, false);
Dos_SetBattlefield(FbpDos.南绍_王座);

['Event_00093_00015_Trigger'];
Call("@8E99", 0, 0);
SetDlgBox(0);
//获得５０００文钱
CashModify(5000, "");
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

Call("@8E99", 0, 0);
SetDlgBox(0);
//获得６０００文钱
CashModify(6000, "");
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

Call("@8E99", 0, 0);
SetDlgBox(0);
//获得７０００文钱
CashModify(7000, "");
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

Call("@8E99", 0, 0);
SetDlgBox(0);
//获得８０００文钱
CashModify(8000, "");
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

Call("@8E99", 0, 0);
SetDlgBox(0);
//获得９０００文钱
CashModify(9000, "");
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

['Event_00093_00010_Trigger'];
Call("@8E99", 0, 0);
SetDlgBox(0);
//获得霓虹羽衣
AddItem(169, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

['Event_00093_00009_Trigger'];
Call("@8E99", 0, 0);
SetDlgBox(0);
//获得菩提袈裟
AddItem(170, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

Call("@8E99", 0, 0);
SetDlgBox(0);
//获得虎纹披风
AddItem(171, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

['Event_00093_00019_Trigger'];
Call("@8E99", 0, 0);
SetDlgBox(0);
//获得疾风靴
AddItem(182, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

Call("@8E99", 0, 0);
SetDlgBox(0);
//获得莲花靴
AddItem(183, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

Call("@8E99", 0, 0);
SetDlgBox(0);
//获得虎皮靴
AddItem(184, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

Call("@8E99", 0, 0);
SetDlgBox(0);
//获得龙鳞靴
AddItem(185, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

['Event_00093_00016_Trigger'];
Call("@8E99", 0, 0);
SetDlgBox(0);
//获得紫菁玉蓉膏
AddItem(43, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

Call("@8E99", 0, 0);
SetDlgBox(0);
//获得鼠儿果
AddItem(44, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

['Event_00093_00017_Trigger'];
Call("@8E99", 0, 0);
SetDlgBox(0);
//获得天仙玉露
AddItem(49, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

Call("@8E99", 0, 0);
SetDlgBox(0);
//获得茶叶蛋
AddItem(18, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

['Event_00093_00013_Trigger'];
Call("@8E99", 0, 0);
SetDlgBox(0);
//获得无影神针
AddItem(101, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

Call("@8E99", 0, 0);
SetDlgBox(0);
//获得雷火珠
AddItem(96, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

