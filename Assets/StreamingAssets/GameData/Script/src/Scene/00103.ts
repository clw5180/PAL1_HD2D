['Event_00103_00001_Trigger'];
SceneEnter(106);
PartySetPos(55, 40, 1);
FadeOut(0);

['Event_00103_00002_Trigger'];
SceneEnter(102);
PartySetPos(56, 109, 0);
FadeOut(0);

['Event_00103_00005_Trigger'];
EventSetState(-1, 0, 0);
EventSetState(1885, 1, 0);
WaitEventAutoScriptRun(12, false, false);
SetDlgUpper(63, 0, false);
//剑圣：
//此地凶险，切莫久留！
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//请问您是．．？
VideoUpdate(0, false);
SetDlgUpper(63, 0, false);
//剑圣：
//老夫夜观星相，预见今日
//此地将发生极大的血光之灾
//劝你们快离开吧！
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//这可不成，我们还得赶路呢
SetDlgUpper(63, 0, false);
//剑圣：
//听不听由你，想活命的话
//速速回头下山去吧！
EventSetAutoScript(103, 6, "@4083");
WaitEventAutoScriptRun(8, false, false);
RoleSetDirFrame(3, 0, 0);
WaitEventAutoScriptRun(2, false, false);
RoleSetDirFrame(3, 0, 1);
WaitEventAutoScriptRun(6, false, false);
EventSetState(0, 0, 0);
SetDlgUpper(2, 0, false);
//李逍遥：
//御剑飞仙！哎呀～高人！
VideoUpdate(0, false);
SetDlgLower(21, 0, false);
//林月如：
//我想起来了，他是剑圣前辈！
//当今武林第一人！
//我小时候曾见过他一面
VideoUpdate(0, false);
SetDlgUpper(1, 0, false);
//李逍遥：
//哎呀．．可惜！
RoleSetDirFrame(2, 0, 1);
VideoUpdate(0, false);
SetDlgLower(21, 0, false);
//林月如：
//可惜什么．．？
VideoUpdate(0, false);
SetDlgUpper(1, 0, false);
//李逍遥：
//早知道我就求他收我为徒
VideoUpdate(0, false);
SetDlgLower(22, 0, false);
//林月如：
//想得美咧！　当人家蜀山派的
//弟子是要出家当三清道士的，
//你这花心大萝卜人家才不收呢
RoleSetDirFrame(0, 0, 0);
VideoUpdate(0, false);
SetDlgUpper(1, 0, false);
//李逍遥：
//我哪一点花啦！？
RoleSetDirFrame(3, 0, 1);
VideoUpdate(0, false);
SetDlgLower(25, 0, false);
//林月如：
//哼～你自己说呢？
VideoUpdate(0, false);
SetDlgUpper(10, 0, false);
//李逍遥：
//好啦好啦．．饶了我吧
//当我是痴人说梦，行了吧？
SetDlgLower(22, 0, false);
//林月如：
//你本来就是痴人说梦
VideoUpdate(0, false);
SetDlgUpper(1, 0, false);
//李逍遥：
//别闹了，咱们还要赶路呢
//要是日落以前没过这山谷
//咱们可就要摸黑下山了
JumpIfEventStateMatches(103, 4, 0, "@405B");
EventSetState(1883, 0, 0);

['Event_00103_00006_Auto'];
EventModifyPos(-1, -1, 0, 8);
GotoWithNop("Event_00103_00006_Auto", 12);

['Event_00103_00004_Trigger'];
//秀才：
//你们也要过这座山吗？
VideoRestore();
//我听人说，这山上出了只蛤
//蟆精，长的就像头牛那么大
//专吃过往人畜，昨天已经死
//了好几个人呢！
VideoUpdate(0, false);
SetDlgLower(9, 0, false);
//李逍遥：
//蛤蟆有什么好怕的？长的再大
//也不过一张嘴、四条腿，噗通
//一声就把它踢下水
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//秀才：
//是．．兄台所言甚是
//小生见兄台身配宝剑
//想必是习武之人。
VideoRestore();
//小生愿意出价二千文钱，请兄
//台当我的保镖，护送我过这段
//山路，不知兄台意下如何？
GotoWithSelect("@52E4");
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//秀才：
//太好了．．我先付您
//一半的前金，另一半等
//到了京城再付给您
SetDlgBox(0);
//得一千文钱
CashModify(1000, "");
EventSetState(-1, 0, 0);
PartySetFollower(Sprite.书生, Sprite.无图像);

['Event_00103_00007_Trigger'];
//旅人：
//一听说这里有妖怪吃人
//我雇的车夫脚役就全跑光了
//真是一群没胆的家伙
VideoRestore();
//唉唉唉～本公子一路游山玩水
//泡女人，怎料偏偏给困在这穷
//山恶水之处，前进也不是、回
//头心又不甘哪！

['Event_00103_00008_Trigger'];
//猎人：
//这山里头的野猪啦、野鹿啦
//突然全都无影无踪，反倒是
//满山遍野冒出成群的癞蛤蟆
//爬来爬去，真是古怪
ReplaceAndPause();
//猎人：
//传说～如果获得成了精的蛤蟆
//剖开它的肚皮，可以找到一颗
//"五毒珠"，而这种宝珠可以避
//百毒，是无价之宝呢！

['Scene_00103_Enter'];
Dos_SetBattlefield(FbpDos.扬州山道);
MusicPlay(Music.神木林, false, false);

NpcMoveToBlock(23, 26, 0, 8);

['Event_00103_00010_Trigger'];
Call("@8E99", 0, 0);
SetDlgBox(0);
//获得冰蚕蛊
AddItem(82, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

