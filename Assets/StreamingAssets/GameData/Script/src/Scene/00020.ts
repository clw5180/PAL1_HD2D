['Event_00020_00002_Trigger'];
PartySetPos(16, 95, 0);
SceneEnter(21);
FadeOut(0);

['Event_00020_00009_Trigger'];
//墓碑上题字："恩师灵月之墓"

['Event_00020_00019_Trigger'];
SetDlgUpper(15, 0, false);
//赵灵儿：
//姥姥～我．．都怪灵儿不好
//没有好好听您的话．．
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//好了．．别难过了
//我想你姥姥也不希望你一直
//这么愁眉不展吧．．
ReplaceAndPause();
SetDlgUpper(17, 0, false);
//赵灵儿：
//姥姥～灵儿就此拜别，您在天
//有灵，保佑孩儿早日找到娘亲
ReplaceAndPause();
//墓碑上题字："姥姥姜氏之墓"

['Event_00020_00004_Trigger'];
EventSetTriggerMode(-1, -1, false, 0);
NpcSetDirFrame(0, 0);
VideoUpdate(0, false);
SetDlgLower(14, 0, false);
//少女：
//好极了，姥姥正好不在
//你跟我进去拿药吧。
NpcSetDirFrame(3, 0);
VideoUpdate(0, false);
NpcSetDirFrame(2, 0);
VideoUpdate(0, false);
SetDlgLower(10, 0, false);
//李逍遥：
//要．．去见观音娘娘吗？
NpcSetDirFrame(0, 0);
VideoUpdate(0, false);
SetDlgUpper(14, 0, false);
//少女：
//呵呵！才不是呢！想拿药还不
//快点，我姥姥最讨厌外人了，
//等她回来就拿不成了。
EventSetAutoScript(20, 4, "@10EA");
WaitEventAutoScriptRun(14, false, false);
EventSetState(-1, 0, 0);

['Event_00020_00007_Trigger'];
//您是少宫主的朋友吗？
ReplaceAndPause();
//平常人是不容易进到水月宫来

['Event_00020_00011_Trigger'];
//今天是灵月宫主的祭日
//老夫人特地前来上香

['Event_00020_00010_Trigger'];
//姥姥：
//唉～　阿玟．．
//灵儿～这个月就满十六了
//咱们两老盼了这久，总算是
//盼到了这一天呀．．
//只可惜．．你比老身先走一步
//看不到这丫头出嫁的模样了
VideoRestore();
//那个叫李逍遥的年青人．．
//看来．．跟灵儿十分有缘
//小俩口也很情投意合的样子
//老身就擅自作主，凑合她们了
//老身来日无多．．只盼日后～
//她们二人能平平安安过日子
//也不枉咱们这多年来的心血
ReplaceAndPause();
//"姥姥全神贯注的在祭拜"

['Scene_00020_Enter'];
EventSetState(222, 0, 0);

