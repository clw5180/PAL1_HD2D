['Scene_00268_Enter'];
PartySetPos(11, 74, 0);
ReplaceAndPause();

['Event_00268_00002_Trigger'];
SceneEnter(270);
PartySetPos(55, 118, 1);
FadeOut(0);

['Event_00268_00003_Trigger'];
SceneEnter(271);
PartySetPos(32, 104, 1);
FadeOut(0);

['Event_00268_00004_Trigger'];
SceneEnter(273);
PartySetPos(21, 102, 1);
FadeOut(0);

['Event_00268_00005_Trigger'];
SceneEnter(273);
PartySetPos(19, 66, 1);
FadeOut(0);

['Event_00268_00006_Trigger'];
SceneEnter(273);
PartySetPos(21, 31, 0);
FadeOut(0);

['Event_00268_00001_Trigger'];
SceneEnter(274);
PartySetPos(7, 102, 1);
FadeOut(0);

['Event_00268_00008_Trigger'];
//旺财嫂：
//我说啊．．李家夫妇是不是
//死了啊？怎么这么久都没回来
//留著宝贝儿子在家里也没人管
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//来福婶：
//那小鬼活像是个小流氓似的
//看到就令人讨厌
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//旺财嫂：
//可不是吗，贼生的儿子就是
//一付贼头贼脑的样子
VideoUpdate(0, false);
//来福婶：
//我家前天掉了一把锄头，我
//一直怀疑是不是那小鬼偷去的
ReplaceAndPause();
SetDlgUpper(0, 0, false);
//旺财嫂：
//昨天那小鬼还跟我家大牛打架
//大牛的头被他打一个好大的包
//看的我好心疼哩
VideoRestore();
//要不是看在李大婶的面子上
//我早就把那小鬼抓来教训一顿
ReplaceAndPauseWithNop("Event_00268_00008_Trigger", 0);

['Event_00268_00009_Trigger'];
SetDlgLower(0, 0, false);
//来福婶：
//其实那孩子本性并不坏
//他婶婶一个人照顾店里的生意
//就忙不过来了，哪还有时间管
//教他？小孩子没人管会变坏的
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//旺财嫂：
//唉．．其实小李子也蛮可怜的
//他爹娘干了一辈子的贼，却没
//留下半分家产，李大娘一个女
//人家要抚养他可不容易啊
ReplaceAndPause();
SetDlgLower(0, 0, false);
//来福婶：
//听说李大娘的来头也不小呢
//好像是叫什么铁掌飞凤来著
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//旺财嫂：
//呦～那李家岂不是江湖世家吗
ReplaceAndPauseWithNop("Event_00268_00009_Trigger", 0);

['Event_00268_00007_Trigger'];
//丁大伯：
//嘿咻～嘿咻～
//春夏勤耕种、秋冬收满仓
ReplaceAndPause();
//丁大伯：
//嘿咻～嘿咻～
//儿女若不教、老来没人要
ReplaceAndPauseWithNop("Event_00268_00007_Trigger", 0);

