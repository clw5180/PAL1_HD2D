['Scene_00148_Enter'];
SetBattleMusic(Music.心急如焚);

['Event_00148_00001_Trigger'];
SceneEnter(168);
PartySetPos(26, 44, 1);
FadeOut(0);

['Event_00148_00002_Trigger'];
EventSetState(2411, 1, 0);
NpcSetFrame(1);
VideoUpdate(0, false);
SetDlgBox(0);
//得到一把"七星剑"
AddItem(126, 0);
WaitEventAutoScriptRun(4, false, false);
SetDlgCenter(0, false);
//死尸发出哭声~40
RoleSetDirFrame(1, 0, 0);
RoleMoveOneStep(16, 8, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(16, 8, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(16, 8, 0);
WaitEventAutoScriptRun(0, false, false);
SetDlgLower(10, 0, false);
//李逍遥：
//　　你是．．是谁！？
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//$08呜．．呼．．大师兄
//我对不起你．．
EventSetState(2409, 1, 0);
PlaySound(212);
FadeToScene(2, -1);
SetDlgUpper(58, 0, false);
//死灵：
//$06你们又是谁？
VideoRestore();
//$02唔！活人？
//活人怎么可以进来这里！
VideoRestore();
//你的师父谁？他没告诉你
//这里是不许进来的吗！
SetDlgLower(10, 0, false);
//李逍遥：
//我．．我不是．．
VideoUpdate(0, false);
SetDlgUpper(58, 0, false);
//死灵：
//胆敢违逆师门禁令
//我来代替你师父惩罚你！
SetBattleMusic(Music.御剑伏魔_1);
Dos_SetBattlefield(FbpDos.片尾_企划程式);
BattleStart(163, "@A073", "");
SetBattleMusic(Music.心急如焚);
MusicPlay(Music.孤雀无栖, false, false);
BattleEnd();
PartySetPos(47, 73, 1);
RoleSetDirFrame(1, 0, 0);
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//死灵：
//$06呜呼．．师弟．．
//是我．．是我害死你们的．．$02~70
EventSetState(2409, 0, 0);
FadeToScene(3, -1);
SetDlgLower(24, 0, false);
//林月如：
//从他的衣著看来，也许是以
//前冤死在塔中的蜀山仙剑派
//的前辈．．
EventSetState(2410, 1, 0);
FadeToScene(0, -1);
WaitEventAutoScriptRun(10, false, false);
PartyWalkToBlock(47, 73, 0, 2);
WaitEventAutoScriptRun(6, false, false);
SetDlgLower(2, 0, false);
//李逍遥：
//姑娘．．．你是．．？
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//姜婉儿：
//我是他女儿．．
SetDlgLower(2, 0, false);
//李逍遥：
//你．．．是人？
EventSetDirFrame(148, 4, 3, 0);
VideoUpdate(0, false);
SetDlgUpper(47, 0, false);
//姜婉儿：
//你说呢？
VideoUpdate(0, false);
SetDlgLower(6, 0, false);
//李逍遥：
//令尊．．啊～真对不起
//冒犯了令尊的英灵．．
EventSetDirFrame(148, 4, 2, 0);
VideoUpdate(0, false);
SetDlgUpper(47, 0, false);
//姜婉儿：
//十八年了，爹一直到死后
//灵魂还无法从自责中解脱
//我．．应该感谢你们才是．．
VideoUpdate(0, false);
SetDlgLower(24, 0, false);
//林月如：
//你．．在这里生活十八年了？
EventSetDirFrame(148, 4, 3, 0);
VideoUpdate(0, false);
SetDlgUpper(47, 0, false);
//姜婉儿：
//我娘在这里生下我的．．
VideoUpdate(0, false);
SetDlgLower(2, 0, false);
//李逍遥：
//这里这么多妖怪．．你．．
VideoUpdate(0, false);
SetDlgUpper(47, 0, false);
//姜婉儿：
//我有一半是妖族的血统，何况
//看在我死去的娘亲的面子上，
//其它的妖怪不会对我怎么样
VideoRestore();
//倒是你们．．突然有人类闯进
//来的话，那些妖怪是会群起攻
//之的
VideoRestore();
//他们都相信～吞吃掉九十九
//个人类，或是一千个妖怪，
//就能获得离开这里的力量．．
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//这方法太残忍了吧！
//会是真的吗？
VideoUpdate(0, false);
SetDlgUpper(47, 0, false);
//姜婉儿：
//讹言罢了，不过．．
//这里许多妖怪都相信这传说
//所以～劝你们还是小心为是
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//你．．跟我们一道走吧
//我们此来是为了救一位朋友
//等我们找到她后，让我们一
//起想办法离开这鬼地方
VideoUpdate(0, false);
SetDlgUpper(47, 0, false);
//姜婉儿：
//离开～？　那是不可能的
//能出去，大家早就出去了
EventSetDirFrame(148, 4, 0, 0);
VideoUpdate(0, false);
SetDlgUpper(47, 0, false);
//姜婉儿：
//你们的好意，我心领了
//我自有我的生存之道
VideoRestore();
//告辞～
EventSetState(2410, 0, 0);
MusicStop(0);
PlaySound(170);
FadeToScene(3, -1);
MusicPlay(Music.救佳人, true, false);
ReplaceAndPause();
SetDlgLower(0, 0, false);
//李逍遥：
//前辈．．您安息吧

['Event_00148_00004_Auto'];
WaitEventAutoScriptRun(2, false, false);
NpcSetDirFrame(2, 0);
WaitEventAutoScriptRun(2, false, false);
NpcMoveToBlockMutexLock(45, 71, 1, 2);

['Event_00148_00021_Trigger'];
Call("@8E99", 0, 0);
SetDlgBox(0);
//获得灵葫仙丹
AddItem(51, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

