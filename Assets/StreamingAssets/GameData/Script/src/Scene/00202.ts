['Scene_00202_Enter'];
Dos_SetBattlefield(FbpDos.锁妖塔);
VideoWave(2, 0);
MusicPlay(Music.鬼影幢幢, false, false);
SetBattleMusic(Music.势如破竹_副本);

['Scene_00202_Teleport'];
SceneEnter(207);
PartySetPos(52, 54, 0);
FadeOut(0);

['Event_00202_00001_Trigger'];
SceneEnter(213);
PartySetPos(20, 28, 1);
FadeOut(0);

['Event_00202_00002_Trigger'];
VideoUpdate(0, false);
SetDlgLower(9, 0, false);
//李逍遥：
//这里就是火麒麟兽吗？
//看起来不怎么可怕嘛．．
VideoUpdate(0, false);
SetDlgLower(29, 0, false);
//阿奴：
//咦～　它好像在打瞌睡呢！
VideoRestore();
//嘻嘻．．我来拔它一根
NpcSetFrame(1);
VideoUpdate(0, false);
PlaySound(236);
//麒麟：
//吼～　吵死啦！
VideoUpdate(0, false);
Dos_SetBattlefield(FbpDos.锁妖塔);
SetBattleMusic(Music.侠客行);
BattleStart(224, "@A073", "");
SetBattleMusic(Music.势如破竹);
SetDlgBox(0);
//获得火灵珠
AddItem(206, 0);
EventSetState(3363, 1, 0);
PartySetRole(1, 0, 0);
PartySetPos(50, 91, 0);
RoleSetDirFrame(1, 0, 0);
BattleEnd();
WaitEventAutoScriptRun(4, false, false);
EventSetState(-1, 0, 0);
EventSetStateSequence(202, 3, 9, 0);
EventSetState(3362, 2, 0);
FadeToScene(2, -1);
SetDlgLower(28, 0, false);
//阿奴：
//哇！它变成人了耶
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//麒麟老人：
//呼～咳～　我说怎么这十年来
//喉咙一直不太舒服，原来是卡
//了一颗奇怪的珠子在里面
VideoRestore();
SetDlgLower(0, 0, false);
//麒麟老人：
//我说～两位小朋友呀．．
//你们老师没有教过你们
//要敬老尊贤吗？
VideoRestore();
//出手这么重，我这么一把
//老骨头差点给你们给拆散了！
VideoUpdate(0, false);
SetDlgLower(28, 0, false);
//阿奴：
//你．．你是妖怪吗！？
//不然怎么会变成人的样子
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//麒麟老人：
//你说我是神灵圣兽也好
//要说我是妖魔鬼怪也行
//反正有智慧的非人类
//随便你们爱怎么叫都行
//只要不要随便吵醒老人家
//的午睡就可以了
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//是～　真是很抱歉
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//麒麟老人：
//此地并非游玩之地
//你们跑进来干什么？
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//晚辈的妻子伤重难产
//急须要凤凰蛋壳与您
//头上的麒麟角救命
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//麒麟老人：
//要拿我的角去作安胎药！
//你哪里听来的这门偏方？
//人类妈妈若是同时吃了这二种
//东西，搞不好娃娃蹦不出来
//反而生出蛋来！
VideoUpdate(0, false);
SetDlgLower(10, 0, false);
//李逍遥：
//蛋．．．这．．(
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//麒麟老人：
//灵兽圣药凡人怎么可能消受
//的住？不吃的流鼻血才怪～
//除非你妻子不是人类！
VideoUpdate(0, false);
SetDlgLower(4, 0, false);
//李逍遥：
//是．．晚辈的妻子乃女娲族裔
//外形上有时一半是蛇身，可是
//除此之外，它和常人无异
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//麒麟老人：
//哦！！！　她现在在哪里？
//快带过来给我看看！
VideoUpdate(0, false);
SetDlgLower(4, 0, false);
//李逍遥：
//晚辈的妻子伤重未愈．．
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//麒麟老人：
//哎呀～我一时高兴给忘了！
VideoRestore();
//我问你，你老婆叫什么名字？
//今年几岁了？
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//她叫赵灵儿，今年一十六
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//麒麟老人：
//灵？　嗯．．这就错不了！
WaitEventAutoScriptRun(3, false, false);
EventSetDirFrame(202, 10, 0, 1);
WaitEventAutoScriptRun(4, false, false);
EventSetDirFrame(202, 10, 0, 2);
WaitEventAutoScriptRun(3, false, false);
SetDlgLower(0, 0, false);
//麒麟老人：
//来～　这支角拿去！
VideoUpdate(0, false);
SetDlgBox(0);
//获得火眼麒麟角
AddItem(216, 0);
EventSetDirFrame(202, 10, 0, 3);
VideoUpdate(0, false);
SetDlgLower(4, 0, false);
//李逍遥：
//对不起，为了我们
//害得您自伤其身．．
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//麒麟老人：
//哈哈～没关系！
//反正过几年又会长回来
//千年来，我常作同样的事
VideoRestore();
//最近的一次是三十七年前
//你妻子的外婆生你丈母娘时
//也是如此
VideoRestore();
//年纪轻轻的就偷尝禁果，在
//本身灵力与体质都未成熟之下
//就怀人类的小孩子，是会失去
//变化人形的能力！
//我跟你丈母娘的先祖略有交情
//每次发生这种事的时候，她们
//就会来找我。
VideoRestore();
//这支麒麟角加上凤凰蛋壳
//能帮助她们提早脱胎换骨
//恢复灵力
EventSetDirFrame(202, 11, 0, 0);
VideoUpdate(0, false);
SetDlgUpper(29, 0, false);
//阿奴：
//这样子生出来的小娃娃
//会不会像小蛇一样
//从蛋里面跑出来？
SetDlgLower(1, 0, false);
//李逍遥：
//这．．．(
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//麒麟老人：
//呵呵呵～你放心！
//基本上完全跟人类一样
EventSetDirFrame(202, 11, 1, 0);
VideoUpdate(0, false);
SetDlgUpper(27, 0, false);
//阿奴：
//那～人又是怎么生小孩的呀？
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//麒麟老人：
//这．．自己回去问你娘吧！
//好啦～东西拿到了就快回去吧
//此地十分酷热，对你们的身体
//不太好，不要逗留太久．．
VideoUpdate(0, false);
EventSetState(3362, 0, 0);
FadeToScene(0, -1);
EventSetDirFrame(202, 11, 0, 0);
VideoUpdate(0, false);
SetDlgUpper(32, 0, false);
//阿奴：
//嘻嘻～小娃娃生下来的时候
//我可不可以去看？
RoleSetDirFrame(2, 0, 0);
VideoUpdate(0, false);
SetDlgLower(8, 0, false);
//李逍遥：
//有什么好看的？
VideoUpdate(0, false);
SetDlgUpper(31, 0, false);
//阿奴：
//人家想看看你们的小孩，生
//下来的时候会是什么模样嘛
SetDlgLower(7, 0, false);
//李逍遥：
//你也太无聊了吧？
VideoUpdate(0, false);
EventSetState(3362, 1, 0);
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//麒麟老人：
//哎呦～差点忘了告诉你一件事
EventSetDirFrame(202, 11, 1, 0);
RoleSetDirFrame(1, 0, 0);
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//麒麟老人：
//你离开大理城之前
//务必到女娲神殿去一趟
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//到了那里我该做什么？
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//麒麟老人：
//去了自然明了！
EventSetState(3362, 0, 0);
VideoUpdate(0, false);
EventSetState(3363, 0, 0);
PartySetRole(5, 1, 0);
EventSetState(3447, 0, 0);
EventSetState(3448, 0, 0);
EventSetState(3449, 0, 0);
EventSetState(3450, 0, 0);
EventSetState(3451, 0, 0);
EventSetState(3452, 0, 0);
EventSetState(3453, 0, 0);
EventSetState(3454, 0, 0);
EventSetState(3455, 0, 0);
EventSetState(3457, 0, 0);
EventSetState(3458, 0, 0);
EventSetTriggerScript(206, 7, "@7608");
EventSetTriggerScript(207, 16, "@7608");
EventSetTriggerScript(207, 17, "@7608");
EventSetTriggerScript(212, 3, "@7608");
EventSetTriggerScript(212, 4, "@7608");
EventSetTriggerScript(204, 3, "@766B");
EventSetTriggerScript(207, 1, "@7758");
EventSetTriggerScript(203, 11, "@71A6");

