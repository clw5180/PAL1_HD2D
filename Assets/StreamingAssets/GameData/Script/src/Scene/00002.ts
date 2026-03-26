['Event_00002_00011_Auto'];
NpcMoveToBlock(36, 24, 0, 3);
EventSetState(4, 1, 0);
EventSetState(-1, 0, 0);

['Event_00002_00004_Trigger'];
PartySetPos(49, 94, 0);
SceneEnter(4);
FadeOut(0);

['Event_00002_00010_Trigger'];
PartySetPos(42, 17, 1);
RoleSetDirFrame(2, 0, 0);
EventWalkOneStep(2, 9, 4, 2);
VideoUpdate(0, false);
EventWalkOneStep(2, 9, 4, 2);
VideoUpdate(0, false);
EventWalkOneStep(2, 9, 4, 2);
VideoUpdate(0, false);
EventWalkOneStep(2, 9, 4, 2);
VideoUpdate(0, false);
//嘿嘿．．
VideoUpdate(0, false);
SetDlgUpper(55, 0, false);
//李大娘：
//逍遥！窝在房里做啥？
//还不快出来帮忙招呼客人
VideoUpdate(0, false);
EventWalkOneStep(2, 9, -4, -2);
VideoUpdate(0, false);
EventWalkOneStep(2, 9, -4, -2);
VideoUpdate(0, false);
EventWalkOneStep(2, 9, -4, -2);
VideoUpdate(0, false);
EventWalkOneStep(2, 9, -4, -2);
VideoUpdate(0, false);
RoleSetDirFrame(0, 0, 0);
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//李逍遥：
//啊！　．．我马上就去