['Event_00020_00061_Auto'];
EventAnimate(Direction.Current);
GotoWithProbability(10, "Event_00020_00061_Auto");
EventAnimate(Direction.Southwest);
EventWalkOneStep(-1, -1, -4, 0);
EventAnimate(Direction.Southwest);
EventAnimate(Direction.Southwest);
EventAnimate(Direction.Southwest);
EventAnimate(Direction.Southwest);
EventWalkOneStep(-1, -1, 0, 2);
EventAnimate(Direction.Southwest);
EventAnimate(Direction.Current);
EventAnimate(Direction.Current);
EventWalkOneStep(-1, -1, 4, 0);
EventAnimate(Direction.Current);
EventWalkOneStep(-1, -1, 0, -2);
EventAnimate(Direction.Southeast);
EventAnimate(Direction.Southeast);
EventAnimate(Direction.Southeast);
EventAnimate(Direction.Southeast);
EventAnimate(Direction.Southeast);
EventAnimate(Direction.Southeast);
EventAnimate(Direction.Southeast);
EventAnimate(Direction.Southeast);
EventAnimate(Direction.Southeast);
['@8C2A'];
EventAnimate(Direction.Current);
GotoWithProbability(10, "@8C2A");
EventAnimate(Direction.Northeast);
EventWalkOneStep(-1, -1, 0, -2);
EventAnimate(Direction.Southeast);
EventAnimate(Direction.Southeast);
EventAnimate(Direction.Southeast);
EventAnimate(Direction.Northeast);
EventAnimate(Direction.Northeast);
EventAnimate(Direction.Northeast);
EventAnimate(Direction.Northwest);
EventAnimate(Direction.Northwest);
EventAnimate(Direction.Northwest);
EventAnimate(Direction.Northwest);
EventAnimate(Direction.Northwest);
EventAnimate(Direction.Northeast);
EventWalkOneStep(-1, -1, 4, 0);
EventAnimate(Direction.Northeast);
EventAnimate(Direction.Northeast);
EventAnimate(Direction.Northeast);
EventAnimate(Direction.Northwest);
EventAnimate(Direction.Northwest);
EventAnimate(Direction.Northwest);
EventAnimate(Direction.Northwest);
EventAnimate(Direction.Northwest);
EventAnimate(Direction.Northwest);
EventWalkOneStep(-1, -1, -4, 0);
EventAnimate(Direction.Northwest);
EventAnimate(Direction.Northwest);
EventAnimate(Direction.Northwest);
EventAnimate(Direction.Northwest);
EventAnimate(Direction.Northwest);
EventAnimate(Direction.Current);
EventAnimate(Direction.Current);
EventAnimate(Direction.Current);
EventAnimate(Direction.Current);
EventAnimate(Direction.Northeast);
EventAnimate(Direction.Northeast);
EventAnimate(Direction.Southeast);
EventAnimate(Direction.Southeast);
EventAnimate(Direction.Southeast);
EventAnimate(Direction.Southeast);
EventWalkOneStep(-1, -1, 0, 2);
EventAnimate(Direction.Southwest);
EventAnimate(Direction.Southwest);
EventAnimate(Direction.Southwest);
EventAnimate(Direction.Southwest);
ReplaceAndPauseWithNop("Event_00020_00061_Auto", 0);

