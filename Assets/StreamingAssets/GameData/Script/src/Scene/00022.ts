['Event_00022_00002_Trigger'];
WaitEventAutoScriptRun(2, false, false);
RoleSetDirFrame(2, 0, 0);
WaitEventAutoScriptRun(4, false, false);
RoleSetDirFrame(1, 0, 0);
WaitEventAutoScriptRun(2, false, false);
EventSetState(-1, 0, 0);
EventSetState(398, 2, 0);

['Event_00022_00004_Trigger'];
EventSetTriggerMode(-1, -1, false, 0);
SetDlgLower(1, 0, false);
//李逍遥：
//这位大姐，他们俩犯了什么错
//为什么要这样打他们？
VideoUpdate(0, false);
SetDlgUpper(23, 0, false);
//林月如：
//这两人是咱们家的丫鬟和长工
//也不知道暗通款曲多久了，居
//然想要私奔！现在让我撞见了
//就该受罚！
SetDlgLower(1, 0, false);
//李逍遥：
//既然他们两情相悦，何不做个
//顺水人情，做主撮合他们，不
//是美事一桩吗？何必苦苦相逼
VideoUpdate(0, false);
SetDlgUpper(22, 0, false);
//林月如：
//胆敢坏了我们家规矩
//岂能便宜了他们？
VideoUpdate(0, false);
SetDlgLower(6, 0, false);
//李逍遥：
//敢问小姐可有心上人？
SetDlgUpper(22, 0, false);
//林月如：
//没、没有．你这话什么意思！
VideoUpdate(0, false);
SetDlgLower(9, 0, false);
//李逍遥：
//哈！这就是了，像姑娘这样的
//美人居然没有心上人？难怪、
//难怪会见不得别人双宿双飞
VideoUpdate(0, false);
SetDlgUpper(23, 0, false);
//林月如：
//你！狗嘴吐不出象牙！
//本小姐管教下人，干你何事？
SetDlgLower(1, 0, false);
//李逍遥：
//下人也是人呐，像你这样打法
//会出人命的！
VideoUpdate(0, false);
SetDlgUpper(21, 0, false);
//林月如：
//好！我就饶他们一命．．．。
SetDlgLower(6, 0, false);
//李逍遥：
//　　姑娘果然是个明理人
//　　我来帮他们解开绳索
VideoUpdate(0, false);
RoleSetDirFrame(2, 0, 0);
WaitEventAutoScriptRun(4, false, false);
RoleMoveOneStep(8, -4, 0);
VideoUpdate(0, false);
RoleMoveOneStep(8, -4, 0);
VideoUpdate(0, false);
SetDlgUpper(23, 0, false);
//林月如：
//　　　慢着！
EventAnimate(Direction.Northeast);
WaitEventAutoScriptRun(2, false, false);
EventAnimate(Direction.Northeast);
WaitEventAutoScriptRun(2, false, false);
EventAnimate(Direction.Northeast);
WaitEventAutoScriptRun(2, false, false);
EventAnimate(Direction.Northeast);
WaitEventAutoScriptRun(2, false, false);
NpcSetDirFrame(3, 0);
VideoUpdate(0, false);
SetDlgUpper(22, 0, false);
//林月如：
//死罪可免，活罪难逃
//各砍断一只手，作为警惕！
VideoUpdate(0, false);
EventAnimate(Direction.Northeast);
VideoUpdate(0, false);
EventAnimate(Direction.Northeast);
VideoUpdate(0, false);
SetDlgLower(18, 0, false);
//赵灵儿：
//    啊～不可以！
Dos_SetBattlefield(FbpDos.毒仙林);
BattleStart(21, "@182A", "");
BattleEnd();
EventSetState(-1, 0, 0);
EventSetState(401, 0, 0);
EventSetState(402, 2, 0);
EventSetState(403, 2, 0);
EventSetState(404, 2, 0);
PartySetPos(29, 64, 0);
RoleSetDirFrame(2, 0, 0);
RoleSetDirFrame(2, 0, 1);
VideoUpdate(0, false);
SetDlgUpper(23, 0, false);
//林月如：
//小贼！你想干什么？
VideoUpdate(0, false);
SetDlgLower(9, 0, false);
//李逍遥：
//像你这种蛮横的人，不给你
//一点教训怎行？让你也尝尝
//被吊在树上的滋味！
VideoUpdate(0, false);
SetDlgUpper(23, 0, false);
//林月如：
//你！！快把我放了！不然我回
//去一定叫我爹派人把你们通统
//抓起来，打断你们的腿！
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//银花：
//公子！您放了小姐吧！
//是奴婢对不起小姐，小姐只是
//在气头上，并不是真的要杀害
//我们
VideoUpdate(0, false);
SetDlgUpper(23, 0, false);
//林月如：
//银花！还不替我松绑！
//回头看我怎么整治你这贱人
VideoUpdate(0, false);
RoleSetDirFrame(3, 0, 0);
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//不成不成！你们若是真心想在
//一起，就趁这个机会赶快走吧
//逃的越远越好！等你们走远了
//我自然会放了你家小姐
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//长贵：
//是．．多谢公子
VideoUpdate(0, false);
EventSetDirFrame(22, 8, 0, 0);
VideoUpdate(0, false);
EventSetDirFrame(22, 9, 2, 0);
VideoUpdate(0, false);
//长贵：
//银花！我们快走吧
EventSetAutoScript(22, 8, "@16B1");
EventSetAutoScript(22, 9, "@16B1");
RoleSetDirFrame(3, 0, 1);
WaitEventAutoScriptRun(16, false, false);
EventSetState(402, 0, 0);
EventSetState(403, 0, 0);
VideoUpdate(0, false);
SetDlgUpper(23, 0, false);
//林月如：
//狗男女！给我滚回来！
VideoUpdate(0, false);
RoleSetDirFrame(0, 0, 0);
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//灵儿咱们进城去吧！这苏州城
//可热闹了，我带你去瞧瞧新鲜
VideoUpdate(0, false);
RoleSetDirFrame(2, 0, 1);
VideoUpdate(0, false);
SetDlgUpper(11, 0, false);
//赵灵儿：
//留她一个人在这里，不妥吧？
SetDlgLower(1, 0, false);
//李逍遥：
//现在就放了她，岂不是前功尽
//弃？等他们小俩口逃得够远了
//我们再回来放了这蛮千金
EventSetState(405, 1, 0);

