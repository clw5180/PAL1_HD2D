['Event_00253_00001_Trigger'];
SceneEnter(251);
PartySetPos(10, 23, 0);
FadeOut(0);

['Scene_00253_Enter'];
HeroSetSprite(0, Sprite.水底逍遥, false);
HeroSetSprite(3, Sprite.水中巫后, false);
PartySetRole(4, 1, 0);
RoleSetDirFrame(3, 0, 0);
PartySetPos(10, 23, 1);
VideoWave(2, 0);
MusicPlay(Music.险境_2, false, false);
Dos_SetBattlefield(FbpDos.十里坡);
GotoWithNop("@0002", 0);
['Event_00253_00004_Trigger'];
EventSetState(-1, 0, 0);
WaitEventAutoScriptRun(0, false, true);
EventSetState(4442, 1, 0);
FadeToScene(0, -1);
SetDlgLower(80, 0, false);
//拜月教主：
//哈哈哈～想水遁？
//你们就等着变成我的
//水魔兽的饵食吧！
VideoUpdate(0, false);
EventSetState(4441, 1, 0);
PlaySound(212);
FadeToScene(2, -1);
RoleSetDirFrame(1, 0, 1);
VideoUpdate(0, false);
RoleSetDirFrame(1, 0, 0);
WaitEventAutoScriptRun(5, false, false);
RoleSetDirFrame(3, 0, 0);
VideoUpdate(0, false);
SetDlgUpper(73, 0, false);
//巫后：
//你．．！
//你竟然真的在培养邪魔兽？
//你可知道这会召来多么严重
//的灾祸吗！？
VideoUpdate(0, false);
SetDlgLower(80, 0, false);
//拜月教主：
//只不过引来小小的洪水罢了
//这点损失根本不算什么
//更何况，全族的人都相信
//你就是那兴风作浪的妖孽
//为了平息天神的愤怒
//你只有一死！
VideoUpdate(0, false);
SetDlgUpper(73, 0, false);
//巫后：
//果然～
//这一切都是你算计好的！？
VideoUpdate(0, false);
SetDlgLower(80, 0, false);
//拜月教主：
//呵呵～这就要怪你不是人类
//没有人会相信一只蛇妖的话
VideoRestore();
//哈哈哈．．．
EventSetState(4442, 0, 0);
PlaySound(217);
FadeToScene(2, -1);
Dos_SetBattlefield(FbpDos.阴森所在);
SetBattleMusic(Music.兵凶战危_2);
BattleStart(315, "@A073", "");
SetBattleMusic(Music.心急如焚);
Dos_SetBattlefield(FbpDos.十里坡);
BattleEnd();
RoleSetDirFrame(1, 0, 0);
WaitEventAutoScriptRun(8, false, false);
SetDlgLower(5, 0, false);
//李逍遥：
//这只家伙还在动！？
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//巫后：
//水魔兽遇水则生
//只在水中它就是不死之身
//不管把它砍成几截也没用
VideoUpdate(0, false);
SetDlgLower(10, 0, false);
//李逍遥：
//哇．．那只有逃啦！(

['Event_00253_00002_Auto'];
NpcChase(128, 2, true);
ReplaceAndPauseWithNop("Event_00253_00002_Auto", 0);