['Event_00002_00008_Trigger'];
HeroSetSprite(0, Sprite.躺李逍遥, true);
RoleSetDirFrame(0, 3, 0);
WaitEventAutoScriptRun(4, false, false);
RoleSetDirFrame(0, 4, 0);
WaitEventAutoScriptRun(2, false, false);
RoleSetDirFrame(0, 5, 0);
WaitEventAutoScriptRun(2, false, false);
RoleSetDirFrame(0, 6, 0);
WaitEventAutoScriptRun(2, false, false);
RoleMoveOneStep(0, -16, 0);
RoleSetDirFrame(0, 4, 0);
WaitEventAutoScriptRun(3, false, false);
RoleSetDirFrame(0, 5, 0);
WaitEventAutoScriptRun(2, false, false);
RoleSetDirFrame(0, 6, 0);
WaitEventAutoScriptRun(2, false, false);
RoleMoveOneStep(0, -16, 0);
RoleSetDirFrame(0, 4, 0);
WaitEventAutoScriptRun(3, false, false);
RoleSetDirFrame(0, 5, 0);
WaitEventAutoScriptRun(2, false, false);
RoleSetDirFrame(0, 6, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(0, -16, 0);
RoleSetDirFrame(0, 4, 0);
WaitEventAutoScriptRun(3, false, false);
RoleSetDirFrame(0, 5, 0);
WaitEventAutoScriptRun(2, false, false);
RoleSetDirFrame(0, 6, 0);
WaitEventAutoScriptRun(2, false, false);
RoleMoveOneStep(0, -16, 0);
RoleSetDirFrame(0, 4, 0);
VideoUpdate(0, false);
FadeOut(0);
RoleSetDirFrame(0, 2, 0);
PartySetPos(42, 18, 0);
EventSetPos(2, 9, 1392, 296);
EventSetTriggerMode(2, 10, false, 2);
EventSetTriggerScript(2, 10, "@005E");
VideoUpdate(0, false);
EventWalkOneStep(2, 9, -4, -2);
VideoUpdate(0, false);
EventWalkOneStep(2, 9, -4, -2);
VideoUpdate(0, false);
EventWalkOneStep(2, 9, -4, -2);
VideoUpdate(0, false);
EventWalkOneStep(2, 9, -4, -2);
VideoUpdate(0, false);
HeroSetSprite(0, Sprite.李逍遥, true);
RoleSetDirFrame(0, 0, 0);
VideoUpdate(0, false);

['Event_00002_00013_Trigger'];
PartySetPos(44, 89, 0);
SceneEnter(4);
FadeOut(0);

['Event_00002_00018_Trigger'];
PartySetPos(39, 84, 0);
SceneEnter(4);
FadeOut(0);

['Event_00002_00019_Trigger'];
PartySetPos(32, 93, 0);
SceneEnter(4);
FadeOut(0);

['Event_00002_00001_Trigger'];
PartySetPos(45, 96, 0);
SceneEnter(4);
FadeOut(0);

EventSyncState(5, 27, 0);
ReplaceAndPauseWithNop("Event_00005_00026_Auto", 0);

EventSyncState(5, 26, 1);
ReplaceAndPauseWithNop("Event_00005_00027_Auto", 0);

['Event_00002_00025_Trigger'];
//苗人头领：
//呵～累了，想早点休息

['Event_00002_00026_Trigger'];
//苗人喽啰：
//哎～好饿！
//怎么还不送吃的过来

['Event_00002_00027_Trigger'];
//苗人喽啰：
//这房间看起来满舒服的
//今天总算可以好好睡一觉

['Event_00002_00016_Trigger'];
EventSetState(-1, 0, 0);
SetDlgLower(0, 0, false);
//李逍遥：
//两位大爷！酒菜送来了
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//拿进来！
PartyWalkToBlock(41, 67, 0, 2);
RoleSetDirFrame(3, 0, 0);
WaitEventAutoScriptRun(4, false, false);
RoleSetDirFrame(0, 12, 0);
WaitEventAutoScriptRun(2, false, false);
EventSetDirFrame(2, 27, 3, 0);
WaitEventAutoScriptRun(2, false, false);
RoleSetDirFrame(0, 13, 0);
EventSetState(17, 1, 0);
VideoUpdate(0, false);
EventWalkOneStep(2, 27, 8, 4);
VideoUpdate(0, false);
EventWalkOneStep(2, 27, 8, 4);
VideoUpdate(0, false);
EventWalkOneStep(2, 27, 8, 4);
VideoUpdate(0, false);
EventWalkOneStep(2, 27, 8, 4);
VideoUpdate(0, false);
EventWalkOneStep(2, 27, 8, 4);
VideoUpdate(0, false);
EventWalkOneStep(2, 27, 8, 4);
VideoUpdate(0, false);
EventSetDirFrame(2, 27, 0, 0);
VideoUpdate(0, false);
Delay(5);
SetDlgUpper(0, 0, false);
//苗人喽啰：
//嗯～这是什么酒呀？
//一点味道也没有！
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//哦！大爷您有所不知，此酒乃
//本地的名产～桂花酒，清香甘
//醇无比，连当朝的贵妃娘娘都
//爱喝的不得了呢！
SetDlgUpper(0, 0, false);
//苗人喽啰：
//拿走！拿走！我们喝惯烈酒
//才不要娘们喝的酒。
VideoUpdate(0, false);
SetDlgLower(6, 0, false);
//李逍遥：
//那么．．小的再给您换一壶来
SetDlgUpper(0, 0, false);
//苗人喽啰：
//不必了！咱们自己有带酒。
EventSetDirFrame(2, 17, 0, 1);
VideoUpdate(0, false);
RoleSetDirFrame(0, 14, 0);
WaitEventAutoScriptRun(4, false, false);
RoleSetDirFrame(0, 15, 0);
WaitEventAutoScriptRun(2, false, false);
SetDlgCenter(0, false);
//"李逍遥把桂花酒收在怀里"
AddItem(212, 0);
HeroSetSprite(0, Sprite.李逍遥, true);
EventSetTriggerScript(2, 25, "@01C3");
EventSetTriggerScript(2, 26, "@01C8");
EventSetTriggerScript(2, 27, "@01CF");
EventSetTriggerScript(4, 19, "@0285");
EventSetAutoScript(2, 27, "@021D");
EventSetTriggerScript(2, 10, "@005E");
EventSetTriggerScript(2, 8, "Event_00002_00008_Trigger");

['Event_00002_00020_Trigger'];
//李大娘：
//那乞丐打发走了没？

['Event_00002_00021_Trigger'];
SetDlgCenter(0, false);
//"桌上摆着一份丰盛的酒菜
//嗯～看起来很好吃的样子"

['Event_00002_00005_Trigger'];
PlaySound(78);
SetDlgBox(0);
//得到止血草
AddItem(39, 0);
EventSetState(-1, 0, 0);

['Event_00002_00006_Trigger'];
PlaySound(78);
SetDlgBox(0);
//得到皮帽
AddItem(141, 0);
EventSetState(-1, 0, 0);

['Event_00002_00007_Trigger'];
PlaySound(78);
SetDlgBox(0);
//得到木鞋
AddItem(176, 0);
EventSetState(-1, 0, 0);

['Event_00002_00014_Trigger'];
PlaySound(78);
SetDlgLower(3, 0, false);
//哈！这不是上回投宿的镖师吃
//饭的家伙吗？居然掉了一支在
//被窝里．．
VideoUpdate(0, false);
SetDlgBox(0);
//得到一支梅花镖
AddItem(93, 0);
EventSetState(-1, 0, 0);

['Event_00002_00015_Trigger'];
PlaySound(78);
SetDlgBox(0);
//这是啥玩意？
AddItem(31, 0);
EventSetState(-1, 0, 0);

['Event_00002_00022_Trigger'];
PlaySound(78);
SetDlgBox(0);
//得到大蒜
AddItem(24, 0);
EventSetState(-1, 0, 0);

['Event_00002_00023_Trigger'];
PlaySound(78);
SetDlgBox(0);
//得到腌肉
AddItem(34, 0);
EventSetState(-1, 0, 0);

['Event_00002_00024_Trigger'];
PlaySound(78);
SetDlgBox(0);
//得到雄黄
AddItem(27, 0);
EventSetState(-1, 0, 0);

['Event_00002_00028_Trigger'];
MusicPlay(Music.危机, false, false);
EventSetTriggerScript(2, 4, "Event_00002_00004_Trigger");
NpcSetFrame(1);
VideoUpdate(0, false);
SetDlgLower(10, 0, false);
//李逍遥：
//哇！是位大姑娘．．．．
//．．咦～好像在哪见过？
FadeOut(0);
PartySetPos(40, 16, 1);
RoleSetDirFrame(1, 0, 0);
EventSetState(-1, 0, 0);
EventSetState(30, 1, 0);
EventSetState(29, 1, 0);
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//姑娘～这是怎么一回事？
//那些人为什么把你抓来？
VideoUpdate(0, false);
SetDlgUpper(13, 0, false);
//赵灵儿：
//呜～姥姥．．
//我要回去救姥姥！
SetDlgLower(1, 0, false);
//李逍遥：
//嘘～别作声．．
EventSetStateSequence(4, 17, 18, 0);
EventSetStateSequence(2, 26, 27, 2);
EventSetPos(2, 26, 1168, 376);
EventSetPos(2, 27, 1200, 376);
EventSetAutoScript(2, 26, "@0A36");
EventSetAutoScript(2, 27, "@0A36");
WaitEventAutoScriptRun(12, false, false);
SetDlgUpper(0, 0, false);
//苗人喽啰：
//你是怎么溜进来的！
RoleSetDirFrame(3, 0, 0);
VideoUpdate(0, false);
SetDlgLower(5, 0, false);
//李逍遥：
//喂～你们把这位姑娘绑来这里
//到底作何居心？
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//苗人喽啰：
//咱们拜月教的事你最好别管！
VideoUpdate(0, false);
SetDlgLower(3, 0, false);
//李逍遥：
//嘿～这是我们家开的客栈
//我当然非管不可
SetDlgUpper(0, 0, false);
//苗人喽啰：
//你找死！
EventSetTriggerMode(2, 10, false, 2);
EventSetPos(2, 9, 1376, 288);
PartySetRole(1, 2, 0);
Dos_SetBattlefield(FbpDos.隐龙窟);
BattleStart(18, "@A073", "");
MusicPlay(Music.盟誓, true, false);
PartySetRole(1, 0, 0);
BattleEnd();
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//苗人喽啰：
//小子，算你厉害。咱们走！
EventSetAutoScript(2, 26, "@0A3B");
EventSetAutoScript(2, 27, "@0A3B");
WaitEventAutoScriptRun(12, false, false);
RoleSetDirFrame(1, 0, 0);
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//那些苗人为什么要抓你？
VideoUpdate(0, false);
SetDlgUpper(13, 0, false);
//赵灵儿：
//姥姥．．姥姥受了重伤，我好
//担心呐，求求你带我回岛上
//姥姥就快死了．．
SetDlgLower(10, 0, false);
//李逍遥：
//岛．．？　哪一个岛？
VideoUpdate(0, false);
SetDlgUpper(18, 0, false);
//赵灵儿：
//当然是仙灵岛啊！！
SetDlgLower(2, 0, false);
//李逍遥：
//好好好～你别慌，镇静点
//这样吧．．我去帮你借一艘船
EventSetState(29, 0, 0);
EventSetTriggerScript(4, 13, "@0A40");
EventSetTriggerMode(4, 13, true, 2);
PartySetRole(1, 2, 0);
RoleSetDirFrame(3, 0, 0);
RoleRevive(true, 10);
RoleModifyHPMP(true, 9999);
EventSetTriggerMode(5, 1, true, 2);
EventSetTriggerScript(5, 1, "@0C97");
EventSetTriggerScript(9, 3, "@0CB2");
EventSetState(178, 0, 0);
EventSetState(85, 2, 0);
EventSetTriggerScript(5, 9, "@0CCE");
EventSetTriggerScript(5, 10, "@0CDF");
EventSetTriggerScript(5, 11, "@0CE5");
EventSetTriggerScript(6, 13, "@0CE8");
EventSetTriggerScript(11, 1, "@0CEC");
EventSetTriggerScript(2, 10, "@00BF");
EventSetTriggerScript(2, 8, "@00CF");

['Event_00002_00030_Trigger'];
SetDlgBox(0);
//一只空的麻布袋

['Event_00002_00031_Trigger'];
SetDlgCenter(0, false);
//赵灵儿睡着了．．

['Scene_00002_Enter'];
MusicPlay(Music.乐逍遥, false, false);
SetBattleMusic(Music.势如破竹);
PartySetPos(41, 18, 0);
FadeToScene(2, -1);
SetDlgUpper(55, 0, false);
//李大娘：
//李逍遥！你皮痒啊？
//敢说老娘是什么鬼婆！
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//李逍遥：
//哎呦～疼啊！
VideoUpdate(0, false);
SetDlgUpper(55, 0, false);
//李大娘：
//又在作白日梦了！你也老大不
//小了，整天疯疯癫癫地，也不学
//学做正经事！
WaitEventAutoScriptRun(3, false, false);
RoleSetDirFrame(0, 2, 0);
VideoUpdate(0, false);
HeroSetSprite(0, Sprite.李逍遥, true);
RoleSetDirFrame(0, 0, 0);
WaitEventAutoScriptRun(4, false, false);
SetDlgUpper(8, 0, false);
//李逍遥：
//婶婶～
//你不要每次叫人起床都拿锅
//呀、铲呀，乱敲一通的，会
//吓死人哪！
//咱们这木床又不牢靠，万一我
//给摔死了，咱们李家就绝后啦
VideoUpdate(0, false);
SetDlgLower(55, 0, false);
//李大娘：
//不这样叫得醒你吗？好歹你也
//跟林师傅学过几个月的木工，
//床不牢自己动手修一修不就好
//了？
//就只会削些木刀木剑的，成天
//学你爹舞刀弄剑，没个定性，
//有哪家姑娘愿意嫁给你喔．．
VideoUpdate(0, false);
SetDlgUpper(7, 0, false);
//李逍遥：
//那我爹怎么会娶到我娘？
VideoUpdate(0, false);
SetDlgLower(55, 0, false);
//李大娘：
//啧！你娘也是跟你爹一个样儿
//嫁到咱们李家来，也不做针线
//女红，就只会跟着你爹疯．．
RoleSetDirFrame(3, 0, 0);
VideoUpdate(0, false);
SetDlgUpper(1, 0, false);
//李逍遥：
//嘿．．大家都说～他们是江湖
//上人人羡慕的鸳鸯侠侣呢！
VideoUpdate(0, false);
SetDlgLower(55, 0, false);
//李大娘：
//是哦～侠侣？说要去行侠仗义
//丢下你这惹祸精，一去无回
VideoRestore();
//还不是我这老太婆省吃俭用的
//开了这么一家小小的客栈，才
//把你拉拔到这么大，结果养出
//这么一个懒鬼！
VideoUpdate(0, false);
HeroSetSprite(0, Sprite.耍酷逍遥, true);
RoleSetDirFrame(0, 0, 0);
WaitEventAutoScriptRun(2, false, false);
SetDlgUpper(7, 0, false);
//李逍遥：
//谁说我是懒鬼啦？
RoleSetDirFrame(0, 1, 0);
VideoUpdate(0, false);
SetDlgUpper(9, 0, false);
//李逍遥：
//我将来要像我爹娘一样
//练成绝世武功，纵横四海、
//称霸江湖的一代大侠！
EventSetDirFrame(2, 12, 0, 1);
WaitEventAutoScriptRun(3, false, false);
PlaySound(98);
EventSetDirFrame(2, 12, 0, 2);
WaitEventAutoScriptRun(0, false, false);
RoleSetDirFrame(0, 2, 0);
WaitEventAutoScriptRun(0, false, false);
EventSetDirFrame(2, 12, 0, 3);
WaitEventAutoScriptRun(0, false, false);
RoleSetDirFrame(0, 3, 0);
WaitEventAutoScriptRun(2, false, false);
EventSetDirFrame(2, 12, 0, 0);
WaitEventAutoScriptRun(3, false, false);
SetDlgLower(55, 0, false);
//李大娘：
//少跟老娘鬼扯淡！
VideoRestore();
//你呀～游手好闲是出了名的
//要不是这回我忙不过来，才
//不指望你这懒鬼来帮忙呢！
EventSetState(12, 0, 0);
EventSetState(11, 2, 0);
WaitEventAutoScriptRun(8, false, false);
HeroSetSprite(0, Sprite.李逍遥, true);
RoleSetDirFrame(0, 0, 0);
WaitEventAutoScriptRun(4, false, false);
SetDlgUpper(10, 0, false);
//李逍遥：
//一大早就有客人上门啦？
WaitEventAutoScriptRun(4, false, false);
EventSetDirFrame(2, 11, 2, 0);
VideoUpdate(0, false);
SetDlgLower(55, 0, false);
//李大娘：
//是啊．．还不快过来帮忙！
WaitEventAutoScriptRun(12, false, false);
PartyWalkToBlock(41, 18, 1, 2);
PartyWalkToBlock(42, 18, 0, 2);
RoleSetDirFrame(0, 0, 0);
VideoUpdate(0, false);
SetDlgLower(8, 0, false);
//李逍遥：
//真没意思．．一大清早就要
//人家做这个又做那个的．．
RoleSetDirFrame(3, 0, 0);
VideoUpdate(0, false);
RoleSetDirFrame(2, 0, 0);
WaitEventAutoScriptRun(2, false, false);
HeroSetSprite(0, Sprite.躺李逍遥, true);
RoleSetDirFrame(0, 9, 0);
VideoUpdate(0, false);
EventWalkOneStep(2, 9, 4, 2);
VideoUpdate(0, false);
EventWalkOneStep(2, 9, 4, 2);
VideoUpdate(0, false);
EventWalkOneStep(2, 9, 4, 2);
VideoUpdate(0, false);
EventWalkOneStep(2, 9, 4, 2);
VideoUpdate(0, false);
SetDlgLower(9, 0, false);
//嘿．．
//昨晚做好的密道正好派上用场
//这次就从这里溜出去吧．．
VideoUpdate(0, false);
SetDlgUpper(55, 0, false);
//李大娘：
//逍遥！还窝在房里干啥？
//快出来帮忙招呼客人
HeroSetSprite(0, Sprite.李逍遥, true);
RoleSetDirFrame(2, 0, 0);
WaitEventAutoScriptRun(5, false, false);
RoleSetDirFrame(3, 0, 0);
VideoUpdate(0, false);
RoleSetDirFrame(0, 0, 0);
VideoUpdate(0, false);
SetDlgLower(10, 0, false);
//喔！　．．我马上就去
RoleSetDirFrame(3, 0, 0);
VideoUpdate(0, false);
RoleSetDirFrame(2, 0, 0);
WaitEventAutoScriptRun(10, false, false);
RoleSetDirFrame(3, 0, 0);
VideoUpdate(0, false);
RoleSetDirFrame(0, 0, 0);
VideoUpdate(0, false);
SetDlgLower(8, 0, false);
//啧～算了，晚上再用密道吧
//现在被发现就惨了
VideoUpdate(0, false);
RoleSetDirFrame(3, 0, 0);
VideoUpdate(0, false);
RoleSetDirFrame(2, 0, 0);
VideoUpdate(0, false);
HeroSetSprite(0, Sprite.躺李逍遥, true);
RoleSetDirFrame(0, 9, 0);
EventWalkOneStep(2, 9, -4, -2);
VideoUpdate(0, false);
EventWalkOneStep(2, 9, -4, -2);
VideoUpdate(0, false);
EventWalkOneStep(2, 9, -4, -2);
VideoUpdate(0, false);
EventWalkOneStep(2, 9, -4, -2);
WaitEventAutoScriptRun(3, false, false);
HeroSetSprite(0, Sprite.李逍遥, true);
RoleSetDirFrame(3, 0, 0);
VideoUpdate(0, false);
RoleSetDirFrame(0, 0, 0);
ReplaceAndPause();

['Event_00002_00020_Auto'];
NpcSetDirFrame(2, 0);
ReplaceAndPauseWithNop("Event_00002_00020_Auto", 0);

['Event_00002_00026_Auto'];
NpcSetDirFrame(1, 0);
ReplaceAndPauseWithNop("Event_00002_00026_Auto", 0);

['Event_00002_00032_Trigger'];
PlaySound(78);
SetDlgBox(0);
//发现净衣符
AddItem(4, 0);
EventSetState(-1, 0, 0);

PlaySound(78);
SetDlgBox(0);
//发现灵心符
AddItem(5, 0);
EventSetState(-1, 0, 0);

PlaySound(78);
SetDlgBox(0);
//发现天师符
AddItem(6, 0);
EventSetState(-1, 0, 0);

