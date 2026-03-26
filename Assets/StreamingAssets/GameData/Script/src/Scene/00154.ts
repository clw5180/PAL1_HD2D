['Event_00154_00003_Auto'];
NpcMoveToBlockMutexLock(50, 24, 0, 4);

['Event_00154_00004_Auto'];
NpcMoveToBlock(51, 23, 0, 3);
NpcSetDirFrame(3, 0);

['Event_00154_00005_Auto'];
NpcMoveToBlock(49, 25, 0, 3);
NpcSetDirFrame(3, 0);

['Event_00154_00006_Auto'];
NpcMoveToBlockMutexLock(51, 22, 0, 4);

['Event_00154_00007_Auto'];
NpcMoveToBlockMutexLock(49, 22, 0, 4);

['Event_00154_00008_Auto'];
NpcMoveToBlock(48, 28, 0, 3);
NpcMoveToBlock(50, 30, 1, 3);
NpcSetDirFrame(2, 0);

['Event_00154_00009_Auto'];
NpcMoveToBlock(48, 28, 0, 3);
NpcMoveToBlock(49, 29, 1, 3);
NpcSetDirFrame(2, 0);

['Event_00154_00010_Auto'];
NpcMoveToBlock(48, 28, 0, 3);
NpcMoveToBlock(48, 28, 1, 3);
NpcSetDirFrame(2, 0);

['Event_00154_00011_Auto'];
NpcMoveToBlock(48, 26, 0, 3);

['Event_00154_00012_Auto'];
NpcMoveToBlockMutexLock(48, 24, 0, 4);

['Event_00154_00013_Auto'];
NpcMoveToBlockMutexLock(49, 20, 1, 4);

