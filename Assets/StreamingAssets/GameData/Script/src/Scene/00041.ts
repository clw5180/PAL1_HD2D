['Scene_00041_Teleport'];
SetDlgLower(1, 0, false);
//李逍遥：
//这里就是蛇妖的洞窟吗？
RoleSetDirFrame(3, 0, 0);
VideoUpdate(0, false);
SetDlgUpper(21, 0, false);
//林月如：
//没错，就是这里
VideoUpdate(0, false);
SetDlgLower(9, 0, false);
//李逍遥：
//你留下来，在这里等我
SetDlgUpper(22, 0, false);
//林月如：
//不行～　我也要进去
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//你是女孩子，万一有个什么
//．．岂不是太危险了！
VideoUpdate(0, false);
SetDlgUpper(21, 0, false);
//林月如：
//我要是出了什么事．．
//你会保护我吧？
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//那是当然的
VideoUpdate(0, false);
SetDlgUpper(21, 0, false);
//林月如：
//嘻～这不就结了
//还磨菇什么，走嘛！
RoleSetDirFrame(1, 0, 0);
VideoUpdate(0, false);
Replace();
SceneEnter(45);
PartySetPos(57, 117, 0);
FadeOut(0);
PartySetRole(1, 3, 0);

['Event_00041_00001_Trigger'];
SceneEnter(47);
PartySetPos(18, 105, 1);
FadeOut(0);

['Event_00041_00002_Trigger'];
SceneEnter(47);
PartySetPos(52, 106, 0);
FadeOut(0);

['Event_00041_00032_Trigger'];
Call("@8E99", 0, 0);
SetDlgBox(0);
//获得止血草
AddItem(39, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

['Event_00041_00034_Trigger'];
Call("@8E99", 0, 0);
SetDlgBox(0);
//获得忘魂花
AddItem(67, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

['Event_00041_00031_Trigger'];
Call("@8E99", 0, 0);
SetDlgBox(0);
//获得雄黄
AddItem(27, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

Call("@8E99", 0, 0);
SetDlgBox(0);
//获得酒
AddItem(26, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

Call("@8E99", 0, 0);
SetDlgBox(0);
//获得雄黄酒
AddItem(28, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

['Event_00041_00033_Trigger'];
Call("@8E99", 0, 0);
SetDlgBox(0);
//获得银针
AddItem(195, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

['Event_00041_00003_Auto'];
NpcChase(0, 0, false);
GotoWithNop("Event_00041_00003_Auto", 0);

['Event_00041_00004_Trigger'];
BattleStart(7, "@A073", "@A071");
GotoWithNop("@A0A7", 0);

['Event_00041_00006_Trigger'];
BattleStart(14, "@A073", "@A071");
GotoWithNop("@A0A7", 0);

