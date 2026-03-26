['Event_00021_00001_Trigger'];
PartySetPos(32, 39, 0);
SceneEnter(20);
FadeOut(0);

['Event_00021_00022_Trigger'];
SetDlgLower(0, 0, false);
//哇．．好清澈的泉水
VideoUpdate(0, false);
Replace();
PlaySound(263);
RoleModifyHPMP(true, 999);
SetDlgCenter(0, false);
//"李逍遥饮下一口灵池中的泉水
//只觉得疲痨一扫而空精神饱满"

['Event_00021_00002_Trigger'];
VideoUpdate(0, false);
EventSetTriggerMode(-1, -1, false, 2);
EventSetTriggerScript(15, 1, "@10AB");
AddItem(213, 0);
SetDlgUpper(11, 0, false);
//赵灵儿：
//让你婶婶服下这颗"紫金丹"，再
//睡上几个时辰就会好起来的
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//仙女姊姊的大恩大德，我．．
//我真不知该如何报答。
VideoUpdate(0, false);
SetDlgUpper(14, 0, false);
//少女：
//嘻嘻嘻．．！
//你真的以为我是仙女？
VideoUpdate(0, false);
SetDlgLower(2, 0, false);
//李逍遥：
//难道．．你．．
//你是菩萨娘娘！！
SetDlgUpper(14, 0, false);
//少女：
//呵呵～怎么可能嘛～
//我可是有名字的，不要一直
//仙女、菩萨的这样叫人家
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//那～姑娘的芳名是？
VideoUpdate(0, false);
SetDlgUpper(11, 0, false);
//少女：
//我叫赵灵儿～你呢？
SetDlgLower(1, 0, false);
//李逍遥：
//敝姓李，名逍遥
VideoUpdate(0, false);
SetDlgUpper(14, 0, false);
//赵灵儿：
//刚才你好笨喔～只用一点
//小法术就把你吓得团团转
//喂．．你几岁啦？
SetDlgLower(1, 0, false);
//李逍遥：
//我今年十九。
VideoUpdate(0, false);
SetDlgUpper(14, 0, false);
//赵灵儿：
//你还比我大三岁哩！
//那．．你应该比较知道
//外头有什么新鲜好玩的？
SetDlgLower(6, 0, false);
//李逍遥：
//啊．．这．．
VideoUpdate(0, false);
SetDlgUpper(17, 0, false);
//赵灵儿：
//说给我听嘛～人家已经不是
//小孩子了，姥姥还是不许我
//到外头去，每天在宫内修炼
//都快闷死了。
VideoUpdate(0, false);
SetDlgLower(3, 0, false);
//李逍遥：
//那．．下回有机会我再陪你到
//城里头逛逛庙会
SetDlgUpper(12, 0, false);
//赵灵儿：
//嘻！你可不能赖皮喔．．
//我们来打勾勾！
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//好！打勾勾，赖皮的是小狗
EventSetState(349, 2, 0);
ReplaceAndPause();
SetDlgUpper(14, 0, false);
//赵灵儿：
//不许赖皮喔．．

