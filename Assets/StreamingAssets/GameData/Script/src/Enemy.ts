['Enemy_00102_TurnStart'];
JumpIfHeroInParty(2, "@A005");

['Enemy_00012_TurnStart'];
JumpIfEnemyNotFirstOfKind("");
PlaySound(205);
//嘿．．嘿．．嘿．．
//又有香甜的人肉送上门来了
ReplaceAndPause();
//喔．．喔．．
//好像不太容易吃到喔．．
ReplaceAndPause();

['Enemy_00012_Action'];
ReplaceAndPause();
GotoWithProbability(60, "");
EnemySummonMonster(36, 0, "");
EnemySetMagic(-1, 0);
ReplaceAndPause();
EnemySetMagic(0, 0);
ReplaceAndPause();
EnemySummonMonster(36, 0, "");
EnemySetMagic(-1, 0);
ReplaceAndPause();
EnemySummonMonster(10, 2, "");
EnemySetMagic(-1, 0);
ReplaceAndPause();
EnemySetMagic(0, 0);
ReplaceAndPause();
ReplaceAndPause();
ReplaceAndPause();
ReplaceAndPauseWithNop("Enemy_00012_Action", 0);

['Enemy_00005_Won'];
AddItem(44, 0);
SetDlgBox(0);
//捡到一颗鼠儿果

['Enemy_00004_Won'];
GotoWithProbability(20, "");
AddItem(27, 0);
SetDlgBox(0);
//得到一颗雄黄

['Enemy_00003_Won'];
GotoWithProbability(22, "");
AddItem(39, 0);
SetDlgBox(0);
//获得一棵止血草

['Enemy_00007_Won'];
GotoWithProbability(16, "");
AddItem(71, 0);
SetDlgBox(0);
//得到蜂王蜜

['Enemy_00006_Won'];
GotoWithProbability(12, "");
AddItem(55, 0);
SetDlgBox(0);
//获得一个蜂巢

['Enemy_00012_Won'];
AddItem(37, 0);
SetDlgBox(0);
//得到孟婆汤

['Enemy_00071_TurnStart'];
SetDlgUpper(48, 0, false);
//求求你们．．相信奴家
//刘公子．．刘公子就快死了
SetDlgLower(23, 0, false);
//分明就是你这只妖怪想害死他
//还妄想装做好人！
EnemySetMagic(-1, 0);
ReplaceAndPause();
SetDlgUpper(48, 0, false);
//你们误会了，相公中了缠魂丝
//奴家这么做是为了要救他
SetDlgLower(23, 0, false);
//你要想害人，先过我这一关
ReplaceAndPause();
SetDlgUpper(48, 0, false);
//对不起．．既然各位不相信
//奴家奴家只好得罪了
EnemySetMagic(56, 0);
ReplaceAndPause();
ReplaceAndPause();
ReplaceAndPause();
ReplaceAndPause();
BattleEnemyEscape();

['Enemy_00105_TurnStart'];
EnemySetMagic(-1, 0);
SetDlgLower(5, 0, false);
//何方妖孽，竟敢在此撒野
//见了本大侠，还不束手就擒！
SetDlgUpper(24, 0, false);
//李大哥等一下．．．
VideoUpdate(0, false);
SetDlgUpper(90, 0, false);
//．．．．．．．　．　．
BattleEnemyEscape();
SetDlgBox(0);
//半人蛇妖撞破墙壁，逃走了

['Enemy_00057_TurnStart'];
JumpIfEnemyNotFirstOfKind("");
SetDlgLower(9, 0, false);
//灵儿！  咱们动手吧．．
//给这些流氓一些教训
SetDlgUpper(11, 0, false);
//可是～大娘交待过
//叫我们别惹事生非．．
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//这叫行侠仗义，不是惹事
SetDlgUpper(17, 0, false);
//那．．可是～
EnemySetScript(57, EnemyScript.TurnStart, "");
ReplaceAndPause();

['Enemy_00088_TurnStart'];
JumpIfHeroInParty(2, "@A144");

['Enemy_00083_TurnStart'];
SetDlgUpper(23, 0, false);
//让开！！
SetDlgLower(5, 0, false);
//太过份了！虽然是你的奴仆
//你也不能草菅人命！
VideoUpdate(0, false);
SetDlgUpper(22, 0, false);
//我爱怎么做就怎么做
//你管不着！
VideoUpdate(0, false);
SetDlgLower(9, 0, false);
//很不巧！我李逍遥生平最恨的
//就是欺侮弱小的人，既然被我
//遇上了，就不容你仗势欺人！
SetDlgUpper(22, 0, false);
//好！我打得你说不出话来！
ReplaceAndPause();

