['Event_00035_00001_Trigger'];
SceneEnter(34);
PartySetPos(22, 34, 1);
FadeOut(0);

['Event_00035_00002_Trigger'];
SceneEnter(36);
PartySetPos(47, 48, 1);
FadeOut(0);

['Scene_00035_Enter'];
PartySetPos(38, 77, 1);
RoleSetDirFrame(0, 0, 0);
MusicPlay(Music.美景, false, false);
VideoUpdate(0, false);
SetDlgUpper(64, 0, false);
//林天南：
//李少侠年纪轻轻就有如此身手
//剑法更是精妙绝伦，相貌亦是
//出类拔萃，能得少侠为婿实在
//是小女的福气呀～呵呵呵！
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//晚辈只是侥幸．．其实．．
VideoUpdate(0, false);
SetDlgUpper(64, 0, false);
//林天南：
//对了～适才见你使的剑法．．
//可是蜀山仙剑派的御剑术？
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//是的．．。
VideoUpdate(0, false);
SetDlgUpper(64, 0, false);
//林天南：
//原来你是独孤剑圣的弟子呀
//呵呵～实在是太巧了，老夫
//和尊师是十几年的拜把兄弟
//算起来你还是老夫的师侄呢
VideoUpdate(0, false);
SetDlgLower(10, 0, false);
//李逍遥：
//独孤．．剑圣．．？
//不．．不对啊！
VideoUpdate(0, false);
SetDlgUpper(64, 0, false);
//林天南：
//哦！不是吗？
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//实不相瞒，晚辈因缘而得一名
//醉道人传授一招剑法，晚辈本
//想向他拜师但未能如愿
VideoUpdate(0, false);
SetDlgUpper(64, 0, false);
//林天南：
//哦．．没有师承吗？
//没关系，这也没啥重要的，
//老夫关心的，是你跟如儿的
//婚事啊！
//我林家三代单传，而老夫又
//只有如儿这么一个女儿，所
//以老夫希望你能入赘到我们
//林家，好继承我林家的产业
SetDlgLower(1, 0, false);
//李逍遥：
//晚辈万万承担不起！
EventSetState(577, 2, 0);
WaitEventAutoScriptRun(20, false, false);
EventSetAutoScript(35, 7, "");
SetDlgLower(40, 0, false);
//刘晋元：
//世伯且慢！月如怎能嫁给他？
EventSetDirFrame(35, 4, 3, 0);
VideoUpdate(0, false);
SetDlgUpper(64, 0, false);
//林天南：
//　有何不能？
VideoUpdate(0, false);
SetDlgLower(40, 0, false);
//刘晋元：
//您明知我不会武功，却以比
//武来决定月如的婚事
VideoUpdate(0, false);
SetDlgUpper(64, 0, false);
//林天南：
//既是比武招亲，擂台
//胜负已分．．．。
VideoUpdate(0, false);
SetDlgLower(40, 0, false);
//刘晋元：
//不！这不能算数的，月如
//的终身大事怎可如此草率！
VideoUpdate(0, false);
SetDlgLower(3, 0, false);
//李逍遥：
//　对！不能算．．
VideoUpdate(0, false);
EventSetDirFrame(35, 4, 2, 0);
WaitEventAutoScriptRun(4, false, false);
EventSetDirFrame(35, 4, 3, 0);
VideoUpdate(0, false);
SetDlgUpper(64, 0, false);
//林天南：
//住口！月如是我女儿
//这件事你有何资格反对？
VideoUpdate(0, false);
SetDlgLower(40, 0, false);
//刘晋元：
//我．．请您把月如许配给我！
//改明儿我叫我爹派人上门提亲
SetDlgUpper(64, 0, false);
//林天南：
//月如根本就不喜欢你。更何况
//你一介书生，如何继承我南武
//林盟主之位？
VideoUpdate(0, false);
SetDlgLower(40, 0, false);
//刘晋元：
//　　我．．．．
VideoUpdate(0, false);
SetDlgLower(40, 0, false);
//刘晋元：
//我．．我明白了．．
EventSetDirFrame(35, 7, 2, 0);
VideoUpdate(0, false);
SetDlgLower(40, 0, false);
//刘晋元：
//李兄～我祝福你跟月如．．
EventSetDirFrame(35, 7, 1, 0);
VideoUpdate(0, false);
SetDlgLower(40, 0, false);
//刘晋元：
//世伯，请代我向月如告别
//．．我决定回京城去了
EventSetAutoScript(35, 7, "@2108");
WaitEventAutoScriptRun(4, false, false);
RoleSetDirFrame(3, 0, 0);
WaitEventAutoScriptRun(4, false, false);
SetDlgLower(1, 0, false);
//李逍遥：
//　　刘兄．．！
WaitEventAutoScriptRun(20, false, false);
EventSetState(577, 0, 0);
WaitEventAutoScriptRun(2, false, false);
EventSetDirFrame(35, 4, 2, 0);
VideoUpdate(0, false);
SetDlgUpper(64, 0, false);
//林天南：
//就这么决定了！呵呵呵．．
//能得少侠为婿，实乃小女福气
RoleSetDirFrame(0, 0, 0);
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//我与令嫒略有误会，才上擂台
//比试，招亲这．．这事还请前
//辈三思
VideoUpdate(0, false);
SetDlgUpper(64, 0, false);
//林天南：
//难道少侠嫌弃小女？
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//真是对不起，在下尚有要事在
//身，这婚姻大事并非儿戏，晚
//辈不敢轻言承诺，只怕辜负了
//小姐。
SetDlgUpper(64, 0, false);
//林天南：
//还有甚么事比娶妻重要？
VideoUpdate(0, false);
EventSetDirFrame(35, 3, 0, 0);
WaitEventAutoScriptRun(5, false, false);
EventSetDirFrame(35, 3, 3, 0);
VideoUpdate(0, false);
SetDlgUpper(15, 0, false);
//赵灵儿：
//逍遥哥哥．．如果你．．
//我．．可以自己去苗疆
//你不必顾虑我．．没关系
RoleSetDirFrame(1, 0, 0);
VideoUpdate(0, false);
SetDlgLower(5, 0, false);
//李逍遥：
//这怎么行！说好的要带你去
//苗疆找妈妈，怎能轻诺食言！
SetDlgUpper(15, 0, false);
//赵灵儿：
//我．．我拖累了你
VideoUpdate(0, false);
SetDlgUpper(64, 0, false);
//林天南：
//你要离开！难道你想悔婚？
//入赘我林家有哪一点不好？
RoleSetDirFrame(0, 0, 0);
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//我比武得胜，只想依照约定
//消除误会，并未想到婚姻一层
VideoUpdate(0, false);
SetDlgUpper(64, 0, false);
//林天南：
//谁不知苏州林家乃江南名门，
//虽称不上富可敌国，但亦是一
//方豪贾，我女儿虽不是倾国美
//女，亦是花容月貌的闺秀
//多少名门公子想娶都娶不到
//谅你也没理由嫌弃她！
VideoUpdate(0, false);
SetDlgUpper(64, 0, false);
//林天南：
//是为了她吗？
//她是你什么人？
EventSetDirFrame(35, 3, 0, 0);
VideoUpdate(0, false);
SetDlgLower(10, 0, false);
//李逍遥：
//她．．跟我．．这．．
//因为这件事来的太过突然
//况且未禀明家中长辈，怎
//敢私自婚娶？
EventSetDirFrame(35, 3, 3, 0);
VideoUpdate(0, false);
SetDlgUpper(64, 0, false);
//林天南：
//说的也对！我马上派人去请你
//婶婶过来，到时再谈下聘的事
//你们二人就先在这住下来吧
VideoUpdate(0, false);
EventSetDirFrame(35, 4, 1, 0);
VideoUpdate(0, false);
//林天南：
//春兰！替赵姑娘在西厢房准备
//一间客房，秋菊！带姑爷到东
//厢房下去歇息
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//春兰：
//是．．老爷！
EventSetState(578, 0, 0);
EventSetState(579, 0, 0);
EventSetState(573, 0, 0);
SceneEnter(39);
FadeOut(0);
ReplaceAndPause();
SetPaletteTime(0);

['Event_00035_00007_Auto'];
NpcMoveToBlock(38, 80, 1, 3);

['Event_00035_00004_Trigger'];
//林天南：
//是不是已经想通了要入
//赘到我们林家啊！？

['Event_00035_00006_Trigger'];
//管家林忠：
//也只有像姑爷您这等身手
//才配得上我们家小姐。

['Event_00035_00008_Trigger'];
//仆人：
//姑爷好！

['Event_00035_00012_Trigger'];
//妖怪！真的有妖怪
//赵小姐的房里有妖怪

['Event_00035_00012_Auto'];
NpcMoveToBlock(32, 81, 1, 3);
NpcMoveToBlock(34, 79, 1, 3);
WaitEventAutoScriptRun(2, false, false);
NpcMoveToBlock(34, 79, 0, 3);
NpcSetDirFrame(3, 0);