['Scene_00154_Enter'];
HeroSetSprite(0, Sprite.李逍遥, true);
RoleSetDirFrame(3, 0, 0);
PartySetRole(1, 0, 0);
PartySetPos(52, 25, 1);
WaitEventAutoScriptRun(20, false, false);
RoleSetDirFrame(0, 0, 0);
WaitEventAutoScriptRun(4, false, false);
EventSetDirFrame(154, 1, 1, 0);
WaitEventAutoScriptRun(8, false, false);
RoleSetDirFrame(1, 0, 0);
WaitEventAutoScriptRun(4, false, false);
EventSetDirFrame(154, 1, 0, 0);
WaitEventAutoScriptRun(4, false, false);
SetDlgLower(23, 0, false);
//林月如：
//你们．．想做什么！？
EventSetState(2479, 1, 0);
WaitEventAutoScriptRun(4, false, false);
EventSetDirFrame(154, 6, 0, 0);
EventSetDirFrame(154, 7, 0, 0);
EventSetDirFrame(154, 11, 2, 0);
EventSetDirFrame(154, 12, 2, 0);
EventSetDirFrame(154, 13, 0, 0);
WaitEventAutoScriptRun(8, false, false);
EventSetDirFrame(154, 4, 0, 0);
EventSetDirFrame(154, 5, 2, 0);
WaitEventAutoScriptRun(8, false, false);
EventSetDirFrame(154, 1, 1, 0);
WaitEventAutoScriptRun(10, false, false);
Call("@6049", 0, 0);
WaitEventAutoScriptRun(2, false, false);
SetDlgLower(5, 0, false);
//李逍遥：
//你们这是什么意思！
//想倚多取胜、坐收渔利吗？
VideoUpdate(0, false);
SetDlgUpper(43, 0, false);
//天鬼皇：
//不敢～我等再有天大的胆子
//也不敢对打败镇狱明王的人
//干戈相向．．
EventSetAutoScript(154, 3, "@5E33");
WaitEventAutoScriptRun(8, false, false);
SetDlgUpper(43, 0, false);
//天鬼皇：
//请您帮助我们离开这地方吧！
//既然您能打败明王！您一定
//有这本事的
EventSetAutoScript(154, 2, "@5E51");
WaitEventAutoScriptRun(18, false, false);
SetDlgLower(91, 0, false);
//赵灵儿：
//我？　我也不知道该如何
//离开这里．．
VideoUpdate(0, false);
SetDlgUpper(43, 0, false);
//天鬼皇：
//啊．．．难道．．
//我们的希望又破灭了．．
VideoUpdate(0, false);
Call("@6029", 0, 0);
EventSetDirFrame(154, 2, 0, 0);
WaitEventAutoScriptRun(8, false, false);
EventSetDirFrame(154, 2, 1, 0);
WaitEventAutoScriptRun(4, false, false);
SetDlgLower(91, 0, false);
//赵灵儿：
//你们．．你们大家听我说！
EventSetDirFrame(154, 4, 3, 0);
WaitEventAutoScriptRun(0, false, false);
EventSetDirFrame(154, 3, 3, 0);
EventSetDirFrame(154, 5, 3, 0);
EventSetDirFrame(154, 8, 2, 0);
WaitEventAutoScriptRun(0, false, false);
EventSetDirFrame(154, 6, 3, 0);
EventSetDirFrame(154, 11, 3, 0);
WaitEventAutoScriptRun(0, false, false);
EventSetDirFrame(154, 12, 3, 0);
EventSetDirFrame(154, 7, 3, 0);
WaitEventAutoScriptRun(0, false, false);
EventSetDirFrame(154, 9, 2, 0);
EventSetDirFrame(154, 10, 2, 0);
WaitEventAutoScriptRun(0, false, false);
EventSetDirFrame(154, 13, 3, 0);
VideoUpdate(0, false);
SetDlgUpper(43, 0, false);
//天鬼皇：
//难不成要我们去找九十九个人
//类，或是一千只妖怪来吃掉
//才能够出去？
VideoRestore();
//这五百年来我想尽办法
//也只吃到五个人、八十只妖怪
//这样子我要再等多少个五百年
//才能出去啊！
VideoUpdate(0, false);
SetDlgLower(91, 0, false);
//赵灵儿：
//就算真的是如此，到时候
//还是不知道出去的方法啊！
VideoRestore();
//吃九十九人或一千个妖怪
//这种传言恐怕是一项毒计
//用意是要被关入塔中的妖怪
//自相残食而尽
SetDlgUpper(43, 0, false);
//天鬼皇：
//唔．．有道理．．
VideoUpdate(0, false);
SetDlgLower(91, 0, false);
//赵灵儿：
//各位！人类有句话说～
//天下无难事，只怕有心人
VideoRestore();
//虽说这锁妖塔号称五百年来
//禁锢无数妖魔，无一得以逃出
//但是．．这座塔必竟是由人所
//建造出来的．．
//所以我想～不可能没有方法
//大家静下心来，好好的思考
//集众人之智慧，定会想出个
//办法来
VideoUpdate(0, false);
SetDlgUpper(43, 0, false);
//天鬼皇：
//嗯．．．好，就这么办！
EventSetDirFrame(154, 3, 1, 0);
WaitEventAutoScriptRun(7, false, false);
EventSetDirFrame(154, 3, 0, 0);
WaitEventAutoScriptRun(4, false, false);
SetDlgLower(43, 0, false);
//天鬼皇：
//诸位兄弟！我以老大的身份在
//此宣示：从今而后～同伴之间
//绝对不许再发生互残相食的事
//违者我天鬼皇绝不饶过他！
//知道了吗？！
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//众妖答道：
//是～　大哥！
EventSetDirFrame(154, 3, 1, 0);
VideoUpdate(0, false);
SetDlgLower(43, 0, false);
//天鬼皇：
//另外．．在座的～不管是谁
//只要拿得出法子，带大伙出去
//我就把这大哥的位置让给他！
VideoUpdate(0, false);
Call("@6029", 0, 0);
EventSetDirFrame(154, 3, 0, 0);
WaitEventAutoScriptRun(4, false, false);
SetDlgLower(43, 0, false);
//天鬼皇：
//怎么？没有人肯试看看吗？
WaitEventAutoScriptRun(4, false, false);
EventSetState(2490, 2, 0);
WaitEventAutoScriptRun(4, false, false);
EventSetDirFrame(154, 14, 0, 1);
VideoUpdate(0, false);
SetDlgLower(69, 0, false);
//书中仙：
//这等深奥问题，想破了你们的
//鬼头鬼脑，也甭想出个屁来！
EventSetDirFrame(154, 1, 3, 0);
EventSetDirFrame(154, 2, 3, 0);
WaitEventAutoScriptRun(2, false, false);
RoleSetDirFrame(3, 0, 0);
WaitEventAutoScriptRun(2, false, false);
SetDlgLower(69, 0, false);
//书中仙：
//欲穷天地之理、解古今之谜
//来请教我书中仙人～就对啦！
EventSetDirFrame(154, 3, 3, 0);
VideoUpdate(0, false);
Call("@6049", 0, 0);
VideoUpdate(0, false);
SetDlgUpper(43, 0, false);
//天鬼皇：
//老书呆子！你又来搅和什么
SetDlgLower(69, 0, false);
//书中仙：
//耶！鬼流氓头，说话客气点！
//老夫现在可是～仙～人～呢
VideoUpdate(0, false);
SetDlgUpper(43, 0, false);
//天鬼皇：
//不过区区一个下等小妖
//也敢妄自称仙人！
//是不是上回受的教训还不够？
VideoUpdate(0, false);
SetDlgLower(69, 0, false);
//书中仙：
//哈哈～我这书中仙人的封号
//可是圣灵小姐的相公亲口封的
//由不得你不承认！
VideoUpdate(0, false);
SetDlgLower(10, 0, false);
//李逍遥：
//相公？．．．我封的？
EventSetDirFrame(154, 3, 1, 0);
VideoUpdate(0, false);
SetDlgUpper(43, 0, false);
//天鬼皇：
//哼～有靠山就了不起啦！
RoleSetDirFrame(0, 0, 0);
VideoUpdate(0, false);
SetDlgLower(69, 0, false);
//书中仙：
//喂！　你们听不听我说呀？
//逃出这锁妖塔的方法只有一个
//而且．．只有我知道！
RoleSetDirFrame(3, 0, 0);
VideoUpdate(0, false);
SetDlgUpper(3, 0, false);
//李逍遥：
//真的！　前辈请快说
EventSetDirFrame(154, 3, 3, 0);
WaitEventAutoScriptRun(4, false, false);
SetDlgUpper(43, 0, false);
//天鬼皇：
//别信那老书呆的鬼话
//他每次都是提出一些令人
//哭笑不得的法子
SetDlgLower(69, 0, false);
//书中仙：
//嘿嘿～你不得不承认，那些
//都是最直接解决事情的方法
VideoUpdate(0, false);
SetDlgUpper(43, 0, false);
//天鬼皇：
//哼～就像八年前我的一位弟兄
//误入吸妖坛中，你教我让他脱
//困的方法，就是要我用头去撞
VideoRestore();
//结果害我被吸入坛中
//受困了八年之久！
SetDlgLower(69, 0, false);
//书中仙：
//你的那位小兄弟不也就
//因此而得救了吗？
VideoUpdate(0, false);
SetDlgUpper(43, 0, false);
//天鬼皇：
//你分明是在害我！
EventSetDirFrame(154, 2, 0, 0);
VideoUpdate(0, false);
SetDlgLower(91, 0, false);
//赵灵儿：
//二位别争吵了，既然书仙前辈
//有出塔的方法，大家不妨先
//听听他怎么说
EventSetDirFrame(154, 2, 3, 0);
VideoUpdate(0, false);
SetDlgLower(69, 0, false);
//书中仙：
//哈哈～既然圣灵小姐肯给
//面子，老夫就献宝啦！
//听我道来．．．
VideoRestore();
//此塔乃五百八十四年前
//梁武帝遍集天下金刚白玉石
//召数千名一流工匠耗费二十年
//而建成．．
//并请无数高僧、法师，于塔内
//外发下无数的禁咒。历经数百
//年的变迁，此塔乃由蜀山仙剑
//派所接管～
//从学理上来说～此塔只有入口
//没有出口，而且～四面的墙壁
//神兵利器不能损，雷击火焚亦
//不能伤，仙法魔咒更是罔然
//只有从它建筑结构上的弱点
//下手，大家才能出去
VideoUpdate(0, false);
SetDlgUpper(91, 0, false);
//赵灵儿：
//意即．．从内部毁了这座塔？
VideoUpdate(0, false);
SetDlgLower(69, 0, false);
//书中仙：
//没错！　大家看见四周
//这十一支巨大的剑柱了吗？
VideoRestore();
//据我积年累月的观察．．
//此处乃锁妖塔最底层，这些
//精铁所铸的巨剑，便是支撑
//这座塔的支柱
//除了我们所在的这支以外～
//其中七支呈北斗七星磐龙阵方
//位排列，余三支列于神龙摆尾
//之方位，意即锁住龙尾
VideoRestore();
//而旁边这支最大的一把剑
//正好钉死住龙头，就成了飞龙
//困于陆，上绝天、下绝地之势
VideoUpdate(0, false);
SetDlgUpper(43, 0, false);
//天鬼皇：
//哦～那好办
//就把这些剑柱全部打断！
VideoUpdate(0, false);
SetDlgLower(69, 0, false);
//书中仙：
//听我说完～鬼流氓头！
//用点大脑行不行？柱子是
//从底下支撑的，砍断上面
//的部份有啥用？
SetDlgUpper(43, 0, false);
//天鬼皇：
//你．．！
VideoUpdate(0, false);
SetDlgLower(69, 0, false);
//书中仙：
//此处的化妖水池之下
//必定有这些剑柱的支撑点
VideoRestore();
//只要有人潜下去，找到这
//些地点加以破坏，这座塔
//想不垮也难
VideoUpdate(0, false);
SetDlgUpper(43, 0, false);
//天鬼皇：
//开什么玩笑！让谁去？
//这种化妖水我们稍为沾到一滴
//就受不了。整个人潜下去不就
//全身给化得精光！
VideoUpdate(0, false);
SetDlgLower(69, 0, false);
//书中仙：
//没错～当初设计此塔者，在塔
//底注入化妖水，就是为了防止
//妖怪从塔底土遁，另一方面也
//是保护这些剑柱不被腐蚀
//嘿嘿～　可是．．当初他们
//绝对没想到，会有人类能走
//到这最底层来
SetDlgUpper(2, 0, false);
//李逍遥：
//您是说．．由我去？
VideoUpdate(0, false);
SetDlgLower(69, 0, false);
//书中仙：
//化妖水对妖怪是致命的
//．．对人类却是无害
VideoUpdate(0, false);
EventSetDirFrame(154, 1, 2, 0);
VideoUpdate(0, false);
RoleSetDirFrame(0, 0, 0);
VideoUpdate(0, false);
SetDlgLower(21, 0, false);
//林月如：
//好～　李大哥，我们去！
VideoUpdate(0, false);
SetDlgLower(69, 0, false);
//书中仙：
//化妖池水表面浮著一层十分
//黏稠的油脂，以二位的体重
//来说，恐怕是很难潜下去
VideoRestore();
//但是此处池水是缓慢在流动的
//若在出水口附近，流动较剧烈
//之处，油脂层较薄，应该可以
//潜下去的
EventSetDirFrame(154, 1, 3, 0);
VideoUpdate(0, false);
SetDlgLower(21, 0, false);
//林月如：
//在何处？在这附近吗？
VideoUpdate(0, false);
SetDlgLower(69, 0, false);
//书中仙：
//出水口的位置经常改变
//我也不知道在哪里
//自己去找吧！
VideoRestore();
//呼．．我的话说完了
//剩下的就交给你们
//我要回书中休息啦！
VideoUpdate(0, false);
EventSetState(2490, 0, 0);
WaitEventAutoScriptRun(6, false, false);
RoleSetDirFrame(0, 0, 0);
EventSetDirFrame(154, 1, 2, 0);
VideoUpdate(0, false);
SetDlgLower(3, 0, false);
//李逍遥：
//就这么办！
EventSetDirFrame(154, 2, 0, 0);
RoleSetDirFrame(1, 0, 0);
VideoUpdate(0, false);
EventSetDirFrame(154, 1, 1, 0);
VideoUpdate(0, false);
SetDlgLower(9, 0, false);
//李逍遥：
//天鬼兄，这件事就交给我
//请你通知塔内所有的人
//事成之后大家到这里来会合
//要出去就大家一起出去！
SetDlgUpper(43, 0, false);
//天鬼皇：
//好～咱们分头行事
EventSetDirFrame(154, 3, 0, 0);
VideoUpdate(0, false);
SetDlgUpper(43, 0, false);
//天鬼皇：
//大家听着！回去把你们的
//老婆孩子都集合起来，想带
//走的家当也全都打点好
//听我召唤，就回到这里集合
VideoUpdate(0, false);
EventSetAutoScript(154, 5, "@6059");
EventSetAutoScript(154, 6, "@605D");
WaitEventAutoScriptRun(0, false, false);
EventSetAutoScript(154, 4, "@6054");
EventSetAutoScript(154, 7, "@6060");
WaitEventAutoScriptRun(0, false, false);
EventSetAutoScript(154, 8, "@6063");
EventSetAutoScript(154, 9, "@6063");
WaitEventAutoScriptRun(0, false, false);
EventSetAutoScript(154, 10, "@6063");
EventSetAutoScript(154, 11, "@6067");
EventSetAutoScript(154, 12, "@606A");
WaitEventAutoScriptRun(0, false, false);
EventSetAutoScript(154, 13, "@606D");
WaitEventAutoScriptRun(26, false, false);
EventSetDirFrame(154, 3, 3, 0);
WaitEventAutoScriptRun(8, false, false);
EventSetState(2479, 0, 0);
SetDlgUpper(43, 0, false);
//天鬼皇：
//祝一切顺利～　回头见！
WaitEventAutoScriptRun(6, false, false);
EventSetDirFrame(154, 1, 2, 0);
WaitEventAutoScriptRun(2, false, false);
RoleSetDirFrame(0, 0, 0);
WaitEventAutoScriptRun(2, false, false);
SetDlgLower(9, 0, false);
//李逍遥：
//我们也出发吧！
EventSetDirFrame(154, 2, 1, 0);
VideoUpdate(0, false);
SetDlgLower(91, 0, false);
//赵灵儿：
//．．．．我也去。
RoleSetDirFrame(0, 0, 0);
EventSetDirFrame(154, 1, 2, 0);
VideoUpdate(0, false);
SetDlgUpper(24, 0, false);
//林月如：
//你．．．
EventSetDirFrame(154, 2, 0, 0);
VideoUpdate(0, false);
SetDlgLower(91, 0, false);
//赵灵儿：
//我．．也算是半个人类．．
VideoRestore();
//何况～我的力量和你们不同
//对化妖池水我可以忍受
//因此明王怕我逃脱，才把我
//锁在剑柱上．．
VideoUpdate(0, false);
SetDlgUpper(3, 0, false);
//李逍遥：
//那太好了，我们三个人又
//可以一起行动了)
SceneEnter(153);
ReplaceAndPause();

