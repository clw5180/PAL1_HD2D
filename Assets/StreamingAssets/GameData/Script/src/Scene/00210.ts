['Event_00210_00001_Trigger'];
SceneEnter(209);
PartySetPos(36, 50, 0);
FadeOut(0);

['Event_00210_00002_Trigger'];
SceneEnter(209);
PartySetPos(30, 36, 0);
FadeOut(0);

['Event_00210_00003_Trigger'];
SceneEnter(209);
PartySetPos(23, 62, 0);
FadeOut(0);

['Event_00210_00004_Trigger'];
SceneEnter(209);
PartySetPos(21, 45, 0);
FadeOut(0);

['Event_00210_00005_Trigger'];
SceneEnter(209);
PartySetPos(30, 51, 0);
FadeOut(0);

['Event_00210_00006_Trigger'];
//当铺老板：
//客官您好～
//有什么东西要当吗？
VideoUpdate(0, false);
ShowSellItemMenu();
VideoUpdate(0, false);
//当铺老板：
//时局这么乱，到当铺来典当
//东西的人越来越多了

['Event_00210_00007_Trigger'];
//老板：
//来来来～咱们这儿别的没有
//专卖一等一的家伙！
VideoUpdate(0, false);
ShowBuyItemMenu(17);

['Event_00210_00008_Trigger'];
//药铺老板：
//请问你们要买些什么？
VideoUpdate(0, false);
ShowBuyItemMenu(19);
VideoUpdate(0, false);
//药铺老板：
//最近黑苗白苗常常开战
//我的生意特别好

['Event_00210_00009_Trigger'];
//顾客：
//阿爹前夜和黑苗族作战受伤了
//我要买药回去替他疗伤

['Event_00210_00010_Trigger'];
WaitEventAutoScriptRun(0, false, false);
SetDlgLower(0, 0, false);
//妻：
//都是你说要来什么偏远一点
//的地方，过着与世无争的生活
//。你看看现在呢？旱灾那么严
//重简直不是人住的地方。
VideoUpdate(0, false);
//夫：
//哼！当初说嫁鸡随鸡、嫁狗
//随狗的是谁？又说我要去哪
//就跟我去哪的是谁？说要跟
//我同甘苦共生死的又是谁？
//现在这点小事就大呼小叫的

['Event_00210_00015_Trigger'];
PlaySound(78);
SetDlgBox(0);
//发现藤甲
AddItem(149, 0);
EventSetState(-1, 0, 0);

