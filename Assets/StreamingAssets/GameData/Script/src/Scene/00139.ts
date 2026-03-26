['Scene_00139_Teleport'];
SceneEnter(118);
PartySetPos(16, 106, 0);
FadeOut(0);

['Event_00139_00001_Trigger'];
SceneEnter(140);
PartySetPos(19, 49, 0);
FadeOut(0);

['Event_00139_00006_Trigger'];
EventSetState(-1, 0, 0);
EventSetPos(3, 12, 85, 0);
PartyWalkToBlock(42, 83, 0, 8);
MusicPlay(Music.危机, false, false);
ViewportMove(0, -4, 28);
SetDlgUpper(53, 0, false);
//毒娘子：
//呵呵～你终于低头来找我了！
VideoUpdate(0, false);
SetDlgLower(48, 0, false);
//彩　依：
//要不是．．不是．．．
VideoUpdate(0, false);
SetDlgUpper(53, 0, false);
//毒娘子：
//你以为～用你炼制的百花仙酿
//就可以解掉我在这男人身上下
//的缠魂丝！？
VideoRestore();
//哼～顶多让他晚几天死罢了
//我早跟你说过：天下间除了我
//没人能救得了他。
VideoRestore();
//你耗掉这么多法力救他，
//只是徒劳无功而已。
VideoRestore();
//原本你的道行还比我高出
//四百年，可是现在你已经
//没有力量对付我了！
VideoUpdate(0, false);
SetDlgLower(48, 0, false);
//彩　依：
//我～求求您．．救他．．
VideoUpdate(0, false);
SetDlgUpper(53, 0, false);
//毒娘子：
//求我！？　呵呵．．
//你也会有这么一天？
VideoRestore();
//哼！这个男人的命我要定了
//以前～我是怕你，但是现在
//你能拿我怎么样？
VideoUpdate(0, false);
SetDlgLower(48, 0, false);
//彩　依：
//我．．　我愿意．．
//用我的命．．换他一命
VideoRestore();
//只要您肯解他身上的毒
//我．．我随你处置。你．．
//你想吃了我．．也可以
VideoUpdate(0, false);
SetDlgUpper(53, 0, false);
//毒娘子：
//哦～！　这男人真的值得
//你为他这样做？
VideoUpdate(0, false);
SetDlgLower(48, 0, false);
//彩　依：
//只．．只要你答应我～救了他
VideoUpdate(0, false);
SetDlgUpper(53, 0, false);
//毒娘子：
//好～　我就成全你！
//这男的从我手中救了你一次
//到头来～你还是得乖乖的送
//上门来！
VideoUpdate(0, false);
EventSetState(2338, 0, 0);
EventSetState(2339, 1, 0);
PlaySound(260);
FadeToScene(2, -1);
EventSetDirFrame(139, 3, 0, 0);
VideoUpdate(0, false);
//蜘蛛精：
//哈～哈～．．不废吹灰之力
//我又可以增加千年的道行！
VideoRestore();
//这次可是你自己自愿的
//我就先吃了你～认命吧！
ViewportMove(0, 14, 8);
SetDlgLower(0, 0, false);
//二人齐声道：
//住手！！
PartyWalkToBlock(43, 81, 1, 8);
PartyWalkToBlock(41, 79, 0, 8);
PartyWalkToBlock(43, 76, 1, 8);
RoleSetDirFrame(1, 0, 0);
RoleSetDirFrame(1, 0, 1);
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//林月如：
//不许动我大嫂一根寒毛！
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//蜘蛛精：
//竟敢来插手本座的事
//连你们一块吃了！！
VideoUpdate(0, false);
EventModifyPos(139, 3, 16, 8);
EventSetDirFrame(139, 3, 0, 1);
WaitEventAutoScriptRun(2, false, false);
EventModifyPos(139, 3, 16, 8);
EventSetDirFrame(139, 3, 0, 0);
WaitEventAutoScriptRun(2, false, false);
EventModifyPos(139, 3, 16, 8);
EventSetDirFrame(139, 3, 0, 1);
WaitEventAutoScriptRun(2, false, false);
EventSetDirFrame(139, 3, 0, 0);
WaitEventAutoScriptRun(0, false, false);
PartySetRole(1, 3, 0);
Dos_SetBattlefield(FbpDos.片尾_插画封面动画);
SetBattleMusic(Music.势如破竹_副本);
BattleStart(42, "", "");
EnemySetScript(38, EnemyScript.TurnStart, "");
MusicPlay(Music.停止播放, false, false);
BattleEnd();
SetDlgUpper(0, 0, false);
//空中传来宏亮的声音：
//孽畜！～休得伤人！
MusicPlay(Music.救黎民, false, false);
EventSetState(2343, 1, 0);
EventSetState(2340, 0, 0);
EventSetState(2341, 0, 0);
EventSetState(0, 2, 0);
EventSetState(0, 2, 0);
ViewportMove(42, 32, -1);
ViewportMove(0, 24, 18);
ViewportMove(0, 0, 0);
EventSetState(2343, 0, 0);
EventSetDirFrame(139, 3, 0, 2);
PlaySound(95);
WaitEventAutoScriptRun(8, false, false);
PlaySound(269);
EventSetDirFrame(139, 3, 0, 3);
FadeToScene(2, -1);
EventSetState(2344, 2, 0);
WaitEventAutoScriptRun(16, false, false);
EventSetAutoScript(139, 8, "@5587");
WaitEventAutoScriptRun(10, false, false);
EventSetAutoScript(139, 8, "");
PartyWalkToBlock(43, 76, 0, 2);
SetDlgUpper(0, 0, false);
//酒剑仙：
//哦？　这畜牲体内居然有
//"雷灵珠"！难怪这么猖狂
MusicStop(1);
VideoUpdate(0, false);
SetDlgLower(3, 0, false);
//李逍遥：
//师父！
EventSetDirFrame(139, 8, 0, 0);
VideoUpdate(0, false);
EventSetDirFrame(139, 8, 3, 0);
VideoUpdate(0, false);
SetDlgUpper(37, 0, false);
//酒剑仙：
//真是乱来！你们这两个小毛头
//叫你们别乱跑，偏要乱跑。
//在我元神离窍时擅自行动
//差一点就出事了！
VideoUpdate(0, false);
SetDlgLower(24, 0, false);
//林月如：
//你．．你不是醉倒了吗？
VideoUpdate(0, false);
SetDlgUpper(37, 0, false);
//酒剑仙：
//什么叫做醉倒呀！？
//喝了酒才是我发功的时候
//我可比你们二人还清醒呢
//．．没搞清楚状况就乱来！
SetDlgLower(24, 0, false);
//林月如：
//．．．．．．．。
VideoUpdate(0, false);
SetDlgLower(3, 0, false);
//李逍遥：
//师父不愧是酒中之剑仙！
SetDlgUpper(37, 0, false);
//酒剑仙：
//少来这套了．．！
//先看看他们的情况要紧
PartySetRole(1, 0, 0);
FadeOut(0);
SceneEnter(141);

['Event_00139_00007_Auto'];
EventModifyPos(-1, -1, 0, 32);
GotoWithNop("Event_00139_00007_Auto", 0);

['Event_00139_00008_Auto'];
EventModifyPos(-1, -1, 0, 16);
EventModifyPos(-1, -1, 0, 16);
EventModifyPos(-1, -1, 0, 16);
EventModifyPos(-1, -1, 0, 16);
EventModifyPos(-1, -1, 0, 16);
EventModifyPos(-1, -1, 0, 16);
EventModifyPos(-1, -1, 0, 16);
EventModifyPos(-1, -1, 0, 16);
EventModifyPos(-1, -1, 0, 16);
EventModifyPos(-1, -1, 0, 10);
EventModifyPos(-1, -1, 0, 4);
EventModifyPos(-1, -1, 0, 2);

