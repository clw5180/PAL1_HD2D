['Event_00030_00001_Trigger'];
SceneEnter(24);
PartySetPos(22, 58, 1);
FadeOut(0);

['Event_00030_00002_Trigger'];
//当铺老板：
//来当东西的是吧？
//闲话咱们就甭说了，把
//你要典当的东西拿出来！
VideoUpdate(0, false);
Replace();
ShowSellItemMenu();

['Event_00030_00003_Trigger'];
//赌鬼：
//借我钱翻本好不好
GotoWithSelect("@1D35");
CashModify(-50, "");
EventSetTriggerScript(30, 4, "@1D4E");
EventSetAutoScript(-1, -1, "@1D44");
VideoUpdate(0, false);
Replace();
//谢谢，我赢了钱一定还你

['Event_00030_00004_Trigger'];
//居民：
//别理那个赌鬼
//他把家产全睹光了，还不甘心
//见到人就借钱，还想翻本

