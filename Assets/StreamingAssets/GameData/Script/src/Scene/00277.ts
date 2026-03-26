['Event_00277_00001_Trigger'];
SceneEnter(274);
PartySetPos(12, 84, 0);
FadeOut(0);

['Event_00277_00002_Trigger'];
//木匠：
//唉．．最近生意越来越差
//都被对面打铁的给抢走了
VideoUpdate(0, false);
Replace();
//木匠：
//公子～你要买东西吗？
//我这家店的价格最公道了
ShowBuyItemMenu(3);

