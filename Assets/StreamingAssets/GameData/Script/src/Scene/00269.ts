['Event_00269_00001_Trigger'];
SceneEnter(267);
PartySetPos(32, 44, 0);
FadeOut(0);

['Scene_00269_Enter'];
PartyWalkToBlock(15, 30, 1, 8);
EventSetDirFrame(269, 5, 0, 0);
VideoUpdate(0, false);
SetDlgLower(85, 0, false);
//小孩：
//她们就在里面，不过你要小心
//她身边的小妹妹，她很凶喔！
ReplaceAndPause();

['Event_00269_00005_Trigger'];
SetDlgLower(85, 0, false);
//小孩：
//那小妹妹好凶喔

['Event_00269_00004_Trigger'];
NpcSetDirFrame(3, 0);
EventSetTriggerMode(-1, -1, false, 2);
PartyWalkToBlock(25, 23, 0, 4);
RoleSetDirFrame(2, 0, 0);
VideoUpdate(0, false);
SetDlgLower(6, 0, false);
//李逍遥：
//小妹妹～这位老婆婆怎么了？
NpcSetFrame(12);
VideoUpdate(0, false);
SetDlgUpper(74, 0, false);
//小女孩：
//你不要过来～我打你喔！
RoleMoveOneStep(-8, 4, 0);
WaitEventAutoScriptRun(3, false, false);
RoleMoveOneStep(-8, 4, 0);
WaitEventAutoScriptRun(2, false, false);
SetDlgLower(6, 0, false);
//李逍遥：
//等等！小妹妹～你不要怕
//我是来帮助你们的．．
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//　　　"火来！"~40
EventSetState(4678, 1, 0);
PlaySound(115);
WaitEventAutoScriptRun(4, false, false);
RoleMoveOneStep(-8, 4, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(-8, 4, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(-8, 4, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(-8, 4, 0);
WaitEventAutoScriptRun(13, false, false);
EventSetAutoScript(269, 6, "");
SetDlgUpper(74, 0, false);
//小女孩：
//你们欺侮阿娘、害姥姥受伤
//你们全部都是坏人！
SetDlgLower(10, 0, false);
//李逍遥：
//好～好～我不靠近你就是了
//你别怕，我真的不是坏人
VideoUpdate(0, false);
EventSetDirFrame(269, 2, 0, 1);
WaitEventAutoScriptRun(2, false, false);
SetDlgLower(75, 0, false);
//老妇人：
//这位公子，请你过来一下
NpcSetDirFrame(0, 0);
VideoUpdate(0, false);
NpcSetDirFrame(3, 0);
ReplaceAndPause();
SetDlgUpper(74, 0, false);
//小女孩：
//你要是害姥姥，我就打你！
NpcSetDirFrame(3, 0);

['Event_00269_00002_Trigger'];
SetDlgLower(1, 0, false);
//李逍遥：
//老婆婆～您受伤了吗？
VideoUpdate(0, false);
SetDlgUpper(75, 0, false);
//老妇人：
//没什么～只是脚踝扭伤了
VideoRestore();
//公子～可否请你帮我一个忙？
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//只要我帮的上的，您尽管说
VideoUpdate(0, false);
SetDlgUpper(75, 0, false);
//老妇人：
//请你拿著这条手绢到港口边
//若有人认出这条手绢的话，
//请你告诉她：我带小青的女儿
//来找灵月宫主
AddItem(232, 0);
VideoUpdate(0, false);
SetDlgCenter(0, false);
//老妇人交给李逍遥
//一条"凤纹手绢"
ReplaceAndPause();
SetDlgUpper(75, 0, false);
//老妇人：
//拜托你了．．．

