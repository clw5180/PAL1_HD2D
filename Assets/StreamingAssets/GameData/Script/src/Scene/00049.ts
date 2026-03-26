['Scene_00049_Teleport'];
SceneEnter(50);
PartySetPos(18, 102, 0);
FadeOut(0);

['Event_00049_00007_Trigger'];
EventSetAutoScript(49, 7, "@8D77");
WaitEventAutoScriptRun(0, false, false);
//老农夫：
//这处林子里有许多野鹿呢
//如果运气好，你也许能碰到
ReplaceAndPause();
//不过～野鹿跑的很快，只有在
//经常经过的路上设下陷阱，才
//能捕捉的到

['Event_00049_00008_Trigger'];
EventSetTriggerMode(-1, -1, false, 0);
EventSetAutoScript(-1, -1, "@2889");
ReplaceAndPause();
EventSetTriggerMode(-1, -1, false, 0);
EventSetAutoScript(-1, -1, "@288E");
ReplaceAndPause();
EventSetTriggerMode(-1, -1, false, 0);
EventSetAutoScript(-1, -1, "@2894");
ReplaceAndPause();
['@287F'];
EventSetTriggerMode(-1, -1, false, 0);
EventSetAutoScript(-1, -1, "@2899");
ReplaceAndPause();
EventSetTriggerMode(-1, -1, false, 0);
EventSetAutoScript(-1, -1, "@28A1");
ReplaceAndPause();
EventSetTriggerMode(-1, -1, false, 0);
EventSetAutoScript(-1, -1, "@28A9");
ReplaceAndPauseWithNop("@287F", 0);

['Event_00049_00009_Trigger'];
EventSetState(-1, 0, 0);
AddItem(225, 0);
VideoUpdate(0, false);
SetDlgBox(0);
//收起捕兽夹

['Event_00049_00009_Auto'];
JumpIfEventNotInZone(49, 8, 0, "Event_00049_00009_Auto");
Call("@28BB", 0, 0);
EventSetState(-1, 0, 0);

['Event_00049_00010_Trigger'];
//猎户：
//这位小兄弟，我在前面的林子
//里放了捕兽夹，你走这条路可
//要留神点，别踩着了。
ReplaceAndPause();
//这次我一定要逮到那头雄鹿
ReplaceAndPauseWithNop("Event_00049_00010_Trigger", 0);

['Scene_00049_Enter'];
MusicPlay(Music.小桥流水, false, false);
PartySetPos(14, 104, 1);
RoleSetDirFrame(0, 0, 0);
SetPaletteTime(0);
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//少女：
//多谢公子相救之恩
//请受小女子一拜．．
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//李逍遥：
//不，这点小事你不必放在心上
//我们也是举手之劳而已。
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//少女：
//寒舍就在前面不远的白河村
//二位若不嫌弃，欢迎到寒舍
//来奉茶
WaitEventAutoScriptRun(30, false, false);
VideoFadeAndUpdate(-4);
EventSetState(791, 0, 0);
EventSetState(792, 0, 0);
EventSetState(793, 0, 0);
EventSetState(794, 0, 0);
EventSetState(795, 0, 0);
VideoUpdate(0, true);
SetDlgLower(4, 0, false);
//李逍遥：
//唉．．无心插柳～
VideoUpdate(0, false);
SetDlgUpper(21, 0, false);
//林月如：
//别灰心嘛～我相信灵儿妹子
//一定不会有事的．．
SetDlgLower(4, 0, false);
//李逍遥：
//看来．．只得从头找起了
Replace();
Dos_SetBattlefield(FbpDos.鬼阴山);

['Event_00049_00002_Auto'];
ReplaceAndPause();
['Event_00049_00003_Auto'];
EventAnimate(Direction.Southwest);
ReplaceAndPauseWithNop("Event_00049_00003_Auto", 0);

ReplaceAndPause();
