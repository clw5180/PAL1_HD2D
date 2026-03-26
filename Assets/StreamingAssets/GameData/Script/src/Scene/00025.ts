['Event_00025_00001_Trigger'];
SceneEnter(24);
PartySetPos(44, 19, 0);
FadeOut(0);

['Event_00025_00002_Trigger'];
SceneEnter(24);
PartySetPos(50, 25, 0);
FadeOut(0);

['Event_00025_00003_Trigger'];
SceneEnter(23);
PartySetPos(33, 90, 0);
FadeOut(0);

['Event_00025_00004_Trigger'];
SceneEnter(23);
PartySetPos(40, 97, 0);
FadeOut(0);

['Event_00025_00005_Trigger'];
//居民：
//咦，您是哪位？
//是不是要找咱们当家的
//他现在不在家喔！

['Event_00025_00008_Trigger'];
//居民：
//菩萨保佑，保佑我女儿嫁到一
//户好人家，以后不愁吃不愁穿
//这样子我就心满意足了。

['Event_00025_00009_Trigger'];
//少女：
//不要随便进来！

['Event_00025_00006_Trigger'];
//我在跟小狗狗玩

['Event_00025_00007_Trigger'];
EventSetTriggerMode(-1, -1, false, 0);
//小狗狗！你过来
EventSetAutoScript(25, 6, "@1D75");
EventSetAutoScript(-1, -1, "@1D82");

['Event_00025_00010_Trigger'];
//居民：
//你们也来喝一杯吧！

['Event_00025_00011_Trigger'];
//居民：
//这笔生意要是谈成
//我就发了

['Event_00025_00012_Trigger'];
//夫：
//饭做好了没，老伴？我饿坏了

['Event_00025_00013_Trigger'];
//妻：
//快好啦～就只会坐在那边
//催催催，也不帮忙。

['Event_00025_00015_Trigger'];
PlaySound(78);
SetDlgBox(0);
//发现腌肉
AddItem(34, 0);
EventSetState(-1, 0, 0);

['Event_00025_00016_Trigger'];
PlaySound(78);
SetDlgBox(0);
//发现珍珠
AddItem(192, 0);
EventSetState(-1, 0, 0);

['Event_00025_00017_Trigger'];
PlaySound(78);
SetDlgBox(0);
//发现十里香
AddItem(31, 0);
EventSetState(-1, 0, 0);

