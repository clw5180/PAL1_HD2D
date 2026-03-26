['Event_00033_00001_Trigger'];
SceneEnter(24);
PartySetPos(24, 30, 0);
FadeOut(0);

['Event_00033_00002_Trigger'];
SceneEnter(35);
PartySetPos(44, 86, 1);
FadeOut(0);

['Event_00033_00008_Trigger'];
//林家家仆：
//小姐好厉害喔！

['Event_00033_00009_Trigger'];
//林家家仆：
//这男的功夫好菜！

['Event_00033_00010_Trigger'];
//林家家仆：
//我们堡主亲传的剑法果然厉害

['Event_00033_00011_Trigger'];
//林家家仆：
//这些兴致勃勃的年轻人真可怜
//根本不是我们家小姐的对手。

['Event_00033_00012_Trigger'];
//林家家仆：
//小姐加油！　啊．．不对
//每次小姐都赢，这比武招亲
//何时才会有个结果出来？

['Event_00033_00006_Trigger'];
EventSetTriggerMode(-1, -1, false, 2);
SetDlgLower(1, 0, false);
//李逍遥：
//咦，这不是刘兄吗？
VideoUpdate(0, false);
SetDlgUpper(40, 0, false);
//刘晋元：
//李兄！你怎么也在这里？
//难不成你是来参加招亲！
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//我只是看到这里热闹非常
//凑过来瞧瞧罢了。
VideoRestore();
//刘兄，你怎么不上去试试？
VideoUpdate(0, false);
SetDlgUpper(40, 0, false);
//刘晋元：
//李兄～您别挖苦我了．．
//我若有学过那么一点点武功
//早就向月如表妹求亲了
SetDlgLower(1, 0, false);
//李逍遥：
//此话怎讲？
//刘兄温文有礼又长得一表人才
//你那什么月如表妹若看不上你
//那真是没啥眼光
VideoUpdate(0, false);
SetDlgUpper(40, 0, false);
//刘晋元：
//嘘．．别让台上听到了
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//哦？莫非台上的就是
//刘兄的月如表妹？
VideoRestore();
//嘿．．能令刘兄如此挂意
//应该是位美人啰？
VideoUpdate(0, false);
RoleSetDirFrame(1, 0, 0);
WaitEventAutoScriptRun(6, false, false);
SetDlgLower(3, 0, false);
//李逍遥：
//我看看．．
//哗～打得不错嘛！
RoleSetDirFrame(1, 0, 1);
WaitEventAutoScriptRun(2, false, false);
ViewportMove(-2, -1, 72);
WaitEventAutoScriptRun(20, false, false);
EventSetAutoScript(33, 3, "");
EventSetAutoScript(33, 5, "");
EventSetDirFrame(33, 3, 0, 2);
EventSetDirFrame(33, 5, 0, 0);
EventModifyPos(33, 3, 16, 8);
VideoUpdate(0, false);
PlaySound(7);
EventSetDirFrame(33, 3, 0, 11);
VideoUpdate(0, false);
EventSetDirFrame(33, 5, 0, 3);
VideoUpdate(0, false);
PlaySound(91);
EventModifyPos(33, 5, 8, 0);
VideoUpdate(0, false);
EventSetDirFrame(33, 5, 0, 4);
EventModifyPos(33, 5, 8, 0);
VideoUpdate(0, false);
PlaySound(189);
EventModifyPos(33, 5, 8, 2);
VideoUpdate(0, false);
EventModifyPos(33, 5, 8, 4);
VideoUpdate(0, false);
EventModifyPos(33, 5, 8, 6);
VideoUpdate(0, false);
EventModifyPos(33, 5, 8, 8);
VideoUpdate(0, false);
EventModifyPos(33, 5, 8, 10);
VideoUpdate(0, false);
EventSetDirFrame(33, 5, 0, 5);
EventModifyPos(33, 5, 8, 12);
VideoUpdate(0, false);
EventModifyPos(33, 5, 8, 14);
VideoUpdate(0, false);
EventModifyPos(33, 5, 8, 16);
EventModifyPos(33, 6, 16, -8);
EventSetDirFrame(33, 6, 0, 0);
EventModifyPos(33, 15, 32, -16);
EventSetDirFrame(33, 15, 0, 0);
EventModifyPos(33, 22, 16, -8);
EventSetDirFrame(33, 22, 0, 0);
VideoUpdate(0, false);
EventSetState(550, 0, 0);
HeroSetSprite(0, Sprite.压倒逍遥, true);
RoleSetDirFrame(0, 0, 0);
PlaySound(92);
WaitEventAutoScriptRun(2, false, false);
RoleSetDirFrame(0, 1, 0);
WaitEventAutoScriptRun(0, false, false);
PlaySound(90);
EventSetDirFrame(33, 3, 0, 0);
WaitEventAutoScriptRun(8, false, false);
EventSetState(548, 0, 0);
EventSetState(549, 2, 0);
WaitEventAutoScriptRun(4, false, false);
SetDlgUpper(25, 0, false);
//林月如：
//　　哼！真没用
WaitEventAutoScriptRun(2, false, false);
EventSetDirFrame(33, 4, 0, 0);
WaitEventAutoScriptRun(4, false, false);
EventSetDirFrame(33, 4, 3, 0);
VideoUpdate(0, false);
EventSetDirFrame(33, 4, 2, 0);
WaitEventAutoScriptRun(4, false, false);
EventSetDirFrame(33, 4, 3, 0);
WaitEventAutoScriptRun(2, false, false);
SetDlgUpper(23, 0, false);
//林月如：
//喂！　还有哪个欠揍的
//上来呀？！
WaitEventAutoScriptRun(10, false, false);
EventSetDirFrame(33, 4, 0, 0);
VideoUpdate(0, false);
EventSetDirFrame(33, 4, 1, 0);
EventSetAutoScript(33, 4, "@1FB7");
WaitEventAutoScriptRun(8, false, false);
EventSetAutoScript(33, 4, "");
SetDlgLower(22, 0, false);
//林月如：
//爹！这些家伙没有一个像样的
//一点也不好玩，我们回去算了
VideoUpdate(0, false);
SetDlgUpper(64, 0, false);
//林天南：
//如儿！你出手未免太重了吧
//挑擂台的不是被你折断手
//就是打瞎眼，谁还敢上来？
VideoUpdate(0, false);
SetDlgLower(22, 0, false);
//林月如：
//又怪我？我是女孩子耶
//是这些臭男生太没用！
VideoUpdate(0, false);
SetDlgUpper(64, 0, false);
//林天南：
//爹三番两次替你找机会让你挑
//选丈夫，费尽多少心思？你从
//没有一次认真过
VideoUpdate(0, false);
EventSetDirFrame(33, 4, 3, 0);
VideoUpdate(0, false);
SetDlgLower(22, 0, false);
//林月如：
//我才没有呢，你自己瞧！
//台下那些男生全部都畏畏
//缩缩的，怎配做林家女婿？
ViewportMove(8, 4, 16);
WaitEventAutoScriptRun(2, false, false);
EventSetAutoScript(33, 4, "@1FBA");
EventSetState(550, 1, 0);
EventSetDirFrame(33, 5, 0, 6);
EventSetLayer(33, 5, 0);
RoleSetDirFrame(0, 2, 0);
WaitEventAutoScriptRun(2, false, false);
RoleSetDirFrame(0, 3, 0);
WaitEventAutoScriptRun(2, false, false);
RoleSetDirFrame(0, 2, 0);
WaitEventAutoScriptRun(2, false, false);
RoleSetDirFrame(0, 3, 0);
WaitEventAutoScriptRun(2, false, false);
RoleSetDirFrame(0, 2, 0);
WaitEventAutoScriptRun(2, false, false);
RoleSetDirFrame(0, 3, 0);
WaitEventAutoScriptRun(2, false, false);
RoleSetDirFrame(0, 2, 0);
WaitEventAutoScriptRun(3, false, false);
RoleSetDirFrame(0, 3, 0);
WaitEventAutoScriptRun(4, false, false);
EventSetAutoScript(33, 4, "");
WaitEventAutoScriptRun(0, false, false);
RoleSetDirFrame(0, 4, 0);
WaitEventAutoScriptRun(2, false, false);
SetDlgLower(10, 0, false);
//李逍遥：
//你！．．啊～野蛮丫头！！
SetDlgUpper(21, 0, false);
//林月如：
//亏你还认得我呀～呆瓜小贼！
//怎么啦，今天是不是又想把我
//绑起来吊在树上呀？
VideoUpdate(0, false);
HeroSetSprite(0, Sprite.李逍遥, true);
RoleSetDirFrame(1, 0, 0);
VideoUpdate(0, false);
NpcSetDirFrame(1, 0);
WaitEventAutoScriptRun(4, false, false);
NpcSetDirFrame(0, 0);
VideoUpdate(0, false);
SetDlgLower(40, 0, false);
//刘晋元：
//　你们认识？
RoleSetDirFrame(2, 0, 0);
VideoUpdate(0, false);
SetDlgLower(6, 0, false);
//李逍遥：
//不！只是先前有点小误会
EventSetAutoScript(33, 4, "@1FBD");
ViewportMove(-8, -4, 12);
EventSetAutoScript(33, 4, "");
VideoUpdate(0, false);
EventSetDirFrame(33, 4, 3, 0);
WaitEventAutoScriptRun(4, false, false);
EventSetDirFrame(33, 4, 1, 0);
VideoUpdate(0, false);
SetDlgLower(23, 0, false);
//林月如：
//爹！就是他，昨天欺负我的人
//就是他！你叫他上来，我要打
//他一顿。
VideoUpdate(0, false);
SetDlgUpper(64, 0, false);
//林天南：
//如儿，别耍性子！
VideoUpdate(0, false);
EventSetDirFrame(33, 4, 3, 0);
WaitEventAutoScriptRun(2, false, false);
SetDlgUpper(22, 0, false);
//林月如：
//我不管，你叫他上来
//我一定出这口气！
RoleSetDirFrame(1, 0, 0);
VideoUpdate(0, false);
ViewportMove(16, 8, 4);
SetDlgLower(1, 0, false);
//李逍遥：
//虽然在下曾冒犯姑娘在先，但
//我自愿捱你一剑，已经两不相
//欠。姑娘又何必逼人太甚呢？
VideoUpdate(0, false);
SetDlgUpper(22, 0, false);
//林月如：
//我不服气！昨天你们两个打我
//一个。今天有种就来单打独斗
SetDlgLower(9, 0, false);
//李逍遥：
//哈哈！　手下败将
//还想自讨苦吃吗？
VideoUpdate(0, false);
SetDlgUpper(22, 0, false);
//林月如：
//要是你胜了，咱们之间的过节
//就一笔勾销。要是你输了，就
//得在我家当一年的长工。来抵
//被你放走的银花和长贵的份！
//怎么着，怕了吗？
VideoUpdate(0, false);
PartySetRole(1, 0, 0);
RoleMoveOneStep(-8, -4, 0);
ViewportMove(8, 4, 0);
VideoUpdate(0, false);
RoleMoveOneStep(-8, -4, 0);
ViewportMove(8, 4, 0);
VideoUpdate(0, false);
RoleMoveOneStep(-8, -8, 0);
ViewportMove(8, 4, 0);
RoleMoveOneStep(-8, -8, 0);
ViewportMove(8, 4, 0);
EventSetDirFrame(33, 6, 1, 0);
RoleMoveOneStep(-8, -8, 0);
VideoUpdate(0, false);
RoleMoveOneStep(-8, -8, 0);
VideoUpdate(0, false);
RoleMoveOneStep(-8, -4, 0);
VideoUpdate(0, false);
RoleMoveOneStep(-8, -4, 0);
VideoUpdate(0, false);
RoleMoveOneStep(-8, -4, 0);
VideoUpdate(0, false);
RoleMoveOneStep(-8, -4, 0);
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//话可是你说的呦！只要我打赢
//你，昨天的事就一笔勾销？
SetDlgUpper(21, 0, false);
//林月如：
//　没错！
VideoUpdate(0, false);
SetDlgUpper(64, 0, false);
//如儿！不可儿戏！
VideoUpdate(0, false);
EventSetDirFrame(33, 4, 0, 0);
VideoUpdate(0, false);
EventSetDirFrame(33, 4, 1, 0);
VideoUpdate(0, false);
SetDlgLower(21, 0, false);
//林月如：
//爹～你别管嘛！今天我要是不
//在众人面前讨回这面子，岂不
//让人家看轻咱们苏州林家堡
SetDlgUpper(64, 0, false);
//林天南：
//好好好．．　爱怎么样都随你
//不过～只许点到为止你知道吗
VideoUpdate(0, false);
EventSetDirFrame(33, 4, 0, 0);
VideoUpdate(0, false);
EventSetDirFrame(33, 4, 3, 0);
WaitEventAutoScriptRun(4, false, false);
EventSetState(549, 0, 0);
EventModifyPos(33, 3, -24, -7);
EventSetState(548, 2, 0);
VideoUpdate(0, false);
SetDlgUpper(21, 0, false);
//林月如：
//嘻．．亮招吧！
VideoUpdate(0, false);
SetBattleMusic(Music.比武招亲);
Dos_SetBattlefield(FbpDos.鬼阴山_山脚洞口);
BattleStart(24, "@A073", "");
MusicPlay(Music.停止播放, false, false);
BattleEnd();
EventSetState(549, 1, 0);
EventSetState(548, 0, 0);
EventModifyPos(33, 7, 16, 40);
PartySetPos(34, 43, 1);
VideoUpdate(0, false);
SetDlgUpper(21, 0, false);
//林月如：
//我认输了．．。
SetDlgLower(1, 0, false);
//李逍遥：
//承让～
VideoUpdate(0, false);
PlaySound(214);
SetDlgCenter(0, false);
//擂台下响起一片掌声
RoleSetDirFrame(2, 0, 0);
WaitEventAutoScriptRun(4, false, false);
RoleSetDirFrame(0, 0, 0);
WaitEventAutoScriptRun(4, false, false);
RoleSetDirFrame(3, 0, 0);
WaitEventAutoScriptRun(4, false, false);
RoleSetDirFrame(0, 0, 0);
VideoUpdate(0, false);
SetDlgLower(6, 0, false);
//李逍遥：
//啊．．谢谢，谢谢各位
VideoUpdate(0, false);
EventSetDirFrame(33, 7, 0, 0);
VideoUpdate(0, false);
SetDlgUpper(64, 0, false);
//林天南：
//呵呵呵．．太好了！太好了！
//诸位乡亲～今日小女的比武招
//亲终于有了结果，多谢诸位乡
//亲共襄盛举。明日起我林某人
//于林家堡席开三日，诸位乡亲
//父老务必赏光！
EventSetDirFrame(33, 4, 0, 0);
VideoUpdate(0, false);
SetDlgLower(21, 0, false);
//林月如：
//爹～！　人家才不依呢．．
VideoUpdate(0, false);
EventSetLayer(33, 4, 7);
EventSetAutoScript(33, 4, "@2347");
WaitEventAutoScriptRun(9, false, false);
EventSetDirFrame(33, 7, 1, 0);
WaitEventAutoScriptRun(2, false, false);
RoleSetDirFrame(1, 0, 0);
WaitEventAutoScriptRun(4, false, false);
RoleSetDirFrame(0, 0, 0);
WaitEventAutoScriptRun(3, false, false);
RoleSetDirFrame(1, 0, 0);
WaitEventAutoScriptRun(6, false, false);
EventSetState(549, 0, 0);
VideoUpdate(0, false);
SetDlgUpper(64, 0, false);
//林天南：
//哈哈哈！难得～难得～
//想不到如儿也会害臊
PartyWalkToBlock(33, 42, 0, 2);
VideoUpdate(0, false);
RoleSetDirFrame(0, 0, 0);
WaitEventAutoScriptRun(4, false, false);
RoleSetDirFrame(1, 0, 0);
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//　　怎．．怎么？
EventSetDirFrame(33, 7, 2, 0);
VideoUpdate(0, false);
SetDlgUpper(64, 0, false);
//林天南：
//呵呵呵．．小伙子，还愣在那
//干什么？跟着如儿去呀！
RoleSetDirFrame(0, 0, 0);
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//我！？．．为什么？
VideoUpdate(0, false);
SetDlgUpper(64, 0, false);
//林天南：
//还装傻！？比武招亲擂台之上
//你既胜了如儿，自然就是我林
//家的女婿了。
SetDlgLower(10, 0, false);
//李逍遥：
//　　啊～！！！
FadeOut(0);
EventSetTriggerScript(24, 1, "@183B");
SceneEnter(35);