['Event_00022_00010_Trigger'];
//小贼！快放了我！

['Event_00022_00011_Trigger'];
EventSetTriggerScript(22, 10, "@16BA");
SetDlgBox(0);
//远远传来一声尖叫
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//"救命啊．．．救命啊！"
VideoUpdate(0, false);
RoleSetDirFrame(3, 0, 1);
VideoUpdate(0, false);
RoleSetDirFrame(0, 0, 1);
WaitEventAutoScriptRun(8, false, false);
RoleSetDirFrame(3, 0, 1);
VideoUpdate(0, false);
RoleSetDirFrame(2, 0, 1);
VideoUpdate(0, false);
SetDlgUpper(18, 0, false);
//赵灵儿：
//逍遥哥！
//是刚才那位姑娘在喊救命！
RoleSetDirFrame(3, 0, 0);
VideoUpdate(0, false);
RoleSetDirFrame(0, 0, 0);
VideoUpdate(0, false);
SetDlgLower(9, 0, false);
//李逍遥：
//别理她！八成是她在装模作样
//骗我们回去。
VideoUpdate(0, false);
Replace();
SetDlgUpper(11, 0, false);
//赵灵儿：
//可是．．我不放心呢
//我们还是回去看看吧
SetDlgLower(1, 0, false);
//李逍遥：
//好吧！既然你这么说．．
VideoUpdate(0, false);
RoleSetDirFrame(0, 0, 0);
VideoUpdate(0, false);
RoleSetDirFrame(0, 0, 1);
VideoUpdate(0, false);
RoleMoveOneStep(-8, 4, 0);
VideoUpdate(0, false);
RoleMoveOneStep(-8, 4, 0);
VideoUpdate(0, false);
RoleMoveOneStep(-8, 4, 0);
VideoUpdate(0, false);
RoleMoveOneStep(-8, 4, 0);
VideoUpdate(0, false);

