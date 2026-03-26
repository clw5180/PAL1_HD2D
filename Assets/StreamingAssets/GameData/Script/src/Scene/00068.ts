['Scene_00068_Teleport'];
SceneEnter(70);
PartySetPos(42, 53, 0);
FadeOut(0);

['Event_00068_00001_Trigger'];
SceneEnter(77);
PartySetPos(15, 33, 0);
FadeOut(0);

['Event_00068_00004_Trigger'];
EventSetTriggerMode(-1, -1, false, 0);
MusicStop(0);
SetDlgLower(51, 0, false);
//韩梦慈：
//小心！　有埋伏
PlaySound(113);
EventSetState(1341, 0, 0);
EventSetState(1342, 0, 0);
EventSetState(1344, 2, 0);
EventSetState(1345, 2, 0);
EventSetState(1346, 2, 0);
RoleSetDirFrame(1, 0, 1);
RoleSetDirFrame(1, 0, 2);
WaitEventAutoScriptRun(2, false, false);
RoleSetDirFrame(1, 0, 0);
WaitEventAutoScriptRun(6, false, false);
PartyWalkToBlock(40, 63, 1, 8);
PartyWalkToBlock(38, 61, 1, 8);
WaitEventAutoScriptRun(7, false, false);
Dos_SetBattlefield(FbpDos.南绍_王座);
SetBattleMusic(Music.战意昂);
BattleStart(34, "", "");
MusicPlay(Music.身陷囹圄, false, false);
BattleEnd();
HeroSetSprite(0, Sprite.昏倒灵儿, false);
PartySetRole(1, 0, 0);
RoleSetDirFrame(0, 0, 0);
EventSetState(1347, 1, 0);
EventSetState(1348, 1, 0);
WaitEventAutoScriptRun(10, false, false);
RoleSetDirFrame(0, 1, 0);
WaitEventAutoScriptRun(6, false, false);
HeroSetSprite(0, Sprite.赵灵儿, true);
RoleSetDirFrame(1, 0, 0);
VideoUpdate(0, false);
SetDlgUpper(60, 0, false);
//石长老：
//殿下～老臣得罪了
RoleSetDirFrame(0, 0, 0);
VideoUpdate(0, false);
RoleSetDirFrame(3, 0, 0);
VideoUpdate(0, false);
ViewportMove(16, 8, 8);
WaitEventAutoScriptRun(4, false, false);
SetDlgUpper(18, 0, false);
//赵灵儿：
//逍遥哥哥！　林姐姐！
ViewportMove(-16, -8, 8);
SetDlgUpper(60, 0, false);
//石长老：
//这位姓李的年轻人
//三番两次阻挠我们的任务
//按理．．是不能留他活命
RoleSetDirFrame(1, 0, 0);
VideoUpdate(0, false);
SetDlgLower(16, 0, false);
//赵灵儿：
//如果你们敢伤害他
//我．．我就立刻自尽！
VideoUpdate(0, false);
SetDlgUpper(60, 0, false);
//石长老：
//这万万不可～大王可是一直
//盼着能见到失散十年的亲生
//女儿最后一面啊
VideoUpdate(0, false);
SetDlgLower(17, 0, false);
//赵灵儿：
//最后一面．．？
VideoUpdate(0, false);
SetDlgUpper(60, 0, false);
//石长老：
//巫王陛下得了重病
//已经没有多少日子了
VideoRestore();
//大王说：不论当前什么误会
//也不论当初巫后娘娘是为何
//而带您离开苗疆的
VideoRestore();
//毕竟～骨肉亲情．．希望您
//念在父女情份上回到他身边
VideoUpdate(0, false);
SetDlgLower(18, 0, false);
//赵灵儿：
//．．我要先找到我娘！
VideoUpdate(0, false);
SetDlgUpper(60, 0, false);
//石长老：
//这．．．巫后娘娘．．
//已失踪十年之久，恐怕早已
//不在人世了，何况．．
SetDlgLower(18, 0, false);
//赵灵儿：
//何况什么？　说啊！
VideoUpdate(0, false);
SetDlgUpper(60, 0, false);
//石长老：
//容老臣直言～殿下若知道
//巫后娘娘的．．身份，应该
//就能体会当初大王为何会那
//样对待娘娘了．．
VideoUpdate(0, false);
SetDlgLower(17, 0, false);
//赵灵儿：
//如果我也和娘一样呢？
//你们是不是也会像对我娘
//那样来对待我？
VideoUpdate(0, false);
SetDlgUpper(60, 0, false);
//石长老：
//自然不同，您是大王唯一的亲
//骨肉，也是我黑苗族中唯一有
//资格继承王位的身份的人
VideoRestore();
//无论发生什么事，老臣也要把
//您带回大王身边。同样的～无
//论是谁来阻挠，老臣绝对不惜
//一切代价排除到底！
VideoUpdate(0, false);
SetDlgLower(15, 0, false);
//赵灵儿：
//．．．．．．．
VideoRestore();
//你们要答应我．．．
//以后决不许对他们出手
VideoUpdate(0, false);
SetDlgUpper(60, 0, false);
//石长老：
//老臣愿以人格担保
RoleSetDirFrame(0, 0, 0);
VideoUpdate(0, false);
SetDlgLower(11, 0, false);
//赵灵儿：
//好．．．放了他们
//我就跟你们走．．
VideoUpdate(0, false);
SetDlgUpper(60, 0, false);
//石长老：
//公主殿下睿智！
RoleUninstallEquip(1, UninstallEquip.Ornament);
RemoveItem(214, 0, "");
VideoUpdate(0, false);
SetDlgLower(86, 0, false);
//小石头：
//主人！　等等我啊～
VideoUpdate(0, false);
SetDlgCenter(0, false);
//玉佛珠随赵灵儿离去
SceneEnter(78);
FadeOut(2);

['Event_00068_00006_Auto'];
NpcMoveToBlock(33, 58, 1, 8);
NpcMoveToBlock(34, 59, 1, 8);

['Event_00068_00007_Auto'];
NpcMoveToBlock(35, 56, 1, 8);
NpcMoveToBlock(37, 58, 0, 8);

['Event_00068_00005_Auto'];
NpcMoveToBlock(35, 58, 0, 8);
NpcMoveToBlock(36, 59, 1, 8);
WaitEventAutoScriptRun(2, false, false);
NpcSetFrame(12);

['Event_00068_00002_Trigger'];
SetDlgBox(0);
//推不动石门

['Scene_00068_Enter'];
MusicPlay(Music.鬼阴山, false, false);
SetBattleMusic(Music.心急如焚);
Dos_SetBattlefield(FbpDos.南绍_王座);

