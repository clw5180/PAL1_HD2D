['Event_00026_00003_Trigger'];
//店小二：
//大爷，欢迎光临。住宿、
//休息、吃饭，要什么请跟
//我们掌柜的说。

['Event_00026_00004_Trigger'];
SetDlgUpper(0, 0, false);
//掌柜：
//呵～客官是外地来的吗？
//想必你也是来参加林家大小姐
//的比武招亲大会吧．．
SetDlgLower(0, 0, false);
//李逍遥：
//　　不是不是．．
//我们只是路过此地，想找个地
//方过夜，明天还要继续赶路
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//掌柜：
//这～很抱歉．．
//本店所有的客房都被林家出钱
//包下来了，给外地来报名参加
//比武招亲的人免费住宿
SetDlgLower(0, 0, false);
//李逍遥：
//啊！真的连一间也没有？
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//掌柜：
//是的．．真的很抱歉啊
//如果你有报名，那又另当别论
ReplaceAndPause();
//掌柜：
//呵～真的很抱歉．．

['Event_00026_00005_Trigger'];
SetDlgLower(0, 0, false);
//客人甲：
//来来来，喝酒、喝酒
//这一次的比武招亲
//我是势在必得啊！
VideoUpdate(0, false);
//客人乙：
//少盖了，上次被那林家小姐一
//脚给踹了下来的是谁啊？！
VideoUpdate(0, false);
//客人丙：
//就是说嘛！吹大气儿还不会
//脸红，真有你的。

['Event_00026_00009_Trigger'];
SetDlgLower(0, 0, false);
//客人丁：
//苏州城一到了这个时候
//还真够热闹的。
VideoUpdate(0, false);
//客人戊：
//可不是吗！
//大江南北各个武林高手
//齐聚一堂，不就是为了
//要得到林家小姐嘛！
VideoUpdate(0, false);
//客人丁：
//我看不见得．．来参加的人有
//一半以上可能是为了想要藉着
//林家堡堡主林天南在武林中的
//势力一步登天，或者是要得到
//林家的财产才是真的。

['Event_00026_00012_Trigger'];
//客人：
//怎么搞了半天，大爷我叫的
//酒菜还不来呢？谁不知道大爷
//我是彭门「五虎断门刀」的二
//当家彭霸天吗？
ReplaceAndPause();
//客人：
//呜．．铁打的汉子
//也经不起饿肚皮啊

['Event_00026_00011_Trigger'];
//客人：
//我已经久仰林家小姐的名声
//希望明日能目睹她的庐山真
//面目。

['Event_00026_00013_Trigger'];
//客人：
//我也是第一次来参加林家堡
//的招亲，希望能技压群雄，
//拔得头筹。

['Event_00026_00014_Trigger'];
//赌客：
//呜～　怎么办？把钱给赌光了
//没脸回去见家中妻小

['Event_00026_00015_Trigger'];
SceneEnter(24);
PartySetPos(36, 52, 0);
FadeOut(0);

['Event_00026_00016_Trigger'];
SceneEnter(29);
PartySetPos(31, 51, 1);
FadeOut(0);

['Event_00026_00017_Trigger'];
SceneEnter(27);
PartySetPos(17, 67, 0);
FadeOut(0);

['Event_00026_00018_Trigger'];
SceneEnter(27);
PartySetPos(44, 25, 0);
FadeOut(0);

['Event_00026_00019_Trigger'];
SceneEnter(27);
PartySetPos(19, 30, 0);
FadeOut(0);

['Event_00026_00020_Trigger'];
SceneEnter(28);
PartySetPos(45, 30, 0);
FadeOut(0);

['Event_00026_00021_Trigger'];
SceneEnter(28);
PartySetPos(40, 35, 0);
FadeOut(0);

['Event_00026_00022_Trigger'];
SceneEnter(28);
PartySetPos(35, 40, 0);
FadeOut(0);

