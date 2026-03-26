['Event_00110_00007_Trigger'];
SetDlgCenter(0, false);
//此人已死．．

['Event_00110_00005_Trigger'];
SetDlgCenter(0, false);
//李逍遥救醒盖罗娇
FadeOut(0);
EventSetState(-1, 0, 0);
EventSetState(2041, 2, 0);
PartySetPos(27, 71, 1);
RoleSetDirFrame(0, 0, 0);
EventSetTriggerScript(112, 1, "@3C95");
VideoUpdate(0, false);
SetDlgUpper(44, 0, false);
//盖罗娇：
//呵～  刚才真不好意思
//对你们下了迷药。不过．．
//我们没有恶意
VideoRestore();
//如你所见，我们并不想让你们
//介入这场战斗，所以使了一点
//手段，希望李少侠莫见怪
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//老板娘．．刚才．．
//除了这些死去的人
//是否还有一位女孩子？
VideoUpdate(0, false);
SetDlgUpper(44, 0, false);
//盖罗娇：
//公主殿下被一位青衣白发
//的老道士带走了
SetDlgLower(2, 0, false);
//李逍遥：
//　　公主．．？
VideoUpdate(0, false);
SetDlgUpper(44, 0, false);
//盖罗娇：
//就是你在找的赵灵儿
//你们的事，我调查很久了
//所以知道你们要经过这里
SetDlgLower(2, 0, false);
//李逍遥：
//那．．
//你可知带走灵儿的是何人？
VideoUpdate(0, false);
SetDlgUpper(44, 0, false);
//盖罗娇：
//那位老道士自称是独孤剑圣
//我中了石长老的赤血毒焰
//只能眼睁睁的看着殿下．．
VideoUpdate(0, false);
SetDlgUpper(21, 0, false);
//林月如：
//剑圣前辈一向嫉恶如仇、为人
//正直，向来为武林同道所敬仰
//灵儿妹子既然被他所搭救，应
//该是福非祸
//李大哥．．我们应该可以放心
SetDlgLower(4, 0, false);
//李逍遥：
//唉．．希望如此。只是．．
EventSetDirFrame(110, 6, 3, 0);
VideoUpdate(0, false);
SetDlgUpper(44, 0, false);
//盖罗娇：
//没想到任务没达成，还把事
//情弄成这样。看来～我只有
//回大理，向族长请罪了
FadeOut(0);
EventSetState(2041, 0, 0);
VideoUpdate(0, false);
SetDlgLower(4, 0, false);
//李逍遥：
//唉．．眼看着灵儿就在我们
//身边不远，却又这样分开了
VideoUpdate(0, false);
SetDlgUpper(21, 0, false);
//林月如：
//李大哥～这里离京城不远
//我有位姨妈住在那，我想
//顺道去看看她，好吗？
RoleSetDirFrame(2, 0, 0);
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//也好．．
PartySetRole(3, 1, 0);

['Scene_00110_Enter'];
MusicPlay(Music.神木林_变奏, false, false);

