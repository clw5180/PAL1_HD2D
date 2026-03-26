['Event_00097_00001_Trigger'];
SceneEnter(83);
PartySetPos(25, 58, 1);
FadeOut(0);

['Event_00097_00002_Trigger'];
SceneEnter(83);
PartySetPos(36, 47, 1);
FadeOut(0);

['Event_00097_00003_Trigger'];
SceneEnter(83);
PartySetPos(31, 72, 0);
FadeOut(0);

['Event_00097_00004_Trigger'];
SceneEnter(85);
PartySetPos(10, 24, 1);
FadeOut(0);

['Event_00097_00005_Trigger'];
//磨刀老头：
//铸兵器呢、讲究的是质良、水净
//及火侯。当然啦，最重要的一点
//就是铸刀师父本身的功力够不够
ReplaceAndPause();
//磨刀老头：
//嘿咻．．嘿咻．．

['Event_00097_00007_Trigger'];
//官差：
//你可曾见过使用
//此种暗器的人吗？
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//李逍遥：
//没有．．
ReplaceAndPause();
//官差：
//那些飞贼所用的暗器
//定是有人供应，只要我在
//各个武器店搜察，一定可
//以找出飞贼的窝

['Event_00097_00006_Trigger'];
//老板：
//客官，要买些什么兵器吗？
VideoUpdate(0, false);
ShowBuyItemMenu(10);

['Event_00097_00008_Trigger'];
//药铺老板：
//公子，瞧您脸色不大好
//是不是要配点药吃吃？
VideoUpdate(0, false);
ShowBuyItemMenu(11);

['Event_00097_00009_Trigger'];
//居民：
//现在扬州城里的生活太没
//保障了，赶紧买把刀防身

['Event_00097_00010_Trigger'];
//居民：
//真不知道这新任太守是干什么
//吃的，抓几个贼有那么难吗？

['Event_00097_00011_Trigger'];
//居民：
//现在扬州城里要做点小买卖都
//不行，三天两头地遭劫挨窃，
//真是太不安全了。

['Event_00097_00005_Auto'];
EventAnimate(Direction.Current);
ReplaceAndPause();
ReplaceAndPauseWithNop("Event_00097_00005_Auto", 0);