['Event_00021_00008_Trigger'];
MusicPlay(Music.惊, false, false);
EventSetTriggerMode(-1, -1, false, 0);
NpcSetDirFrame(2, 0);
EventWalkOneStep(-1, -1, 8, -4);
VideoUpdate(0, false);
EventWalkOneStep(-1, -1, 8, -4);
PartySetPos(16, 94, 1);
RoleMoveOneStep(16, -8, 0);
VideoUpdate(0, false);
RoleMoveOneStep(16, -8, 0);
VideoUpdate(0, false);
SetDlgUpper(54, 0, false);
//小子！你怎么进来的？
SetDlgLower(2, 0, false);
//李逍遥：
//哇．．．我．．我．．。
EventSetDirFrame(21, 2, 0, 0);
EventSetPos(21, 2, 632, 1444);
VideoUpdate(0, false);
EventWalkOneStep(21, 2, -16, 8);
VideoUpdate(0, false);
EventWalkOneStep(21, 2, -16, 8);
VideoUpdate(0, false);
EventWalkOneStep(21, 2, -16, 8);
VideoUpdate(0, false);
EventWalkOneStep(21, 2, -16, 8);
VideoUpdate(0, false);
EventWalkOneStep(21, 2, -16, 8);
VideoUpdate(0, false);
EventWalkOneStep(21, 2, -16, 8);
VideoUpdate(0, false);
EventWalkOneStep(21, 2, -8, 4);
VideoUpdate(0, false);
EventWalkOneStep(21, 2, -8, 4);
EventSetDirFrame(21, 2, 3, 0);
VideoUpdate(0, false);
EventWalkOneStep(21, 2, 16, 8);
VideoUpdate(0, false);
EventSetDirFrame(21, 2, 0, 0);
VideoUpdate(0, false);
SetDlgLower(17, 0, false);
//姥姥～你不要为难他
//他不是坏人．．
VideoUpdate(0, false);
SetDlgUpper(54, 0, false);
//你怎么知道他不是坏人？
//灵儿！我告诉你多少次了
//不可以让外人到岛上来
VideoUpdate(0, false);
SetDlgLower(11, 0, false);
//可是～师父说过，百善孝为先
//他为婶婶来此求药，他是好人
VideoUpdate(0, false);
SetDlgUpper(54, 0, false);
//外面的人心险恶，你一点也不
//知道，你师父生前将你托付给
//我，就是要我好好的保护你，
//万一你有任何闪失，你叫老身
//如何向你死去的师父和你爹娘
//交待？
VideoUpdate(0, false);
SetDlgLower(17, 0, false);
//可～可是．．他．．
VideoUpdate(0, false);
SetDlgLower(10, 0, false);
//李逍遥：
//老婆婆．．请你不要责怪她
//我马上离开这里就是了
SetDlgUpper(54, 0, false);
//离开？！
//水月宫岂能由你来去自如的！
PlaySound(212);
NpcSetFrame(12);
FadeToScene(0, -1);
SetDlgUpper(54, 0, false);
//　哼、留你不得！！
VideoUpdate(0, false);
RoleMoveOneStep(8, -4, 0);
VideoUpdate(0, false);
RoleMoveOneStep(8, -4, 0);
WaitEventAutoScriptRun(3, false, false);
HeroSetSprite(0, Sprite.躺李逍遥, true);
RoleSetDirFrame(0, 12, 0);
VideoUpdate(0, false);
PlaySound(93);
//　哇～　　妖怪．．．
VideoUpdate(0, false);
EventModifyPos(21, 2, 16, -8);
VideoUpdate(0, false);
SetDlgLower(18, 0, false);
//　　　姥姥！　不要！！
SetDlgUpper(54, 0, false);
//这小子能通过岛上迷阵进到这
//里来，一旦放他回去，水月宫
//的所在不就全都暴露了！
VideoUpdate(0, false);
EventSetDirFrame(21, 2, 2, 0);
WaitEventAutoScriptRun(8, false, false);
EventSetDirFrame(21, 2, 3, 0);
VideoUpdate(0, false);
EventSetDirFrame(21, 2, 0, 0);
WaitEventAutoScriptRun(4, false, false);
SetDlgLower(17, 0, false);
//是．．是人家带他进来的嘛～
VideoUpdate(0, false);
SetDlgLower(15, 0, false);
//姥姥～人家他是来求药医治
//亲人的病呢，您就放过他嘛～
SetDlgUpper(54, 0, false);
//三言两语就把你骗住了！？
VideoRestore();
//你是怎么答应他的？
VideoUpdate(0, false);
SetDlgLower(17, 0, false);
//因为．．他．．把人家的～
WaitEventAutoScriptRun(5, false, false);
EventSetDirFrame(21, 2, 0, 13);
VideoUpdate(0, false);
MusicStop(1);
SetDlgLower(19, 0, false);
//人家的．．所以．．所以
//人家才．．才答应他嘛～
SetDlgUpper(54, 0, false);
//这小子对你做了什么！？
WaitEventAutoScriptRun(8, false, false);
EventSetDirFrame(21, 2, 3, 0);
WaitEventAutoScriptRun(6, false, false);
EventWalkOneStep(21, 2, 4, 2);
WaitEventAutoScriptRun(2, false, false);
EventWalkOneStep(21, 2, 4, 2);
WaitEventAutoScriptRun(0, false, false);
EventWalkOneStep(21, 2, 4, 2);
WaitEventAutoScriptRun(0, false, false);
EventWalkOneStep(21, 2, 4, 2);
WaitEventAutoScriptRun(0, false, false);
EventWalkOneStep(21, 2, 4, 2);
WaitEventAutoScriptRun(0, false, false);
EventWalkOneStep(21, 2, 4, 2);
WaitEventAutoScriptRun(0, false, false);
EventWalkOneStep(21, 2, 4, 2);
WaitEventAutoScriptRun(0, false, false);
EventWalkOneStep(21, 2, 4, 2);
WaitEventAutoScriptRun(5, false, false);
EventSetDirFrame(21, 2, 0, 13);
WaitEventAutoScriptRun(6, false, false);
EventSetDirFrame(21, 2, 0, 12);
WaitEventAutoScriptRun(4, false, false);
SetDlgLower(19, 0, false);
//今天人家在灵池沐浴时他．．
//他～　人家才答应．．说～
VideoUpdate(0, false);
SetDlgUpper(54, 0, false);
//混帐东西！！
NpcSetDirFrame(2, 0);
FadeToScene(2, -1);
SetDlgUpper(54, 0, false);
//小子！你给我站起来！
VideoUpdate(0, false);
HeroSetSprite(0, Sprite.李逍遥, true);
RoleSetDirFrame(0, 0, 0);
VideoUpdate(0, false);
PlaySound(51);
SetDlgUpper(0, 0, false);
//　　　　啊～是！
NpcSetDirFrame(3, 0);
WaitEventAutoScriptRun(3, false, false);
NpcSetDirFrame(0, 0);
WaitEventAutoScriptRun(5, false, false);
SetDlgUpper(54, 0, false);
//你好大的狗胆哪！
//竟敢欺负我宝贝的灵儿？
SetDlgLower(10, 0, false);
//李逍遥：
//那．．纯属意外．．意外！
VideoUpdate(0, false);
SetDlgUpper(54, 0, false);
//我给你两条路选！一是娶灵儿
//为妻，永远不得离开仙灵岛。
//二是～留下一双手一条舌头让
//你永远无法说出水月宫的秘密
VideoUpdate(0, false);
RoleMoveOneStep(-16, 8, 0);
VideoUpdate(0, false);
RoleMoveOneStep(-16, 8, 0);
VideoUpdate(0, false);
SetDlgLower(2, 0, false);
//李逍遥：
//那～　没第三条路了吗？
VideoUpdate(0, false);
NpcSetDirFrame(2, 0);
VideoUpdate(0, false);
SetDlgUpper(54, 0, false);
//要我现在就吃了你也行！
VideoUpdate(0, false);
SetDlgLower(10, 0, false);
//李逍遥：
//　我娶．．我娶！
MusicStop(1);
FadeOut(3);
MusicPlay(Music.盟誓, false, false);
EventSetState(343, 0, 0);
EventSetState(344, 1, 0);
EventSetState(345, 1, 0);
HeroSetSprite(0, Sprite.空空如也, true);
RoleSetDirFrame(0, 0, 0);
PartySetPos(37, 71, 0);
VideoFadeAndUpdate(1);
SetDlgLower(7, 0, false);
//李逍遥：
//我一定得想办法逃出去．．
//你．．能不能帮我？
VideoUpdate(0, false);
SetDlgUpper(11, 0, false);
//那．．你还会不会再回来？
SetDlgLower(8, 0, false);
//李逍遥：
//开玩笑！？
//要是跟一只会吃人的老妖怪住
//在一起，有几条命也不够用！
VideoRestore();
//你呢？　你难道不会害怕吗？
//如果你肯，我可以带你一起走
VideoUpdate(0, false);
SetDlgUpper(11, 0, false);
//不会啦～那是姥姥吓你的！
//从小就是姥姥和师父把我带大
//的。姥姥虽然有时看起来很凶
VideoRestore();
//但是．．只要你跟她相处久了
//你会发现其实她对人很好
VideoUpdate(0, false);
SetDlgLower(8, 0, false);
//李逍遥：
//不不．．我若不把灵药带回去
//婶婶就活不成了
VideoRestore();
//况且～我还年轻
//要我一辈子永远呆在这鬼地方
//这一生不就玩完了？
VideoUpdate(0, false);
SetDlgUpper(15, 0, false);
//．．．．．．．．．
VideoRestore();
//明天．．是师父的忌辰
//一大早姥姥会到师父坟前上香
VideoRestore();
//趁那时候一口气跑到海边
//姥姥应该不会发现．．
VideoUpdate(0, false);
EventSetDirFrame(21, 4, 2, 0);
VideoUpdate(0, false);
EventSetDirFrame(21, 4, 1, 0);
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//真的！？　太好了！
VideoUpdate(0, false);
SetDlgLower(3, 0, false);
//李逍遥：
//谢谢～谢谢你！
EventSetState(347, 1, 0);
EventSetState(345, 0, 0);
VideoUpdate(0, false);
SetDlgLower(3, 0, false);
//李逍遥：
//大恩大德，我李逍遥永世不忘
WaitEventAutoScriptRun(10, false, false);
SetDlgUpper(15, 0, false);
//不忘．．．．！？
EventSetState(347, 0, 0);
EventSetState(345, 1, 0);
WaitEventAutoScriptRun(8, false, false);
EventSetDirFrame(21, 3, 0, 2);
WaitEventAutoScriptRun(10, false, false);
SetDlgUpper(0, 0, false);
//赵灵儿低头吟唱着：
//$08既不回头　何必不忘
//既然无缘　何须誓言
//今日种种　似水无痕
//明夕何夕　君已陌路．．．
WaitEventAutoScriptRun(4, false, false);
EventSetAutoScript(21, 3, "@13D4");
WaitEventAutoScriptRun(24, false, false);
//$02"赵灵儿说着说着就哭了起来"
EventSetAutoScript(21, 4, "@15F1");
WaitEventAutoScriptRun(10, false, false);
EventSetState(345, 0, 0);
EventSetState(346, 1, 0);
WaitEventAutoScriptRun(5, false, false);
SetDlgLower(1, 0, false);
//李逍遥：
//你不要这样嘛～　我．．
//我既然答应说要娶你
//就一定说话算话！
VideoRestore();
//等我婶婶病好了，我请她老人
//家作主，正式上门来提亲！
VideoUpdate(0, false);
EventSetDirFrame(21, 3, 0, 12);
WaitEventAutoScriptRun(6, false, false);
SetDlgUpper(19, 0, false);
//可当真．．？
WaitEventAutoScriptRun(6, false, false);
EventSetDirFrame(21, 5, 0, 1);
EventSetDirFrame(21, 3, 0, 13);
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//句句出自肺腑．．相信我
WaitEventAutoScriptRun(8, false, false);
EventSetState(344, 0, 0);
EventSetDirFrame(21, 5, 0, 2);
WaitEventAutoScriptRun(15, false, false);
TogglePaletteTime(false);
FadeOut(3);
Dos_FadeFbp(FbpDos.黑底屏, 0);
EventSetState(346, 0, 0);
EventSetState(349, 0, 0);
EventSetState(274, 0, 0);
EventSetStateSequence(21, 19, 21, 0);
EventSetStateSequence(20, 10, 16, 2);
EventSetState(134, 0, 0);
EventSetDirFrame(21, 51, 0, 0);
EventSetAutoScript(21, 51, "");
PartySetPos(36, 72, 0);
HeroSetSprite(0, Sprite.李逍遥, true);
EventSetState(348, 1, 0);
SetDlgCenter(0, false);
//"一夜过去．．"~40
SetPaletteTime(0);
FadeIn(0);
Delay(30);
RoleSetDirFrame(0, 0, 0);
FadeToScene(3, -1);
WaitEventAutoScriptRun(6, false, false);
EventSetDirFrame(21, 7, 0, 1);
WaitEventAutoScriptRun(10, false, false);
SetDlgUpper(0, 0, false);
//逍遥哥哥．．．．~70
WaitEventAutoScriptRun(6, false, false);
RoleSetDirFrame(3, 0, 0);
WaitEventAutoScriptRun(8, false, false);
SetDlgLower(0, 0, false);
//李逍遥：
//$07天亮了．．我必须走了。~60
FadeOut(3);
EventSetState(348, 0, 0);
EventSetState(343, 2, 0);
EventSetTriggerScript(21, 2, "@12AA");
EventSetPos(21, 2, 544, 1504);
EventSetDirFrame(21, 2, 0, 0);
PartySetPos(16, 94, 1);
RoleSetDirFrame(2, 0, 0);
VideoUpdate(0, true);
SetDlgLower(1, 0, false);
//李逍遥：
//$02灵儿～ 等我．．
//我一定会尽快回来接你
SetDlgUpper(11, 0, false);
//嗯～
VideoUpdate(0, false);
SetDlgUpper(11, 0, false);
//逍遥哥哥．．保重～

