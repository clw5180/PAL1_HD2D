['Scene_00147_Enter'];
PartySetRole(1, 3, 0);
Dos_SetBattlefield(FbpDos.片尾_企划程式);
SetBattleMusic(Music.罗汉阵);
PartySetPos(37, 35, 0);
MusicPlay(Music.救佳人, false, false);

['Event_00147_00001_Trigger'];
SceneEnter(166);
PartySetPos(45, 18, 0);
FadeOut(0);

['Event_00147_00002_Trigger'];
EventSetState(-1, 0, 0);
EventSetState(2406, 1, 0);
FadeToScene(0, -1);
RoleMoveOneStep(-16, 8, 0);
WaitEventAutoScriptRun(2, false, false);
//镇狱明王：
//汝为何人，所为何来？
VideoUpdate(0, false);
SetDlgLower(5, 0, false);
//李逍遥：
//何．．何方妖孽？报上名来！
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//镇狱明王：
//无礼之徒！
//吾乃此塔之守护神～"镇狱明王"
VideoUpdate(0, false);
SetDlgLower(21, 0, false);
//林月如：
//这座塔就是您创建的吗？
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//镇狱明王：
//非也～锁妖塔乃人类所建
//吾乃天界诸神顺应人界之请求
//下凡前来协助镇守此塔．．
VideoRestore();
//你们还没回答我的问题！
//不说出来意，不许通过！
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//喔～　我们来找一个人
//可否请您帮个忙．．
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//镇狱明王：
//人．．？
VideoRestore();
//塔内只有妖魔，没有人类
//凡人之躯进入塔内只死无生
//汝等速速回去吧！
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//我有一位朋友身陷塔中
//就是因为只死无生，所以
//我非去救她不可
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//镇狱明王：
//唔．．．汝是蜀山弟子吗
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//不是！
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//镇狱明王：
//嗯．．我的职责是
//不让妖魔逃出塔外
VideoRestore();
//除了蜀山弟子，其余人要
//进塔中，并不在禁令之列
//汝要进入，我不必阻止
VideoRestore();
//你请吧．．
VideoUpdate(0, false);
EventSetState(2406, 0, 0);
FadeToScene(0, -1);

