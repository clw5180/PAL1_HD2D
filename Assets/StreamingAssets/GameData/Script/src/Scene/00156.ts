['Scene_00156_Enter'];
PartySetPos(32, 100, 0);
RoleSetDirFrame(2, 0, 0);
MusicPlay(Music.看尽前尘, false, false);
WaitEventAutoScriptRun(8, false, false);
SetDlgUpper(37, 0, false);
//酒剑仙：
//"到啦！你可以睁开眼睛了"
WaitEventAutoScriptRun(5, false, false);
EventSetDirFrame(156, 3, 1, 0);
WaitEventAutoScriptRun(2, false, false);
RoleSetDirFrame(3, 0, 0);
WaitEventAutoScriptRun(4, false, false);
EventSetDirFrame(156, 3, 3, 0);
WaitEventAutoScriptRun(2, false, false);
RoleSetDirFrame(0, 0, 0);
WaitEventAutoScriptRun(4, false, false);
EventSetDirFrame(156, 3, 2, 0);
RoleSetDirFrame(1, 0, 0);
WaitEventAutoScriptRun(2, false, false);
EventSetDirFrame(156, 3, 3, 0);
WaitEventAutoScriptRun(6, false, false);
RoleSetDirFrame(2, 0, 0);
WaitEventAutoScriptRun(2, false, false);
SetDlgLower(3, 0, false);
//李逍遥：
//真神奇！　您施的是什么法术
//这么快就到了？
VideoUpdate(0, false);
SetDlgUpper(37, 0, false);
//酒剑仙：
//呵呵～这是本门的飞仙术
//无论多远的地方，只要一
//眨眼的功夫就到了
VideoUpdate(0, false);
SetDlgLower(3, 0, false);
//李逍遥：
//哗～您一定要教我这种法术！
SetDlgUpper(37, 0, false);
//酒剑仙：
//有时间我再教你，先随我
//去见大师兄吧！
EventSetAutoScript(156, 1, "@580F");
WaitEventAutoScriptRun(8, false, false);
EventSetDirFrame(156, 3, 2, 0);
WaitEventAutoScriptRun(8, false, false);
EventSetDirFrame(156, 3, 3, 0);
WaitEventAutoScriptRun(6, false, false);
SetDlgLower(25, 0, false);
//林月如：
//这里好冷喔．．
//跟我想像的不太一样
RoleSetDirFrame(1, 0, 0);
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//冷？　那就快进去屋内吧
RoleSetDirFrame(2, 0, 0);
WaitEventAutoScriptRun(4, false, false);
SetDlgLower(24, 0, false);
//林月如：
//李大哥．．要是．．
//他们要正式收你做弟子
//你．．你会留下来吗？
RoleSetDirFrame(1, 0, 0);
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//这．．．看情形吧
EventSetDirFrame(156, 3, 0, 0);
VideoUpdate(0, false);
SetDlgLower(25, 0, false);
//林月如：
//那～你自己进去！
//我在这里等到你出来为止
VideoUpdate(0, false);
SetDlgLower(6, 0, false);
//李逍遥：
//好好好～我只去打听灵儿
//的下落，其他的事都不做
//可以了吧？
EventSetDirFrame(156, 3, 3, 0);
VideoUpdate(0, false);
SetDlgLower(22, 0, false);
//林月如：
//那当然！　你要是当了道士
//我就先剃光你的头再说
PartySetRole(1, 3, 0);
EventSetState(2520, 0, 0);
RoleRevive(true, 10);
RoleModifyHPMP(true, 9999);
ReplaceAndPause();
MusicPlay(Music.看尽前尘, false, false);

['Event_00156_00001_Auto'];
WaitEventAutoScriptRun(4, false, false);
NpcSetDirFrame(3, 0);
ReplaceAndPause();
NpcSetDirFrame(0, 0);

['Event_00156_00002_Trigger'];
EventSetTriggerMode(-1, -1, false, 0);
WaitEventAutoScriptRun(0, false, false);
SetDlgUpper(37, 0, false);
//酒剑仙：
//"对了！　你记住．．暂时
//在我师兄面前不要叫我师父
//依本派门规未经掌门人同意
//门下弟子不得在外擅自收徒
//你可别害我被大师兄骂
//知道吗？"
SetDlgLower(1, 0, false);
//李逍遥：
//是．．！
EventSetAutoScript(156, 2, "@5822");
WaitEventAutoScriptRun(4, false, false);

['Event_00156_00004_Trigger'];
SceneEnter(158);
PartySetPos(18, 104, 0);
FadeOut(0);