['Event_00021_00009_Trigger'];
EventSetTriggerMode(-1, -1, false, 2);
RoleSetDirFrame(2, 0, 0);
VideoUpdate(0, false);
MusicPlay(Music.情牵, false, false);
SetDlgLower(13, 0, false);
//姥姥！！　姥姥．．
//您不能死．．不能死啊．．
WaitEventAutoScriptRun(8, false, false);
SetDlgUpper(0, 0, false);
//唉．．十年了．．终究躲不过
VideoUpdate(0, false);
//灵儿．．．姥姥．．
//不能再．．保护你了
VideoUpdate(0, false);
//以后．．你自己一个人．．
//千万要坚强．．
VideoUpdate(0, false);
SetDlgLower(13, 0, false);
//不要．．灵儿不要．．
//您要是死了，您叫灵儿怎么办
WaitEventAutoScriptRun(8, false, false);
SetDlgUpper(77, 0, false);
//小伙子．．！
SetDlgLower(2, 0, false);
//唔～我！？
VideoUpdate(0, false);
SetDlgUpper(77, 0, false);
//我已经．．活不成了
//以后～　灵儿就托付给你了
VideoUpdate(0, false);
SetDlgLower(10, 0, false);
//李逍遥：
//给．．给我！？
VideoUpdate(0, false);
SetDlgUpper(77, 0, false);
//黑苗族的人不可能就此罢休
//十年来．．他们千方百计．．
//就是要找到灵儿
VideoRestore();
//以后．．你可要好好保护她
//不然我做鬼也不饶你！
VideoUpdate(0, false);
SetDlgLower(10, 0, false);
//李逍遥：
//好好．．我明白．．
//您安心的去吧
VideoUpdate(0, false);
//"李逍遥心想：惨啦．．"
//"这下子可惹个大麻烦上身了"
VideoUpdate(0, false);
SetDlgUpper(77, 0, false);
//还有．．你要带灵儿回故乡
//找到她的娘亲的下落
SetDlgLower(11, 0, false);
//娘还在人世！？
VideoUpdate(0, false);
SetDlgUpper(77, 0, false);
//嗯．．．．你师父生前曾回
//苗疆打听过夫人的下落．．
VideoRestore();
//后来打听到．．大理的白苗
//族有你娘的衣冠坟和石像，
//但从没有人见过夫人的遗体
VideoRestore();
//也许．．可能只是也许．．
//不管夫人是生是死．．至少
//这是你为人子女应尽的孝道
//也是老身最后的一桩心愿．．
WaitEventAutoScriptRun(6, false, false);
EventSetDirFrame(21, 10, 0, 0);
VideoUpdate(0, false);
SetDlgLower(15, 0, false);
//是．．孩儿遵命．．
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//"说完．．姥姥便断气了．．"
WaitEventAutoScriptRun(5, false, false);
RoleSetDirFrame(3, 0, 0);
WaitEventAutoScriptRun(6, false, false);
RoleSetDirFrame(0, 0, 0);
WaitEventAutoScriptRun(5, false, false);
RoleSetDirFrame(3, 0, 0);
VideoUpdate(0, false);
RoleSetDirFrame(2, 0, 0);
WaitEventAutoScriptRun(4, false, false);
SetDlgLower(0, 0, false);
//李逍遥：
//别难过了．．先把她们安葬吧
EventSetState(-1, 0, 0);
EventSetState(351, 0, 0);
EventSetState(352, 0, 0);
EventSetStateSequence(21, 13, 18, 0);
EventSetTriggerScript(15, 1, "@13B5");
EventSetTriggerScript(6, 9, "@0C90");
EventSetState(57, 0, 0);
EventSetState(60, 2, 0);
EventSetState(61, 2, 0);
EventSetState(62, 2, 0);
EventSetPos(4, 16, 1128, 1624);
EventSetPos(4, 17, 1184, 1616);
EventSetPos(4, 18, 1168, 1704);
EventSetDirFrame(4, 16, 0, 0);
EventSetDirFrame(4, 17, 0, 0);
EventSetDirFrame(4, 18, 1, 0);
EventSetTriggerScript(4, 16, "@0A9F");
EventSetTriggerScript(4, 17, "@0A9F");
EventSetTriggerScript(4, 18, "@0A9F");
EventSetTriggerScript(5, 9, "@0D64");
EventSetPos(5, 9, 1376, 944);
EventSetDirFrame(5, 9, 0, 0);
EventSetAutoScript(5, 9, "");
EventSetTriggerScript(5, 1, "@0D3E");
EventSetPos(5, 1, 1360, 952);
EventSetAutoScript(5, 1, "Event_00002_00026_Auto");
EventSetStateSequence(5, 10, 18, 0);
EventSetAutoScript(4, 16, "");
EventSetAutoScript(4, 17, "Event_00041_00003_Auto");
EventSetAutoScript(4, 18, "Event_00041_00003_Auto");
EventSetTriggerMode(4, 16, true, 2);
EventSetTriggerMode(4, 17, true, 2);
EventSetTriggerMode(4, 18, true, 2);
SceneSetScript(20, "@1330", "");
FadeOut(0);
SceneEnter(20);

