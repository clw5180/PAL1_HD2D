['Event_00104_00001_Trigger'];
SceneEnter(102);
PartySetPos(28, 56, 0);
FadeOut(0);

['Event_00104_00002_Trigger'];
SceneEnter(105);
PartySetPos(42, 110, 0);
FadeOut(0);

['Event_00104_00003_Trigger'];
SceneEnter(105);
PartySetPos(47, 106, 0);
FadeOut(0);

['Event_00104_00005_Trigger'];
VideoUpdate(0, false);
SetDlgUpper(83, 0, false);
//女子：
//你们擅自闯进我家来
//不觉得失礼吗？
VideoUpdate(0, false);
SetDlgLower(6, 0, false);
//李逍遥：
//是．．恕在下冒昧
//我们只是想问个路
VideoUpdate(0, false);
SetDlgUpper(83, 0, false);
//女子：
//没路了．．
//这山谷往北的栈道被我拆了
//再过几天，我得把往南的山
//路封起来
SetDlgLower(23, 0, false);
//林月如：
//　这是为什么？
VideoUpdate(0, false);
SetDlgUpper(83, 0, false);
//女子：
//省得再有无聊的男人闯进来
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//姑娘，这里是来往必经之路
//就算这座山谷是你的，你也
//不能这样做呀！
VideoUpdate(0, false);
SetDlgUpper(83, 0, false);
//女子：
//你管不着！
VideoUpdate(0, false);
SetDlgLower(23, 0, false);
//林月如：
//喂．．你这个人很不讲理喔！
VideoUpdate(0, false);
SetDlgUpper(83, 0, false);
//女子：
//这是我住的地方
//请你们出去！
SetDlgLower(1, 0, false);
//李逍遥：
//好好～算我们失礼
RoleSetDirFrame(3, 0, 0);
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//月如～算了，咱们走吧
RoleMoveOneStep(16, 8, 0);
VideoUpdate(0, false);
RoleMoveOneStep(16, 8, 0);
VideoUpdate(0, false);
SceneSetScript(102, "@53EC", "");
ReplaceAndPause();
SetDlgUpper(83, 0, false);
//女子：
//你们还不走吗！？
RoleSetDirFrame(3, 0, 0);
RoleMoveOneStep(16, 8, 0);
VideoUpdate(0, false);
RoleMoveOneStep(16, 8, 0);
VideoUpdate(0, false);

['Event_00104_00007_Trigger'];
EventSetDirFrame(104, 6, 0, 2);
VideoUpdate(0, false);
SetDlgCenter(0, false);
//剖开蛤蟆精肚皮，发现"五毒珠"
AddItem(202, 0);
ReplaceAndPause();
SetDlgCenter(0, false);
//蛤蟆精已死．．

['Scene_00104_Enter'];
Dos_SetBattlefield(FbpDos.女娲神殿);
SetBattleMusic(Music.兵凶战危_2);
MusicPlay(Music.神木林_变奏, false, false);

['Event_00104_00015_Trigger'];
Call("@8E99", 0, 0);
SetDlgBox(0);
//获得傀儡虫
AddItem(92, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

Call("@8E99", 0, 0);
SetDlgBox(0);
//获得铜钱镖
AddItem(284, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

Call("@8E99", 0, 0);
SetDlgBox(0);
//获得银针
AddItem(195, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

['Event_00104_00020_Trigger'];
Call("@8E99", 0, 0);
SetDlgBox(0);
//获得碧血蚕
AddItem(87, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

['Event_00104_00016_Trigger'];
Call("@8E99", 0, 0);
SetDlgBox(0);
//获得幻蛊
AddItem(80, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

['Event_00104_00019_Trigger'];
Call("@8E99", 0, 0);
SetDlgBox(0);
//获得九阴散
AddItem(76, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