['Enemy_00086_TurnStart'];
SetDlgUpper(22, 0, false);
//喂．．小贼！
VideoRestore();
//本姑娘不想欺负受伤的人
//只要你向本姑娘磕三个响头
//本姑娘也可以饶了你！
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//这你不用担心。　这点小伤
//本公子才不放在眼里，你尽管
//放马过来
VideoUpdate(0, false);
SetDlgUpper(21, 0, false);
//好～　是你找的！
//输了～可别怪我欺你有伤在身
SetDlgLower(9, 0, false);
//彼此～彼此～你若输了．．
//也别说本公子欺负女孩子！
MusicStop(1);
VideoUpdate(0, false);
SetDlgUpper(21, 0, false);
//哼～　放马过来吧！~10
PlaySound(213);
Delay(20);
MusicPlay(Music.势如破竹_副本, false, false);
ReplaceAndPause();

['Enemy_00081_TurnStart'];
JumpIfHeroInParty(3, "@A1CD");
ReplaceAndPause();
PlaySound(193);
SetDlgUpper(41, 0, false);
//嘿！　小帅哥．．身手不赖嘛
//可惜奴家没空陪您玩了
BattleEnemyEscape();

['Enemy_00099_TurnStart'];
JumpIfHeroInParty(6, "@A201");
SetDlgLower(18, 0, false);
//赵灵儿：
//快把梦慈姐姐放了！
VideoUpdate(0, false);
SetDlgUpper(60, 0, false);
//石长老：
//公主殿下请放心，我们的
//目的不是韩姑娘。只要殿
//下跟我们走，我们绝不为
//难其他任何人
VideoUpdate(0, false);
SetDlgLower(11, 0, false);
//赵灵儿：
//你们把梦慈姐姐抓来
//就是为了把我们引来？
VideoUpdate(0, false);
SetDlgUpper(60, 0, false);
//石长老：
//为了大事，用了一点手段
//还请殿下见谅．．
VideoUpdate(0, false);
SetDlgLower(7, 0, false);
//李逍遥：
//死了这条心吧！
//灵儿不会跟你们走的
VideoUpdate(0, false);
SetDlgUpper(60, 0, false);
//石长老：
//哦？　如果软的不行
//要我们来硬的也可以！
VideoUpdate(0, false);
SetDlgLower(9, 0, false);
//李逍遥：
//来呀！　怕你不成？
VideoUpdate(0, false);
SetDlgUpper(60, 0, false);
//石长老：
//哼！　不知死活的小子
ReplaceAndPause();

['Enemy_00128_TurnStart'];
SetDlgUpper(0, 0, false);
//林天南：
//拿出你的真本领吧！
//不然．．死在我的剑下
//就别怨我
ReplaceAndPause();
ReplaceAndPause();
ReplaceAndPause();
ReplaceAndPause();
SetDlgUpper(0, 0, false);
//林天南：
//　注意了！
ReplaceAndPause();
ReplaceAndPause();
ReplaceAndPause();
BattleSetResult(BattleResult.脚本结束);

['Enemy_00128_Action'];
EnemySetMagic(0, 0);
ReplaceAndPause();
SetDlgUpper(0, 0, false);
//林天南：
//好～　第二剑！
EnemySetMagic(40, 0);
ReplaceAndPause();
EnemySetMagic(42, 0);
ReplaceAndPause();
EnemySetMagic(87, 0);
ReplaceAndPause();
EnemySetMagic(79, 0);
ReplaceAndPause();
EnemySetMagic(78, 0);
ReplaceAndPause();
//林天南：
//最后一招～看清楚了！
EnemySetMagic(45, 0);
ReplaceAndPause();

['Enemy_00038_TurnStart'];
PlaySound(245);
//蜘蛛精：
//不自量力的家伙！
ReplaceAndPause();
ReplaceAndPause();
//蜘蛛精：
//可恶！给你们点厉害瞧瞧！
EnemySetMagic(23, 0);
ReplaceAndPause();
ReplaceAndPause();
//蜘蛛精：
//哇～哈～哈～受不住了吧！
//我还有更厉害的招术
EnemySetMagic(24, 0);
ReplaceAndPause();
ReplaceAndPause();
//蜘蛛精：
//死吧！
EnemySetMagic(25, 0);
ReplaceAndPause();
BattleSetResult(BattleResult.脚本结束);

BattleStart(45, "@A073", "@A071");
GotoWithNop("@A0A7", 0);
['Enemy_00132_TurnStart'];
SetDlgLower(23, 0, false);
//你这臭妖怪，恩将仇报！
VideoUpdate(0, false);
SetDlgUpper(43, 0, false);
//我们鬼族报答人类的方式
//就是吃了对方的身体，让
//他们成为我们的伙伴！
EnemySetMagic(0, 0);
ReplaceAndPause();
EnemySetMagic(38, 0);
ReplaceAndPause();
EnemySetMagic(0, 0);
ReplaceAndPause();
EnemySetMagic(24, 0);
ReplaceAndPause();
ReplaceAndPause();
EnemySetMagic(0, 0);
ReplaceAndPause();
EnemySetMagic(81, 0);
ReplaceAndPause();
EnemySetMagic(38, 0);
ReplaceAndPause();
EnemySetMagic(34, 0);
ReplaceAndPause();
SetDlgLower(10, 0, false);
//李逍遥：
//等等～！
BattleSetResult(BattleResult.脚本结束);

