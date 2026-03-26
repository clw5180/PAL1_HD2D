['Event_00267_00001_Trigger'];
PartySetPos(6, 11, 1);
SceneEnter(270);
FadeOut(0);

['Event_00267_00002_Trigger'];
SceneEnter(269);
PartySetPos(14, 31, 1);
FadeOut(0);

['Event_00267_00004_Auto'];
EventWalkOneStep(-1, -1, 0, 4);
EventModifyPos(-1, -1, 0, 4);
GotoWithNop("Event_00267_00004_Auto", 15);
EventWalkOneStep(-1, -1, 0, 3);
EventModifyPos(-1, -1, 0, 2);
EventWalkOneStep(-1, -1, 0, 2);
EventModifyPos(-1, -1, 0, 1);
['@860E'];
EventAnimate(Direction.Current);
ReplaceAndPauseWithNop("@860E", 4);
EventWalkOneStep(-1, -1, 0, -2);
EventModifyPos(-1, -1, 0, -2);
EventWalkOneStep(-1, -1, 0, -3);
EventModifyPos(-1, -1, 0, -3);
EventWalkOneStep(-1, -1, 0, -4);
EventModifyPos(-1, -1, 0, -4);
['@8616'];
EventWalkOneStep(-1, -1, 0, -5);
EventModifyPos(-1, -1, 0, -5);
GotoWithNop("@8616", 0);

['Scene_00267_Enter'];
MusicPlay(Music.回梦, false, false);
Dos_SetBattlefield(FbpDos.木秘宫_1);
SetBattleMusic(Music.势如破竹);
PartySetPos(30, 46, 0);
HeroSetSprite(0, Sprite.空空如也, true);
RoleSetDirFrame(0, 0, 0);
WaitEventAutoScriptRun(22, false, false);
EventSetDirFrame(267, 3, 0, 0);
WaitEventAutoScriptRun(14, false, false);
EventSetState(4660, 0, 0);
HeroSetSprite(0, Sprite.李逍遥, true);
RoleSetDirFrame(3, 0, 0);
WaitEventAutoScriptRun(12, false, false);
RoleSetDirFrame(0, 0, 0);
WaitEventAutoScriptRun(8, false, false);
RoleSetDirFrame(1, 0, 0);
WaitEventAutoScriptRun(6, false, false);
RoleSetDirFrame(2, 0, 0);
WaitEventAutoScriptRun(4, false, false);
EventSetState(4659, 0, 0);
SetDlgLower(0, 0, false);
//李逍遥：
//咦？　这里．．
//不就是山神庙吗
EventSetAutoScript(267, 3, "@861A");
WaitEventAutoScriptRun(7, false, false);
SetDlgUpper(85, 0, false);
//小孩：
//哗！　你是仙人吗？
//我看见你从天上下来
//你一定是仙人！
VideoUpdate(0, false);
SetDlgLower(3, 0, false);
//李逍遥：
//我？　我怎么可能是．．
VideoUpdate(0, false);
EventSetDirFrame(267, 3, 2, 0);
WaitEventAutoScriptRun(4, false, false);
EventSetDirFrame(267, 3, 0, 0);
VideoUpdate(0, false);
SetDlgUpper(85, 0, false);
//小孩：
//仙人，请你帮帮忙
//在山神庙里面有一位老婆婆
//受了伤，请你救救她好不好？
EventSetAutoScript(267, 3, "@861C");
WaitEventAutoScriptRun(12, false, false);
ReplaceAndPause();

['Event_00267_00008_Auto'];
NpcMoveToBlock(32, 102, 1, 3);

['Event_00267_00007_Trigger'];
EventSetState(4661, 2, 0);
//秀兰：
//大哥哥～你有没有看到
//李家哥哥呀？
VideoRestore();
//大娘叫我来找李家哥哥
//他再不回家，会被打屁股喔
ReplaceAndPause();
//秀兰：
//你看到李家哥哥了没？

['Event_00267_00007_Auto'];
NpcMoveToBlock(27, 40, 0, 3);
WaitEventAutoScriptRun(10, false, false);
NpcMoveToBlock(28, 39, 0, 3);
WaitEventAutoScriptRun(8, false, false);
NpcMoveToBlock(25, 42, 0, 3);
WaitEventAutoScriptRun(20, false, false);
NpcMoveToBlock(33, 50, 0, 3);
WaitEventAutoScriptRun(8, false, false);
NpcSetDirFrame(0, 0);
WaitEventAutoScriptRun(8, false, false);
NpcSetDirFrame(3, 0);
WaitEventAutoScriptRun(10, false, false);
NpcMoveToBlock(29, 46, 1, 3);
WaitEventAutoScriptRun(8, false, false);
NpcMoveToBlock(31, 44, 1, 3);
WaitEventAutoScriptRun(30, false, false);
ReplaceAndPauseWithNop("Event_00267_00007_Auto", 0);

['Event_00267_00006_Trigger'];
Call("@8E99", 0, 0);
SetDlgCenter(0, false);
//箱中有若干童玩物
VideoUpdate(0, false);
SetDlgLower(3, 0, false);
//啊～这颗珠子不就是．．
EventSetState(4663, 2, 0);
WaitEventAutoScriptRun(16, false, false);
RoleSetDirFrame(0, 0, 0);
WaitEventAutoScriptRun(5, false, false);
SetDlgLower(85, 0, false);
//小孩：
//喂！　不许动我的东西
PartyWalkToBlock(34, 101, 0, 2);
SetDlgUpper(6, 0, false);
//小朋友～你叫什么名字？
//这些珠子都是你的吗？
VideoUpdate(0, false);
SetDlgLower(85, 0, false);
//小孩：
//那是我爹给我的！
//不许你碰它
EventSetAutoScript(267, 8, "@87E0");
PartyWalkToBlock(33, 102, 0, 2);
WaitEventAutoScriptRun(6, false, false);
RoleSetDirFrame(3, 0, 0);
WaitEventAutoScriptRun(8, false, false);
RoleSetDirFrame(2, 0, 0);
WaitEventAutoScriptRun(6, false, false);
SetDlgLower(3, 0, false);
//咱们打个商量如何？
//你的那些弹珠我很喜欢
//我出钱向你买，可以吗？
EventSetAutoScript(267, 8, "@87E8");
WaitEventAutoScriptRun(4, false, false);
SetDlgUpper(85, 0, false);
//小孩：
//真的！？
VideoUpdate(0, false);
SetDlgLower(3, 0, false);
//真的没骗你，你要多少钱？
VideoUpdate(0, false);
SetDlgUpper(85, 0, false);
//小孩：
//我不要钱，你把你的宝剑给我
//我就把这颗珠子送给你
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//我这是真剑呢，小孩子不能玩
//万一伤到自己怎么办？
VideoUpdate(0, false);
SetDlgUpper(85, 0, false);
//小孩：
//我不管～我想要一把剑很久了
//我要练成绝世武功，出去找我
//爹娘！
VideoUpdate(0, false);
SetDlgLower(9, 0, false);
//那．．这样吧
//我给你一把木剑
VideoUpdate(0, false);
SetDlgUpper(85, 0, false);
//小孩：
//可以～只要是剑就行了
ReplaceAndPause();

NpcMoveToBlock(44, 58, 0, 3);
NpcMoveToBlock(52, 66, 0, 8);

NpcMoveToBlock(50, 62, 0, 3);

