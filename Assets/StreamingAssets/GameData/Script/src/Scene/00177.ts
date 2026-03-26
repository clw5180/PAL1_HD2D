['Event_00177_00017_Trigger'];
NpcSetFrame(1);
VideoUpdate(0, false);
SetDlgBox(0);
//摘得两支"香蕉"
AddItem(231, 2);
ReplaceAndPause();

['Event_00177_00001_Trigger'];
SceneEnter(187);
PartySetPos(56, 72, 1);
FadeOut(0);

['Event_00177_00002_Trigger'];
SceneEnter(175);
PartySetPos(22, 39, 0);
FadeOut(0);

['Event_00177_00003_Trigger'];
SetDlgBox(0);
//得到九只蛊
AddItem(88, 9);
ReplaceAndPause();

['Event_00177_00004_Trigger'];
SetDlgBox(0);
//采得二株忘魂花
AddItem(67, 2);
ReplaceAndPause();

['Event_00177_00005_Trigger'];
SetDlgBox(0);
//得一株血海棠
AddItem(64, 0);
ReplaceAndPause();

['Event_00177_00006_Trigger'];
SetDlgBox(0);
//采得二颗试炼果
AddItem(52, 2);
ReplaceAndPause();

['Event_00177_00007_Trigger'];
SetDlgBox(0);
//采得一颗鼠儿果
AddItem(44, 0);

['Event_00177_00008_Trigger'];
SetDlgBox(0);
//采得一颗龙涎草
AddItem(46, 0);
ReplaceAndPause();

['Event_00177_00009_Trigger'];
SetDlgBox(0);
//采得一颗九节菖蒲
AddItem(29, 0);
ReplaceAndPause();

['Event_00177_00013_Trigger'];
EventSetState(-1, 0, 0);
VideoUpdate(0, false);
//摘得一株紫罂粟
AddItem(68, 0);

['Event_00177_00014_Trigger'];
EventSetState(-1, 0, 0);
VideoUpdate(0, false);
//摘得一株醍醐香
AddItem(66, 0);

['Event_00177_00015_Trigger'];
EventSetState(-1, 0, 0);
VideoUpdate(0, false);
//摘得一株鬼枯藤
AddItem(69, 0);

['Scene_00177_Enter'];
MusicPlay(Music.灵山, false, false);

['Event_00177_00010_Trigger'];
EventSetState(-1, 0, 0);
VideoUpdate(0, false);
PlaySound(78);
SetDlgBox(0);
//获得灵山仙芝
AddItem(47, 0);

['Event_00177_00016_Auto'];
GotoWithProbability(25, "");
GotoWithProbability(85, "@971D");
GotoWithProbability(82, "@9722");
GotoWithProbability(80, "@9727");
GotoWithProbability(80, "@972C");
GotoWithProbability(75, "@9731");
GotoWithProbability(70, "@9736");
GotoWithProbability(65, "@973B");
GotoWithProbability(60, "@9740");
GotoWithProbability(5, "");
ReplaceAndPauseWithNop("Event_00177_00016_Auto", 0);
['@971D'];
PlaySound(63);
WaitEventAutoScriptRun(12, false, false);
GotoWithProbability(20, "");
GotoWithProbability(70, "@9722");
ReplaceAndPauseWithNop("Event_00177_00016_Auto", 0);
['@9722'];
PlaySound(64);
WaitEventAutoScriptRun(14, false, false);
GotoWithProbability(20, "");
GotoWithProbability(45, "@971D");
ReplaceAndPauseWithNop("Event_00177_00016_Auto", 0);
['@9727'];
PlaySound(65);
WaitEventAutoScriptRun(6, false, false);
GotoWithProbability(20, "");
GotoWithProbability(70, "@9727");
ReplaceAndPauseWithNop("Event_00177_00016_Auto", 0);
['@972C'];
PlaySound(68);
WaitEventAutoScriptRun(8, false, false);
GotoWithProbability(20, "");
GotoWithProbability(75, "@9731");
ReplaceAndPauseWithNop("Event_00177_00016_Auto", 0);
['@9731'];
PlaySound(69);
WaitEventAutoScriptRun(6, false, false);
GotoWithProbability(20, "");
GotoWithProbability(75, "@9736");
ReplaceAndPauseWithNop("Event_00177_00016_Auto", 0);
['@9736'];
PlaySound(70);
WaitEventAutoScriptRun(8, false, false);
GotoWithProbability(20, "");
GotoWithProbability(75, "@972C");
ReplaceAndPauseWithNop("Event_00177_00016_Auto", 0);
['@973B'];
PlaySound(84);
WaitEventAutoScriptRun(8, false, false);
GotoWithProbability(40, "");
GotoWithProbability(25, "@9740");
ReplaceAndPauseWithNop("Event_00177_00016_Auto", 0);
['@9740'];
PlaySound(83);
WaitEventAutoScriptRun(8, false, false);
ReplaceAndPauseWithNop("Event_00177_00016_Auto", 0);