['Event_00020_00062_Auto'];
EventAnimate(Direction.Current);
GotoWithProbability(10, "Event_00020_00062_Auto");
EventAnimate(Direction.Southwest);
EventAnimate(Direction.Southwest);
EventAnimate(Direction.Southwest);
EventAnimate(Direction.Southwest);
EventAnimate(Direction.Southwest);
EventAnimate(Direction.Southwest);
EventAnimate(Direction.Northwest);
EventAnimate(Direction.Current);
EventAnimate(Direction.Current);
EventAnimate(Direction.Current);
EventAnimate(Direction.Southwest);
EventAnimate(Direction.Southwest);
EventAnimate(Direction.Northwest);
EventAnimate(Direction.Northwest);
EventAnimate(Direction.Northwest);
EventAnimate(Direction.Northwest);
EventAnimate(Direction.Northwest);
EventAnimate(Direction.Northwest);
EventAnimate(Direction.Northwest);
EventAnimate(Direction.Northwest);
EventAnimate(Direction.Northwest);
EventAnimate(Direction.Northwest);
EventAnimate(Direction.Southwest);
EventAnimate(Direction.Northwest);
EventAnimate(Direction.Southwest);
EventAnimate(Direction.Southwest);
EventAnimate(Direction.Current);
EventAnimate(Direction.Current);
EventAnimate(Direction.Current);
EventAnimate(Direction.Current);
EventAnimate(Direction.Current);
EventAnimate(Direction.Current);
EventAnimate(Direction.Southeast);
EventAnimate(Direction.Southeast);
EventAnimate(Direction.Southeast);
EventAnimate(Direction.Southwest);
EventAnimate(Direction.Southeast);
EventAnimate(Direction.Southeast);
EventAnimate(Direction.Southeast);
EventAnimate(Direction.Southeast);
EventAnimate(Direction.Southeast);
EventAnimate(Direction.Southeast);
EventAnimate(Direction.Southeast);
EventAnimate(Direction.Southeast);
EventAnimate(Direction.Southeast);
['@8C8A'];
EventAnimate(Direction.Current);
GotoWithProbability(10, "@8C8A");
EventAnimate(Direction.Northeast);
EventAnimate(Direction.Northeast);
EventAnimate(Direction.Northeast);
EventAnimate(Direction.Northeast);
EventAnimate(Direction.Northeast);
EventAnimate(Direction.Northeast);
EventAnimate(Direction.Northeast);
EventWalkOneStep(-1, -1, 0, 2);
EventAnimate(Direction.Current);
EventAnimate(Direction.Northeast);
EventAnimate(Direction.Current);
EventAnimate(Direction.Current);
EventAnimate(Direction.Current);
EventAnimate(Direction.Southeast);
EventAnimate(Direction.Southeast);
EventWalkOneStep(-1, -1, 0, 4);
EventAnimate(Direction.Southeast);
EventAnimate(Direction.Southeast);
EventAnimate(Direction.Southeast);
EventAnimate(Direction.Southeast);
EventAnimate(Direction.Southeast);
EventAnimate(Direction.Southeast);
EventAnimate(Direction.Southeast);
EventAnimate(Direction.Current);
EventAnimate(Direction.Northwest);
EventAnimate(Direction.Southeast);
EventAnimate(Direction.Northwest);
EventAnimate(Direction.Current);
EventAnimate(Direction.Current);
EventAnimate(Direction.Current);
EventWalkOneStep(-1, -1, 4, 0);
EventAnimate(Direction.Current);
EventAnimate(Direction.Southwest);
EventAnimate(Direction.Southwest);
EventAnimate(Direction.Southwest);
EventAnimate(Direction.Northeast);
EventAnimate(Direction.Northeast);
EventAnimate(Direction.Current);
EventWalkOneStep(-1, -1, 0, -2);
EventAnimate(Direction.Current);
EventAnimate(Direction.Southwest);
EventWalkOneStep(-1, -1, 0, -4);
EventAnimate(Direction.Northeast);
EventAnimate(Direction.Northeast);
EventAnimate(Direction.Northeast);
EventAnimate(Direction.Northeast);
EventAnimate(Direction.Southeast);
EventAnimate(Direction.Current);
EventAnimate(Direction.Northeast);
EventAnimate(Direction.Northwest);
EventAnimate(Direction.Northeast);
EventAnimate(Direction.Current);
EventWalkOneStep(-1, -1, -4, 0);
EventAnimate(Direction.Current);
EventAnimate(Direction.Current);
EventAnimate(Direction.Northwest);
EventAnimate(Direction.Northwest);
EventAnimate(Direction.Northwest);
EventAnimate(Direction.Northwest);
EventAnimate(Direction.Northwest);
EventAnimate(Direction.Northwest);
EventAnimate(Direction.Northwest);
EventAnimate(Direction.Northwest);
EventAnimate(Direction.Northwest);
EventAnimate(Direction.Southeast);
ReplaceAndPauseWithNop("Event_00020_00062_Auto", 0);

['Event_00020_00007_Auto'];
WaitEventAutoScriptRun(2, false, false);
GotoWithProbability(60, "Event_00020_00007_Auto");
WaitEventAutoScriptRun(2, false, false);
NpcSetFrame(0);
WaitEventAutoScriptRun(4, false, false);
NpcSetFrame(1);
ReplaceAndPauseWithNop("Event_00020_00007_Auto", 0);

['Event_00020_00070_Trigger'];
PlaySound(78);
SetDlgBox(0);
//发现鼠儿果
AddItem(44, 0);
EventSetState(-1, 0, 0);

['Event_00020_00068_Trigger'];
PlaySound(78);
SetDlgBox(0);
//发现龙涎草
AddItem(46, 0);
EventSetState(-1, 0, 0);

