['Event_00182_00001_Trigger'];
SceneEnter(191);
PartySetPos(56, 48, 0);
FadeOut(0);

['Scene_00182_Enter'];
PartySetPos(48, 117, 1);
ReplaceAndPause();

['Event_00182_00003_Trigger'];
EventSetState(-1, 0, 0);
SetDlgLower(0, 0, false);
//木道人：
//你这死老头子！
//带我在树林子绕来绕去
//绕了半天，是想跟我拖延
//时间吗？
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//老村长：
//呵～快了，就快到了．．
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//木道人：
//这句话你已经对我说
//六十八遍了！你再不带我
//去取寿葫芦，我就宰了你！
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//老村长：
//唉．．我说～道长呀
//以你的修行，只要安安份份
//的，要活个几百年应该不难
//何必倚靠寿葫芦呢？
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//木道人：
//少废话！既然被我知道有
//这项宝物，我就非得到不可！
PartyWalkToBlock(23, 105, 1, 4);
PartyWalkToBlock(23, 105, 0, 4);
EventSetDirFrame(182, 2, 3, 0);
VideoUpdate(0, false);
SetDlgCenter(0, false);
//．．．！！
EventSetState(2979, 0, 0);
Dos_SetBattlefield(FbpDos.凤凰巢);
SetBattleMusic(Music.势如破竹_副本);
BattleStart(221, "@A073", "");
BattleEnd();
SetBattleMusic(Music.心急如焚);
SetDlgBox(0);
//获得金罡珠
AddItem(201, 0);
SetDlgLower(28, 0, false);
//咦．．不是水灵珠？
EventSetState(2982, 1, 0);
PartySetPos(21, 102, 1);
RoleSetDirFrame(0, 0, 0);
WaitEventAutoScriptRun(20, false, false);
SetDlgLower(0, 0, false);
//阿桃：
//爹．．孩儿害您受苦了
//都是孩儿惹出来的祸
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//老村长：
//这不能怪你，你也是无心的
//要怪～就应该怪咱们不该怀
//有珍宝、引人觊觎
VideoRestore();
//幸好有二位英雄仗义相助
//本村得以免去一场劫难
EventSetDirFrame(182, 5, 2, 0);
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//阿桃：
//感谢二位的救了我爹．．
RoleSetDirFrame(0, 0, 0);
VideoUpdate(0, false);
SetDlgLower(6, 0, false);
//李逍遥：
//哈哈～这没什么啦！
//千万别放在心上
RoleSetDirFrame(0, 0, 1);
VideoUpdate(0, false);
SetDlgUpper(29, 0, false);
//阿奴：
//是啊～要是又有女孩子想
//报恩，他可会消受不了！
RoleSetDirFrame(3, 0, 0);
VideoUpdate(0, false);
SetDlgLower(7, 0, false);
//李逍遥：
//你胡扯些什么
RoleSetDirFrame(3, 0, 1);
VideoUpdate(0, false);
SetDlgUpper(29, 0, false);
//阿奴：
//嘻嘻～那边就有一位
//念念不忘救命恩人的人
RoleSetDirFrame(0, 0, 1);
EventSetState(2983, 1, 0);
WaitEventAutoScriptRun(20, false, false);
EventSetDirFrame(182, 5, 3, 0);
WaitEventAutoScriptRun(8, false, false);
EventWalkOneStep(182, 5, 8, 4);
WaitEventAutoScriptRun(0, false, false);
EventWalkOneStep(182, 5, 8, 4);
WaitEventAutoScriptRun(3, false, false);
SetDlgUpper(46, 0, false);
//阿桃：
//宋．．宋公子．．
RoleSetDirFrame(0, 0, 0);
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//老村长：
//小伙子，你过来！
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//宋贺文：
//是．．．
EventSetAutoScript(182, 6, "@6B18");
WaitEventAutoScriptRun(16, false, false);
EventSetDirFrame(182, 5, 2, 0);
WaitEventAutoScriptRun(6, false, false);
EventSetDirFrame(182, 5, 1, 0);
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//阿桃：
//爹～这件事都是我引起的
//求求您不要责怪宋公子
//您要责罚，就罚我吧
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//老村长：
//你紧张个什么劲？
//爹又没说要对他怎么样
EventSetDirFrame(182, 6, 0, 0);
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//宋贺文：
//阿桃小姐．．你不必再替我
//求情了，这样子我会更良心
//不安的．．
EventSetDirFrame(182, 5, 2, 0);
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//阿桃：
//不．．要不是我．．
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//老村长：
//你们两个在争什么呀？
//我又没说要责怪谁！
EventSetDirFrame(182, 6, 1, 0);
EventSetDirFrame(182, 5, 1, 0);
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//老村长：
//都怪我老眼昏花，竟然没
//发觉我的女儿喜欢上外地人
//才会惹出这么多事情来！
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//阿桃：
//爹　～
EventSetDirFrame(182, 5, 0, 0);
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//老村长：
//小伙子～你真的喜欢阿桃？
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//宋贺文：
//是．．请伯父成全
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//老村长：
//既然你知道我们的身份
//可知～要跟我们一起生活
//要付出什么代价吗？
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//宋贺文：
//我知道．．
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//老村长：
//不后悔？
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//宋贺文：
//贺文心意已定，决不后悔
EventSetDirFrame(182, 5, 2, 0);
WaitEventAutoScriptRun(2, false, false);
EventSetDirFrame(182, 4, 4, 0);
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//老村长：
//好．．你来
//把这颗桃子吃了
EventSetAutoScript(182, 6, "@6B1D");
WaitEventAutoScriptRun(6, false, false);
EventSetDirFrame(182, 5, 1, 0);
WaitEventAutoScriptRun(20, false, false);
EventSetDirFrame(182, 4, 3, 0);
WaitEventAutoScriptRun(4, false, false);
EventSetAutoScript(182, 6, "@6B1F");
WaitEventAutoScriptRun(25, false, false);
SetDlgUpper(0, 0, false);
//老村长：
//今后，你就是我们
//桃源村的一份子了
EventSetDirFrame(182, 5, 2, 0);
WaitEventAutoScriptRun(2, false, false);
EventSetDirFrame(182, 6, 0, 0);
WaitEventAutoScriptRun(10, false, false);
FadeOut(2);
SceneEnter(184);

['Event_00182_00006_Auto'];
NpcMoveToBlockMutexLock(24, 106, 0, 2);

['Event_00182_00005_Auto'];
NpcMoveToBlock(20, 103, 1, 3);

