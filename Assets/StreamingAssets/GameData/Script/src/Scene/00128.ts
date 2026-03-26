['Event_00128_00001_Trigger'];
SceneEnter(101);
PartySetPos(29, 37, 1);
FadeOut(0);

['Event_00128_00002_Trigger'];
Call("@8E0D", 0, 0);
SceneEnter(129);
PartySetPos(22, 81, 1);
FadeOut(0);

['Event_00128_00003_Trigger'];
//小二：
//客官，楼上雅座。

['Event_00128_00003_Auto'];
NpcMoveToBlockMutexLock(35, 37, 1, 2);
NpcMoveToBlockMutexLock(30, 43, 0, 2);
WaitEventAutoScriptRun(8, false, false);
NpcSetDirFrame(1, 0);
WaitEventAutoScriptRun(3, false, false);
NpcMoveToBlockMutexLock(25, 38, 1, 2);
WaitEventAutoScriptRun(8, false, false);
NpcMoveToBlock(28, 36, 0, 3);
NpcMoveToBlock(26, 34, 1, 3);
NpcSetDirFrame(2, 0);
WaitEventAutoScriptRun(8, false, false);
NpcMoveToBlockMutexLock(33, 40, 1, 2);
NpcMoveToBlockMutexLock(36, 38, 0, 2);
NpcMoveToBlockMutexLock(31, 33, 1, 2);
WaitEventAutoScriptRun(8, false, false);
ReplaceAndPauseWithNop("Event_00128_00003_Auto", 0);

['Event_00128_00005_Trigger'];
//小二：
//我在这儿打工，从早做到晚
//累得要命，但是工钱就那么
//一丁点儿，真不是滋味。

['Event_00128_00008_Trigger'];
//算命仙：
//呵～　公子，我们又见面了！
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//您是．．．？
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//算命仙：
//公子真是贵人多忘事
VideoRestore();
//贫道曾经在苏州替你和另一位
//小姑娘看过相。结果公子说：
//贫道胡言乱语，拒不付钱
//你忘记了吗？
SetDlgLower(3, 0, false);
//李逍遥：
//对对对．．我想起来了
//那时你说我会有桃花运
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//算命仙：
//贫道还推算出，那位小姑娘
//会遭遇人生中的劫难．．
//结果．．您认为准不准呀？
VideoUpdate(0, false);
SetDlgLower(6, 0, false);
//李逍遥：
//现在回想．．道长说的
//还真是一字不差！
VideoRestore();
//当初～实在不好意思
//我现在把看相的钱补给您
VideoUpdate(0, false);
['@4E66'];
SetDlgUpper(0, 0, false);
//算命仙：
//呵～　过去就算了
ReplaceAndPause();
CashModify(-500, "@4E66");
SetDlgLower(6, 0, false);
//李逍遥：
//道长，这些钱您收下吧
//要不然我们实在过意不去呢
SetDlgBox(0);
//付给算命仙五百文钱
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//算命仙：
//嗯～看在你这份心上
//贫道再奉送你一句箴言
//"魔非魔、道非道，善恶在人心"
//"欲非欲、情非情，姻缘由天定"
SetDlgLower(1, 0, false);
//李逍遥：
//．．．．．．不懂。
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//算命仙：
//时候到了，你自然会懂
ReplaceAndPause();
SetDlgUpper(0, 0, false);
//算命仙：
//魔非魔、道非道，善恶在人心
//欲非欲、情非情，姻缘由天定
//谨之～　慎之～

['Event_00128_00009_Trigger'];
SetDlgLower(0, 0, false);
//醉汉甲：
//呵．．啊．．我告诉你呀！
//咱们这里出了一位神秘的
//美女，知道是谁吗？
VideoUpdate(0, false);
//醉汉乙：
//不用你说大家都知道
//．．是刘家少奶奶！
VideoUpdate(0, false);
//醉汉甲：
//哈哈～大家都在猜．．
//她的出身、她的来历～哈
//大家通通不知道她是哪里
//来的，只有我知道！
VideoUpdate(0, false);
//醉汉乙：
//哦～你倒是说说看！
VideoUpdate(0, false);
//醉汉甲：
//她叫～彩依，对不对？
//她是皇上的亲妹妹～宁国公主
VideoRestore();
//听说是因为她的皇帝哥哥要把
//她嫁给回纥王子和亲，她不肯
//就在迎亲的途中逃走，躲着、
//躲着，就躲到尚书府去了
VideoUpdate(0, false);
//醉汉乙：
//不对、不对！我说的才对
//我在洛阳见过彩依姑娘
//她是迎春阁的第一名妓
//以前她跟我是老相好呢！
VideoUpdate(0, false);
//醉汉甲：
//你醉啦！你在胡说些什麽呀
//你什么时候去过洛阳了？
VideoUpdate(0, false);
//醉汉乙：
//你才醉了呢！　人家是尚书
//是朝廷大臣，怎么会认不出
//来她是公主
ReplaceAndPause();
//醉汉：
//嗝～　你才醉了，我没醉！

['Event_00128_00006_Trigger'];
SetDlgLower(0, 0, false);
//客人甲：
//刘尚书的公子到底得了什么怪
//病，已经好久没见到他人影了。
VideoUpdate(0, false);
//客人乙：
//我也不太清楚，听我在尚书府
//做事的朋友说，每天一犯起病
//来，痛不欲生，难过的要命。

