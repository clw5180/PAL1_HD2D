['Event_00048_00003_Trigger'];
SceneEnter(42);
PartySetPos(25, 43, 0);
FadeOut(0);

['Event_00048_00002_Trigger'];
SceneEnter(49);
PartySetPos(14, 104, 1);
FadeOut(0);

['Event_00048_00005_Trigger'];
EventSetTriggerMode(-1, -1, false, 2);
EventModifyPos(-1, -1, -16, -8);
NpcSetDirFrame(3, 0);
VideoUpdate(0, false);
//少女：
//啊～！？　不要杀我！
ReplaceAndPause();
//少女：
//我只是在这儿倒倒茶、端端
//东西，什么都不知道！

['Event_00048_00006_Trigger'];
//少女：
//你是谁？不要杀我！
//我··我什么都不知道。

['Event_00048_00007_Trigger'];
//少女：
//小英雄，求求你救救我们
//这些女孩子吧！

['Event_00048_00008_Trigger'];
//少女：
//救命啊！
//不···不要杀我，求求你。

['Event_00048_00009_Trigger'];
//少女：
//我原先住在河东黑水镇，是
//在熟睡中不知不觉地被带到
//这儿来的。

['Event_00048_00010_Trigger'];
//少女：
//快救我们出去吧！求求你。

['Event_00048_00011_Trigger'];
//少女：
//求求你，我是来自附近村镇的
//请你救救我们。

['Event_00048_00012_Trigger'];
//小玉：
//你是谁？
//是我爹娘请你来救我的吗？
VideoRestore();
//我和晓慧都是被妖怪抓来的
//当时我和她正在河边戏水，
//突然出现了一只妖怪把我们
//俩给带到这个洞穴来。

['Event_00048_00013_Trigger'];
SetDlgLower(1, 0, false);
//姑娘～
//你们都是被蛇妖抓来的吗？
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//晓慧：
//是啊～那时候我真吓坏了！
//还好到这以后，妖怪只要我
//们做一些打杂的工作，并没
//有伤害我们。

['Event_00048_00004_Trigger'];
//妖狐女：
//你们．．想干什么？
VideoUpdate(0, false);
SetDlgLower(5, 0, false);
//李逍遥：
//灵儿呢？你们把她藏在哪里？
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//妖狐女：
//老娘这儿是有不少丫鬟
//是从外头抓来的。有慧儿
//、珠儿、湘儿、兰儿、
//就是没有一个叫灵儿的
VideoUpdate(0, false);
SetDlgLower(5, 0, false);
//李逍遥：
//今天我可是豁出去了
//不要以为你是女的我就
//不敢对你怎么样
//不交出人，我一样杀了你！
VideoUpdate(0, false);
SetDlgLower(24, 0, false);
//林月如：
//李大哥，你冷静点．．
//先问清楚再说
VideoUpdate(0, false);
SetDlgLower(5, 0, false);
//李逍遥：
//管不了那么多了！
//灵儿要是少了一根寒毛
//我就要这里的妖怪全部陪葬
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//妖狐女：
//好大的口气！
VideoRestore();
//老伴！
//快过来帮我把这两人撵出去
VideoRestore();
//老伴？
VideoUpdate(0, false);
SetDlgLower(5, 0, false);
//李逍遥：
//叫也没用！
//门口那只半人蛇妖
//已经死在我剑下了
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//妖狐女：
//什么！？　你杀了我相公
//老娘跟你拼了！
EventSetState(-1, 0, 0);
SetBattleMusic(Music.势如破竹_副本);
Dos_SetBattlefield(FbpDos.巨蜘蛛网);
BattleStart(44, "@A073", "");
SetBattleMusic(Music.战意昂);
AddItem(229, 0);
SetDlgBox(0);
//得到一把"石钥匙"
BattleEnd();
VideoUpdate(0, false);
SetDlgLower(24, 0, false);
//林月如：
//李大哥．．
//刚才你的神情好骇人
VideoUpdate(0, false);
SetDlgLower(4, 0, false);
//李逍遥：
//我．．．我．．
VideoUpdate(0, false);
SetDlgLower(24, 0, false);
//林月如：
//可能．．赵姑娘真的
//不在这里
VideoUpdate(0, false);
SetDlgLower(4, 0, false);
//李逍遥：
//那．．会是谁干的？
VideoUpdate(0, false);
SetDlgLower(24, 0, false);
//林月如：
//．．．．．．．
VideoRestore();
//我们先把这里被妖怪
//抓来的女孩子们救出去
//赵姑娘的下落我们另外再
//从头查起吧．．
VideoUpdate(0, false);
SetDlgLower(4, 0, false);
//李逍遥：
//好．．．好吧

