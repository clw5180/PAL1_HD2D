['Event_00029_00001_Trigger'];
SceneEnter(26);
PartySetPos(15, 44, 1);
FadeOut(0);

//管家

['Event_00029_00003_Trigger'];
//赌场老板：
//欢迎呀！客官，来玩几手吧！
//所谓「小赌可创业、大赌可兴
//家」的道理您有没有听过啊？

['Event_00029_00004_Trigger'];
//赌客：
//小兄弟啊！我劝告你
//俗语说：「十赌九输」
//千万别沉迷赌博喔！

['Event_00029_00005_Trigger'];
//赌客：
//奇怪了，怎么今天运气这么差

['Event_00029_00006_Trigger'];
//赌客：
//小心！这家赌场好像会出老千
//要不然今天怎么会输的那么惨

['Event_00029_00007_Trigger'];
//赌客：
//哈！哈！哈！
//今天我可捞回本了。

['Event_00029_00008_Trigger'];
//赌客：
//完蛋了！连棺材本都赔了进
//去，这下子嗝屁了。

['Event_00029_00009_Trigger'];
//赌客：
//小兄弟，快！
//跟着我下，准没错。

//赌客：
//哎呀！为什么我一押单就开双
//、押双就开单，这家赌场是不
//是作弊啊！

['Event_00029_00010_Trigger'];
//赌客：
//下下下！
//下好离手，就要开啦！

['Event_00029_00002_Trigger'];
MusicStop(0);
WaitEventAutoScriptRun(6, false, false);
//打死他！　踹死他！
//癞蛤蟆想吃天鹅肉
//自己撒泡尿去照照吧！
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//李逍遥：
//等等！　诸位有话好说
Dos_SetBattlefield(FbpDos.隐龙窟);
BattleStart(23, "@A073", "");
BattleEnd();
EventSetStateSequence(24, 16, 30, 0);
EventSetAutoScript(29, 2, "");
EventSetDirFrame(29, 2, 0, 2);
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//书生：
//哎呦．．得救了．．
EventSetState(-1, 0, 0);
SceneSetScript(27, "@1A7D", "");
SceneEnter(27);
FadeOut(0);
MusicPlay(Music.繁华看尽, false, false);

['Event_00029_00002_Auto'];
NpcSetFrame(0);
WaitEventAutoScriptRun(2, false, false);
NpcSetFrame(1);
ReplaceAndPause();
ReplaceAndPauseWithNop("Event_00029_00002_Auto", 0);

