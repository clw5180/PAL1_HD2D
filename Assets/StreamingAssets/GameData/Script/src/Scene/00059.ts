['Event_00059_00001_Trigger'];
SceneEnter(57);
PartySetPos(33, 37, 0);
FadeOut(0);

['Event_00059_00010_Trigger'];
//和尚：
//阿弥陀佛．．．．
ReplaceAndPause();
//和尚：
//阿弥陀佛．．．．
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//林月如：
//这里的和尚怎么都只会
//说阿弥陀佛

['Event_00059_00015_Trigger'];
NpcSetDirFrame(1, 0);
WaitEventAutoScriptRun(2, false, false);
ReplaceAndPause();
EventSetTriggerMode(-1, -1, false, 2);
SetDlgUpper(0, 0, false);
//智泽：
//这位便是我们方丈大师

['Event_00059_00014_Trigger'];
EventSetDirFrame(59, 15, 1, 0);
VideoUpdate(0, false);
//智修大师：
//阿弥陀佛．．．
//三位施主所为何来？
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//是这样子的～
//我们听说大师您法力高强
//想请大师下山治退尸妖
//替此地村民除害
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//智修大师：
//老衲是佛门中人，从不过问
//外界之俗事，三位请回吧
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//大师此言差矣，出家人降魔
//卫道本天经地义，何以是外
//界的俗事呢？
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//智修大师：
//嗯．．．由此言观之
//施主颇具慧根！
VideoUpdate(0, false);
SetDlgLower(6, 0, false);
//李逍遥：
//不敢当～不敢当～
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//智修大师：
//好～只要施主答应替老衲
//做一件事，老衲就答应你
//下山收妖
VideoUpdate(0, false);
SetDlgLower(3, 0, false);
//李逍遥：
//只要是不伤天害理的事
//我李某人一定办到！
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//智修大师：
//你放心～是做好事
VideoUpdate(0, false);
SetDlgLower(3, 0, false);
//李逍遥：
//那就好办～！
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//智修大师：
//呵呵呵～好～太好了！
VideoRestore();
//智泽，去把剃剪和袈裟拿出来
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//智泽：
//是．．！
EventSetAutoScript(59, 15, "@2C83");
WaitEventAutoScriptRun(16, false, false);
RoleSetDirFrame(2, 0, 0);
WaitEventAutoScriptRun(22, false, false);
RoleSetDirFrame(1, 0, 0);
WaitEventAutoScriptRun(6, false, false);
SetDlgLower(10, 0, false);
//李逍遥：
//大师～莫非您是要．．？
MusicStop(0);
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//智修大师：
//替你剃渡啊！
//你得在我这出家当和尚
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//三人齐声道：
//那有这种事！？　我才不要！
EventSetState(944, 0, 0);
EventSetState(961, 2, 0);
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//智修大师：
//阿弥陀佛～　既然施主答应
//了，就由不得你不依！
WaitEventAutoScriptRun(8, false, false);
//智修大师：
//智杖！　把他们抓住！
SetBattleMusic(Music.侠客行);
Dos_SetBattlefield(FbpDos.南绍_地牢);
BattleStart(28, "@A073", "");
EventSetState(960, 0, 0);
EventSetState(961, 0, 0);
RoleSetDirFrame(1, 0, 0);
PartySetPos(22, 64, 0);
NpcSetDirFrame(3, 0);
BattleEnd();
VideoUpdate(0, false);
//智修大师：
//哦！　何必挣扎呢？
//当和尚只要把头发剃乾净
//就行了，不会有什么痛苦的
VideoUpdate(0, false);
SetDlgLower(5, 0, false);
//李逍遥：
//这是什么条件？我才不干
//我还没娶老婆咧！
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//智修大师：
//愚蠢～愚蠢！皈依我佛的人
//死后才不会下地狱，还可以
//到西方极乐世界，有何不好？
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//您的好意我心领了
//这种好事就留给您自己吧
//这一头发型我自己很满意
//不必麻烦您了～再见！
VideoUpdate(0, false);
PartySetPos(22, 64, 0);
VideoUpdate(0, false);
PartyWalkToBlock(28, 70, 1, 8);
EventSetState(973, 1, 0);
FadeToScene(0, -1);
VideoUpdate(0, false);
SetDlgUpper(6, 0, false);
//啊．．．不劳您相送了
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//智修大师：
//老衲让你进得来出不得！
SetBattleMusic(Music.兵凶战危_2);
BattleStart(35, "@A073", "");
BattleEnd();
PartySetPos(22, 64, 0);
RoleSetDirFrame(1, 0, 0);
PartySetRole(2, 0, 0);
EventSetState(967, 1, 0);
EventSetState(968, 1, 0);
EventSetState(965, 0, 0);
EventSetState(966, 0, 0);
VideoUpdate(0, false);
SetDlgLower(5, 0, false);
//李逍遥：
//你这妖僧．．我踢死你！
VideoUpdate(0, false);
SetDlgLower(11, 0, false);
//赵灵儿：
//逍遥哥哥～等一等！
VideoUpdate(0, false);
EventSetState(-1, 0, 0);
EventSetState(962, 2, 0);
FadeToScene(0, -1);
SetDlgUpper(86, 0, false);
//智泽：
//呜．．．饶命啊．．
//下次不敢了．．
VideoUpdate(0, false);
SetDlgLower(23, 0, false);
//林月如：
//怎么会是这个小和尚！
//刚才那些人都是你变的？
VideoUpdate(0, false);
SetDlgUpper(86, 0, false);
//智泽：
//我乃达摩法师所持佛珠所化
//已经修行九百九十九年了
VideoUpdate(0, false);
SetDlgLower(17, 0, false);
//赵灵儿：
//既然你已有千年的道行
//应该潜心修炼，求渡化之道
//为何自甘堕落，依仗法力
//逼人落发出家，迫害村民！
VideoUpdate(0, false);
SetDlgUpper(86, 0, false);
//智泽：
//我．．我只是让他们当和尚
//又不是逼他们做坏事
//佛经曰：普渡众生
//又曰：人人皆有佛性
//所以我想，如果我能让很多很
//人成为佛门弟子，佛祖看到了
//一定会很感动，就会来接我到
//天界，成为佛．．
VideoUpdate(0, false);
SetDlgLower(10, 0, false);
//李逍遥：
//我的天哪．．
//这是哪门子的修炼方法！
//小和尚．．是谁教你的？
VideoUpdate(0, false);
SetDlgUpper(86, 0, false);
//智泽：
//我我．．我读佛经想到的．．
VideoUpdate(0, false);
SetDlgLower(11, 0, false);
//赵灵儿：
//修业之本在于舍己助人
//佛曰无我乃舍己，佛曰慈悲
//即助人。而你所作所为却背
//道而驰，自毁功德。
//枉费你有千年道行，竟只有
//孩童般的智慧。如此下去只
//怕向佛未果，反而先堕魔道
VideoUpdate(0, false);
EventSetState(962, 0, 0);
EventSetState(963, 1, 0);
WaitEventAutoScriptRun(0, false, false);
PlaySound(93);
WaitEventAutoScriptRun(3, false, false);
SetDlgUpper(86, 0, false);
//智泽：
//啊？．菩萨！你是菩萨！
VideoUpdate(0, false);
SetDlgLower(18, 0, false);
//赵灵儿：
//你、你别这样，我不是菩萨
EventSetDirFrame(59, 18, 0, 1);
VideoUpdate(0, false);
SetDlgUpper(86, 0, false);
//智泽：
//呜．．我太感动了．．
//从来都没有人教过我这些
//道理，求求菩萨收我当弟子
VideoUpdate(0, false);
SetDlgLower(11, 0, false);
//赵灵儿：
//这些道理是我师父
//平时教我的．．
VideoUpdate(0, false);
SetDlgUpper(9, 0, false);
//李逍遥：
//让他将功折罪好了
//我们正要去降伏尸妖
//这小不点也许派得上用场
EventSetDirFrame(59, 18, 0, 0);
VideoUpdate(0, false);
SetDlgUpper(86, 0, false);
//智泽：
//好好好．．．！
//让我跟着您，我知道是谁在
//背后操纵尸妖，我可以帮您
//们找到他
//山下那些尸妖大多是从黑水镇
//北方的乱葬岗来的，那里有一
//座隋朝的将军墓，"赤鬼王"就
//躲在那地底下的血池中，他用
//邪法操纵死尸吸食人血，供他
//修炼魔功
VideoUpdate(0, false);
SetDlgLower(10, 0, false);
//李逍遥：
//乖乖．．这么邪恶的妖魔！
VideoUpdate(0, false);
SetDlgLower(11, 0, false);
//赵灵儿：
//好吧．．既然你有心．．
//从今以后，你就以原形面貌
//跟着我吧。
VideoRestore();
//以后你就叫做"小石头"吧
//我唤你的名字时你再出来
EventSetDirFrame(59, 18, 0, 1);
VideoUpdate(0, false);
SetDlgUpper(86, 0, false);
//智泽：
//　　是．．．
EventSetState(963, 0, 0);
EventSetState(964, 2, 0);
FadeToScene(0, -1);
SetDlgUpper(0, 0, false);
//小石头：
//主人．．请将我配带在身上
//我可以增加您的法力，还可
//以替你抵挡墓穴内的阴气
PartyWalkToBlock(21, 63, 0, 2);
WaitEventAutoScriptRun(2, false, false);
EventSetState(964, 0, 0);
VideoUpdate(0, false);
SetDlgBox(0);
//得到玉佛珠
AddItem(214, 0);
VideoUpdate(0, false);
RoleSetDirFrame(0, 0, 0);
WaitEventAutoScriptRun(6, false, false);
PartyWalkToBlock(22, 64, 0, 2);
VideoUpdate(0, false);
EventSetState(939, 0, 0);
EventSetState(940, 0, 0);
EventSetState(941, 0, 0);
EventSetState(955, 0, 0);
EventSetState(956, 0, 0);
EventSetState(957, 0, 0);
EventSetState(958, 0, 0);
EventSetState(969, 1, 0);
EventSetState(970, 1, 0);
EventSetState(971, 1, 0);
EventSetState(972, 1, 0);
WaitEventAutoScriptRun(8, false, false);
EventSetDirFrame(59, 22, 3, 0);
WaitEventAutoScriptRun(4, false, false);
EventSetDirFrame(59, 23, 3, 0);
WaitEventAutoScriptRun(4, false, false);
SetDlgLower(0, 0, false);
//众人：
//　谢谢三位大侠，我们终于
//　不必再受妖怪的控制了
VideoUpdate(0, false);
SetDlgUpper(1, 0, false);
//李逍遥:
//诸位之中，哪位是江少云？
VideoUpdate(0, false);
EventWalkOneStep(59, 25, -8, -4);
VideoUpdate(0, false);
EventWalkOneStep(59, 25, -8, -4);
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//江少云：
//我就是．．！
VideoUpdate(0, false);
SetDlgUpper(6, 0, false);
//李逍遥：
//呵～　韩家小姐很思念你呢
//赶快回去看她吧！
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//江少云：
//再造之恩．．江某永铭于心
EventSetAutoScript(59, 24, "@2E20");
EventSetAutoScript(59, 25, "@2E20");
EventSetAutoScript(59, 26, "@2E20");
EventSetAutoScript(59, 27, "@2E20");
WaitEventAutoScriptRun(12, false, false);
EventSetDirFrame(59, 22, 2, 0);
WaitEventAutoScriptRun(4, false, false);
EventSetDirFrame(59, 23, 0, 0);
WaitEventAutoScriptRun(4, false, false);
EventSetState(969, 0, 0);
EventSetState(970, 0, 0);
EventSetState(971, 0, 0);
EventSetState(972, 0, 0);
VideoUpdate(0, false);
SetDlgUpper(3, 0, false);
//李逍遥：
//哈！　功德圆满
EventSetState(967, 0, 0);
EventSetState(968, 0, 0);
PartySetRole(1, 2, 3);
RoleSetDirFrame(3, 0, 0);
WaitEventAutoScriptRun(2, false, false);
SceneEnter(58);

['Event_00059_00016_Auto'];
NpcMoveToBlock(24, 66, 0, 8);

['Event_00059_00024_Auto'];
EventAnimate(Direction.Northwest);
GotoWithNop("Event_00059_00024_Auto", 0);

['Event_00059_00029_Trigger'];
PlaySound(78);
SetDlgBox(0);
//发现念珠
AddItem(194, 0);
EventSetState(-1, 0, 0);

['Event_00059_00036_Trigger'];
PlaySound(78);
SetDlgBox(0);
//发现观音符
AddItem(1, 0);
EventSetState(-1, 0, 0);

['Event_00059_00031_Trigger'];
PlaySound(78);
SetDlgBox(0);
//发现驱魔香
AddItem(30, 0);
EventSetState(-1, 0, 0);

