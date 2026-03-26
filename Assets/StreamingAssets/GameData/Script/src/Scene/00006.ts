['Event_00006_00025_Trigger'];
SceneEnter(13);
PartySetPos(21, 37, 1);
FadeOut(0);

['Event_00006_00022_Trigger'];
SceneEnter(14);
PartySetPos(21, 55, 0);
FadeOut(0);

['Event_00006_00020_Auto'];
EventSyncState(6, 21, 0);
ReplaceAndPauseWithNop("Event_00006_00020_Auto", 0);

['Event_00006_00021_Auto'];
EventSyncState(6, 20, 0);
ReplaceAndPauseWithNop("Event_00006_00021_Auto", 0);

['Event_00006_00023_Auto'];
EventSyncState(6, 24, 0);
ReplaceAndPauseWithNop("Event_00006_00023_Auto", 0);

['Event_00006_00024_Auto'];
EventSyncState(6, 23, 0);
ReplaceAndPauseWithNop("Event_00006_00024_Auto", 0);

['Event_00006_00001_Trigger'];
PartySetPos(54, 85, 1);
SceneEnter(5);
FadeOut(0);

['Event_00006_00004_Trigger'];
//渔翁：
//传说～当年观音菩萨经过仙灵
//岛，见那岛上地气灵秀，宛然
//神仙洞府，便与侍香龙女留在
//那里修行，凡人千万冒犯不得
ReplaceAndPause();
//可是那仙灵岛四周险礁暗流密
//布，岛上又有奇石密林环绕，
//有人好不容易上了岛，却像似
//走进了迷阵内，无论怎么绕也
//找不到通往岛内的通道
ReplaceAndPause();
//呵呵．．还听说有人曾在仙灵
//岛上看过一名美若天仙的青衣
//少女，手持玉瓶与宝剑从天而
//降，想必就是侍香龙女吧．．
//呵呵．．我活这么一大把年纪
//也没见过神仙长什么模样呢！
ReplaceAndPause();
//嘘．．别把鱼儿吓跑了

['Event_00006_00004_Auto'];
EventAnimate(Direction.Current);
ReplaceAndPauseWithNop("Event_00006_00004_Auto", 0);

['Event_00006_00006_Auto'];
EventAnimate(Direction.Current);
ReplaceAndPause();
EventAnimate(Direction.Current);
ReplaceAndPause();
EventAnimate(Direction.Current);
ReplaceAndPause();
EventAnimate(Direction.Current);
WaitEventAutoScriptRun(8, false, false);
ReplaceAndPauseWithNop("Event_00006_00006_Auto", 0);

['Event_00006_00009_Trigger'];
SetDlgUpper(39, 0, false);
//张四：
//这两天风浪太大了
//勉强出海打渔，结果一条鱼也
//没捞到，真是晦气！

['Event_00006_00010_Trigger'];
VideoUpdate(0, false);
EventSetTriggerMode(-1, -1, false, 3);
//水生叔：
//小李子！我跟你讲呀．．
//昨儿个我出海时看到东边岛上
//有一位好美丽的仙女喔！可惜
//我一上岸，就不见踪影了
SetDlgLower(0, 0, false);
//李逍遥：
//少盖了．．北村的大脚婆
//你不也是成天夸她漂亮
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//水生叔：
//这．．我这次是说真的！
//我这一辈子从没见过那么
//美的姑娘．．
SetDlgLower(0, 0, false);
//李逍遥：
//哈哈．．水生叔．．
//我看你是想讨老婆想疯了
EventSetTriggerScript(6, 9, "@059C");
EventSetTriggerMode(6, 9, true, 2);
ReplaceAndPause();
//水生叔：
//是真的！
//东边的仙灵岛上真的有仙女住
//在那里，我亲眼看见的！

['Event_00006_00011_Trigger'];
VideoUpdate(0, false);
EventSetTriggerMode(-1, -1, false, 3);
//方老板：
//呵～这不是小李子吗．
//要不要再到我的船运行来帮
//忙啊？
SetDlgLower(0, 0, false);
//李逍遥：
//不了．．才那么一点工钱
//每天又要搬这么多的货，
//太累了，我才不想干呢．．
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//方老板：
//那么．．我加你工钱！
//我这艘船要载货到苏州城
//只是运一些绸缎，很轻松的．
SetDlgLower(0, 0, false);
//李逍遥：
//呵．．再说啦！
//等我有兴趣时再来找你吧
ReplaceAndPause();
//方老板：
//唉．．现在的年青人都怕吃苦
//没人肯当船夫，这下子．．
//船开不了，生意也甭作了．

['Event_00006_00013_Trigger'];
//鱼嫂：
//呦．．买虾吗？
//这两天风浪太大了些，船家们
//都捕不到鱼货，所以新鲜的虾
//也没得买啦．．
ReplaceAndPause();
//怎么样？买条鱼回去煮汤吧。
//刚钓上来的喔！很新鲜呢