['Enemy_00122_TurnStart'];
SetDlgLower(5, 0, false);
//李逍遥：
//灵儿犯了什么罪？
//你们要如此迫害于她！
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//镇狱明王：
//此蛇女具有极可怕的妖力潜能
//如不将之铲除，一旦任其觉醒
//必将危祸人世！
VideoUpdate(0, false);
SetDlgLower(5, 0, false);
//李逍遥：
//是妖怪又怎么样
//她又不曾害过任何人！
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//镇狱明王：
//哼！幼虎虽温驯，谁敢保证将
//来不会成为一头吃人的猛虎？
VideoRestore();
//我既受命镇守此塔，斩除魔
//族祸根乃我职责天命所在，
//绝不容情！
VideoUpdate(0, false);
SetDlgLower(5, 0, false);
//李逍遥：
//放屁！　神又怎么样
//生了六只手、三只眼睛
//一付嘴脸比妖怪更像妖怪
VideoRestore();
//灵儿天生灵力高强，是她的
//福气，你们嫉妒什么！？
//你呢～　你不也是法力无边
//怎么不先杀掉你自己？
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//镇狱明王：
//无知愚民！我乃仙界之神明
//不同于这般下等山精水怪
VideoUpdate(0, false);
//汝等回头是岸，莫与妖魔为伍
//而逆天行事！　否则一并打入
//炼狱之中，受永世劫火之苦！
VideoUpdate(0, false);
SetDlgLower(91, 0, false);
//赵灵儿：
//我娘乃是女娲氏嫡系族裔
//我身虽为妖，心却非魔
//你怎可凭此而加罪于我！
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//镇狱明王：
//女娲？　西天如来座下、天界
//神佛之中，并无此号人物在列
VideoRestore();
//汝之先祖～只不过是南夷苗
//民女巫所崇拜的圣灵罢了
//当今人世业已深受我佛教化
//旁门左道再无须容身之理！
//觉悟吧！！
ReplaceAndPause();
SetDlgLower(91, 0, false);
//赵灵儿：
//$06上天既赐予我不同于凡人之力
//就有我必须去做的事，我若死
//于此，不但有愧天地，更对不
//起千千万万崇拜我的苗民黔首~60
VideoRestore();
//$04道归道、魔归魔、而我是我
//$02神佛也不能决定我的命运！~70
MusicPlay(Music.逆天而行, false, false);
RoleModifyAttr(Attribute.MaxMP, 170, 2);
RoleModifyAttr(Attribute.HP, 190, 2);
RoleModifyAttr(Attribute.MaxHP, 11, 2);
RoleModifyAttr(Attribute.AttrMagicStrength, 100, 2);
RoleModifyAttr(Attribute.AttrDefense, 155, 2);
RoleModifyAttr(Attribute.AttrDexterity, 55, 2);
RoleModifyAttr(Attribute.AttrFleeRate, 80, 2);
RoleModifyAttr(Attribute.ResistancePoison, 30, 2);
RoleRevive(true, 10);
RoleModifyHPMP(true, 9999);
ShowRoleMagicAction(2);
VideoUpdate(0, false);
SetDlgCenter(0, false);
//"赵灵儿力量觉醒"~45
VideoUpdate(0, false);
SetDlgLower(9, 0, false);
//李逍遥：
//跟他拼了！~45
VideoUpdate(0, false);
SetDlgLower(21, 0, false);
//林月如：
//好　～！~45
EnemySetMagic(81, 0);
ReplaceAndPause();
['@A55D'];
EnemySetMagic(0, 0);
ReplaceAndPause();
EnemySetMagic(34, 0);
ReplaceAndPause();
EnemySetMagic(25, 0);
ReplaceAndPause();
ReplaceAndPause();
EnemySetMagic(-1, 0);
ReplaceAndPause();
EnemySetMagic(34, 0);
ReplaceAndPause();
EnemySetMagic(38, 0);
ReplaceAndPause();
EnemySetMagic(24, 0);
ReplaceAndPause();
EnemySetMagic(29, 0);
ReplaceAndPause();
EnemySetMagic(-1, 0);
ReplaceAndPause();
EnemySetMagic(34, 0);
ReplaceAndPause();
EnemySetMagic(24, 0);
ReplaceAndPause();
EnemySetMagic(25, 0);
ReplaceAndPause();
EnemySummonMonster(51, 0, "");
EnemySummonMonster(51, 0, "");
EnemySetMagic(-1, 0);
ReplaceAndPause();
EnemySetMagic(81, 0);
ReplaceAndPause();
EnemySetMagic(0, 0);
ReplaceAndPause();
EnemySetMagic(81, 0);
ReplaceAndPause();
ReplaceAndPause();
EnemySetMagic(34, 0);
ReplaceAndPause();
EnemySetMagic(38, 0);
ReplaceAndPause();
EnemySetMagic(0, 0);
ReplaceAndPause();
EnemySetMagic(24, 0);
ReplaceAndPause();
ReplaceAndPause();
EnemySummonMonster(51, 2, "");
EnemySetMagic(-1, 0);
ReplaceAndPause();
EnemySetMagic(25, 0);
ReplaceAndPauseWithNop("@A55D", 0);

