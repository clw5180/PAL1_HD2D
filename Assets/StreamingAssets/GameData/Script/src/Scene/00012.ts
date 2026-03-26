['Event_00012_00002_Trigger'];
MusicPlay(Music.停止播放, false, false);
VideoUpdate(0, false);
EventSetTriggerMode(-1, -1, false, 2);
SetDlgUpper(37, 0, false);
//醉道士：
//哈哈哈！小伙子你果然守信
VideoUpdate(0, false);
SetDlgLower(6, 0, false);
//李逍遥：
//要不是婶婶看得紧，晚辈原本
//还想替老前辈带几壶好酒来
SetDlgUpper(37, 0, false);
//醉道士：
//呵呵！那倒不必了
//老夫喝遍天下名酒，要不是酒
//虫闹得凶，才不稀罕那掺了水
//的酸酒。
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//让前辈见笑了，乡下小店没啥
//美酒佳肴，怠慢不周之处还请
//前辈多多见谅
VideoUpdate(0, false);
SetDlgUpper(37, 0, false);
//醉道士：
//哈～哈哈！这样说才像句人话
//我一生从不亏欠别人，现在就
//教你一式剑招，算是回报你赐
//酒之恩，仔细看清楚了
FadeOut(0);
SetRng(1);
MusicPlay(Music.酒剑仙, false, false);
PlayRng(0, 112, 16);
PlaySound(86);
PlayRng(113, 162, 16);
PlaySound(87);
PlayRng(163, 186, 16);
PlaySound(85);
PlayRng(187, 195, 16);
PlaySound(85);
PlayRng(196, 266, 16);
PlaySound(88);
PlayRng(267, 0, 16);
FadeOut(0);
PartySetPos(21, 25, 0);
HeroSetSprite(0, Sprite.躺李逍遥, true);
RoleSetDirFrame(0, 9, 0);
SetPaletteTime(0);
EventSetState(115, 0, 0);
EventSetState(76, 0, 0);
EventSetState(169, 0, 0);
EventSetState(174, 0, 0);
EventSetTriggerScript(5, 21, "Event_00005_00021_Trigger");
EventSetTriggerScript(5, 20, "Event_00005_00020_Trigger");
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//前辈！请您收我为徒。
SetDlgUpper(37, 0, false);
//醉道士：
//贫道一向漂泊惯了
//不想收徒弟
VideoUpdate(0, false);
RoleSetDirFrame(0, 8, 0);
VideoUpdate(0, false);
SetDlgLower(10, 0, false);
//李逍遥：
//前辈～求求您．．晚辈愿意孝
//敬您下半辈子，跟随您行侠仗
//义，云游四海．．
SetDlgUpper(37, 0, false);
//醉道士：
//你学此一招剑法，便可一生受
//用无穷，你我缘尽于此，回家
//去吧．．
EventSetState(-1, 0, 0);
FadeToScene(2, -1);
RoleSetDirFrame(0, 9, 0);
WaitEventAutoScriptRun(5, false, false);
HeroSetSprite(0, Sprite.李逍遥, true);
RoleSetDirFrame(2, 0, 0);
WaitEventAutoScriptRun(4, false, false);
RoleSetDirFrame(3, 0, 0);
WaitEventAutoScriptRun(2, false, false);
RoleSetDirFrame(1, 0, 0);
WaitEventAutoScriptRun(2, false, false);
RoleSetDirFrame(0, 0, 0);
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//李逍遥：
//前．．前辈！
//还不知道您尊姓大名呢
VideoUpdate(0, false);
SetDlgCenter(0, false);
//"远远传来宏亮的朗诗声"
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//"御剑乘风来　除魔天地间"
//"有酒乐逍遥　无酒我亦癫"
//"一饮尽江河　再饮吞日月"
//"千杯醉不倒　唯我酒剑仙"
SetDlgLower(0, 0, false);
//酒．．剑仙？
HeroAddMagic(48, 1);
RoleModifyHPMP(true, 9999);
SceneSetScript(8, "@0938", "");
EventSetState(172, 2, 0);
EventSetState(173, 2, 0);
EventSetState(49, 0, 0);
EventSetState(102, 0, 0);
EventSetState(103, 0, 0);
EventSetState(104, 0, 0);
EventSetState(105, 0, 0);
EventSetState(78, 2, 0);
EventSetState(79, 2, 0);
EventSetState(80, 2, 0);
EventSetState(81, 2, 0);
EventSetState(82, 2, 0);
EventSetState(88, 2, 0);
EventSetState(89, 1, 0);
EventSetState(86, 2, 0);
EventSetTriggerScript(5, 10, "@0989");
EventSetState(87, 2, 0);
EventSetTriggerScript(5, 11, "@098F");
EventSetState(90, 2, 0);
EventSetState(91, 2, 0);
EventSetState(92, 2, 0);
EventSetState(93, 1, 0);
EventSetState(94, 1, 0);
EventSetTriggerScript(9, 7, "@0D37");
EventSetTriggerScript(9, 2, "");
EventSetTriggerScript(9, 3, "@0993");
EventSetTriggerScript(9, 4, "@099D");
EventSetAutoScript(9, 4, "Event_00006_00014_Auto");
EventSetState(77, 2, 0);
EventSetPos(5, 1, 1152, 1248);
EventSetAutoScript(5, 1, "");
EventSetTriggerScript(5, 1, "@09AC");
EventSetState(57, 2, 0);
EventSetTriggerMode(4, 13, true, 2);
EventSetAutoScript(4, 13, "");
EventSetPos(4, 13, 1088, 1648);
EventSetTriggerScript(4, 13, "@0941");
EventSetState(61, 2, 0);
EventSetState(62, 2, 0);
EventSetPos(4, 17, 1552, 1496);
EventSetPos(4, 18, 1552, 1512);
EventSetTriggerScript(4, 17, "@09A6");
EventSetTriggerScript(4, 18, "@09A6");
EventSetTriggerMode(4, 17, true, 2);
EventSetAutoScript(4, 17, "Event_00002_00026_Auto");
EventSetAutoScript(4, 18, "Event_00023_00016_Auto");
EventSetState(28, 2, 0);

