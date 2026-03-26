['Event_00203_00001_Trigger'];
SceneEnter(180);
PartySetPos(54, 64, 1);
FadeOut(0);

['Scene_00203_Enter'];
Dos_SetBattlefield(FbpDos.木道人);

['Event_00203_00002_Trigger'];
SceneEnter(207);
PartySetPos(11, 109, 0);
FadeOut(0);

['Event_00203_00011_Trigger'];
JumpIfHeroInParty(4, "@7182");
//士兵：
//什么人？　不许在此地逗留
RoleMoveOneStep(-16, 8, 0);
ReplaceAndPause();
JumpIfHeroInParty(4, "@7182");
//士兵：
//族长有令
//严禁陌生人通关进城
RoleMoveOneStep(-16, 8, 0);

['Event_00203_00004_Trigger'];
//守门士兵：
//少主，你回来就好了，我们
//还在担心你会不会被黑苗族
//的人给抓走了。

['Event_00203_00005_Trigger'];
//守门士兵：
//前天夜里，黑苗族人又来偷袭
//但全被我们给解决掉了。

['Event_00203_00006_Trigger'];
//守门士兵：
//真咽不下这口气！
//小少主，我们挑个时间
//也给他们来个夜袭。

['Event_00203_00007_Trigger'];
//守门士兵：
//我们白苗族战士的士气十分
//高昂，决不会让黑苗族的人
//有可趁之机。

['Event_00203_00012_Trigger'];
SetDlgCenter(0, false);
//黑苗族士兵的尸体

['Event_00203_00003_Trigger'];
SceneEnter(215);
PartySetPos(23, 11, 1);
FadeOut(0);