['Enemy_00122_Action'];
SetDlgLower(0, 0, false);
//镇狱明王：
//哼　一群邪魔外道
//让你们永世不得超生！~50
ReplaceAndPause();
SetDlgLower(0, 0, false);
//镇狱明王：
//愚蠢的人类！下地狱吧！~50
ReplaceAndPause();

['Enemy_00142_TurnStart'];
ReplaceAndPause();
ReplaceAndPause();
EnemySetMagic(-1, 0);
ReplaceAndPause();
GotoWithProbability(80, "@A5A3");
GotoWithProbability(50, "@A5A6");
EnemySetMagic(71, 4);
ReplaceAndPauseWithNop("Enemy_00142_TurnStart", 0);

['Enemy_00127_Won'];
AddItem(154, 0);
SetDlgBox(0);
//得到罗汉袍

['Enemy_00097_Won'];
AddItem(156, 0);
SetDlgBox(0);
//得到天师道袍

['Enemy_00122_Won'];
AddItem(170, 0);
SetDlgBox(0);
//得到菩提袈裟

['Enemy_00072_Action'];
GotoWithProbability(40, "");
ReplaceAndPause();
EnemySetMagic(10, 0);
ReplaceAndPause();
EnemySummonMonster(6, 4, "");
EnemySetMagic(-1, 0);
ReplaceAndPause();
EnemySetMagic(22, 0);
ReplaceAndPause();
ReplaceAndPause();
EnemySetMagic(0, 0);
ReplaceAndPause();
EnemySetMagic(23, 0);
GotoWithProbability(40, "");
EnemySetMagic(0, 0);
ReplaceAndPause();
EnemySetMagic(10, 0);
ReplaceAndPause();
EnemySetMagic(0, 0);
GotoWithProbability(50, "");
ReplaceAndPause();
EnemySummonMonster(6, 4, "");
EnemySetMagic(-1, 0);
ReplaceAndPause();
EnemySetMagic(23, 0);
ReplaceAndPause();
EnemySetMagic(0, 0);
ReplaceAndPauseWithNop("Enemy_00072_Action", 0);

['Enemy_00089_Action'];
GotoWithProbability(30, "");
ReplaceAndPause();
ReplaceAndPause();
ReplaceAndPause();
ReplaceAndPause();
ReplaceAndPause();
ReplaceAndPause();
//蛇妖：
//可恶的人类～死吧！~45
EnemySetMagic(41, 10);
ReplaceAndPause();
ReplaceAndPause();
ReplaceAndPause();
EnemySetMagic(-1, 0);
ReplaceAndPause();
EnemySetMagic(0, 0);
ReplaceAndPause();
ReplaceAndPauseWithNop("Enemy_00089_Action", 0);

['Enemy_00075_TurnStart'];
EnemySetMagic(-1, 0);
ReplaceAndPause();
EnemySetMagic(58, 0);
ReplaceAndPause();
EnemySetMagic(0, 0);
ReplaceAndPause();
EnemySetMagic(70, 0);
ReplaceAndPause();
EnemySetMagic(12, 0);
ReplaceAndPause();
EnemySetMagic(-1, 0);
ReplaceAndPause();
EnemySetMagic(58, 0);
ReplaceAndPause();
ReplaceAndPause();
EnemySetMagic(-1, 0);
ReplaceAndPause();
EnemySetMagic(70, 0);
ReplaceAndPause();
ReplaceAndPause();
EnemySetMagic(12, 0);
ReplaceAndPause();
EnemySetMagic(0, 0);
ReplaceAndPause();
ReplaceAndPause();
EnemySetMagic(70, 0);
ReplaceAndPause();
EnemySetMagic(58, 0);
ReplaceAndPause();
EnemySetMagic(-1, 0);
ReplaceAndPause();
ReplaceAndPauseWithNop("Enemy_00075_TurnStart", 0);