['Event_00022_00003_Trigger'];
VideoUpdate(0, false);
NpcSetDirFrame(0, 1);
VideoUpdate(0, false);
PlaySound(43);
HeroSetSprite(0, Sprite.李逍遥为林月如刺死, true);
RoleSetDirFrame(0, 0, 0);
WaitEventAutoScriptRun(3, false, false);
NpcSetDirFrame(0, 2);
WaitEventAutoScriptRun(3, false, false);
RoleSetDirFrame(0, 1, 0);
VideoUpdate(0, false);
NpcSetDirFrame(0, 3);
VideoUpdate(0, false);
EventSetState(400, 0, 0);
RoleSetDirFrame(0, 2, 0);
VideoUpdate(0, false);
SetDlgUpper(18, 0, false);
//赵灵儿：
//逍遥哥哥！！
VideoUpdate(0, false);
SetDlgLower(24, 0, false);
//林月如：
//你．．你怎么不闪呀！
WaitEventAutoScriptRun(4, false, false);
RoleSetDirFrame(0, 3, 0);
VideoUpdate(0, false);
SetDlgUpper(4, 0, false);
//李逍遥：
//小生无礼．．冒犯姑娘．．
//以致．．姑娘名节受损．．
//自当受此一剑．．以赎其罪
SetDlgLower(24, 0, false);
//林月如：
//我．．我不是故意的．．
//都怪你．．是你太过份！
//我才．．我．．
EventSetState(-1, 0, 0);
EventSetState(398, 1, 0);
EventSetDirFrame(22, 4, 1, 0);
EventSetState(399, 1, 0);
VideoUpdate(0, false);
PlaySound(14);
EventSetDirFrame(22, 4, 2, 0);
VideoUpdate(0, false);
EventSetAutoScript(22, 4, "@1825");
WaitEventAutoScriptRun(16, false, false);
EventSetState(398, 0, 0);
RoleSetDirFrame(0, 2, 0);
WaitEventAutoScriptRun(4, false, false);
SetDlgUpper(0, 0, false);
//李逍遥：
//开什么玩笑．．这一剑．．
//又快又突然。躲得掉才怪．．
RoleSetDirFrame(0, 4, 0);
VideoUpdate(0, false);
PlaySound(93);
SetDlgUpper(0, 0, false);
//赵灵儿：
//啊！逍遥哥哥，你不要死！
WaitEventAutoScriptRun(6, false, false);
//怎么办．．怎么办？！
//这样下去逍遥哥哥会死掉．．
WaitEventAutoScriptRun(8, false, false);
RoleSetDirFrame(0, 5, 0);
VideoUpdate(0, false);
//我．．只有赌赌看了
WaitEventAutoScriptRun(5, false, false);
SetDlgCenter(0, false);
//"灵儿念起咒文．．"~50
RoleSetDirFrame(0, 6, 0);
WaitEventAutoScriptRun(2, false, false);
RoleSetDirFrame(0, 5, 0);
WaitEventAutoScriptRun(0, false, false);
RoleSetDirFrame(0, 6, 0);
WaitEventAutoScriptRun(2, false, false);
RoleSetDirFrame(0, 5, 0);
WaitEventAutoScriptRun(2, false, false);
RoleSetDirFrame(0, 6, 0);
WaitEventAutoScriptRun(0, false, false);
RoleSetDirFrame(0, 5, 0);
WaitEventAutoScriptRun(3, false, false);
RoleSetDirFrame(0, 6, 0);
WaitEventAutoScriptRun(2, false, false);
RoleSetDirFrame(0, 5, 0);
WaitEventAutoScriptRun(0, false, false);
RoleSetDirFrame(0, 6, 0);
WaitEventAutoScriptRun(2, false, false);
RoleSetDirFrame(0, 5, 0);
WaitEventAutoScriptRun(2, false, false);
RoleSetDirFrame(0, 6, 0);
WaitEventAutoScriptRun(2, false, false);
RoleSetDirFrame(0, 5, 0);
WaitEventAutoScriptRun(3, false, false);
RoleSetDirFrame(0, 6, 0);
WaitEventAutoScriptRun(2, false, false);
RoleSetDirFrame(0, 5, 0);
WaitEventAutoScriptRun(0, false, false);
RoleSetDirFrame(0, 6, 0);
WaitEventAutoScriptRun(2, false, false);
RoleSetDirFrame(0, 7, 0);
WaitEventAutoScriptRun(6, false, false);
RoleSetDirFrame(0, 8, 0);
WaitEventAutoScriptRun(5, false, false);
RoleSetDirFrame(0, 9, 0);
WaitEventAutoScriptRun(2, false, false);
RoleSetDirFrame(0, 10, 0);
WaitEventAutoScriptRun(3, false, false);
PlaySound(263);
RoleSetDirFrame(0, 11, 0);
WaitEventAutoScriptRun(8, false, false);
RoleSetDirFrame(0, 10, 0);
WaitEventAutoScriptRun(4, false, false);
RoleSetDirFrame(0, 9, 0);
WaitEventAutoScriptRun(3, false, false);
RoleSetDirFrame(0, 12, 0);
WaitEventAutoScriptRun(10, false, false);
RoleSetDirFrame(0, 13, 0);
WaitEventAutoScriptRun(3, false, false);
RoleSetDirFrame(0, 14, 0);
WaitEventAutoScriptRun(3, false, false);
RoleSetDirFrame(0, 15, 0);
WaitEventAutoScriptRun(8, false, false);
SetDlgCenter(0, false);
//"灵儿真气消耗过度，晕了过去"
FadeOut(3);
RoleSetDirFrame(0, 16, 0);
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//"不知过了几个时辰"
//"两人才转醒过来．．"
VideoUpdate(0, false);
SetDlgLower(10, 0, false);
//李逍遥：
//咦？我胸口的伤．．
//怎么不痛了？
SetDlgUpper(17, 0, false);
//赵灵儿：
//你刚才昏死过去，我担心死了
VideoUpdate(0, false);
SetDlgLower(3, 0, false);
//李逍遥：
//哈哈！　我福大命大
//这点小伤死不了的
VideoUpdate(0, false);
SetDlgUpper(11, 0, false);
//赵灵儿：
//你还笑的出来！刚才那一剑刺
//中你的心脉，你差一点就没命
//了。
VideoRestore();
//我情急之下只好冒险一试
//师父教我背过的还魂咒，幸好
//上苍保佑，侥幸生效。
VideoUpdate(0, false);
SetDlgLower(2, 0, false);
//李逍遥：
//哎呀！我听说强行使用未练成
//的法术，很容易走火入魔的！
VideoRestore();
//这么说．．
//你是拼了命才救了我的啰？
RoleSetDirFrame(0, 17, 0);
VideoUpdate(0, false);
SetDlgUpper(15, 0, false);
//赵灵儿：
//都怪我以前不好好学，要是我
//早一点练成这法术，姥姥．．
//姥姥就不会死了。
VideoRestore();
//现在要是你也死了．．
//我．．我怎么办？
VideoUpdate(0, false);
SetDlgLower(6, 0, false);
//李逍遥：
//好了～别哭了，现在我不是没
//事了吗？
RoleSetDirFrame(0, 18, 0);
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//你放心．．我李逍遥可以对天
//发誓，从今以后决不会让你一
//个人孤苦伶仃！
RoleSetDirFrame(0, 19, 0);
WaitEventAutoScriptRun(6, false, false);
SetDlgUpper(11, 0, false);
//赵灵儿：
//谢谢你．．逍遥哥哥
VideoUpdate(0, false);
HeroSetSprite(0, Sprite.李逍遥, false);
PartySetRole(1, 2, 0);
RoleSetDirFrame(0, 0, 0);
HeroAddMagic(8, 2);
RoleModifyHPMP(true, 9999);

