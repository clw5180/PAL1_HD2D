['Event_00271_00001_Trigger'];
SceneEnter(272);
PartySetPos(20, 79, 0);
FadeOut(0);

['Event_00271_00002_Trigger'];
SceneEnter(272);
PartySetPos(17, 48, 1);
FadeOut(0);

['Event_00271_00003_Trigger'];
SceneEnter(272);
PartySetPos(14, 23, 1);
FadeOut(0);

['Event_00271_00004_Trigger'];
SceneEnter(272);
PartySetPos(37, 22, 1);
FadeOut(0);

['Event_00271_00005_Trigger'];
SceneEnter(272);
PartySetPos(38, 47, 1);
FadeOut(0);

['Event_00271_00006_Trigger'];
SceneEnter(272);
PartySetPos(39, 69, 0);
FadeOut(0);

['Event_00271_00007_Trigger'];
SceneEnter(268);
PartySetPos(38, 38, 1);
FadeOut(0);

['Scene_00271_Enter'];
RoleSetDirFrame(2, 0, 0);
WaitEventAutoScriptRun(3, false, false);
EventSetDirFrame(271, 10, 0, 0);
VideoUpdate(0, false);
//小女孩：
//啊．．．~40
EventSetAutoScript(271, 10, "@86B6");
WaitEventAutoScriptRun(10, false, false);
//小女孩：
//客人～对不起，老板娘有事
//出去了，请你等一下再来
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//小妹妹～
//这客栈是你家开的吗？
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//小女孩：
//不是，因为李家哥哥不见了
//李大娘出去找他回来，要我
//替她看店
ReplaceAndPause();

['Event_00271_00010_Trigger'];
SetDlgLower(0, 0, false);
//李逍遥：
//小妹妹～你叫什么名字？
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//小女孩：
//我叫丁香兰
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//李逍遥：
//原来香兰姐小时候就这么乖巧
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//小女孩：
//？？
ReplaceAndPause();
SetDlgUpper(0, 0, false);
//小女孩：
//客人～请您出去吧
//老板娘说今天暂时不作生意了