['Enemy_00076_Action'];
EnemySetMagic(0, 0);
ReplaceAndPause();
ReplaceAndPause();
EnemySummonMonster(22, 2, "");
EnemySetMagic(-1, 0);
ReplaceAndPause();
PlaySound(267);
EnemySetMagic(59, 0);
ReplaceAndPause();
EnemySetMagic(31, 0);
ReplaceAndPause();
EnemySetMagic(37, 0);
ReplaceAndPause();
EnemySetMagic(11, 0);
ReplaceAndPause();
EnemySummonMonster(36, 2, "@A61E");
EnemySetMagic(-1, 0);
['@A61E'];
ReplaceAndPause();
PlaySound(267);
EnemySetMagic(59, 0);
ReplaceAndPause();
ReplaceAndPause();
EnemySetMagic(0, 0);
ReplaceAndPause();
EnemySetMagic(11, 0);
ReplaceAndPause();
EnemySetMagic(0, 0);
ReplaceAndPause();
PlaySound(267);
EnemySetMagic(59, 0);
ReplaceAndPause();
PlaySound(267);
EnemySetMagic(59, 0);
ReplaceAndPause();
EnemySetMagic(0, 0);
ReplaceAndPause();
EnemySummonMonster(55, 2, "@A634");
EnemySetMagic(-1, 0);
ReplaceAndPause();
['@A634'];
EnemySetMagic(23, 0);
ReplaceAndPause();
EnemySetMagic(32, 0);
ReplaceAndPause();
EnemySetMagic(0, 0);
ReplaceAndPause();
EnemySummonMonster(36, 2, "@A63D");
EnemySetMagic(-1, 0);
ReplaceAndPause();
['@A63D'];
PlaySound(267);
EnemySetMagic(59, 0);
ReplaceAndPause();
EnemySetMagic(23, 0);
ReplaceAndPauseWithNop("Enemy_00076_Action", 0);

['Enemy_00097_TurnStart'];
EnemySetMagic(51, 0);
ReplaceAndPause();
ReplaceAndPause();
EnemySetMagic(62, 0);
ReplaceAndPause();
EnemySetMagic(-1, 0);
ReplaceAndPause();
EnemySetMagic(51, 0);
ReplaceAndPause();
EnemySetMagic(40, 0);
ReplaceAndPause();
EnemySetMagic(62, 0);
ReplaceAndPause();
EnemySetMagic(51, 0);
ReplaceAndPause();
EnemySetMagic(40, 0);
ReplaceAndPause();
EnemySetMagic(62, 0);
ReplaceAndPause();
EnemySetMagic(87, 0);
ReplaceAndPause();
EnemySetMagic(51, 0);
ReplaceAndPause();
EnemySetMagic(62, 0);
ReplaceAndPause();
ReplaceAndPauseWithNop("Enemy_00097_TurnStart", 0);

['Enemy_00133_TurnStart'];
EnemySetMagic(19, 0);
ReplaceAndPause();
EnemySetMagic(0, 0);
ReplaceAndPause();

['Enemy_00137_TurnStart'];
ReplaceAndPause();
EnemyClone(0, "");
ReplaceAndPauseWithNop("Enemy_00137_TurnStart", 0);

['Enemy_00005_Action'];
ReplaceAndPause();
GotoWithProbability(60, "");
EnemyTransform(73);
EnemySetMagic(-1, 0);
ReplaceAndPause();
EnemySetMagic(60, 0);
ReplaceAndPause();
EnemySetMagic(0, 0);
ReplaceAndPause();
EnemySetMagic(60, 7);
ReplaceAndPause();

['Enemy_00032_Action'];
ReplaceAndPause();
ReplaceAndPause();
GotoWithProbability(35, "");
EnemyTransform(64);
EnemySetMagic(-1, 0);
ReplaceAndPause();
EnemySetMagic(23, 5);
ReplaceAndPause();

['Enemy_00013_Action'];
ReplaceAndPause();
GotoWithProbability(60, "");
EnemyTransform(37);
EnemySetMagic(-1, 0);
ReplaceAndPause();
EnemySetMagic(0, 0);
ReplaceAndPause();
GotoWithProbability(60, "");
EnemyTransform(13);
EnemySetMagic(-1, 0);
ReplaceAndPause();
EnemySetMagic(30, 7);
ReplaceAndPauseWithNop("Enemy_00013_Action", 0);

['Enemy_00025_Action'];
GotoWithProbability(42637, "");
EnemySetMagic(12, 0);
ReplaceAndPause();
['@A68D'];
EnemySetMagic(-1, 0);
ReplaceAndPause();
EnemySetMagic(12, 0);
ReplaceAndPauseWithNop("@A68D", 0);

