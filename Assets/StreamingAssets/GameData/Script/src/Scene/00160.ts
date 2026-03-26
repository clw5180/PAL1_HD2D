['Event_00160_00003_Trigger'];
SceneEnter(158);
PartySetPos(37, 82, 0);
FadeOut(0);

['Event_00160_00004_Trigger'];
SceneEnter(159);
PartySetPos(20, 96, 1);
FadeOut(0);

['Event_00160_00005_Trigger'];
SceneEnter(161);
PartySetPos(20, 95, 1);
FadeOut(0);

['Event_00160_00006_Trigger'];
SceneEnter(161);
PartySetPos(19, 49, 0);
FadeOut(0);

['Scene_00160_Enter'];
PartyWalkToBlock(22, 89, 1, 8);
PartyWalkToBlock(23, 90, 1, 8);
PartyWalkToBlock(33, 80, 1, 8);
PartyWalkToBlock(32, 79, 1, 8);
WaitEventAutoScriptRun(0, false, false);
RoleSetDirFrame(2, 0, 0);
WaitEventAutoScriptRun(2, false, false);
RoleSetDirFrame(2, 0, 1);
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//晚辈李逍遥，拜见前辈
WaitEventAutoScriptRun(2, false, false);
EventSetDirFrame(160, 1, 1, 0);
WaitEventAutoScriptRun(2, false, false);
EventSetDirFrame(160, 1, 0, 0);
WaitEventAutoScriptRun(0, false, false);
SetDlgUpper(63, 0, false);
//剑圣：
//嗯．．．好．．。
VideoUpdate(0, false);
SetDlgUpper(37, 0, false);
//酒剑仙：
//师兄．．怎么样？
//我看中的人不错吧！
WaitEventAutoScriptRun(4, false, false);
EventSetDirFrame(160, 1, 1, 0);
VideoUpdate(0, false);
SetDlgUpper(63, 0, false);
//剑圣：
//师弟，难得你肯收起玩心
//不再四处乱跑了？
VideoUpdate(0, false);
SetDlgUpper(37, 0, false);
//酒剑仙：
//哈哈哈！老啦～跑不动了
VideoUpdate(0, false);
SetDlgUpper(63, 0, false);
//剑圣：
//是啊，我们都老了
//是该好好找个合适的传人
//继承本门的绝学了
EventSetDirFrame(160, 1, 0, 0);
VideoUpdate(0, false);
SetDlgUpper(63, 0, false);
//剑圣：
//不过．．师弟，你也真乱来
//把本门的剑术传给外人，若是
//让心术不正之徒学去怎行？
VideoUpdate(0, false);
SetDlgUpper(37, 0, false);
//酒剑仙：
//放心啦，我看人一向很准的
//而且，这小子天份极高，我
//只教他一次，就学会了
VideoUpdate(0, false);
SetDlgUpper(63, 0, false);
//剑圣：
//嗯．．．这倒是没错．．
VideoUpdate(0, false);
SetDlgUpper(37, 0, false);
//酒剑仙：
//哈哈～逍遥！　师兄答应收
//你做我仙剑派的弟子呢！
RoleSetDirFrame(1, 0, 0);
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//这．．．
RoleSetDirFrame(2, 0, 0);
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//前辈的厚爱．．晚辈心领了
VideoUpdate(0, false);
SetDlgUpper(37, 0, false);
//酒剑仙：
//为什么！？　你不是很想
//学咱们仙剑派的法术吗？
RoleSetDirFrame(1, 0, 0);
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//因为．．．因为．．
RoleSetDirFrame(0, 0, 0);
VideoUpdate(0, false);
RoleSetDirFrame(3, 0, 0);
WaitEventAutoScriptRun(6, false, false);
RoleSetDirFrame(3, 0, 1);
WaitEventAutoScriptRun(10, false, false);
RoleSetDirFrame(2, 0, 0);
WaitEventAutoScriptRun(4, false, false);
SetDlgLower(1, 0, false);
//李逍遥：
//晚辈乃世俗之人，俗心未净
//怕不适合这世外清修的生活
VideoUpdate(0, false);
SetDlgUpper(63, 0, false);
//剑圣：
//嗯．．有这种顾虑是对的
//不过你放心，本门弟子除了掌
//门人，其余的并非一定要出家
//只要遵守本门的戒律即可
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//晚辈．．．考虑看看
EventSetDirFrame(160, 1, 3, 0);
VideoUpdate(0, false);
SetDlgUpper(63, 0, false);
//剑圣：
//好吧！　这也算是人生大事
//你考虑几天再做决定
EventSetDirFrame(160, 1, 2, 0);
RoleSetDirFrame(1, 0, 1);
RoleSetDirFrame(1, 0, 0);
VideoUpdate(0, false);
SetDlgUpper(37, 0, false);
//酒剑仙：
//哎～你什么时候变得这么
//扭扭捏捏的，像个娘们似的？
VideoRestore();
//我们仙剑派的武学冠绝天下
//只要你习得其中九牛一毛
//便可傲视武林，学得一半
//就可以纵横三界
VideoRestore();
//武林中多少人梦寐以求
//的机会，都摆到你眼前了
//你还有什么好犹豫的？
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//前辈如此看重我，晚辈心中
//十分感激，但是～晚辈还得
//把一些俗事处理完才行
VideoUpdate(0, false);
SetDlgUpper(37, 0, false);
//酒剑仙：
//我知道了，是不是还有
//一堆红粉知己没摆平啊？
SetDlgLower(6, 0, false);
//李逍遥：
//让前辈见笑了．．
VideoUpdate(0, false);
SetDlgUpper(37, 0, false);
//酒剑仙：
//你们就留在这儿住几天
//顺便参观参观吧！
//你会喜欢这地方的
ReplaceAndPause();

['Event_00160_00001_Trigger'];
SetDlgLower(1, 0, false);
//李逍遥：
//前辈～晚辈想向您打听一个人
VideoRestore();
//前些日子您是否曾救了一位
//年约十六岁的女孩子？
//不知那位姑娘现在何处？
VideoUpdate(0, false);
SetDlgUpper(63, 0, false);
//剑圣：
//我何时救过年轻的女孩？
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//没有吗．．！？
VideoUpdate(0, false);
SetDlgUpper(63, 0, false);
//剑圣：
//没有～！
ReplaceAndPause();
SetDlgUpper(0, 0, false);
//剑圣：
//对了，先提醒你们．．后山
//是本门的禁地，不可随意擅闯

['Event_00160_00002_Trigger'];
//酒剑仙：
//怎么样，考虑的如何？