['Event_00033_00013_Trigger'];
//观众：
//别挤啊！

['Event_00033_00014_Trigger'];
//观众：
//姓林的这娘们好厉害！

['Event_00033_00016_Trigger'];
//观众：
//只听得林家千金多么泼辣
//今日一看，手上的功夫倒
//也不弱。

['Event_00033_00018_Trigger'];
//观众：
//林家堡堡主林天南的家传剑法
//果然名不虚传，林家小姐已得
//七分真传了。

['Event_00033_00023_Trigger'];
//观众：
//场上这男的下盘不稳，我看
//不出百招，一定败下阵来。

['Event_00033_00003_Auto'];
NpcSetFrame(0);
GotoWithProbability(70, "Event_00033_00003_Auto");
EventSetAutoScript(33, 5, "@2000");
NpcSetFrame(1);
NpcSetFrame(2);
NpcSetFrame(3);
NpcSetFrame(4);
NpcSetFrame(5);
NpcSetFrame(6);
NpcSetFrame(7);
NpcSetFrame(8);
NpcSetFrame(9);
NpcSetFrame(10);
ReplaceAndPause();
GotoWithProbability(50, "Event_00033_00003_Auto");
GotoWithProbability(40, "@1FEE");
EventSetAutoScript(33, 5, "@200A");
NpcSetFrame(0);
NpcSetFrame(1);
NpcSetFrame(2);
NpcSetFrame(11);
PlaySound(91);
WaitEventAutoScriptRun(4, false, false);
NpcSetFrame(0);
ReplaceAndPauseWithNop("Event_00033_00003_Auto", 0);

['Scene_00033_Enter'];
PartySetPos(43, 54, 0);
PlayCDOrMusic(CD.比武招亲, Music.比武招亲);
ReplaceAndPause();

