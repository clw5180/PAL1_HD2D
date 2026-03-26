['Event_00173_00001_Trigger'];
SceneEnter(177);
PartySetPos(44, 44, 1);
FadeOut(0);

['Event_00173_00011_Trigger'];
SetDlgCenter(0, false);
//林月如冰冷的身躯

['Event_00173_00005_Auto'];
NpcMoveToBlockMutexLock(21, 35, 1, 2);
WaitEventAutoScriptRun(4, false, false);
NpcSetDirFrame(3, 0);
ReplaceAndPause();
NpcMoveToBlockMutexLock(23, 34, 0, 2);
WaitEventAutoScriptRun(4, false, false);
NpcSetDirFrame(3, 0);
ReplaceAndPauseWithNop("Event_00173_00005_Auto", 0);

['Event_00173_00009_Auto'];
NpcMoveToBlock(21, 33, 1, 3);

['Event_00173_00007_Auto'];
NpcSetDirFrame(0, 0);

['Event_00173_00008_Auto'];
WaitEventAutoScriptRun(6, false, false);
NpcSetDirFrame(0, 0);
WaitEventAutoScriptRun(3, false, false);
NpcSetDirFrame(3, 0);
ReplaceAndPause();
NpcMoveToBlock(19, 30, 1, 3);
WaitEventAutoScriptRun(3, false, false);
NpcSetDirFrame(0, 0);
NpcSetDirFrame(1, 0);
NpcSetDirFrame(2, 0);
NpcSetDirFrame(3, 0);
NpcSetDirFrame(0, 0);

