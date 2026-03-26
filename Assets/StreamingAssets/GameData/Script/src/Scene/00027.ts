['Event_00027_00001_Trigger'];
SceneEnter(26);
PartySetPos(25, 29, 1);
FadeOut(0);

['Event_00027_00002_Trigger'];
SceneEnter(26);
PartySetPos(30, 34, 1);
FadeOut(0);

['Event_00027_00003_Trigger'];
SceneEnter(26);
PartySetPos(35, 39, 1);
FadeOut(0);

['Event_00027_00004_Trigger'];
SetDlgBox(0);
//满桌都是吃剩的酒菜

['Event_00027_00008_Trigger'];
SetDlgLower(1, 0, false);
//李逍遥：
//灵儿～该起床了！
SetDlgUpper(0, 0, false);
//赵灵儿：
//唔～　人家还要睡嘛．．
WaitEventAutoScriptRun(8, false, false);
SetDlgLower(1, 0, false);
//李逍遥：
//太阳晒屁股啰～快起来快起来
//逍遥哥哥说好要带你逛苏州城
//你再赖床，我就不带你去啰！
EventSetState(-1, 0, 0);
EventSetState(509, 1, 0);
VideoUpdate(0, false);
SetDlgUpper(12, 0, false);
//赵灵儿：
//嘻～　人家要去！
EventSetState(509, 0, 0);
PartySetRole(1, 2, 0);
EventSetTriggerScript(26, 15, "Event_00026_00015_Trigger");

['Event_00027_00006_Auto'];
WaitEventAutoScriptRun(2, false, false);
NpcSetFrame(1);
WaitEventAutoScriptRun(6, false, false);
NpcSetFrame(0);
WaitEventAutoScriptRun(7, false, false);
ReplaceAndPauseWithNop("Event_00027_00006_Auto", 0);

['Event_00027_00011_Trigger'];
//赵海：
//我乃是太湖巨鲸帮少帮
//主─赵海，林天南的女儿
//我是要定了。
VideoRestore();
//你们别想跟我抢！

['Event_00027_00012_Trigger'];
//宋元祺：
//吾乃岭南十三鹰排行老七的
//宋元祺，阁下八成也是来
//参加林家的比武招亲吧？
SetDlgLower(0, 0, false);
//李逍遥：
//不是！不是！
//我们只是路过此地的人。

