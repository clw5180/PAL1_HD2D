['Event_00185_00001_Trigger'];
SceneEnter(188);
PartySetPos(12, 78, 0);
FadeOut(0);

['Event_00185_00002_Trigger'];
SceneEnter(189);
PartySetPos(38, 71, 0);
FadeOut(0);

['Scene_00185_Teleport'];
SceneEnter(185);
PartySetPos(10, 39, 0);
FadeOut(0);

['Scene_00185_Enter'];
MusicStop(0);
PartySetPos(10, 38, 1);
PartySetRole(5, 1, 0);
RoleSetDirFrame(2, 0, 0);
RoleSetDirFrame(2, 0, 1);
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//这．．这是什么地方？
//你要拿的东西就在这里？
RoleSetDirFrame(0, 0, 0);
VideoUpdate(0, false);
SetDlgUpper(27, 0, false);
//阿奴：
//对呀，昨天我潜进来过一次
//确定东西就在这里面，可惜他
//们的头头太厉害，我斗不过
//不过，今天我瞧见那魔头外出
//洞内只剩下一些小妖，再加上
//你助阵，这回铁定会成功！
VideoUpdate(0, false);
SetDlgLower(10, 0, false);
//李逍遥：
//搞了半天～
//你是找我来当打手的？
VideoUpdate(0, false);
SetDlgUpper(29, 0, false);
//阿奴：
//嘻嘻～能够打败圣兽金翅凤凰
//的人，手底下的功夫应该不会
//输给这里的小妖才对
SetDlgLower(9, 0, false);
//李逍遥：
//啧～　上了贼船．．
RoleSetDirFrame(0, 0, 0);
VideoUpdate(0, false);
Replace();
Dos_SetBattlefield(FbpDos.片尾_李逍遥);
SetBattleMusic(Music.心急如焚);
MusicPlay(Music.神木林_变奏, false, false);

['Event_00185_00004_Trigger'];
EventSetState(-1, 0, 0);
SetDlgCenter(0, false);
//"．．．！！"
PartyWalkToBlock(21, 73, 0, 8);
PartyWalkToBlock(24, 69, 1, 8);
PartyWalkToBlock(21, 66, 1, 8);
WaitEventAutoScriptRun(4, false, false);
RoleSetDirFrame(3, 0, 0);
WaitEventAutoScriptRun(6, false, false);
RoleSetDirFrame(2, 0, 0);
WaitEventAutoScriptRun(0, false, false);
RoleSetDirFrame(1, 0, 0);
WaitEventAutoScriptRun(8, false, false);
RoleSetDirFrame(2, 0, 0);
WaitEventAutoScriptRun(8, false, false);
PartyWalkToBlock(23, 64, 1, 8);
WaitEventAutoScriptRun(2, false, false);
EventSetDirFrame(185, 3, 0, 1);
VideoUpdate(0, false);
PlaySound(78);
WaitEventAutoScriptRun(4, false, false);
SetDlgUpper(30, 0, false);
//阿奴：
//可恶．．是空的！
//昨天明明看见他放在里面
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//你到底在找什么？
RoleSetDirFrame(0, 0, 0);
VideoUpdate(0, false);
SetDlgUpper(27, 0, false);
//阿奴：
//告诉你也无妨．．
//　我在找水灵珠！
RoleSetDirFrame(1, 0, 0);
VideoUpdate(0, false);
SetDlgLower(6, 0, false);
//李逍遥：
//灵珠？　我这儿有雷灵珠
//和风灵珠，能代替吗？
RoleSetDirFrame(0, 0, 0);
VideoUpdate(0, false);
SetDlgUpper(30, 0, false);
//阿奴：
//你是真的不懂
//还是在开我玩笑？
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//我只知道这些灵珠似乎是
//妖怪用来修炼法术的法宝．．
VideoUpdate(0, false);
SetDlgUpper(28, 0, false);
//阿奴：
//什么妖怪！不知道别乱讲
VideoRestore();
//在我们苗族相传，太古时代～
//北方的蛮族和我们南方的苗族
//发生战争，起初蛮族被我们打
//败。于是蛮族的法师就作法请
//他们天上的神明帮忙，天帝就
//派了水、火、雷、风四神，和
//魔女旱魃下凡来对付我们苗人
//可是战争结束后，五位神魔却
//不愿回到天上。结果～天雷地
//火烧光了地上的草木，干旱和
//饥荒饿死成群的牲畜，继而～
//洪水淹没了整个大地，苗人和
//蛮人都失去了家园。此时有一
//位人形蛇身的巫女出现，诛杀
//四神、封印旱魃，敉平了洪灾
//使大地恢复生机，此女巫就是
//我们族人所崇拜的女娲娘娘
VideoRestore();
//女娲娘娘将五位作乱的神魔的
//骨骸炼化成五颗灵珠，传给后
//世，要她们世世代代用以守护
//千千万万苗族子民．．
//可是传到巫后娘娘那一代时，
//发生了一些变故，五颗灵珠
//遗落各地，被一些妖怪给拾
//去占有了
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//原来还有这么一个典故．．
VideoUpdate(0, false);
SetDlgUpper(27, 0, false);
//阿奴：
//据我追查的结果，水灵珠
//就是在这里的妖怪手中
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//如果是真的，我们也犯不着
//跟妖怪争抢吧，太冒险了！
VideoUpdate(0, false);
SetDlgUpper(28, 0, false);
//阿奴：
//你以为我是找好玩的呀！？
//我们苗疆闹大旱灾，很久很久
//都没下雨了，河水都已干涸
//食物也快吃完了．．
//白苗、黑苗两族为了争夺水源
//已经打了九年的战争了！
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//怪了～打仗能解决什么事？
VideoUpdate(0, false);
SetDlgUpper(27, 0, false);
//阿奴：
//所以啰～　我得找到水灵珠
VideoRestore();
//我阿娘年轻的时候也曾遇到一
//次大旱灾，巫后娘娘当时还只
//是一位女祭司，她用水灵珠施
//法祭天，干旱就解除了
//所以我相信，只要找到水灵珠
//就能解决这一切
VideoUpdate(0, false);
SetDlgLower(9, 0, false);
//李逍遥：
//呵～看不出你小小年纪
//就有这种心志．．好～我帮你
VideoRestore();
//我猜想～水灵珠也许是被带出
//洞府了，我们到外面附近找找
//说不定会有收获
RoleSetDirFrame(0, 0, 1);
VideoUpdate(0, false);
SetDlgUpper(29, 0, false);
//阿奴：
//等一下！
//先把这里的宝物全拿走再说
RoleSetDirFrame(2, 0, 1);
VideoUpdate(0, false);
SetDlgUpper(29, 0, false);
//阿奴：
//咱们不能白跑一趟
//反正这些都是妖怪搜刮
//来的，不拿白不拿！)
PartySetRole(1, 5, 0);