['Event_00022_00005_Trigger'];
SetDlgBox(0);
//拾起地上的宝剑
AddItem(113, 0);
EventSetState(-1, 0, 0);

['Event_00022_00001_Trigger'];
SceneEnter(23);
PartySetPos(14, 81, 0);
FadeOut(0);

['Scene_00022_Enter'];
MusicPlay(Music.繁华看尽, false, false);
PartySetPos(34, 86, 1);
RoleSetDirFrame(3, 0, 0);
RoleSetDirFrame(3, 0, 1);
PartySetRole(1, 2, 0);
SetBattleMusic(Music.势如破竹);
VideoUpdate(0, false);
//方老板：
//祝你们一路顺风，我只能送你
//们到这里了，前面不远就是苏
//州城。
ReplaceAndPause();
MusicPlay(Music.繁华看尽, false, false);

['Event_00022_00002_Auto'];
WaitEventAutoScriptRun(7, false, false);
NpcSetFrame(1);
ReplaceAndPause();
NpcSetFrame(2);
EventSetDirFrame(22, 7, 0, 1);
NpcSetFrame(0);
WaitEventAutoScriptRun(3, false, false);
EventSetDirFrame(22, 7, 0, 0);
ReplaceAndPauseWithNop("Event_00022_00002_Auto", 0);

['Event_00022_00012_Auto'];
EventModifyPos(-1, -1, 0, -1);
WaitEventAutoScriptRun(16, false, false);
EventModifyPos(-1, -1, 0, -1);
WaitEventAutoScriptRun(16, false, false);
GotoWithNop("Event_00022_00012_Auto", 0);

['Event_00022_00013_Auto'];
NpcSetDirFrame(0, 0);
NpcSetDirFrame(3, 0);
WaitEventAutoScriptRun(3, false, false);
EventSetAutoScript(22, 12, "@1CAB");
['@1CAB'];
EventModifyPos(-1, -1, 2, 1);
GotoWithNop("@1CAB", 140);
EventSetState(-1, 0, 0);