['Event_00021_00012_Trigger'];
EventSetState(-1, 0, 0);
MusicPlay(Music.身陷囹圄, false, false);
EventSetState(351, 2, 0);
PartySetRole(1, 2, 0);
RoleMoveOneStep(8, -4, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(8, -4, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(8, -4, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(8, -4, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(8, -4, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(8, -4, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(8, -4, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(8, -4, 0);
WaitEventAutoScriptRun(0, false, false);
SetDlgLower(2, 0, false);
//李逍遥：
//天啊！好惨．．
RoleMoveOneStep(8, -4, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(8, -4, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(8, -4, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(8, -4, 0);
WaitEventAutoScriptRun(2, false, false);
RoleSetDirFrame(3, 0, 0);
WaitEventAutoScriptRun(5, false, false);
RoleSetDirFrame(2, 0, 0);
WaitEventAutoScriptRun(0, false, false);
RoleSetDirFrame(1, 0, 0);
WaitEventAutoScriptRun(4, false, false);
RoleMoveOneStep(-8, -4, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(-8, -4, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(-8, -4, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(-8, -4, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(-8, -4, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(-8, -4, 0);
WaitEventAutoScriptRun(0, false, false);
RoleSetDirFrame(1, 0, 0);
RoleSetDirFrame(1, 0, 1);
WaitEventAutoScriptRun(0, false, false);
SetDlgCenter(0, false);
//"二人环顾四周，只见水月宫内"
//"众人皆倒卧於血泊之中，显然"
//"全都遭到苗人的毒手"
RoleSetDirFrame(2, 0, 1);
VideoUpdate(0, false);
SetDlgLower(18, 0, false);
//．．姥姥！
PartySetRole(1, 0, 0);
EventSetDirFrame(21, 2, 2, 0);
EventSetState(343, 1, 0);
EventSetPos(21, 2, 842, 1352);
EventSetAutoScript(21, 2, "@1355");
WaitEventAutoScriptRun(8, false, false);
RoleSetDirFrame(2, 0, 0);
WaitEventAutoScriptRun(12, false, false);

['Event_00021_00013_Trigger'];
SetDlgCenter(0, false);
//此人已死．．

['Event_00021_00019_Trigger'];
//善哉．．善哉．．
//水月宫乃清修之地，不欢迎外
//人，施主取药后就请马上离开

['Event_00021_00020_Trigger'];
//好久没见到少宫主这么开心了
//少宫主自幼就在水月宫里长大
//从来都没有一个玩伴，也怪可
//怜的．．

['Event_00021_00021_Trigger'];
//唉．．少宫主真是的
//怎么可以让陌生人进来呢
ReplaceAndPause();
//唉唉．．天意．．
//水月宫近日必有凶劫

['Event_00021_00023_Trigger'];
Call("@8E99", 0, 0);
SetDlgBox(0);
//打开箱子，取得三张观音符
AddItem(1, 3);
ReplaceAndPause();
SetDlgBox(0);
//一个空箱子．．
ReplaceAndPause();
SetDlgBox(0);
//箱子底下发现一柄苗刀
AddItem(119, 0);
ReplaceAndPause();
SetDlgBox(0);
//箱子里什么都没有

['Event_00021_00004_Auto'];
NpcMoveToBlockMutexLock(38, 73, 0, 2);
WaitEventAutoScriptRun(3, false, false);
NpcSetDirFrame(3, 0);
WaitEventAutoScriptRun(4, false, false);
NpcMoveToBlockMutexLock(37, 74, 0, 2);
NpcSetDirFrame(3, 0);
ReplaceAndPause();
NpcSetDirFrame(2, 0);
WaitEventAutoScriptRun(4, false, false);
NpcMoveToBlockMutexLock(37, 73, 1, 2);
ReplaceAndPause();
NpcSetDirFrame(3, 0);

['Event_00021_00024_Auto'];
NpcSetFrame(1);
['Event_00021_00025_Auto'];
NpcSetFrame(2);
['Event_00021_00027_Auto'];
NpcSetFrame(3);
GotoWithNop("Event_00021_00024_Auto", 0);

['Event_00021_00053_Trigger'];
PlaySound(78);
SetDlgBox(0);
//发现行军丹
AddItem(40, 0);
EventSetState(-1, 0, 0);

['Event_00021_00052_Trigger'];
PlaySound(78);
SetDlgBox(0);
//发现金创药
AddItem(41, 0);
EventSetState(-1, 0, 0);