['Event_00185_00003_Trigger'];
SetDlgCenter(0, false);
//一个空箱子．．

PlaySound(113);
['Event_00185_00031_Trigger'];
Call("@8E99", 0, 0);
SetDlgBox(0);
//获得１００００文钱
CashModify(10000, "");
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

Call("@8E99", 0, 0);
SetDlgBox(0);
//获得２００００文钱
CashModify(20000, "");
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

Call("@8E99", 0, 0);
SetDlgBox(0);
//获得３００００文钱
CashModify(30000, "");
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

Call("@8E99", 0, 0);
SetDlgBox(0);
//获得木剑
AddItem(106, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

Call("@8E99", 0, 0);
SetDlgBox(0);
//获得短刀
AddItem(107, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

Call("@8E99", 0, 0);
SetDlgBox(0);
//获得铁剑
AddItem(108, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

['Event_00185_00030_Trigger'];
Call("@8E99", 0, 0);
SetDlgBox(0);
//获得苗刀
AddItem(119, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

['Event_00185_00027_Trigger'];
Call("@8E99", 0, 0);
SetDlgBox(0);
//获得磐龙剑
AddItem(129, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

['Event_00185_00029_Trigger'];
Call("@8E99", 0, 0);
SetDlgBox(0);
//获得紫金冠
AddItem(144, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

['Event_00185_00028_Trigger'];
Call("@8E99", 0, 0);
SetDlgBox(0);
//获得乾坤镜
AddItem(198, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

['Event_00185_00026_Trigger'];
Call("@8E99", 0, 0);
SetDlgBox(0);
//获得金蚕王
AddItem(90, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

['Event_00185_00025_Trigger'];
Call("@8E99", 0, 0);
SetDlgBox(0);
//获得血玲珑
AddItem(102, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

['Event_00185_00018_Trigger'];
Call("@8E99", 0, 0);
SetDlgBox(0);
//获得炼蛊皿
AddItem(208, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

