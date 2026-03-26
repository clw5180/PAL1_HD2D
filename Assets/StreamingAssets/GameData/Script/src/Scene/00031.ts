['Event_00031_00002_Trigger'];
//药铺老板：
//客官您好，
//想要抓些什么药吗？
VideoUpdate(0, false);
Replace();
ShowBuyItemMenu(5);

['Event_00031_00001_Trigger'];
SceneEnter(24);
PartySetPos(17, 53, 1);
FadeOut(0);

['Event_00031_00003_Trigger'];
//少女：
//我该怎么办？娘身染重病、
//我又没钱配药，难道这真的
//就是穷人家的命吗？
SetDlgLower(11, 0, false);
//赵灵儿：
//逍遥哥哥～我们帮她好不好？
GotoWithSelect("@1D2D");
VideoUpdate(0, false);
CashModify(-100, "@1D35");
SetDlgLower(1, 0, false);
//李逍遥：
//小妹妹来，这儿有一百文钱
//先拿去用，买了药后赶紧回
//家吧！
VideoUpdate(0, false);
Replace();
SetDlgUpper(0, 0, false);
//少女：
//谢谢、谢谢您的大恩大德。