['Scene_00173_Enter'];
SceneSetScript(183, "", "");
EventSetTriggerScript(181, 2, "Event_00181_00002_Trigger");
PartySetPos(22, 34, 1);
HeroSetSprite(0, Sprite.空空如也, false);
PartySetRole(1, 0, 0);
RoleSetDirFrame(0, 0, 0);
WaitEventAutoScriptRun(42, false, false);
SetDlgUpper(31, 0, false);
//阿奴：
//唔．．生小娃娃
//怎么要那么久啊！
EventSetAutoScript(173, 5, "Event_00002_00026_Auto");
EventSetState(2860, 0, 0);
EventSetState(2861, 1, 0);
EventSetState(2856, 0, 0);
EventSetState(2857, 0, 0);
EventSetState(2863, 2, 0);
WaitEventAutoScriptRun(6, false, false);
SetDlgUpper(82, 0, false);
//$01快！快去厨房提热水来
SetDlgLower(1, 0, false);
//李逍遥：
//是～　马上来！
EventSetAutoScript(173, 5, "@6F7D");
WaitEventAutoScriptRun(12, false, false);
EventSetDirFrame(173, 9, 2, 0);
WaitEventAutoScriptRun(4, false, false);
SetDlgLower(28, 0, false);
//阿奴：
//$02小宝宝生出来了吗？
VideoUpdate(0, false);
SetDlgUpper(82, 0, false);
//还早哩！
//你也别闲着，进来帮忙
VideoUpdate(0, false);
SetDlgLower(29, 0, false);
//阿奴：
//好～！
EventSetAutoScript(173, 7, "@6E4C");
EventSetAutoScript(173, 9, "@6E47");
VideoFadeAndUpdate(-1);
EventModifyPos(173, 9, -32, 16);
EventSetDirFrame(173, 4, 0, 1);
EventSetState(2864, 1, 0);
EventSetState(2859, 0, 0);
PartySetPos(18, 29, 0);
HeroSetSprite(0, Sprite.李逍遥抱子, true);
RoleSetDirFrame(0, 0, 0);
PlaySound(272);
VideoUpdate(0, true);
SetDlgCenter(0, false);
//哇～．．哇～．．
WaitEventAutoScriptRun(12, false, false);
SetDlgLower(3, 0, false);
//李逍遥：
//是个女儿！　灵儿～你瞧
//她长得好像你呢！我们的
//女儿将来一定也是个大美人
VideoRestore();
//对了～
//该替她取什么名字好呢？
VideoUpdate(0, false);
SetDlgUpper(11, 0, false);
//赵灵儿：
//我想．．就叫"忆如"吧．．
VideoUpdate(0, false);
SetDlgLower(6, 0, false);
//李逍遥：
//李忆如．．嗯～好名字！
VideoUpdate(0, false);
SetDlgUpper(15, 0, false);
//赵灵儿：
//这个孩子，等于是月如姐姐
//牺牲性命换来的，我希望月如
//姐姐在天之灵能继续庇佑这孩
//子平安长大．．．
EventSetAutoScript(173, 7, "@6E51");
WaitEventAutoScriptRun(8, false, false);
EventSetState(2864, 0, 0);
HeroSetSprite(0, Sprite.李逍遥, true);
RoleSetDirFrame(3, 0, 0);
SetDlgLower(32, 0, false);
//阿奴：
//哇～　也给我抱抱嘛！
EventSetState(2864, 0, 0);
EventSetState(2861, 0, 0);
EventSetState(2862, 2, 0);
WaitEventAutoScriptRun(22, false, false);
PlaySound(273);
WaitEventAutoScriptRun(6, false, false);
SetDlgCenter(0, false);
//哈．．哈．．哈．．
RoleSetDirFrame(0, 0, 0);
WaitEventAutoScriptRun(4, false, false);
PartyWalkToBlock(17, 29, 1, 2);
SetDlgUpper(9, 0, false);
//李逍遥：
//老婆婆．．谢谢您
//您的大恩大德，晚辈即使
//粉身碎骨亦不足以回报
VideoUpdate(0, false);
SetDlgLower(82, 0, false);
//老婆婆：
//呵呵～现在谢我还早哩！
//等婆婆我完成另一件事
//再谢我也不迟．．
VideoUpdate(0, false);
SetDlgUpper(1, 0, false);
//李逍遥：
//哦？　什么样的事？
VideoUpdate(0, false);
SetDlgLower(82, 0, false);
//老婆婆：
//呵呵．．天机不可泄漏
VideoRestore();
//如果你真的想谢我
//就替我跑个腿吧！
VideoUpdate(0, false);
SetDlgUpper(9, 0, false);
//李逍遥：
//只要您吩咐的
//晚辈必定万死不辞
VideoUpdate(0, false);
SetDlgLower(82, 0, false);
//老婆婆：
//干嘛说的那么严重似的
//要不是婆婆我最近风湿又犯了
//跑不动啦，才要你替我跑个腿
//走一趟"试炼窟"
//替我收集三十六只"傀儡虫"
EventSetStateSequence(215, 3, 8, 0);
EventSetAutoScript(173, 8, "@6F0C");
EventSetDirFrame(173, 4, 0, 0);
EventSetTriggerScript(177, 2, "@6C55");
EventSetTriggerScript(206, 3, "@7404");
EventSetTriggerScript(206, 4, "@743C");
EventSetState(3393, 0, 0);
EventSetState(3386, 0, 0);
EventSetState(3388, 0, 0);
EventSetState(3474, 0, 0);
EventSetState(3475, 0, 0);
EventSetState(3447, 0, 0);
EventSetState(3448, 0, 0);
EventSetState(3585, 0, 0);
EventSetState(3444, 0, 0);
EventSetState(3487, 0, 0);
ReplaceAndPause();
MusicPlay(Music.盟誓, false, false);

['Event_00173_00008_Trigger'];
SetDlgLower(0, 0, false);
//阿奴：
//嘘．．不要吵
//小宝宝快睡着了
ReplaceAndPause();
SetDlgLower(0, 0, false);
//阿奴：
//宝宝乖．．快快睡．．

['Event_00173_00004_Trigger'];
//赵灵儿：
//逍遥哥哥～你要去哪里
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//李逍遥：
//我哪都不去，你安心休养吧
ReplaceAndPause();
SetDlgCenter(0, false);
//赵灵儿睡着了．．

['Event_00173_00010_Auto'];
RoleSetDirFrame(0, 0, 0);
ReplaceAndPause();
RoleSetDirFrame(0, 1, 0);
ReplaceAndPauseWithNop("Event_00173_00010_Auto", 0);

['Event_00173_00012_Trigger'];
SetDlgCenter(0, false);
//灵儿和忆如正熟睡中．．

