['Event_00111_00001_Trigger'];
SceneEnter(107);
PartySetPos(28, 66, 1);
FadeOut(0);

['Event_00111_00007_Auto'];
ReplaceAndPause();
NpcMoveToBlock(26, 40, 0, 3);
NpcSetDirFrame(3, 0);
WaitEventAutoScriptRun(7, false, false);
NpcSetDirFrame(0, 0);

['Event_00111_00007_Trigger'];
//两位吗？　请这边坐．．
VideoFadeAndUpdate(-4);
HeroSetSprite(0, Sprite.空空如也, false);
PartySetRole(1, 0, 0);
RoleSetDirFrame(0, 0, 0);
PartySetPos(24, 41, 1);
EventSetState(2060, 1, 0);
EventSetState(2061, 1, 0);
EventSetAutoScript(111, 2, "@4190");
WaitEventAutoScriptRun(28, false, false);
SetDlgUpper(44, 0, false);
//盖罗娇：
//呦～呵～
//小夫妻俩出来游山玩水吗？
//真令人羡煞呀．．
VideoRestore();
//呵．．不说笑了
//两位要点什么？
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//老板娘～　有酒吗？
SetDlgUpper(44, 0, false);
//盖罗娇：
//小店的陈年茅台远近驰名呢！
EventSetDirFrame(111, 5, 0, 1);
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//好～来两壶暖暖身子
//贵店有啥拿手下酒好菜？
VideoUpdate(0, false);
SetDlgUpper(44, 0, false);
//盖罗娇：
//小店最拿手的蜜汁熏火腿
//不知是否合您的味？
WaitEventAutoScriptRun(0, false, false);
EventSetDirFrame(111, 5, 0, 0);
WaitEventAutoScriptRun(6, false, false);
EventSetDirFrame(111, 5, 0, 1);
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//好．．来一盘吧！
SetDlgUpper(44, 0, false);
//盖罗娇：
//马上来！
EventSetAutoScript(111, 2, "@4194");
WaitEventAutoScriptRun(18, false, false);
EventSetDirFrame(111, 5, 0, 0);
VideoUpdate(0, false);
SetDlgUpper(1, 0, false);
//李逍遥：
//这山中野店，别有一番风味呢
SetDlgLower(21, 0, false);
//林月如：
//这间客栈似乎是新开的
//去年我到京城，路过这
//里时没见过有这间店
FadeOut(0);
EventSetState(2057, 0, 0);
EventSetState(2062, 0, 0);
EventSetState(2070, 1, 0);
EventSetState(2071, 1, 0);
EventSetState(2058, 1, 0);
EventSetDirFrame(111, 5, 0, 0);
WaitEventAutoScriptRun(5, false, false);
SetDlgUpper(44, 0, false);
//盖罗娇：
//敢问～　少侠怎么称呼？
//府上哪里呀？
EventSetDirFrame(111, 5, 0, 1);
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//敝姓李．．余杭县人
VideoUpdate(0, false);
SetDlgUpper(44, 0, false);
//盖罗娇：
//呦～　余杭啊．．．
//这么远的地方来的呀！
//敢情～两位是．．回娘家
SetDlgLower(6, 0, false);
//李逍遥：
//不不．．大姐您爱说笑了
//我们出来，是为了找寻一个人
VideoUpdate(0, false);
SetDlgUpper(44, 0, false);
//盖罗娇：
//呵～　那是我猜错啦！
VideoUpdate(0, false);
SetDlgUpper(44, 0, false);
//盖罗娇：
//我呢～　我叫盖罗娇
//手下这班姐妹呢．．都是跟我
//从故乡大理，来中土讨生活的
VideoRestore();
//最近几年呐．．苗疆战乱不休
//许多人不是迁到岭南，就是来
//中土讨生活，我们想等到天下
//太平了再回故乡
EventSetDirFrame(111, 5, 0, 0);
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//嗯．．难怪这店里全是苗女
//连酒和菜都是西南边疆的特产
VideoUpdate(0, false);
SetDlgUpper(44, 0, false);
//盖罗娇：
//呵呵～
//两位喜欢的话，就尽量用
EventSetState(2063, 1, 0);
WaitEventAutoScriptRun(15, false, false);
MusicStop(0);
//苗女：
//　　大姐！　他们来了
EventSetDirFrame(111, 5, 0, 1);
VideoUpdate(0, false);
SetDlgLower(44, 0, false);
//盖罗娇：
//嗯．．也该差不多了！
VideoUpdate(0, false);
SetDlgUpper(44, 0, false);
//盖罗娇：
//不好意思，我有重要的客人
//到了，不能陪二位．．
//二位就请．．小睡片刻吧
EventSetDirFrame(111, 3, 0, 1);
WaitEventAutoScriptRun(4, false, false);
EventSetDirFrame(111, 3, 0, 2);
PlaySound(144);
WaitEventAutoScriptRun(6, false, false);
EventSetDirFrame(111, 5, 0, 2);
EventSetDirFrame(111, 6, 0, 1);
VideoUpdate(0, false);
PlaySound(93);
WaitEventAutoScriptRun(10, false, false);
EventSetState(2058, 0, 0);
EventSetState(2059, 1, 0);
VideoUpdate(0, false);
SetDlgLower(44, 0, false);
//盖罗娇：
//通知所有的人，大鱼入网了
EventSetAutoScript(111, 8, "@424B");
WaitEventAutoScriptRun(12, false, false);
EventSetState(2063, 0, 0);
EventSetState(2059, 0, 0);
EventSetState(2064, 0, 0);
EventSetState(2065, 0, 0);
EventSetState(2066, 0, 0);
EventSetState(2067, 0, 0);
EventSetState(2068, 0, 0);
EventSetState(2069, 0, 0);
EventSetState(0, 0, 0);
EventSetState(0, 0, 0);
EventSetState(1972, 1, 0);
EventSetState(1973, 1, 0);
EventSetState(1974, 1, 0);
EventSetState(1975, 1, 0);
EventSetState(1976, 1, 0);
EventSetState(1977, 1, 0);
EventSetState(1978, 1, 0);
EventSetState(1979, 1, 0);
EventSetState(1980, 1, 0);
EventSetState(1981, 1, 0);
EventSetState(1982, 1, 0);
EventSetState(1983, 1, 0);
EventSetState(1984, 1, 0);
EventSetState(1990, 1, 0);
EventSetState(1986, 2, 0);
EventSetState(1987, 2, 0);
EventSetState(1988, 2, 0);
EventSetState(1989, 2, 0);
SceneSetScript(107, "@40F3", "");
FadeOut(0);
SceneEnter(107);

['Event_00111_00008_Auto'];
NpcMoveToBlock(25, 39, 1, 8);
NpcMoveToBlock(24, 40, 1, 8);