['Event_00026_00003_Auto'];
ReplaceAndPause();
GotoWithProbability(10, "Event_00026_00003_Auto");
NpcMoveToBlockMutexLock(30, 35, 0, 2);
ReplaceAndPause();
NpcSetDirFrame(0, 0);
WaitEventAutoScriptRun(7, false, false);
NpcMoveToBlockMutexLock(25, 30, 1, 2);
NpcMoveToBlockMutexLock(23, 32, 1, 2);
NpcMoveToBlockMutexLock(25, 34, 0, 2);
ReplaceAndPause();
EventWalkOneStep(-1, -1, 5, 5);
ReplaceAndPause();
EventWalkOneStep(-1, -1, 3, 3);
ReplaceAndPause();
EventWalkOneStep(-1, -1, 5, 5);
ReplaceAndPause();
EventWalkOneStep(-1, -1, 3, 3);
ReplaceAndPause();
EventWalkOneStep(-1, -1, 5, 5);
ReplaceAndPause();
EventWalkOneStep(-1, -1, 3, 3);
ReplaceAndPause();
EventWalkOneStep(-1, -1, 5, 5);
ReplaceAndPause();
EventWalkOneStep(-1, -1, 3, 3);
ReplaceAndPause();
EventWalkOneStep(-1, -1, 5, 5);
ReplaceAndPause();
EventWalkOneStep(-1, -1, 3, 3);
ReplaceAndPause();
EventWalkOneStep(-1, -1, 5, 5);
ReplaceAndPause();
EventWalkOneStep(-1, -1, 3, 3);
ReplaceAndPause();
EventWalkOneStep(-1, -1, 5, 5);
ReplaceAndPause();
EventWalkOneStep(-1, -1, 3, 3);
ReplaceAndPause();
EventWalkOneStep(-1, -1, 5, 5);
ReplaceAndPause();
EventWalkOneStep(-1, -1, 3, 3);
ReplaceAndPause();
EventWalkOneStep(-1, -1, 5, 5);
ReplaceAndPause();
EventWalkOneStep(-1, -1, 3, 3);
ReplaceAndPause();
EventWalkOneStep(-1, -1, 5, 5);
ReplaceAndPause();
EventWalkOneStep(-1, -1, 3, 3);
ReplaceAndPause();
EventWalkOneStep(-1, -1, 5, 5);
ReplaceAndPause();
EventWalkOneStep(-1, -1, 3, 3);
ReplaceAndPause();
EventWalkOneStep(-1, -1, 5, 5);
EventWalkOneStep(-1, -1, 3, 3);
NpcMoveToBlockMutexLock(30, 42, 0, 2);
NpcMoveToBlockMutexLock(31, 40, 1, 2);
NpcMoveToBlockMutexLock(34, 43, 0, 2);
NpcMoveToBlockMutexLock(32, 44, 1, 2);
['@1BF9'];
ReplaceAndPause();
GotoWithProbability(4, "@1BF9");
WaitEventAutoScriptRun(4, false, false);
NpcMoveToBlockMutexLock(33, 45, 0, 2);
NpcMoveToBlockMutexLock(34, 44, 0, 2);
NpcMoveToBlockMutexLock(31, 41, 0, 2);
NpcMoveToBlockMutexLock(27, 45, 0, 2);
NpcMoveToBlockMutexLock(25, 43, 1, 2);
NpcMoveToBlockMutexLock(22, 46, 1, 2);
NpcMoveToBlockMutexLock(19, 43, 0, 2);
NpcMoveToBlockMutexLock(16, 46, 0, 2);
NpcSetDirFrame(1, 0);
WaitEventAutoScriptRun(3, false, false);
NpcMoveToBlockMutexLock(19, 49, 1, 2);
NpcMoveToBlockMutexLock(28, 40, 1, 2);
NpcMoveToBlockMutexLock(28, 40, 0, 2);
NpcMoveToBlockMutexLock(27, 39, 1, 2);
ReplaceAndPause();
EventWalkOneStep(-1, -1, -5, -5);
ReplaceAndPause();
EventWalkOneStep(-1, -1, -3, -3);
ReplaceAndPause();
EventWalkOneStep(-1, -1, -5, -5);
ReplaceAndPause();
EventWalkOneStep(-1, -1, -3, -3);
ReplaceAndPause();
EventWalkOneStep(-1, -1, -5, -5);
ReplaceAndPause();
EventWalkOneStep(-1, -1, -3, -3);
ReplaceAndPause();
EventWalkOneStep(-1, -1, -5, -5);
ReplaceAndPause();
EventWalkOneStep(-1, -1, -3, -3);
ReplaceAndPause();
EventWalkOneStep(-1, -1, -5, -5);
ReplaceAndPause();
EventWalkOneStep(-1, -1, -3, -3);
ReplaceAndPause();
EventWalkOneStep(-1, -1, -5, -5);
ReplaceAndPause();
EventWalkOneStep(-1, -1, -3, -3);
ReplaceAndPause();
EventWalkOneStep(-1, -1, -5, -5);
ReplaceAndPause();
EventWalkOneStep(-1, -1, -3, -3);
ReplaceAndPause();
EventWalkOneStep(-1, -1, -5, -5);
ReplaceAndPause();
EventWalkOneStep(-1, -1, -3, -3);
ReplaceAndPause();
EventWalkOneStep(-1, -1, -5, -5);
ReplaceAndPause();
EventWalkOneStep(-1, -1, -3, -3);
ReplaceAndPause();
EventWalkOneStep(-1, -1, -5, -5);
ReplaceAndPause();
EventWalkOneStep(-1, -1, -3, -3);
ReplaceAndPause();
EventWalkOneStep(-1, -1, -5, -5);
ReplaceAndPause();
EventWalkOneStep(-1, -1, -3, -3);
ReplaceAndPause();
EventWalkOneStep(-1, -1, -5, -5);
ReplaceAndPause();
EventWalkOneStep(-1, -1, -3, -3);
ReplaceAndPause();
NpcMoveToBlockMutexLock(22, 31, 0, 2);
NpcMoveToBlockMutexLock(14, 38, 1, 2);
WaitEventAutoScriptRun(6, false, false);
NpcMoveToBlockMutexLock(15, 39, 0, 2);
WaitEventAutoScriptRun(12, false, false);
NpcMoveToBlockMutexLock(21, 32, 1, 2);
NpcMoveToBlockMutexLock(22, 33, 1, 2);
NpcMoveToBlockMutexLock(25, 30, 1, 2);
NpcMoveToBlockMutexLock(36, 41, 0, 2);
ReplaceAndPauseWithNop("Event_00026_00003_Auto", 0);

['Event_00026_00005_Auto'];
NpcSetFrame(0);
GotoWithProbability(5, "Event_00026_00005_Auto");
GotoWithProbability(50, "@8B83");
['@8B80'];
NpcSetFrame(1);
WaitEventAutoScriptRun(9, false, false);
ReplaceAndPauseWithNop("Event_00026_00005_Auto", 0);
['@8B83'];
NpcSetFrame(2);
WaitEventAutoScriptRun(7, false, false);
NpcSetFrame(3);
WaitEventAutoScriptRun(16, false, false);
NpcSetFrame(2);
WaitEventAutoScriptRun(6, false, false);
NpcSetFrame(0);
WaitEventAutoScriptRun(4, false, false);
ReplaceAndPauseWithNop("@8B80", 0);