['Enemy_00103_Action'];
EnemySetMagic(-1, 0);
ReplaceAndPause();
EnemySetMagic(75, 0);
ReplaceAndPause();
EnemySetMagic(75, 0);
ReplaceAndPause();
EnemySetMagic(12, 0);
ReplaceAndPause();
ReplaceAndPause();
EnemySetMagic(-1, 0);
ReplaceAndPause();
EnemySetMagic(53, 0);
ReplaceAndPause();
EnemySetMagic(75, 0);
ReplaceAndPause();
EnemySetMagic(0, 0);
ReplaceAndPause();
EnemySetMagic(12, 0);
ReplaceAndPause();
ReplaceAndPause();
EnemySetMagic(-1, 0);
ReplaceAndPause();
EnemySetMagic(0, 0);
ReplaceAndPause();
EnemySetMagic(70, 0);
ReplaceAndPause();
EnemySetMagic(70, 0);
ReplaceAndPause();
ReplaceAndPause();
EnemySetMagic(12, 0);
ReplaceAndPause();
EnemySetMagic(0, 0);
ReplaceAndPause();
ReplaceAndPauseWithNop("Enemy_00103_Action", 0);

['Enemy_00024_Action'];
GotoWithProbability(60, "@A6C3");
GotoWithProbability(60, "");
EnemySummonMonster(44, 2, "");
EnemySetMagic(-1, 0);
ReplaceAndPause();
EnemySetMagic(0, 0);
ReplaceAndPause();
EnemySummonMonster(44, 2, "");
EnemySetMagic(-1, 0);
ReplaceAndPause();
EnemySetMagic(0, 0);
ReplaceAndPause();
ReplaceAndPause();
ReplaceAndPauseWithNop("Enemy_00024_Action", 0);
['@A6C3'];
GotoWithProbability(50, "");
EnemySummonMonster(0, 0, "");
EnemySetMagic(-1, 0);
ReplaceAndPause();
EnemySetMagic(0, 0);
ReplaceAndPause();
ReplaceAndPause();
ReplaceAndPauseWithNop("Enemy_00024_Action", 0);

['Enemy_00048_TurnStart'];
ReplaceAndPause();
GotoWithProbability(50, "");
EnemyClone(0, "");
ReplaceAndPauseWithNop("Enemy_00048_TurnStart", 0);

['Enemy_00077_TurnStart'];
SetDlgLower(27, 0, false);
//阿奴：
//快放了村长伯伯
//还有～交出水灵珠
//不然有你受的！
VideoUpdate(0, false);
//木道人：
//哪来的小鬼！？找死吗？
//胆敢插手本山人的事！
ReplaceAndPause();

['Enemy_00077_Action'];
EnemySetMagic(51, 0);
ReplaceAndPause();
ReplaceAndPause();
EnemySummonMonster(115, 0, "");
EnemySetMagic(-1, 0);
ReplaceAndPause();
EnemySummonMonster(115, 0, "");
EnemySetMagic(-1, 0);
ReplaceAndPause();
ReplaceAndPause();
//木道人：
//哼．．看不出你们这些小鬼
//还颇有两下子的．．
//看来～非拿出绝招不可了！~50
EnemySetMagic(74, 0);
ReplaceAndPause();
EnemySetMagic(-1, 0);
ReplaceAndPause();
EnemySetMagic(74, 0);
ReplaceAndPause();
EnemySetMagic(23, 0);
ReplaceAndPause();
EnemySetMagic(10, 0);
ReplaceAndPause();
EnemySummonMonster(115, 0, "");
EnemySetMagic(-1, 0);
ReplaceAndPause();
EnemySummonMonster(115, 0, "");
EnemySetMagic(-1, 0);
ReplaceAndPause();
EnemySetMagic(24, 0);
ReplaceAndPause();
EnemySetMagic(29, 0);
ReplaceAndPause();
EnemySetMagic(-1, 0);
ReplaceAndPause();
EnemySetMagic(0, 0);
ReplaceAndPause();
EnemySetMagic(74, 0);
ReplaceAndPause();
EnemySetMagic(74, 0);
ReplaceAndPause();
EnemySetMagic(74, 0);
ReplaceAndPause();
EnemySetMagic(-1, 0);
ReplaceAndPause();
EnemySetMagic(51, 0);
ReplaceAndPause();
ReplaceAndPause();
EnemySetMagic(29, 0);
ReplaceAndPause();
EnemySetMagic(0, 0);
ReplaceAndPause();
EnemySummonMonster(115, 0, "");
EnemySetMagic(-1, 0);
ReplaceAndPause();
EnemySetMagic(74, 0);
ReplaceAndPause();
EnemySummonMonster(115, 0, "");
EnemySetMagic(-1, 0);
ReplaceAndPause();
EnemySetMagic(74, 0);
ReplaceAndPause();
ReplaceAndPause();
EnemySetMagic(-1, 0);
ReplaceAndPause();
EnemySetMagic(0, 0);
ReplaceAndPause();
EnemySetMagic(10, 0);
ReplaceAndPause();
EnemySetMagic(24, 0);
ReplaceAndPause();
EnemySetMagic(-1, 0);
ReplaceAndPause();
EnemySetMagic(20, 0);
ReplaceAndPause();
EnemySetMagic(74, 5);
ReplaceAndPause();

