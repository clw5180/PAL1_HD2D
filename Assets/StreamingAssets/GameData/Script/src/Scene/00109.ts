['Event_00109_00001_Trigger'];
SceneEnter(118);
PartySetPos(8, 117, 0);
FadeOut(0);

['Event_00109_00002_Trigger'];
SceneEnter(123);
PartySetPos(25, 41, 0);
FadeOut(0);

['Event_00109_00003_Trigger'];
SceneEnter(117);
PartySetPos(21, 91, 1);
FadeOut(0);

['Scene_00109_Enter'];
SceneSetScript(115, "@4328", "");
Replace();
['@4328'];
MusicPlay(Music.蝶舞春园_1, false, false);

['Event_00109_00007_Trigger'];
//婢女：
//林小姐、李公子．．
//夫人要奴婢过来请二位
//到餐厅用膳
FadeOut(0);
EventSetState(-1, 0, 0);
SceneSetScript(121, "@465F", "");
SceneEnter(121);

['Event_00109_00004_Trigger'];
//婢　女：
//这里是少爷和少夫人
//居住的的厢房
ReplaceAndPause();
//婢　女：
//少夫人和少爷非常恩爱呢
//每天少夫人都陪在生病的
//少爷枕榻边，一步也没离开
VideoRestore();
//少夫人除了每天亲自伺候少爷
//用膳、沐浴更衣，还每天为少
//爷煎药，都不让下人们代劳
ReplaceAndPause();
//婢　女：
//有的时后，少爷因为身体不适
//会乱发脾气，少夫人也不曾有
//怨言

['Event_00109_00005_Trigger'];
//婢　女：
//少夫人非常爱花呢，房间
//里里外外栽满了各种花卉
VideoRestore();
//而且～少夫人还是养花高手
//院子里这么多盛开的牡丹花
//都是少夫人亲手植的
VideoRestore();
//有许多老爷的朋友出高价想
//买几株回去观赏，少夫人怎
//么也不肯割爱
ReplaceAndPause();
//婢　女：
//别小看这些牡丹哦！
//它们在市面上都是极为名贵的
VideoRestore();
//少夫人有空的时候
//就会到花园里来赏花

['Event_00109_00006_Trigger'];
EventSetTriggerMode(-1, -1, false, 2);
WaitEventAutoScriptRun(2, false, true);
SetDlgLower(6, 0, false);
//李逍遥：
//嗯．．好香呀！
//这些花都是你种的啊？
VideoUpdate(0, false);
SetDlgUpper(48, 0, false);
//彩　依：
//公子也喜欢牡丹花吗？
SetDlgLower(9, 0, false);
//李逍遥：
//美丽的事物，谁不喜欢呢？
RoleSetDirFrame(3, 0, 0);
VideoUpdate(0, false);
SetDlgLower(21, 0, false);
//林月如：
//哗～这里这么多蝴蝶．．
//想必也是被花香吸引来的
WaitEventAutoScriptRun(4, false, false);
NpcSetDirFrame(3, 0);
VideoUpdate(0, false);
SetDlgUpper(48, 0, false);
//彩　依：
//是啊．．蝴蝶的生命很短暂
//但求飞舞在最美丽的花朵身边
//伴着花儿盛开、随着花儿凋谢
//这一生心愿足矣．．．
RoleSetDirFrame(0, 0, 0);
ReplaceAndPause();
//彩　依：
//这些牡丹很美吧？
NpcSetDirFrame(3, 0);

