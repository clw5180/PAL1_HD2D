['Event_00044_00002_Trigger'];
SceneEnter(43);
PartySetPos(55, 91, 1);
FadeOut(0);

['Event_00044_00001_Trigger'];
EventSetTriggerMode(-1, -1, false, 2);
SetDlgUpper(0, 0, false);
//张老头：
//哇．．不要抓我呀！
//老汉家里就只有这些破木柴
//可没啥值钱的东西给你们了
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//李逍遥：
//老伯～您别误会！
//我们不是坏人。
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//张老头：
//你．．你们．．不是妖怪啊？
ReplaceAndPause();
SetDlgUpper(0, 0, false);
//张老头：
//我的孙女被蛇妖掳走了
//至今生死不明，我好担心呐
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//李逍遥：
//您孙女叫什么名字？
//我们正要去找那只蛇妖
//说不定可以把她救出来
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//张老头：
//真的啊．．那太好了！
VideoRestore();
//我孙女叫晓慧，那蛇妖的窝
//就在西边山脚下一处洞窟内
//可是那洞内崎岖百折，又有许
//多毒蛇出没，进去很危险的
ReplaceAndPause();
SetDlgUpper(0, 0, false);
//张老头：
//你们千万要小心啊，之前已经
//有许多人在那洞窟中丧命了

