['Event_00017_00001_Trigger'];
SceneEnter(19);
PartySetPos(57, 32, 0);
FadeOut(0);

['Event_00017_00002_Trigger'];
SceneEnter(20);
PartySetPos(9, 68, 0);
FadeOut(0);

['Scene_00017_Teleport'];
SceneEnter(17);
PartySetPos(56, 66, 1);
FadeOut(0);

['Event_00017_00007_Trigger'];
SetDlgBox(0);
//一股力量将李逍遥挡了回来
RoleMoveOneStep(-32, 16, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(-12, 6, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(-4, 2, 0);
WaitEventAutoScriptRun(0, false, false);
SetDlgLower(0, 0, false);
//李逍遥：
//　？　？　？

['Event_00017_00008_Auto'];
NpcSetFrame(0);
ReplaceAndPause();
NpcSetFrame(1);
ReplaceAndPause();
NpcSetFrame(2);
ReplaceAndPause();
NpcSetFrame(3);
ReplaceAndPause();
NpcSetFrame(4);
ReplaceAndPause();
NpcSetFrame(5);
ReplaceAndPause();
NpcSetFrame(6);
ReplaceAndPause();
NpcSetFrame(7);
ReplaceAndPauseWithNop("Event_00017_00008_Auto", 0);

['Scene_00017_Enter'];
MusicPlay(Music.云谷鹤峰_3, false, false);

['Event_00017_00003_Trigger'];
SetDlgUpper(10, 0, false);
//咦？　怎么会有女孩子的衣裳
MusicStop(0);
VideoUpdate(0, false);
SetDlgUpper(6, 0, false);
//难道．．．．
MusicPlay(Music.窥春, true, false);
ViewportMove(4, 2, 48);
WaitEventAutoScriptRun(10, false, false);
FadeOut(0);
HeroSetSprite(0, Sprite.李逍遥惊艳, true);
RoleSetDirFrame(0, 0, 0);
ViewportMove(0, 0, 0);
WaitEventAutoScriptRun(10, false, false);
//这种地方，如此貌美的姑娘
//．．莫非真的让我遇上了仙女
RoleSetDirFrame(0, 1, 0);
VideoUpdate(0, false);
//嘿．．　有了！
MusicPlay(Music.戏仙, false, false);
FadeOut(0);
ViewportMove(192, 96, 0);
EventSetDirFrame(17, 8, 0, 0);
EventSetAutoScript(17, 8, "Event_00017_00008_Auto");
WaitEventAutoScriptRun(16, false, false);
EventSetAutoScript(17, 8, "");
VideoUpdate(0, false);
EventSetDirFrame(17, 8, 0, 8);
VideoUpdate(0, false);
SetDlgCenter(0, false);
//嗯～？
FadeOut(0);
EventSetState(-1, 0, 0);
EventModifyPos(17, 8, -128, -64);
EventSetDirFrame(17, 8, 0, 10);
RoleSetDirFrame(0, 4, 0);
ViewportMove(0, 0, 0);
WaitEventAutoScriptRun(10, false, false);
EventSetDirFrame(17, 8, 0, 9);
PlaySound(194);
WaitEventAutoScriptRun(8, false, false);
EventSetDirFrame(17, 8, 0, 10);
WaitEventAutoScriptRun(2, false, false);
SetDlgLower(0, 0, false);
//少女：
//咦．．我的衣服呢？
WaitEventAutoScriptRun(0, false, false);
RoleSetDirFrame(0, 2, 0);
WaitEventAutoScriptRun(2, false, false);
RoleSetDirFrame(0, 3, 0);
WaitEventAutoScriptRun(2, false, false);
RoleSetDirFrame(0, 2, 0);
WaitEventAutoScriptRun(2, false, false);
RoleSetDirFrame(0, 3, 0);
VideoUpdate(0, false);
SetDlgUpper(1, 0, false);
//你在找这东西吗？
EventSetDirFrame(17, 8, 0, 11);
PlaySound(275);
WaitEventAutoScriptRun(3, false, false);
EventSetDirFrame(17, 8, 0, 12);
WaitEventAutoScriptRun(2, false, false);
EventSetDirFrame(17, 8, 0, 13);
WaitEventAutoScriptRun(2, false, false);
EventSetDirFrame(17, 8, 0, 14);
WaitEventAutoScriptRun(2, false, false);
EventSetDirFrame(17, 8, 0, 15);
WaitEventAutoScriptRun(3, false, false);
SetDlgLower(0, 0, false);
//少女：
//．．你．．你是谁！？
EventSetDirFrame(17, 8, 0, 16);
WaitEventAutoScriptRun(0, false, false);
RoleSetDirFrame(0, 2, 0);
WaitEventAutoScriptRun(2, false, false);
RoleSetDirFrame(0, 3, 0);
WaitEventAutoScriptRun(2, false, false);
RoleSetDirFrame(0, 2, 0);
WaitEventAutoScriptRun(2, false, false);
RoleSetDirFrame(0, 3, 0);
WaitEventAutoScriptRun(0, false, false);
SetDlgUpper(9, 0, false);
//我是谁你不用管
//只要仙女姐姐赐给我一颗
//仙丹，我就把衣裳还给你。
EventSetDirFrame(17, 8, 0, 15);
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//少女：
//仙丹．．？！
//那是我师父的遗物
//不可以随便给别人
VideoUpdate(0, false);
SetDlgUpper(9, 0, false);
//那～你就要光着身子回家啰！
EventSetDirFrame(17, 8, 0, 16);
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//少女：
//好．．好嘛～　我答应你
//可是．．你先把衣服还我！
HeroSetSprite(0, Sprite.李逍遥, true);
RoleSetDirFrame(3, 0, 0);
VideoUpdate(0, false);
SetDlgUpper(3, 0, false);
//真的！？
VideoUpdate(0, false);
EventSetDirFrame(17, 8, 0, 15);
VideoUpdate(0, false);
PlaySound(89);
SetDlgLower(0, 0, false);
//少女：
//啊～！！你不要看！
RoleSetDirFrame(0, 0, 0);
VideoUpdate(0, false);
RoleSetDirFrame(1, 0, 0);
VideoUpdate(0, false);
SetDlgUpper(10, 0, false);
//是、我没看见！
EventSetDirFrame(17, 8, 0, 16);
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//少女：
//你．．你把我的衣服放着
//走到五丈．．不！十丈外
//等我穿好衣服才可以回来
VideoRestore();
//不许回头看喔！
VideoUpdate(0, false);
SetDlgUpper(1, 0, false);
//是的．．我走。你答应过的喔
//真的要给我仙丹
EventSetState(-1, 1, 0);
VideoUpdate(0, false);
PartySetPos(34, 89, 0);
PartyWalkToBlock(21, 76, 0, 8);
WaitEventAutoScriptRun(10, false, false);
SetDlgUpper(0, 0, false);
//仙女姐姐！我可以回头了吗？
VideoRestore();
//仙女．．．．？
VideoUpdate(0, false);
RoleSetDirFrame(0, 0, 0);
VideoUpdate(0, false);
RoleSetDirFrame(3, 0, 0);
VideoUpdate(0, false);
EventSetState(218, 0, 0);
EventSetState(-1, 0, 0);
EventSetState(214, 1, 0);

['Event_00017_00004_Trigger'];
EventSetState(-1, 0, 0);
RoleSetDirFrame(0, 0, 0);
WaitEventAutoScriptRun(6, false, false);
RoleSetDirFrame(3, 0, 0);
WaitEventAutoScriptRun(0, false, false);
RoleSetDirFrame(2, 0, 0);
WaitEventAutoScriptRun(8, false, false);
RoleSetDirFrame(3, 0, 0);
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//咦？　．．人呢？
MusicStop(1);
EventSetState(219, 1, 0);
EventSetAutoScript(17, 9, "Event_00017_00009_Auto");
PlaySound(107);
WaitEventAutoScriptRun(0, false, false);
RoleSetDirFrame(3, 0, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(-16, -8, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(-16, -8, 0);
WaitEventAutoScriptRun(10, false, false);
RoleSetDirFrame(2, 0, 0);
WaitEventAutoScriptRun(4, false, false);
RoleSetDirFrame(3, 0, 0);
WaitEventAutoScriptRun(5, false, false);
RoleSetDirFrame(0, 0, 0);
WaitEventAutoScriptRun(0, false, false);
SetDlgLower(0, 0, false);
//怎么～突然打起雷了？！~55
EventModifyPos(17, 9, -128, 16);
EventSetState(219, 1, 0);
EventSetAutoScript(17, 9, "Event_00017_00009_Auto");
PlaySound(107);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(16, -8, 0);
WaitEventAutoScriptRun(6, false, false);
RoleSetDirFrame(3, 0, 0);
WaitEventAutoScriptRun(0, false, false);
PartyWalkToBlock(35, 84, 1, 4);
EventSetPos(17, 9, 1152, 1344);
EventSetState(219, 1, 0);
EventSetAutoScript(17, 9, "Event_00017_00009_Auto");
PlaySound(107);
WaitEventAutoScriptRun(2, false, false);
RoleMoveOneStep(-16, 8, 0);
WaitEventAutoScriptRun(7, false, false);
PartyWalkToBlock(34, 86, 0, 4);
PartyWalkToBlock(33, 85, 0, 4);
EventSetPos(17, 9, 1072, 1378);
EventSetState(219, 1, 0);
EventSetAutoScript(17, 9, "Event_00017_00009_Auto");
PlaySound(107);
PartyWalkToBlock(32, 84, 0, 8);
EventSetPos(17, 9, 1030, 1350);
EventSetState(219, 1, 0);
EventSetAutoScript(17, 9, "Event_00017_00009_Auto");
PlaySound(107);
PartyWalkToBlock(31, 83, 0, 8);
PartyWalkToBlock(33, 81, 0, 8);
EventSetPos(17, 9, 1088, 1280);
EventSetState(219, 1, 0);
EventSetAutoScript(17, 9, "Event_00017_00009_Auto");
PlaySound(107);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(-8, 4, 0);
WaitEventAutoScriptRun(3, false, false);
RoleMoveOneStep(8, -4, 0);
HeroSetSprite(0, Sprite.躺李逍遥, true);
RoleSetDirFrame(0, 9, 0);
WaitEventAutoScriptRun(5, false, false);
SetDlgLower(0, 0, false);
//哇．．这！？~30
EventSetPos(17, 9, 1072, 1270);
EventSetState(219, 1, 0);
EventSetAutoScript(17, 9, "Event_00017_00009_Auto");
PlaySound(107);
WaitEventAutoScriptRun(2, false, false);
RoleMoveOneStep(0, -2, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(0, 2, 0);
RoleSetDirFrame(0, 0, 0);
WaitEventAutoScriptRun(3, false, false);
SetDlgUpper(0, 0, false);
//雷公饶命啊！下次不敢了！~40
WaitEventAutoScriptRun(6, false, false);
EventSetState(220, 2, 0);
EventSetState(221, 1, 0);
PlaySound(170);
WaitEventAutoScriptRun(32, false, false);
SetDlgUpper(16, 0, false);
//少女：
//你．．你好不要脸！
//怎么可以．．可以．．。~40
VideoRestore();
//你到底是谁？你为何来此？
HeroSetSprite(0, Sprite.李逍遥, true);
RoleSetDirFrame(1, 0, 0);
VideoUpdate(0, false);
SetDlgLower(2, 0, false);
//李逍遥：
//哗．．你果然是仙女！
VideoUpdate(0, false);
EventSetPos(17, 9, 1032, 1288);
EventSetState(219, 1, 0);
EventSetAutoScript(17, 9, "Event_00017_00009_Auto");
PlaySound(107);
WaitEventAutoScriptRun(4, false, false);
HeroSetSprite(0, Sprite.躺李逍遥, true);
RoleSetDirFrame(0, 7, 0);
WaitEventAutoScriptRun(4, false, false);
SetDlgLower(0, 0, false);
//　哇～仙女饶命！
VideoUpdate(0, false);
SetDlgUpper(18, 0, false);
//少女：
//从实招来！　不然．．
//不然．．我劈死你这淫贼！
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//李逍遥：
//不不不！　杀生不好
//杀了人会下地狱。仙女姐姐
//最温柔、最可爱、最心地善良
VideoRestore();
//要不是小的婶婶患了重病，命
//在旦夕，小的为了求仙丹灵药
//医治婶婶，才出此下策。
VideoRestore();
//只要仙女姐姐愿意大发慈悲
//救我婶婶一命，小的愿意一
//死，保全仙女姐姐的名节。
VideoUpdate(0, false);
SetDlgUpper(11, 0, false);
//少女：
//$06这么说．．．
//你是为了救你的亲人？
SetDlgLower(0, 0, false);
//李逍遥：
//$04是是．．小的听人说
//仙灵岛上大慈大悲的仙女，有
//起死回生的仙丹灵药，所以～
WaitEventAutoScriptRun(16, false, false);
EventSetAutoScript(17, 10, "@15D4");
WaitEventAutoScriptRun(16, false, false);
MusicPlay(Music.小桥流水, true, false);
SetDlgUpper(11, 0, false);
//少女：
//$06你．．婶婶对你很好啰？
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//李逍遥：
//$02犹如亲生爹娘！
SetDlgUpper(11, 0, false);
//少女：
//$06那．．你爹娘呢？
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//李逍遥：
//$05我．．我从小就没有爹娘
//是婶婶一手把我带大的．．
EventSetState(220, 0, 0);
EventSetState(222, 2, 0);
WaitEventAutoScriptRun(8, false, false);
SetDlgUpper(11, 0, false);
//少女：
//$07原来．．你和我一样．．
WaitEventAutoScriptRun(6, false, false);
EventSetDirFrame(17, 12, 2, 0);
WaitEventAutoScriptRun(5, false, false);
EventSetDirFrame(17, 12, 3, 0);
WaitEventAutoScriptRun(2, false, false);
SetDlgUpper(11, 0, false);
//少女：
//$02好吧．．．你跟我来～
EventSetAutoScript(17, 12, "@15DC");
WaitEventAutoScriptRun(12, false, false);
HeroSetSprite(0, Sprite.李逍遥, true);
RoleSetDirFrame(1, 0, 0);
WaitEventAutoScriptRun(8, false, false);
RoleSetDirFrame(2, 0, 0);
EventSetState(217, 0, 0);

['Event_00017_00009_Auto'];
NpcSetFrame(0);
NpcSetFrame(1);
NpcSetFrame(2);
NpcSetFrame(3);
EventSetState(-1, 0, 0);

['Event_00017_00011_Auto'];
EventModifyPos(17, 10, 8, 4);
GotoWithNop("Event_00017_00011_Auto", 10);
EventModifyPos(17, 10, 4, 2);
EventModifyPos(17, 10, 4, 2);
EventModifyPos(17, 10, 2, 1);
EventModifyPos(17, 10, 2, 1);
EventModifyPos(17, 10, 2, 1);
EventModifyPos(17, 10, 2, 1);
EventSetState(-1, 0, 0);

['Event_00017_00010_Auto'];
NpcSetFrame(0);
NpcSetFrame(1);
NpcSetFrame(2);
NpcSetFrame(3);
GotoWithNop("Event_00017_00010_Auto", 0);

['Event_00017_00015_Trigger'];
EventSetState(-1, 0, 0);
VideoUpdate(0, false);
PlaySound(78);
SetDlgBox(0);
//摘得鼠儿果
AddItem(44, 0);

['Event_00017_00013_Trigger'];
EventSetState(-1, 0, 0);
VideoUpdate(0, false);
PlaySound(78);
SetDlgBox(0);
//获得水果
AddItem(32, 0);