['Event_00109_00011_Trigger'];
EventSetTriggerMode(-1, -1, false, 0);
EventSetAutoScript(-1, -1, "@4B0E");
RoleSetDirFrame(3, 0, 0);
WaitEventAutoScriptRun(4, false, false);
PartyWalkToBlock(18, 88, 1, 8);
WaitEventAutoScriptRun(2, false, false);
EventSetState(2003, 2, 0);
EventSetState(2004, 2, 0);
EventSetState(2005, 2, 0);
WaitEventAutoScriptRun(2, false, false);
PartyWalkToBlock(21, 91, 0, 8);
WaitEventAutoScriptRun(2, false, true);
RoleSetDirFrame(0, 0, 0);
RoleSetDirFrame(0, 0, 1);
WaitEventAutoScriptRun(2, false, false);
SetDlgLower(0, 0, false);
//刘夫人：
//哎啊！晋元，外面风这么大
//你怎么可以跑出来。彩依呢？
//彩依怎么没有陪着你？
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//刘晋元：
//娘！　您快去请爹回来做主。
SetDlgLower(0, 0, false);
//刘夫人：
//你爹还尚未归来呀．．
//到底发生什么大事了？
EventWalkOneStep(-1, -1, -8, 4);
VideoUpdate(0, false);
EventWalkOneStep(-1, -1, -8, 4);
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//刘晋元：
//娘～您要救救孩儿
//彩依．．她要害我呀！
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//刘夫人：
//说这什么话！？
//彩依为什么要害你呢？
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//刘晋元：
//彩依．．她．．她是妖怪！
//她会施妖法，她想害死孩儿啊
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//刘夫人：
//怎么可能呢．．！？我可怜的
//孩子～你一定是身体不舒服
//所以神智有些不清楚．．
VideoRestore();
//听娘的话～　回房去躺着
//娘炖了两份莲子燕窝汤，
//给你和彩依补补身子
EventWalkOneStep(-1, -1, 8, -4);
VideoUpdate(0, false);
EventWalkOneStep(-1, -1, 8, -4);
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//刘晋元：
//不要！　我不要回去那里
//我不要吃药，我会死掉的
//我会被害死的！！
VideoUpdate(0, false);
SetDlgLower(76, 0, false);
//婢女阿香：
//夫人．．依奴婢之见
//少爷可能是梦魇未醒
//或是受了惊吓也说不定
VideoUpdate(0, false);
EventSetDirFrame(109, 8, 0, 0);
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//刘夫人：
//嗯．．说的对～
//那该如何是好？
VideoUpdate(0, false);
SetDlgLower(76, 0, false);
//婢女阿香：
//可以请"道士"来替少爷作法收惊
//在奴婢的家乡，发生这种症状
//的人，都是这么做就好了
VideoUpdate(0, false);
EventSetDirFrame(109, 8, 1, 0);
VideoUpdate(0, false);
EventSetDirFrame(109, 8, 2, 0);
WaitEventAutoScriptRun(8, false, false);
EventSetDirFrame(109, 8, 0, 0);
WaitEventAutoScriptRun(2, false, false);
SetDlgLower(0, 0, false);
//刘夫人：
//你们先带少爷到我房间
//这件事我自有打算
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//婢女齐声道：
//是！
EventSetAutoScript(109, 9, "@4B1A");
EventSetAutoScript(109, 10, "@4B1D");
WaitEventAutoScriptRun(2, false, false);
EventSetDirFrame(109, 8, 3, 0);
WaitEventAutoScriptRun(2, false, false);
EventSetDirFrame(109, 8, 2, 0);
WaitEventAutoScriptRun(14, false, false);
SetDlgLower(76, 0, false);
//婢女阿香：
//少爷！　请吧．．
EventSetAutoScript(109, 11, "@4B20");
EventSetAutoScript(109, 9, "@4B25");
EventSetAutoScript(109, 10, "@4B27");
WaitEventAutoScriptRun(30, false, false);
EventSetDirFrame(109, 8, 3, 0);
WaitEventAutoScriptRun(10, false, false);
EventSetAutoScript(109, 8, "@4B2A");
WaitEventAutoScriptRun(16, false, false);
SetDlgUpper(67, 0, false);
//刘夫人：
//唉．．老爷又不在
//我实在不知该怎么办才好
EventSetDirFrame(109, 8, 1, 0);
VideoUpdate(0, false);
SetDlgUpper(67, 0, false);
//刘夫人：
//月如、李公子．．
//你们世面见得多，这件事
//可否请你们替我拿个主意？
RoleSetDirFrame(3, 0, 0);
VideoUpdate(0, false);
SetDlgLower(21, 0, false);
//林月如：
//好的．．云姨，您放心！
//我们一定会帮您的
SetDlgUpper(67, 0, false);
//刘夫人：
//老身先谢过二位了．．
EventSetAutoScript(109, 8, "@4B2C");
EventSetTriggerScript(129, 15, "@4B6F");
EventSetTriggerScript(109, 4, "@4AFF");
EventSetTriggerScript(109, 5, "@4B0B");
EventSetState(2175, 1, 0);
EventSetState(2176, 2, 0);
EventSetState(2177, 2, 0);

['Event_00109_00008_Auto'];
EventWalkOneStep(-1, -1, 8, -4);
EventWalkOneStep(-1, -1, 8, -4);
EventWalkOneStep(-1, -1, 8, -4);
EventWalkOneStep(-1, -1, 8, -4);
EventWalkOneStep(-1, -1, 8, -4);
EventWalkOneStep(-1, -1, 8, -4);
EventWalkOneStep(-1, -1, 8, -4);
EventWalkOneStep(-1, -1, 8, -4);

['Event_00109_00008_Trigger'];
SetDlgUpper(67, 0, false);
//刘夫人：
//若是要用到钱
//尽管向云姨开口吧
VideoUpdate(0, false);
CashModify(30000, "");
SetDlgBox(0);
//得三万文钱
['@4B3D'];
VideoUpdate(0, false);
SetDlgUpper(67, 0, false);
//刘夫人：
//那么．．一切拜托你们了
ReplaceAndPause();
CashModify(-30000, "@4B45");
CashModify(30000, "");
GotoWithNop("@4B3D", 0);
['@4B45'];
SetDlgUpper(67, 0, false);
//刘夫人：
//还需要用钱吗？
GotoWithSelect("@4B3D");
VideoUpdate(0, false);
SetDlgUpper(67, 0, false);
//刘夫人：
//只要能救晋元
//花多少钱都没关系
CashModify(30000, "");
SetDlgBox(0);
//得三万文钱
['@4B51'];
VideoUpdate(0, false);
SetDlgUpper(67, 0, false);
//刘夫人：
//那么．．拜托你们了
ReplaceAndPause();
CashModify(-30000, "@4B59");
CashModify(30000, "");
GotoWithNop("@4B51", 0);
['@4B59'];
SetDlgUpper(67, 0, false);
//刘夫人：
//钱还不够吗？
GotoWithSelect("@4B51");
VideoUpdate(0, false);
SetDlgUpper(67, 0, false);
//刘夫人：
//没关系～我这还有．．
CashModify(30000, "");
SetDlgBox(0);
//得三万文钱
VideoUpdate(0, false);
Replace();
SetDlgUpper(67, 0, false);
//刘夫人：
//找道士来．．会有用吗？