['Event_00006_00026_Trigger'];
PlaySound(78);
SetDlgBox(0);
//捡到一件藤制的甲胄
AddItem(149, 0);
EventSetState(-1, 0, 0);

['Event_00006_00012_Trigger'];
EventSetTriggerMode(-1, -1, false, 0);
RideNpcToPos(30, 66, 0, 2);
HeroSetSprite(0, Sprite.李逍遥, false);
PartySetRole(1, 2, 0);
PartySetPos(42, 105, 1);
SceneEnter(22);
FadeOut(0);

['Event_00006_00015_Trigger'];
//卖菜老杨：
//小李子！你看看人家王家的
//小虎子，为了父亲的病远赴
//仙灵岛求仙丹，孝心可嘉啊！
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//李逍遥：
//这有啥了不起？要是我婶婶也
//遇到这种事，我也会去！
ReplaceAndPause();
//卖菜老杨：
//我常提醒老王说～上了年纪
//的人要多吃青菜、少沾油腻
//他不信。现在大病了一场，
//改吃起全素来了。

['Event_00006_00016_Trigger'];
//卖酱老苏：
//真是奇怪了，怎么最近这个酱
//的生意那么难做呢？
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//李逍遥：
//嗯．．我看看．．
VideoRestore();
//苏伯伯！　你这些酱
//有股酸味，恐怕是没腌好吧
//难怪会卖不出去
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//卖酱老苏：
//真的啊！　我怎么闻不出来？
ReplaceAndPause();
//卖酱老苏：
//呜．．这些酱全都不能卖了

['Event_00006_00017_Trigger'];
//猪肉张：
//小李子啊！你也老大不小了
//还不找份正经的活儿做做，
//整天吊儿啷当、无所事事地
//成何体统。
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//李逍遥：
//学你做杀猪、卖猪肉？
//我才不干．．！
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//猪肉张：
//说这什么话！？
//杀猪也是正当行业呢
ReplaceAndPause();
//猪肉张：
//卖猪肉喔～纯种的黑毛猪！?

['Event_00006_00018_Trigger'];
//卖包子：
//肉包、菜包、叉烧包、豆沙包
//、莲蓉包、大烧包应有尽有。
VideoRestore();
//小哥哥，要不要带几个回去
//给你婶婶吃啊？
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//李逍遥：
//不用啦，我婶婶自己做的包子
//比你卖的还好吃
ReplaceAndPause();
//卖包子：
//肉包、菜包、叉烧包、豆沙包
//、莲蓉包、大烧包．．．

['Event_00006_00019_Trigger'];
//妇人：
//嘿！小李子
//又跑出来闲逛啊？
//客栈里没事情做吗？

['Event_00006_00027_Trigger'];
SceneEnter(10);
PartySetPos(19, 75, 0);
FadeOut(0);

['Event_00006_00014_Auto'];
NpcSetDirFrame(3, 0);
ReplaceAndPauseWithNop("Event_00006_00014_Auto", 0);

['Event_00006_00007_Auto'];
EventAnimate(Direction.Current);
EventAnimate(Direction.Current);
GotoWithProbability(25, "Event_00006_00007_Auto");
EventAnimate(Direction.Southwest);
EventAnimate(Direction.Southwest);
EventAnimate(Direction.Southwest);
EventAnimate(Direction.Southwest);
['@8B94'];
EventAnimate(Direction.Current);
EventAnimate(Direction.Current);
GotoWithProbability(40, "@8B94");
EventAnimate(Direction.Northwest);
EventAnimate(Direction.Northwest);
EventAnimate(Direction.Northwest);
EventAnimate(Direction.Northwest);
EventAnimate(Direction.Northwest);
EventAnimate(Direction.Northwest);
EventAnimate(Direction.Current);
EventAnimate(Direction.Current);
EventAnimate(Direction.Northwest);
EventAnimate(Direction.Northwest);
['@8BA1'];
EventAnimate(Direction.Current);
EventAnimate(Direction.Current);
GotoWithProbability(50, "@8BA1");
EventAnimate(Direction.Northeast);
EventAnimate(Direction.Northeast);
EventAnimate(Direction.Current);
EventAnimate(Direction.Current);
EventAnimate(Direction.Current);
EventAnimate(Direction.Current);
EventAnimate(Direction.Northeast);
EventAnimate(Direction.Northeast);
EventAnimate(Direction.Northeast);
EventAnimate(Direction.Northeast);
EventAnimate(Direction.Northeast);
EventAnimate(Direction.Northeast);
EventAnimate(Direction.Current);
EventAnimate(Direction.Current);
EventAnimate(Direction.Current);
EventAnimate(Direction.Current);
EventAnimate(Direction.Southeast);
EventAnimate(Direction.Southeast);
EventAnimate(Direction.Southeast);
EventAnimate(Direction.Current);
EventAnimate(Direction.Current);
EventAnimate(Direction.Current);
EventAnimate(Direction.Current);
EventAnimate(Direction.Current);
EventAnimate(Direction.Current);
EventAnimate(Direction.Current);
EventAnimate(Direction.Current);
EventAnimate(Direction.Southeast);
EventAnimate(Direction.Southeast);
EventAnimate(Direction.Southeast);
EventAnimate(Direction.Southeast);
EventAnimate(Direction.Southeast);
EventAnimate(Direction.Southwest);
EventAnimate(Direction.Southwest);
EventAnimate(Direction.Southwest);
EventAnimate(Direction.Southwest);
EventAnimate(Direction.Current);
EventAnimate(Direction.Current);
EventAnimate(Direction.Current);
EventAnimate(Direction.Current);
NpcSetDirFrame(3, 0);
EventAnimate(Direction.Current);
EventAnimate(Direction.Current);
EventAnimate(Direction.Current);
EventAnimate(Direction.Current);
EventAnimate(Direction.Current);
EventAnimate(Direction.Current);
EventAnimate(Direction.Current);
EventAnimate(Direction.Current);
GotoWithNop("Event_00006_00007_Auto", 0);