['Enemy_00127_Action'];
EnemySummonMonster(45, 2, "");
EnemySetMagic(-1, 0);
ReplaceAndPause();
EnemySetMagic(82, 0);
ReplaceAndPause();
EnemySetMagic(-1, 0);
ReplaceAndPause();
EnemySetMagic(82, 0);
ReplaceAndPause();
ReplaceAndPause();
EnemySetMagic(-1, 0);
ReplaceAndPause();
EnemySetMagic(82, 0);
ReplaceAndPause();
ReplaceAndPause();
EnemySummonMonster(56, 0, "");
EnemySummonMonster(56, 0, "");
EnemySetMagic(-1, 0);
ReplaceAndPause();
EnemySetMagic(82, 0);
ReplaceAndPause();
ReplaceAndPause();
ReplaceAndPause();
EnemySetMagic(-1, 0);
ReplaceAndPause();
EnemySetMagic(82, 0);
ReplaceAndPause();
EnemySetMagic(-1, 0);
ReplaceAndPause();
EnemySetMagic(82, 0);
ReplaceAndPause();
ReplaceAndPauseWithNop("Enemy_00127_Action", 0);

['Enemy_00068_Won'];
AddItem(92, 0);
SetDlgBox(0);
//获得一只傀儡虫

['Enemy_00116_TurnStart'];
JumpIfEnemyNotFirstOfKind("");
PlaySound(206);
ReplaceAndPause();

['Enemy_00039_TurnStart'];
JumpIfEnemyNotFirstOfKind("");
PlaySound(245);
ReplaceAndPause();

['Enemy_00023_TurnStart'];
JumpIfEnemyNotFirstOfKind("");
PlaySound(258);
GotoWithProbability(45, "");
ReplaceAndPauseWithNop("Enemy_00023_TurnStart", 0);

['Enemy_00104_TurnStart'];
SetDlgLower(1, 0, false);
//李逍遥：
//喂～　等等！
//怎么见到人就打呀？
VideoUpdate(0, false);
SetDlgUpper(44, 0, false);
//盖罗娇：
//你鬼鬼祟祟的跑到这做什么？
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//我？　这里不能来吗？
VideoUpdate(0, false);
SetDlgUpper(44, 0, false);
//盖罗娇：
//来人可以，走人不行！
ReplaceAndPause();

['Enemy_00125_Action'];
EnemySetMagic(10, 0);
ReplaceAndPause();
EnemySetMagic(12, 0);
ReplaceAndPause();
GotoWithProbability(30, "");
EnemySummonMonster(93, 0, "");
EnemySummonMonster(93, 0, "");
EnemySetMagic(-1, 0);
ReplaceAndPause();
EnemySetMagic(11, 5);
ReplaceAndPause();

['Enemy_00126_Action'];
EnemySetMagic(78, 0);
ReplaceAndPause();
EnemySetMagic(24, 0);
ReplaceAndPause();
GotoWithProbability(40, "");
EnemySummonMonster(95, 0, "");
EnemySummonMonster(95, 0, "");
EnemySetMagic(-1, 0);
ReplaceAndPause();
EnemySetMagic(25, 5);
ReplaceAndPause();

['Enemy_00050_TurnStart'];
PlaySound(267);
ReplaceAndPause();

['Enemy_00023_Action'];
ReplaceAndPause();
GotoWithProbability(66, "");
EnemySummonMonster(0, 0, "");
EnemySetMagic(-1, 0);
ReplaceAndPause();
EnemySetMagic(0, 0);

['Enemy_00121_Action'];
ReplaceAndPause();
EnemySetMagic(30, 0);
ReplaceAndPause();
EnemySetMagic(31, 0);
ReplaceAndPause();
EnemySetMagic(32, 0);
ReplaceAndPause();

['Enemy_00141_Action'];
ReplaceAndPause();
EnemySetMagic(26, 0);
ReplaceAndPause();
ReplaceAndPause();
EnemySetMagic(27, 0);
ReplaceAndPause();