['Event_00109_00012_Auto'];
Call("@4CE9", 0, 0);
EventModifyPos(-1, -1, 12, -5);
Call("@4CEC", 0, 0);
EventModifyPos(-1, -1, 12, -5);
GotoWithNop("Event_00109_00012_Auto", 0);

['Event_00109_00013_Trigger'];
SetDlgCenter(0, false);
//此人熟睡中．．

['Event_00109_00015_Trigger'];
EventSetTriggerMode(-1, -1, false, 0);
EventSetTriggerScript(116, 2, "Event_00116_00002_Trigger");
RoleSetDirFrame(2, 0, 0);
NpcSetDirFrame(0, 0);
WaitEventAutoScriptRun(6, false, false);
NpcSetDirFrame(1, 0);
WaitEventAutoScriptRun(6, false, false);
NpcSetDirFrame(0, 0);
WaitEventAutoScriptRun(2, false, false);
SetDlgLower(48, 0, false);
//彩　依：
//李公子～你们．．
VideoUpdate(0, false);
SetDlgUpper(21, 0, false);
//林月如：
//李大哥，你来的正好
//她把刘晋元抓到花丛中藏身
//被我给找出来啦！我们合力
//拿下这妖女
NpcSetDirFrame(1, 0);
VideoUpdate(0, false);
SetDlgLower(48, 0, false);
//彩　依：
//不．．因为相公今天没有服药
//病情恶化了。妾身只好带他来
//这里，用百花之精气为他驱毒
VideoUpdate(0, false);
SetDlgLower(2, 0, false);
//李逍遥：
//大嫂．．竟然是只蝶精！
NpcSetDirFrame(0, 0);
VideoUpdate(0, false);
SetDlgLower(48, 0, false);
//彩　依：
//你．．看得见我的原形？！
VideoUpdate(0, false);
SetDlgUpper(22, 0, false);
//林月如：
//光着身子，露出背后那么
//大一双翅膀，谁会看不出来？
WaitEventAutoScriptRun(2, false, false);
NpcSetDirFrame(1, 0);
WaitEventAutoScriptRun(6, false, false);
NpcSetDirFrame(0, 0);
WaitEventAutoScriptRun(6, false, false);
NpcSetDirFrame(1, 0);
WaitEventAutoScriptRun(2, false, false);
SetDlgLower(48, 0, false);
//彩　依：
//奇怪～　难道．．
//我施的幻术被破解了！
VideoUpdate(0, false);
SetDlgUpper(23, 0, false);
//林月如：
//快把刘大哥放了！
//不然别怪我对你不客气
VideoUpdate(0, false);
SetDlgLower(48, 0, false);
//彩　依：
//不～不可以！
//一旦停下来，就前功尽弃了
SetDlgUpper(23, 0, false);
//林月如：
//还想拿这种话骗人
//当我们是三岁小孩吗？
PartySetRole(3, 1, 0);
SetBattleMusic(Music.御剑伏魔_1);
Dos_SetBattlefield(FbpDos.乱葬岗_1);
BattleStart(39, "", "");
PartySetRole(3, 1, 0);
RoleRevive(true, 10);
RoleModifyHPMP(true, 9999);
BattleEnd();
EventSetState(2012, 0, 0);
EventSetState(2011, 0, 0);
EventModifyPos(-1, -1, 0, -80);
EventSetLayer(-1, -1, 33);
EventSetAutoScript(-1, -1, "Event_00109_00012_Auto");
PartySetPos(20, 92, 1);
ViewportMove(128, -96, 0);
PartyWalkToBlock(22, 91, 0, 4);
ViewportMove(10, -7, 42);
WaitEventAutoScriptRun(20, false, false);
EventSetState(-1, 0, 0);
ViewportMove(0, 0, 0);
EventSetStateSequence(116, 3, 11, 0);
EventSetState(2146, 0, 0);
EventSetStateSequence(118, 6, 8, 0);
EventSetState(2160, 1, 0);

['Event_00109_00040_Trigger'];
EventSetState(-1, 0, 0);
VideoUpdate(0, false);
SetDlgBox(0);
//拾得一瓶天仙玉露
AddItem(49, 0);