['Event_00006_00008_Auto'];
EventAnimate(Direction.Current);
EventAnimate(Direction.Current);
EventAnimate(Direction.Current);
EventAnimate(Direction.Current);
GotoWithProbability(25, "Event_00006_00008_Auto");
EventAnimate(Direction.Southeast);
EventAnimate(Direction.Southeast);
EventAnimate(Direction.Southeast);
EventAnimate(Direction.Southeast);
EventAnimate(Direction.Southeast);
EventAnimate(Direction.Southeast);
EventAnimate(Direction.Southeast);
EventAnimate(Direction.Southeast);
EventAnimate(Direction.Northeast);
EventAnimate(Direction.Northeast);
['@8BE6'];
EventAnimate(Direction.Current);
EventAnimate(Direction.Current);
GotoWithProbability(25, "@8BE6");
EventAnimate(Direction.Northwest);
EventAnimate(Direction.Northwest);
EventAnimate(Direction.Northeast);
EventAnimate(Direction.Northeast);
['@8BED'];
EventAnimate(Direction.Current);
EventAnimate(Direction.Current);
GotoWithProbability(25, "@8BED");
EventAnimate(Direction.Northwest);
EventAnimate(Direction.Northwest);
EventAnimate(Direction.Northwest);
EventAnimate(Direction.Northwest);
EventAnimate(Direction.Northwest);
EventAnimate(Direction.Northwest);
EventAnimate(Direction.Current);
EventAnimate(Direction.Current);
EventAnimate(Direction.Current);
EventAnimate(Direction.Current);
EventAnimate(Direction.Current);
EventAnimate(Direction.Current);
EventAnimate(Direction.Southwest);
EventAnimate(Direction.Southwest);
EventAnimate(Direction.Southwest);
EventAnimate(Direction.Southwest);
EventAnimate(Direction.Southwest);
EventAnimate(Direction.Southwest);
EventAnimate(Direction.Southwest);
EventAnimate(Direction.Southwest);
EventAnimate(Direction.Northwest);
EventAnimate(Direction.Northwest);
EventAnimate(Direction.Northwest);
EventAnimate(Direction.Northwest);
EventAnimate(Direction.Northeast);
EventAnimate(Direction.Northeast);
EventAnimate(Direction.Northeast);
EventAnimate(Direction.Northeast);
EventAnimate(Direction.Southeast);
EventAnimate(Direction.Southeast);
EventAnimate(Direction.Southeast);
EventAnimate(Direction.Southeast);
GotoWithNop("Event_00006_00008_Auto", 0);

['Event_00006_00002_Auto'];
WaitEventAutoScriptRun(6, false, false);
WaitEventAutoScriptRun(6, false, false);
NpcSetFrame(1);
WaitEventAutoScriptRun(9, false, false);
NpcSetFrame(0);
ReplaceAndPauseWithNop("Event_00006_00002_Auto", 0);

['Event_00006_00029_Trigger'];
PlaySound(78);
SetDlgBox(0);
//发现止血草
AddItem(39, 0);
EventSetState(-1, 0, 0);

['Event_00006_00033_Trigger'];
PlaySound(78);
SetDlgBox(0);
//发现蜂王蜜
AddItem(71, 0);
EventSetState(-1, 0, 0);

['Event_00006_00032_Trigger'];
PlaySound(78);
SetDlgBox(0);
//发现蜂巢
AddItem(55, 0);
EventSetState(-1, 0, 0);

