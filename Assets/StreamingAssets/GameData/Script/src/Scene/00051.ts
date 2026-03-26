['Event_00051_00001_Trigger'];
SceneEnter(50);
PartySetPos(28, 53, 0);
FadeOut(0);

['Event_00051_00007_Trigger'];
//村民：
//虽然这儿的糯米卖得很贵
//但是附近村落只有这家有卖。

['Event_00051_00008_Trigger'];
//村民：
//小兄弟，看你小小年纪
//还是别到处乱跑的好
//这附近有僵尸出没。

['Event_00051_00009_Trigger'];
//村民：
//天呐！难道我们村上就没有
//人可以去对付尸妖吗？

['Event_00051_00010_Trigger'];
//村民：
//如果能得到玉佛寺和尚们的
//帮助，也许就可以对付黑水
//镇的僵尸。

['Event_00051_00011_Trigger'];
//村民：
//早知道，咱们家也改行种糯米
//现在我也可以大捞一笔

['Event_00051_00012_Trigger'];
//村民：
//真是气死人了，竟然还有
//商人在这个时候故意把糯
//米卖那么贵。

['Event_00051_00013_Trigger'];
//村民：
//这些商人真是没天良，以后
//生小孩一定没屁眼。

['Event_00051_00014_Trigger'];
//村民：
//你也是来买糯米的吗？
//当心他们拿黏米当糯米卖喔！

['Event_00051_00015_Trigger'];
//村民：
//喂喂喂！
//你想插队啊？小心老子扁你！

['Event_00051_00016_Trigger'];
//村民：
//小老弟，俺憋了一肚子的尿
//是不是可以帮俺排一下队
//俺去解个手。

['Event_00051_00017_Trigger'];
//村民：
//不要吵。

['Event_00051_00002_Trigger'];
SetDlgUpper(66, 0, false);
//骆员外：
//找我有什么事啊？
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//现在白河村的百姓正处于最
//紧张的时刻，每天就怕河东
//黑水镇的尸妖会跑过来
VideoRestore();
//你也知道只有糯米能防治僵尸
//但是你却趁机抬高米价，这么
//做也未免太没良心了吧？
VideoUpdate(0, false);
SetDlgUpper(66, 0, false);
//骆员外：
//乳臭未干的小子！敢管大爷的
//事？你管的也太多了吧！
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//这可不是谁管谁的问题，发生
//这种事任谁都看不过去的。
VideoUpdate(0, false);
SetDlgUpper(66, 0, false);
//骆员外：
//要怪就怪他们没有生意头脑
//当初黑水镇那边传出闹僵尸时
//大家只是幸灾乐祸，不当做一
//回事
//而我就看准了这一点，把附近
//所有的糯米都买下来了，转手
//间就赚了十倍呢～哈哈！
VideoUpdate(0, false);
Replace();
SetDlgUpper(66, 0, false);
//骆员外：
//做生意就要像我一样有眼光，
//会抓时机。小兄弟！学着点吧
VideoRestore();
//本店也贩卖各式高级武器
//要不要采购一些来防身呀？
//不然碰到尸妖可就吃力了
VideoUpdate(0, false);
ShowBuyItemMenu(9);

['Event_00051_00005_Trigger'];
//保镖：
//小伙子，要买糯米的话，
//到那儿去排队。

['Event_00051_00006_Trigger'];
//骆记总管：
//手头紧吗？要变卖东西吗？
//本店高价收购二手货
VideoUpdate(0, false);
ShowSellItemMenu();

['Event_00051_00026_Trigger'];
PlaySound(78);
SetDlgBox(0);
//发现大蒜
AddItem(24, 0);
EventSetState(-1, 0, 0);

['Event_00051_00022_Trigger'];
PlaySound(78);
SetDlgBox(0);
//发现酒
AddItem(26, 0);
EventSetState(-1, 0, 0);

PlaySound(78);
SetDlgBox(0);
//发现雄黄
AddItem(27, 0);
EventSetState(-1, 0, 0);

['Event_00051_00018_Trigger'];
PlaySound(78);
SetDlgBox(0);
//发现头巾
AddItem(136, 0);
EventSetState(-1, 0, 0);

PlaySound(78);
SetDlgBox(0);
//发现青丝巾
AddItem(137, 0);
EventSetState(-1, 0, 0);

['Event_00051_00027_Trigger'];
PlaySound(78);
SetDlgBox(0);
//发现发饰
AddItem(138, 0);
EventSetState(-1, 0, 0);

PlaySound(78);
SetDlgBox(0);
//发现银钗
AddItem(139, 0);
EventSetState(-1, 0, 0);

['Event_00051_00023_Trigger'];
PlaySound(78);
SetDlgBox(0);
//发现草鞋
AddItem(175, 0);
EventSetState(-1, 0, 0);