['Event_00048_00014_Trigger'];
EventSetTriggerMode(-1, -1, false, 0);
EventSetAutoScript(-1, -1, "@2590");
ReplaceAndPause();
//少女：
//救命啊！不···
//不要杀我，求求你。

['Event_00048_00015_Trigger'];
EventSetTriggerMode(-1, -1, false, 0);
EventSetAutoScript(-1, -1, "@2598");
ReplaceAndPause();
EventSetTriggerMode(-1, -1, false, 0);
EventSetAutoScript(-1, -1, "@259E");
ReplaceAndPause();
//少女：
//救命啊！不要过来

['Event_00048_00016_Trigger'];
EventSetTriggerMode(-1, -1, false, 0);
EventSetAutoScript(-1, -1, "@25AE");
ReplaceAndPause();
//啊！！！

['Event_00048_00017_Trigger'];
EventSetTriggerMode(-1, -1, false, 0);
EventSetAutoScript(-1, -1, "@25B5");
ReplaceAndPause();
//你．．你们是谁！？

['Event_00048_00001_Trigger'];
SetDlgCenter(0, false);
//此石门已上锁．．

['Event_00048_00019_Trigger'];
Call("@8E99", 0, 0);
SetDlgBox(0);
//获得银钗
AddItem(139, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

Call("@8E99", 0, 0);
SetDlgBox(0);
//获得翠玉金钗
AddItem(140, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

Call("@8E99", 0, 0);
SetDlgBox(0);
//获得珍珠冠
AddItem(142, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

['Event_00048_00022_Trigger'];
Call("@8E99", 0, 0);
SetDlgBox(0);
//获得铁履
AddItem(179, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

Call("@8E99", 0, 0);
SetDlgBox(0);
//获得武僧靴
AddItem(180, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

Call("@8E99", 0, 0);
SetDlgBox(0);
//获得鹿皮靴
AddItem(181, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

['Event_00048_00020_Trigger'];
Call("@8E99", 0, 0);
SetDlgBox(0);
//获得珍珠
AddItem(192, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

Call("@8E99", 0, 0);
SetDlgBox(0);
//获得念珠
AddItem(194, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

['Event_00048_00021_Trigger'];
Call("@8E99", 0, 0);
SetDlgBox(0);
//获得玉镯
AddItem(193, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

['Event_00048_00018_Trigger'];
Call("@8E99", 0, 0);
SetDlgBox(0);
//获得铜镜
AddItem(196, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

['Event_00048_00029_Trigger'];
Call("@8E99", 0, 0);
SetDlgBox(0);
//获得酒
AddItem(26, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

Call("@8E99", 0, 0);
SetDlgBox(0);
//获得糖葫芦
AddItem(20, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

Call("@8E99", 0, 0);
SetDlgBox(0);
//获得烧肉
AddItem(33, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

['Event_00048_00030_Trigger'];
Call("@8E99", 0, 0);
SetDlgBox(0);
//获得孟婆汤
AddItem(37, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

['Event_00048_00031_Trigger'];
Call("@8E99", 0, 0);
SetDlgBox(0);
//获得金蚕王
AddItem(90, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

['Event_00048_00032_Trigger'];
Call("@8E99", 0, 0);
SetDlgBox(0);
//获得隐蛊
AddItem(81, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

['Event_00048_00026_Trigger'];
PlaySound(78);
SetDlgBox(0);
//发现１００文钱
CashModify(100, "");
EventSetState(-1, 0, 0);

['Event_00048_00027_Trigger'];
PlaySound(78);
SetDlgBox(0);
//发现２３０文钱
CashModify(230, "");
EventSetState(-1, 0, 0);

['Event_00048_00028_Trigger'];
PlaySound(78);
SetDlgBox(0);
//发现３００文钱
CashModify(300, "");
EventSetState(-1, 0, 0);

