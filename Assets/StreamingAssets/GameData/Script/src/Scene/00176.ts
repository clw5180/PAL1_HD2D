['Event_00176_00006_Trigger'];
SceneEnter(181);
PartySetPos(29, 32, 1);
FadeOut(0);

['Event_00176_00007_Trigger'];
SceneEnter(191);
PartySetPos(29, 117, 1);
FadeOut(0);

['Event_00176_00001_Trigger'];
SceneEnter(192);
PartySetPos(43, 83, 0);
FadeOut(0);

['Event_00176_00002_Trigger'];
SceneEnter(192);
PartySetPos(29, 60, 1);
FadeOut(0);

['Event_00176_00003_Trigger'];
SceneEnter(192);
PartySetPos(46, 31, 1);
FadeOut(0);

['Event_00176_00004_Trigger'];
SceneEnter(192);
PartySetPos(19, 22, 0);
FadeOut(0);

['Event_00176_00005_Trigger'];
SceneEnter(192);
PartySetPos(16, 92, 1);
FadeOut(0);

['Scene_00176_Enter'];
MusicPlay(Music.桃花幻梦, false, false);

['Event_00176_00010_Trigger'];
EventSetTriggerMode(-1, -1, false, 0);
SetDlgLower(1, 0, false);
//李逍遥：
//这位大婶，请问．．
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//村民：
//　　呀　～　啊！！
EventSetAutoScript(-1, -1, "@68A3");
WaitEventAutoScriptRun(8, false, false);
RoleMoveOneStep(-16, -8, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(-16, -8, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(-16, -8, 0);
WaitEventAutoScriptRun(4, false, false);
RoleSetDirFrame(2, 0, 0);
WaitEventAutoScriptRun(2, false, false);
ReplaceAndPause();
//村民：
//你是谁？　不要进来！
EventSetState(-1, 0, 0);
VideoUpdate(0, false);
EventSetState(2895, 2, 0);
EventSetState(2896, 2, 0);
VideoUpdate(0, false);

['Event_00176_00011_Trigger'];
EventSetTriggerMode(-1, -1, false, 0);
EventSetAutoScript(176, 11, "@68C4");
WaitEventAutoScriptRun(8, false, false);
//小孩：
//你们是谁呀？
VideoUpdate(0, false);
//妇人：
//丹丹！　快进来！
EventSetDirFrame(176, 12, 1, 0);
WaitEventAutoScriptRun(5, false, false);
EventSetDirFrame(176, 12, 3, 0);
WaitEventAutoScriptRun(5, false, false);
EventSetAutoScript(176, 12, "@68C7");
WaitEventAutoScriptRun(6, false, false);
EventSetState(2901, 2, 0);
EventSetState(2902, 2, 0);
WaitEventAutoScriptRun(4, false, false);
SetDlgLower(1, 0, false);
//李逍遥：
//怎么．．这里的人一
//看到我们就躲起来？

['Event_00176_00013_Trigger'];
EventSetTriggerMode(-1, -1, false, 0);
EventSetAutoScript(-1, -1, "@68E6");
SetDlgCenter(0, false);
//啊．．！
WaitEventAutoScriptRun(2, false, false);

['Event_00176_00022_Trigger'];
EventSetTriggerMode(-1, -1, false, 2);
WaitEventAutoScriptRun(0, false, true);
SetDlgLower(46, 0, false);
//阿桃：
//请问你们是．．．？
RoleSetDirFrame(0, 0, 0);
RoleSetDirFrame(0, 0, 1);
VideoUpdate(0, false);
SetDlgLower(3, 0, false);
//李逍遥：
//太好了，终于有人肯跟我们说话
VideoUpdate(0, false);
SetDlgUpper(46, 0, false);
//阿桃：
//你们是如何进来的？　一般
//外人是不可能找到我们村子的
VideoUpdate(0, false);
SetDlgLower(6, 0, false);
//李逍遥：
//我们糊里糊涂的就走到这来了
VideoRestore();
//对了．．请问这是什么地方？
//为何村民们看到我们就躲起来
VideoUpdate(0, false);
SetDlgUpper(46, 0, false);
//阿桃：
//我们这儿叫桃源村
//很少有外人能走进村子来
VideoRestore();
//而且最近发生了一件事
//所以大家看到陌生人会害怕
EventSetState(2910, 2, 0);
EventSetState(2911, 2, 0);
EventSetState(2912, 2, 0);
EventSetState(2913, 2, 0);
EventSetState(2914, 2, 0);
WaitEventAutoScriptRun(24, false, false);
RoleSetDirFrame(3, 0, 1);
WaitEventAutoScriptRun(10, false, false);
NpcSetDirFrame(2, 0);
WaitEventAutoScriptRun(14, false, false);
RoleSetDirFrame(2, 0, 0);
WaitEventAutoScriptRun(20, false, false);
SetDlgUpper(0, 0, false);
//妇人甲：
//阿桃呀～你忘了教训了吗？
//不要随便相信外来人啊！
NpcSetDirFrame(3, 0);
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//妇人乙：
//是啊，阿桃．．
//外面的人都不是好东西
//你不要又受骗一次了
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//村民：
//咱们桃源乡一向与世隔绝
//自给自足，生活无忧无虑
//自从那个叫宋贺文的小子
//来过之后就全变样了
NpcSetDirFrame(2, 0);
EventSetDirFrame(176, 24, 3, 0);
VideoUpdate(0, false);
//妇人乙：
//是啊！那小子真不是东西
//枉费我们对他那么好，竟然
//恩将仇报
RoleSetDirFrame(3, 0, 0);
VideoUpdate(0, false);
SetDlgLower(3, 0, false);
//李逍遥：
//各位别误会，我们不是坏人
//我们来这里没有任何恶意
EventSetDirFrame(176, 24, 0, 0);
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//妇人乙：
//我又不是说你
//我们说的是姓宋的那王八蛋
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//你们能不能告诉我
//那宋什么的到底做了什么
//会让你们痛恨成这个样子？
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//村民：
//不行，桃源乡的秘密绝对不能
//让外人知道，否则麻烦就大了
EventSetDirFrame(176, 25, 3, 0);
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//村人丙：
//现在再说这个有啥用？
//阿桃她爹都已经被他们抓走了
VideoRestore();
//可怜呐～村长那么大把年纪
//一定禁不起那些坏人的折腾
//说不定已经把藏宝物的地方
//给供出来了
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//村民：
//唉．．
//一个月前，阿桃救了一位误闯
//桃源村的采药郎中，还医好他
//的桃花瘴。我们看难得有外人
//来此，想尽尽地主之谊，于是
//款待他住了几天，最后依照惯
//例送他出桃源乡之前，让他喝
//下仙水好忘记这里的一切，谁
//知道阿桃竟把仙水给偷换了
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//村人丙：
//那厮真贪心，知道我们桃源乡
//有件宝物，就和一群妖道合谋
//来抢夺。他们抓走了村长，想
//要逼问出宝物的所在
VideoRestore();
//对了～你们该不会也是和
//他们一伙儿的吧？
RoleSetDirFrame(2, 0, 0);
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//不不，我生平最痛恨的也就是
//忘恩负义之徒。你们告诉我
//那些家伙在哪里，我帮你们
//把村长救回来
EventSetDirFrame(176, 25, 0, 0);
VideoUpdate(0, false);
SetDlgLower(46, 0, false);
//阿桃：
//真的！　那太好了．．
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//村民：
//阿桃！　你又犯了
//这么轻易就相信外来人
SetDlgLower(46, 0, false);
//阿桃：
//可是．．我好担心爹．．
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//妇人乙：
//那个鼻子长长的道士不是说
//只要交出宝物，他们是不会
//伤害村长的
VideoUpdate(0, false);
SetDlgLower(46, 0, false);
//阿桃：
//可是．．爹已经跟他们
//去大半天了～会不会．．
RoleSetDirFrame(2, 0, 1);
VideoUpdate(0, false);
SetDlgLower(27, 0, false);
//阿奴：
//你们说的那个长鼻子道士
//是不是叫作木道人？
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//村民：
//你们怎么知道？
RoleSetDirFrame(0, 0, 1);
VideoUpdate(0, false);
SetDlgLower(29, 0, false);
//阿奴：
//哈～这就对了！　那木道人是
//只树精变的，他最喜欢四处收
//集奇珍异宝，而且得不到就用
//抢的
//我们也正在找他，要向他讨
//回一件东西。你们快告诉我
//他在哪里？
NpcSetDirFrame(1, 0);
RoleSetDirFrame(0, 0, 0);
VideoUpdate(0, false);
SetDlgUpper(46, 0, false);
//阿桃：
//我爹带着他们从这方向
//往林子里走去了
EventSetState(2895, 0, 0);
EventSetState(2896, 0, 0);
EventSetState(2901, 0, 0);
EventSetState(2902, 0, 0);
EventSetState(2903, 0, 0);
EventSetState(2904, 0, 0);
EventSetState(2905, 0, 0);
EventSetState(2906, 0, 0);
EventSetState(2907, 0, 0);
EventSetState(2908, 0, 0);
EventSetState(2897, 0, 0);
EventSetState(2898, 0, 0);
EventSetState(2899, 0, 0);
EventSetState(2900, 0, 0);
ReplaceAndPause();
SetDlgUpper(46, 0, false);
//阿桃：
//求求你把我爹救回来
//还有．．
//请你们不要为难宋公子
ReplaceAndPause();
SetDlgUpper(46, 0, false);
//阿桃：
//宋公子～他本性并不坏
//他这么做一定是被逼的

['Event_00176_00023_Auto'];
NpcMoveToBlock(16, 108, 0, 3);
NpcSetDirFrame(1, 0);

['Event_00176_00024_Auto'];
NpcMoveToBlock(19, 100, 1, 3);
NpcMoveToBlockMutexLock(16, 103, 1, 2);

['Event_00176_00025_Auto'];
NpcMoveToBlock(15, 102, 0, 3);
NpcMoveToBlockMutexLock(16, 103, 0, 2);
NpcSetDirFrame(0, 0);

['Event_00176_00026_Auto'];
NpcMoveToBlockMutexLock(17, 104, 0, 2);

['Event_00176_00027_Auto'];
NpcMoveToBlockMutexLock(17, 107, 1, 2);

['Event_00176_00023_Trigger'];
//妇人甲：
//可是～你们有这个本事
//可以打的过那群妖道吗？
ReplaceAndPause();
//妇人甲：
//他们会妖法呀！
//你们不要白白去送死

['Event_00176_00024_Trigger'];
//妇人乙：
//我原先看宋贺文的样子
//不像是个坏蛋呀？

['Event_00176_00025_Trigger'];
//村人：
//唉．．眼睁睁看村长被抓走
//而我们竟然都束手无策。

['Event_00176_00026_Trigger'];
//村民：
//我就知道不能相信外人，这是
//历代先人传下来的祖训，果然
//不听老人言吃亏在眼前！
ReplaceAndPause();
//村民：
//报应、报应啊！

['Event_00176_00027_Trigger'];
//村人：
//唉～知人之面不知心呐

['Event_00176_00028_Trigger'];
PlaySound(78);
SetDlgBox(0);
//发现蟠果
AddItem(42, 0);
EventSetState(-1, 0, 0);

