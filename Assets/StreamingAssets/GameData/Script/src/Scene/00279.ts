['Event_00279_00001_Trigger'];
SceneEnter(282);
PartySetPos(52, 91, 0);
FadeOut(0);

['Event_00279_00002_Trigger'];
SceneEnter(282);
PartySetPos(28, 67, 1);
FadeOut(0);

['Event_00279_00003_Trigger'];
SceneEnter(285);
PartySetPos(16, 50, 1);
FadeOut(0);

['Event_00279_00006_Trigger'];
EventSetState(-1, 0, 0);
MusicStop(0);
PartyWalkToBlock(44, 69, 0, 8);
RoleSetDirFrame(2, 0, 0);
VideoUpdate(0, false);
SetDlgUpper(88, 0, false);
//赵灵儿：
//爹～　我是灵儿
MusicPlay(Music.今生情不悔, false, false);
VideoUpdate(0, false);
SetDlgLower(70, 0, false);
//巫王：
//青．．青妹．．是你回来
//回来．．向我索命吗！
VideoUpdate(0, false);
SetDlgUpper(88, 0, false);
//赵灵儿：
//爹～　我是灵儿
//是您的女儿啊！
EventSetState(4741, 0, 0);
EventSetState(4742, 1, 0);
WaitEventAutoScriptRun(12, false, false);
SetDlgLower(70, 0, false);
//巫王：
//真的是你．．吗？　灵儿．．
VideoRestore();
//没．．没错．．　就和当年
//的阿青一模一样！
VideoRestore();
//快．．快过来．．
//让父王．．看看你．．
HeroSetSprite(0, Sprite.空空如也, false);
PartySetRole(1, 0, 0);
RoleSetDirFrame(0, 0, 0);
EventSetStateSequence(279, 10, 12, 1);
EventSetState(4809, 0, 0);
WaitEventAutoScriptRun(12, false, false);
SetDlgLower(70, 0, false);
//巫王：
//女儿．．是爹无能，是爹逼死
//你母亲的，但是．．爹也遭到
//了报应．．
VideoRestore();
//王宫中所有人．．都弃父王
//而去了，爹自知．．爹没有
//多少日子可活了
VideoRestore();
//我只希望．．在我死前．．
//能够得到你的原谅．．
//女儿．．你能．．原谅爹吗？
VideoUpdate(0, false);
SetDlgUpper(88, 0, false);
//赵灵儿：
//无论您以前做了什么
//您还是我的父亲．．
VideoUpdate(0, false);
SetDlgLower(70, 0, false);
//巫王：
//太．．太好了．．
//灵儿～今后．．你要接下爹
//的王位，替爹挽救这个国家
EventSetState(4744, 1, 0);
EventSetState(4745, 1, 0);
EventSetState(4746, 1, 0);
WaitEventAutoScriptRun(24, false, false);
MusicPlay(Music.危机, false, false);
SetDlgLower(81, 0, false);
//拜月教主：
//大王～　我反对！
//怎可让一位妖女当我们的领袖
VideoUpdate(0, false);
EventSetDirFrame(279, 11, 0, 0);
VideoUpdate(0, false);
EventSetDirFrame(279, 10, 0, 0);
VideoUpdate(0, false);
EventSetDirFrame(279, 12, 0, 0);
SetDlgUpper(30, 0, false);
//阿奴：
//你这老贼！害死我好多族人
//灵儿姐姐登基后第一件事，
//就是将你斩首示众！
VideoUpdate(0, false);
SetDlgUpper(88, 0, false);
//赵灵儿：
//我无心于王位、也不想报仇
//念在你是元老重臣，只要你
//发誓不再使用邪魔兽，我可
//以饶你一命
VideoUpdate(0, false);
SetDlgLower(81, 0, false);
//拜月教主：
//哈哈哈～天大的笑话！
//你们这些小娃儿能耐我何？
VideoRestore();
//殿前武士～将他们拿下！
PartySetRole(1, 2, 5);
SetBattleMusic(Music.心急如焚);
Dos_SetBattlefield(FbpDos.乱葬岗_3);
BattleStart(289, "@A073", "");
MusicPlay(Music.停止播放, false, false);
BattleEnd();
EventSetStateSequence(279, 8, 9, 0);
PartySetPos(44, 71, 0);
HeroSetSprite(0, Sprite.假巫王刺灵儿, false);
PartySetRole(1, 0, 0);
RoleSetDirFrame(0, 0, 0);
EventSetStateSequence(279, 10, 12, 0);
EventSetState(4742, 0, 0);
VideoUpdate(0, false);
SetDlgUpper(81, 0, false);
//拜月教主：
//哼．．．可恶的小鬼！
SetDlgLower(9, 0, false);
//李逍遥：
//老妖怪～轮到你了！
VideoUpdate(0, false);
RoleSetDirFrame(0, 1, 0);
WaitEventAutoScriptRun(2, false, false);
RoleSetDirFrame(0, 2, 0);
PlaySound(2);
WaitEventAutoScriptRun(2, false, false);
RoleSetDirFrame(0, 3, 0);
VideoUpdate(0, false);
PlaySound(20);
SetDlgCenter(0, false);
//$00啊～你！！~50
HeroSetSprite(0, Sprite.灵儿倒地, true);
RoleSetDirFrame(0, 0, 0);
WaitEventAutoScriptRun(0, false, false);
RoleSetDirFrame(0, 1, 0);
WaitEventAutoScriptRun(0, false, false);
RoleSetDirFrame(0, 2, 0);
WaitEventAutoScriptRun(0, false, false);
RoleSetDirFrame(0, 3, 0);
WaitEventAutoScriptRun(0, false, false);
RoleSetDirFrame(0, 4, 0);
WaitEventAutoScriptRun(0, false, false);
RoleSetDirFrame(0, 5, 0);
WaitEventAutoScriptRun(0, false, false);
RoleSetDirFrame(0, 6, 0);
WaitEventAutoScriptRun(0, false, false);
MusicPlay(Music.十面埋伏, false, false);
SetDlgUpper(28, 0, false);
//阿奴：
//灵儿姐姐！！~50
HeroSetSprite(0, Sprite.假巫王现形, true);
RoleSetDirFrame(0, 0, 0);
WaitEventAutoScriptRun(0, false, false);
RoleSetDirFrame(0, 1, 0);
WaitEventAutoScriptRun(0, false, false);
RoleSetDirFrame(0, 2, 0);
WaitEventAutoScriptRun(0, false, false);
RoleSetDirFrame(0, 3, 0);
WaitEventAutoScriptRun(0, false, false);
RoleSetDirFrame(0, 4, 0);
WaitEventAutoScriptRun(0, false, false);
RoleSetDirFrame(0, 5, 0);
WaitEventAutoScriptRun(3, false, false);
SetDlgLower(0, 0, false);
//李逍遥：
//$02灵儿！！
WaitEventAutoScriptRun(2, false, false);
RoleSetDirFrame(0, 6, 0);
PlaySound(212);
FadeToScene(3, -1);
SetDlgLower(81, 0, false);
//拜月教主：
//哈哈哈．．无知的小鬼！
//真正的巫王早就被我杀了
//就让假的陪你们玩玩吧！
EventSetState(4744, 0, 0);
PlaySound(217);
FadeToScene(2, -1);
PartySetRole(1, 5, 0);
SetBattleMusic(Music.势如破竹_副本);
BattleStart(222, "@A073", "");
BattleEnd();
MusicPlay(Music.危机, false, false);
EventSetState(4750, 2, 0);
EventSetState(0, 0, 0);
EventSetState(4799, 2, 0);
EventSetState(4801, 1, 0);
PartySetPos(44, 71, 1);
HeroSetSprite(0, Sprite.躺李逍遥, false);
PartySetRole(1, 0, 0);
RoleSetDirFrame(0, 7, 0);
VideoUpdate(0, false);
SetDlgLower(4, 0, false);
//李逍遥：
//灵儿！你振作点！
VideoUpdate(0, false);
SetDlgUpper(31, 0, false);
//阿奴：
//呜～我．．我已经施了赎魂咒
//但是．．但是．．灵儿姐姐
//还是没有心跳啊！
HeroSetSprite(0, Sprite.李逍遥, true);
RoleSetDirFrame(1, 0, 0);
WaitEventAutoScriptRun(3, false, false);
RoleSetDirFrame(0, 0, 0);
VideoUpdate(0, false);
SetDlgLower(5, 0, false);
//李逍遥：
//可恶！！　我替灵儿报仇！

['Event_00279_00005_Auto'];
WaitEventAutoScriptRun(3, false, false);
NpcMoveToBlockMutexLock(46, 66, 0, 2);

['Event_00279_00007_Auto'];
NpcMoveToBlockMutexLock(41, 72, 0, 4);

['Event_00279_00008_Auto'];
WaitEventAutoScriptRun(3, false, false);
NpcMoveToBlockMutexLock(40, 71, 0, 4);

['Event_00279_00009_Auto'];
WaitEventAutoScriptRun(3, false, false);
NpcMoveToBlockMutexLock(42, 73, 0, 4);

['Event_00279_00012_Auto'];
EventWalkOneStep(-1, -1, 8, -8);
ReplaceAndPause();
ReplaceAndPauseWithNop("Event_00279_00012_Auto", 4);

['Event_00279_00013_Trigger'];
SetDlgCenter(0, false);
//阿奴施法急救赵灵儿