['Enemy_00150_Action'];
JumpToRandomInstruction(4);
GotoWithNop("@A7A5", 0);
GotoWithNop("@A7A9", 0);
GotoWithNop("@A7AD", 0);
GotoWithNop("@A7AF", 0);
['@A7A5'];
EnemySetMagic(-1, 0);
ReplaceAndPause();
EnemySetMagic(0, 0);
ReplaceAndPauseWithNop("Enemy_00150_Action", 0);
['@A7A9'];
EnemySetMagic(72, 0);
ReplaceAndPause();
EnemySetMagic(11, 0);
ReplaceAndPauseWithNop("Enemy_00150_Action", 0);
['@A7AD'];
EnemySetMagic(29, 0);
ReplaceAndPauseWithNop("Enemy_00150_Action", 0);
['@A7AF'];
EnemySetMagic(38, 0);
ReplaceAndPauseWithNop("Enemy_00150_Action", 0);

['Enemy_00066_Action'];
GotoWithProbability(60, "@A7B7");
GotoWithProbability(40, "@A7B9");
GotoWithProbability(20, "@A7BB");
EnemySetMagic(-1, 0);
ReplaceAndPauseWithNop("Enemy_00066_Action", 0);
['@A7B7'];
EnemySetMagic(32, 0);
ReplaceAndPauseWithNop("Enemy_00066_Action", 0);
['@A7B9'];
EnemySetMagic(80, 0);
ReplaceAndPauseWithNop("Enemy_00066_Action", 0);
['@A7BB'];
EnemySetMagic(77, 0);
ReplaceAndPauseWithNop("Enemy_00066_Action", 0);

['Enemy_00149_TurnStart'];
//拜月教主：
//想打倒我？　哼！
//再回去修练一百年吧
ReplaceAndPause();

['Enemy_00149_Action'];
EnemySetMagic(94, 0);
ReplaceAndPause();
EnemySetMagic(95, 0);
ReplaceAndPause();
EnemySetMagic(0, 0);
ReplaceAndPause();
['@A7C9'];
JumpToRandomInstruction(14);
GotoWithNop("@A7D8", 0);
GotoWithNop("@A7DE", 0);
GotoWithNop("@A7E2", 0);
GotoWithNop("@A7E4", 0);
GotoWithNop("@A7E6", 0);
GotoWithNop("@A7E8", 0);
GotoWithNop("@A7EC", 0);
GotoWithNop("@A7EE", 0);
GotoWithNop("@A7F2", 0);
GotoWithNop("@A7F6", 0);
GotoWithNop("@A7FA", 0);
GotoWithNop("@A7FE", 0);
GotoWithNop("@A801", 0);
GotoWithNop("@A804", 0);
['@A7D8'];
EnemySetMagic(95, 0);
ReplaceAndPause();
EnemySetMagic(0, 0);
ReplaceAndPause();
EnemySetMagic(94, 0);
ReplaceAndPauseWithNop("@A7C9", 0);
['@A7DE'];
EnemySetMagic(73, 0);
ReplaceAndPause();
EnemySetMagic(34, 0);
ReplaceAndPauseWithNop("@A7C9", 0);
['@A7E2'];
EnemySetMagic(60, 0);
ReplaceAndPauseWithNop("@A7C9", 0);
['@A7E4'];
EnemySetMagic(29, 0);
ReplaceAndPauseWithNop("@A7C9", 0);
['@A7E6'];
EnemySetMagic(38, 0);
ReplaceAndPauseWithNop("@A7C9", 0);
['@A7E8'];
EnemySetMagic(24, 0);
ReplaceAndPause();
EnemySetMagic(25, 0);
ReplaceAndPauseWithNop("@A7C9", 0);
['@A7EC'];
EnemySetMagic(72, 0);
ReplaceAndPauseWithNop("@A7C9", 0);
['@A7EE'];
EnemySetMagic(93, 0);
ReplaceAndPause();
EnemySetMagic(55, 0);
ReplaceAndPauseWithNop("@A7C9", 0);
['@A7F2'];
EnemySetMagic(12, 0);
ReplaceAndPause();
EnemySetMagic(12, 0);
ReplaceAndPauseWithNop("@A7C9", 0);
['@A7F6'];
EnemySetMagic(58, 0);
ReplaceAndPause();
EnemySetMagic(95, 0);
ReplaceAndPauseWithNop("@A7C9", 0);
['@A7FA'];
EnemySetMagic(78, 0);
ReplaceAndPause();
EnemySetMagic(79, 0);
ReplaceAndPauseWithNop("@A7C9", 0);
['@A7FE'];
EnemySummonMonster(106, 2, "@A7D8");
EnemySetMagic(-1, 0);
ReplaceAndPauseWithNop("@A7C9", 0);
['@A801'];
EnemySummonMonster(96, 2, "@A7EC");
EnemySetMagic(-1, 0);
ReplaceAndPauseWithNop("@A7C9", 0);
['@A804'];
EnemySummonMonster(114, 2, "@A7F6");
EnemySetMagic(-1, 0);
ReplaceAndPauseWithNop("@A7C9", 0);

