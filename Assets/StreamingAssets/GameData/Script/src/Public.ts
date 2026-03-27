['@005E'];
EventWalkOneStep(2, 9, 4, 2);
VideoUpdate(0, false);
EventWalkOneStep(2, 9, 4, 2);
VideoUpdate(0, false);
EventWalkOneStep(2, 9, 4, 2);
VideoUpdate(0, false);
EventWalkOneStep(2, 9, 4, 2);
VideoUpdate(0, false);
EventSetTriggerMode(-1, -1, true, 0);
ReplaceAndPause();
EventSetTriggerMode(-1, -1, false, 2);
EventSetPos(2, 9, 1376, 288);
FadeOut(0);
PartySetPos(20, 36, 1);
HeroSetSprite(0, Sprite.躺李逍遥, true);
RoleSetDirFrame(0, 1, 0);
PlaySound(45);
VideoUpdate(0, false);
RoleMoveOneStep(0, 5, 0);
RoleSetDirFrame(0, 1, 0);
VideoUpdate(0, false);
RoleMoveOneStep(0, 7, 0);
RoleSetDirFrame(0, 1, 0);
VideoUpdate(0, false);
RoleMoveOneStep(0, 9, 0);
RoleSetDirFrame(0, 1, 0);
VideoUpdate(0, false);
RoleMoveOneStep(0, 11, 0);
RoleSetDirFrame(0, 1, 0);
VideoUpdate(0, false);
RoleSetDirFrame(0, 2, 0);
VideoUpdate(0, false);
PlaySound(93);
WaitEventAutoScriptRun(5, false, false);
HeroSetSprite(0, Sprite.李逍遥, true);
RoleSetDirFrame(0, 0, 0);
VideoUpdate(0, false);
ReplaceAndPauseWithNop("@005E", 0);

['@00B9'];
SetDlgCenter(0, false);
//"双手端着物品无法爬下去"

['@00BC'];
SetDlgCenter(0, false);
//"双手端着物品无法爬上去"

['@00BF'];
EventWalkOneStep(2, 9, 4, 2);
VideoUpdate(0, false);
GotoWithNop("@00BF", 4);
SetDlgLower(11, 0, false);
//赵灵儿：
//哦．．这通道是．．？
VideoUpdate(0, false);
SetDlgLower(9, 0, false);
//李逍遥：
//哈～那些苗人怎么也不会料到
//我在这里做了一个密道，结果
//就刚好救了你呢．．
['@00CB'];
EventWalkOneStep(2, 9, -4, -2);
VideoUpdate(0, false);
GotoWithNop("@00CB", 4);

['@00CF'];
SetDlgLower(6, 0, false);
//李逍遥：
//灵儿．．你要不要爬爬看？
SetDlgUpper(17, 0, false);
//赵灵儿：
//你好坏～叫女孩子爬这种东西
//很难看呢！人家才不要．．

['@0163'];
EventSetTriggerMode(-1, -1, false, 2);
VideoUpdate(0, false);
SetDlgUpper(55, 0, false);
//李大娘：
//逍遥你来的正好，快把门口
//那个臭要饭的赶走，免得妨
//碍咱们做生意
EventSetAutoScript(4, 13, "@0182");
EventSetTriggerScript(4, 19, "@025C");
WaitEventAutoScriptRun(6, false, false);
RoleSetDirFrame(1, 0, 0);
WaitEventAutoScriptRun(4, false, false);
RoleSetDirFrame(0, 0, 0);
WaitEventAutoScriptRun(2, false, false);
ReplaceAndPause();
//记得喔！
//等一下到厨房来帮忙端菜

['@0175'];
EventSetTriggerMode(-1, -1, false, 0);
NpcMoveToBlock(38, 83, 0, 3);
NpcMoveToBlock(36, 85, 0, 3);
NpcMoveToBlock(36, 85, 1, 3);
['@0179'];
EventWalkOneStep(-1, -1, 5, 5);
EventWalkOneStep(-1, -1, 3, 3);
ReplaceAndPauseWithNop("@0179", 12);
EventSetTriggerMode(-1, -1, false, 2);
NpcMoveToBlock(42, 94, 1, 3);
NpcMoveToBlock(35, 101, 1, 3);
EventSetTriggerMode(-1, -1, true, 2);
EventSetTriggerScript(-1, -1, "@0163");

['@0182'];
NpcMoveToBlock(31, 97, 1, 3);
NpcMoveToBlock(34, 95, 0, 3);
NpcMoveToBlock(31, 92, 1, 3);
EventSetState(20, 2, 0);
EventSetState(-1, 0, 0);

['@0196'];
NpcMoveToBlockMutexLock(39, 85, 0, 2);
NpcMoveToBlockMutexLock(41, 83, 0, 2);
EventSetState(25, 2, 0);
EventSetState(-1, 0, 0);

['@019B'];
WaitEventAutoScriptRun(2, false, false);
NpcMoveToBlockMutexLock(37, 82, 0, 2);
NpcMoveToBlockMutexLock(44, 89, 1, 2);
NpcSetDirFrame(2, 0);
Call("Event_00004_00030_Trigger", 0, 0);
NpcMoveToBlockMutexLock(45, 88, 1, 2);
EventSetState(26, 2, 0);
EventSetState(-1, 0, 0);

['@01A4'];
WaitEventAutoScriptRun(4, false, false);
NpcMoveToBlockMutexLock(37, 82, 1, 2);
NpcMoveToBlockMutexLock(44, 89, 0, 2);
WaitEventAutoScriptRun(2, false, false);
NpcSetDirFrame(2, 0);
WaitEventAutoScriptRun(4, false, false);
NpcMoveToBlockMutexLock(45, 88, 0, 2);
EventSetState(27, 2, 0);
EventSetState(-1, 0, 0);

['@01B9'];
SetDlgUpper(59, 0, false);
//苗人头领：
//送酒菜来啊？我还不饿，你先
//拿到隔壁给我的手下们吃
ReplaceAndPause();
SetDlgUpper(0, 0, false);
//苗人头领：
//本大爷说不饿
//没听到是不是？端走！
ReplaceAndPause();
['@01C3'];
SetDlgUpper(0, 0, false);
//苗人头领：
//你去忙吧．．
//有事我再叫你

['@01C8'];
//苗人喽啰：
//嗯．．这烧鸡味道不错
ReplaceAndPause();
//小菜也很可口．．
ReplaceAndPause();
//好饱！好饱！

['@01CF'];
//苗人喽啰：
//从苗疆一路赶到这儿来
//总算可以好好吃个一顿
ReplaceAndPause();
//吃饱喝足了，明天好干大事！

['@021D'];
EventAnimate(Direction.Northwest);
ReplaceAndPauseWithNop("@021D", 8);

['@0220'];
//苗人喽啰：
//汉人的草药也不是什么病都能
//医的。还是咱们苗人的巫术比
//较厉害，咱们苗疆有个拜月教
//听说他们有使死人复活的法术

['@0226'];
//苗人喽啰：
//听说老板娘病了是吗？
ReplaceAndPause();
//这下可不妙了．．方圆十里内
//也只有这间客栈，咱们的晚上
//去哪儿吃喝？

['@0230'];
//李大娘：
//逍遥！快把桌上的酒菜
//端上楼去！
EventSetTriggerScript(2, 21, "@0247");

['@0235'];
//李大娘：
//别愣在这里，帮帮忙吧
//我都快忙不过来了！

['@0247'];
EventSetDirFrame(2, 20, 0, 0);
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//李大娘：
//对了！就是那盘
//赶快端去给楼上的客官
HeroSetSprite(0, Sprite.端盘子李逍遥, true);
EventSetState(21, 0, 0);
EventSetTriggerScript(2, 20, "@0235");
EventSetTriggerScript(2, 25, "@01B9");
EventSetTriggerScript(4, 19, "@027E");
EventSetState(16, 1, 0);
EventSetTriggerScript(2, 10, "@00B9");
EventSetTriggerScript(2, 8, "@00BC");

['@025C'];
SetDlgLower(1, 0, false);
//李逍遥：
//去去去！
//我们也很穷，没钱分给你
VideoUpdate(0, false);
SetDlgUpper(37, 0, false);
//醉道士：
//我不是要钱，我只想讨些酒喝
//小兄弟～拜托一下嘛．．
//给我一点酒吧
SetDlgLower(7, 0, false);
//李逍遥：
//不成！不成！给婶婶知道了
//我准挨骂，你赶快走吧！
VideoUpdate(0, false);
EventSetTriggerScript(2, 20, "@0230");
EventSetState(21, 1, 0);
SetDlgUpper(37, 0, false);
//醉道士：
//哎呀！没酒喝我一步也走不动
//你就行行好吧．．
ReplaceAndPause();
SetDlgUpper(37, 0, false);
//醉道士：
//拜托嘛～小兄弟．．
//我只要喝一小口酒就行了
ReplaceAndPause();
SetDlgUpper(37, 0, false);
//醉道士：
//酒．．求求你．．一口就好
SetDlgLower(8, 0, false);
//李逍遥：
//没见过这么赖皮的酒鬼

['@027E'];
SetDlgUpper(37, 0, false);
//醉道士：
//酒．．求求你．．给我酒．．
SetDlgLower(1, 0, false);
//李逍遥：
//不行不行～这是给客人喝的

['@0285'];
SetDlgUpper(37, 0, false);
//醉道士：
//酒．．求求．．你．．
//一口．．喝一口．．就好

['@028A'];
VideoUpdate(0, false);
SetDlgUpper(37, 0, false);
//醉道士：
//酒··求求．．你．．
//一口．．喝一口．．就好
SetDlgLower(1, 0, false);
//李逍遥：
//看你可怜，就给你喝一口吧
//喂～只能喝一口喔！
VideoUpdate(0, false);
NpcSetFrame(2);
FadeToScene(0, -1);
EventSetAutoScript(-1, -1, "");
SetDlgUpper(37, 0, false);
//醉道士：
//啊．．．．好酒！
VideoUpdate(0, false);
SetDlgLower(10, 0, false);
//李逍遥：
//哎呀．．你怎么喝光了！
VideoUpdate(0, false);
SetDlgUpper(37, 0, false);
//醉道士：
//嗝～我一口就是那么大口
//真是不好意思．．
SetDlgLower(5, 0, false);
//李逍遥：
//你．．．你要赔我！
VideoUpdate(0, false);
SetDlgUpper(37, 0, false);
//醉道士：
//呵呵．．要钱我可没有
//你不是很想学剑吗？
SetDlgLower(10, 0, false);
//李逍遥：
//你怎么知道？
VideoUpdate(0, false);
SetDlgUpper(37, 0, false);
//醉道士：
//看在酒的份上
//贫道可以破例指点你几招
VideoUpdate(0, false);
SetDlgLower(2, 0, false);
//李逍遥：
//．．你．．你要教我剑法？？
RoleSetDirFrame(1, 0, 0);
WaitEventAutoScriptRun(8, false, false);
RoleSetDirFrame(0, 0, 0);
VideoUpdate(0, false);
SetDlgLower(9, 0, false);
//李逍遥：
//老伯．．您别逗我了
//您还是快走吧，要是给我婶婶
//知道我拿酒给你喝，准骂人的
WaitEventAutoScriptRun(0, false, false);
RoleSetDirFrame(1, 0, 0);
WaitEventAutoScriptRun(4, false, false);
SetDlgUpper(37, 0, false);
//醉道士：
//哈哈哈！那就明晚三更
//十里坡"山神庙"。不见不散！
EventSetState(-1, 0, 0);
FadeToScene(0, -1);
SetDlgCenter(0, false);
//"醉道士话说完一溜烟地
//就不见了．．"
RoleSetDirFrame(0, 0, 0);
VideoUpdate(0, false);
SetDlgLower(2, 0, false);
//咦～人呢？
RemoveItem(212, 0, "");
EventSetState(17, 0, 0);
EventSetTriggerScript(2, 20, "@02E5");
VideoUpdate(0, false);
SetDlgUpper(55, 0, false);
//李大娘：
//逍遥～你过来一下！
RoleSetDirFrame(1, 0, 0);
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//李逍遥：
//　啊．．(
ReplaceAndPause();

['@02E5'];
SetDlgUpper(0, 0, false);
//李大娘：
//你要是有空的话，就到菜市场
//帮我买几斤新鲜的虾回来，要
//是在市场买不到，就向打渔的
//船家们问看看
SetDlgBox(0);
//得到五十文钱
CashModify(50, "");
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//李逍遥低声道：
//呼．．．还好
VideoUpdate(0, false);
SetDlgUpper(55, 0, false);
//李大娘：
//你在嘀咕什么？
VideoUpdate(0, false);
SetDlgLower(10, 0, false);
//李逍遥：
//没事！我马上就去
VideoUpdate(0, false);
Replace();
SetDlgUpper(0, 0, false);
//李大娘：
//记得哦！要新鲜的才买
ReplaceAndPauseWithNop("@0235", 0);

['@032C'];
//来福婶：
//我看呐～
//李大娘准是累出病来的！
ReplaceAndPause();
//来福婶：
//唉～　为谁辛苦为谁忙
//劳碌命喔．．

['@0348'];
NpcSetFrame(0);
['@0349'];
EventAnimate(Direction.Current);
ReplaceAndPauseWithNop("@0349", 7);

['@0376'];
NpcMoveToBlock(54, 86, 0, 3);

['@0378'];
ReplaceAndPause();
NpcSetDirFrame(3, 0);
NpcMoveToBlockMutexLock(48, 92, 0, 2);
NpcSetDirFrame(3, 0);
NpcSetDirFrame(2, 0);
WaitEventAutoScriptRun(30, false, false);
NpcSetDirFrame(0, 0);
WaitEventAutoScriptRun(4, false, false);
NpcMoveToBlockMutexLock(56, 100, 1, 2);
NpcMoveToBlockMutexLock(54, 103, 0, 2);
WaitEventAutoScriptRun(20, false, false);
NpcMoveToBlock(54, 103, 1, 3);
NpcMoveToBlock(48, 109, 1, 3);
ReplaceAndPauseWithNop("Event_00023_00016_Auto", 0);

['@0387'];
EventSetPosRelToParty(5, 8, -128, 56);
EventSetDirFrame(5, 8, 2, 0);
EventSetAutoScript(5, 8, "@0376");
EventSetTriggerMode(5, 8, false, 3);
WaitEventAutoScriptRun(12, false, false);
SetDlgUpper(52, 0, false);
//香兰：
//不好了！不好了！
//李家哥哥．．李．．
//李大娘．．她．．
VideoUpdate(0, false);
SetDlgLower(2, 0, false);
//李逍遥：
//我婶婶怎么了？
VideoUpdate(0, false);
MusicStop(1);
SetDlgUpper(52, 0, false);
//香兰：
//你出门没多久．．
//李大娘就突然昏倒了！
//洪大夫请你赶快回去一趟
SetDlgLower(2, 0, false);
//李逍遥：
//婶婶怎么会．．
//好．．我马上回去！
MusicPlay(Music.孤雀无栖, true, false);
EventSetAutoScript(5, 8, "@0378");
EventSetTriggerScript(5, 8, "@03BB");
EventSetTriggerScript(5, 9, "@03B0");
EventSetTriggerScript(5, 11, "@032C");
EventSetState(77, 0, 0);
EventSetState(37, 2, 0);
EventSetState(192, 0, 0);
EventSetState(36, 2, 0);
EventSetState(35, 1, 0);
EventSetState(20, 0, 0);
EventSetState(25, 0, 0);
EventSetTriggerScript(2, 26, "@0220");
EventSetTriggerScript(2, 27, "@0226");
ReplaceAndPause();

['@03B0'];
SetDlgUpper(33, 0, false);
//秀兰：
//听大姊说～李大娘病了
//是真的吗？
//有没有我可以帮得上忙的？
VideoRestore();
//唉呀．．怎么会这样子呢
ReplaceAndPause();
//秀兰：
//李大娘的病严不严重啊？

['@03BB'];
SetDlgUpper(52, 0, false);
//香兰：
//李家哥哥！赶快回去吧
//李大娘的病似乎很严重呢

['@03C0'];
SetDlgUpper(52, 0, false);
//香兰：
//怎么了，李大娘好点了没？

['@042E'];
EventSetPos(6, 9, 1152, 1376);
EventSetTriggerScript(6, 9, "@05B9");
EventSetDirFrame(6, 9, 3, 0);
EventSetTriggerScript(6, 10, "@0615");
AddItem(219, 0);
EventSetTriggerScript(2, 25, "@048B");
EventSetAutoScript(4, 16, "@0490");
EventSetTriggerMode(4, 16, false, 2);
SetDlgUpper(59, 0, false);
//苗人头领：
//呵呵～你们汉人的书上有句话
//　"树欲静而风不止"
//　　"子欲养而亲不待"．．
//可真是至理名言哪～
VideoUpdate(0, false);
SetDlgLower(5, 0, false);
//李逍遥：
//我．．我绝不会让我婶婶死掉
//就算拼了命也要想办法医好她
VideoUpdate(0, false);
SetDlgUpper(59, 0, false);
//苗人头领：
//哈哈！难得你有这份孝心
//大慈大悲的菩萨一定也会
//被你感动的．．
VideoUpdate(0, false);
SetDlgLower(10, 0, false);
//李逍遥：
//菩萨．．？
VideoUpdate(0, false);
SetDlgUpper(59, 0, false);
//苗人头领：
//你不是想上仙灵岛求仙药吗？
//但．．没有仙缘的人，是无
//法通过岛上的仙法禁制的
VideoUpdate(0, false);
SetDlgLower(3, 0, false);
//李逍遥：
//是！是！恳请大爷指点
VideoUpdate(0, false);
SetDlgUpper(59, 0, false);
//苗人头领：
//仙灵岛中央有座"水月宫"，此处
//有一班精于炼制丹药的仙姑居
//于宫内，但是宫外有仙法所设
//下的迷阵，凡人若无邪法妖术
//并不会被其中的机关所伤，但
//是若无法破去阵眼，任你花上
//一辈子也找不到水月宫所在
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//那我该如何是好？
SetDlgUpper(59, 0, false);
//苗人头领：
//阵中有六具阿修罗神像，你用
//这"破天锤"将这些石像逐一敲
//碎，在迷阵的中央便会出现一
//块"发亮的石板"
//届时你只要往石板上一踏
//通路自会浮现
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//  你··怎么知道的？
VideoUpdate(0, false);
SetDlgUpper(59, 0, false);
//苗人头领：
//我是看你一片孝心，才泄漏
//这天机，你切勿自失良机
VideoUpdate(0, false);
SetDlgUpper(59, 0, false);
//苗人头领：
//对了．．　我这里有一颗丹丸
//服下它，可以保你不受仙灵岛
//上的瘴气所侵．．
SetDlgLower(1, 0, false);
//李逍遥：
//　　瘴气？
VideoUpdate(0, false);
SetDlgUpper(59, 0, false);
//苗人头领：
//照我的话做就对了
//难道你不想救你婶婶吗？
VideoUpdate(0, false);
SetDlgLower(9, 0, false);
//李逍遥：
//好！　我相信你
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//"李逍遥收下破天锤，并服下"
//"苗人给的丹丸（忘忧散）"
ReplaceAndPause();
['@048B'];
//苗人头领：
//加油吧．．我等你的好消息

['@048E'];
NpcMoveToBlockMutexLock(32, 104, 1, 2);

['@0490'];
NpcMoveToBlockMutexLock(42, 94, 1, 2);
NpcMoveToBlockMutexLock(39, 91, 0, 2);
['@0492'];
EventWalkOneStep(-1, -1, -5, -5);
ReplaceAndPause();
EventWalkOneStep(-1, -1, -3, -3);
ReplaceAndPauseWithNop("@0492", 12);
NpcMoveToBlockMutexLock(37, 83, 1, 2);
GotoWithNop("@0196", 0);

['@04B4'];
EventSetDirFrame(5, 7, 0, 4);
VideoUpdate(0, false);
EventSetAutoScript(5, 7, "@8D77");
//丁大伯：
//你别老是来勾引我那两个丫头
//我可是只有这两个女儿！
SetDlgLower(0, 0, false);
//李逍遥：
//我没有哇！
//丁伯伯．．你可别老来糊涂了
//是你那两个宝贝女儿常常来巴
//结我和我婶婶．
ReplaceAndPause();
EventSetDirFrame(5, 7, 0, 4);
VideoUpdate(0, false);
EventSetAutoScript(5, 7, "@8D77");
//丁大伯：
//唉～我也懒得说你们了．．

['@04D5'];
EventSetTriggerMode(-1, -1, false, 3);
SetDlgUpper(52, 0, false);
//香兰：
//李家哥哥，我．．
//我在家里熬了一锅腊八粥
//你和李大娘要是有空，晚饭后
//就过来一趟吧，尝尝我的手艺
SetDlgLower(3, 0, false);
//李逍遥：
//好呀．．当然．．
//香兰姐煮的点心是出了名的，
//我婶婶说啊．．上回吃了你请
//的红豆汤，嘴巴直甜到现在呢
EventSetTriggerScript(5, 9, "@0505");
ReplaceAndPause();
['@04E4'];
SetDlgUpper(52, 0, false);
//香兰：
//嘻．．一定要来喔！

['@04E8'];
SetDlgUpper(52, 0, false);
//香兰：
//咦？
//家里的麻布袋怎么少了一个
//该不是被猫儿叼走了吧！
ReplaceAndPauseWithNop("@04E4", 0);

['@0505'];
SetDlgUpper(33, 0, false);
//秀兰：
//这么急着要哪．．
//嘻嘻！你看．．这件是我亲手
//缝制的布靴，你穿看看合不合
//你的脚？
SetDlgLower(3, 0, false);
//李逍遥：
//哦！谢谢你
AddItem(177, 0);
EventSetTriggerScript(5, 7, "@04B4");
ReplaceAndPause();
SetDlgUpper(33, 0, false);
//秀兰：
//你不可以跟我爹爹和我姊姊说
//我替你缝制布靴的事喔．．
EventSetTriggerScript(5, 8, "@04E8");

['@059C'];
VideoUpdate(0, false);
EventSetTriggerMode(-1, -1, false, 3);
SetDlgUpper(39, 0, false);
//张四：
//少听他们吹牛，我也到过那
//仙灵岛，哪有什么仙女？
VideoRestore();
//只有一个又老又丑的凶肥婆
//看到我二话不说，就把我赶
//了出来！
SetDlgLower(1, 0, false);
//李逍遥：
//你们该不是见鬼了吧？
//那荒岛上怎么会有人．．
SceneSetScript(5, "@0387", "");
ReplaceAndPause();
SetDlgUpper(39, 0, false);
//张四：
//逍遥老弟，店里没事吗？
//你不回去帮忙，还在这闲逛
//要是给李大娘知道了，你一
//定挨骂的
ReplaceAndPause();
SetDlgUpper(39, 0, false);
//张四：
//老天保佑．．保佑我今天出海
//能打到鱼，再这么下去，一家
//老小都要喝西北风了．．

['@05B9'];
EventSetTriggerMode(6, 2, true, 2);
EventSetTriggerScript(6, 2, "@05E5");
SetDlgUpper(39, 0, false);
//张四：
//你想出海？这可不是闹着玩的
//我是到过仙灵岛没错，但是现
//在的天色也不早了，到了晚上
//风浪还会更大的．．
SetDlgLower(10, 0, false);
//李逍遥：
//张四哥～请你无论如何要帮我
//这个忙，要救我婶婶的命只有
//这个法子了
VideoUpdate(0, false);
SetDlgUpper(39, 0, false);
//张四：
//这．．．．．好吧！我试试看
//李大娘平日待人还不错，我想
//老天应该也会可怜好人吧
EventAnimate(Direction.Southeast);
VideoUpdate(0, false);
EventAnimate(Direction.Southeast);
VideoUpdate(0, false);
EventAnimate(Direction.Southeast);
VideoUpdate(0, false);
EventAnimate(Direction.Southeast);
VideoUpdate(0, false);
EventAnimate(Direction.Southwest);
VideoUpdate(0, false);
EventAnimate(Direction.Southwest);
VideoUpdate(0, false);
EventAnimate(Direction.Southwest);
VideoUpdate(0, false);
EventAnimate(Direction.Southwest);
VideoUpdate(0, false);
EventSetState(-1, 0, 0);
EventSetState(118, 2, 0);
EventSetAutoScript(6, 3, "");
VideoUpdate(0, false);
SetDlgUpper(39, 0, false);
//张四：
//走吧～上船！
ReplaceAndPause();

['@05E5'];
PartyWalkToBlock(38, 86, 0, 2);
VideoUpdate(0, false);
RoleSetDirFrame(0, 0, 1);
VideoUpdate(0, false);
RoleSetDirFrame(0, 0, 0);
VideoUpdate(0, false);
EventSetAutoScript(6, 3, "@8D33");
RideNpcToPos(47, 77, 0, 2);
FadeOut(0);
RoleSetDirFrame(0, 0, 0);
PartySetPos(23, 50, 1);
SceneEnter(15);

['@05F2'];
//张四：
//希望这求来的丹药真的灵验
ReplaceAndPause();
//张四：
//希望明天是个好天气

['@0615'];
SetDlgLower(10, 0, false);
//李逍遥：
//水生叔！救人如救火！劳您驾
//带我上仙灵岛吧！
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//水生叔：
//啥！风浪这么大，你不要命了
//是不是？昨儿个为了贪看仙女
//船险些翻了，我可不敢再去！
ReplaceAndPause();
SetDlgLower(10, 0, false);
//李逍遥：
//水生叔～求求您．．
//您是这一带经验最老到的渔夫
//您不行，那还有谁能行呢？
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
Replace();
//水生叔：
//不行就是不行！你找别人吧！

['@0675'];
SetDlgCenter(0, false);
//李大娘仍昏睡着．．

['@0678'];
EventSetStateSequence(5, 26, 27, 2);
EventSetTriggerScript(5, 26, "Event_00005_00030_Trigger");
EventSetTriggerScript(5, 27, "Event_00005_00030_Trigger");
EventSetStateSequence(5, 28, 29, 2);
EventSetTriggerScript(5, 28, "Event_00005_00030_Trigger");
EventSetTriggerScript(5, 29, "Event_00005_00030_Trigger");
EventSetState(26, 0, 0);
EventSetState(27, 0, 0);
EventSetState(61, 2, 0);
EventSetState(62, 2, 0);
EventSetState(60, 2, 0);
EventSetTriggerScript(4, 16, "@072E");
EventSetTriggerMode(4, 16, true, 3);
EventSetAutoScript(4, 16, "");
EventSetAutoScript(4, 17, "");
EventSetAutoScript(4, 18, "");
EventSetTriggerMode(4, 17, false, 0);
EventSetTriggerMode(4, 18, false, 0);
EventSetPos(4, 16, 1032, 1672);
EventSetPos(4, 17, 1008, 1656);
EventSetPos(4, 18, 1056, 1680);
EventSetState(113, 0, 0);
EventSetState(200, 2, 0);
EventSetTriggerScript(14, 3, "@0F0E");
EventSetState(194, 0, 0);
EventSetState(176, 1, 0);
EventSetState(177, 2, 0);
EventSetState(178, 2, 0);
EventSetStateSequence(5, 2, 18, 0);
EventSetState(0, 0, 0);
EventSetTriggerScript(5, 20, "@0DBD");
EventSetState(0, 0, 0);
EventSetState(35, 1, 0);
VideoUpdate(0, false);
SetDlgCenter(0, false);
//"李大娘服下紫金丹．．"
RemoveItem(213, 0, "");
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//李逍遥：
//怎．．怎么头昏昏的？
VideoUpdate(0, false);
MusicStop(0);
RoleSetDirFrame(3, 0, 0);
WaitEventAutoScriptRun(6, false, false);
RoleMoveOneStep(-4, -2, 0);
WaitEventAutoScriptRun(2, false, false);
RoleMoveOneStep(-8, -4, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(-8, -4, 0);
WaitEventAutoScriptRun(2, false, false);
RoleMoveOneStep(-8, -4, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(-8, -4, 0);
WaitEventAutoScriptRun(3, false, false);
RoleMoveOneStep(-12, -6, 0);
VideoUpdate(0, false);
RoleSetDirFrame(0, 0, 0);
VideoUpdate(0, false);
RoleSetDirFrame(1, 0, 0);
VideoUpdate(0, false);
RoleSetDirFrame(2, 0, 0);
VideoUpdate(0, false);
RoleSetDirFrame(3, 0, 0);
WaitEventAutoScriptRun(4, false, false);
RoleMoveOneStep(-32, 0, 0);
HeroSetSprite(0, Sprite.躺李逍遥, true);
RoleSetDirFrame(0, 0, 0);
VideoUpdate(0, false);
PlaySound(93);
SetDlgCenter(0, false);
//"李逍遥先前服下的忘忧散"
//"发作，昏倒在地．．"
FadeOut(0);
EventSetState(-1, 0, 0);
EventSetState(40, 1, 0);
EventSetState(115, 1, 0);
EventSetState(76, 1, 0);
MusicPlay(Music.神木林_变奏, false, false);
SetPaletteTime(0);
VideoUpdate(0, true);
SetDlgCenter(0, false);
//"夜晚．．"
VideoUpdate(0, false);
SetDlgLower(55, 0, false);
//李大娘：
//逍遥！你不在自己房里睡
//躺在这儿干嘛？
VideoUpdate(0, false);
SetDlgUpper(10, 0, false);
//李逍遥：
//唔．．．　我怎么会在这！？
HeroSetSprite(0, Sprite.李逍遥, true);
RoleSetDirFrame(3, 0, 0);
VideoUpdate(0, false);
SetDlgUpper(3, 0, false);
//李逍遥：
//对了！婶婶．．
//我有很重要的事要跟您说
SetDlgLower(55, 0, false);
//什么事？！
VideoUpdate(0, false);
SetDlgUpper(10, 0, false);
//李逍遥：
//是．．是．．
//咦？怎么突然想不起来了
//我明明．．明明．．．
VideoUpdate(0, false);
//"李逍遥从昨天出发到仙灵岛"
//"至拿药回来的记忆全失去了"
VideoUpdate(0, false);
SetDlgLower(55, 0, false);
//李大娘：
//我看你又是在作梦！
//回房间睡觉去！
FadeOut(0);
EventSetState(49, 1, 0);
EventSetState(71, 2, 0);
EventSetState(72, 2, 0);
EventSetDirFrame(4, 27, 0, 0);
EventSetDirFrame(4, 28, 0, 0);
EventSetState(40, 0, 0);
HeroSetSprite(0, Sprite.躺李逍遥, true);
SceneSetScript(2, "@06F6", "");
SceneEnter(2);

['@06F6'];
PartySetPos(41, 15, 1);
RoleSetDirFrame(0, 11, 0);
WaitEventAutoScriptRun(15, false, false);
SetDlgLower(8, 0, false);
//奇怪．．好像有件很重要的事
//就是想不起来．．？
WaitEventAutoScriptRun(10, false, false);
RoleSetDirFrame(0, 10, 0);
VideoUpdate(0, false);
SetDlgLower(3, 0, false);
//哎呀．．差点给忘了！
//那位讨酒喝的老道士说～
//山神庙．．要教我剑法．．
PartySetPos(41, 16, 0);
RoleSetDirFrame(0, 1, 0);
VideoUpdate(0, false);
PartySetPos(41, 17, 0);
VideoUpdate(0, false);
RoleSetDirFrame(0, 2, 0);
VideoUpdate(0, false);
HeroSetSprite(0, Sprite.李逍遥, true);
RoleSetDirFrame(0, 0, 0);
VideoUpdate(0, false);
SetDlgLower(9, 0, false);
//反正睡不着，何不去会他一会
//？说不定我真的是遇到高人了
ReplaceAndPause();

['@0725'];
//鱼嫂：
//你们刚走不久，就有一个苗人
//出了一大笔银子，租下水生叔
//的船，水生叔一口就答应下来
//这回不知又跑到哪喝花酒去了
ReplaceAndPause();
//这年头只要有钱，杀头的生意
//都有人干

['@072E'];
EventSetTriggerMode(-1, -1, false, 2);
SetDlgLower(59, 0, false);
//苗人头领：
//小兄弟，求得灵药了吧？
SetDlgUpper(7, 0, false);
//李逍遥：
//灵药！？　什么灵药？
VideoUpdate(0, false);
SetDlgLower(59, 0, false);
//苗人头领：
//呵呵．．果然有效．．
//对了！现在是什么时辰了
SetDlgUpper(1, 0, false);
//李逍遥：
//哦．．三更天了
VideoUpdate(0, false);
SetDlgLower(59, 0, false);
//苗人头领：
//嗯～是时候了
VideoUpdate(0, false);
SetDlgLower(59, 0, false);
//苗人头领：
//小兄弟，我们现在有事要出去
//一趟，明天一早才会回来，你
//现在可以打烊，不必等我们了
EventSetState(0, 2, 0);
EventSetAutoScript(4, 16, "@0763");
EventSetAutoScript(4, 17, "@0766");
EventSetAutoScript(4, 18, "@076A");
WaitEventAutoScriptRun(10, false, false);
SetDlgUpper(1, 0, false);
//李逍遥：
//这么晚了，三位要上哪去呀？
SetDlgLower(59, 0, false);
//苗人头领：
//小兄弟．．少知道一些事情
//可以活久一点！
VideoUpdate(0, false);
SetDlgLower(59, 0, false);
//苗人头领：
//要不是看你蛮听话的，昨天我
//就赏你一颗金蚕蛊啦！
//哈．．哈．．哈～
WaitEventAutoScriptRun(26, false, false);
SetDlgUpper(7, 0, false);
//李逍遥：
//哼、装得神秘兮兮的．．
//一定不是去干啥好事！
VideoUpdate(0, false);
SetDlgUpper(1, 0, false);
//李逍遥：
//算了！　客人的闲事少管．．

['@0763'];
NpcMoveToBlockMutexLock(30, 106, 1, 2);
EventSetState(-1, 0, 0);

['@0766'];
NpcMoveToBlockMutexLock(32, 104, 1, 2);
NpcMoveToBlock(30, 106, 1, 3);
EventSetState(-1, 0, 0);

['@076A'];
NpcMoveToBlockMutexLock(33, 105, 0, 2);
NpcMoveToBlockMutexLock(31, 107, 0, 2);
EventSetState(-1, 0, 0);

['@07D8'];
//洪大夫：
//小李子，是不是跟人打架啦？
//真是．．这点小伤，我替你扎
//个几针，再推拿几下就没事了
RoleModifyHPMP(true, 9999);
FadeOut(0);
VideoUpdate(0, false);
//洪大夫：
//呵～老邻居了，不收你的钱

['@07E2'];
//洪大夫：
//我这儿还留有一颗上好的灵芝
//看在老邻居的份上就送给你吧
//不过这药只能补补元气，李大
//娘的病，恕我爱莫能助．．
AddItem(47, 0);
ReplaceAndPause();
JumpIfNotAllRolesFullHP("@07D8");
//洪大夫：
//还想要抓那些药方？
VideoUpdate(0, false);
ShowBuyItemMenu(1);

['@081B'];
PlaySound(93);
WaitEventAutoScriptRun(3, false, false);
PlaySound(93);
WaitEventAutoScriptRun(3, false, false);
PlaySound(93);
SetDlgLower(10, 0, false);
//李逍遥：
//洪大夫，您开开门啊～
VideoUpdate(0, false);
PlaySound(93);
Delay(4);
PlaySound(93);
SetDlgLower(10, 0, false);
//李逍遥：
//洪大夫！洪大夫～
VideoUpdate(0, false);
PlaySound(93);
Delay(6);
EventSetState(104, 0, 0);
EventSetState(105, 0, 0);
VideoUpdate(0, false);
EventSetState(107, 2, 0);
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//洪大夫：
//三更半夜的，是谁在敲门呀～
VideoUpdate(0, false);
SetDlgLower(2, 0, false);
//李逍遥：
//洪大叔，劳您的驾．．
//丁伯伯的哮喘病又发作了，看
//起来似乎很严重呢，请您赶快
//过去看看吧．．
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//洪大夫：
//好～好的．．我马上就过去
VideoUpdate(0, false);
EventSetState(107, 0, 0);
EventSetState(179, 2, 0);
EventSetTriggerScript(11, 1, "@088F");
EventSetAutoScript(9, 4, "Event_00006_00014_Auto");
EventSetDirFrame(9, 3, 2, 0);
SceneSetScript(9, "@084C", "");
PartySetPos(37, 21, 0);
RoleSetDirFrame(3, 0, 0);
FadeOut(0);
SceneEnter(9);

['@084C'];
VideoUpdate(0, false);
EventSetDirFrame(9, 5, 1, 0);
VideoUpdate(0, false);
EventSetDirFrame(9, 3, 3, 0);
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//洪大夫：
//你们可以放心
//已经稳定下来，没有危险了
//万一有什么情况，再过来找我
FadeOut(2);
EventSetDirFrame(9, 3, 0, 0);
RoleSetDirFrame(0, 0, 0);
EventSetState(179, 0, 0);
VideoUpdate(0, false);
EventSetDirFrame(9, 3, 1, 0);
VideoUpdate(0, false);
SetDlgUpper(52, 0, false);
//香兰：
//李家哥哥．．我．．我们
//真不知该怎么感谢您
RoleSetDirFrame(3, 0, 0);
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//不用了，我也没帮上什么忙
//只是跑跑腿而已．．
EventSetTriggerScript(9, 3, "@086B");
EventSetTriggerScript(9, 4, "@086E");
ReplaceAndPause();

['@086B'];
SetDlgUpper(52, 0, false);
//谢谢你．．

['@086E'];
SetDlgUpper(35, 0, false);
//秀兰：
//李大哥．．我好怕～
//你留下来陪我们好不好？
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//大夫不是已经说了吗，你爹爹
//已经不会有事了，你放心吧。
//我有点事，要到山神庙走一趟
VideoUpdate(0, false);
SetDlgUpper(35, 0, false);
//秀兰：
//那不是要经过西边的十里坡？
//听说～那里到了晚上会有鬼怪
//出来吃人，很可怕呢．．
VideoUpdate(0, false);
SetDlgLower(6, 0, false);
//李逍遥：
//哈哈～那是大人用来吓小孩的
//你也信？
VideoUpdate(0, false);
SetDlgLower(9, 0, false);
//李逍遥：
//我今早跟一位老前辈有约在
//山神庙，他要教我剑法
SetDlgUpper(34, 0, false);
//秀兰：
//你才是傻小孩哩，那个疯疯癫
//癫的老酒鬼讲的话你也当真？
ReplaceAndPause();
//哼～走嘛．不理你了

['@088F'];
SetDlgUpper(0, 0, false);
//洪大夫：
//被你这么一弄
//这下子我可又没得睡了
ReplaceAndPauseWithNop("Event_00011_00001_Trigger", 0);

['@0938'];
MusicStop(1);
VideoUpdate(0, false);
SetDlgLower(10, 0, false);
//啥．．已经天亮了呀
//惨了～等会回去又要挨骂了
MusicPlay(Music.灵山, false, false);
SceneSetScript(5, "Scene_00005_Enter", "");
ReplaceAndPause();

['@0941'];
VideoUpdate(0, false);
EventSetTriggerMode(-1, -1, false, 2);
SetDlgUpper(55, 0, false);
//李大娘：
//你昨晚又跑到哪玩了？居然到
//早上才回来，连店门也没拴！
//万一遭了小偷怎么办！
VideoUpdate(0, false);
SetDlgLower(9, 0, false);
//李逍遥：
//婶婶！我昨晚遇到一位仙人呢
//就是一大早躺在店门口要酒喝
//的那个道士，他还教了我一套
//剑法，你要不要瞧看看．．
VideoUpdate(0, false);
SetDlgUpper(55, 0, false);
//李大娘：
//别在那瞎说梦话，对了．．
//那些苗人客官今早回来时又
//要多订一间客房
SetDlgLower(1, 0, false);
//李逍遥：
//可是．．咱们客栈也才不过
//两间客房吧
VideoUpdate(0, false);
SetDlgUpper(55, 0, false);
//李大娘：
//我上楼找不到你，就把你的房
//间收拾收拾，先让给客官住下
VideoUpdate(0, false);
SetDlgLower(2, 0, false);
//李逍遥：
//啥！那我要睡哪里？
VideoUpdate(0, false);
SetDlgUpper(55, 0, false);
//李大娘：
//他们今晚就要走了，就忍耐一
//下吧，一天不睡午觉又不会死
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//哦～我的房间是住了谁？
VideoUpdate(0, false);
SetDlgUpper(55, 0, false);
//李大娘：
//也没住人，就只见他们抬了一
//只鼓鼓的麻布袋进去，也不许
//咱们任何人进去那房间
VideoUpdate(0, false);
SetDlgLower(9, 0, false);
//李逍遥：
//哦？这般人神神秘秘的
//莫非是啥宝贝不成．．
VideoUpdate(0, false);
Replace();
SetDlgUpper(55, 0, false);
//李大娘：
//你管人家那么多干啥？
//快去梳洗一下，准备吃早饭啦
EventSetAutoScript(4, 13, "");
EventSetTriggerScript(2, 4, "@097F");

['@097F'];
//这样走出去会被发现的
RoleMoveOneStep(8, -4, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(8, -4, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(8, -4, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(8, -4, 0);
WaitEventAutoScriptRun(0, false, false);

['@0989'];
//旺财嫂：
//早呀！你婶婶的病好了点没？
SetDlgLower(0, 0, false);
//李逍遥：
//托您的福，已经没事了

['@098F'];
//来福婶：
//小李子呀，你婶婶大病初愈
//别再让她太操劳了

['@0993'];
SetDlgUpper(52, 0, false);
//香兰：
//我爹病了，大夫说只要能渡过
//这几天就会没事了，我们姐妹
//俩得轮流看护他
SetDlgLower(0, 0, false);
//李逍遥：
//丁大伯有你们两个这么孝顺的
//好女儿，一定会好起来的

['@099D'];
SetDlgUpper(33, 0, false);
//秀兰：
//李大哥是来探望我爹的病吗？
ReplaceAndPause();
SetDlgUpper(35, 0, false);
//秀兰：
//爹爹的病是多年的老毛病了
//可是一直都治不好

['@09A6'];
VideoUpdate(0, false);
EventSetTriggerMode(-1, -1, false, 2);
//苗人喽啰：
//贼头贼脑的瞧什么？
//没有吩咐不准靠近这房间！

['@09AC'];
EventSetTriggerMode(-1, -1, false, 2);
SetDlgUpper(87, 0, false);
//王小虎：
//逍遥哥哥！
//你教我如何造密道好不好？
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//这．．太乱来了吧
//给你爹知道的话，准挨揍的
VideoUpdate(0, false);
SetDlgUpper(87, 0, false);
//可是～你自己还不是在房间做
//了一个密道，通到楼下的柴房
SetDlgLower(1, 0, false);
//李逍遥：
//嘘～别大声嚷嚷，给我婶婶知
//道就惨了，改天我再教你吧
VideoUpdate(0, false);
SetDlgUpper(87, 0, false);
//又是改天哪～
//逍遥大哥最爱赖皮了

['@0A36'];
NpcSetDirFrame(2, 0);
['@0A37'];
EventWalkOneStep(-1, -1, 16, -8);
GotoWithNop("@0A37", 9);
NpcSetDirFrame(1, 0);

['@0A3B'];
NpcSetDirFrame(0, 0);
['@0A3C'];
EventWalkOneStep(-1, -1, -16, 8);
GotoWithNop("@0A3C", 9);
EventSetState(-1, 0, 0);

['@0A40'];
VideoUpdate(0, false);
EventSetTriggerMode(-1, -1, false, 2);
SetDlgUpper(55, 0, false);
//李大娘：
//你疯了是不是！得罪了客官
//咱们生意还做不做？
VideoUpdate(0, false);
SetDlgLower(5, 0, false);
//李逍遥：
//婶婶～
//那些苗人根本是采花贼
//这位姑娘差点就被抓去卖掉
VideoUpdate(0, false);
SetDlgUpper(55, 0, false);
//李大娘：
//哎呦～　真是该打
//咦？这丫头是哪户人家的千金
//我怎么从没见过？
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//婶婶～您别尽盯着人家瞧呐！
//我得尽快将这位姑娘送回家去
SetDlgUpper(55, 0, false);
//李大娘：
//你可得快去快回啊！
//别又惹上麻烦了
EventSetTriggerScript(6, 9, "@0A68");
EventSetState(343, 0, 0);
EventSetState(349, 0, 0);
EventSetState(350, 2, 0);
EventSetState(352, 1, 0);
EventSetState(353, 1, 0);
EventSetStateSequence(20, 10, 16, 0);
EventSetStateSequence(21, 13, 18, 2);
ReplaceAndPause();
SetDlgUpper(55, 0, false);
//李大娘：
//千万别再惹麻烦．．

['@0A68'];
EventSetTriggerMode(6, 2, true, 2);
EventSetTriggerScript(6, 2, "@05E5");
EventSetTriggerScript(15, 1, "@13B0");
SceneSetScript(15, "@140C", "");
SetDlgUpper(39, 0, false);
//张四：
//我没听错吧？
//这位姑娘也要去仙灵岛！
VideoUpdate(0, false);
SetDlgUpper(39, 0, false);
//张四：
//小姐！你也是去求仙丹的吗？
//仙灵岛可不是啥好玩的地方啊
//听说～岛上有吃人的妖怪哦！
VideoUpdate(0, false);
SetDlgLower(18, 0, false);
//赵灵儿：
//你乱讲！　才不是妖怪呢
VideoUpdate(0, false);
SetDlgLower(10, 0, false);
//李逍遥：
//四哥～　拜托拜托嘛．．
//眼前就只有您能帮我这个忙了
//现在没时间多作解释，总而言
//之，是人命关天的事就对了
SetDlgUpper(39, 0, false);
//张四：
//好吧．．既然是逍遥老弟拜托
//四哥我就帮到底啦～上船吧！
EventAnimate(Direction.Southeast);
VideoUpdate(0, false);
EventAnimate(Direction.Southeast);
VideoUpdate(0, false);
EventAnimate(Direction.Southeast);
VideoUpdate(0, false);
EventAnimate(Direction.Southeast);
VideoUpdate(0, false);
EventAnimate(Direction.Southwest);
VideoUpdate(0, false);
EventAnimate(Direction.Southwest);
VideoUpdate(0, false);
EventAnimate(Direction.Southwest);
VideoUpdate(0, false);
EventAnimate(Direction.Southwest);
VideoUpdate(0, false);
EventSetState(-1, 0, 0);
EventSetState(118, 2, 0);
EventSetAutoScript(6, 3, "");
EventSetPos(6, 3, 1120, 1424);
VideoUpdate(0, false);
SetDlgUpper(39, 0, false);
//张四：
//我就好人做到底
//再跑这一趟吧！

['@0A9F'];
SetBattleMusic(Music.势如破竹_副本);
Dos_SetBattlefield(FbpDos.隐龙窟);
BattleStart(19, "@A073", "");
MusicPlay(Music.血海余生, false, false);
BattleEnd();
PartySetRole(1, 0, 0);
EventSetState(69, 2, 0);
EventSetPos(4, 25, 1184, 1696);
EventSetDirFrame(4, 25, 1, 0);
PartySetPos(36, 106, 0);
RoleSetDirFrame(1, 0, 0);
EventSetPos(4, 16, 1056, 1648);
EventSetPos(4, 15, 1088, 1664);
EventSetState(61, 0, 0);
EventSetState(62, 0, 0);
EventSetAutoScript(4, 16, "");
EventSetDirFrame(4, 16, 3, 0);
EventSetState(57, 2, 0);
EventSetPos(4, 13, 992, 1712);
EventSetPos(4, 14, 1072, 1672);
EventSetDirFrame(4, 13, 2, 0);
EventSetAutoScript(4, 13, "@0C87");
WaitEventAutoScriptRun(22, false, false);
SetDlgLower(55, 0, false);
//李大娘：
//又怎么啦！　发生什么事了？
EventSetState(60, 0, 0);
EventSetState(59, 2, 0);
EventSetState(57, 0, 0);
EventSetState(58, 2, 0);
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//苗人头领：
//不许动！
//不然我就要这老太婆的命
VideoUpdate(0, false);
PartyWalkToBlock(35, 105, 0, 4);
VideoUpdate(0, false);
SetDlgLower(5, 0, false);
//李逍遥：
//啊．．你！你卑鄙！！
//快放开我婶婶．．
VideoUpdate(0, false);
EventSetDirFrame(4, 14, 0, 1);
VideoUpdate(0, false);
PlaySound(92);
EventSetDirFrame(4, 15, 0, 1);
VideoUpdate(0, false);
EventSetDirFrame(4, 17, 0, 0);
EventSetDirFrame(4, 18, 0, 0);
EventSetDirFrame(4, 15, 0, 2);
EventModifyPos(4, 15, -16, -16);
VideoUpdate(0, false);
EventModifyPos(4, 15, -16, -16);
EventSetLayer(4, 15, 3);
VideoUpdate(0, false);
EventModifyPos(4, 15, -16, -8);
VideoUpdate(0, false);
EventModifyPos(4, 15, -16, -8);
VideoUpdate(0, false);
PlaySound(90);
WaitEventAutoScriptRun(2, false, false);
EventModifyPos(4, 15, 0, 2);
WaitEventAutoScriptRun(0, false, false);
EventModifyPos(4, 15, 0, 4);
VideoUpdate(0, false);
EventModifyPos(4, 15, 0, 8);
EventSetLayer(4, 15, 0);
VideoUpdate(0, false);
PlaySound(93);
WaitEventAutoScriptRun(6, false, false);
EventSetDirFrame(4, 14, 0, 2);
VideoUpdate(0, false);
SetDlgLower(55, 0, false);
//李大娘：
//谁是老太婆呀！你们这几个不
//长眼睛的混蛋先给我打听清楚
//老娘是何许人物？
VideoRestore();
//竟敢在我的店里撒野？要闹事
//就给我滚到别处去，小心老娘
//拆了你们的骨头拿去熬汤！
VideoRestore();
//喂．．黑脸的？　喂．．
EventSetState(57, 2, 0);
EventSetState(58, 0, 0);
EventSetDirFrame(4, 13, 1, 0);
EventSetAutoScript(4, 13, "@0B39");
WaitEventAutoScriptRun(15, false, false);
VideoUpdate(0, false);
SetDlgLower(55, 0, false);
//李大娘：
//糟糕～　一不小心用了穿云掌
//这胖子大概没救了．．
PartyWalkToBlock(34, 104, 0, 4);
VideoUpdate(0, false);
SetDlgLower(10, 0, false);
//李逍遥：
//哇．．婶婶！你好厉害喔．．
EventSetDirFrame(4, 13, 3, 0);
VideoUpdate(0, false);
SetDlgUpper(55, 0, false);
//李大娘：
//这种三脚猫货色我才不放
//在眼里，想当年你婶婶我．．
//算了．．不提了。
VideoRestore();
//喂～　你高兴个什么劲
//闹出人命啦！这下怎么收拾？
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//这班苗匪杀人越货、强掳弱女
//死有余辜！婶婶这是替天行道
SetDlgUpper(55, 0, false);
//李大娘：
//去你的．．就会说风凉话，
//日后官差问起来总是件麻烦事
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//那．．这位小姑娘怎么办？
//她的一家人全遇难了
//咱们总不能不管吧？
VideoUpdate(0, false);
SetDlgUpper(55, 0, false);
//李大娘：
//唉～　造孽．．．
//那就让她在这里住下来吧。
//你去楼上挑一间比较安静的
//房间，让她好好休息一下。
//人家遇到这种惨事，心里一定
//很难过。你可要多多关照人家
//别让她想不开呀！
SetDlgLower(9, 0, false);
//李逍遥：
//放心．．我知道
FadeOut(0);
EventModifyPos(4, 13, 0, 16);
EventSetTriggerScript(4, 13, "@0B47");
EventSetTriggerMode(4, 13, true, 2);
EventSetState(10, 0, 0);
EventSetTriggerScript(2, 9, "@0B5D");
EventSetTriggerScript(2, 8, "@0B5D");
EventSetTriggerScript(5, 1, "@0D92");
EventSetTriggerScript(5, 9, "@0CBD");
EventSetState(69, 0, 0);
EventSetState(59, 0, 0);
EventSetState(30, 0, 0);
EventSetState(31, 1, 0);
SceneSetScript(2, "@0B3C", "");
SceneEnter(2);
MusicPlay(Music.盟誓, false, false);

['@0B39'];
NpcMoveToBlock(34, 104, 0, 3);
NpcMoveToBlock(33, 103, 0, 3);

['@0B3C'];
PartySetPos(22, 20, 1);
RoleSetDirFrame(2, 0, 0);
VideoUpdate(0, false);
SetDlgLower(6, 0, false);
//李逍遥：
//她真的是累坏了．．
ReplaceAndPause();

['@0B47'];
SetDlgLower(55, 0, false);
//李大娘：
//小姑娘还好吧？
SetDlgUpper(1, 0, false);
//李逍遥：
//倒头便睡着了
//看来．．她一夜都未曾合过眼
VideoUpdate(0, false);
SetDlgLower(55, 0, false);
//李大娘：
//好吧．．这里没你的事了
//回房去吧．．
EventSetState(31, 0, 0);
FadeOut(0);
Dos_FadeFbp(FbpDos.黑底屏, 0);
FadeIn(-1);
//"　　　　　当夜．．"
FadeOut(0);
SceneEnter(2);
SceneSetScript(2, "@0B68", "");
EventSetState(-1, 0, 0);

['@0B5D'];
SetDlgCenter(0, false);
//"密道坏了．．"
VideoUpdate(0, false);
SetDlgLower(10, 0, false);
//李逍遥：
//啊．．一定是上次跟苗人
//打架给打坏了
ReplaceAndPause();
SetDlgCenter(0, false);
//"密道坏了．．"

['@0B68'];
HeroSetSprite(0, Sprite.躺李逍遥, true);
PartySetPos(41, 15, 1);
RoleSetDirFrame(0, 11, 0);
SetPaletteTime(0);
WaitEventAutoScriptRun(10, false, false);
//"门外传来哭泣声．．"
HeroSetSprite(0, Sprite.李逍遥, true);
RoleSetDirFrame(0, 0, 0);
PartySetPos(40, 16, 1);
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//是谁呀？
EventSetState(69, 2, 0);
EventSetDirFrame(4, 25, 0, 0);
EventSetTriggerMode(4, 25, true, 3);
EventSetTriggerScript(4, 25, "@0B7B");
EventSetPos(4, 25, 1616, 1528);
ReplaceAndPause();

['@0B7B'];
WaitEventAutoScriptRun(2, false, false);
RoleSetDirFrame(3, 0, 0);
WaitEventAutoScriptRun(5, false, false);
PartyWalkToBlock(50, 95, 0, 2);
WaitEventAutoScriptRun(4, false, false);
SetDlgUpper(1, 0, false);
//李逍遥：
//你怎么了？
VideoUpdate(0, false);
SetDlgLower(15, 0, false);
//赵灵儿：
//逍遥哥哥．．我好怕．．
//我．．我又梦见姥姥被．．
VideoUpdate(0, false);
SetDlgUpper(1, 0, false);
//李逍遥：
//是不是作了恶梦？
//别怕．．　在这里很安全
//我跟婶婶都会保护你的．．
VideoUpdate(0, false);
SetDlgLower(17, 0, false);
//赵灵儿：
//我要跟你一起睡．．
SetDlgUpper(10, 0, false);
//李逍遥：
//啥！？　一起．．．
VideoUpdate(0, false);
RoleSetDirFrame(0, 0, 0);
WaitEventAutoScriptRun(4, false, false);
RoleSetDirFrame(3, 0, 0);
VideoUpdate(0, false);
SetDlgUpper(10, 0, false);
//李逍遥：
//这．．不太妥吧！？
SetDlgLower(17, 0, false);
//赵灵儿：
//为什么不行．．？
VideoUpdate(0, false);
SetDlgUpper(9, 0, false);
//李逍遥：
//我是很同情你，但．．这
//男女授受不亲．．你懂吧？
WaitEventAutoScriptRun(5, false, false);
NpcSetDirFrame(0, 0);
VideoUpdate(0, false);
SetDlgLower(15, 0, false);
//赵灵儿：
//你．．你是不是嫌弃我！
NpcSetDirFrame(3, 0);
VideoUpdate(0, false);
SetDlgLower(15, 0, false);
//赵灵儿：
//呜．．．
//逍遥哥哥也不要灵儿了吗？！
RoleSetDirFrame(0, 0, 0);
WaitEventAutoScriptRun(4, false, false);
RoleSetDirFrame(3, 0, 0);
WaitEventAutoScriptRun(5, false, false);
RoleSetDirFrame(2, 0, 0);
WaitEventAutoScriptRun(4, false, false);
RoleSetDirFrame(3, 0, 0);
WaitEventAutoScriptRun(0, false, false);
SetDlgUpper(10, 0, false);
//李逍遥：
//我！？　这．．．
EventSetState(57, 2, 0);
EventSetDirFrame(4, 13, 3, 0);
EventSetPos(4, 13, 1440, 1456);
EventSetAutoScript(4, 13, "@0BF8");
WaitEventAutoScriptRun(12, false, false);
SetDlgUpper(55, 0, false);
//李大娘：
//逍遥！　你欺负人家啦？
PartyWalkToBlock(49, 95, 1, 4);
PartyWalkToBlock(47, 93, 1, 4);
WaitEventAutoScriptRun(2, false, false);
RoleSetDirFrame(3, 0, 0);
WaitEventAutoScriptRun(6, false, false);
RoleSetDirFrame(0, 0, 0);
VideoUpdate(0, false);
RoleSetDirFrame(1, 0, 0);
VideoUpdate(0, false);
SetDlgLower(10, 0, false);
//李逍遥：
//我哪敢啊！？
EventSetAutoScript(4, 13, "@0BFA");
WaitEventAutoScriptRun(10, false, false);
RoleSetDirFrame(2, 0, 0);
WaitEventAutoScriptRun(0, false, false);
RoleSetDirFrame(3, 0, 0);
WaitEventAutoScriptRun(10, false, false);
NpcSetDirFrame(0, 0);
WaitEventAutoScriptRun(3, false, false);
NpcSetDirFrame(1, 0);
WaitEventAutoScriptRun(3, false, false);
SetDlgUpper(55, 0, false);
//李大娘：
//别理那浑小子！
VideoUpdate(0, false);
SetDlgUpper(55, 0, false);
//李大娘：
//走．．到我房里来
//有什么委屈就说给大娘听
//大娘替你作主！
EventSetAutoScript(4, 13, "@0BFD");
WaitEventAutoScriptRun(0, false, false);
EventSetAutoScript(4, 25, "@0C00");
WaitEventAutoScriptRun(15, false, false);
RoleSetDirFrame(2, 0, 0);
WaitEventAutoScriptRun(6, false, false);
RoleSetDirFrame(1, 0, 0);
VideoFadeAndUpdate(-2);
Dos_FadeFbp(FbpDos.黑底屏, 0);
FadeIn(-1);
//"　次日．．"
FadeOut(0);
SetPaletteTime(0);
EventSetState(39, 2, 0);
EventSetState(41, 1, 0);
EventSetState(38, 2, 0);
RoleSetDirFrame(0, 0, 0);
PartySetPos(40, 16, 1);
SceneEnter(2);
MusicPlay(Music.余杭春日, false, false);

['@0BF8'];
NpcMoveToBlock(46, 92, 1, 3);

['@0BFA'];
NpcMoveToBlock(47, 92, 0, 3);
NpcMoveToBlock(50, 95, 0, 3);

['@0BFD'];
NpcMoveToBlock(43, 88, 0, 3);
EventSetState(-1, 0, 0);

['@0C00'];
NpcMoveToBlock(43, 88, 0, 3);
EventSetState(-1, 0, 0);

['@0C03'];
NpcMoveToBlockMutexLock(43, 46, 1, 2);
NpcSetDirFrame(3, 0);
EventSetState(41, 0, 0);
ReplaceAndPause();
NpcSetDirFrame(2, 0);

['@0C87'];
NpcMoveToBlock(33, 104, 1, 3);
ReplaceAndPause();
NpcSetDirFrame(3, 0);
ReplaceAndPause();
NpcSetDirFrame(2, 0);
ReplaceAndPause();
ReplaceAndPause();
NpcSetDirFrame(3, 0);

['@0C90'];
SetDlgUpper(39, 0, false);
//张四：
//这么个折腾下来，可真是累人
ReplaceAndPause();
//以后这种吃力不讨好的事可别
//再找我啦

['@0C97'];
EventSetTriggerMode(-1, -1, false, 3);
SetDlgUpper(87, 0, false);
//王小虎：
//哈～是仙女姐姐！
//我是小虎子，您还记得我吗？
SetDlgLower(14, 0, false);
//赵灵儿：
//嗯～我当然记得．．
//小虎～你爹爹的病好了吧？
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//咦～你们认识？
SetDlgUpper(87, 0, false);
//王小虎：
//　　对啊！
//我跟你说的仙女姐姐就是她
ReplaceAndPause();
SetDlgUpper(87, 0, false);
//王小虎：
//逍遥哥哥配仙女姐姐
//哈哈～天生一对！
ReplaceAndPause();
SetDlgUpper(0, 0, false);
//王小虎：
//你们要去哪？带我去好不好

['@0CB2'];
SetDlgUpper(52, 0, false);
//香兰：
//　啊．．你好

['@0CB6'];
SetDlgLower(52, 0, false);
//香兰：
//李家哥哥．．
//听说．．你要远行吗？
ReplaceAndPause();
//要记得我喔．．

['@0CBD'];
SetDlgLower(34, 0, false);
//秀兰：
//逍遥哥哥，那个女孩子是谁？
//怎么会住在你家？

['@0CC2'];
SetDlgLower(35, 0, false);
//秀兰：
//逍遥哥哥．．你不要走嘛～
//人家会想你呢．．

['@0CC7'];
EventSetTriggerMode(-1, -1, false, 2);
//王小虎：
//逍遥哥哥．．我要跟你去
ReplaceAndPause();
//呜～　逍遥哥哥都不理人家了
ReplaceAndPauseWithNop("@0CC7", 0);

['@0CCE'];
SetDlgUpper(34, 0, false);
//秀兰：
//逍遥哥哥～她是谁？
//怎么会跟你在一起．．
VideoUpdate(0, false);
SetDlgLower(10, 0, false);
//李逍遥：
//她．．她是我远房的表妹
//到我家来玩几天
SetDlgUpper(34, 0, false);
//秀兰：
//少骗人了，你家什么时候冒出
//个远房亲戚来？我怎么不知道
ReplaceAndPause();
//喂～！
//你可不许打逍遥哥的主意

['@0CDF'];
//旺财嫂：
//噢～这是那户人家的千金哪？
//外地来的吗？怎么都没见过？
ReplaceAndPause();
//为谁洗衣～为谁忙．．

['@0CE5'];
//来福婶：
//呵呵～小李子．．不简单哦！

['@0CE8'];
//鱼嫂：
//这几天出入仙灵岛的人
//怎么突然多了起来？

['@0CEC'];
JumpIfNotAllRolesFullHP("@0CF8");
//洪大夫：
//我说小李子呀～你老大不小了
//也该趁早讨个媳妇，安定下来
//别老是让你婶婶操心
VideoRestore();
//呵呵～我怎么说教起来了
//你们是来抓药的吧？
//自己随便挑吧．．
VideoUpdate(0, false);
ShowBuyItemMenu(1);

['@0CF8'];
//洪大夫：
//你们俩怎么受伤啦？
//听说你们打跑了一伙强盗
//呵～真是勇气可嘉！
RoleRevive(true, 10);
RoleModifyHPMP(true, 9999);
FadeOut(0);
VideoUpdate(0, false);
//洪大夫：
//以後有需要尽管来找我
//洪大叔最喜欢你们这样的年青人

['@0D37'];
//老王：
//呵．．听说你跑到仙灵岛上去
//求仙药，救了你婶婶一命是吧
ReplaceAndPause();
//好～真是孝顺的好孩子啊．．
ReplaceAndPauseWithNop("@0D37", 0);

['@0D3E'];
EventSetTriggerMode(-1, -1, false, 2);
SetDlgUpper(87, 0, false);
//王小虎：
//不好了～不好了，逍遥哥哥！
//有三个坏人拿着刀子，在村子
//里到处找你呢！他们看起来好
//凶喔．．
VideoUpdate(0, false);
SetDlgLower(9, 0, false);
//李逍遥：
//一定是那些死不成的家伙．．
//嘿～想找我报仇吗？他们现在
//人在哪里？
SetDlgUpper(87, 0, false);
//王小虎：
//他们找不到你，就在你家里等
VideoUpdate(0, false);
SetDlgLower(2, 0, false);
//李逍遥：
//啊．．我婶婶呢？
SetDlgUpper(87, 0, false);
//王小虎：
//李大娘出去买菜，还没回来。
VideoUpdate(0, false);
SetDlgUpper(35, 0, false);
//秀兰：
//李大哥．．你怎么会惹上那些
//苗人呢？我好怕会闹出人命呢
SetDlgLower(6, 0, false);
//李逍遥：
//哈哈．．我这是替天行道
//你不要担心，我现在武功高强
//没人打得过我的．．
ReplaceAndPause();
//逍遥哥哥加油！
ReplaceAndPause();
//打死那些坏蛋！

['@0D64'];
SetDlgUpper(35, 0, false);
//秀兰：
//李大哥，你千万不要回家呀！
//有三个苗人就在你家里等你呢
//他们说：如果你不出现，他们
//就要把你家给拆了
VideoUpdate(0, false);
SetDlgLower(10, 0, false);
//李逍遥：
//啥！这样我不回去怎行？
VideoUpdate(0, false);
SetDlgUpper(35, 0, false);
//秀兰：
//你看．．要不要报官啊
VideoUpdate(0, false);
SetDlgLower(9, 0, false);
//李逍遥：
//不必～有我就行了
//那些人不过是我的手下败将
SetDlgUpper(35, 0, false);
//秀兰：
//可是．．对方人多呢．．
//要打架总要准备些家伙吧
ReplaceAndPause();
SetDlgUpper(35, 0, false);
//秀兰：
//渔港边打铁的曾大伯和林木匠
//家里有卖一些兵器，我想你多
//少先准备一下嘛．．
SetDlgLower(1, 0, false);
//李逍遥：
//好啦～好啦，我知道．．
VideoUpdate(0, false);
SetDlgUpper(35, 0, false);
//秀兰：
//还有．．要不要先我替你去
//洪大夫家里买些伤药回来？
//万一．．万一．．
SetDlgLower(8, 0, false);
//李逍遥：
//啧．．你少触我霉头！
ReplaceAndPause();
SetDlgUpper(34, 0, false);
//秀兰：
//哼～人家担心你嘛．．

['@0D92'];
EventSetTriggerMode(-1, -1, false, 2);
//王小虎：
//逍遥哥哥好厉害喔！
ReplaceAndPause();
//逍遥哥哥你当我师父好不好？
ReplaceAndPauseWithNop("@0D92", 0);

SetDlgUpper(35, 0, false);
//秀兰：
//好可怕～你们会用法术．．

['@0D9D'];
//小李子，你终于想回来我的
//船上工作了吗！？
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//不．．方老板，我们兄妹俩
//要出远门，能否搭您的便船？
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//方老板：
//啧．．好吧。
//不过．．我这艘船只到苏州
SetDlgLower(1, 0, false);
//李逍遥：
//也成！
FadeOut(0);
PartySetPos(39, 75, 0);
HeroSetSprite(0, Sprite.空空如也, false);
RoleSetDirFrame(0, 0, 0);
PartySetRole(1, 0, 0);
EventSetTriggerMode(6, 12, true, 4);
EventSetState(-1, 0, 0);
VideoUpdate(0, false);

['@0DBD'];
//半夜三更的，菜市场早打烊了
RoleSetDirFrame(3, 0, 0);
WaitEventAutoScriptRun(0, false, false);
RoleSetDirFrame(0, 0, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(-8, 4, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(-8, 4, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(-8, 4, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(-8, 4, 0);
WaitEventAutoScriptRun(0, false, false);

['@0DCB'];
RoleMoveOneStep(-8, 4, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(-8, 4, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(-8, 4, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(-8, 4, 0);
WaitEventAutoScriptRun(0, false, false);
SetDlgLower(0, 0, false);
//李逍遥：
//哇～　哈～　我自由了！
RoleModifyHPMP(true, 9999);
ReplaceAndPause();

['@0E9E'];
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//李逍遥：
//喔．．我没带那么多钱呢
['@0EA2'];
ReplaceAndPause();
['Event_00006_00014_Trigger'];
//水果贩：
//来喔！这儿全都是今儿
//个刚摘下来的新鲜水果
//要不要来几个啊？
GotoWithSelect("@0EA2");
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//李逍遥：
//多少钱一斤？
SetDlgUpper(0, 0, false);
//水果贩：
//老顾客了，算你一斤２５文钱
CashModify(-25, "@0E9E");
AddItem(32, 0);
SetDlgBox(0);
//获得"水果"

['@0F0E'];
//学徒：
//做木匠是很辛苦的喔

['@0F55'];
VideoUpdate(0, false);
//中年人：
//啧．．那就算了
ReplaceAndPauseWithNop("Event_00010_00004_Trigger", 0);

['@0F81'];
NpcMoveToBlockMutexLock(50, 62, 0, 2);
EventSetState(-1, 0, 0);

['@1073'];
PartySetPos(18, 72, 0);
SceneEnter(19);
FadeOut(0);

['@1077'];
PartySetPos(57, 32, 0);
SceneEnter(19);
FadeOut(0);

['@10AB'];
SetDlgUpper(39, 0, false);
//张四哥：
//哇～你这一去就是一天一夜
//我差点就以为你回不来了！
VideoUpdate(0, false);
SetDlgLower(3, 0, false);
//李逍遥：
//哈哈～福人自有福星照
//我这一趟有非凡奇遇呢！
SetDlgUpper(39, 0, false);
//张四哥：
//哦！　你真的见到仙女了吗？
VideoUpdate(0, false);
SetDlgLower(6, 0, false);
//李逍遥：
//嘿嘿．．可以说差不多啦！
//不过老妖婆也遇上了，还好
//灵药已经求到，咱们快回去吧
EventSetTriggerScript(3, 3, "@0675");
EventSetTriggerScript(6, 13, "@0725");
EventSetTriggerScript(6, 9, "@05F2");
EventSetTriggerScript(6, 2, "");
EventSetTriggerMode(6, 2, false, 0);
EventSetState(36, 0, 0);
EventSetState(192, 2, 0);
EventSetState(37, 0, 0);
EventSetState(60, 0, 0);
EventSetState(25, 0, 0);
EventSetState(125, 0, 0);
EventSetState(124, 2, 0);
EventSetPos(6, 2, 1184, 1424);
EventSetPos(6, 9, 1152, 1376);
EventSetState(118, 0, 0);
PartySetPos(34, 84, 1);
SceneEnter(6);
FadeOut(0);
MusicPlay(Music.余杭春日, false, false);

['@10EA'];
NpcMoveToBlock(37, 7, 0, 3);

['@12AA'];
SetDlgUpper(15, 0, false);
//逍遥哥哥．．一路小心～
ReplaceAndPause();
SetDlgUpper(11, 0, false);
//快走吧．．姥姥一会就回来了

['@1330'];
MusicPlay(Music.今生情不悔, false, false);
PartySetPos(44, 22, 0);
RoleSetDirFrame(3, 0, 0);
EventSetState(284, 1, 0);
EventSetStateSequence(20, 18, 45, 2);
VideoUpdate(0, false);
SetDlgUpper(15, 0, false);
//姥姥、师父．．还有诸位师姑
//你们地下有知，保佑孩儿早日
//找到娘亲．．
VideoRestore();
//灵儿．．就此拜别．．
FadeOut(0);
PartySetPos(44, 23, 1);
PartySetRole(1, 2, 0);
RoleSetDirFrame(2, 0, 0);
RoleSetDirFrame(3, 0, 1);
EventSetState(284, 0, 0);
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//你．．以后有何打算？
SetDlgUpper(11, 0, false);
//当然是．．跟着你．．
RoleSetDirFrame(1, 0, 0);
VideoUpdate(0, false);
SetDlgLower(9, 0, false);
//李逍遥：
//好吧！
//事到如今，走一步算一步啦
//是福是祸到时候再说吧！
VideoRestore();
//反正．．你也没地方去了，不
//如先住在我家吧，反正我家是
//开客栈的，空房间多的是
ReplaceAndPause();

['@1355'];
EventWalkOneStep(-1, -1, 12, -6);
GotoWithNop("@1355", 0);

['@13B0'];
SetDlgUpper(39, 0, false);
//快去办完这档事，早点回家吧
//这座岛阴阳怪气的，在这里多
//留一会，心里头总是毛毛的

['@13B5'];
SetDlgUpper(39, 0, false);
//回来啦！？　那就走人啦．．
EventSetPos(6, 2, 1184, 1424);
EventSetPos(6, 9, 1152, 1376);
EventSetState(124, 2, 0);
EventSetTriggerMode(6, 2, false, 0);
EventSetTriggerScript(6, 2, "");
PartySetPos(34, 84, 1);
SceneEnter(6);
FadeOut(0);
MusicPlay(Music.晨光, false, false);

['@13D4'];
NpcSetFrame(3);
ReplaceAndPause();
NpcSetFrame(4);
ReplaceAndPause();
NpcSetFrame(5);
ReplaceAndPause();
NpcSetFrame(6);
ReplaceAndPause();
NpcSetFrame(7);
ReplaceAndPause();
NpcSetFrame(8);
ReplaceAndPause();
NpcSetFrame(9);
ReplaceAndPause();
NpcSetFrame(10);
ReplaceAndPause();
ReplaceAndPause();
ReplaceAndPause();
NpcSetFrame(11);

['@140C'];
PartySetRole(2, 1, 0);
SetBattleMusic(Music.势如破竹);
MusicPlay(Music.灵山, false, false);
ReplaceAndPause();

['@15D4'];
NpcSetFrame(4);
NpcSetFrame(5);
NpcSetFrame(6);
NpcSetFrame(7);
NpcSetFrame(8);
NpcSetFrame(9);
NpcSetFrame(10);

['@15DC'];
NpcMoveToBlock(36, 75, 0, 3);
NpcMoveToBlock(38, 73, 0, 8);
NpcMoveToBlock(41, 76, 0, 8);
NpcMoveToBlock(44, 73, 0, 8);
NpcMoveToBlock(47, 76, 0, 8);
NpcMoveToBlock(61, 62, 0, 8);
EventSetState(-1, 0, 0);

['@15F1'];
NpcMoveToBlock(36, 72, 1, 3);
WaitEventAutoScriptRun(2, false, false);
EventModifyPos(-1, -1, 4, -2);
NpcSetDirFrame(0, 0);

['@16B1'];
EventAnimate(Direction.Southeast);
EventAnimate(Direction.Southeast);
EventAnimate(Direction.Southeast);
EventAnimate(Direction.Southeast);
['@16B5'];
EventWalkOneStep(-1, -1, 8, 4);
GotoWithNop("@16B5", 0);

['@16BA'];
SetDlgLower(6, 0, false);
//李逍遥：
//怎么了？是你在喊救命吗？
//是不是害怕了，想求饶？
VideoUpdate(0, false);
SetDlgUpper(25, 0, false);
//林月如：
//谁．．谁怕了！
//我随便喊喊，关你什么事？
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//这可是你自己说的
//这回我真的不管你啰．．
VideoUpdate(0, false);
SetDlgUpper(23, 0, false);
//林月如：
//你走啊，下次再让我遇到你
//我一定要你好看！
SetDlgLower(1, 0, false);
//李逍遥：
//奉陪！谁怕谁！
EventSetTriggerScript(22, 11, "@1706");
ReplaceAndPause();
//哼！

['@1706'];
EventSetTriggerScript(22, 10, "@173C");
EventSetTriggerMode(22, 10, true, 3);
EventSetDirFrame(22, 10, 0, 5);
SetDlgBox(0);
//远远又传来一阵尖叫声
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//"呀！！不要哇！"
//"救命啊！救命啊．．"
VideoUpdate(0, false);
RoleSetDirFrame(3, 0, 1);
VideoUpdate(0, false);
RoleSetDirFrame(0, 0, 1);
WaitEventAutoScriptRun(6, false, false);
RoleSetDirFrame(3, 0, 1);
VideoUpdate(0, false);
RoleSetDirFrame(2, 0, 1);
VideoUpdate(0, false);
SetDlgUpper(11, 0, false);
//赵灵儿：
//逍遥哥！她好像真的出事了！
RoleSetDirFrame(3, 0, 0);
VideoUpdate(0, false);
RoleSetDirFrame(0, 0, 0);
VideoUpdate(0, false);
SetDlgLower(7, 0, false);
//李逍遥：
//啧！又来了．．
//真是受不了那野丫头
VideoUpdate(0, false);
Replace();
SetDlgUpper(11, 0, false);
//赵灵儿：
//可是．．
//我觉得我们做得太过份了
//还是回去把她放了吧
SetDlgLower(8, 0, false);
//李逍遥：
//好啦！好啦！灵儿妹子
//听你的就是了
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

['@173C'];
//住手！
EventSetState(405, 0, 0);
BattleStart(22, "@A073", "");
BattleEnd();
PartySetRole(1, 0, 0);
EventSetState(404, 0, 0);
EventSetState(400, 1, 0);
PartySetPos(27, 63, 0);
RoleSetDirFrame(3, 0, 0);
EventSetState(398, 0, 0);
EventSetState(397, 1, 0);
VideoUpdate(0, false);
SetDlgLower(11, 0, false);
//赵灵儿：
//你看吧！还好我们及时折回来
//不然可闯大祸了．．
VideoUpdate(0, false);
SetDlgUpper(2, 0, false);
//李逍遥：
//实在很抱歉，没想到害了姑娘
//受到这般惊吓。还好没有受伤
//要不要我送你回家？
WaitEventAutoScriptRun(2, false, false);
RoleMoveOneStep(8, 4, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(8, 4, 0);
WaitEventAutoScriptRun(0, false, false);
EventSetDirFrame(22, 3, 0, 0);
VideoUpdate(0, false);
SetDlgLower(23, 0, false);
//林月如：
//少假惺惺～　看剑！

['@1825'];
EventWalkOneStep(-1, -1, 3, -1);
EventWalkOneStep(-1, -1, 5, -3);
['@1827'];
EventWalkOneStep(-1, -1, 8, -4);
GotoWithNop("@1827", 0);

['@182A'];
SetDlgUpper(21, 0, false);
//林月如：
//多管闲事．．活该！
GotoWithNop("@A073", 0);

['@183B'];
SceneEnter(34);
PartySetPos(43, 54, 0);
FadeOut(0);

['@18CD'];
CashModify(-400, "@18C8");
//杂货小贩：
//来喔～来喔～便宜卖喔！
VideoUpdate(0, false);
SetDlgLower(6, 0, false);
//李逍遥：
//灵儿．．这银钗你戴起来
//一定很好看！　我买给你
SetDlgUpper(11, 0, false);
//可是．．好像很贵呢．．
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//话不能这么说！
//女孩子就是要会打扮
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//老板！　我要这只银钗
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//杂货小贩：
//哦～　这位姑娘要戴的吗？
//公子．．您真有眼光！
VideoUpdate(0, false);
//原价４２０文钱，算你４００
//文钱就行啦！
AddItem(139, 0);
ReplaceAndPauseWithNop("@18C8", 0);

['@193A'];
SetDlgUpper(0, 0, false);
//掌柜：
//住店的客人几乎都到林家堡
//去看比武招亲大会了

['@1A7D'];
EventSetState(506, 1, 0);
EventSetState(507, 1, 0);
EventSetState(504, 1, 0);
EventSetState(505, 1, 0);
PartySetPos(18, 25, 0);
HeroSetSprite(0, Sprite.伏案逍遥, false);
PartySetRole(1, 0, 0);
RoleSetDirFrame(0, 0, 0);
WaitEventAutoScriptRun(6, false, false);
SetDlgLower(40, 0, false);
//刘晋元：
//李兄仗义相救，刘某不胜感激
VideoUpdate(0, false);
SetDlgUpper(1, 0, false);
//李逍遥：
//这也没什么啦！　倒是刘兄
//特地准备这么一桌美酒佳肴
//我还觉得受之有愧呢
VideoUpdate(0, false);
SetDlgLower(40, 0, false);
//刘晋元：
//李兄您太客气了！在下想交您
//这朋友，不知李兄意下如何？
SetDlgUpper(1, 0, false);
//李逍遥：
//四海之内皆兄弟，有何不可？
VideoUpdate(0, false);
SetDlgLower(40, 0, false);
//刘晋元：
//好．．咱们干！
FadeOut(2);
EventSetState(506, 0, 0);
EventSetState(508, 1, 0);
SetPaletteTime(0);
VideoUpdate(0, false);
SetDlgCenter(0, false);
//赵灵儿不胜酒力，睡着了
//李刘二人酒逢知己千杯少
//继续喝酒聊天，就这样过
//了一夜．．
FadeOut(0);
HeroSetSprite(0, Sprite.李逍遥, true);
RoleSetDirFrame(3, 0, 0);
PartySetPos(18, 27, 1);
EventSetState(507, 0, 0);
EventSetState(510, 2, 0);
EventSetStateSequence(26, 5, 14, 0);
EventSetTriggerScript(26, 4, "@193A");
EventSetTriggerScript(26, 9, "@1D9B");
EventSetTriggerScript(26, 10, "@1D9F");
EventSetState(428, 0, 0);
EventSetState(430, 0, 0);
EventSetState(429, 2, 0);
EventSetState(431, 2, 0);
EventSetState(437, 0, 0);
EventSetState(432, 0, 0);
EventSetState(433, 0, 0);
SetPaletteTime(0);
VideoUpdate(0, false);
SetDlgLower(40, 0, false);
//刘晋元：
//李兄．．我有要事先行告辞了
SetDlgUpper(1, 0, false);
//李逍遥：
//　　后会有期．．
EventSetAutoScript(27, 10, "@1B1E");
WaitEventAutoScriptRun(4, false, false);
PartyWalkToBlock(20, 29, 0, 2);
WaitEventAutoScriptRun(0, false, false);
RoleSetDirFrame(0, 0, 0);
WaitEventAutoScriptRun(10, false, false);
SetDlgUpper(40, 0, false);
//刘晋元：
//李兄，不必送了．．
WaitEventAutoScriptRun(8, false, false);
EventSetPos(24, 3, 1168, 808);
EventSetDirFrame(24, 3, 0, 0);
EventSetTriggerScript(24, 3, "@1B2E");
EventSetAutoScript(24, 3, "");
SceneSetScript(24, "@1AD2", "");
EventSetTriggerScript(26, 15, "@1B31");
RoleModifyHPMP(true, 9999);
EventSetState(0, 0, 0);
ReplaceAndPause();

['@1AD2'];
MusicPlay(Music.风光, false, false);
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//算命仙：
//铁口直断．．不灵免钱
//二位要算命吗？
WaitEventAutoScriptRun(4, false, false);
RoleSetDirFrame(2, 0, 0);
WaitEventAutoScriptRun(2, false, false);
RoleSetDirFrame(2, 0, 1);
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//李逍遥：
//不灵免钱！？　好～
//帮我算算我最近的运气如何？
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//算命仙：
//．．．．．．嗯．．
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//算命仙：
//公子气色泛红，面带桃花
//准是走桃花运了！
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//算命仙：
//女子为水，水载舟亦覆舟
//公子千万要谨慎～切记～切记
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//李逍遥：
//嘿！　我有桃花运？
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//算命仙：
//这位姑娘要不要也算一算？
SetDlgLower(11, 0, false);
//好呀．．．！
WaitEventAutoScriptRun(6, false, false);
SetDlgUpper(0, 0, false);
//算命仙：
//嗯．．我来看看．．
VideoRestore();
//哦！　姑娘瑶光聚顶
//灵气逼人．．人世少见
//在朝必为帝后，在野亦为人杰
VideoRestore();
//但．．眉宇间隐含煞气
//恐怕．．近日必有劫难！
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//李逍遥：
//呸呸呸．．．鬼话连篇！
//灵儿我们走人了！
RoleSetDirFrame(3, 0, 0);
VideoUpdate(0, false);
RoleMoveOneStep(8, 4, 0);
VideoUpdate(0, false);
RoleMoveOneStep(8, 4, 0);
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//算命仙：
//公子．．您还没给钱呢？！
RoleSetDirFrame(2, 0, 0);
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//李逍遥：
//你不是说不灵免钱吗？
EventSetAutoScript(24, 3, "@1B7F");
SetDlgUpper(0, 0, false);
//算命仙：
//唉～  贫道说的都是真话
RoleSetDirFrame(3, 0, 0);
ReplaceAndPause();

['@1B1E'];
NpcMoveToBlockMutexLock(18, 30, 1, 2);
ReplaceAndPause();
NpcSetDirFrame(3, 0);
NpcSetDirFrame(2, 0);
ReplaceAndPause();
ReplaceAndPause();
NpcSetDirFrame(3, 0);
NpcSetDirFrame(0, 0);
NpcMoveToBlockMutexLock(18, 31, 0, 2);
EventSetState(-1, 0, 0);

['@1B2E'];
//算命仙：
//铁口直断．．

['@1B31'];
SetDlgCenter(0, false);
//留赵灵儿一个人在房间里
//你．．放心吗？
RoleMoveOneStep(-16, -8, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(-16, -8, 0);
WaitEventAutoScriptRun(0, false, false);

['@1BA2'];
ReplaceAndPause();
GotoWithProbability(4, "@1BA2");
NpcMoveToBlockMutexLock(37, 53, 0, 2);
NpcMoveToBlockMutexLock(33, 49, 1, 2);
NpcMoveToBlockMutexLock(33, 50, 0, 2);
NpcMoveToBlockMutexLock(35, 52, 0, 2);
ReplaceAndPause();
ReplaceAndPause();
['@1BAA'];
ReplaceAndPause();
GotoWithProbability(3, "@1BAA");
NpcMoveToBlockMutexLock(37, 54, 0, 2);
NpcMoveToBlockMutexLock(39, 51, 1, 2);
NpcMoveToBlockMutexLock(41, 53, 1, 2);
WaitEventAutoScriptRun(9, false, false);
NpcMoveToBlockMutexLock(47, 48, 0, 2);
NpcMoveToBlockMutexLock(44, 45, 0, 2);
NpcMoveToBlockMutexLock(41, 42, 0, 2);
WaitEventAutoScriptRun(3, false, false);
NpcMoveToBlockMutexLock(41, 41, 1, 2);
WaitEventAutoScriptRun(4, false, false);
NpcMoveToBlockMutexLock(44, 44, 1, 2);
WaitEventAutoScriptRun(7, false, false);
NpcMoveToBlockMutexLock(33, 56, 0, 2);
WaitEventAutoScriptRun(2, false, false);
NpcMoveToBlockMutexLock(33, 56, 1, 2);
ReplaceAndPauseWithNop("@1BA2", 0);

['@1D2A'];
//少女：
//唉．．为什么我们家要这么穷

['@1D2D'];
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//我也是很同情她
//但是我们的盘缠也不多
//要省着用啊
ReplaceAndPauseWithNop("@1D2A", 0);

['@1D35'];
SetDlgLower(1, 0, false);
//李逍遥：
//好是好．．
//但是我们的钱也不够

['@1D44'];
NpcMoveToBlock(24, 40, 0, 8);
NpcMoveToBlock(22, 38, 1, 8);
NpcMoveToBlock(20, 40, 1, 8);
EventSetState(-1, 0, 0);

['@1D4E'];
//居民：
//唉．．你被骗了
//那赌鬼已已经不知道向多少
//人借过钱，从来没还过

['@1D75'];
NpcMoveToBlock(15, 27, 0, 3);
NpcMoveToBlock(17, 29, 1, 3);
NpcMoveToBlock(20, 26, 1, 3);
NpcMoveToBlock(19, 28, 0, 3);
NpcSetDirFrame(1, 0);
WaitEventAutoScriptRun(3, false, false);
NpcMoveToBlock(20, 26, 1, 3);
NpcMoveToBlock(18, 24, 0, 3);
NpcMoveToBlock(13, 29, 0, 3);
NpcMoveToBlock(12, 28, 1, 3);
NpcMoveToBlock(11, 30, 0, 3);
EventSetState(-1, 0, 0);

['@1D82'];
NpcMoveToBlock(18, 28, 1, 3);
NpcMoveToBlock(20, 26, 1, 3);
NpcMoveToBlock(18, 24, 1, 3);
NpcMoveToBlock(16, 26, 1, 3);
WaitEventAutoScriptRun(4, false, false);
NpcMoveToBlock(17, 27, 1, 3);
WaitEventAutoScriptRun(6, false, false);
NpcMoveToBlock(15, 30, 0, 8);
NpcMoveToBlock(13, 28, 0, 8);
NpcMoveToBlock(10, 30, 1, 8);
EventSetState(-1, 0, 0);

['@1D8E'];
ReplaceAndPause();
['Event_00024_00015_Trigger'];
//买糖葫芦吗？
GotoWithSelect("@1D8E");
CashModify(-20, "@1D95");
AddItem(20, 0);
ReplaceAndPauseWithNop("Event_00024_00015_Trigger", 0);

['@1D95'];
VideoUpdate(0, false);
//小贩：
//先生．．一串２０文钱
//您的钱不够
ReplaceAndPauseWithNop("Event_00024_00015_Trigger", 0);

['@1D9B'];
//客人：
//所有人都已经到林家堡去了
//还不赶快去。

['@1D9F'];
//客人：
//是啊！比武招亲已经开始啰！

['@1DFD'];
SceneEnter(38);
PartySetPos(34, 31, 0);
FadeOut(0);

['@1FB7'];
EventAnimate(Direction.Northwest);
ReplaceAndPauseWithNop("@1FB7", 0);

['@1FBA'];
EventAnimate(Direction.Southeast);
ReplaceAndPauseWithNop("@1FBA", 0);

['@1FBD'];
EventAnimate(Direction.Northwest);
GotoWithNop("@1FBD", 0);

['@1FEE'];
EventSetAutoScript(33, 5, "@1FF7");
ReplaceAndPause();
EventModifyPos(-1, -1, 2, 1);
NpcSetFrame(8);
WaitEventAutoScriptRun(3, false, false);
NpcSetFrame(0);
EventModifyPos(-1, -1, -2, -1);
ReplaceAndPauseWithNop("Event_00033_00003_Auto", 0);

['@1FF7'];
EventModifyPos(-1, -1, 10, 7);
NpcSetFrame(0);
EventModifyPos(-1, -1, 2, 1);
ReplaceAndPause();
NpcSetFrame(1);
EventModifyPos(-1, -1, -16, -12);
EventModifyPos(-1, -1, 4, 4);
PlaySound(17);

['@2000'];
NpcSetFrame(0);
EventModifyPos(-1, -1, 0, -8);
ReplaceAndPause();
EventModifyPos(-1, -1, 8, 4);
NpcSetFrame(2);
PlaySound(17);
NpcSetFrame(1);
EventModifyPos(-1, -1, -8, 4);
PlaySound(15);

['@200A'];
EventModifyPos(-1, -1, -8, -4);
ReplaceAndPause();
ReplaceAndPause();
PlaySound(7);
NpcSetFrame(3);
EventModifyPos(-1, -1, 6, 3);
EventModifyPos(-1, -1, 2, 1);
ReplaceAndPause();
NpcSetFrame(0);

['@2108'];
NpcMoveToBlockMutexLock(42, 84, 1, 4);
EventSetState(-1, 0, 0);

['@21D0'];
EventSetTriggerMode(-1, -1, false, 2);
SceneSetScript(37, "Scene_00034_Enter", "");
SceneSetScript(38, "Scene_00034_Enter", "");
EventSetAutoScript(37, 5, "");
EventSetAutoScript(37, 6, "");
EventSetAutoScript(37, 7, "");
EventSetDirFrame(37, 5, 0, 0);
EventSetDirFrame(37, 6, 0, 0);
EventSetDirFrame(37, 7, 0, 0);
EventSetState(602, 0, 0);
EventSetState(603, 2, 0);
EventSetState(604, 0, 0);
EventSetState(591, 0, 0);
EventSetState(592, 0, 0);
EventSetState(593, 0, 0);
EventSetState(594, 0, 0);
EventSetState(595, 0, 0);
EventSetState(597, 2, 0);
EventSetState(598, 2, 0);
EventSetState(599, 2, 0);
EventSetState(600, 2, 0);
SetDlgUpper(64, 0, false);
//林天南：
//贤婿，你来的正好
//告诉我你的生辰、年月
//这位算命先生是我特地请来
//为你和月如合八字的
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//哦．．我是乙丑年腊月十九
//辰时出生的
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//算命先生：
//嗯．．．我算算．．
VideoRestore();
//恭喜老爷，李公子和令千金
//乃是人间双璧、佳偶天成呀！
VideoRestore();
//依二人的八字看来，绝对是
//儿孙满堂、大富大贵
NpcSetDirFrame(3, 0);
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//林天南：
//呵呵呵．．真是太好了！
NpcSetDirFrame(0, 0);
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//林天南：
//阿忠～带先生到帐房取款
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//林忠：
//是．．老爷
FadeOut(0);
EventSetState(575, 0, 0);
EventSetDirFrame(0, 0, 3, 0);
EventSetTriggerMode(0, 0, false, 0);
RoleSetDirFrame(2, 0, 0);
NpcSetDirFrame(0, 0);
VideoUpdate(0, false);
SetDlgUpper(64, 0, false);
//林天南：
//呵呵呵～我太高兴了
//这真是我林家的福气啊！
VideoUpdate(0, false);
SetDlgUpper(64, 0, false);
//林天南：
//贤婿，我们林家人丁单薄
//往后就要靠你和如儿多多替
//我们林家添壮丁啦～哈哈哈！
VideoUpdate(0, false);
MusicStop(0);
EventSetState(582, 2, 0);
SetDlgUpper(0, 0, false);
//丫鬟：
//老爷～老爷！快来人呀！
WaitEventAutoScriptRun(6, false, false);
RoleSetDirFrame(0, 0, 0);
WaitEventAutoScriptRun(10, false, false);
SetDlgLower(64, 0, false);
//林天南：
//冬梅～喳呼什么！？
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//冬梅：
//有妖怪呀！西厢房里有
//妖怪，好可怕啊！！
VideoUpdate(0, false);
SetDlgLower(64, 0, false);
//林天南：
//林忠！快去召集家丁
//切记多带些火把
EventSetDirFrame(35, 6, 2, 0);
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//林忠：
//是．．老爷！
EventSetAutoScript(35, 6, "@2343");
MusicPlay(Music.危机, false, false);
ReplaceAndPause();
//林忠：
//妖怪？竟然敢在林家堡作乱！

['@2299'];
PartySetPos(33, 43, 0);
PartySetRole(1, 0, 0);
RoleSetDirFrame(0, 0, 0);
EventSetAutoScript(38, 6, "@232D");
WaitEventAutoScriptRun(16, false, false);
EventSetState(618, 2, 0);
TogglePaletteTime(false);
WaitEventAutoScriptRun(6, false, false);
SetDlgLower(0, 0, false);
//丫鬟：
//小姐！奴婢四处都找过了
//都没看见赵姑娘
EventSetDirFrame(38, 6, 2, 0);
VideoUpdate(0, false);
SetDlgUpper(23, 0, false);
//林月如：
//叫所有的人都去找，城里找不到
//就到城外去找，翻遍全苏州也要
//把人找回来！
EventSetState(619, 2, 0);
EventSetState(620, 2, 0);
WaitEventAutoScriptRun(16, false, false);
SetDlgUpper(64, 0, false);
//林天南：
//不必了！由她去吧！
SetDlgLower(22, 0, false);
//林月如：
//爹！为什么！
EventSetAutoScript(38, 7, "@2386");
WaitEventAutoScriptRun(24, false, false);
RoleSetDirFrame(3, 0, 0);
WaitEventAutoScriptRun(11, false, false);
SetDlgUpper(64, 0, false);
//林天南：
//你们自己问问冬梅吧！
//是她最先发现妖怪的
EventSetAutoScript(38, 8, "@238C");
WaitEventAutoScriptRun(10, false, false);
SetDlgLower(23, 0, false);
//林月如：
//阿梅，妖怪从哪跑进来的？
//赵姑娘又到哪里去了？
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//冬梅：
//奴婢正在打扫小姐的房间时，
//突然听到赵小姐的惨叫声，就
//急忙赶过来，就看到．．看到
RoleSetDirFrame(2, 0, 0);
VideoUpdate(0, false);
SetDlgLower(5, 0, false);
//李逍遥：
//　你看到什么！
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//冬梅：
//那只蛇妖．．好像是～赵姑娘
SetDlgLower(5, 0, false);
//李逍遥：
//　你．．你胡说！！
VideoUpdate(0, false);
SetDlgLower(23, 0, false);
//林月如：
//阿梅！你怎么可以随便诬赖人
//赵姑娘明明就是被妖怪抓走的
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//冬梅：
//我．．我看到．．它的脸．．
//那个蛇妖的上半身是人身，她
//的面貌很像就是赵姑娘，然后
//突然一阵狂风．．．
VideoUpdate(0, false);
SetDlgLower(5, 0, false);
//李逍遥：
//　我不相信！！
RoleSetDirFrame(3, 0, 0);
VideoUpdate(0, false);
RoleSetDirFrame(0, 0, 0);
VideoUpdate(0, false);
SetDlgLower(5, 0, false);
//李逍遥：
//这件事我自会查清楚，没有
//找到灵儿我是不会回来的！
VideoUpdate(0, false);
EventSetDirFrame(38, 6, 1, 0);
RoleMoveOneStep(-16, 8, 0);
ViewportMove(16, -8, 0);
EventSetDirFrame(38, 6, 0, 0);
RoleMoveOneStep(-16, 8, 0);
ViewportMove(16, -8, 0);
RoleMoveOneStep(-16, 8, 0);
ViewportMove(16, -8, 0);
RoleMoveOneStep(-16, 8, 0);
ViewportMove(16, -8, 0);
RoleMoveOneStep(-16, 8, 0);
ViewportMove(16, -8, 0);
RoleMoveOneStep(-16, 8, 0);
ViewportMove(16, -8, 0);
RoleMoveOneStep(-16, 8, 0);
ViewportMove(16, -8, 0);
RoleMoveOneStep(-16, 8, 0);
ViewportMove(16, -8, 0);
HeroSetSprite(0, Sprite.空空如也, true);
WaitEventAutoScriptRun(6, false, false);
EventSetDirFrame(38, 6, 2, 0);
VideoUpdate(0, false);
SetDlgLower(23, 0, false);
//林月如：
//阿梅！你是不是吓昏头了
//怎么可以胡言乱语，诬赖
//赵姑娘！？
SetDlgUpper(0, 0, false);
//冬梅：
//冬梅就算有天大的胆子
//也不敢欺骗小姐．．
EventSetDirFrame(38, 8, 0, 0);
VideoUpdate(0, false);
SetDlgUpper(64, 0, false);
//林天南：
//哼～真是看走了眼。想不到那
//李逍遥竟然跟蛇妖是一伙的，
//这件事要是传了出去，叫我们
//林家的脸往哪摆？
//如儿！这件婚事就此取消
//林家不屑与邪魔歪道来往
SetDlgLower(22, 0, false);
//林月如：
//我不要！！！既然爹许过婚
//怎可出尔反尔？除了李大哥
//我谁也不嫁！
EventSetAutoScript(38, 6, "@2339");
WaitEventAutoScriptRun(18, false, false);
EventSetState(617, 0, 0);
SetDlgUpper(64, 0, false);
//林天南：
//唉．．女儿大了，留不住了。
FadeOut(0);
EventSetState(618, 0, 0);
EventSetState(619, 0, 0);
EventSetState(620, 0, 0);
HeroSetSprite(0, Sprite.李逍遥, true);
SceneEnter(40);
PartySetPos(50, 61, 1);
ViewportMove(0, 0, -1);
ReplaceAndPause();
SetPaletteTime(0);

['@232D'];
NpcMoveToBlockMutexLock(34, 43, 1, 2);
NpcSetDirFrame(3, 0);
NpcSetFrame(12);
WaitEventAutoScriptRun(3, false, false);
EventSetAutoScript(38, 3, "Event_00021_00024_Auto");
WaitEventAutoScriptRun(12, false, false);
NpcSetDirFrame(3, 0);
WaitEventAutoScriptRun(3, false, false);
NpcMoveToBlockMutexLock(34, 43, 0, 2);
NpcMoveToBlockMutexLock(33, 43, 1, 2);
NpcSetDirFrame(1, 0);

['@2339'];
EventAnimate(Direction.Southwest);
EventWalkOneStep(-1, -1, -12, 6);
EventWalkOneStep(-1, -1, -16, 0);
EventWalkOneStep(-1, -1, -16, 0);
['@233D'];
EventWalkOneStep(-1, -1, -16, 8);
GotoWithNop("@233D", 0);

['@2343'];
NpcMoveToBlock(31, 81, 1, 3);
NpcMoveToBlock(21, 71, 1, 3);
EventSetState(-1, 0, 0);

['@2347'];
NpcSetDirFrame(1, 0);
['@2348'];
EventWalkOneStep(-1, -1, -8, -4);
GotoWithNop("@2348", 0);

['@2386'];
NpcMoveToBlock(33, 41, 0, 3);
NpcSetDirFrame(2, 0);
NpcSetDirFrame(3, 0);

['@238C'];
NpcMoveToBlockMutexLock(34, 42, 0, 2);

['@23A4'];
//丫鬟：
//姑爷您要找小姐吗？
//她在后花园赏月
ReplaceAndPause();
//丫鬟：
//姑爷您好

['@2590'];
NpcMoveToBlock(26, 77, 1, 3);
NpcMoveToBlock(13, 64, 1, 3);
NpcMoveToBlock(25, 52, 1, 3);
NpcMoveToBlock(21, 48, 0, 3);
NpcMoveToBlock(19, 49, 1, 3);
NpcSetDirFrame(3, 0);
EventSetTriggerMode(-1, -1, false, 2);

['@2598'];
NpcMoveToBlock(25, 68, 0, 3);
NpcMoveToBlock(26, 66, 1, 3);
NpcMoveToBlock(23, 63, 1, 3);
NpcSetDirFrame(3, 0);
EventSetTriggerMode(-1, -1, true, 2);

['@259E'];
NpcMoveToBlock(24, 63, 0, 3);
NpcMoveToBlock(26, 65, 1, 3);
NpcMoveToBlock(26, 66, 0, 3);
NpcMoveToBlock(28, 68, 1, 3);
NpcMoveToBlock(27, 70, 0, 3);
NpcMoveToBlock(30, 73, 1, 3);
NpcMoveToBlock(26, 78, 0, 3);
NpcMoveToBlock(14, 66, 0, 3);
NpcMoveToBlock(27, 52, 1, 3);
NpcMoveToBlock(25, 50, 1, 3);
NpcMoveToBlock(24, 51, 1, 3);
NpcMoveToBlock(23, 50, 0, 3);
NpcMoveToBlock(18, 54, 1, 3);
NpcSetDirFrame(2, 0);
EventSetTriggerMode(-1, -1, false, 2);

['@25AE'];
NpcMoveToBlock(26, 52, 1, 3);
NpcMoveToBlock(23, 49, 1, 3);
NpcMoveToBlock(22, 50, 1, 3);
NpcMoveToBlock(21, 49, 0, 3);
NpcSetDirFrame(2, 0);
EventSetTriggerMode(-1, -1, false, 2);

['@25B5'];
NpcMoveToBlock(24, 50, 0, 3);
NpcMoveToBlock(23, 50, 1, 3);
NpcMoveToBlock(22, 49, 1, 3);
NpcSetDirFrame(3, 0);
EventSetTriggerMode(-1, -1, false, 2);

['@25BE'];
EventSetTriggerMode(-1, -1, false, 0);
EventSetState(-1, 1, 0);
PlaySound(155);
NpcSetFrame(1);
WaitEventAutoScriptRun(2, false, false);
NpcSetFrame(2);
WaitEventAutoScriptRun(2, false, false);
NpcSetFrame(3);

['@25E4'];
SceneEnter(58);
PartySetPos(46, 114, 0);
FadeOut(0);

['@2659'];
NpcMoveToBlock(27, 90, 0, 3);
NpcMoveToBlock(25, 88, 1, 3);
NpcMoveToBlock(26, 88, 0, 3);
NpcMoveToBlock(24, 86, 1, 3);
EventSetState(-1, 0, 0);

['@2661'];
//村民：
//嗯．．今天天气不错
//是钓鱼的好日子
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//这位大叔，我的一位朋友
//生病需要活鲤鱼作药引
//可否向您借一下钓具？
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//村民：
//喔．．好啊
EventSetState(878, 0, 0);
VideoUpdate(0, false);
AddItem(224, 0);
Replace();
//村民：
//用完记得要还我喔

['@2675'];
SetDlgLower(0, 0, false);
//李逍遥：
//钓竿还您，谢谢！
RemoveItem(224, 0, "");
ReplaceAndPause();
//村民：
//钓鱼可以修身养性
//是项不错的休闲娱乐

['@26DF'];
FadeOut(0);
HeroSetSprite(0, Sprite.垂钓李逍遥, false);
PartySetRole(1, 0, 0);
RoleSetDirFrame(0, 0, 0);
PartySetPos(7, 91, 0);
WaitEventAutoScriptRun(8, false, false);
RoleSetDirFrame(0, 1, 0);
WaitEventAutoScriptRun(2, false, false);
RoleSetDirFrame(0, 2, 0);
WaitEventAutoScriptRun(2, false, false);
RoleSetDirFrame(0, 3, 0);
WaitEventAutoScriptRun(2, false, false);
RoleSetDirFrame(0, 4, 0);
WaitEventAutoScriptRun(2, false, false);
RoleSetDirFrame(0, 5, 0);
WaitEventAutoScriptRun(2, false, false);
RoleSetDirFrame(0, 4, 0);
WaitEventAutoScriptRun(2, false, false);
RoleSetDirFrame(0, 5, 0);
WaitEventAutoScriptRun(2, false, false);
RoleSetDirFrame(0, 6, 0);
WaitEventAutoScriptRun(5, false, false);
RoleSetDirFrame(0, 7, 0);
WaitEventAutoScriptRun(2, false, false);
RoleSetDirFrame(0, 8, 0);
WaitEventAutoScriptRun(2, false, false);
RoleSetDirFrame(0, 9, 0);
WaitEventAutoScriptRun(2, false, false);
RoleSetDirFrame(0, 10, 0);
WaitEventAutoScriptRun(2, false, false);
RoleSetDirFrame(0, 11, 0);
WaitEventAutoScriptRun(2, false, false);
RoleSetDirFrame(0, 12, 0);
WaitEventAutoScriptRun(2, false, false);
RoleSetDirFrame(0, 13, 0);
WaitEventAutoScriptRun(2, false, false);
RoleSetDirFrame(0, 14, 0);
WaitEventAutoScriptRun(2, false, false);
RoleSetDirFrame(0, 15, 0);
WaitEventAutoScriptRun(2, false, false);
RoleSetDirFrame(0, 16, 0);
WaitEventAutoScriptRun(40, false, false);
EventSetState(820, 0, 0);
RoleSetDirFrame(0, 17, 0);
WaitEventAutoScriptRun(2, false, false);
RoleSetDirFrame(0, 18, 0);
WaitEventAutoScriptRun(2, false, false);
RoleSetDirFrame(0, 17, 0);
WaitEventAutoScriptRun(10, false, false);
RoleSetDirFrame(0, 18, 0);
WaitEventAutoScriptRun(2, false, false);
RoleSetDirFrame(0, 17, 0);
WaitEventAutoScriptRun(6, false, false);
RoleSetDirFrame(0, 18, 0);
WaitEventAutoScriptRun(2, false, false);
RoleSetDirFrame(0, 19, 0);
WaitEventAutoScriptRun(2, false, false);
RoleSetDirFrame(0, 20, 0);
WaitEventAutoScriptRun(2, false, false);
RoleSetDirFrame(0, 21, 0);
WaitEventAutoScriptRun(2, false, false);
RoleSetDirFrame(0, 22, 0);
WaitEventAutoScriptRun(2, false, false);
RoleSetDirFrame(0, 23, 0);
WaitEventAutoScriptRun(2, false, false);
RoleSetDirFrame(0, 24, 0);
WaitEventAutoScriptRun(2, false, false);
RoleSetDirFrame(0, 25, 0);
WaitEventAutoScriptRun(2, false, false);
RoleSetDirFrame(0, 26, 0);
WaitEventAutoScriptRun(0, false, false);
SetDlgBox(0);
//钓到一条鲤鱼
FadeOut(0);
AddItem(222, 0);
EventSetTriggerScript(52, 7, "@2675");
HeroSetSprite(0, Sprite.李逍遥, true);
RoleSetDirFrame(0, 0, 0);
EventSetState(-1, 0, 0);
PartySetPos(8, 87, 1);

['@27AC'];
NpcMoveToBlockMutexLock(46, 39, 0, 2);
NpcMoveToBlockMutexLock(38, 46, 1, 2);
NpcMoveToBlockMutexLock(34, 42, 1, 2);
ReplaceAndPauseWithNop("Event_00002_00020_Auto", 0);

['@2805'];
EventSetState(798, 2, 0);
EventSetState(799, 2, 0);
EventSetTriggerScript(52, 7, "@2661");
SetDlgUpper(0, 0, false);
//煎药童子：
//需要药材"人参"、"雪莲子"
//"何首乌"、"银杏子"、"鹿茸"
//外加一条活的"鲤鱼"
SetDlgLower(0, 0, false);
//李逍遥：
//活鲤鱼！？
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//煎药童子：
//没错！这付药方要活鲤鱼
//的肝作药引才有疗效
VideoUpdate(0, false);
SetDlgUpper(21, 0, false);
//林月如：
//我们分头去弄这些药材
//人参、雪莲子、何首乌
//这三样药材我可以弄的到
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//好！　其它的三项我来想办法
SetDlgUpper(21, 0, false);
//林月如：
//正午之前我会赶回来
FadeOut(0);
HeroSetSprite(0, Sprite.空空如也, false);
PartySetRole(1, 0, 0);
RoleSetDirFrame(0, 0, 0);
SceneSetScript(54, "@29A3", "");
SceneEnter(54);
ReplaceAndPause();
['@2829'];
SetDlgUpper(0, 0, false);
//煎药童子：
//你听好："人参" "雪莲子" "何首乌"
//"银杏子" "鹿茸" "鲤鱼"
VideoUpdate(0, false);
JumpIfItemCountLessThan(221, 1, "@2853");
JumpIfItemCountLessThan(223, 1, "@2858");
JumpIfItemCountLessThan(222, 1, "@2858");
//嗯．．这下药材都齐全了
//你再等一下，药马上就煎好
FadeOut(0);
WaitEventAutoScriptRun(0, false, false);
RemoveItem(221, 0, "");
RemoveItem(223, 0, "");
RemoveItem(222, 0, "");
AddItem(226, 0);
//让病人服下这帖六神丹
//要趁热喝喔！
EventSetAutoScript(54, 3, "Event_00002_00020_Auto");
EventSetAutoScript(54, 6, "");
EventSetDirFrame(54, 6, 1, 0);
EventSetTriggerScript(54, 3, "@298B");
EventSetTriggerScript(54, 6, "@298F");
EventSetPos(54, 3, 1392, 584);
EventSetPos(54, 6, 1456, 616);
EventSetState(888, 0, 0);
PartySetRole(1, 3, 0);
ReplaceAndPause();
//煎药童子：
//六神丹乃我韩家祖传秘方．．
//药性温和、滋补强身，对贫血
//伤风、气虚等极俱神效。妇女
//服用，还有调血、安胎之疗效
VideoUpdate(0, false);
Replace();
//煎药童子：
//你们还要别的药方吗？
//方圆百里之内，就我们
//韩家药铺是最出名的。
VideoUpdate(0, false);
ShowBuyItemMenu(8);

['@2853'];
//煎药童子：
//屋后院子里有一棵银杏果树
//摘一颗果子便足够了
ReplaceAndPauseWithNop("@2829", 0);

['@2858'];
//煎药童子：
//鹿茸和鲤鱼肝是很珍贵的
//这两种药材也都缺货啊
ReplaceAndPauseWithNop("@2829", 0);

['@2889'];
NpcMoveToBlock(17, 55, 0, 8);
NpcMoveToBlock(18, 54, 0, 3);
NpcSetDirFrame(3, 0);
EventSetTriggerMode(-1, -1, true, 3);

['@288E'];
NpcMoveToBlock(8, 43, 0, 8);
NpcMoveToBlock(15, 36, 0, 8);
NpcMoveToBlock(20, 40, 1, 8);
NpcMoveToBlock(29, 31, 1, 8);
EventSetTriggerMode(-1, -1, true, 4);

['@2894'];
NpcMoveToBlock(28, 30, 1, 3);
NpcMoveToBlock(31, 27, 1, 8);
NpcMoveToBlock(38, 34, 0, 8);
EventSetTriggerMode(-1, -1, true, 4);

['@2899'];
NpcMoveToBlock(37, 34, 1, 3);
NpcMoveToBlock(34, 31, 1, 8);
NpcMoveToBlock(36, 30, 0, 8);
NpcMoveToBlock(34, 28, 0, 8);
NpcMoveToBlock(35, 26, 1, 8);
NpcMoveToBlock(34, 25, 0, 8);
EventSetTriggerMode(-1, -1, true, 4);

['@28A1'];
NpcMoveToBlock(39, 20, 0, 8);
NpcMoveToBlock(42, 23, 0, 8);
NpcMoveToBlock(43, 21, 1, 8);
NpcMoveToBlock(42, 20, 0, 8);
NpcMoveToBlock(40, 22, 0, 8);
NpcMoveToBlock(38, 20, 0, 8);
EventSetTriggerMode(-1, -1, true, 3);

['@28A9'];
NpcMoveToBlock(24, 33, 1, 8);
NpcMoveToBlock(26, 35, 0, 8);
NpcMoveToBlock(24, 36, 1, 8);
NpcMoveToBlock(29, 41, 1, 8);
NpcMoveToBlock(36, 34, 1, 8);
NpcMoveToBlock(37, 35, 0, 3);
EventSetTriggerMode(-1, -1, true, 4);

['@28BB'];
EventSetAutoScript(49, 8, "");
EventSetTriggerScript(49, 8, "@28C1");
EventSetTriggerMode(49, 8, false, 1);
EventSetDirFrame(49, 8, 0, 16);
PlaySound(14);

['@28C1'];
SetDlgLower(0, 0, false);
//李逍遥：
//鹿兄啊～鹿兄！对不起啦
//我的朋友生了病，所以借你头
//上的角来入药，不会伤你性命
AddItem(223, 0);
FadeOut(0);
EventSetDirFrame(49, 8, 1, 0);
EventSetAutoScript(49, 8, "@28D0");
WaitEventAutoScriptRun(12, false, false);
EventSetState(797, 0, 0);
SetDlgBox(0);
//取得鹿茸后，放鹿逃走
EventSetState(888, 2, 0);

['@28D0'];
EventWalkOneStep(-1, -1, -8, -4);
EventWalkOneStep(-1, -1, -11, -5);
EventWalkOneStep(-1, -1, -13, -7);
['@28D3'];
EventWalkOneStep(-1, -1, -16, -8);
GotoWithNop("@28D3", 0);

['@28D9'];
VideoUpdate(0, false);
SetDlgBox(0);
//让赵灵儿饮下药汤
MusicStop(1);
FadeOut(3);
MusicPlay(Music.白河寒秋, false, false);
SceneSetScript(50, "@2B66", "");
NpcSetDirFrame(0, 1);
VideoUpdate(0, true);
SetDlgUpper(19, 0, false);
//赵灵儿：
//逍遥哥哥．．你们．．
VideoUpdate(0, false);
SetDlgLower(3, 0, false);
//李逍遥：
//啊～你还不要起来
//乖乖的躺着休息
VideoUpdate(0, false);
SetDlgUpper(65, 0, false);
//韩医仙：
//呵．．没关系
//赵姑娘已经可以下床走动了
EventSetState(-1, 0, 0);
PartySetPos(44, 37, 1);
PartySetRole(1, 2, 3);
RoleSetDirFrame(1, 0, 1);
RoleSetDirFrame(0, 0, 0);
EventSetDirFrame(54, 3, 3, 0);
EventSetAutoScript(54, 3, "");
EventSetDirFrame(54, 6, 1, 0);
FadeOut(0);
WaitEventAutoScriptRun(0, false, false);
SetDlgLower(11, 0, false);
//赵灵儿：
//我想留下来，以我的法术多少
//可以帮韩大夫医治一些村民
VideoUpdate(0, false);
SetDlgUpper(65, 0, false);
//韩医仙：
//这附近一带的村子饱受尸妖肆
//孽，能搬走的人早就都走了，
//本村幸有河水阻隔，才暂时得
//以安泰。三位既不是本地人，
//老夫劝你们还是早点离开吧。
SetDlgLower(11, 0, false);
//赵灵儿：
//不．．看到村民们遭受这般苦
//难，我觉得．．我应该替村民
//们做点事，以报答医仙的恩情
VideoUpdate(0, false);
SetDlgUpper(65, 0, false);
//赵姑娘这般慈悲心肠
//老夫实在太感激了．．
RoleSetDirFrame(1, 0, 0);
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//光是医人也不能解决问题吧！
//尸妖一日不除，这里的居民还
//是永无宁日。大家何不想个办
//法来把尸妖除掉？
VideoUpdate(0, false);
SetDlgUpper(65, 0, false);
//韩医仙：
//唉．．谈何容易。尸妖不同于
//其它妖怪。他们刀枪不侵、水
//火不入，更可怕的是会放尸毒
//一旦毒气攻心，老夫也医不活
//以前只有在没有月光的夜晚才
//会出现，到了最近，在大白天
//都会四处横行。再这样下去，
//连这白河村也不能住人了
SetDlgLower(1, 0, false);
//李逍遥：
//您身为村长怎可说这般丧气话
//天下一物降一物，妖怪也不例
//外。我不相信没人能治得了那
//些尸妖
VideoUpdate(0, false);
SetDlgLower(50, 0, false);
//韩梦慈：
//我知道有个人能对付尸妖！
RoleSetDirFrame(3, 0, 0);
WaitEventAutoScriptRun(2, false, false);
RoleSetDirFrame(3, 0, 1);
VideoUpdate(0, false);
SetDlgUpper(1, 0, false);
//李逍遥：
//哦！韩姑娘知道？
VideoUpdate(0, false);
SetDlgLower(50, 0, false);
//韩梦慈：
//大约一个月前"玉佛寺"的主持
//智修大师曾驱退一群尸妖，救
//了江家的三位公子的命，後来
//三兄弟还一起出家成为智修大
//师门下弟子。据说这件事之后
//尸妖都不敢再靠近玉佛寺
RoleSetDirFrame(0, 0, 0);
VideoUpdate(0, false);
SetDlgUpper(3, 0, false);
//李逍遥：
//那好极了，我们这就去请
//玉佛寺的和尚下山收妖！
VideoUpdate(0, false);
SetDlgLower(51, 0, false);
//韩梦慈：
//不．．但是．．你．．
//还是打消这念头。因为．．
SetDlgUpper(65, 0, false);
//韩医仙：
//梦慈～让爹来说吧．．
RoleSetDirFrame(1, 0, 0);
EventSetDirFrame(54, 6, 2, 0);
VideoUpdate(0, false);
RoleSetDirFrame(2, 0, 1);
EventSetDirFrame(54, 6, 3, 0);
VideoUpdate(0, false);
SetDlgUpper(65, 0, false);
//韩医仙：
//坦白说．．老夫也曾派人去请
//智修大师下山，但是．．至今
//见过主持方丈的人，没有一个
//人回来
SetDlgLower(1, 0, false);
//李逍遥：
//不会吧．．．
//难不成那些和尚会吃人！？
VideoUpdate(0, false);
SetDlgUpper(65, 0, false);
//韩医仙：
//当然不．．而是都当了和尚
WaitEventAutoScriptRun(2, false, false);
RoleSetDirFrame(3, 0, 0);
WaitEventAutoScriptRun(4, false, false);
RoleSetDirFrame(0, 0, 0);
WaitEventAutoScriptRun(0, false, false);
SetDlgLower(1, 0, false);
//李逍遥：
//也许．．
//那位大师真的是佛法无边
VideoUpdate(0, false);
SetDlgUpper(65, 0, false);
//韩医仙：
//不．．少侠且听我说
RoleSetDirFrame(1, 0, 0);
VideoUpdate(0, false);
RoleSetDirFrame(1, 0, 1);
VideoUpdate(0, false);
SetDlgUpper(65, 0, false);
//韩医仙：
//小女梦慈和江家大公子少云自
//幼就订了亲的，两人感情一向
//很好。前不久两家才说好，等
//到梦慈满十六岁就要来下聘。
//一个月前老夫听说玉佛寺的智
//修大师法力高深，于是想请他
//下山除妖。少云和二个弟弟便
//自告奋勇前往，结果一去不返
//老夫和小女多次前往查问，才
//知道兄弟三人都出家当了和尚
//这件事至今仍令人想不透．．
VideoUpdate(0, false);
RoleSetDirFrame(0, 0, 0);
WaitEventAutoScriptRun(4, false, false);
RoleSetDirFrame(2, 0, 1);
WaitEventAutoScriptRun(4, false, false);
SetDlgLower(1, 0, false);
//李逍遥：
//听起来．．这村子的
//灾难还真不少．．
EventSetTriggerScript(54, 3, "@2993");
EventSetTriggerScript(54, 6, "@2997");
EventModifyPos(50, 14, 0, 32);
EventSetTriggerScript(50, 14, "@2A5B");
EventSetState(815, 0, 0);
EventSetState(816, 0, 0);

['@298B'];
SetDlgUpper(65, 0, false);
//韩医仙：
//快让赵姑娘服药吧

['@298F'];
SetDlgUpper(50, 0, false);
//韩梦慈：
//辛苦你们了．．

['@2993'];
//韩医仙：
//呵～不必客气
//此乃我行医者本份

['@2997'];
//韩梦慈：
//如果你们还需要别的药材
//可以找我弟弟阿宝

['@29A3'];
PartySetPos(45, 36, 0);
EventSetDirFrame(54, 2, 0, 1);
EventSetDirFrame(54, 3, 3, 0);
WaitEventAutoScriptRun(6, false, false);
EventSetDirFrame(54, 3, 2, 0);
VideoUpdate(0, false);
SetDlgLower(65, 0, false);
//韩医仙：
//赵姑娘．．．恕老夫多言
//他二人对你颇为关心
//姑娘为何避不见面呢？
VideoUpdate(0, false);
SetDlgUpper(15, 0, false);
//赵灵儿：
//我．．
//不想让他们知道这件事
SetDlgLower(65, 0, false);
//韩医仙：
//好吧．．你放心
//老夫会继续替你瞒着其他人
VideoUpdate(0, false);
SetDlgLower(65, 0, false);
//韩医仙：
//唉～　但是．．
//你一个未出嫁的姑娘，就．．
//加上身子又很虚弱，若没有人
//照顾，往后的日子怎么过呢？
VideoUpdate(0, false);
SetDlgUpper(17, 0, false);
//赵灵儿：
//大夫．．．．
SetDlgLower(65, 0, false);
//韩医仙：
//你先在我这里养好身子
//这些日子里再好好想想吧
VideoUpdate(0, false);
SetDlgLower(65, 0, false);
//韩医仙：
//老夫看人是不会错的
//李少侠～不会是个薄情之人
EventSetAutoScript(54, 3, "@27AC");
EventSetDirFrame(54, 2, 0, 0);
FadeOut(0);
SceneEnter(53);
PartySetPos(28, 56, 0);
HeroSetSprite(0, Sprite.李逍遥, true);
RoleSetDirFrame(3, 0, 0);
ReplaceAndPause();

['@2A35'];
//苗人：
//来者何人？报上名来！
VideoUpdate(0, false);
SetDlgLower(11, 0, false);
//赵灵儿：
//我就是赵灵儿
//你们快将梦慈姐姐放了
VideoUpdate(0, false);
//苗人：
//是～赵小姐请随小人来
//我们长老已恭候多时了
//至于其他人．．就请回去吧
VideoUpdate(0, false);
SetDlgLower(5, 0, false);
//李逍遥：
//岂有此理，通通给我让开！
//本少爷要过去，谁也别想
//拦住我！
VideoUpdate(0, false);
//苗人：
//哼～擅闯者、杀无赦！
Dos_SetBattlefield(FbpDos.片尾_林月如);
BattleStart(33, "", "");
EventSetState(935, 0, 0);
EventSetState(936, 0, 0);

['@2A5B'];
//守桥壮丁：
//过了此桥往西北走便是"玉佛寺"
//往东北方是"黑水镇"，那里闹
//尸妖闹得很凶，已经没住人了
VideoUpdate(0, false);
//往西南方是"鬼阴山"，从前是
//自称鬼阴帮的山贼贼窟。
//山贼被赶跑后，最近出现了一
//群来路不明的苗人，杀人不眨
//眼，比山贼还可怕，你们最好
//不要随便靠近那一带

['@2A97'];
//韩梦慈：
//　　谢谢你们

['@2A9A'];
//韩医仙：
//　　谢谢你们

['@2B04'];
VideoUpdate(0, false);
//伙计：
//没钱买就走开
//还有很多人在排队呢！
ReplaceAndPause();
['Event_00051_00003_Trigger'];
//伙计：
//买糯米吗？一包１００文钱
GotoWithSelect("@2B04");
CashModify(-100, "@2B04");
AddItem(15, 0);

['@2B27'];
//骆家伙计：
//这下可惨了，没人要买糯米了。

['@2B2A'];
//骆家总管：
//哇．．还一堆存货没卖完呢

['@2B2D'];
//骆员外：
//都是你们害的啦！
//这下子我可赔老本了
ReplaceAndPause();
//骆员外：
//呜．．．这堆糯米要等到
//端午节包粽子时才有人买了

['@2B35'];
//守桥壮丁：
//你们真的消灭尸妖了？
SetDlgLower(1, 0, false);
//李逍遥：
//是的
VideoUpdate(0, false);
//守桥壮丁：
//哗～真厉害！
//大家知道这个好消息
//一定很高兴
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//我想～也该向韩大夫辞行了
ReplaceAndPause();
//守桥壮丁：
//太好了，我终于可以放假了

['@2B47'];
//居民：
//小兄弟，看不出你年纪轻轻
//身手如此矫健，打败了尸妖。
ReplaceAndPause();
//居民：
//我们白河村终于恢复
//了往日的安宁。

['@2B4F'];
//居民：
//哈！我果然没有看错人
//您一进村子，我就感觉
//您器宇非凡、深藏不露、
//出类拔萃、气盖山河··
ReplaceAndPause();
//居民：
//其实我是不想出手而已，
//要不然、哪有你说话的份。

['@2B59'];
//居民：
//感谢您的大恩大德，我们白
//河村的百姓们无以回报。

['@2B5D'];
//居民：
//大侠，雕一尊像吧。
//我们好天天拜着你！

['@2B66'];
MusicPlay(Music.白河寒秋, false, false);

['@2BD5'];
NpcMoveToBlock(38, 65, 0, 3);

['@2BD7'];
NpcMoveToBlock(34, 69, 0, 8);

['@2BD9'];
NpcSetDirFrame(1, 0);
NpcMoveToBlock(38, 65, 0, 3);
EventSetState(-1, 0, 0);

['@2C73'];
NpcMoveToBlock(42, 53, 0, 3);
NpcMoveToBlock(44, 51, 0, 3);
NpcSetDirFrame(3, 0);
WaitEventAutoScriptRun(2, false, false);
NpcMoveToBlock(45, 50, 0, 3);
NpcMoveToBlock(31, 36, 1, 8);
EventSetState(-1, 0, 0);

['@2C83'];
NpcMoveToBlock(24, 62, 0, 3);
NpcMoveToBlock(22, 60, 0, 3);
NpcMoveToBlock(27, 55, 0, 3);

['@2E20'];
EventAnimate(Direction.Southeast);
GotoWithNop("@2E20", 0);

['@2E58'];
Call("@8E3B", 0, 0);
SceneEnter(61);
PartySetPos(42, 95, 1);
FadeOut(0);

['@2ED7'];
RoleMoveOneStep(16, -8, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(16, -8, 0);
WaitEventAutoScriptRun(0, false, false);
SetDlgCenter(0, false);
//一股强大的阴气迎面扑来
//逼得众人倒退数步

['@30E3'];
RoleSetDirFrame(2, 0, 0);
RoleMoveOneStep(10, -10, 1);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(6, -6, 2);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(10, -10, 3);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(6, -6, 4);
WaitEventAutoScriptRun(0, false, false);

['@3271'];
NpcMoveToBlock(37, 61, 1, 3);
NpcSetDirFrame(2, 0);

['@3327'];
SceneEnter(91);
PartySetPos(25, 76, 1);
FadeOut(0);

['@345D'];
WaitEventAutoScriptRun(3, false, false);
NpcMoveToBlockMutexLock(1, 90, 0, 2);
EventSetState(-1, 0, 0);

['@3479'];
NpcMoveToBlock(24, 39, 0, 8);
NpcMoveToBlock(25, 40, 0, 8);
NpcMoveToBlock(25, 39, 1, 8);
NpcMoveToBlock(40, 53, 1, 8);
EventSetState(-1, 0, 0);

['@3487'];
NpcMoveToBlock(22, 16, 1, 8);
NpcMoveToBlock(15, 9, 0, 8);
EventSetTriggerMode(-1, -1, true, 2);

['@348B'];
NpcMoveToBlock(32, 26, 0, 8);
NpcMoveToBlock(35, 22, 1, 3);
WaitEventAutoScriptRun(2, false, false);
NpcSetFrame(16);

['@34AF'];
NpcSetFrame(4);
ReplaceAndPause();
NpcSetFrame(5);
ReplaceAndPause();
NpcSetFrame(6);
NpcSetFrame(7);
ReplaceAndPause();
NpcSetFrame(8);
WaitEventAutoScriptRun(5, false, false);
['@34B8'];
ReplaceAndPause();
GotoWithProbability(30, "@34B8");
NpcSetFrame(9);
ReplaceAndPause();
NpcSetFrame(10);
WaitEventAutoScriptRun(9, false, false);
GotoWithProbability(16, "@34B8");
EventSetTriggerMode(-1, -1, false, 2);
ReplaceAndPauseWithNop("Event_00083_00024_Auto", 0);

['@34C9'];
NpcSetFrame(2);
ReplaceAndPause();
NpcSetFrame(0);
ReplaceAndPause();
NpcSetFrame(3);
ReplaceAndPause();
NpcSetFrame(0);
NpcSetFrame(4);
WaitEventAutoScriptRun(11, false, false);
NpcSetFrame(5);
ReplaceAndPause();
NpcSetFrame(6);
['@34D5'];
NpcSetFrame(7);
GotoWithProbability(25, "@34D5");
WaitEventAutoScriptRun(3, false, false);
NpcSetFrame(8);
WaitEventAutoScriptRun(2, false, false);
GotoWithProbability(20, "@34D5");
WaitEventAutoScriptRun(4, false, false);
NpcSetFrame(9);
WaitEventAutoScriptRun(10, false, false);
GotoWithProbability(16, "@34D5");
EventSetTriggerMode(-1, -1, false, 2);
ReplaceAndPauseWithNop("Event_00083_00025_Auto", 0);

['@3523'];
NpcMoveToBlockMutexLock(15, 25, 0, 2);
NpcSetDirFrame(2, 0);

['@35CB'];
NpcMoveToBlock(15, 29, 0, 3);
NpcSetDirFrame(0, 0);

['@35CE'];
NpcMoveToBlock(11, 33, 0, 8);
EventSetState(-1, 0, 0);

['@3606'];
NpcSetFrame(12);
['@3607'];
EventModifyPos(-1, -1, -6, -12);
GotoWithNop("@3607", 0);

['@362E'];
NpcMoveToBlock(34, 23, 1, 8);
NpcSetFrame(13);
PlaySound(45);
EventModifyPos(-1, -1, -20, 8);
EventModifyPos(-1, -1, -16, 8);
EventModifyPos(-1, -1, -12, 8);
EventModifyPos(-1, -1, -8, 10);
EventModifyPos(-1, -1, -4, 12);
EventModifyPos(-1, -1, 0, 14);
EventModifyPos(-1, -1, 0, 16);
EventSetState(-1, 0, 0);

['@36C8'];
RoleSetDirFrame(3, 0, 0);
VideoUpdate(0, false);
SetDlgUpper(2, 0, false);
//李逍遥：
//月如！你爬那么高干嘛
EventSetDirFrame(85, 42, 1, 0);
VideoUpdate(0, false);
SetDlgLower(22, 0, false);
//林月如：
//　　你管我！
EventSetAutoScript(85, 42, "@3785");
WaitEventAutoScriptRun(8, false, false);
RoleSetDirFrame(2, 0, 0);
WaitEventAutoScriptRun(6, false, false);
RoleSetDirFrame(1, 0, 0);
ReplaceAndPause();

['@36E7'];
//古董商：
//呜．．我的行李被偷了
//我的财产全在里面呀！
ReplaceAndPause();
//我的金元宝．．古董．．
//呜．．这下子我破产了！
ReplaceAndPauseWithNop("@36E7", 0);

['@36EF'];
RemoveItem(211, 0, "");
//古董商：
//啊～太好了！
EventSetAutoScript(-1, -1, "@372F");
WaitEventAutoScriptRun(4, false, false);
EventSetState(1784, 1, 0);
WaitEventAutoScriptRun(4, false, false);
EventSetDirFrame(98, 5, 0, 1);
WaitEventAutoScriptRun(6, false, false);
//古董商：
//咦．．？　怎么少了一样
EventSetAutoScript(-1, -1, "@3731");
WaitEventAutoScriptRun(5, false, false);
VideoUpdate(0, false);
//古董商：
//我的"紫金葫芦"呢？
//是不是你们偷藏起来了
//你们跟飞贼是不是一伙的！
VideoUpdate(0, false);
SetDlgLower(23, 0, false);
//林月如：
//是我们冒着生命危险才把你的
//东西抢回来的，你不但不感激
//反而诬赖起我们来了！？
VideoUpdate(0, false);
SetDlgLower(2, 0, false);
//李逍遥：
//这位员外，我们若是真的拿
//了你的葫芦，又何必把这包
//东西还你！？
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//古董商：
//那紫金葫芦可是我花了大半
//辈子的积蓄才弄到手的！
VideoRestore();
//不．．我要去报官
//对～报官！
EventSetDirFrame(98, 4, 1, 0);
EventSetAutoScript(-1, -1, "@3734");
WaitEventAutoScriptRun(13, false, false);
RoleSetDirFrame(0, 0, 0);
WaitEventAutoScriptRun(2, false, false);
RoleSetDirFrame(0, 0, 1);
WaitEventAutoScriptRun(15, false, false);
SetDlgUpper(22, 0, false);
//林月如：
//真是好心没好报
//这种人被偷光了活该！
SetDlgLower(1, 0, false);
//李逍遥：
//如妹！　算了．．
//我看咱们是中了那女飞贼的
//计了，那位员外少的宝物一
//定是在那女飞贼的手中
//我们抢回来的，只是其它
//无关紧要的东西
VideoUpdate(0, false);
SetDlgUpper(23, 0, false);
//林月如：
//我们岂不是白忙一场！？
EventSetState(1650, 0, 0);
EventSetStateSequence(90, 3, 11, 2);

['@372F'];
NpcMoveToBlock(43, 24, 1, 3);

['@3731'];
NpcMoveToBlock(44, 25, 0, 3);
NpcSetDirFrame(0, 0);

['@3734'];
NpcMoveToBlock(43, 24, 1, 3);
EventSetState(1784, 0, 0);
ReplaceAndPause();
ReplaceAndPause();
NpcMoveToBlock(40, 28, 0, 3);
EventSetState(-1, 0, 0);

//母亲
EventSetAutoScript(-1, -1, "Event_00085_00033_Auto");
EventSetAutoScript(85, 34, "@345D");

//小孩

['@3785'];
NpcMoveToBlock(38, 26, 0, 8);
NpcMoveToBlock(32, 20, 0, 8);
NpcMoveToBlock(30, 22, 0, 8);
NpcMoveToBlock(16, 8, 0, 8);
NpcMoveToBlock(13, 11, 0, 8);
NpcSetDirFrame(2, 0);

['@37D5'];
NpcMoveToBlock(10, 14, 0, 8);
NpcMoveToBlock(11, 15, 0, 8);

['@37EA'];
NpcMoveToBlock(10, 14, 0, 8);
NpcMoveToBlock(13, 12, 0, 8);
NpcSetDirFrame(3, 0);

['@37FB'];
//掌柜：
//抓到女飞贼了吗？
ReplaceAndPause();
//唉～那女飞贼狡猾的很
//在城里干了几件大案子
//都从未失手，还弄得衙门
//灰头土脸的

['@38D9'];
MusicStop(0);
PartySetPos(17, 18, 0);
RoleSetDirFrame(3, 0, 0);
WaitEventAutoScriptRun(4, false, false);
RoleSetDirFrame(0, 0, 0);
WaitEventAutoScriptRun(5, false, false);
RoleSetDirFrame(3, 0, 0);
VideoUpdate(0, false);
//官差：
//有人密报女飞贼在此藏匿赃物
//果然人赃俱获！
VideoRestore();
//通通给我拿下！
EventModifyPos(85, 21, -32, -16);
EventModifyPos(85, 26, 16, -8);
EventSetAutoScript(85, 21, "Event_00006_00014_Auto");
EventSetAutoScript(85, 26, "Event_00023_00016_Auto");
EventSetState(1595, 0, 0);
EventSetState(1596, 0, 0);
EventSetState(1597, 0, 0);
EventSetState(1598, 0, 0);
SceneEnter(82);
FadeOut(0);
ReplaceAndPause();

['@38F2'];
VideoUpdate(0, false);
//有钱好办事．没钱免谈！
ReplaceAndPause();
['@38F5'];
//衙役：
//要探监吗？先缴１００文钱
GotoWithSelect("@38F2");
CashModify(-100, "@38F2");
VideoUpdate(0, false);
//衙役：
//请吧！
EventSetAutoScript(85, 11, "@3904");
EventSetAutoScript(85, 12, "@3908");
EventSetTriggerScript(85, 12, "@3901");
EventSetTriggerScript(85, 12, "@3901");
ReplaceAndPause();
['@3901'];
//衙役：
//还有事吗？

['@3904'];
NpcMoveToBlockMutexLock(44, 59, 0, 2);
NpcSetDirFrame(3, 0);
NpcSetDirFrame(0, 0);

['@3908'];
NpcMoveToBlockMutexLock(42, 60, 1, 2);
NpcSetDirFrame(3, 0);
NpcSetDirFrame(2, 0);

['@396C'];
NpcSetDirFrame(1, 0);
EventWalkOneStep(-1, -1, 0, -8);
EventWalkOneStep(-1, -1, -4, -2);
EventWalkOneStep(-1, -1, -4, -2);
EventWalkOneStep(-1, -1, -4, -2);
EventWalkOneStep(-1, -1, -4, -2);

['@3973'];
EventSetState(1543, 2, 0);
EventSetState(1544, 2, 0);
EventSetState(1545, 2, 0);
EventSetState(0, 2, 0);
EventSetState(0, 2, 0);
EventSetState(0, 2, 0);
EventSetState(0, 2, 0);
EventSetState(0, 2, 0);
EventSetState(0, 2, 0);
EventSetState(0, 2, 0);
EventSetState(1741, 0, 0);
EventSetState(1603, 0, 0);
EventSetState(1605, 0, 0);
EventSetState(1608, 0, 0);
EventSetState(1609, 0, 0);
EventSetState(1556, 0, 0);
EventSetState(1557, 0, 0);
EventSetState(1558, 0, 0);
PartySetPos(48, 63, 0);
RoleSetDirFrame(2, 0, 0);
PlaySound(213);
WaitEventAutoScriptRun(10, false, false);
MusicPlay(Music.乐逍遥, false, false);
SetDlgUpper(62, 0, false);
//太守：
//哦？　想不到你这么快
//就把人抓到啦？
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//我早跟您说我们是冤枉的
VideoUpdate(0, false);
SetDlgLower(62, 0, false);
//太守：
//堂前的女子抬起头来
//本官有话要问你。
SetDlgUpper(42, 0, false);
//姬三娘：
//·······
VideoUpdate(0, false);
SetDlgLower(62, 0, false);
//太守：
//大胆刁妇，本官问话
//为何不答？
VideoUpdate(0, false);
SetDlgUpper(42, 0, false);
//姬三娘：
//你在跟我说话？
//我还以为你在唱戏哩
VideoUpdate(0, false);
SetDlgLower(62, 0, false);
//太守：
//大～胆！
//竟敢无视本官的存在
//我看你是活得不耐烦了！
VideoUpdate(0, false);
SetDlgUpper(42, 0, false);
//姬三娘：
//哈哈哈哈！
SetDlgLower(62, 0, false);
//太守：
//住口！死到临头还笑得出来！
VideoUpdate(0, false);
SetDlgUpper(42, 0, false);
//姬三娘：
//我笑自己一念之仁
//那天晚上我到王员外家，撞
//见你跟王家三姨太在后花园
//办好事，没顺手一刀宰了你
//现在倒成了祸害
VideoUpdate(0, false);
SetDlgLower(62, 0, false);
//太守：
//　你···
VideoUpdate(0, false);
SetDlgUpper(3, 0, false);
//李逍遥：
//噗哧！
SetDlgLower(62, 0, false);
//太守：
//笑什么！！不准笑～
VideoUpdate(0, false);
//师爷：
//大．大人，不要跟她一般
//见识，开始问案吧！
SetDlgUpper(62, 0, false);
//太守：
//气．．气死我了！
VideoUpdate(0, false);
SetDlgLower(62, 0, false);
//太守：
//本官问你，去年十月初六城北
//苏府，后花园埋的一缸黄金，
//被换成一缸屎尿，是不是汝等
//所为？
VideoUpdate(0, false);
SetDlgUpper(42, 0, false);
//姬三娘：
//那么久的事，我哪里记得啦？
VideoUpdate(0, false);
SetDlgLower(62, 0, false);
//太守：
//还这么跩，再不招
//休怪本官对你动大刑！
VideoUpdate(0, false);
SetDlgUpper(42, 0, false);
//姬三娘：
//喔～我想起来了，那老头无缘
//无故把一缸黄金埋在那，我们
//以为他不要了嘛！还好心留给
//他一缸肥水好浇花呢。
//各位评评理，咱们够良心了吧。
VideoUpdate(0, false);
SetDlgLower(62, 0, false);
//太守：
//你还有理～好好好！
VideoRestore();
//去年腊月十六，城门口李记
//当铺的银库中五千两银子被盗
//是不是你们所为？
VideoUpdate(0, false);
SetDlgUpper(42, 0, false);
//姬三娘：
//说盗就难听了，当铺不就是
//让人借钱的，咱们不过是借用
//点生活费花花，何况那李老头
//祖先留下那么大家产给他，分
//一点给咱们穷老百姓又死不了
//干嘛那么紧张～
VideoUpdate(0, false);
SetDlgLower(62, 0, false);
//太守：
//你还真罩得住！我再问你！
//今年正月初三扬州首富顾员外
//家中，一万两黄金被窃，也是
//你们所为，是不是？
VideoUpdate(0, false);
SetDlgUpper(42, 0, false);
//姬三娘：
//顾员外不是经常逢人就夸说
//他家的财富吃几十代也吃不
//完，我看他整天数黄金数的
//太累了，帮他分担一点而已
VideoUpdate(0, false);
SetDlgLower(62, 0, false);
//太守：
//住口！寡廉鲜耻之徒
//你们当真没救了！
VideoUpdate(0, false);
SetDlgUpper(42, 0, false);
//姬三娘：
//唉哟～咱们就这么点癖好，也
//给大人您说得没救了，那种晚
//上到后院同别人家老婆相好的
//不死得更快？
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//太守：
//你、你．．师爷．快、快把我
//的心．心肺活气散拿来．．
EventSetAutoScript(82, 3, "@396C");
WaitEventAutoScriptRun(8, false, false);
FadeOut(0);
EventModifyPos(82, 3, 16, 16);
VideoUpdate(0, false);
//师爷：
//大人，您挺着点！
//犯．犯不着同小贼呕气啊．
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//太守：
//唉～呼．．呼．．
//刚才差．差点嗝屁了！
EventSetDirFrame(82, 3, 0, 0);
VideoUpdate(0, false);
SetDlgUpper(42, 0, false);
//姬三娘：
//我说嘛～这种人不短命才怪？
VideoUpdate(0, false);
SetDlgLower(62, 0, false);
//太守：
//大胆～！你再敢胡言乱语
//立刻大刑伺候！！
VideoRestore();
//本官再问你，前些日子本城
//客栈有一位古董商失窃一古董
//，我看跟你也脱不了干系吧！
VideoUpdate(0, false);
SetDlgUpper(42, 0, false);
//姬三娘：
//古董？···我可
//不记得什么古董。
EventSetDirFrame(82, 28, 2, 0);
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//掌柜：
//大人，小的亲眼看见，就是
//她这身打扮偷走房客东西的
//还有、是这两位仗义出手追
//这女飞贼的。
EventSetDirFrame(82, 27, 2, 0);
VideoUpdate(0, false);
//古董商：
//草民没看清楚偷东西的是谁
//但的确是这两位大侠找回
//其余的失物。
VideoUpdate(0, false);
SetDlgLower(62, 0, false);
//太守：
//现在人证物证俱在
//你还有什么话说？！
VideoUpdate(0, false);
SetDlgUpper(42, 0, false);
//姬三娘：
//原来是那个小葫芦！
//我还以为是什么宝贝儿
VideoRestore();
//哈哈哈、出道这么久，干过的
//票子也不少，没想到居然栽在
//一个葫芦上，只道气数已尽，
//怨不得人呐～
VideoUpdate(0, false);
SetDlgLower(62, 0, false);
//太守：
//既然承认是你做的案，其余
//两位疑犯当场无罪释放！
VideoRestore();
//来人呐！将这女贼押入大牢。
FadeOut(0);
EventSetState(1543, 0, 0);
EventSetDirFrame(82, 28, 3, 0);
EventSetDirFrame(82, 27, 3, 0);
EventSetState(1682, 1, 0);
EventSetState(1681, 0, 0);
EventSetState(1542, 1, 0);
WaitEventAutoScriptRun(12, false, false);
RoleSetDirFrame(3, 0, 0);
SetDlgLower(21, 0, false);
//林月如：
//　　李大哥！
WaitEventAutoScriptRun(12, false, false);
SetDlgLower(62, 0, false);
//太守：
//好啦～本官还你们清白
//你们可以自由离去了！
RoleSetDirFrame(2, 0, 0);
VideoUpdate(0, false);
EventSetDirFrame(82, 25, 2, 0);
VideoUpdate(0, false);
//林月如：
//　　谢谢！
RoleSetDirFrame(3, 0, 0);
EventSetDirFrame(82, 25, 1, 0);
VideoUpdate(0, false);
SetDlgUpper(1, 0, false);
//李逍遥：
//在牢中还好吧？
SetDlgLower(21, 0, false);
//林月如：
//嘻～有爹爹和世伯做靠山
//他们不敢拿我怎么样！
EventSetState(1542, 0, 0);
PartySetRole(1, 3, 0);
RoleSetDirFrame(0, 0, 0);
EventSetTriggerScript(85, 27, "@3A8E");
EventSetTriggerScript(85, 28, "@A9FA");
EventSetTriggerScript(85, 29, "@AA04");
EventSetStateSequence(85, 43, 45, 2);

['@3A8E'];
//巡捕：
//奉太守之命，可让两位出城。
EventModifyPos(85, 27, -32, 0);
VideoUpdate(0, false);
EventSetAutoScript(85, 27, "Event_00006_00014_Auto");
EventSetTriggerScript(85, 28, "@3A97");
EventSetTriggerScript(85, 28, "@3A97");
EventSetTriggerScript(85, 29, "@3A97");
ReplaceAndPause();
['@3A97'];
//巡捕：
//你就是那位抓到女飞贼
//集团首领的少侠吗？
VideoRestore();
//真了不起！

['@3AA3'];
NpcSetFrame(1);
WaitEventAutoScriptRun(3, false, false);
['@3AA5'];
NpcSetFrame(2);
WaitEventAutoScriptRun(4, false, false);
NpcSetFrame(3);
PlaySound(92);
WaitEventAutoScriptRun(2, false, false);
ReplaceAndPauseWithNop("@3AA5", 0);

['@3AAC'];
NpcSetFrame(1);
WaitEventAutoScriptRun(6, false, false);
ReplaceAndPauseWithNop("@3AA5", 0);

['@3AB0'];
WaitEventAutoScriptRun(10, false, false);
['@3AB1'];
NpcSetFrame(1);
ReplaceAndPause();
NpcSetFrame(2);
NpcSetFrame(0);
ReplaceAndPauseWithNop("@3AB1", 0);

['@3C26'];
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//李逍遥：
//没钱就是没钱，不然你想怎样
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//衙役：
//哦．．那．．对了
//贫苦百姓可以免费
//大侠～您若没钱缴也没关系
ReplaceAndPause();
SetDlgLower(0, 0, false);
//衙役：
//请吧．．

['@3C87'];
SceneEnter(110);
PartySetPos(12, 66, 0);
FadeOut(0);

['@3C95'];
SetDlgLower(21, 0, false);
//林月如：
//船家！能否载我们到城里去
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//船夫：
//小的这艘船已经给尚书府包下
//来了，今天一整天不做别人的
//生意，等尚书夫人上完香，还
//要搭小的船回府呢
VideoUpdate(0, false);
SetDlgLower(21, 0, false);
//林月如：
//喔！云姨也来啦？
EventSetState(2075, 2, 0);
EventSetState(2076, 2, 0);
EventSetState(2077, 2, 0);
WaitEventAutoScriptRun(2, false, true);
WaitEventAutoScriptRun(34, false, false);
SetDlgLower(0, 0, false);
//尚书夫人：
//咦～　是．．月如吗？
WaitEventAutoScriptRun(4, false, false);
RoleSetDirFrame(1, 0, 0);
WaitEventAutoScriptRun(2, false, false);
SetDlgLower(21, 0, false);
//林月如：
//．．．云姨！
RoleSetDirFrame(0, 0, 1);
WaitEventAutoScriptRun(0, false, false);
RoleSetDirFrame(1, 0, 1);
PartySetPos(40, 57, 0);
WaitEventAutoScriptRun(0, false, false);
PartyWalkToBlock(39, 56, 0, 4);
WaitEventAutoScriptRun(2, false, false);
SetDlgUpper(67, 0, false);
//尚书夫人：
//你这丫头，怎么这么久
//都没来看云姨！
VideoUpdate(0, false);
SetDlgLower(21, 0, false);
//林月如：
//别这么说嘛～人家这不是来了
//对了．．伯父跟晋元还好吧
VideoUpdate(0, false);
SetDlgUpper(67, 0, false);
//尚书夫人：
//唉．．晋元从苏州回来不久后
//突然生了一场怪病，看过许多
//大夫都不见起色。我这做娘的
//只好天天来上香，替他祈福
VideoUpdate(0, false);
SetDlgLower(21, 0, false);
//林月如：
//喔？　我可以去看看他吗？
SetDlgUpper(67, 0, false);
//尚书夫人：
//当然．．．
//坐船一块回去吧
FadeOut(0);
SceneEnter(101);

['@3E60'];
VideoUpdate(0, false);
//老鸨：
//呦～　不对您的味呀！？
VideoRestore();
//可是刚好也没别的姑娘了
//那这样吧～　妈妈我就亲自
//来伺候您啦！
SetDlgLower(2, 0, false);
//李逍遥：
//哇喔！你开啥玩笑
//谁要你这老太婆！
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//老鸨：
//别这么说嘛．．
//妈妈我二十年前还曾经是
//江南十大名妓之一呢
VideoRestore();
//别害臊嘛～就这么说定了
//妈妈我今天就免费送你啦！
VideoUpdate(0, false);
SetDlgLower(5, 0, false);
//李逍遥：
//谁理你呀，去照照镜子吧！
ReplaceAndPause();
//老鸨：
//呜．．免费赠送也没人要
//想当年～我年轻当红的时候
//多少公子哥抱着大把金元宝
//来捧我的场呢！

['@3E7F'];
VideoUpdate(0, false);
//老鸨：
//哟～你不要？！
VideoRestore();
//这京城之中有谁不知我们
//怡红院的姑娘个个是国色
//天香，温柔可人
//就独独您这么不识货！
VideoRestore();
//到怡红院来，不找姑娘
//那你是来干什么？
//．．．逛大街吗！？
ReplaceAndPauseWithNop("Event_00132_00012_Trigger", 0);

['@3E8D'];
//老鸨：
//啥！？你没带钱？
//没钱就滚出去
ReplaceAndPauseWithNop("Event_00132_00012_Trigger", 0);

['@3EAA'];
NpcMoveToBlock(32, 66, 0, 3);
NpcMoveToBlock(35, 69, 1, 3);
NpcMoveToBlock(35, 70, 0, 3);
NpcMoveToBlock(35, 70, 1, 3);
EventSetState(-1, 0, 0);

['@3F5B'];
ReplaceAndPause();
['Event_00128_00004_Trigger'];
//酒馆老板：
//公子，要买酒吗？
//每壶一百文钱．．
GotoWithSelect("@3F5B");
VideoUpdate(0, false);
CashModify(-100, "@3F5B");
AddItem(26, 0);
VideoUpdate(0, false);
//酒馆老板：
//谢谢您的惠顾

['@3FFD'];
SceneEnter(110);
PartySetPos(28, 66, 1);
FadeOut(0);

['@405B'];
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//秀才：
//二．．二位．．英雄
//我．．．我看．．
RoleSetDirFrame(0, 0, 1);
VideoUpdate(0, false);
SetDlgUpper(21, 0, false);
//林月如：
//你怎么了？
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//秀才：
//我看．．我还是回去吧．．
VideoUpdate(0, false);
SetDlgUpper(21, 0, false);
//林月如：
//为什么？又不是没见过妖怪
//有啥好怕的？难道你不相信
//我们？
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//秀才：
//这．．我．．我想
//先前的约定就打消了
VideoRestore();
//告辞．．
PartySetFollower(Sprite.无图像, Sprite.无图像);
FadeOut(0);
VideoUpdate(0, false);
SetDlgCenter(0, false);
//秀才一溜烟的便往回跑走了
VideoUpdate(0, false);
SetDlgUpper(22, 0, false);
//林月如：
//去～　这些读书人真没用

['@4083'];
NpcSetFrame(1);
EventModifyPos(-1, -1, 1, 0);
EventModifyPos(-1, -1, 4, 0);
EventModifyPos(-1, -1, 6, 0);
EventModifyPos(-1, -1, 8, 0);
EventModifyPos(-1, -1, 12, 0);
['@4089'];
EventModifyPos(-1, -1, 16, 0);
GotoWithNop("@4089", 0);

['@409A'];
EventSetTriggerMode(-1, -1, false, 2);
SetDlgUpper(0, 0, false);
//宋氏：
//这．．这是我家相公
//出门时带的包袱．．
//怎么会在你们手上！？
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//我们经过山谷时发现你丈夫
//的尸首，这些是他的遗物．．
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//宋氏：
//呜．．．呜．．都怪我
//当初我应该劝他不要去的
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//夫人．．请您节哀．．
//您点点看，包袱中的物品
//可有短缺？
WaitEventAutoScriptRun(2, false, false);
NpcSetDirFrame(0, 0);
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//宋氏：
//嗯．．．
NpcSetDirFrame(1, 0);
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//宋氏：
//您千里迢迢替把这些东西
//送回来，我们已经很感激了
VideoRestore();
//唉．．都是为了这紫金葫芦
VideoUpdate(0, false);
SetDlgLower(21, 0, false);
//林月如：
//这葫芦有什么不对吗？
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//宋氏：
//不．．姑娘别误会
//这葫芦是我相公向一个盗墓
//者买来的，据说是上古神物
VideoRestore();
//自从相公得到这葫芦后
//家中就多次遭到妖魔的侵扰
//后来听说扬州有人出高价要
//买这葫芦，相公就去谈价钱
//想不到．．竟．．
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//妖魔！？　想必．．
//这葫芦若不是神灵之器
//就是不祥之物
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//宋氏：
//我曾听我相公说过．．
//紫金葫芦若由会仙术的人
//持有，会是相当厉害的宝贝
VideoRestore();
//我们一介妇孺留这东西也没用
//二位大侠若不嫌弃，我想把这
//紫金葫芦相赠．．
VideoUpdate(0, false);
SetDlgBox(0);
//获得紫金葫芦
AddItem(210, 0);
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//宋氏：
//葫芦底部有些文字，据说是
//使用它的咒语，可惜我们不
//会法术，不会使用
SetDlgLower(1, 0, false);
//李逍遥：
//哦？　让我看看．．
VideoUpdate(0, false);
SetDlgBox(0);
//得到灵葫咒
HeroAddMagic(83, 1);
ReplaceAndPause();
//宋氏：
//呜．．我好可怜呐

['@40F3'];
MusicPlay(Music.十面埋伏, false, false);
HeroSetSprite(0, Sprite.空空如也, false);
PartySetRole(1, 0, 0);
PartySetPos(29, 58, 0);
PlaySound(123);
WaitEventAutoScriptRun(8, false, false);
PlaySound(190);
ViewportMove(0, 4, 40);
WaitEventAutoScriptRun(4, false, false);
SetDlgLower(60, 0, false);
//石长老：
//你们是白苗族的人？
VideoUpdate(0, false);
SetDlgUpper(44, 0, false);
//盖罗娇：
//石长老．．投降吧！
//你打不过这么多人的
//把公主殿下交给我们吧
VideoUpdate(0, false);
SetDlgLower(60, 0, false);
//石长老：
//哼～就凭你们这些臭娘们？
WaitEventAutoScriptRun(8, false, false);
SetDlgUpper(44, 0, false);
//盖罗娇：
//公主殿下．．属下知道您就
//在轿子中。可否现身一见？
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//轿中之人：
//　　．．．．．．．
VideoUpdate(0, false);
SetDlgUpper(44, 0, false);
//盖罗娇：
//公主殿下的两位汉人朋友
//属下也已经请到，现在就
//在客栈内休息呢．．
//想必殿下很想见他们吧？
VideoUpdate(0, false);
//轿中之人：
//　　是．．逍遥哥哥吗！？
VideoUpdate(0, false);
SetDlgUpper(44, 0, false);
//盖罗娇：
//是的．．
//奉我族族长之命，想请公主
//及公主的朋友到大理城做客
SetDlgLower(60, 0, false);
//石长老：
//　　　　　做梦！
PartySetRole(5, 6, 5);
AddItem(88, 9);
AddItem(78, 9);
BattleEnableAuto();
SetBattleMusic(Music.逆天而行);
Dos_SetBattlefield(FbpDos.扬州屋顶);
BattleStart(37, "", "");
SetBattleMusic(Music.势如破竹);
MusicPlay(Music.逆天而行, false, false);
PartySetRole(1, 0, 0);
BattleEnd();
RemoveItem(88, 9, "");
RemoveItem(78, 9, "");
PartySetPos(29, 69, 0);
ViewportMove(0, 0, 0);
VideoUpdate(0, false);
SetDlgLower(60, 0, false);
//石长老：
//可～恶．．
VideoUpdate(0, false);
SetDlgUpper(44, 0, false);
//盖罗娇：
//石长老．．任你再神通广大
//一次要对付我们这么多人
//法力终究是要耗尽的．．
VideoRestore();
//您这么大的年纪了，犯不着
//为那残暴无道的巫王拼命吧？
VideoUpdate(0, false);
SetDlgLower(60, 0, false);
//石长老：
//哼！　休得污辱我们大王
VideoUpdate(0, false);
SetDlgUpper(44, 0, false);
//盖罗娇：
//在苗疆，谁人不知
//巫王听信谗言，修练拜月教的
//魔功以至走火入魔、命在旦夕
//而身后无子嗣以继大统
VideoRestore();
//这时却又想起十年前被自己
//亲手迫害，而流亡出走的妻
//子及亲生女儿．．哼～
VideoUpdate(0, false);
SetDlgLower(60, 0, false);
//石长老：
//这是我族的家务事
//别族无权过问！
VideoUpdate(0, false);
SetDlgUpper(44, 0, false);
//盖罗娇：
//照我们白苗族的习俗～
//与丈夫离异的妻儿，自是归
//娘舅家养。
VideoRestore();
//巫后娘娘原是我白苗大祭司
//我等奉族长之命，迎娘娘之
//女回大理，乃名正言顺之事
VideoUpdate(0, false);
SetDlgLower(60, 0, false);
//石长老：
//强词夺理！
//公主乃我南诏王国唯一正统
//继承者，你们分明是想挟持
//她，来威胁我们大王
VideoUpdate(0, false);
SetDlgUpper(44, 0, false);
//盖罗娇：
//呵～您说这话可就伤人了
//我们哪来这种胆子呢？
EventSetState(1984, 0, 0);
EventSetState(1985, 1, 0);
EventModifyPos(107, 12, -16, 8);
VideoUpdate(0, false);
SetDlgLower(60, 0, false);
//石长老：
//身为长老，就算死
//也绝不让你们如愿
VideoUpdate(0, false);
SetDlgUpper(44, 0, false);
//盖罗娇：
//呦～　困兽之斗啊？
VideoUpdate(0, false);
SetDlgLower(60, 0, false);
//石长老：
//领教老夫最后绝招！
MusicStop(1);
VideoUpdate(0, false);
SetDlgCenter(0, false);
//赤血毒焰~50
VideoShake(30, 0);
WaitEventAutoScriptRun(14, false, false);
PlaySound(175);
FadeColor(26, 2, false);
EventSetTriggerScript(108, 1, "@3C87");
EventSetTriggerScript(111, 1, "@3FFD");
EventSetTriggerScript(105, 3, "@52B2");
SceneSetScript(111, "@424E", "");
SceneEnter(111);
ReplaceAndPause();

['@4190'];
NpcMoveToBlock(23, 40, 1, 3);
NpcMoveToBlockMutexLock(24, 41, 0, 2);
NpcSetDirFrame(3, 0);

['@4194'];
NpcMoveToBlock(27, 38, 0, 3);

['@424B'];
NpcMoveToBlock(25, 39, 1, 8);
NpcMoveToBlock(32, 46, 0, 8);

['@424E'];
Delay(10);
VideoShake(0, 0);
PartySetPos(0, 0, 0);
VideoUpdate(0, false);
FadeColor(26, 4, true);
SetDlgCenter(0, false);
//何方妖孽　在此逞凶！
//　　饶你不得．．．看飞剑
VideoUpdate(0, false);
SetDlgCenter(0, false);
//不！　他们不是我杀的！
FadeOut(0);
PartySetPos(26, 41, 0);
PlaySound(26);
VideoUpdate(0, false);
SetDlgCenter(0, false);
//　"屋外传来一声惊叫之后"
//　　"又恢复寂静．．"
EventSetDirFrame(111, 5, 0, 0);
WaitEventAutoScriptRun(2, false, false);
EventSetDirFrame(111, 6, 0, 0);
WaitEventAutoScriptRun(6, false, false);
EventSetDirFrame(111, 5, 0, 1);
WaitEventAutoScriptRun(4, false, false);
EventSetDirFrame(111, 5, 0, 0);
VideoUpdate(0, false);
SetDlgCenter(0, false);
//　．．．．．！？
PartySetPos(25, 41, 1);
RoleSetDirFrame(3, 0, 0);
EventSetState(2060, 0, 0);
EventSetState(2061, 0, 0);
HeroSetSprite(0, Sprite.李逍遥, false);
PartySetRole(1, 3, 0);
VideoUpdate(0, false);
//李逍遥：
//　灵儿！　是灵儿的声音！
RoleRevive(true, 10);
RoleModifyHPMP(true, 9999);
ReplaceAndPause();

['@431A'];
ReplaceAndPause();
['Event_00112_00015_Trigger'];
//小贩：
//好吃的糖葫芦．．便宜卖喔～
GotoWithSelect("@431A");
CashModify(-30, "@4321");
AddItem(20, 0);

['@4321'];
VideoUpdate(0, false);
//小贩：
//一串３０文钱，您的钱不够哦
ReplaceAndPauseWithNop("Event_00112_00015_Trigger", 0);

['@445C'];
SetDlgLower(1, 0, false);
//看你耳聪目明、四肢健全
//谋生之途很多，为何自甘堕落
//在街头行乞？
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//呜．．小姐您有所不知
//小的家遭祝融，落得分文不名
VideoUpdate(0, false);
//又身染痨疾，一双腿也被恶棍
//打瘸，连想找份糊口的工作，
//都没有店家肯收
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//你．．难道没有亲人吗
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//有一结发妻子，嫌贫爱富
//在小的落难之际，抛夫弃子
//跑去妓院为娼卖淫
VideoUpdate(0, false);
SetDlgLower(5, 0, false);
//有这种人？　太过份了！
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//是啊～　公子、小姐．．
//您就可怜可怜小的吧
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//你妻子叫什么名字？
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//她叫苏氏．．在怡红院
//的花名叫作"莺莺"
EventSetTriggerScript(132, 13, "@448A");
ReplaceAndPause();
//呜．．心事谁人知

['@448A'];
//您找莺莺夫人？
//她在左边最里面的房间
EventSetTriggerScript(135, 2, "@4492");
ReplaceAndPause();
//客人．．请您不要随便
//闯入其他客人的房间
ReplaceAndPauseWithNop("@448A", 0);

['@4492'];
EventSetTriggerScript(135, 3, "@44A5");
SceneSetScript(132, "@44AE", "");
//公子．．请您出去
//别打扰我们办事
VideoUpdate(0, false);
//嫖客：对啊．．本大爷我出了
//一百两银子，莺莺小姐今天一
//整天都是我的，你闪一边去！
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//我说完话就走。莺莺小姐．．
//我是为了你丈夫的事而来
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//是他！？　　．．好吧
Replace();
//请你到门外等一下
//我穿好衣服就来

['@44A5'];
//你找莺莺小姐谈啥事情？
ReplaceAndPause();
//要谈就快一点！
//别扫了本大爷的兴头
//我可是花了大笔银子

['@44AE'];
EventSetState(2319, 0, 0);
PartyWalkToBlock(9, 49, 1, 2);
PartyWalkToBlock(8, 50, 1, 2);
WaitEventAutoScriptRun(0, false, false);
RoleSetDirFrame(3, 0, 0);
WaitEventAutoScriptRun(0, false, false);
RoleSetDirFrame(2, 0, 0);
WaitEventAutoScriptRun(6, false, false);
EventSetState(2295, 2, 0);
WaitEventAutoScriptRun(14, false, false);
SetDlgUpper(56, 0, false);
//莺莺夫人：
//说吧．．他这次欠多少钱？
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//钱！？　您误会我的来意了
VideoUpdate(0, false);
SetDlgUpper(56, 0, false);
//莺莺夫人：
//你不是来讨债的？
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//不．．我们在街上看到你丈夫
//向人行乞，又病又残很可怜呢
//你身为人妻，为何置他于不顾
VideoUpdate(0, false);
SetDlgUpper(56, 0, false);
//莺莺夫人：
//笑话！　我置他于不顾？
//他也不想想看，我在这里
//出卖灵肉、陪尽笑脸、忍辱
//偷生，是被谁逼的？
//要不是我赚钱替他还债
//他早就被人活活打死了！
VideoRestore();
//那死鬼一有钱就跑去抽鸦片
//把家产抽光了还不够，还把
//女儿卖了．．我．．呜呜～
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//我明白了，我会替你
//讨回公道。告辞．．
EventSetTriggerScript(101, 25, "@44E0");
ReplaceAndPause();

['@44E0'];
SetDlgLower(1, 0, false);
//李逍遥：
//我见到你的妻子了，但是．．
//事情似乎不是如你所讲的喔
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//乞丐：
//你们．．真的．．
//跑去怡红院找我老婆！
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//若如她所说，那你当乞丐
//可是咎由自取的，不值得
//同情！
VideoUpdate(0, false);
SetDlgLower(23, 0, false);
//林月如：
//逼自己老婆和女儿去卖淫
//这种人饿死了活该！
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//乞丐：
//冤枉啊．．！
//我是把女儿卖了没错，但是我
//可没有让我老婆去妓院啊！
VideoUpdate(0, false);
SetDlgLower(22, 0, false);
//林月如：
//哦！？
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//乞丐：
//是她自己说．．女儿还太小
//由她去代替女儿的．．
VideoUpdate(0, false);
SetDlgLower(23, 0, false);
//林月如：
//什么！　那你更该死！
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//乞丐：
//哇．．　饶命啊！
VideoUpdate(0, false);
SetDlgLower(9, 0, false);
//李逍遥：
//月如、别这样！
//他已经够可怜了，你这样子
//变成在欺负人家呢
VideoUpdate(0, false);
SetDlgUpper(23, 0, false);
//林月如：
//这种混帐事，不知道就算了
//既然给我知道了，怎么看得
//过去！？
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//你家和刘家那么有钱有势
//帮人一下应该不难吧？
SetDlgUpper(22, 0, false);
//林月如：
//也得看对象呀！
EventSetState(2294, 0, 0);
EventSetState(2295, 0, 0);
EventSetState(2320, 0, 0);
EventSetState(2321, 2, 0);
EventSetState(2322, 2, 0);
ReplaceAndPause();
//呜．．我错了，不要打我

['@4536'];
VideoUpdate(0, false);
//乞丐：
//不给我钱～　我诅咒你．．
//嫁老公是秃头、生儿子没屁眼
ReplaceAndPause();
['Event_00101_00026_Trigger'];
//乞丐：
//善良的小姐．．赏点钱吧
GotoWithSelect("@4536");
VideoUpdate(0, false);
//乞丐：
//就这么一点呀！　小姐．．
//当乞丐的也有乞丐的自尊呢
//这年头物价涨得快，这
//点钱买块豆腐也不够
VideoUpdate(0, false);
SetDlgLower(21, 0, false);
//哦～那你想要多少
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//乞丐：
//如果你把身上一半的钱给我
//我就告诉你一个大秘密
GotoWithSelect("@4536");
VideoUpdate(0, false);
EventSetState(1809, 2, 0);
//您真大方！　好～靠近点
//我告诉你这天大的秘密．．
VideoUpdate(0, false);
//刘尚书的公子最近不是娶了
//一位美若天仙的媳妇吗？
VideoUpdate(0, false);
//那位刘公子夫人，有多美呢
//听说～男人只要多望她一眼
//魂都会给吸过去
VideoUpdate(0, false);
//还有～　她身上经常散发出
//一股醉人的花香，经过她身
//边的人无不神魂巅倒呢
VideoUpdate(0, false);
//嘿～　奇怪的是．．
//刘公子自从娶妻后
//身体一天比一天虚弱
VideoUpdate(0, false);
//所以有人说呀～　刘家少奶奶
//是山里的蝶精变的，专门吸男
//人的精气而活
SetDlgLower(23, 0, false);
//胡说八道！
//这些谣言是从哪传出来的
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//是我亲眼见到的喔．．
//有一天晚上，我经过刘府花园
//后门附近，因为内急就躲在附
//近的草丛里．．然后．．
//我看见刘家少奶奶抱着很多奇
//花异草从树林里，偷偷摸摸的
//走进屋内，我还亲眼看见她拿
//花来吃呢！
VideoUpdate(0, false);
SetDlgLower(22, 0, false);
//好～钱我会给你
//但是我警告你，这些乱七八糟
//的谣言，不许你再跟任何人说
SceneSetScript(119, "@4755", "");
CashHalve();
['@4578'];
ReplaceAndPause();
//乞丐：
//您想不想再打听别的呢？
//我的消息是最灵通的喔！
//只要一百文钱．．
GotoWithSelect("@4578");
VideoUpdate(0, false);
//乞丐：
//先付钱．．．．！
CashModify(-100, "@4578");
VideoUpdate(0, false);
//乞丐：
//好～您说．．您想打听什么？
VideoUpdate(0, false);
SetDlgLower(21, 0, false);
//嗯～　我们在找一个女孩子
//约十六岁，穿青衣、白长裤
//面貌清秀，梳着两条长长的
//辫子，你可曾见过这样的人
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//乞丐：
//嗯．．　这你就问对人了！
//前些日子，有位长的就像您
//所描述的姑娘．．可怜呐～
VideoUpdate(0, false);
SetDlgLower(3, 0, false);
//那位姑娘人在哪里？
//叫什么名字？
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//乞丐：
//听说啊～那姑娘家逢变故
//只身来到京城，寻亲不遇
//流落街头，落入黑道手里
//被卖到妓院
//她姓什么叫什么，我不知道
//我只知道现在她的花名叫作
//"小莲儿姑娘"
EventSetTriggerScript(133, 19, "@4E2D");
ReplaceAndPause();
//乞丐：
//今天的生意真好！

['@45E8'];
SceneEnter(122);
PartySetPos(17, 42, 0);
FadeOut(0);

['@463E'];
PartyWalkToBlock(12, 40, 1, 2);
WaitEventAutoScriptRun(6, false, false);
RoleSetDirFrame(0, 0, 0);
VideoUpdate(0, false);
SetDlgLower(24, 0, false);
//林月如：
//刘大哥也怪可怜的．．
VideoUpdate(0, false);
SetDlgUpper(1, 0, false);
//李逍遥：
//怎么会可怜？
//我反倒觉得刘兄最幸福呢！
VideoRestore();
//有这么一个漂亮又贤淑的妻子
//天天照顾他，要是我也娶到这
//种老婆，作鬼也甘愿呢！
RoleSetDirFrame(1, 0, 0);
VideoUpdate(0, false);
SetDlgLower(22, 0, false);
//林月如：
//那你就去死一死吧你
//去讨个女鬼当老婆！
SetDlgUpper(6, 0, false);
//李逍遥：
//开玩笑的啦．．
//干嘛生那么大的气
RoleSetDirFrame(3, 0, 0);
VideoUpdate(0, false);
SetDlgLower(22, 0, false);
//林月如：
//哼！　才懒得理你
ReplaceAndPause();

['@465F'];
EventSetState(2168, 0, 0);
EventSetState(2191, 0, 0);
EventSetState(2192, 0, 0);
EventSetState(2193, 0, 0);
EventSetState(2194, 1, 0);
EventSetState(2195, 1, 0);
PartySetRole(3, 0, 0);
PartySetPos(18, 32, 1);
RoleMoveOneStep(0, 0, 1);
RoleSetDirFrame(3, 0, 0);
VideoUpdate(0, false);
SetDlgLower(67, 0, false);
//刘夫人：
//李公子，别客气～尽量吃喔
VideoUpdate(0, false);
SetDlgUpper(6, 0, false);
//李逍遥：
//谢谢夫人．．
VideoUpdate(0, false);
SetDlgUpper(21, 0, false);
//林月如：
//对了．．云姨！
//怎么不请嫂子一起用餐呢？
VideoUpdate(0, false);
SetDlgLower(67, 0, false);
//刘夫人：
//是这样的．．晋元生病后
//稍微生荤或油腻的食物都不
//能吃，每天三餐都是彩依替
//他另外料理的
//彩依说夫妻应该同甘共苦
//所以每天三餐都陪晋元吃
//同样的素斋淡粥，别的不吃
VideoRestore();
//我劝过她，但是她执意如此
//所以现在她们夫妻俩已经很久
//没有和我们二老同桌而食了
VideoUpdate(0, false);
SetDlgUpper(21, 0, false);
//林月如：
//晋元大哥是怎么认识大嫂的？
//直到刚才我才知道大哥娶妻了
//真的吃了我一惊呢！
VideoUpdate(0, false);
SetDlgLower(67, 0, false);
//刘夫人：
//彩依是在一个月前来到这里的
//当时～她一家人出外旅行至此
//遇上盗匪，双亲都遇害了，只
//有她侥幸逃生
VideoRestore();
//可怜她身无分文，无依无靠
//想卖身葬父母，委身于我们
//家当婢女
VideoRestore();
//我和老爷见她知书达礼
//温柔细心，人也长得漂亮
//又通晓医理。我就让她负
//责伺候晋元
VideoRestore();
//说也奇怪，当时晋元不知得
//了什么怪病，找来许多大夫
//都医不好
VideoRestore();
//但是自从彩依来了以后
//在她照料之下，晋元一
//天天的有了起色．．．
SetDlgUpper(21, 0, false);
//林月如：
//然后他们就成亲了？
VideoUpdate(0, false);
SetDlgLower(67, 0, false);
//刘夫人：
//是啊．．  我是想
//让晋元早点成亲，冲冲喜
//说不定就会不药而愈
VideoUpdate(0, false);
SetDlgUpper(9, 0, false);
//李逍遥低声道：
//真是趁人之危．．
SetDlgLower(22, 0, false);
//林月如：
//什么？
VideoUpdate(0, false);
SetDlgUpper(3, 0, false);
//李逍遥：
//我是说．．真是天赐良缘！
VideoUpdate(0, false);
SetDlgLower(22, 0, false);
//林月如：
//吃你的菜！
//嘴巴别乱说话
EventSetTriggerScript(119, 4, "@45E8");
SceneEnter(122);
FadeOut(0);
ReplaceAndPause();

['@4755'];
MusicStop(0);
EventSetState(1809, 0, 0);
EventSetState(2169, 2, 0);
EventSetState(2170, 2, 0);
EventSetState(2197, 0, 0);
PartyWalkToBlock(33, 39, 1, 4);
PartyWalkToBlock(35, 38, 0, 4);
RoleSetDirFrame(1, 0, 0);
RoleSetDirFrame(1, 0, 1);
EventSetDirFrame(119, 9, 3, 0);
VideoUpdate(0, false);
SetDlgLower(24, 0, false);
//林月如：
//爹！！　您．．
//您怎么会到这来？
VideoUpdate(0, false);
SetDlgUpper(64, 0, false);
//林天南：
//我来找我的女儿～不对吗？
VideoUpdate(0, false);
SetDlgLower(22, 0, false);
//林月如：
//我才不要回去！
EventSetDirFrame(119, 10, 3, 0);
VideoUpdate(0, false);
SetDlgUpper(67, 0, false);
//刘夫人：
//月如．．对你爹说话
//怎么可以用这种态度呢
RoleSetDirFrame(3, 0, 0);
VideoUpdate(0, false);
SetDlgLower(23, 0, false);
//林月如：
//爹爹一下子千方百计要逼
//我嫁人，一下子却又要把
//逍遥大哥赶走
VideoRestore();
//出尔反尔，根本不管
//女儿心里的感受！
VideoUpdate(0, false);
SetDlgUpper(67, 0, false);
//刘夫人：
//我想．．你爹是为了你着想
VideoUpdate(0, false);
SetDlgLower(22, 0, false);
//林月如：
//才怪！　．．对了
RoleSetDirFrame(1, 0, 0);
VideoUpdate(0, false);
SetDlgLower(23, 0, false);
//林月如：
//爹怎么会知道我在这里？
//云姨，是不是您向我爹告的密
VideoUpdate(0, false);
SetDlgUpper(64, 0, false);
//林天南：
//哼～何须告密！做爹的
//对你的脾气还不够了解吗？
VideoRestore();
//从小～每当你犯了错怕被爹
//责骂，就跑到云姨那里躲起
//来，好让云姨替你求情
VideoRestore();
//虽然你云姨已经搬到京城来
//但是爹猜也猜得到，你这回
//离家出走，一定会来找云姨
EventSetDirFrame(119, 10, 0, 0);
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//刘夫人：
//林大哥～月如不是小孩子了
//她有她自己的想法，咱们做
//长辈的，也不必太为难他们
WaitEventAutoScriptRun(2, false, false);
EventSetDirFrame(119, 9, 2, 0);
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//林天南：
//云妹，你放心．．我今天
//来这里只是要确定一件事
//并非想责难她们
EventSetDirFrame(119, 9, 3, 0);
EventSetDirFrame(119, 10, 3, 0);
VideoUpdate(0, false);
SetDlgUpper(64, 0, false);
//林天南：
//如儿！　爹问你．．
//你离开家的这些日子
//都是和他在一起？
VideoUpdate(0, false);
SetDlgLower(25, 0, false);
//林月如：
//是．．是又怎样
//我和李大哥之间是清白的
VideoUpdate(0, false);
SetDlgUpper(64, 0, false);
//林天南：
//李少侠．．当初比武招亲
//依旧可以算数，只要．．
//你答应我一件事
VideoRestore();
//只要你以后不再去找那
//姓赵的蛇妖女，我立刻
//将月如许配给你
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//．．．．．．．．
//．．恕晚辈难以从命！
VideoRestore();
//于情于理，我都不能
//置灵儿于不顾
VideoUpdate(0, false);
SetDlgUpper(64, 0, false);
//林天南：
//那你把我女儿当做什么！
//．．．你的跟班吗！？
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//前辈～　这是两回事．．
WaitEventAutoScriptRun(2, false, false);
RoleSetDirFrame(0, 0, 0);
WaitEventAutoScriptRun(5, false, false);
RoleSetDirFrame(1, 0, 0);
VideoUpdate(0, false);
SetDlgLower(22, 0, false);
//林月如：
//爹～　我们的事，您别管嘛！
VideoUpdate(0, false);
SetDlgUpper(64, 0, false);
//林天南：
//住口！
//我怎能放任我的亲生女儿
//在外面跟男人游荡厮混！？
VideoUpdate(0, false);
//林月如：
//爹！　您怎么可以
//说的这么难听
RoleSetDirFrame(3, 0, 0);
VideoUpdate(0, false);
SetDlgUpper(64, 0, false);
//林天南：
//算了～咱们父女俩也别吵了
//爹知道再说什么你也不会听
VideoRestore();
//李少侠～　有几句话
//我想与你私底下谈，可否？
VideoUpdate(0, false);
RoleSetDirFrame(2, 0, 1);
WaitEventAutoScriptRun(6, false, false);
RoleSetDirFrame(1, 0, 1);
WaitEventAutoScriptRun(2, false, false);
SetDlgLower(1, 0, false);
//李逍遥：
//好的．．．。
EventSetState(2169, 0, 0);
SceneSetScript(118, "@4801", "");
SceneEnter(118);
FadeOut(0);
ReplaceAndPause();

['@4801'];
MusicPlay(Music.危机, false, false);
PartySetRole(1, 0, 0);
EventSetState(2154, 2, 0);
PartySetPos(9, 113, 0);
RoleSetDirFrame(2, 0, 0);
PartyWalkToBlock(10, 111, 1, 2);
WaitEventAutoScriptRun(4, false, false);
EventSetDirFrame(118, 3, 3, 0);
VideoUpdate(0, false);
EventSetDirFrame(118, 3, 0, 0);
VideoUpdate(0, false);
SetDlgUpper(64, 0, false);
//林天南：
//李少侠，你是不是也在
//恨我当初片面悔婚？
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//晚辈不敢。您是月如的父亲
//月如的事由您作主，晚辈怎
//敢有怨言．．
VideoUpdate(0, false);
SetDlgUpper(64, 0, false);
//林天南：
//哼．．．
//月如能像你这么懂事就好了
VideoRestore();
//并非老夫言而无信，存心作梗
//而是～老夫见你和那赵姑娘关
//系暧昧，姑且不论她是正或邪
VideoRestore();
//你都不应该有了月如，心里
//还挂念着别的女人
VideoUpdate(0, false);
SetDlgLower(9, 0, false);
//李逍遥：
//恕晚辈愚昧～　晚辈认为
//男子汉大丈夫立于天地
//有情、也要有义
VideoRestore();
//灵儿际遇堪怜，家婶千叮万嘱
//要我护送她回苗疆家乡寻母
//而且灵儿与我相识在先，且曾
//对我有救命之恩
//我若是为了攀龙附凤，而弃
//她于不顾，岂不是不仁不义
//不孝的人吗！？
VideoUpdate(0, false);
SetDlgUpper(64, 0, false);
//林天南：
//说的倒是动听，可是．．
//就这样让我女儿不明不白
//的继续跟着你吗？！
SetDlgLower(1, 0, false);
//李逍遥：
//　我．．．．
VideoUpdate(0, false);
SetDlgUpper(64, 0, false);
//林天南：
//不必多说，拔剑吧！
//我倒要看看～你真是个男子汉
//大丈夫、还是个只会耍嘴皮子
//的无赖
SetDlgLower(1, 0, false);
//李逍遥：
//不～晚辈怎敢跟您动手？！
VideoUpdate(0, false);
SetDlgUpper(64, 0, false);
//林天南：
//我可是认真的～接招吧！
//你若是有真功夫、真胆量
//就不得退后半步，接下我
//林家的七诀剑气
VideoRestore();
//你若赢得过我。从此以后
//我便不再过问你们的事
VideoRestore();
//反之～你若是个胆小鼠辈
//我就当场一剑毙了你
//免得你误了我女儿的终身！
SetBattleMusic(Music.酒剑仙);
Dos_SetBattlefield(FbpDos.木道人);
BattleStart(38, "@A073", "");
MusicPlay(Music.盟誓, false, false);
BattleEnd();
RoleModifyHPMP(true, 9999);
PartySetPos(12, 109, 0);
RoleSetDirFrame(0, 0, 0);
EventModifyPos(118, 3, -80, 40);
EventSetDirFrame(118, 3, 2, 0);
VideoUpdate(0, false);
SetDlgUpper(64, 0, false);
//林天南：
//唉．．！　我真的老了
EventSetState(2155, 2, 0);
WaitEventAutoScriptRun(10, false, false);
EventSetDirFrame(118, 3, 0, 0);
WaitEventAutoScriptRun(2, false, false);
SetDlgLower(24, 0, false);
//林月如：
//爹．．！
VideoUpdate(0, false);
WaitEventAutoScriptRun(8, false, false);
EventSetDirFrame(118, 3, 3, 0);
WaitEventAutoScriptRun(5, false, false);
SetDlgLower(24, 0, false);
//林月如：
//李大哥！　你有没有受伤？
WaitEventAutoScriptRun(2, false, false);
EventSetDirFrame(118, 3, 0, 0);
WaitEventAutoScriptRun(4, false, false);
SetDlgUpper(64, 0, false);
//林天南：
//罢了．．罢了．．
//女儿养大了，终究是别人的
EventSetAutoScript(118, 3, "@4931");
WaitEventAutoScriptRun(4, false, false);
EventSetDirFrame(118, 4, 3, 0);
WaitEventAutoScriptRun(4, false, false);
EventSetDirFrame(118, 4, 0, 0);
WaitEventAutoScriptRun(2, false, false);
SetDlgLower(1, 0, false);
//李逍遥：
//前辈．．．！
VideoUpdate(0, false);
SetDlgUpper(64, 0, false);
//林天南：
//月如从小娇生惯养，没吃过苦
//希望你能好好照顾她
WaitEventAutoScriptRun(22, false, false);
SetDlgUpper(9, 0, false);
//李逍遥：
//你爹．．还是很关心你的
VideoUpdate(0, false);
SetDlgLower(24, 0, false);
//林月如：
//我知道．．．但是．．我想
//我已长大了，应该自己独立
//不能一辈子都依靠父母
VideoUpdate(0, false);
SetDlgUpper(1, 0, false);
//李逍遥：
//你真的打算不回家了？
WaitEventAutoScriptRun(4, false, false);
EventSetDirFrame(118, 4, 2, 0);
VideoUpdate(0, false);
SetDlgLower(21, 0, false);
//林月如：
//我喜欢像现在这样的生活
//到各地去游历、冒险．．
//可以认识许多人、许多事物
//更可以锻炼自己的武功
VideoRestore();
//而且．．．
EventSetDirFrame(118, 4, 3, 0);
VideoUpdate(0, false);
SetDlgLower(21, 0, false);
//林月如：
//这样才能和你在一起
VideoUpdate(0, false);
SetDlgUpper(9, 0, false);
//李逍遥：
//我只是一个不学无术的浪子
//你跟着我，不怕到时候两人
//一起去当要饭的？
EventSetDirFrame(118, 4, 2, 0);
VideoUpdate(0, false);
SetDlgLower(21, 0, false);
//林月如：
//如果真是这样
//就怪我自己倒霉啦！
VideoUpdate(0, false);
SetDlgUpper(3, 0, false);
//李逍遥：
//好吧～等我找到灵儿的下落
VideoRestore();
//把一切事情都结束后，我带你
//四处游山玩水，一同吃遍天下
//珍味，看遍人间美景
EventSetDirFrame(118, 4, 2, 0);
VideoUpdate(0, false);
SetDlgLower(21, 0, false);
//林月如：
//嘻．．吃到老！　玩到老！
EventWalkOneStep(118, 4, 4, -2);
WaitEventAutoScriptRun(2, false, false);
EventWalkOneStep(118, 4, 4, -2);
WaitEventAutoScriptRun(0, false, false);
EventSetDirFrame(118, 4, 2, 0);
RoleMoveOneStep(-4, 2, 0);
WaitEventAutoScriptRun(2, false, false);
RoleMoveOneStep(-4, 2, 0);
WaitEventAutoScriptRun(2, false, false);
RoleSetDirFrame(0, 0, 0);
VideoUpdate(0, false);
SetDlgUpper(6, 0, false);
//李逍遥：
//那．．我们．．．．
EventSetState(2001, 0, 0);
EventSetState(2156, 2, 0);
WaitEventAutoScriptRun(18, false, false);
SetDlgUpper(48, 0, false);
//彩　依：
//啊．．！！
RoleMoveOneStep(8, -4, 0);
WaitEventAutoScriptRun(0, false, false);
EventWalkOneStep(118, 4, -8, 4);
WaitEventAutoScriptRun(0, false, false);
RoleSetDirFrame(2, 0, 0);
WaitEventAutoScriptRun(0, false, false);
EventSetDirFrame(118, 4, 0, 0);
WaitEventAutoScriptRun(0, false, false);
SetDlgLower(6, 0, false);
//李逍遥：
//哇！？　大嫂．．
//你突然出现，害我吓了一跳
VideoUpdate(0, false);
SetDlgUpper(48, 0, false);
//彩　依：
//是．．真是抱歉．．
//我急着赶路，没向您打招呼
SetDlgLower(6, 0, false);
//李逍遥：
//大嫂出来外面采花吗？
VideoUpdate(0, false);
SetDlgUpper(48, 0, false);
//彩　依：
//是的．．
EventSetDirFrame(118, 4, 3, 0);
VideoUpdate(0, false);
EventSetDirFrame(118, 4, 2, 0);
VideoUpdate(0, false);
SetDlgLower(21, 0, false);
//林月如：
//这么说，这树林里生长
//着许多美丽的野花啰？！
EventSetAutoScript(118, 4, "@4C99");
WaitEventAutoScriptRun(6, false, false);
RoleSetDirFrame(3, 0, 0);
WaitEventAutoScriptRun(0, false, false);
SetDlgLower(21, 0, false);
//林月如：
//好耶，逍遥哥～我也要去摘！
VideoUpdate(0, false);
SetDlgUpper(48, 0, false);
//彩　依：
//不．．　不可以．．
EventSetDirFrame(118, 4, 2, 0);
RoleSetDirFrame(2, 0, 0);
VideoUpdate(0, false);
SetDlgLower(21, 0, false);
//林月如：
//为什么不可以？！
EventSetDirFrame(118, 4, 1, 0);
VideoUpdate(0, false);
SetDlgLower(21, 0, false);
//林月如：
//走嘛～逍遥哥，我们一块去
VideoUpdate(0, false);
SetDlgUpper(48, 0, false);
//彩　依：
//因为．．这树林里．．
//有很多毒蜘蛛，还有些花草
//是具有毒性的。
VideoRestore();
//万一．．你们不小心误触
//可能会中毒的
RoleSetDirFrame(3, 0, 0);
VideoUpdate(0, false);
SetDlgLower(6, 0, false);
//李逍遥：
//大嫂对这里的环境比较熟悉
//月如～那不如不要去吧
//要摘花，院子里多的是
VideoUpdate(0, false);
SetDlgUpper(48, 0, false);
//彩　依：
//对不起．．相公在等着我
//回去为他煎药，告辞了
EventSetAutoScript(118, 5, "@493A");
RoleSetDirFrame(2, 0, 0);
WaitEventAutoScriptRun(8, false, false);
EventSetDirFrame(118, 4, 3, 0);
WaitEventAutoScriptRun(12, false, false);
EventSetDirFrame(118, 4, 0, 0);
WaitEventAutoScriptRun(4, false, false);
RoleSetDirFrame(0, 0, 0);
WaitEventAutoScriptRun(30, false, false);
EventSetDirFrame(118, 4, 1, 0);
WaitEventAutoScriptRun(2, false, false);
SetDlgUpper(21, 0, false);
//林月如：
//看样子．．大嫂似乎经常
//到林子里采集奇花异草
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//难怪她身上常有股醉人的花香
//也许是经常接触花的缘故吧！
EventSetState(2155, 0, 0);
PartySetRole(3, 1, 0);
SceneSetScript(125, "@493E", "");
ReplaceAndPause();

['@4931'];
NpcMoveToBlockMutexLock(6, 115, 1, 4);
EventSetState(-1, 0, 0);

['@493A'];
NpcMoveToBlock(15, 108, 0, 3);
NpcMoveToBlock(7, 116, 0, 3);
EventSetState(-1, 0, 0);

['@493E'];
EventSetState(2211, 1, 0);
EventSetDirFrame(125, 6, 0, 0);
EventSetDirFrame(125, 5, 0, 3);
PartyWalkToBlock(24, 43, 0, 2);
WaitEventAutoScriptRun(2, false, true);
RoleSetDirFrame(2, 0, 0);
MusicStop(1);
ViewportMove(8, -6, 22);
WaitEventAutoScriptRun(4, false, false);
EventSetDirFrame(125, 5, 0, 2);
WaitEventAutoScriptRun(2, false, false);
SetDlgLower(0, 0, false);
//彩　依：
//相公．．求求您．．
//把这药喝了吧，这样您的
//病才会早点好起来．．
EventSetDirFrame(125, 5, 0, 6);
WaitEventAutoScriptRun(4, false, false);
EventSetDirFrame(125, 5, 0, 5);
EventSetDirFrame(125, 6, 0, 2);
WaitEventAutoScriptRun(2, false, false);
EventSetDirFrame(125, 6, 0, 3);
VideoUpdate(0, false);
PlaySound(262);
EventSetDirFrame(125, 6, 0, 4);
EventSetLayer(125, 6, 0);
VideoUpdate(0, false);
EventSetDirFrame(125, 6, 0, 5);
VideoUpdate(0, false);
EventSetDirFrame(125, 6, 0, 6);
EventSetDirFrame(125, 5, 0, 6);
VideoUpdate(0, false);
EventSetDirFrame(125, 6, 0, 7);
VideoUpdate(0, false);
//彩　依：
//啊！　相公．．你．．
EventSetDirFrame(125, 6, 0, 8);
WaitEventAutoScriptRun(4, false, false);
EventSetDirFrame(125, 6, 0, 9);
WaitEventAutoScriptRun(0, false, false);
EventSetDirFrame(125, 6, 0, 10);
WaitEventAutoScriptRun(3, false, false);
EventSetDirFrame(125, 6, 0, 11);
WaitEventAutoScriptRun(2, false, false);
EventSetDirFrame(125, 6, 0, 12);
WaitEventAutoScriptRun(2, false, false);
EventSetDirFrame(125, 6, 0, 13);
WaitEventAutoScriptRun(2, false, false);
SetDlgUpper(0, 0, false);
//刘晋元：
//你每天给我喝的药根本不是
//用来治我的病的，而是迷药
//是不是！？
EventSetDirFrame(125, 6, 0, 14);
WaitEventAutoScriptRun(2, false, false);
SetDlgLower(0, 0, false);
//彩　依：
//相公．．您．．您何出此言
//这些药是妾身辛辛苦苦去采
//来的，世间也只有这种药方
//才能医好您的．．
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//刘晋元：
//哼！
//我的病，所有大夫都束手无策
//难道依你这不知哪弄来的偏方
//就会有效！？
VideoRestore();
//而且～　为何我喝了这种药
//就会昏睡数时辰不醒人事？
VideoRestore();
//我问你！　每天晚上我昏睡
//的时候，你都跑到哪里去了？
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//彩　依：
//我．．　妾身怎么会呢！
EventSetDirFrame(125, 5, 0, 6);
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//刘晋元：
//你骗得了爹娘，但骗不了我
//结婚至今，你根本未与我同
//床过。你眼里只当我是个废
//人，对吧！？
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//彩　依：
//相公．．那种事．．
//等您病好了，妾身自然
//自然．．该服伺您的
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//刘晋元：
//还有～！你说父母是
//苏州船商，举家出游遇上
//盗匪，才落难流落京城
VideoRestore();
//你说的这些事，我都叫人
//调查过，结果都是你编的
//你说！你还有多少事情
//瞒着我？！
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//彩　依：
//相公．．请您相信妾身
//妾身做的任何事，都是为了您
VideoRestore();
//求求您，把剩下的药喝了吧！
//不足的份量，妾身再去采
VideoRestore();
//只要再三日．．
//再服完最后这三日的药
//您的病就会完全好了
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//刘晋元：
//住口！　我绝不再喝
//那种来路不明的药
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//彩　依：
//相公．．您这是何苦．．
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//刘晋元：
//我再也不相信你了
//我要告诉爹娘！
VideoRestore();
//去叫我爹娘来．．快去！
VideoUpdate(0, false);
EventSetDirFrame(125, 6, 0, 15);
VideoUpdate(0, false);
EventModifyPos(125, 6, 0, -3);
VideoUpdate(0, false);
EventModifyPos(125, 6, 0, -4);
VideoUpdate(0, false);
EventModifyPos(125, 6, 0, -4);
VideoUpdate(0, false);
EventModifyPos(125, 6, 0, -1);
VideoUpdate(0, false);
EventSetDirFrame(125, 5, 0, 8);
SetDlgUpper(0, 0, false);
//刘晋元：
//你．．你想做什么！？
VideoUpdate(0, false);
EventSetDirFrame(125, 6, 0, 16);
WaitEventAutoScriptRun(0, false, false);
PlaySound(141);
EventSetDirFrame(125, 6, 0, 17);
WaitEventAutoScriptRun(2, false, false);
EventSetDirFrame(125, 6, 0, 18);
WaitEventAutoScriptRun(2, false, false);
EventSetDirFrame(125, 6, 0, 19);
WaitEventAutoScriptRun(2, false, false);
EventSetDirFrame(125, 6, 0, 20);
WaitEventAutoScriptRun(2, false, false);
EventSetDirFrame(125, 6, 0, 21);
WaitEventAutoScriptRun(2, false, false);
EventSetDirFrame(125, 6, 0, 15);
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//刘晋元：
//　　．．．．
EventSetDirFrame(125, 5, 0, 9);
VideoUpdate(0, false);
PlaySound(93);
WaitEventAutoScriptRun(6, false, false);
EventSetDirFrame(125, 6, 0, 22);
VideoUpdate(0, false);
SetDlgLower(48, 0, false);
//彩　依：
//原谅我．．相公
//妾身不得不如此做了
VideoUpdate(0, false);
EventSetState(2211, 0, 0);
EventSetState(2208, 1, 0);
EventSetAutoScript(125, 3, "@4A06");
WaitEventAutoScriptRun(60, false, false);
PartySetPos(21, 37, 0);
ViewportMove(0, 0, 0);
WaitEventAutoScriptRun(28, false, false);
SetDlgUpper(0, 0, false);
//林月如：
//．．．．．．．。
PartyWalkToBlock(21, 36, 1, 4);
PartyWalkToBlock(22, 35, 1, 4);
PartyWalkToBlock(25, 38, 0, 4);
RoleSetDirFrame(0, 0, 0);
RoleSetDirFrame(3, 0, 1);
WaitEventAutoScriptRun(4, false, false);
RoleSetDirFrame(2, 0, 0);
VideoUpdate(0, false);
SetDlgUpper(24, 0, false);
//林月如：
//怎么会这样呢！？
EventSetTriggerScript(125, 5, "@4A19");
ReplaceAndPause();

['@4A06'];
NpcMoveToBlockMutexLock(28, 35, 0, 2);
ReplaceAndPause();
NpcSetDirFrame(2, 0);
ReplaceAndPause();
EventSetDirFrame(125, 5, 0, 0);
WaitEventAutoScriptRun(6, false, false);
EventModifyPos(-1, -1, 0, 2);
EventModifyPos(-1, -1, 0, 2);
EventModifyPos(-1, -1, 0, 4);
EventModifyPos(-1, -1, 0, 4);
EventModifyPos(-1, -1, 0, 2);
EventModifyPos(-1, -1, 0, 2);
WaitEventAutoScriptRun(4, false, false);
NpcSetDirFrame(1, 0);
NpcSetDirFrame(0, 0);
NpcMoveToBlock(23, 41, 0, 3);
NpcMoveToBlock(27, 45, 0, 3);
EventSetState(-1, 0, 0);

['@4A19'];
SetDlgCenter(0, false);
//"二人叫醒刘晋元．．"
EventSetState(-1, 0, 0);
SceneEnter(126);
FadeOut(0);

['@4A69'];
NpcMoveToBlock(28, 35, 1, 3);
NpcMoveToBlock(23, 41, 0, 3);
NpcMoveToBlock(27, 45, 0, 3);
EventSetState(-1, 0, 0);

['@4AFF'];
//婢　女：
//少夫人和少爷吵架后
//就不知道跑到哪里去了
ReplaceAndPause();
//婢　女：
//奴婢也觉得少夫人有些古怪
//但是．．少夫人对待少爷绝
//对是真心的
ReplaceAndPause();
//婢　女：
//我也觉得少夫人好可怜．．

['@4B0B'];
//婢　女：
//少夫人好可怜．．

['@4B0E'];
NpcMoveToBlock(22, 92, 0, 3);
NpcMoveToBlock(21, 92, 1, 3);

['@4B1A'];
NpcMoveToBlock(21, 92, 0, 3);
NpcSetDirFrame(3, 0);

['@4B1D'];
NpcMoveToBlock(22, 93, 0, 3);
NpcSetDirFrame(1, 0);

['@4B20'];
WaitEventAutoScriptRun(2, false, false);
NpcMoveToBlockMutexLock(22, 93, 0, 4);
NpcMoveToBlockMutexLock(17, 98, 0, 4);
EventSetState(-1, 0, 0);

['@4B25'];
WaitEventAutoScriptRun(4, false, false);
NpcMoveToBlockMutexLock(22, 93, 0, 4);
['@4B27'];
NpcMoveToBlockMutexLock(17, 98, 0, 4);
EventSetState(-1, 0, 0);

['@4B2A'];
NpcMoveToBlockMutexLock(22, 92, 0, 4);

['@4B2C'];
WaitEventAutoScriptRun(9, false, false);
NpcSetDirFrame(2, 0);
WaitEventAutoScriptRun(7, false, false);
NpcMoveToBlockMutexLock(22, 91, 1, 2);
NpcMoveToBlockMutexLock(16, 85, 1, 2);
NpcMoveToBlockMutexLock(22, 80, 0, 2);
NpcMoveToBlockMutexLock(21, 79, 0, 2);
NpcSetDirFrame(2, 0);

['@4B6A'];
VideoUpdate(0, false);
//茅山道士：
//把钱凑足了再来找我吧！
['@4B6D'];
ReplaceAndPauseWithNop("@4B96", 0);

['@4B6F'];
//茅山道士：
//想请本山人作法吗
//那你可找对人了！
VideoRestore();
//只要有我茅山道人出马
//有灾消灾、有难解难
//任何妖魔鬼怪、恶灵鬼魅
//全部无所遁形！
VideoRestore();
//想当年～我和我师父太乙真人
//联手对付阴山鬼姥，我师父就
//只用一招．．
VideoUpdate(0, false);
SetDlgLower(21, 0, false);
//林月如：
//好了好了～我知道了
//既然道长法力高深，可否随
//我们到刘尚书府上，替刘尚
//书的公子收惊
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//茅山道士：
//哦．．是尚书的公子啊
//那么价钱可要贵一点啰．．
VideoUpdate(0, false);
SetDlgLower(21, 0, false);
//林月如：
//要多少？  您说！
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//茅山道士：
//呵．．是这样子的
//通常～穷苦人家我会看情形
//最多可以打五折～做善事嘛
VideoRestore();
//高官富贾的话．．就照我们
//祖师爷所立下的规矩．．
//嗯．．我算算．．
VideoUpdate(0, false);
['@4B96'];
//茅山道士：
//一万五、不二价！
GotoWithSelect("@4B6D");
CashModify(-15000, "@4B6A");
VideoUpdate(0, false);
//茅山道士：
//成交！
EventSetState(-1, 0, 0);
SceneSetScript(120, "@4BA4", "");
SceneEnter(120);
MusicStop(0);
FadeOut(0);
MusicPlay(Music.宿命, false, false);

['@4BA4'];
EventSetState(2176, 0, 0);
EventSetState(2177, 0, 0);
EventSetState(2178, 2, 0);
EventSetState(2179, 2, 0);
EventSetState(2003, 0, 0);
EventSetState(2180, 2, 0);
EventSetState(2181, 1, 0);
EventSetState(2182, 1, 0);
PartySetPos(16, 40, 0);
PartySetRole(3, 0, 0);
RoleSetDirFrame(1, 0, 0);
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//茅山道士：
//嗯．．嗯．．．。
EventSetDirFrame(120, 9, 0, 0);
WaitEventAutoScriptRun(6, false, false);
EventSetDirFrame(120, 9, 3, 0);
VideoUpdate(0, false);
//茅山道士：
//刘公子两眼泛青、经脉浮肿
//眉宇间凝结着紫黑之气．．
//八成是中了极厉害的巫毒
VideoUpdate(0, false);
SetDlgLower(24, 0, false);
//林月如：
//巫毒？！
VideoUpdate(0, false);
//茅山道士：
//所谓巫毒～是用咒术加上
//毒蛊复合施在人身上
VideoRestore();
//只有道行很高的巫蛊师
//或是毒物所幻化的精怪
//才会使这类的邪术。
VideoRestore();
//通常．．中了此种毒
//只有施毒的人才能解
VideoUpdate(0, false);
//刘夫人：
//那．．我儿子．．
//我儿子还有救吗．．？
EventSetDirFrame(120, 9, 0, 0);
VideoUpdate(0, false);
//茅山道士：
//很难说．．　刘公子体内似乎
//还有另一种不明的毒抑制住了
//巫蛊的毒性。短时间之内毒性
//应该不会发作
VideoRestore();
//不过～　奇怪的是．．
//一般人若同时中了二种这样
//的毒。即使毒未发作，不出
//七日之内早就元气枯竭而亡了
VideoRestore();
//照刘公子的脉象推算，中毒
//至少已有一个月以上了．．
//他是不是服了什么大补仙丹
//竟然能支撑到现在！？
VideoUpdate(0, false);
//刘夫人：
//没．．没有啊
//道长～会不会是您看错了？
//自从那时候起，只有我媳妇
//熬一些草药给我儿子服用
VideoRestore();
//其他大夫开的药因为我儿子
//吃下去就会呕吐，所以就没
//再给他吃了
VideoUpdate(0, false);
//茅山道士：
//事情并不单纯，我想～
//必须到刘公子平时所居住的
//房间查看．．
EventSetState(2178, 0, 0);
EventSetState(2179, 0, 0);
EventSetState(2180, 0, 0);
EventSetState(2181, 0, 0);
EventSetState(2182, 0, 0);
SceneEnter(127);
FadeOut(0);

['@4C99'];
EventWalkOneStep(-1, -1, 8, 0);
EventWalkOneStep(-1, -1, 8, 0);
EventWalkOneStep(-1, -1, 8, 0);
EventWalkOneStep(-1, -1, 8, 0);
EventWalkOneStep(-1, -1, 8, -4);
EventWalkOneStep(-1, -1, 8, -4);
NpcSetDirFrame(1, 0);

['@4CAD'];
NpcSetFrame(3);
NpcSetFrame(4);
NpcSetFrame(5);
ReplaceAndPause();
NpcSetFrame(6);
NpcSetFrame(7);
NpcSetFrame(8);
NpcSetFrame(9);
NpcSetFrame(10);
NpcSetFrame(11);
NpcSetFrame(12);

['@4CB9'];
NpcSetFrame(23);
NpcSetFrame(24);
NpcSetFrame(25);
NpcSetFrame(26);
NpcSetFrame(27);
NpcSetFrame(28);
NpcSetFrame(29);
NpcSetFrame(30);
NpcSetFrame(31);
NpcSetFrame(32);
NpcSetFrame(33);
NpcSetFrame(34);
ReplaceAndPause();
NpcSetFrame(35);
ReplaceAndPause();
EventSetState(-1, 0, 0);

['@4CCD'];
NpcMoveToBlock(28, 35, 0, 3);
NpcMoveToBlock(26, 36, 1, 3);

['@4CD0'];
NpcMoveToBlock(22, 40, 1, 3);
NpcMoveToBlock(26, 44, 1, 3);
EventSetState(-1, 0, 0);

['@4CE9'];
NpcSetFrame(4);
EventModifyPos(-1, -1, 10, -6);

['@4CEC'];
NpcSetFrame(5);
EventModifyPos(-1, -1, 10, -6);

['@4CEF'];
VideoWave(2, 0);
EventSetState(2007, 1, 0);
PartyWalkToBlock(28, 70, 0, 2);
WaitEventAutoScriptRun(10, false, false);
RoleSetDirFrame(1, 0, 0);
WaitEventAutoScriptRun(5, false, false);
RoleSetDirFrame(2, 0, 0);
EventSetState(2007, 0, 0);
WaitEventAutoScriptRun(2, false, false);
RoleSetDirFrame(2, 0, 1);
WaitEventAutoScriptRun(6, false, false);
RoleSetDirFrame(3, 0, 1);
RoleSetDirFrame(1, 0, 0);
WaitEventAutoScriptRun(2, false, false);
SetDlgLower(24, 0, false);
//林月如：
//好像有什么东西飞过去了！？
RoleSetDirFrame(2, 0, 1);
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//我也没瞧清楚．．
RoleSetDirFrame(3, 0, 1);
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//嗯？　好浓的花香
RoleSetDirFrame(0, 0, 0);
WaitEventAutoScriptRun(10, false, false);
RoleSetDirFrame(3, 0, 0);
WaitEventAutoScriptRun(8, false, false);
SetDlgLower(24, 0, false);
//林月如：
//是牡丹花的香味．．
//怎么突然变得这么浓！？
PartyWalkToBlock(29, 71, 0, 2);
WaitEventAutoScriptRun(5, false, false);
PartyWalkToBlock(28, 71, 1, 2);
WaitEventAutoScriptRun(6, false, false);
RoleSetDirFrame(3, 0, 0);
WaitEventAutoScriptRun(4, false, false);
SetDlgLower(24, 0, false);
//林月如：
//唔．．．怎么．．
//我觉得好困、想睡觉．．
VideoUpdate(0, false);
SetDlgLower(5, 0, false);
//李逍遥：
//这香味有点古怪．．
VideoRestore();
//月如！暂时别呼吸
//咱们尽快离开这里
EventSetState(2133, 2, 0);
EventSetState(2134, 2, 0);
EventSetState(2148, 2, 0);
EventSetState(2171, 2, 0);
EventSetState(2199, 2, 0);
EventSetState(2008, 2, 0);
EventSetState(2009, 2, 0);
EventSetState(2184, 2, 0);
EventSetState(2185, 2, 0);
EventSetState(2186, 2, 0);
EventSetState(1999, 0, 0);
EventSetState(2000, 0, 0);
EventSetState(2131, 0, 0);
EventSetState(2132, 0, 0);
EventSetState(0, 0, 0);
EventSetState(2151, 0, 0);
EventSetState(2165, 0, 0);
EventSetState(2166, 0, 0);
EventSetState(2167, 0, 0);
EventSetState(2198, 0, 0);
EventSetState(2175, 0, 0);
EventSetState(1838, 1, 0);
EventSetState(1832, 0, 0);
EventSetState(0, 0, 0);
EventSetState(1814, 0, 0);
EventSetState(1815, 0, 0);
EventSetState(1816, 0, 0);
EventSetState(1835, 2, 0);
EventSetState(1836, 2, 0);
EventSetState(1837, 2, 0);
EventSetState(0, 2, 0);
EventSetState(1801, 0, 0);
EventSetState(1802, 0, 0);
EventSetTriggerScript(101, 12, "@4D91");
EventSetTriggerScript(101, 13, "@4D99");
SceneSetScript(115, "@4D50", "");
SceneSetScript(116, "@4D50", "");
SceneSetScript(119, "@4D50", "");
SceneSetScript(120, "@4D50", "");
SceneSetScript(122, "@4D50", "");
SceneSetScript(117, "@4D50", "");
SceneSetScript(123, "@4D50", "");
SceneSetScript(124, "@4D50", "");
SceneSetScript(125, "@4D50", "");
ReplaceAndPause();
['@4D50'];
VideoWave(2, 0);
MusicPlay(Music.宿命, false, false);

['@4D75'];
VideoUpdate(0, false);
//守卫阿辉：
//呜．．那就算了
ReplaceAndPause();
['Event_00101_00018_Trigger'];
//守卫阿辉：
//林小姐、李公子．．
//可否帮小的一个忙？
GotoWithSelect("@4D75");
VideoUpdate(0, false);
//守卫阿辉：
//小的．．有一封书信
//想．．想请您．．替我
//拿给阿香小姐．．
VideoUpdate(0, false);
AddItem(227, 0);
SetDlgBox(0);
//得到一封情书
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//守卫阿辉：
//拜托您了．．
//千万不可让旁人知道
ReplaceAndPause();
//守卫阿辉：
//我只有在每天早上
//阿香陪夫人去庙里上香时
//才可以偷偷瞄她一眼．．

['@4D91'];
//守　卫：
//今天吹的是什么风？
//院子内牡丹花的香味
//居然在大门口也闻的到
VideoRestore();
//我在这儿当差这么久了
//这种事还是头一回碰到

['@4D99'];
//守　卫：
//刚才进来的那位茅山道士
//仓惶的跑出去了
ReplaceAndPause();
['@4D9D'];
//守　卫：
//没有尚书大人的命令
//士兵们不可以进入府院内

['@4DA7'];
EventSetTriggerMode(-1, -1, false, 2);
VideoUpdate(0, false);
SetDlgUpper(76, 0, false);
//阿香低声道：
//这是．．阿辉写给我的！？
VideoRestore();
//谢谢你们．．我．．
//我这里有块玉佩，可否请
//你们替我还给阿辉？
GotoWithSelect("@4DCD");
VideoUpdate(0, false);
SetDlgUpper(76, 0, false);
//阿香低声道：
//这是昨天，他趁夫人没注
//意时，偷偷放到我提的篮
//子内的。
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//哦？　你怎么知道是他偷放的
VideoUpdate(0, false);
SetDlgUpper(76, 0, false);
//阿香低声道：
//除了他还会有谁？
//请你们对他说：他的心意
//我能理解，但是这东西太
//贵重了，我不能收。
AddItem(228, 0);
ReplaceAndPause();
SetDlgUpper(76, 0, false);
//阿香低声道：
//那个笨蛋～差一点害死我
//夫人发现篮子里多了这块
//玉时，我差点没有吓死
VideoRestore();
//幸好我编了谎，说是刚才
//在路上捡到的，才瞒过夫人

['@4DCD'];
VideoUpdate(0, false);
SetDlgUpper(76, 0, false);
//婢女阿香：
//那就算了．．不过
//我还是要谢谢你们

['@4DD3'];
EventSetTriggerMode(-1, -1, false, 2);
VideoUpdate(0, false);
EventSetState(1814, 0, 0);
EventSetState(1815, 2, 0);
//守卫阿辉：
//这玉佩不是我的呀！
SetDlgLower(1, 0, false);
//李逍遥：
//不是你送给阿香的！
//那会是谁送的？
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//守卫阿辉：
//我也不知道！
ReplaceAndPause();
//守卫阿辉：
//难道．．难道有别的人
//也在暗恋阿香！

['@4DE6'];
EventSetTriggerMode(-1, -1, false, 2);
VideoUpdate(0, false);
//守卫阿德：
//那．．那块玉佩．．
//是我偷．．偷偷送给阿香的
//请你们把它．．还给我．．
VideoUpdate(0, false);
SetDlgLower(6, 0, false);
//李逍遥：
//堂堂一个大男人，喜欢哪
//个姑娘就直接跟她说嘛！
//何必如此偷偷摸摸的？
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//守卫阿德：
//可是～　我．．
//我每次．．遇到她．．就
//就．．说不出．．话
EventSetTriggerScript(119, 6, "@4DFE");
ReplaceAndPause();
//守卫阿德：
//拜托．．这件事
//请你千万不要向别人提起

['@4DFE'];
SetDlgUpper(76, 0, false);
//婢女阿香：
//玉佩是阿德送我的！？
//．．他也在暗恋我！？
VideoRestore();
//可是．．我喜欢的是少爷
//有朝一日～我要成为刘家
//的二少奶奶。请你跟他们
//说．．别再痴心妄想了！
ReplaceAndPause();
SetDlgUpper(76, 0, false);
//婢女阿香：
//唉．．为什么彩依就可以
//嫁给少爷，我就不行？
//凭我的姿色，并不输给她呀！

['@4E2D'];
//胖妓女：
//我就是小莲儿
//公子、找我有何贵事？
VideoUpdate(0, false);
SetDlgLower(10, 0, false);
//李逍遥：
//你．．是．．小莲儿姑娘！？
SetDlgUpper(0, 0, false);
//胖妓女：
//是啊．．！
VideoUpdate(0, false);
SetDlgLower(10, 0, false);
//李逍遥：
//没事．．我找错了
ReplaceAndPauseWithNop("Event_00133_00019_Trigger", 0);

['@4F0C'];
WaitEventAutoScriptRun(5, false, false);
NpcMoveToBlock(22, 39, 0, 3);
NpcMoveToBlock(13, 30, 0, 3);
NpcMoveToBlock(17, 26, 0, 3);
NpcMoveToBlock(13, 22, 0, 3);
NpcMoveToBlock(15, 20, 0, 3);
NpcMoveToBlock(11, 16, 1, 3);
EventSetState(-1, 0, 0);

['@4F83'];
VideoUpdate(0, false);
SetDlgLower(22, 0, false);
//林月如：
//呜．．好臭的酒味！
ReplaceAndPause();
['Event_00101_00038_Trigger'];
SetDlgCenter(0, false);
//运河中漂浮着一个人
//要把他捞起来吗？
GotoWithSelect("@4F83");
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//这样泡在水里太可怜了
//咱们把他捞起来吧
FadeOut(0);
EventModifyPos(101, 35, 0, -48);
EventModifyPos(-1, -1, 16, -56);
EventSetState(1836, 0, 0);
EventSetState(1837, 0, 0);
EventSetState(1815, 2, 0);
EventSetState(1816, 2, 0);
PartySetRole(1, 3, 0);
PartySetPos(12, 23, 0);
RoleSetDirFrame(0, 0, 0);
WaitEventAutoScriptRun(10, false, false);
EventSetState(-1, 0, 0);
EventSetState(1839, 2, 0);
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//酒剑仙：
//呵～～～～
//这一觉睡得好饱！
VideoUpdate(0, false);
//小童：
//哇～！　死人会说话！
EventSetAutoScript(101, 35, "@5028");
WaitEventAutoScriptRun(8, false, false);
EventSetDirFrame(101, 39, 0, 0);
WaitEventAutoScriptRun(5, false, false);
EventSetDirFrame(101, 39, 1, 0);
WaitEventAutoScriptRun(6, false, false);
EventSetDirFrame(101, 39, 0, 0);
WaitEventAutoScriptRun(4, false, false);
EventSetDirFrame(101, 39, 3, 0);
WaitEventAutoScriptRun(2, false, false);
SetDlgLower(37, 0, false);
//酒剑仙：
//嗯？我怎么全身湿答答的？
//咦．．这又是哪里？
PartyWalkToBlock(11, 23, 1, 2);
SetDlgLower(2, 0, false);
//李逍遥：
//师．．师父！！！
VideoUpdate(0, false);
EventSetDirFrame(101, 39, 2, 0);
WaitEventAutoScriptRun(5, false, false);
SetDlgLower(37, 0, false);
//酒剑仙：
//哦！　怎么又是你这小子？
VideoUpdate(0, false);
SetDlgLower(3, 0, false);
//李逍遥：
//师父！　好久没见到您了
//您老人家可安好！？
VideoUpdate(0, false);
SetDlgLower(37, 0, false);
//酒剑仙：
//少肉麻了～谁是你师父啊？
//我只是为了赔你一壶酒
//教了你一招剑法而已
//我酒剑仙可是从来不收徒弟的
VideoUpdate(0, false);
SetDlgLower(3, 0, false);
//李逍遥：
//不～　一日为师、终身为父
//在晚辈的心目中，您就像我
//的师父一样
VideoUpdate(0, false);
SetDlgLower(37, 0, false);
//酒剑仙：
//好啦好啦～随便你怎么叫
VideoUpdate(0, false);
SetDlgUpper(21, 0, false);
//林月如：
//老前辈，你怎么会泡在河里呢
//刚才我们还以为你是死人哩
VideoUpdate(0, false);
SetDlgLower(37, 0, false);
//酒剑仙：
//哈哈～我想起来了！
//大概是酒馆的老板趁我熟睡
//时，把我丢入河中的
VideoUpdate(0, false);
SetDlgLower(5, 0, false);
//李逍遥：
//他们怎么可以这样对待您！
VideoUpdate(0, false);
SetDlgLower(37, 0, false);
//酒剑仙：
//哈哈～差不多啦！
//我喝光了酒馆私酿的陈年绍兴
//身上又没有钱付给他们，双方
//算是扯平啦
VideoUpdate(0, false);
SetDlgUpper(24, 0, false);
//林月如：
//这．．．．．
//李大哥～你的剑法就是．．
//向这位奇怪的老伯学的！？
RoleSetDirFrame(2, 0, 0);
VideoUpdate(0, false);
SetDlgLower(5, 0, false);
//李逍遥：
//月如！我不许你这样说前辈
WaitEventAutoScriptRun(8, false, false);
SetDlgLower(37, 0, false);
//酒剑仙：
//嗯～　好奇怪的花香
EventSetDirFrame(101, 39, 1, 0);
RoleSetDirFrame(0, 0, 0);
VideoUpdate(0, false);
SetDlgLower(37, 0, false);
//酒剑仙：
//好像是这里面传出来的．．
//唔～　好重的妖气呀！
VideoUpdate(0, false);
SetDlgUpper(21, 0, false);
//林月如：
//前辈也看得出里面有妖怪？
EventSetDirFrame(101, 39, 2, 0);
VideoUpdate(0, false);
SetDlgLower(37, 0, false);
//酒剑仙：
//开玩笑？
//什么妖魔鬼怪我没见过
//用肚脐眼也看得出来
//这处府邸被施了咒！
VideoUpdate(0, false);
SetDlgLower(3, 0, false);
//李逍遥：
//师父可有办法对付这妖怪？
VideoUpdate(0, false);
SetDlgUpper(37, 0, false);
//酒剑仙：
//这妖怪长什么样子？
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//其实～连个影子也没瞧见过
//只知道现在尚书府内除了我们
//全部的人都中了妖术昏迷不醒
VideoUpdate(0, false);
SetDlgUpper(37, 0, false);
//酒剑仙：
//啧～连对方是啥东西
//也不知道，怎么打？
VideoRestore();
//这样子吧！我来开坛作法
//先破了这妖怪的幻术，逼
//他现形再说
VideoRestore();
//你们去给我弄几项道具来．．
//"蜡烛"、"符纸"、"檀香"，还有～
//顺便给我带一壶上好的"酒"来

['@5028'];
NpcMoveToBlock(16, 30, 0, 3);
EventSetState(-1, 0, 0);

['@503E'];
//酒剑仙：
//蜡烛、符纸、檀香，还有一壶酒
ReplaceAndPauseWithNop("Event_00101_00039_Trigger", 0);

['@5042'];
//酒剑仙：
//酒呢～？要我施展真功夫
//怎么可以没有酒！
ReplaceAndPauseWithNop("Event_00101_00039_Trigger", 0);

['@5047'];
EventSetStateSequence(116, 3, 11, 2);
EventSetState(2146, 2, 0);
EventSetState(2147, 2, 0);
PartySetPos(34, 32, 1);
RoleSetDirFrame(3, 0, 0);
RoleSetDirFrame(3, 0, 1);
PartySetRole(1, 0, 0);
ReplaceAndPause();

['@5050'];
SetDlgCenter(0, false);
//月如好像不是往这里去的
RoleMoveOneStep(-16, -8, 0);

['@50D9'];
MusicPlay(Music.宿命, false, false);

['@50DB'];
NpcSetFrame(1);
ReplaceAndPause();
NpcSetFrame(2);
ReplaceAndPause();
NpcSetFrame(3);
ReplaceAndPause();
NpcSetFrame(4);
WaitEventAutoScriptRun(7, false, false);
['@50E3'];
NpcSetFrame(5);
ReplaceAndPause();
NpcSetFrame(4);
WaitEventAutoScriptRun(8, false, false);
ReplaceAndPauseWithNop("@50E3", 0);

['@50E9'];
NpcSetDirFrame(0, 11);
WaitEventAutoScriptRun(5, false, false);
NpcSetDirFrame(0, 12);
WaitEventAutoScriptRun(7, false, false);
NpcSetDirFrame(0, 13);
WaitEventAutoScriptRun(4, false, false);
NpcSetDirFrame(0, 14);
WaitEventAutoScriptRun(2, false, false);
NpcSetDirFrame(0, 15);
WaitEventAutoScriptRun(2, false, false);
NpcSetDirFrame(0, 16);
WaitEventAutoScriptRun(5, false, false);
NpcSetDirFrame(0, 17);
WaitEventAutoScriptRun(3, false, false);
NpcSetDirFrame(0, 18);
WaitEventAutoScriptRun(2, false, false);
NpcSetDirFrame(0, 19);
WaitEventAutoScriptRun(4, false, false);
NpcSetDirFrame(0, 12);
WaitEventAutoScriptRun(0, false, false);
NpcSetDirFrame(0, 15);
WaitEventAutoScriptRun(2, false, false);
NpcSetDirFrame(0, 17);
WaitEventAutoScriptRun(0, false, false);
NpcSetDirFrame(0, 19);
WaitEventAutoScriptRun(0, false, false);
NpcSetDirFrame(0, 18);
WaitEventAutoScriptRun(6, false, false);
NpcSetDirFrame(0, 16);
WaitEventAutoScriptRun(0, false, false);
NpcSetDirFrame(0, 15);
WaitEventAutoScriptRun(2, false, false);
NpcSetDirFrame(0, 13);
WaitEventAutoScriptRun(2, false, false);
NpcSetDirFrame(0, 22);
WaitEventAutoScriptRun(5, false, false);

['@510E'];
NpcSetDirFrame(0, 22);
WaitEventAutoScriptRun(2, false, false);
NpcSetDirFrame(0, 20);
WaitEventAutoScriptRun(0, false, false);
NpcSetDirFrame(0, 19);
WaitEventAutoScriptRun(0, false, false);
NpcSetDirFrame(0, 18);
WaitEventAutoScriptRun(5, false, false);
NpcSetDirFrame(0, 19);
WaitEventAutoScriptRun(2, false, false);
NpcSetDirFrame(0, 20);
WaitEventAutoScriptRun(8, false, false);
NpcSetDirFrame(0, 19);
WaitEventAutoScriptRun(3, false, false);
NpcSetDirFrame(0, 20);
WaitEventAutoScriptRun(3, false, false);
NpcSetDirFrame(0, 19);
WaitEventAutoScriptRun(3, false, false);
NpcSetDirFrame(0, 20);
WaitEventAutoScriptRun(3, false, false);
NpcSetDirFrame(0, 19);
WaitEventAutoScriptRun(6, false, false);
NpcSetDirFrame(0, 21);
WaitEventAutoScriptRun(2, false, false);
NpcSetDirFrame(0, 19);
WaitEventAutoScriptRun(6, false, false);

['@5129'];
NpcMoveToBlock(33, 34, 0, 3);
NpcMoveToBlock(34, 35, 1, 3);
NpcSetDirFrame(2, 0);
ReplaceAndPause();
NpcMoveToBlock(29, 40, 1, 3);
EventSetState(-1, 0, 0);

['@52B2'];
SceneEnter(110);
PartySetPos(52, 32, 1);
FadeOut(0);

['@52E4'];
VideoUpdate(0, false);
SetDlgLower(9, 0, false);
//李逍遥：
//不干，我向来只保护女的
//不替男的卖命
ReplaceAndPause();
SetDlgUpper(0, 0, false);
//秀才：
//兄台再考虑一下吧
ReplaceAndPause();
SetDlgUpper(0, 0, false);
//秀才：
//唉．．十年寒窗苦读，就为了
//这次进京赶考，却因妖畜挡道
//而不得其途．．我该怎么办啊
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//好吧～见人有难不能不管
//我答应护送你过这段山路
//我们的脚程可是很快的，
//你可要跟紧点
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//秀才：
//好．．谢谢。
VideoUpdate(0, false);
SetDlgLower(9, 0, false);
//李逍遥：
//至于这个价钱嘛．．
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//秀才：
//我再加一千，一共是三千
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//好～先付一半！
VideoUpdate(0, false);
SetDlgBox(0);
//得一千五百文钱
CashModify(1500, "");
EventSetState(-1, 0, 0);
PartySetFollower(Sprite.挎包书生, Sprite.无图像);

['@537B'];
NpcSetDirFrame(3, 0);
NpcSetDirFrame(2, 0);
NpcMoveToBlockMutexLock(29, 53, 1, 4);

['@537F'];
NpcSetDirFrame(2, 0);
NpcMoveToBlockMutexLock(30, 52, 1, 4);
EventSetState(-1, 0, 0);

Dos_SetBattlefield(FbpDos.客栈);
BattleStart(36, "@A073", "");
NpcSetFrame(1);
PartySetPos(19, 22, 1);
Dos_SetBattlefield(FbpDos.女娲神殿);
ReplaceAndPause();
NpcSetFrame(2);
VideoUpdate(0, false);
AddItem(202, 0);
SetDlgCenter(0, false);
//"剖开蛤蟆肚，得五毒珠"
ReplaceAndPause();
SetDlgCenter(0, false);
//蛤蟆精已死

['@53EC'];
MusicPlay(Music.神木林, false, false);
EventSetState(1910, 2, 0);
EventModifyPos(104, 5, 32, 0);
EventSetTriggerScript(104, 5, "@540B");
EventSetDirFrame(104, 5, 0, 0);
VideoUpdate(0, false);
RoleMoveOneStep(-16, 8, 0);
VideoUpdate(0, false);
RoleMoveOneStep(-16, 8, 0);
RoleSetDirFrame(0, 0, 1);
VideoUpdate(0, false);
SetDlgUpper(25, 0, false);
//林月如：
//李大哥～我越想越不对！
RoleSetDirFrame(3, 0, 0);
VideoUpdate(0, false);
RoleSetDirFrame(2, 0, 0);
VideoUpdate(0, false);
SetDlgUpper(22, 0, false);
//林月如：
//我觉得那女人绝非善类
//一定是有什么见不得人的勾当
//才会躲在洞窟里，还不许别人
//靠近这里
SetDlgLower(1, 0, false);
//李逍遥：
//我也这么觉得
Replace();
['Scene_00102_Enter'];
Dos_SetBattlefield(FbpDos.白苗街巷);
MusicPlay(Music.神木林, false, false);

['@540B'];
SetDlgLower(23, 0, false);
//林月如：
//哇．．　妖．．妖怪！
VideoUpdate(0, false);
SetDlgLower(2, 0, false);
//李逍遥：
//姑娘，你快过来
//那只大蟾蜍可能有毒啊！
VideoUpdate(0, false);
SetDlgUpper(84, 0, false);
//金蟾鬼母：
//哼．．毒？　人心更毒！
VideoRestore();
//比起天下人恶毒的耻笑、凌辱
//还有什么毒可怕？
SetDlgLower(24, 0, false);
//林月如：
//你．．你的脸．．(
VideoUpdate(0, false);
SetDlgUpper(84, 0, false);
//金蟾鬼母：
//既然被你们看到我的脸
//就别想活着走出此洞窟！
NpcSetDirFrame(0, 0);
VideoUpdate(0, false);
SetDlgUpper(84, 0, false);
//金蟾鬼母：
//乖儿子～
//这对男女就给你当点心
NpcSetDirFrame(3, 0);
VideoUpdate(0, false);
EventSetState(-1, 0, 0);
EventSetDirFrame(104, 6, 0, 1);
EventSetStateSequence(104, 7, 14, 2);
BattleStart(36, "@A073", "");
MusicPlay(Music.险境_2, false, false);

['@5587'];
NpcMoveToBlockMutexLock(41, 74, 1, 2);
EventSetState(2339, 0, 0);

['@5666'];
EventModifyPos(-1, -1, 0, -1);
GotoWithNop("@5666", 0);

['@56AF'];
NpcMoveToBlock(42, 24, 0, 3);

['@56B8'];
EventWalkOneStep(-1, -1, 6, 3);
EventWalkOneStep(-1, -1, 4, 2);
EventWalkOneStep(-1, -1, 1, 1);
EventWalkOneStep(-1, -1, 1, 1);
EventWalkOneStep(-1, -1, 1, 1);
EventAnimate(Direction.Current);
NpcSetDirFrame(3, 0);
EventAnimate(Direction.Current);
EventAnimate(Direction.Current);
EventAnimate(Direction.Current);
EventAnimate(Direction.Current);
EventAnimate(Direction.Current);
EventAnimate(Direction.Current);
EventAnimate(Direction.Current);
EventAnimate(Direction.Current);
EventAnimate(Direction.Current);
EventAnimate(Direction.Current);
EventWalkOneStep(-1, -1, 2, 1);
EventWalkOneStep(-1, -1, 4, 2);
EventWalkOneStep(-1, -1, 6, 3);
['@56CC'];
EventWalkOneStep(-1, -1, 8, 4);
GotoWithNop("@56CC", 0);

['@5745'];
ReplaceAndPause();
NpcSetFrame(1);
WaitEventAutoScriptRun(2, false, false);
NpcSetFrame(2);
WaitEventAutoScriptRun(2, false, false);
NpcSetFrame(3);
WaitEventAutoScriptRun(7, false, false);
NpcSetFrame(4);
ReplaceAndPause();
NpcSetFrame(5);
ReplaceAndPause();
NpcSetFrame(6);
ReplaceAndPause();
NpcSetFrame(7);
WaitEventAutoScriptRun(6, false, false);
NpcSetFrame(6);
WaitEventAutoScriptRun(2, false, false);
NpcSetFrame(5);
WaitEventAutoScriptRun(2, false, false);
NpcSetFrame(4);
WaitEventAutoScriptRun(5, false, false);
NpcSetFrame(3);
ReplaceAndPause();
NpcSetFrame(2);
ReplaceAndPause();
NpcSetFrame(1);
ReplaceAndPause();
NpcSetFrame(0);

['@580F'];
NpcMoveToBlockMutexLock(37, 95, 0, 4);
EventSetState(-1, 0, 0);

['@5822'];
NpcMoveToBlockMutexLock(50, 82, 0, 4);
EventSetState(-1, 0, 0);

['@5847'];
SceneEnter(153);
PartySetPos(14, 72, 1);
FadeOut(0);

['@5877'];
//青衣弟子：
//你们真的要去闯锁妖塔啊！？
//哗．．希望你们能活着回来
Replace();
SceneEnter(162);
PartySetPos(14, 108, 1);
FadeOut(0);

['@59E1'];
//青衣弟子：
//我可不管了
//你别害我被掌门骂啊！

['@59E5'];
//酒剑仙：
//怎么啦？
//看你一副气急败坏的样子

['@59E9'];
NpcMoveToBlockMutexLock(27, 71, 0, 4);
EventSetState(2679, 2, 0);
EventSetState(-1, 0, 0);

['@59EF'];
EventSetTriggerMode(-1, -1, false, 0);
NpcSetDirFrame(0, 0);
PartySetPos(33, 78, 1);
RoleSetDirFrame(2, 0, 0);
RoleSetDirFrame(2, 0, 1);
EventSetTriggerScript(159, 2, "@5877");
VideoUpdate(0, false);
SetDlgUpper(7, 0, false);
//李逍遥：
//前辈！　这是什么意思？
VideoUpdate(0, false);
SetDlgLower(63, 0, false);
//剑圣：
//嗯？　阿青怎么还没把这
//东西烧掉呢！　真是的．．
VideoUpdate(0, false);
SetDlgUpper(7, 0, false);
//李逍遥：
//不．．我是问～原来持有
//这佛珠的主人呢？！
//您是不是把她关起来了？
VideoUpdate(0, false);
SetDlgLower(63, 0, false);
//剑圣：
//妖邪魔物，自该打入锁妖塔
VideoUpdate(0, false);
SetDlgUpper(5, 0, false);
//李逍遥：
//你．．．竟然．．
SetDlgLower(63, 0, false);
//剑圣：
//怎么了？有什么不对吗？
VideoUpdate(0, false);
SetDlgUpper(5, 0, false);
//李逍遥：
//她．．她是我的朋友啊！
VideoRestore();
//她只是一个柔弱的女孩子
//你把她当作妖怪囚入那种地方
//岂不是要致她于死地！？
VideoUpdate(0, false);
SetDlgLower(63, 0, false);
//剑圣：
//朋友？　李少侠，以后
//少去结交那些邪魔歪道
VideoRestore();
//修炼仙剑派的剑术者，最忌
//受到狐精鬼魅所诱，丧失心
//志、因而坠入魔道。
//这番道理你要明白呀．．
VideoUpdate(0, false);
SetDlgUpper(5, 0, false);
//李逍遥：
//我不是来听你这些大道理
//请你马上把灵儿放出来！！
EventSetDirFrame(160, 2, 3, 0);
VideoUpdate(0, false);
SetDlgLower(63, 0, false);
//剑圣：
//你死了这条心吧！
//锁妖塔内乃另一处世界，收入
//塔中的妖怪，绝无放出之途
VideoUpdate(0, false);
SetDlgUpper(5, 0, false);
//李逍遥：
//你们．．把人命当成什么了？
SetDlgLower(63, 0, false);
//剑圣：
//对长辈说话是这种态度吗！
VideoUpdate(0, false);
SetDlgLower(37, 0, false);
//酒剑仙：
//哎唉呀！你们两个怎么回事
//突然吵起来了？
VideoUpdate(0, false);
SetDlgUpper(5, 0, false);
//李逍遥：
//你们不放人，我自己去救！
VideoUpdate(0, false);
SetDlgLower(63, 0, false);
//剑圣：
//哼～　不懂事！
EventSetDirFrame(160, 1, 2, 0);
VideoUpdate(0, false);
SetDlgLower(63, 0, false);
//剑圣：
//本派创立百年以来
//从未有人进入塔中能活着回来
//你要是不怕死就请自便吧！
EventSetAutoScript(160, 1, "@59E9");
WaitEventAutoScriptRun(20, false, false);
EventSetDirFrame(160, 2, 2, 0);
WaitEventAutoScriptRun(4, false, false);
EventSetDirFrame(160, 2, 1, 0);
WaitEventAutoScriptRun(12, false, false);
EventSetDirFrame(160, 2, 3, 0);
WaitEventAutoScriptRun(8, false, false);
SetDlgLower(37, 0, false);
//酒剑仙苦笑曰：
//逍遥～你这玩笑可开大了
RoleSetDirFrame(1, 0, 0);
VideoUpdate(0, false);
SetDlgUpper(5, 0, false);
//李逍遥：
//前辈，我是认真的！
VideoUpdate(0, false);
SetDlgLower(37, 0, false);
//酒剑仙：
//凡事都太认真就不好了
//我师兄说的没错，进塔
//容易、出塔难
VideoRestore();
//收入锁妖塔的全是极凶恶的
//妖魔，数百年来从没有一个
//人进到塔内深处还能活着回
//来的
VideoUpdate(0, false);
SetDlgUpper(7, 0, false);
//李逍遥：
//换句话说，就是有人
//曾进入塔中啰？
VideoUpdate(0, false);
SetDlgLower(37, 0, false);
//酒剑仙：
//是．．是没错．．
//在我太师父那一代，曾发生过
//一件惨事。有一位我的太师叔
//犯了门规，畏罪逃入锁妖塔中
//当时本门数十位弟子追入缉捕
//结果没有一个人回来。
//自此以後，太师父立下规定
//严禁门下弟子进入锁妖塔
//违者尽废武功并逐出师门．．
VideoUpdate(0, false);
SetDlgUpper(7, 0, false);
//李逍遥：
//我不做蜀山弟子
//就不必遵守你们的门规！
VideoUpdate(0, false);
SetDlgLower(24, 0, false);
//林月如：
//李大哥．．．前辈说的没错
//此事非人类之力所能及
//救人的事，须从长计议才是
VideoUpdate(0, false);
SetDlgUpper(5, 0, false);
//李逍遥：
//不！　灵儿挺得了那么久吗？
//况且，她根本没有做错任何事
//为何要受这种罪？！
WaitEventAutoScriptRun(8, false, false);
SetDlgCenter(0, false);
//众人默然．．．．
WaitEventAutoScriptRun(10, false, false);
EventSetDirFrame(160, 2, 0, 0);
VideoUpdate(0, false);
SetDlgLower(37, 0, false);
//酒剑仙：
//唉．．好吧．．．
VideoRestore();
//跟我到外面来！
EventSetState(2652, 0, 0);
SceneSetScript(159, "@5A95", "");
SceneEnter(159);
FadeOut(0);

['@5A95'];
PartySetRole(1, 0, 0);
PartySetPos(26, 90, 0);
RoleSetDirFrame(2, 0, 0);
EventSetState(2649, 2, 0);
EventSetState(2650, 2, 0);
WaitEventAutoScriptRun(6, false, false);
SetDlgLower(37, 0, false);
//酒剑仙：
//你当真非要去不可？
SetDlgUpper(8, 0, false);
//李逍遥：
//晚辈心意已决！
WaitEventAutoScriptRun(6, false, false);
EventSetDirFrame(159, 5, 3, 0);
WaitEventAutoScriptRun(4, false, false);
EventSetDirFrame(159, 5, 0, 0);
WaitEventAutoScriptRun(4, false, false);
SetDlgLower(37, 0, false);
//酒剑仙：
//唉～哎．．造化弄人啊
EventSetAutoScript(159, 5, "@5AEF");
WaitEventAutoScriptRun(25, false, false);
SetDlgLower(37, 0, false);
//酒剑仙：
//收下这些吧．
VideoUpdate(0, false);
SetDlgCenter(0, false);
//$05酒剑仙传授给李逍遥"酒神咒"、
//"醉仙望月步"、"仙风云体术"，
//并赠予"雷灵珠"、符咒若干张
//以及"酒"二壶
HeroAddMagic(30008, 1);
HeroAddMagic(88, 1);
HeroAddMagic(91, 1);
AddItem(204, 0);
AddItem(2, 3);
AddItem(6, 3);
AddItem(3, 3);
AddItem(26, 2);
VideoUpdate(0, false);
SetDlgLower(37, 0, false);
//酒剑仙：
//$02这些是为师所有的法宝了
//这颗雷灵珠呢，是从蜘蛛精身
//上得到的，反正我也用不着
VideoRestore();
//酒呢～不是给你喝的，而是让
//你使法术用的，这招"酒神咒"
//是我自创的法术，其威力不下
//于本门任何一项绝学
//不过千万要记住．．由于此法
//术威力过于强大，所以一生之
//中只能使用九次，否则必气竭
//而亡
VideoRestore();
//而且～每次使出此招，必耗尽
//全身的灵力，所以除非紧要关
//头，勿轻易使用
EventSetAutoScript(159, 5, "@5AF1");
WaitEventAutoScriptRun(16, false, false);
SetDlgLower(37, 0, false);
//酒剑仙：
//虽是短暂的时日
//毕竟～你我算是师徒一场
//我能帮你的，只有这些了
VideoRestore();
//你．．好自为之．．
WaitEventAutoScriptRun(2, false, false);
EventSetAutoScript(159, 6, "@5AF6");
WaitEventAutoScriptRun(8, false, false);
SetDlgUpper(24, 0, false);
//林月如：
//我．．我跟你去！
RoleSetDirFrame(1, 0, 0);
VideoUpdate(0, false);
SetDlgLower(9, 0, false);
//李逍遥：
//不．．这是我一个人
//的事情，不能连累你
VideoUpdate(0, false);
SetDlgUpper(21, 0, false);
//林月如：
//还说这种话！？
VideoRestore();
//你的事就是我的事，救灵儿
//妹子的事，怎能少我一份？
EventSetState(2650, 0, 0);
PartySetRole(1, 3, 0);
ReplaceAndPause();

['@5AEF'];
NpcMoveToBlockMutexLock(26, 89, 1, 2);

['@5AF1'];
NpcMoveToBlockMutexLock(25, 88, 0, 2);

['@5AF6'];
NpcMoveToBlock(25, 89, 1, 3);

['@5B01'];
EventSetState(2435, 1, 0);
FadeToScene(0, -1);
SetDlgLower(43, 0, false);
//天鬼皇：
//让我来吧！
WaitEventAutoScriptRun(6, false, false);
PartyWalkToBlock(11, 37, 1, 8);
PartyWalkToBlock(13, 39, 1, 4);
RoleSetDirFrame(1, 0, 0);
WaitEventAutoScriptRun(2, false, false);
RoleSetDirFrame(1, 0, 1);
WaitEventAutoScriptRun(16, false, false);
EventSetState(2435, 0, 0);
EventSetDirFrame(149, 2, 0, 1);
WaitEventAutoScriptRun(6, false, false);
EventSetDirFrame(149, 2, 0, 2);
WaitEventAutoScriptRun(6, false, false);
SetDlgCenter(0, false);
//$07"喝～　啊～"~50$02
WaitEventAutoScriptRun(2, false, false);
PlaySound(132);
EventSetDirFrame(149, 2, 0, 3);
WaitEventAutoScriptRun(5, false, false);
EventSetDirFrame(149, 2, 0, 4);
WaitEventAutoScriptRun(4, false, false);
EventSetDirFrame(149, 2, 0, 5);
WaitEventAutoScriptRun(8, false, false);
EventSetDirFrame(149, 2, 0, 6);
EventSetState(2435, 1, 0);
WaitEventAutoScriptRun(4, false, false);
EventSetDirFrame(149, 8, 0, 0);
WaitEventAutoScriptRun(3, false, false);
EventSetDirFrame(149, 8, 3, 0);
WaitEventAutoScriptRun(3, false, false);
SetDlgLower(43, 0, false);
//天鬼皇：
//后会有期！
EventSetState(2435, 0, 0);
FadeToScene(0, -1);
EventSetState(2430, 0, 0);
EventSetState(2431, 0, 0);
EventSetState(2432, 0, 0);

['@5BD7'];
ReplaceAndPause();
['Event_00149_00007_Trigger'];
//坛中妖怪：
//放．．我．．出．．去！
VideoUpdate(0, false);
SetDlgLower(21, 0, false);
//林月如：
//李大哥，要救他出来吗？
GotoWithSelect("@5BD7");
FadeOut(0);
NpcSetFrame(1);
EventSetState(2433, 2, 0);
PartySetPos(29, 91, 1);
RoleSetDirFrame(1, 0, 0);
VideoUpdate(0, false);
SetDlgUpper(43, 0, false);
//天鬼皇：
//是你们放我出来的吗？
//嗯，我应该报答你们才是
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//哦！)
VideoUpdate(0, false);
SetDlgUpper(43, 0, false);
//天鬼皇：
//我的报答，就是吃了你们
//让你们成为我的一部份！
BattleStart(293, "", "");
BattleEnd();
RoleRevive(true, 5);
VideoUpdate(0, false);
SetDlgLower(2, 0, false);
//李逍遥：
//等一下，你先听我说！
VideoUpdate(0, false);
SetDlgUpper(43, 0, false);
//天鬼皇：
//你们还有什么遗愿，说来
//听听吧？等我吃足九十九人
//离开这锁妖塔后，说不定可
//以替你们办到
VideoUpdate(0, false);
SetDlgLower(5, 0, false);
//李逍遥：
//我们救了你，为什么还要被
//你吃掉，这太没道理了吧！
VideoUpdate(0, false);
SetDlgUpper(43, 0, false);
//天鬼皇：
//这是我们天鬼族的规矩
//你们怨不得我
VideoUpdate(0, false);
SetDlgLower(2, 0, false);
//李逍遥：
//我若不放你出来，就不会
//有现在这件事了，对不对？
SetDlgUpper(43, 0, false);
//天鬼皇：
//唔．．．没错
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//事情既然是因我而起，就应该
//由我来承担这责任，你不必负
//责～你说是不是？
VideoUpdate(0, false);
SetDlgUpper(43, 0, false);
//天鬼皇：
//唔．．．这当然！
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//既然是我的责任，而非你的
//就应该照我们人类的规矩来办
VideoUpdate(0, false);
SetDlgUpper(43, 0, false);
//天鬼皇：
//这．．．唔．．好像有道理
VideoUpdate(0, false);
SetDlgLower(3, 0, false);
//李逍遥：
//照我们人类的规矩，就不用
//这样打得你死我活了
//只要被救的人答应替救他的人
//做一件不违悖道义的事就行了
VideoUpdate(0, false);
SetDlgUpper(43, 0, false);
//天鬼皇：
//但是．．我是鬼，你是人
//我能替你做什么事？
VideoUpdate(0, false);
SetDlgCenter(0, false);
//李逍遥心里想：
//"哈～　太好了
//果然鬼怪头脑都很单纯"
VideoUpdate(0, false);
SetDlgLower(3, 0, false);
//李逍遥：
//这样吧．．．你帮我们
//离开这层迷宫到下一层就行了
VideoUpdate(0, false);
SetDlgUpper(43, 0, false);
//天鬼皇：
//小事一件，你们往西北方走
//到一扇铜门旁边等我
EventSetState(2433, 0, 0);
EventSetTriggerScript(149, 3, "@5B01");
ReplaceAndPauseWithNop("@5C44", 0);

['@5C44'];
SetDlgCenter(0, false);
//一个空的坛子

['@5CEA'];
//沉思鬼：
//我应该先踏出左脚．．
//还是先踏出右脚呢？
//你知道这问题的答案吗？
VideoUpdate(0, false);
SetDlgLower(69, 0, false);
//哈哈哈～太可笑了
//原来是这么无聊的问题！
VideoUpdate(0, false);
//沉思鬼：
//怎么是无聊的问题！？
//五百年来这问题一直困扰着我
VideoUpdate(0, false);
SetDlgLower(69, 0, false);
//你把两只脚一齐砍下来
//不就没这问题了
VideoUpdate(0, false);
//沉思鬼：
//啊～～！！　然也～然也．．
EventSetState(-1, 0, 0);
FadeToScene(0, -1);

['@5D13'];
NpcSetFrame(1);
VideoUpdate(0, false);
SetDlgLower(69, 0, false);
//书中仙：
//我在看书，别吵！
NpcSetFrame(0);
VideoUpdate(0, false);
SetDlgUpper(1, 0, false);
//李逍遥：
//等等！　老伯．．
NpcSetFrame(1);
VideoUpdate(0, false);
SetDlgLower(69, 0, false);
//书中仙：
//没礼貌！要叫我仙人
SetDlgUpper(1, 0, false);
//李逍遥：
//仙．．人？
VideoUpdate(0, false);
SetDlgLower(69, 0, false);
//书中仙：
//有何不对！
//老夫生平阅遍经史子集
//拜读诸子百家著作，死后附灵
//于书简之中，五百年来参遍天
//地人三界无数经文
//论学问之渊、知识之广，就连
//天界的神佛也不一定比得过我
//汝等小辈尊我一声书中之仙人
//不过恰如其份
VideoUpdate(0, false);
SetDlgUpper(6, 0, false);
//李逍遥：
//真是失敬了
//　书～中～仙～前辈．．
VideoUpdate(0, false);
SetDlgLower(69, 0, false);
//书中仙：
//哇哈哈～这话听得令人舒坦！
VideoUpdate(0, false);
SetDlgUpper(1, 0, false);
//李逍遥：
//书仙前辈，既然您读过这么
//多书，学问一定很好喔？
SetDlgLower(69, 0, false);
//书中仙：
//问这什么废话！
VideoUpdate(0, false);
SetDlgUpper(6, 0, false);
//李逍遥：
//任何谜题都难不倒您啦？
SetDlgLower(69, 0, false);
//书中仙：
//那是当然！
VideoUpdate(0, false);
SetDlgUpper(6, 0, false);
//李逍遥：
//那～有个问题想请教您．．
VideoUpdate(0, false);
SetDlgCenter(0, false);
//"李逍遥将沉思鬼的
//问题转述一遍．．"
VideoUpdate(0, false);
SetDlgLower(69, 0, false);
//书中仙：
//这问题还不简单！
VideoUpdate(0, false);
SetDlgUpper(1, 0, false);
//李逍遥：
//您可否告诉我们答案
VideoUpdate(0, false);
SetDlgLower(69, 0, false);
//书中仙：
//不行！由我来跟他说
//你们带我走
NpcSetFrame(0);
WaitEventAutoScriptRun(2, false, false);
EventSetState(-1, 0, 0);
EventSetState(2495, 0, 0);
AddItem(230, 0);
VideoUpdate(0, false);
SetDlgCenter(0, false);
//书中仙自动跳入李逍遥行囊中
SetDlgBox(0);
//得到"天书"
EventSetTriggerScript(155, 6, "@5CEA");

['@5D6A'];
NpcMoveToBlock(52, 27, 0, 3);
NpcSetDirFrame(2, 0);

['@5D6D'];
NpcMoveToBlock(52, 26, 1, 3);
NpcSetDirFrame(2, 0);

['@5DA7'];
SetPalette(Palette.平常_日夜);
PartySetPos(48, 26, 1);
HeroSetSprite(0, Sprite.李逍遥, true);
RoleSetDirFrame(2, 0, 0);
EventSetDirFrame(146, 4, 2, 0);
ViewportMove(52, 11, -1);
VideoUpdate(0, false);
SetDlgUpper(90, 0, false);
SetDlgLower(0, 0, false);
//赵灵儿：
//$11"仙灵仙岛藏仙踪　翩翩少年把仙求
//仙宫仙女不相识　错把牛郎当情郎"~80
FadeOut(2);
ViewportMove(0, 0, 0);
VideoUpdate(0, false);
SetDlgLower(10, 0, false);
//李逍遥：
//$01我．．我．．想起来！
//．．我想起来了！~50
EventSetDirFrame(146, 4, 3, 0);
WaitEventAutoScriptRun(2, false, false);
PartyWalkToBlock(49, 25, 1, 4);
WaitEventAutoScriptRun(2, false, false);
SetDlgLower(2, 0, false);
//李逍遥：
//$02灵儿！都是我不好
//是我对不起你！~60
ViewportMove(52, 11, -1);
SetDlgUpper(90, 0, false);
SetDlgLower(0, 0, false);
//赵灵儿：
//$09那已是．．过去．．的事．．~70
ViewportMove(0, 0, 0);
SetDlgLower(5, 0, false);
//李逍遥：
//$04一夜夫妻、一世恩情
//你要是有什么不测
//我岂能独活！？~65
FadeOut(0);
EventSetState(2401, 0, 0);
EventSetState(2402, 1, 0);
HeroSetSprite(0, Sprite.逍遥救下灵儿, true);
PartySetPos(53, 16, 0);
RoleMoveOneStep(0, 0, 10);
RoleSetDirFrame(0, 0, 0);
ViewportMove(0, 0, 0);
RoleMoveOneStep(0, 16, 10);
RoleSetDirFrame(0, 1, 0);
VideoUpdate(0, false);
PlaySound(45);
RoleMoveOneStep(0, 16, 10);
RoleSetDirFrame(0, 0, 0);
VideoUpdate(0, false);
RoleMoveOneStep(0, 16, 10);
RoleSetDirFrame(0, 1, 0);
VideoUpdate(0, false);
RoleMoveOneStep(0, 16, 10);
RoleSetDirFrame(0, 0, 0);
VideoUpdate(0, false);
RoleMoveOneStep(0, 16, 10);
RoleSetDirFrame(0, 1, 0);
VideoUpdate(0, false);
RoleMoveOneStep(0, 16, 10);
RoleSetDirFrame(0, 0, 0);
VideoUpdate(0, false);
RoleMoveOneStep(0, 16, 4);
RoleSetDirFrame(0, 1, 0);
VideoUpdate(0, false);
RoleMoveOneStep(0, 16, 3);
RoleSetDirFrame(0, 0, 0);
VideoUpdate(0, false);
RoleMoveOneStep(0, 16, 2);
RoleSetDirFrame(0, 1, 0);
VideoUpdate(0, false);
RoleMoveOneStep(0, 16, 0);
RoleSetDirFrame(0, 2, 0);
WaitEventAutoScriptRun(0, false, false);
PlaySound(92);
WaitEventAutoScriptRun(0, false, false);
RoleSetDirFrame(0, 3, 0);
WaitEventAutoScriptRun(3, false, false);
RoleSetDirFrame(0, 4, 0);
EventSetAutoScript(146, 5, "@5D6A");
WaitEventAutoScriptRun(14, false, false);
SetDlgUpper(21, 0, false);
//　太好了．．
VideoUpdate(0, false);
SetDlgLower(6, 0, false);
//李逍遥：
//灵儿～　一切都没事了！
WaitEventAutoScriptRun(4, false, false);
SetDlgLower(90, 0, false);
//赵灵儿：
//林姐姐．．我．．
VideoUpdate(0, false);
SetDlgLower(21, 0, false);
//林月如：
//你别在意，当初在苏州时
//我就大概猜出你和李大哥
//的关系了
VideoRestore();
//反倒是～你不会怪我．．
//抢了你的逍遥大哥吧？
VideoUpdate(0, false);
SetDlgLower(90, 0, false);
//赵灵儿：
//林姐姐．．谢谢你
EventSetAutoScript(146, 5, "@5D6D");
WaitEventAutoScriptRun(5, false, false);
SetDlgLower(21, 0, false);
//林月如：
//从今以后你我就是好姐妹啦！
VideoRestore();
//我们三人要永远在一起，永远
//不分开！)$02
MusicStop(0);
EventSetState(2403, 1, 0);
PlaySound(122);
VideoShake(10, 0);
WaitEventAutoScriptRun(12, false, false);
SetDlgUpper(0, 0, false);
//镇狱明王：
//大胆狂徒！！
//竟敢私纵犯妖，饶不得！
RoleSetAttr(Attribute.AvatarId, 91, 2);
RoleSetAttr(Attribute.SpriteIdInBattle, 5, 2);
RoleSetAttr(Attribute.SpriteId, 512, 2);
RoleSetAttr(Attribute.SoundWeapon, 4, 2);
HeroAddMagic(2, 2);
PartySetRole(1, 2, 3);
RoleModifyHP(true, 999);
Dos_SetBattlefield(FbpDos.血池);
SetBattleMusic(Music.兵凶战危_2);
BattleStart(188, "@A073", "");
MusicPlay(Music.神木林_变奏, false, false);
BattleEnd();
SceneEnter(154);

['@5E33'];
NpcMoveToBlockMutexLock(50, 24, 1, 4);

['@5E51'];
NpcMoveToBlockMutexLock(52, 26, 1, 2);
NpcSetDirFrame(1, 0);

['@6029'];
EventSetDirFrame(154, 4, 1, 0);
WaitEventAutoScriptRun(0, false, false);
EventSetDirFrame(154, 8, 1, 0);
WaitEventAutoScriptRun(2, false, false);
EventSetDirFrame(154, 5, 0, 0);
EventSetDirFrame(154, 6, 1, 0);
WaitEventAutoScriptRun(0, false, false);
EventSetDirFrame(154, 7, 0, 0);
WaitEventAutoScriptRun(0, false, false);
EventSetDirFrame(154, 9, 3, 0);
EventSetDirFrame(154, 10, 1, 0);
WaitEventAutoScriptRun(0, false, false);
EventSetDirFrame(154, 3, 0, 0);
EventSetDirFrame(154, 11, 2, 0);
EventSetDirFrame(154, 12, 2, 0);
WaitEventAutoScriptRun(2, false, false);
EventSetDirFrame(154, 13, 0, 0);
WaitEventAutoScriptRun(0, false, false);
EventSetDirFrame(154, 4, 0, 0);
EventSetDirFrame(154, 6, 0, 0);
WaitEventAutoScriptRun(0, false, false);
EventSetDirFrame(154, 11, 1, 0);
WaitEventAutoScriptRun(2, false, false);
EventSetDirFrame(154, 9, 1, 0);
WaitEventAutoScriptRun(0, false, false);
EventSetDirFrame(154, 10, 3, 0);
EventSetDirFrame(154, 3, 1, 0);
EventSetDirFrame(154, 12, 3, 0);
WaitEventAutoScriptRun(0, false, false);
EventSetDirFrame(154, 4, 1, 0);
WaitEventAutoScriptRun(0, false, false);

['@6049'];
EventSetDirFrame(154, 4, 3, 0);
EventSetDirFrame(154, 5, 3, 0);
EventSetDirFrame(154, 6, 3, 0);
EventSetDirFrame(154, 7, 3, 0);
EventSetDirFrame(154, 8, 2, 0);
EventSetDirFrame(154, 9, 2, 0);
EventSetDirFrame(154, 10, 2, 0);
EventSetDirFrame(154, 11, 3, 0);
EventSetDirFrame(154, 12, 3, 0);
EventSetDirFrame(154, 13, 3, 0);

['@6054'];
NpcMoveToBlock(47, 25, 1, 3);
NpcMoveToBlock(48, 26, 0, 3);
NpcMoveToBlock(45, 28, 1, 3);
EventSetState(-1, 0, 0);

['@6059'];
NpcMoveToBlock(48, 25, 1, 3);
NpcMoveToBlock(45, 28, 1, 3);
EventSetState(-1, 0, 0);

['@605D'];
NpcMoveToBlock(48, 19, 0, 3);
EventSetState(-1, 0, 0);

['@6060'];
NpcMoveToBlock(47, 20, 0, 3);
EventSetState(-1, 0, 0);

['@6063'];
NpcMoveToBlock(48, 28, 0, 3);
NpcMoveToBlock(45, 30, 1, 3);
EventSetState(-1, 0, 0);

['@6067'];
NpcMoveToBlock(45, 28, 1, 3);
EventSetState(-1, 0, 0);

['@606A'];
NpcMoveToBlock(45, 21, 1, 3);
EventSetState(-1, 0, 0);

['@606D'];
NpcMoveToBlock(48, 19, 0, 3);
EventSetState(-1, 0, 0);

['@6108'];
BattleEnd();
VideoUpdate(0, false);
EventSetState(-1, 0, 0);
PlaySound(262);
FadeToScene(2, -1);

['@620C'];
SceneEnter(176);
PartySetPos(44, 103, 1);
FadeOut(0);

['@6250'];
SceneEnter(181);
PartySetPos(52, 106, 0);
FadeOut(0);

['@6267'];
EventWalkOneStep(-1, -1, 0, -4);
GotoWithNop("@6267", 0);

['@626A'];
EventWalkOneStep(-1, -1, 0, -8);
EventWalkOneStep(-1, -1, 0, -10);
EventWalkOneStep(-1, -1, 0, -12);
EventWalkOneStep(-1, -1, 0, -12);
EventWalkOneStep(-1, -1, 0, -12);
EventWalkOneStep(-1, -1, 0, -12);
EventWalkOneStep(-1, -1, 0, -12);
EventWalkOneStep(-1, -1, 0, -12);
EventWalkOneStep(-1, -1, 0, -12);
EventWalkOneStep(-1, -1, 0, -12);
EventWalkOneStep(-1, -1, 0, -12);
EventSetState(-1, 0, 0);

['@65A1'];
EventSetTriggerMode(-1, -1, false, 0);
VideoUpdate(0, false);
SetDlgLower(6, 0, false);
//李逍遥：
//来～来～给你香蕉！
NpcSetFrame(9);
VideoUpdate(0, false);
SetDlgCenter(0, false);
//　　叽咕～叽咕．．~35
EventSetAutoScript(-1, -1, "");
NpcSetFrame(0);
WaitEventAutoScriptRun(4, false, false);
NpcSetFrame(9);
EventModifyPos(-1, -1, -16, 8);
VideoUpdate(0, false);
NpcSetFrame(10);
EventModifyPos(-1, -1, -16, 8);
RoleSetDirFrame(3, 0, 0);
VideoUpdate(0, false);
NpcSetFrame(9);
EventModifyPos(-1, -1, -16, 8);
VideoUpdate(0, false);
NpcSetFrame(0);
EventModifyPos(-1, -1, -16, 8);
VideoUpdate(0, false);
NpcSetFrame(9);
EventModifyPos(-1, -1, -16, 8);
RoleSetDirFrame(0, 0, 0);
VideoUpdate(0, false);
NpcSetFrame(10);
EventModifyPos(-1, -1, -16, 8);
VideoUpdate(0, false);
NpcSetFrame(9);
EventModifyPos(-1, -1, -16, 8);
VideoUpdate(0, false);
NpcSetFrame(0);
EventModifyPos(-1, -1, -16, 8);
VideoUpdate(0, false);
EventSetState(-1, 0, 0);

['@65CE'];
EventSetTriggerMode(-1, -1, false, 0);
EventSetState(-1, 1, 0);
EventSetAutoScript(-1, -1, "");
VideoUpdate(0, false);
SetDlgLower(6, 0, false);
//李逍遥：
//你也要香蕉，对吧？
VideoUpdate(0, false);
NpcSetFrame(4);
WaitEventAutoScriptRun(2, false, false);
NpcSetFrame(3);
WaitEventAutoScriptRun(2, false, false);
NpcSetFrame(4);
WaitEventAutoScriptRun(2, false, false);
NpcSetFrame(3);
WaitEventAutoScriptRun(2, false, false);
NpcSetFrame(4);
WaitEventAutoScriptRun(2, false, false);
NpcSetFrame(3);
WaitEventAutoScriptRun(2, false, false);
SetDlgLower(6, 0, false);
//李逍遥：
//这只猴子居然会不好意思
VideoRestore();
//来吧！没关系，给你的！
NpcSetFrame(9);
EventSetState(3303, 1, 0);
VideoUpdate(0, false);
SetDlgCenter(0, false);
//吱～！
NpcSetFrame(10);
EventSetAutoScript(193, 59, "Event_00193_00060_Auto");
WaitEventAutoScriptRun(0, false, false);
NpcSetFrame(11);
WaitEventAutoScriptRun(0, false, false);
NpcSetFrame(12);
WaitEventAutoScriptRun(0, false, false);
NpcSetFrame(13);
EventSetState(3304, 1, 0);
WaitEventAutoScriptRun(0, false, false);
NpcSetFrame(14);
WaitEventAutoScriptRun(0, false, false);
RoleSetDirFrame(3, 0, 0);
NpcSetFrame(15);
WaitEventAutoScriptRun(0, false, false);
EventSetState(3305, 1, 0);
WaitEventAutoScriptRun(4, false, false);
RoleSetDirFrame(0, 0, 0);

['@6647'];
EventModifyPos(-1, -1, -12, 6);
NpcSetFrame(23);

['@664A'];
EventModifyPos(-1, -1, 12, 6);
NpcSetFrame(11);

['@664D'];
EventWalkOneStep(-1, -1, -8, 2);
GotoWithNop("@664D", 0);

['@66CA'];
Call("@6647", 0, 0);
EventWalkOneStep(-1, -1, -12, 6);
EventWalkOneStep(-1, -1, -12, 6);
EventWalkOneStep(-1, -1, -12, 6);
Call("@6647", 0, 0);
EventWalkOneStep(-1, -1, -12, 6);
EventWalkOneStep(-1, -1, -12, 6);
EventWalkOneStep(-1, -1, -12, 6);
Call("@6647", 0, 0);
EventWalkOneStep(-1, -1, -12, 6);
EventWalkOneStep(-1, -1, -12, 6);
EventWalkOneStep(-1, -1, -12, 6);
Call("@6647", 0, 0);
EventWalkOneStep(-1, -1, -10, 5);
Call("@664A", 0, 0);
EventWalkOneStep(-1, -1, 12, 6);
EventWalkOneStep(-1, -1, 12, 6);
EventWalkOneStep(-1, -1, 12, 6);
Call("@664A", 0, 0);
EventWalkOneStep(-1, -1, 12, 6);
EventWalkOneStep(-1, -1, 12, 6);

['@66E0'];
NpcSetFrame(17);
NpcSetFrame(18);
NpcSetFrame(19);
NpcSetFrame(19);
NpcSetFrame(19);
NpcSetFrame(19);
NpcSetFrame(18);
EventModifyPos(186, 71, 16, 12);
NpcSetFrame(29);
EventModifyPos(-1, -1, 10, 10);
EventModifyPos(-1, -1, 10, 8);
EventModifyPos(-1, -1, 10, 6);
EventModifyPos(-1, -1, 10, 4);
EventModifyPos(-1, -1, 10, 2);
EventModifyPos(-1, -1, 10, 1);
EventModifyPos(-1, -1, 10, 0);
EventSetState(-1, 0, 0);

['@68A3'];
NpcMoveToBlock(40, 97, 0, 3);
NpcMoveToBlock(45, 91, 1, 8);
NpcMoveToBlock(42, 88, 0, 8);
NpcSetDirFrame(3, 0);
EventSetTriggerMode(-1, -1, true, 2);

['@68C4'];
NpcMoveToBlock(33, 96, 0, 3);
EventSetState(-1, 0, 0);

['@68C7'];
NpcMoveToBlock(32, 96, 1, 3);
EventSetState(-1, 0, 0);

['@68E6'];
NpcMoveToBlock(16, 95, 0, 8);
NpcMoveToBlock(18, 93, 0, 8);
EventSetState(2903, 2, 0);
EventSetState(2904, 2, 0);
EventSetState(-1, 0, 0);

['@6B18'];
NpcMoveToBlock(22, 104, 0, 3);
ReplaceAndPause();
ReplaceAndPause();
NpcMoveToBlockMutexLock(21, 103, 1, 2);

['@6B1D'];
NpcMoveToBlockMutexLock(20, 102, 1, 2);

['@6B1F'];
EventModifyPos(-1, -1, 4, 2);
ReplaceAndPause();
ReplaceAndPause();
EventModifyPos(-1, -1, 4, 2);
ReplaceAndPause();
ReplaceAndPause();
EventModifyPos(-1, -1, 4, 2);
ReplaceAndPause();
ReplaceAndPause();
EventModifyPos(-1, -1, 4, 2);
ReplaceAndPause();
ReplaceAndPause();
EventModifyPos(-1, -1, 4, 2);
ReplaceAndPause();
ReplaceAndPause();
EventModifyPos(-1, -1, 4, 2);
ReplaceAndPause();
ReplaceAndPause();
EventModifyPos(-1, -1, 4, 2);

['@6B33'];
NpcMoveToBlock(30, 83, 0, 3);
NpcSetDirFrame(1, 0);

['@6B36'];
NpcMoveToBlock(32, 81, 0, 3);

['@6B38'];
GotoWithNop("@A9F3", 0);
['@6B39'];
FadeToScene(0, -1);
RoleSetDirFrame(3, 0, 0);
WaitEventAutoScriptRun(7, false, false);
RoleSetDirFrame(1, 0, 0);
WaitEventAutoScriptRun(6, false, false);
RoleSetDirFrame(2, 0, 0);
WaitEventAutoScriptRun(3, false, false);
SetDlgUpper(2, 0, false);
//李逍遥：
//哗．．．
VideoUpdate(0, false);
JumpIfEventStateMatches(274, 6, 0, "@6B72");
EventSetDirFrame(183, 2, 3, 0);
VideoUpdate(0, false);
SetDlgLower(32, 0, false);
//阿奴：
//嘻～虽然水灵珠没找着
//却赚了不少好东西
RoleSetDirFrame(0, 0, 0);
VideoUpdate(0, false);
SetDlgUpper(1, 0, false);
//李逍遥：
//水灵珠应该是什么样子？
VideoUpdate(0, false);
SetDlgLower(27, 0, false);
//阿奴：
//我阿娘说～那是一颗姆指般大
//、水蓝色的宝珠，外表会自然
//透出水气来，而靠近此珠会感
//受到一股凉意
VideoUpdate(0, false);
SetDlgUpper(3, 0, false);
//李逍遥：
//嘿．．照你这么一说
//好像是我小时候常玩的弹珠
VideoUpdate(0, false);
SetDlgLower(28, 0, false);
//阿奴：
//少胡说八道了！
VideoUpdate(0, false);
SetDlgUpper(5, 0, false);
//李逍遥：
//那你的凤凰蛋什么
//时候才能给我呢？
EventSetDirFrame(183, 2, 2, 0);
VideoUpdate(0, false);
SetDlgLower(28, 0, false);
//阿奴：
//你急什么？又不是不给你
//等小凤凰孵出来，剩下的
//蛋壳自然就是你的了！
//难道你忍心伤害这小生命？
VideoUpdate(0, false);
SetDlgUpper(1, 0, false);
//李逍遥：
//好啦，我等就是了
JumpIfEventStateMatches(206, 18, 0, "@6B76");
['@6B72'];
EventSetState(2985, 0, 0);
PartySetRole(5, 1, 0);
ReplaceAndPause();

['@6B76'];
VideoUpdate(0, false);
SetDlgLower(27, 0, false);
//阿奴：
//那．．这段期间
//我先带你去取"火麒麟角"
VideoUpdate(0, false);
SetDlgUpper(10, 0, false);
//李逍遥：
//麒麟角！　你知道在哪里？
VideoUpdate(0, false);
SetDlgLower(29, 0, false);
//阿奴：
//怎么会不知道，不过～
//要先经过我阿娘同意才行
SetDlgUpper(10, 0, false);
//李逍遥：
//你阿娘？
EventSetDirFrame(183, 2, 3, 0);
VideoUpdate(0, false);
SetDlgLower(27, 0, false);
//阿奴：
//哎呀～跟我走就对了
EventSetState(2985, 0, 0);
PartySetRole(5, 1, 0);
ReplaceAndPause();

['@6C45'];
SceneEnter(229);
PartySetPos(6, 31, 1);
FadeOut(0);

['@6C55'];
SceneEnter(173);
PartySetPos(22, 39, 0);
FadeOut(0);

['@6C59'];
EventAnimate(Direction.Current);
GotoWithNop("@6C59", 0);

['@6C77'];
WaitEventAutoScriptRun(16, false, false);
NpcSetDirFrame(0, 0);
WaitEventAutoScriptRun(10, false, false);
NpcSetDirFrame(3, 0);
WaitEventAutoScriptRun(4, false, false);
NpcMoveToBlockMutexLock(24, 36, 1, 4);
NpcMoveToBlockMutexLock(20, 40, 1, 4);

['@6D77'];
NpcSetDirFrame(0, 0);
NpcMoveToBlockMutexLock(38, 49, 0, 4);

['@6D7A'];
SetDlgUpper(82, 0, false);
//老婆婆：
//两种圣药都拿到了吗？
//呵呵．．还好赶上了产期
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//一切都拜托婆婆您了
VideoUpdate(0, false);
SetDlgUpper(82, 0, false);
//老婆婆：
//听阿奴说～你在神殿
//蒙女娲娘娘显灵召见是吗？
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//其实神殿中的石像是巫后本人
//也就是灵儿失散多年的母亲
//晚辈机缘巧遇，才得知原由
//也算是替灵儿了却一番心愿
//晚辈并且在幻境中得到失落的
//水灵珠。我想～这些都是娘娘
//在冥冥之中安排的吧．．
VideoUpdate(0, false);
SetDlgUpper(28, 0, false);
//阿奴：
//水灵珠！？
//逍遥哥，你是从哪里找到的？
VideoUpdate(0, false);
SetDlgLower(6, 0, false);
//李逍遥：
//这．．就．．不必再提起了
VideoUpdate(0, false);
//李逍遥心里想：
//总不能告诉她们
//是当年我爹娘偷走的吧
VideoUpdate(0, false);
SetDlgLower(32, 0, false);
//阿奴：
//快～　快给我！
VideoUpdate(0, false);
SetDlgUpper(82, 0, false);
//老婆婆：
//你要灵珠做什么！？
VideoUpdate(0, false);
SetDlgLower(27, 0, false);
//阿奴：
//有水灵珠就可以解除干旱了！
VideoUpdate(0, false);
SetDlgUpper(82, 0, false);
//老婆婆：
//你知道灵珠的咒文吗？
VideoUpdate(0, false);
SetDlgLower(31, 0, false);
//阿奴：
//我．．不知道．．
VideoUpdate(0, false);
SetDlgUpper(82, 0, false);
//老婆婆：
//傻丫头．．五灵珠的咒文
//只有巫后娘娘才知道，而且
//也只有她的女儿能够继承这
//种力量
VideoRestore();
//这些灵珠，就等待它们真正
//的主人，赵姑娘身子恢复后
//就能重现光芒，让我们族人
//走出苦难的日子
FadeOut(2);
Dos_FadeFbp(FbpDos.黑底屏, 0);
SetDlgCenter(0, false);
//"数月后．．．"~30
MusicPlay(Music.盟誓, false, false);
SetPaletteTime(0);
FadeIn(0);
Delay(20);
RemoveItem(215, 0, "");
RemoveItem(216, 0, "");
SceneEnter(173);
FadeOut(0);

['@6E47'];
NpcMoveToBlock(17, 29, 1, 3);
NpcSetDirFrame(2, 0);

['@6E4C'];
NpcMoveToBlock(21, 33, 1, 3);
NpcMoveToBlock(18, 30, 1, 3);
NpcMoveToBlock(19, 30, 0, 3);
NpcSetDirFrame(1, 0);

['@6E51'];
NpcMoveToBlock(18, 29, 1, 3);

['@6EF5'];
SetDlgLower(82, 0, false);
//老婆婆：
//从"大理城外东南方"一直走
//有座山谷。谷中洞窟内毒虫
//遍布，是我们巫蛊师经常采
//集炼蛊药材之处
VideoRestore();
//我要三十六只"傀儡虫"
//东西找齐了可要赶快回来喔！
//千万不要贪功恋战
VideoRestore();
//如果不小心被困在洞窟中
//记得用土灵珠脱身，莫要逞强
ReplaceAndPause();
['Event_00173_00009_Trigger'];
JumpIfItemCountLessThan(92, 36, "@6EF5");
SetDlgLower(82, 0, false);
//老婆婆：
//呵呵．．干的不错！
GotoWithNop("@AA0E", 0);
['@6F08'];
FadeOut(0);
SceneSetScript(175, "@6F33", "");
SceneEnter(175);

['@6F0C'];
NpcMoveToBlockMutexLock(18, 29, 0, 2);
WaitEventAutoScriptRun(2, false, false);
NpcSetDirFrame(2, 0);
WaitEventAutoScriptRun(30, false, false);
NpcSetDirFrame(3, 0);
WaitEventAutoScriptRun(8, false, false);
NpcMoveToBlockMutexLock(19, 30, 1, 2);
WaitEventAutoScriptRun(4, false, false);
NpcSetDirFrame(0, 0);
NpcMoveToBlockMutexLock(18, 29, 0, 2);
WaitEventAutoScriptRun(2, false, false);
NpcSetDirFrame(0, 0);
NpcSetDirFrame(3, 0);
WaitEventAutoScriptRun(4, false, false);
NpcMoveToBlockMutexLock(19, 30, 1, 2);
WaitEventAutoScriptRun(3, false, false);
NpcSetDirFrame(0, 0);
WaitEventAutoScriptRun(3, false, false);
ReplaceAndPauseWithNop("@6F0C", 0);

['@6F33'];
RoleSetAttr(Attribute.AvatarId, 11, 2);
RoleSetAttr(Attribute.SpriteIdInBattle, 1, 2);
RoleSetAttr(Attribute.SpriteId, 3, 2);
RoleSetAttr(Attribute.SoundWeapon, 3, 2);
EventSetTriggerScript(180, 6, "@6C45");
EventSetTriggerScript(215, 2, "@798E");
EventSetTriggerScript(177, 2, "Event_00177_00002_Trigger");
EventSetStateSequence(175, 4, 7, 0);
EventSetState(2879, 1, 0);
EventSetState(2870, 0, 0);
EventSetState(2871, 1, 0);
EventSetState(2877, 1, 0);
EventSetState(2878, 1, 0);
EventSetState(2876, 2, 0);
EventSetDirFrame(175, 8, 0, 0);
EventSetTriggerScript(175, 8, "@6F79");
PartySetRole(2, 0, 0);
PartySetPos(23, 37, 1);
RoleSetDirFrame(2, 0, 0);
VideoUpdate(0, true);
SetDlgUpper(82, 0, false);
//老婆婆：
//你不多休养几天再走吗？
VideoUpdate(0, false);
SetDlgLower(11, 0, false);
//赵灵儿：
//我想去祭拜我娘亲．．
VideoUpdate(0, false);
SetDlgUpper(82, 0, false);
//老婆婆：
//灵儿姑娘～你的母亲是白苗族
//人，而你父亲是黑苗族的国王
//于情于理你都要尽力去化解这
//两族之间的仇恨
//族人有难，我也不该坐视才对
//可惜～岁月不饶人，这把老骨
//头没这力气去拼命了。
VideoRestore();
//如今婆婆我将一切希望放在
//你们几位年轻一辈的人身上了
//阿奴、李少侠，请你们一定要
//同心协力帮助赵姑娘啊
VideoUpdate(0, false);
SetDlgLower(9, 0, false);
//李逍遥：
//晚辈一定会的
VideoUpdate(0, false);
SetDlgLower(27, 0, false);
//阿奴：
//阿奴会的！
VideoUpdate(0, false);
SetDlgLower(82, 0, false);
//老婆婆：
//去吧．．孩子寄放在我这
//你们可以放心
RoleSetDirFrame(3, 0, 0);
VideoUpdate(0, false);
RoleSetDirFrame(0, 0, 0);
EventSetDirFrame(175, 10, 1, 0);
WaitEventAutoScriptRun(5, false, false);
PartyWalkToBlock(22, 38, 1, 2);
VideoUpdate(0, false);
SetDlgLower(11, 0, false);
//赵灵儿：
//走吧，我们到神殿去
EventSetState(2877, 0, 0);
EventSetState(2878, 0, 0);
PartySetRole(2, 1, 5);
ReplaceAndPause();

['@6F79'];
SetDlgLower(82, 0, false);
//老婆婆：
//去吧！我等你们的好消息

['@6F7D'];
NpcMoveToBlock(24, 33, 0, 8);
NpcMoveToBlock(23, 32, 0, 8);
NpcMoveToBlock(26, 29, 0, 8);
NpcMoveToBlock(22, 25, 0, 8);

['@6F87'];
SetDlgLower(32, 0, false);
//阿奴：
//婆婆～　阿奴来看您了！
VideoUpdate(0, false);
SetDlgUpper(82, 0, false);
//老婆婆：
//呵呵呵．．乖～
VideoRestore();
//阿奴啊．．你怎么会跟
//李少侠在一道呢？
VideoUpdate(0, false);
SetDlgLower(28, 0, false);
//阿奴：
//哦？　婆婆早就认识他啦！
//人家本来是想介绍给您认识呢
VideoRestore();
//这个人呐～好不要脸喔．．
//不但想偷凤凰蛋，还想占
//人家的便宜呢！
//婆婆，您说这人可不可恶啊？
VideoUpdate(0, false);
SetDlgUpper(82, 0, false);
//老婆婆：
//呵呵～凤凰蛋是我叫他去拿的
//你这丫头怎么又不听你阿娘
//的话，乖乖的待在城里享福
//老是跑到深山里玩，真的被
//人占便宜算你活该
VideoUpdate(0, false);
SetDlgLower(29, 0, false);
//阿奴：
//嘻嘻～城里好无聊喔
//山上比较好玩嘛！
VideoUpdate(0, false);
SetDlgUpper(82, 0, false);
//老婆婆：
//李少侠～顺便向你介绍吧
//阿奴是我最小的弟子．．
VideoRestore();
//这丫头别的毛病没有
//就是有点贪玩、又爱黏人
//你跟她在一起可得小心点
//呵呵呵．．．！
VideoUpdate(0, false);
SetDlgUpper(1, 0, false);
//李逍遥：
//她．．原来是前辈的高徒
//难怪小小的年纪，身手就
//如此了得！
VideoUpdate(0, false);
SetDlgUpper(82, 0, false);
//老婆婆：
//你们还有事没办完
//就快去办吧
ReplaceAndPause();
SetDlgLower(29, 0, false);
//阿奴：
//婆婆～阿奴改天再来看您
VideoUpdate(0, false);
SetDlgUpper(82, 0, false);
//老婆婆：
//呵呵～　快去吧！

['@7182'];
EventSetTriggerMode(-1, -1, false, 2);
NpcSetDirFrame(0, 0);
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//士兵：
//少主～您回来啦！
VideoUpdate(0, false);
SetDlgLower(27, 0, false);
//阿奴：
//我不在的这段日子
//一切还好吧？
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//士兵：
//还不是那些黑苗族的人，三天
//两头就来叫阵。前天夜里还跑
//来偷袭，不过都给咱们打回去
//了！
VideoUpdate(0, false);
SetDlgLower(27, 0, false);
//阿奴：
//阿娘有找我吗？
SetDlgUpper(0, 0, false);
//士兵：
//您一声不响的就溜出去
//这次族长好像很不高兴呢
VideoUpdate(0, false);
SetDlgLower(29, 0, false);
//阿奴：
//哎呀～不会有事啦！
//每次她看到我就生气不起来了)
EventSetAutoScript(-1, -1, "@71A9");
ReplaceAndPause();
//士兵：
//少主，请您赶快回去吧．．

['@71A6'];
//士兵：
//少主～您要到哪去？

['@71A9'];
NpcMoveToBlock(46, 25, 1, 3);
NpcSetDirFrame(3, 0);

['@71C6'];
EventSetTriggerMode(-1, -1, false, 0);
//守卫：
//此处是火麒麟洞圣地
//没有族长的准许，不得擅入
VideoUpdate(0, false);
SetDlgLower(27, 0, false);
//阿奴：
//怎么只剩你一个人在看守
//其他的卫兵呢？
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//守卫：
//刚才我们抓到一个可疑的人
//我叫她押他去见族长
VideoUpdate(0, false);
SetDlgLower(27, 0, false);
//阿奴：
//我才刚从阿娘那里过来
//那卫兵比我早走一步，怎么
//我巡视到这头，却没见人影？
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//守卫：
//啊．．．这．．
//也许少主走路比较快(
VideoUpdate(0, false);
SetDlgLower(30, 0, false);
//阿奴：
//鬼扯！她一定是趁机偷懒去了
//去把她找回来！
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//守卫：
//可是．．．(
VideoUpdate(0, false);
SetDlgLower(30, 0, false);
//阿奴：
//这里我暂时替你守着
//快去！
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//守卫：
//是．．！
EventSetAutoScript(-1, -1, "@71FD");
WaitEventAutoScriptRun(16, false, false);
RoleSetDirFrame(0, 0, 0);
WaitEventAutoScriptRun(4, false, false);
RoleSetDirFrame(0, 0, 1);
WaitEventAutoScriptRun(8, false, false);
RoleSetDirFrame(3, 0, 0);
WaitEventAutoScriptRun(2, false, false);
SetDlgUpper(0, 0, false);
//阿奴：
//嘻嘻．．走吧！)

['@71FD'];
NpcMoveToBlock(48, 64, 1, 3);
NpcMoveToBlock(49, 65, 0, 3);
NpcMoveToBlock(48, 66, 0, 3);
NpcMoveToBlock(55, 73, 0, 8);
EventSetState(-1, 0, 0);

['@724E'];
NpcMoveToBlockMutexLock(54, 96, 0, 2);

['@7250'];
NpcMoveToBlock(53, 96, 1, 3);
NpcMoveToBlock(50, 93, 0, 3);
NpcSetDirFrame(2, 0);
WaitEventAutoScriptRun(2, false, false);
NpcSetDirFrame(1, 0);

['@7256'];
NpcMoveToBlock(49, 94, 0, 3);
NpcMoveToBlock(48, 93, 0, 3);
NpcMoveToBlock(51, 96, 0, 3);
NpcMoveToBlock(52, 95, 0, 3);
NpcMoveToBlock(53, 96, 1, 3);
NpcMoveToBlock(55, 94, 1, 3);
NpcMoveToBlockMutexLock(54, 95, 1, 2);
EventSetAutoScript(207, 18, "Event_00207_00018_Auto");

['@743C'];
PartySetPos(29, 75, 0);
Call("@8E29", 0, 0);

['@74F1'];
PartySetPos(15, 18, 1);
VideoUpdate(0, false);
SetDlgUpper(1, 0, false);
//李逍遥：
//令堂允许我们去取
//火麒麟角了吗？
RoleSetDirFrame(0, 0, 0);
VideoUpdate(0, false);
RoleSetDirFrame(1, 0, 0);
VideoUpdate(0, false);
SetDlgLower(29, 0, false);
//阿奴：
//差不多啦，跟我走就对了
RoleSetDirFrame(3, 0, 0);
ReplaceAndPause();

['@7608'];
//守卫：
//族长率众人出城去了

['@764A'];
NpcMoveToBlockMutexLock(37, 46, 1, 2);

['@7669'];
NpcMoveToBlock(37, 46, 0, 3);

['@766B'];
EventSetTriggerScript(207, 1, "Event_00207_00001_Trigger");
PartySetRole(5, 1, 0);
PartySetPos(33, 52, 1);
WaitEventAutoScriptRun(0, false, false);
Call("Event_00205_00002_Trigger", 0, 0);
PartyWalkToBlock(37, 47, 0, 8);
WaitEventAutoScriptRun(6, false, false);
HeroSetSprite(0, Sprite.空空如也, false);
PartySetRole(1, 0, 0);
RoleSetDirFrame(0, 0, 0);
EventSetState(3426, 1, 0);
EventSetState(3424, 1, 0);
WaitEventAutoScriptRun(15, false, false);
//阿奴：
//$08女娲娘娘．．阿奴求您圣灵
//保佑我族，早日脱离苦难．．$02
WaitEventAutoScriptRun(14, false, false);
EventSetState(3426, 0, 0);
EventSetState(3427, 1, 0);
VideoUpdate(0, false);
//阿奴：
//不知麒麟老公公叫我们来这
//里是何用意，如果可能的话～
//我真希望女娲娘娘能显灵．．
EventSetDirFrame(204, 25, 0, 0);
VideoUpdate(0, false);
SetDlgUpper(27, 0, false);
//阿奴：
//喂～你也来参拜娘娘吧
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//这．．．．
VideoUpdate(0, false);
SetDlgUpper(27, 0, false);
//阿奴：
//怎么？
//难道你也像其他外族的异教徒
//一样，宁死也不拜我们的神？
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//李逍遥：
//不．．不，我也没信过什么教
//只是我还不知道你们的礼仪
//怕胡乱拜而亵渎了你们的神明
VideoUpdate(0, false);
SetDlgUpper(32, 0, false);
//阿奴：
//嘻～你果然跟其他汉人不一样
VideoUpdate(0, false);
SetDlgLower(6, 0, false);
//李逍遥：
//我们汉人有一句话叫～
//入境随俗嘛．．
VideoUpdate(0, false);
SetDlgUpper(27, 0, false);
//阿奴：
//女娲娘娘是大地之母
//是对人类最最慈爱的神
//你不懂祭拜的规矩也不要紧
//只要诚心敬意就行了
//娘娘是从不生气的
WaitEventAutoScriptRun(20, false, false);
EventSetAutoScript(204, 22, "@764A");
WaitEventAutoScriptRun(26, false, false);
EventSetDirFrame(204, 25, 2, 0);
WaitEventAutoScriptRun(12, false, false);
EventSetState(3424, 0, 0);
EventSetState(3425, 1, 0);
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//李逍遥：
//庶民李逍遥受麒麟老人指示
//特前来拜见娘娘。庶民无能
//，累及妻子及未出世的孩子
VideoRestore();
//求娘娘保佑她们母子平安
//、长命百岁．．
EventSetAutoScript(204, 23, "@76DD");
WaitEventAutoScriptRun(0, false, false);
SetDlgLower(0, 0, false);
//李逍遥：
//　咦．．！？
WaitEventAutoScriptRun(10, false, false);
EventSetAutoScript(204, 23, "");
SetDlgLower(0, 0, false);
//李逍遥：
//竟然．．我怎么一直没注意到
//这具石像的相貌和灵儿如此神
//似！
EventSetAutoScript(204, 25, "@7669");
WaitEventAutoScriptRun(0, false, false);
SetDlgUpper(28, 0, false);
//阿奴：
//喂！　你想做什么？
//不可以对娘娘不敬呀！
EventSetAutoScript(204, 23, "@76DD");
WaitEventAutoScriptRun(0, false, false);
//李逍遥：
//她．．似乎．．在叫我．．
PlaySound(170);
WaitEventAutoScriptRun(16, false, false);
EventSetState(3425, 0, 0);
WaitEventAutoScriptRun(5, false, false);
//阿奴：
//哎呀～！？
FadeOut(0);
HeroSetSprite(0, Sprite.李逍遥, true);
SceneEnter(201);
ReplaceAndPause();
['Event_00204_00003_Trigger'];
PartySetPos(33, 52, 1);
WaitEventAutoScriptRun(0, false, false);
Call("Event_00205_00002_Trigger", 0, 0);

['@76DD'];
EventAnimate(Direction.Current);
ReplaceAndPauseWithNop("@76DD", 0);

['@76ED'];
VideoWave(0, 0);
EventSetState(3417, 0, 0);
EventSetState(3418, 0, 0);
EventSetState(3419, 0, 0);
EventSetState(3420, 0, 0);
EventSetState(3421, 0, 0);
EventSetState(3422, 0, 0);
EventSetState(3427, 0, 0);
EventSetState(3428, 1, 0);
PartySetPos(36, 47, 1);
HeroSetSprite(0, Sprite.空空如也, true);
RoleSetDirFrame(0, 0, 0);
VideoUpdate(0, false);
//阿奴：
//$07娘娘啊．．阿奴诚心向您乞求
//求您让逍遥大哥平安归来．．$02
VideoUpdate(0, false);
HeroSetSprite(0, Sprite.李逍遥, true);
FadeToScene(2, -1);
SetDlgUpper(1, 0, false);
//李逍遥：
//咦～我回来了吗？
EventSetState(3428, 0, 0);
EventSetState(3429, 1, 0);
WaitEventAutoScriptRun(4, false, false);
SetDlgLower(28, 0, false);
//阿奴：
//啊～　逍遥哥哥！
WaitEventAutoScriptRun(0, false, false);
RoleSetDirFrame(2, 0, 0);
WaitEventAutoScriptRun(2, false, false);
EventSetState(3429, 0, 0);
HeroSetSprite(0, Sprite.李逍遥拥阿奴, true);
RoleSetDirFrame(0, 0, 0);
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//阿奴：
//呜．．．太好了．．
//娘娘终于放你回来了！
RoleSetDirFrame(0, 1, 0);
VideoUpdate(0, false);
SetDlgUpper(6, 0, false);
//李逍遥：
//乖～别哭了
//我这不是平安回来了吗？
VideoUpdate(0, false);
SetDlgLower(31, 0, false);
//阿奴：
//你到底跑到哪去
//人家担心死了呢！
VideoUpdate(0, false);
SetDlgUpper(9, 0, false);
//李逍遥：
//这就说来话长了
//回头我再慢慢告诉你吧
RoleSetDirFrame(0, 2, 0);
VideoUpdate(0, false);
SetDlgLower(28, 0, false);
//阿奴：
//对了～你看！
RoleSetDirFrame(0, 3, 0);
VideoUpdate(0, false);
SetDlgLower(32, 0, false);
//阿奴：
//小凤凰孵出来了
//我们说好的～蛋壳给你
AddItem(215, 0);
SetDlgBox(0);
//得到金凤凰蛋壳
VideoUpdate(0, false);
SetDlgUpper(1, 0, false);
//李逍遥：
//这么快？
VideoUpdate(0, false);
SetDlgLower(31, 0, false);
//阿奴：
//哪有～你一失踪就是一个月
//人家天天在女娲娘娘神像面前
//跪拜祷告，膝盖都破皮了呢！
SetDlgUpper(2, 0, false);
//李逍遥：
//我这一去竟然这么久？
//糟．．希望灵儿不会有事才好
HeroSetSprite(0, Sprite.李逍遥, false);
PartySetRole(1, 5, 0);
RoleSetDirFrame(0, 0, 0);
EventSetTriggerScript(175, 8, "@6D7A");
EventSetTriggerScript(204, 28, "Event_00235_00026_Trigger");
MusicPlay(Music.白河寒秋, false, false);
ReplaceAndPause();

['@7758'];
SetDlgLower(27, 0, false);
//阿奴：
//等一等～麒麟老伯伯要我们
//先到神殿，一定有重要的事
RoleMoveOneStep(16, -8, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(16, -8, 0);
WaitEventAutoScriptRun(0, false, false);

['@798E'];
SceneEnter(229);
PartySetPos(39, 50, 0);
FadeOut(0);

['@7A3C'];
PartySetPosToFirstRole();
RideNpcToPos(15, 97, 1, 4);
PartyWalkToBlock(16, 98, 0, 4);
ReplaceAndPause();
PartySetPosToFirstRole();
RideNpcToPos(8, 90, 1, 4);
PartyWalkToBlock(9, 90, 0, 4);
ReplaceAndPauseWithNop("@7A3C", 0);

['@7B3E'];
HeroAddMagic(30009, 2);

['@7D1D'];
NpcSetDirFrame(0, 0);
ReplaceAndPauseWithNop("Event_00231_00007_Auto", 0);

['@7D20'];
NpcSetDirFrame(1, 0);
ReplaceAndPauseWithNop("Event_00231_00007_Auto", 0);

['@7D23'];
NpcSetDirFrame(3, 0);
ReplaceAndPauseWithNop("Event_00231_00007_Auto", 0);

['@7DD5'];
EventWalkOneStep(-1, -1, 6, -7);
ReplaceAndPause();
ReplaceAndPauseWithNop("@7DD5", 8);
NpcSetDirFrame(2, 0);

['@7DDA'];
NpcMoveToBlockMutexLock(27, 78, 1, 2);
NpcMoveToBlockMutexLock(28, 79, 1, 2);
NpcSetDirFrame(0, 0);

['@7DDE'];
ReplaceAndPause();
NpcSetDirFrame(0, 0);
WaitEventAutoScriptRun(3, false, false);
NpcMoveToBlock(29, 78, 1, 3);
NpcSetDirFrame(0, 0);

['@7DE4'];
ReplaceAndPause();
NpcSetDirFrame(3, 0);
WaitEventAutoScriptRun(3, false, false);
NpcMoveToBlock(19, 83, 1, 3);
EventSetState(-1, 0, 0);

['@7DEA'];
NpcSetDirFrame(3, 0);
WaitEventAutoScriptRun(2, false, false);
NpcMoveToBlock(22, 79, 0, 3);
NpcMoveToBlock(19, 82, 0, 3);
EventSetState(-1, 0, 0);

['@7DF0'];
WaitEventAutoScriptRun(3, false, false);
NpcSetDirFrame(3, 0);
WaitEventAutoScriptRun(4, false, false);
NpcMoveToBlock(19, 83, 0, 3);
EventSetState(-1, 0, 0);

['@7DF6'];
WaitEventAutoScriptRun(2, false, false);
NpcSetDirFrame(2, 0);
WaitEventAutoScriptRun(2, false, false);
NpcSetDirFrame(3, 0);
NpcMoveToBlock(19, 86, 1, 3);
EventSetState(-1, 0, 0);

['@7DFD'];
WaitEventAutoScriptRun(4, false, false);
NpcSetDirFrame(1, 0);
ReplaceAndPause();
NpcMoveToBlock(21, 88, 1, 3);
EventSetState(-1, 0, 0);

['@7E03'];
WaitEventAutoScriptRun(5, false, false);
NpcSetDirFrame(1, 0);
WaitEventAutoScriptRun(2, false, false);
NpcMoveToBlock(24, 88, 1, 3);
EventSetState(-1, 0, 0);

['@7E09'];
NpcSetDirFrame(1, 0);
WaitEventAutoScriptRun(4, false, false);
NpcMoveToBlock(25, 89, 1, 3);
EventSetState(-1, 0, 0);

['@7E0E'];
WaitEventAutoScriptRun(3, false, false);
NpcSetDirFrame(1, 0);
WaitEventAutoScriptRun(4, false, false);
NpcMoveToBlock(24, 89, 0, 3);
EventSetState(-1, 0, 0);

['@7E14'];
WaitEventAutoScriptRun(3, false, false);
NpcSetDirFrame(2, 0);
WaitEventAutoScriptRun(3, false, false);
NpcSetDirFrame(1, 0);
NpcMoveToBlock(18, 85, 1, 3);
EventSetState(-1, 0, 0);

['@7E1B'];
ReplaceAndPause();
NpcSetDirFrame(2, 0);
WaitEventAutoScriptRun(2, false, false);
NpcMoveToBlock(20, 88, 0, 3);
EventSetState(-1, 0, 0);

['@7E21'];
WaitEventAutoScriptRun(3, false, false);
NpcSetDirFrame(1, 0);
WaitEventAutoScriptRun(4, false, false);
NpcSetDirFrame(2, 0);
WaitEventAutoScriptRun(3, false, false);
NpcSetDirFrame(1, 0);
NpcMoveToBlock(21, 90, 0, 3);
EventSetState(-1, 0, 0);

['@7E46'];
SetDlgUpper(45, 0, false);
//白苗族长：
//你．．简直是巫后再世
//莫非你娘附灵在你身上！？
VideoUpdate(0, false);
SetDlgLower(88, 0, false);
//赵灵儿：
//一切都交给我吧
//我会化解这场战争的
ReplaceAndPause();
SetDlgUpper(0, 0, false);
//白苗族长：
//可是～你要怎么做呢？

['@7F4C'];
NpcSetDirFrame(2, 0);
ReplaceAndPause();
NpcMoveToBlockMutexLock(40, 112, 0, 2);
ReplaceAndPause();
NpcSetDirFrame(3, 0);
WaitEventAutoScriptRun(2, false, false);
NpcSetDirFrame(0, 0);

['@7F54'];
EventModifyPos(-1, -1, 48, 8);
NpcMoveToBlock(35, 112, 1, 8);

['@80E7'];
NpcSetDirFrame(3, 0);
NpcSetDirFrame(2, 0);
WaitEventAutoScriptRun(8, false, false);
NpcMoveToBlockMutexLock(36, 50, 1, 2);
NpcMoveToBlockMutexLock(36, 51, 0, 2);
NpcSetDirFrame(3, 0);

['@8173'];
NpcMoveToBlock(37, 52, 0, 3);
NpcSetDirFrame(2, 0);

['@8176'];
NpcMoveToBlockMutexLock(42, 47, 0, 2);

['@8178'];
NpcMoveToBlockMutexLock(42, 47, 0, 2);
EventSetState(-1, 0, 0);

['@817B'];
NpcMoveToBlock(36, 56, 0, 3);
NpcMoveToBlock(38, 53, 1, 3);
NpcMoveToBlock(38, 53, 0, 3);
NpcMoveToBlock(42, 49, 0, 3);
EventSetState(-1, 0, 0);

['@8181'];
NpcMoveToBlock(42, 48, 0, 3);
EventSetState(-1, 0, 0);

['@8184'];
NpcMoveToBlock(42, 46, 0, 3);
EventSetState(-1, 0, 0);

['@8187'];
NpcMoveToBlock(42, 47, 0, 3);
EventSetState(-1, 0, 0);

['@818A'];
NpcMoveToBlock(37, 54, 1, 3);
NpcMoveToBlock(37, 54, 0, 3);
NpcMoveToBlock(42, 49, 0, 3);
EventSetState(-1, 0, 0);

['@818F'];
NpcMoveToBlock(42, 48, 0, 3);
EventSetState(-1, 0, 0);

['@8192'];
NpcMoveToBlock(33, 58, 0, 3);
NpcMoveToBlock(42, 49, 0, 3);
EventSetState(-1, 0, 0);

['@8196'];
NpcMoveToBlock(42, 48, 0, 3);
EventSetState(-1, 0, 0);

['@8199'];
NpcMoveToBlock(33, 56, 0, 3);
NpcMoveToBlock(42, 47, 0, 3);
EventSetState(-1, 0, 0);

['@8250'];
SetDlgLower(73, 0, false);
//巫后：
//壮士．．请小心．．
ReplaceAndPauseWithNop("@8248", 0);

['@8287'];
NpcMoveToBlockMutexLock(35, 70, 0, 2);

['@8289'];
NpcMoveToBlockMutexLock(34, 69, 0, 4);

['@828B'];
NpcMoveToBlock(36, 70, 0, 3);
NpcSetDirFrame(0, 0);

['@828E'];
NpcMoveToBlockMutexLock(35, 70, 1, 2);
NpcSetDirFrame(3, 0);

['@8291'];
NpcMoveToBlock(37, 72, 0, 3);

['@8293'];
NpcMoveToBlock(35, 69, 0, 3);

['@8295'];
NpcMoveToBlock(38, 72, 1, 3);

['@8297'];
NpcMoveToBlock(34, 71, 0, 3);

['@8299'];
NpcMoveToBlock(37, 74, 0, 3);

['@829B'];
EventAnimate(Direction.Current);
ReplaceAndPauseWithNop("@829B", 6);
EventAnimate(Direction.Current);
PlaySound(261);
['@829F'];
EventAnimate(Direction.Current);
ReplaceAndPauseWithNop("@829F", 6);

['@836C'];
ReplaceAndPause();
ReplaceAndPause();
ReplaceAndPause();
ReplaceAndPause();
ReplaceAndPause();
ReplaceAndPause();
ReplaceAndPause();
ReplaceAndPause();
EventModifyPos(-1, -1, 1, 0);
EventModifyPos(-1, -1, -1, 0);
EventModifyPos(-1, -1, 1, 0);
EventModifyPos(-1, -1, -1, 0);
ReplaceAndPause();
ReplaceAndPause();
ReplaceAndPause();
ReplaceAndPause();
ReplaceAndPause();
ReplaceAndPause();
EventModifyPos(-1, -1, 1, 0);
EventModifyPos(-1, -1, -1, 0);
EventModifyPos(-1, -1, 1, 0);
EventModifyPos(-1, -1, -1, 0);
ReplaceAndPauseWithNop("@836C", 4);
EventSetTriggerMode(-1, -1, true, 3);
['Event_00251_00002_Auto'];
NpcChase(128, 4, true);
GotoWithProbability(4, "Event_00251_00002_Auto");
WaitEventAutoScriptRun(10, false, false);
ReplaceAndPauseWithNop("Event_00251_00002_Auto", 0);

['@8413'];
EventSetDirFrame(249, 11, 0, 12);
EventSetDirFrame(249, 12, 0, 12);
WaitEventAutoScriptRun(0, false, false);
EventSetDirFrame(249, 13, 0, 12);
EventSetDirFrame(249, 14, 0, 12);
EventSetDirFrame(249, 15, 0, 12);
WaitEventAutoScriptRun(0, false, false);
EventSetDirFrame(249, 16, 0, 12);
EventSetDirFrame(249, 17, 0, 12);
EventSetDirFrame(249, 18, 0, 12);
EventSetDirFrame(249, 19, 0, 12);
VideoUpdate(0, false);

['@8420'];
EventSetDirFrame(249, 18, 2, 0);
WaitEventAutoScriptRun(0, false, false);
EventSetDirFrame(249, 13, 2, 0);
EventSetDirFrame(249, 19, 2, 0);
WaitEventAutoScriptRun(0, false, false);
EventSetDirFrame(249, 11, 2, 0);
EventSetDirFrame(249, 12, 2, 0);
WaitEventAutoScriptRun(0, false, false);
EventSetDirFrame(249, 14, 2, 0);
WaitEventAutoScriptRun(0, false, false);
EventSetDirFrame(249, 15, 2, 0);
EventSetDirFrame(249, 16, 2, 0);
EventSetDirFrame(249, 17, 2, 0);
WaitEventAutoScriptRun(0, false, false);

['@8531'];
EventSetTriggerMode(-1, -1, false, 2);
SetDlgUpper(0, 0, false);
//石长老：
//你来这里干什么？走开！
//这不是小兵该来的地方
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//您是石长老吗？
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//石长老：
//正是老夫，你找我什么事？
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//是青儿找我来摘一朵莲花的
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//石长老：
//哦．．．．
NpcSetDirFrame(1, 0);
WaitEventAutoScriptRun(5, false, false);
NpcSetDirFrame(3, 0);
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//石长老：
//你进来这里可有被人看见？
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//我这一路都很小心
//应该是没有被别人发现
EventSetAutoScript(-1, -1, "@856A");
WaitEventAutoScriptRun(10, false, false);
SetDlgUpper(0, 0, false);
//石长老：
//娘娘的蛇杖就放在此地下
//宫殿的尽头。你小心点～
//千万别被教主的手下发现
ReplaceAndPause();
SetDlgUpper(0, 0, false);
//石长老：
//唉．．原本是桩美好的姻缘
//当初大王大婚的时候，老夫
//还是他们的媒人呢
VideoRestore();
//黑苗族王子和白苗族大祭司
//相识相爱而结成夫妻，两族
//人民化敌为友，举国欢腾
//想不到今天却变成这种结局
ReplaceAndPause();
SetDlgUpper(0, 0, false);
//石长老：
//你还在这里干什么？
//东西拿到了就快交给娘娘

['@856A'];
NpcMoveToBlockMutexLock(46, 94, 0, 4);
NpcSetDirFrame(0, 0);

['@861A'];
NpcMoveToBlock(31, 44, 1, 3);

['@861C'];
NpcMoveToBlock(33, 42, 1, 3);
EventSetState(-1, 0, 0);

['@86B6'];
NpcMoveToBlock(34, 103, 0, 3);
NpcSetDirFrame(0, 0);

['@86E6'];
NpcSetDirFrame(1, 0);
NpcSetDirFrame(2, 0);
NpcSetDirFrame(3, 0);
NpcSetDirFrame(0, 0);

['@86EB'];
//船商：
//你怎么会有这条手绢？
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//李逍遥：
//是一位苗族打扮的老妇人
//交给我的，她说：她带小青的
//女儿来找灵月宫主
VideoUpdate(0, false);
EventSetAutoScript(-1, -1, "@86E6");
WaitEventAutoScriptRun(4, false, false);
EventSetState(-1, 0, 0);
EventSetState(4726, 2, 0);
PlaySound(263);
FadeToScene(2, -1);
SetDlgUpper(72, 0, false);
//灵月宫主：
//贫道正是灵月，请问公子
//公主在什么地方？
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//在山神庙，我来带路吧！
EventSetState(4677, 0, 0);
EventSetTriggerScript(269, 2, "@8709");
EventSetTriggerMode(269, 2, true, 2);
EventSetState(4726, 0, 0);
SceneSetScript(269, "@8709", "");
SceneEnter(269);

['@8709'];
EventSetState(4674, 0, 0);
EventSetState(4675, 1, 0);
EventSetState(4679, 1, 0);
PartySetPos(23, 23, 1);
RoleSetDirFrame(2, 0, 0);
ViewportMove(26, 19, 1);
SetDlgLower(72, 0, false);
//灵月宫主：
//好了，你的脚应该没事了
EventSetDirFrame(269, 4, 0, 0);
WaitEventAutoScriptRun(5, false, false);
EventSetDirFrame(269, 4, 3, 0);
WaitEventAutoScriptRun(5, false, false);
EventSetDirFrame(269, 4, 0, 0);
VideoUpdate(0, false);
SetDlgUpper(74, 0, false);
//小女孩：
//阿姨！你的法术好棒喔
VideoUpdate(0, false);
SetDlgLower(72, 0, false);
//灵月宫主：
//小公主～你想学吗？
VideoUpdate(0, false);
SetDlgUpper(74, 0, false);
//小女孩：
//嗯～我想学！
VideoRestore();
//阿姨，是不是我学会这法术
//坏人就不敢欺侮我阿娘了
VideoUpdate(0, false);
SetDlgLower(72, 0, false);
//灵月宫主：
//水月宫的法术是用来
//救人，而非与人争斗的，
//你可要记住这句话。
EventSetDirFrame(269, 3, 1, 0);
VideoUpdate(0, false);
SetDlgLower(75, 0, false);
//老妇人：
//殿下，以后这位阿姨
//就当你的师父好不好？
SetDlgUpper(74, 0, false);
//小女孩：
//好啊！
EventSetState(4675, 0, 0);
EventSetState(4676, 0, 0);
EventSetState(4679, 0, 0);
SceneSetScript(274, "@8752", "");
SceneEnter(274);
FadeOut(0);
ReplaceAndPause();

ReplaceAndPause();
NpcSetDirFrame(0, 0);
ReplaceAndPause();
NpcSetDirFrame(1, 0);
ReplaceAndPause();
NpcSetDirFrame(0, 0);
NpcSetDirFrame(3, 0);

['@8745'];
NpcMoveToBlock(34, 90, 0, 3);
NpcMoveToBlock(35, 89, 0, 3);
WaitEventAutoScriptRun(5, false, false);
NpcSetDirFrame(3, 0);

['@874A'];
NpcMoveToBlockMutexLock(34, 90, 0, 2);
NpcMoveToBlockMutexLock(34, 89, 1, 2);
ReplaceAndPause();
NpcSetDirFrame(1, 0);

['@874F'];
NpcMoveToBlockMutexLock(33, 90, 1, 2);
NpcSetDirFrame(2, 0);

['@8752'];
PartySetPos(29, 86, 1);
RoleSetDirFrame(3, 0, 0);
EventSetState(4727, 1, 0);
EventSetState(4728, 1, 0);
EventSetState(4729, 1, 0);
ViewportMove(0, 0, 0);
WaitEventAutoScriptRun(5, false, false);
SetDlgLower(72, 0, false);
//灵月宫主：
//李公子，我们就此告别
EventSetDirFrame(274, 8, 0, 0);
WaitEventAutoScriptRun(2, false, false);
EventSetDirFrame(274, 8, 3, 0);
WaitEventAutoScriptRun(2, false, false);
//灵月宫主：
//　上船吧．．
EventSetAutoScript(274, 10, "@8745");
WaitEventAutoScriptRun(2, false, false);
EventSetAutoScript(274, 9, "@874A");
WaitEventAutoScriptRun(5, false, false);
EventSetAutoScript(274, 8, "@874F");
WaitEventAutoScriptRun(40, false, false);
EventSetDirFrame(274, 8, 2, 0);
PartyWalkToBlock(32, 89, 0, 4);
SetDlgUpper(1, 0, false);
//李逍遥：
//道长～！
EventSetDirFrame(274, 8, 1, 0);
VideoUpdate(0, false);
SetDlgLower(72, 0, false);
//灵月宫主：
//您还有什么事吗？
VideoUpdate(0, false);
SetDlgUpper(6, 0, false);
//李逍遥：
//您相信时光倒流吗？
VideoUpdate(0, false);
SetDlgLower(72, 0, false);
//灵月宫主：
//相信．．
//有一种法术叫回魂仙梦
//可以使人在梦中看到过去
VideoUpdate(0, false);
SetDlgUpper(1, 0, false);
//李逍遥：
//如果这是场梦，那么～
//该如何结束这场梦呢？
VideoUpdate(0, false);
SetDlgLower(72, 0, false);
//灵月宫主：
//如果这是场梦，当做梦的人
//在梦中满足他心底的愿望时
//自然而然就会回到现实中了
EventSetDirFrame(274, 10, 0, 0);
VideoUpdate(0, false);
SetDlgLower(74, 0, false);
//小女孩：
//姥姥～　阿娘呢？
//阿娘怎么还没有来？
EventSetDirFrame(0, 0, 2, 0);
VideoUpdate(0, false);
SetDlgUpper(75, 0, false);
//老妇人：
//你母亲有事情不能来
//我们先去师父的家好不好？
EventSetDirFrame(274, 8, 2, 0);
VideoUpdate(0, false);
SetDlgLower(74, 0, false);
//小女孩：
//不要！我要等阿娘来
//再一起走嘛．．
VideoUpdate(0, false);
SetDlgUpper(72, 0, false);
//灵月宫主：
//不行喔～师父告诉你阿娘
//灵儿很乖、灵儿在仙灵岛等她
//如果我们不回去仙灵岛，等你
//阿娘来了，会找不到我们的
VideoUpdate(0, false);
SetDlgLower(74, 0, false);
//赵灵儿：
//喔．．．．
VideoUpdate(0, false);
SetDlgUpper(72, 0, false);
//灵月宫主：
//好了．．我们走吧
EventSetAutoScript(274, 5, "@87DA");
EventSetAutoScript(274, 8, "@87DA");
EventSetAutoScript(274, 9, "@87DA");
EventSetAutoScript(274, 10, "@87DA");
EventSetState(4662, 2, 0);
EventSetState(4730, 2, 0);
WaitEventAutoScriptRun(27, false, false);
RoleSetDirFrame(2, 0, 0);
WaitEventAutoScriptRun(20, false, false);
PartyWalkToBlock(31, 88, 0, 2);
WaitEventAutoScriptRun(4, false, false);
SetDlgLower(55, 0, false);
//李大娘：
//请问你有没有看到
//我家的小李子啊？
EventSetDirFrame(274, 11, 0, 0);
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//李大娘：
//这孩子不知又死到哪去了
EventSetAutoScript(274, 11, "@87C9");
ReplaceAndPause();

['@87C9'];
NpcMoveToBlock(13, 102, 0, 3);
NpcMoveToBlock(18, 107, 1, 3);
WaitEventAutoScriptRun(4, false, false);
NpcSetDirFrame(2, 0);
WaitEventAutoScriptRun(16, false, false);
NpcSetDirFrame(3, 0);
WaitEventAutoScriptRun(6, false, false);
NpcMoveToBlock(23, 112, 0, 3);
NpcSetDirFrame(2, 0);
WaitEventAutoScriptRun(10, false, false);
NpcMoveToBlock(11, 100, 0, 3);
WaitEventAutoScriptRun(4, false, false);
NpcSetDirFrame(2, 0);
WaitEventAutoScriptRun(10, false, false);
NpcMoveToBlock(5, 106, 0, 3);
EventSetState(-1, 0, 0);

['@87DA'];
EventModifyPos(-1, -1, 2, -1);
GotoWithNop("@87DA", 320);
EventSetState(-1, 0, 0);

['@87E0'];
NpcMoveToBlock(33, 103, 1, 3);
NpcMoveToBlock(35, 101, 1, 3);
NpcSetDirFrame(1, 0);
ReplaceAndPause();
EventSetState(4661, 0, 0);
ReplaceAndPause();
NpcMoveToBlock(34, 100, 1, 3);

['@87E8'];
NpcMoveToBlock(34, 101, 0, 3);

['@8860'];
ReplaceAndPause();
['Event_00267_00008_Trigger'];
SetDlgUpper(85, 0, false);
//小孩：
//木剑呢？
//不是说好要给我一把木剑吗？
VideoUpdate(0, false);
RemoveItem(106, 0, "@8860");
SetDlgLower(3, 0, false);
//瞧～这不是拿来了？
VideoUpdate(0, false);
SetDlgUpper(85, 0, false);
//小孩：
//好～交换！
SetDlgBox(0);
//得到水灵珠
AddItem(205, 0);
VideoWave(1, 2);
WaitEventAutoScriptRun(60, false, false);
VideoFadeAndUpdate(-1);
SceneSetScript(204, "@76ED", "");
SceneEnter(204);

['@8B3C'];
EventSetState(-1, 1, 0);
NpcSetFrame(1);

['@8D33'];
EventWalkOneStep(-1, -1, 4, -2);
EventModifyPos(-1, -1, 4, -2);
EventModifyPos(-1, -1, 4, -2);
EventModifyPos(-1, -1, 4, -2);
EventWalkOneStep(-1, -1, 4, -2);
EventModifyPos(-1, -1, 4, -2);
EventModifyPos(-1, -1, 4, -2);
EventModifyPos(-1, -1, 4, -2);
EventModifyPos(-1, -1, 4, -2);
EventModifyPos(-1, -1, 4, -2);
EventModifyPos(-1, -1, 4, -2);
EventModifyPos(-1, -1, 4, -2);
EventModifyPos(-1, -1, 4, -2);
EventModifyPos(-1, -1, 4, -2);
EventModifyPos(-1, -1, 4, -2);
EventModifyPos(-1, -1, 4, -2);
GotoWithNop("@8D33", 0);

['@8D45'];
EventWalkOneStep(-1, -1, -4, 2);
EventModifyPos(-1, -1, -4, 2);
EventModifyPos(-1, -1, -4, 2);
EventModifyPos(-1, -1, -4, 2);
EventWalkOneStep(-1, -1, -4, 2);
EventModifyPos(-1, -1, -4, 2);
EventModifyPos(-1, -1, -4, 2);
EventModifyPos(-1, -1, -4, 2);
EventModifyPos(-1, -1, -4, 2);
EventModifyPos(-1, -1, -4, 2);
EventModifyPos(-1, -1, -4, 2);
EventModifyPos(-1, -1, -4, 2);
EventModifyPos(-1, -1, -4, 2);
EventModifyPos(-1, -1, -4, 2);
EventModifyPos(-1, -1, -4, 2);
EventModifyPos(-1, -1, -4, 2);
GotoWithNop("@8D45", 0);

['@8D57'];
EventWalkOneStep(-1, -1, 8, -4);
EventModifyPos(-1, -1, 8, -4);
EventModifyPos(-1, -1, 8, -4);
EventModifyPos(-1, -1, 8, -4);
EventWalkOneStep(-1, -1, 8, -4);
EventModifyPos(-1, -1, 8, -4);
EventModifyPos(-1, -1, 8, -4);
EventModifyPos(-1, -1, 8, -4);
EventModifyPos(-1, -1, 8, -4);
EventModifyPos(-1, -1, 8, -4);
EventModifyPos(-1, -1, 8, -4);
EventModifyPos(-1, -1, 8, -4);
EventModifyPos(-1, -1, 8, -4);
EventModifyPos(-1, -1, 8, -4);
EventModifyPos(-1, -1, 8, -4);
EventModifyPos(-1, -1, 8, -4);
GotoWithNop("@8D57", 0);

['@8D77'];
NpcSetFrame(4);
WaitEventAutoScriptRun(13, false, false);
ReplaceAndPauseWithNop("Event_00005_00007_Auto", 0);

['@8D80'];
EventAnimate(Direction.Northeast);
ReplaceAndPauseWithNop("@8D80", 0);

ReplaceAndPause();
['@8D84'];
EventAnimate(Direction.Southeast);
ReplaceAndPauseWithNop("@8D84", 0);

ReplaceAndPause();
['@8D88'];
EventAnimate(Direction.Northwest);
ReplaceAndPauseWithNop("@8D88", 0);

['@8E0D'];
RoleSetDirFrame(2, 0, 0);
RoleMoveOneStep(10, -10, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(6, -6, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(10, -10, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(6, -6, 0);
WaitEventAutoScriptRun(0, false, false);
['Event_00205_00002_Trigger'];
RoleSetDirFrame(2, 0, 0);
RoleMoveOneStep(10, -10, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(6, -6, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(10, -10, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(6, -6, 0);
WaitEventAutoScriptRun(0, false, false);
RoleSetDirFrame(2, 0, 0);
RoleMoveOneStep(10, -10, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(6, -6, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(10, -10, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(6, -6, 0);
WaitEventAutoScriptRun(0, false, false);

['@8E29'];
RoleSetDirFrame(0, 0, 0);
RoleMoveOneStep(-10, 10, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(-6, 6, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(-10, 10, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(-6, 6, 0);
WaitEventAutoScriptRun(0, false, false);
['Event_00205_00005_Trigger'];
RoleSetDirFrame(0, 0, 0);
RoleMoveOneStep(-10, 10, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(-6, 6, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(-10, 10, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(-6, 6, 0);
WaitEventAutoScriptRun(0, false, false);
['@8E3B'];
RoleSetDirFrame(0, 1, 0);
RoleMoveOneStep(-10, 10, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(-6, 6, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(-10, 10, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(-6, 6, 0);
WaitEventAutoScriptRun(0, false, false);

['@8E99'];
NpcSetFrame(1);
VideoUpdate(0, false);
PlaySound(78);

['@8EA1'];
NpcSetFrame(3);
NpcSetFrame(2);
NpcSetFrame(1);
NpcSetFrame(0);

['@8EA6'];
PlaySound(113);
NpcSetFrame(1);
NpcSetFrame(2);
NpcSetFrame(3);
NpcSetFrame(4);

['@977C'];
SetDlgBox(0);
//无任何效果

['@977F'];
SetDlgBox(0);
//攻击无效

SetDlgBox(0);
//在此场合无法使用

['@99FE'];
JumpIfRoleNotPoisonedByKind(8, "@9A01");
KillRole();

['@9A01'];
RoleApplyPoison(false, 5);

['@9A06'];
JumpIfRoleNotPoisonedByKind(10, "@9A09");
KillRole();

['@9A09'];
RoleApplyPoison(false, 9);

['@9A0E'];
JumpIfRoleNotPoisonedByKind(5, "@9A11");
KillRole();

['@9A11'];
RoleApplyPoison(false, 8);

['@9A16'];
JumpIfRoleNotPoisonedByKind(7, "@9A19");
KillRole();

['@9A19'];
RoleApplyPoison(false, 6);

['@9A1E'];
JumpIfRoleNotPoisonedByKind(9, "@9A21");
KillRole();

['@9A21'];
RoleApplyPoison(false, 10);

['@9A26'];
JumpIfRoleNotPoisonedByKind(6, "@9A29");
KillRole();

['@9A29'];
RoleApplyPoison(false, 7);

['@9A51'];
KillRole();

['@9AAB'];
SetDlgBox(0);
//炼蛊的材料不足

['@9AD2'];
JumpIfPartyNotFacingEvent(18, 5, false, 1, "@9AD4");

['@9AD4'];
JumpIfPartyNotFacingEvent(18, 6, false, 1, "@9AD6");

['@9AD6'];
JumpIfPartyNotFacingEvent(18, 7, false, 1, "@9AD8");

['@9AD8'];
JumpIfPartyNotFacingEvent(18, 8, false, 1, "@9ADA");

['@9ADA'];
JumpIfPartyNotFacingEvent(18, 9, false, 1, "@977C");

['@9AE8'];
SetDlgBox(0);
//此处无法放置
ScriptFailed();

['@9B26'];
JumpIfPartyNotFacingEvent(138, 2, false, 1, "@977C");
EventSetTriggerScript(138, 2, "@409A");
RemoveItem(211, 0, "");

['@9B2E'];
JumpIfPartyNotFacingEvent(119, 8, false, 1, "@9B31");
EventSetTriggerScript(119, 8, "@9B38");

['@9B31'];
VideoUpdate(0, false);
//书信上写著：
//"美丽温柔大方可爱善良贤淑"
//"的阿香小姐，我已仰幕您很久"
//"很久很久了．．．．．．
//"．．．．．．．．．．阿辉。"

['@9B38'];
EventSetTriggerMode(-1, -1, false, 2);
SetDlgUpper(67, 0, false);
//尚书夫人：
//这是什么？　给我的吗？
ReplaceAndPauseWithNop("Event_00119_00008_Trigger", 0);

['@9B41'];
JumpIfPartyNotFacingEvent(101, 15, false, 1, "@977C");
EventSetTriggerScript(101, 15, "@4DE6");
RemoveItem(228, 0, "");

['@9B51'];
JumpIfPartyNotFacingEvent(193, 58, false, 1, "@977C");
EventSetTriggerScript(193, 58, "@65CE");
RemoveItem(231, 0, "");

['@9B83'];
JumpIfEventStateMatches(242, 4, 0, "");
JumpIfEventStateMatches(242, 5, 0, "");
JumpIfEventStateMatches(242, 6, 0, "");
JumpIfEventStateMatches(242, 7, 0, "");
JumpIfEventStateMatches(242, 8, 0, "");
JumpIfEventStateMatches(242, 4, 2, "");
JumpIfEventStateMatches(242, 5, 2, "");
JumpIfEventStateMatches(242, 6, 2, "");
JumpIfEventStateMatches(242, 7, 2, "");
JumpIfEventStateMatches(242, 8, 2, "");
FadeOut(0);
SceneEnter(228);

['@9B90'];
JumpIfCurrentSceneMatches(179, "@9B93");
GotoWithNop("@977C", 0);

['@9B93'];
VideoUpdate(0, false);
EventSetTriggerScript(187, 4, "@6250");
SceneEnter(181);

['@A005'];
SetDlgLower(18, 0, false);
//通通退下．．他是我的朋友
//你们不可以乱来！
SetDlgUpper(0, 0, false);
//吱～　咕．．嘎．．
BattleEnemyEscape();
GotoWithProbability(30, "");
SetDlgLower(3, 0, false);
//这～这些小妖怪真听你的话？
SetDlgUpper(11, 0, false);
//嗯．．它们是我师父养的
//在这里负责守护山谷入口
//所以看到陌生人就会攻击
//其实．．它们平常很乖的

['@A071'];
NpcSetStillTime();

['@A073'];
MusicPlay(Music.战斗失败, true, false);
FadeToRed();
SetDlgCenter(0, false);
//$00
//胜败乃兵家常事也
//大侠请重新来过吧
//$02
LoadLastSave();

['@A088'];
NpcChase(0, 8, false);
ReplaceAndPauseWithNop("@A088", 0);

['@A0A7'];
NpcSetVanishTime(0);
FadeOut(0);

['@A144'];
SetDlgUpper(59, 0, false);
//哦～你这小子可真是深藏不露
//我的手下告诉我说，那个胆大
//包天、不知死活、想跟我们拜
//月教作对的．．就是你？
VideoUpdate(0, false);
SetDlgLower(9, 0, false);
//彼此彼此～小的也没想到客官
//您会是个豺子狼心、强掳弱女
//的江湖败类
VideoUpdate(0, false);
SetDlgUpper(59, 0, false);
//呸！你可知道你在做什么吗？
VideoUpdate(0, false);
SetDlgUpper(59, 0, false);
//我们是苗疆拜月教的使者，这
//趟到中原来，为的是一项攸关
//我苗疆数百万苗民兴亡存续的
//重大任务，你若再插手阻扰，
//将是与我全族人为敌！
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//别跟我说这些我听不懂的大话
//有哪个干强盗的不会编理由？
VideoUpdate(0, false);
SetDlgLower(5, 0, false);
//我只管我看到的．．你们杀人
//行凶、强掳少女。嘿～被我遇
//上了就算是你们的报应！
VideoUpdate(0, false);
SetDlgUpper(59, 0, false);
//．．．．公主殿下！
//请你跟我们回苗疆，我们奉了
//巫王之命，不惜任何代价也一
//定要找到你，把你带回去。
VideoUpdate(0, false);
SetDlgLower(16, 0, false);
//不要！你们杀了姥姥
//还我姥姥的命来！
VideoUpdate(0, false);
SetDlgUpper(59, 0, false);
//乱臣贼子，人人得而诛之！
//这老妖婆将你偷抱出宫逃到中
//原来。害得你和你父王骨肉分
//离十年，是个大叛徒！
//居然还让你拜师水月宫的门下
//让你学习汉人邪魔外道的法术
//你可知这十年来．．
SetDlgLower(18, 0, false);
//你胡说！  我．．我没有爹
//姥姥说我爹爹早死了
VideoUpdate(0, false);
SetDlgUpper(59, 0, false);
//你亲生爹爹是巫王
//统领苗疆各族的领袖
VideoUpdate(0, false);
SetDlgUpper(59, 0, false);
//你被带离开王宫时才六岁
//那时候你还小，所以不明白
VideoUpdate(0, false);
SetDlgLower(16, 0, false);
//骗人～你们骗人！
//我不要再见到你们，你们走开
VideoUpdate(0, false);
SetDlgLower(9, 0, false);
//喂！公主叫你们滚听到了没？
VideoUpdate(0, false);
SetDlgUpper(59, 0, false);
//臭小子！这里没你说话的余地
//你胆敢再阻挠，我连你也杀！
VideoUpdate(0, false);
SetDlgLower(18, 0, false);
//不要！我才不要相信你们的话
//我要跟逍遥哥哥一起去找我娘
VideoUpdate(0, false);
SetDlgLower(5, 0, false);
//听到了没有～灵儿说不跟你们
//走，就是不跟你们走，识相的
//就快滚吧。不然我可要赶人了
SetDlgUpper(59, 0, false);
//好～莫怪我们来硬的！
EnemySetScript(88, EnemyScript.TurnStart, "");
ReplaceAndPause();

['@A1CD'];
SetDlgUpper(41, 0, false);
//女飞贼：
//想抓我？　门都没有！
EnemySetMagic(80, 0);
ReplaceAndPause();
PlaySound(193);
EnemySetMagic(-1, 0);
ReplaceAndPause();
EnemySetMagic(46, 0);
ReplaceAndPause();

['@A201'];
SetDlgUpper(60, 0, false);
//石长老：
//别以为仗着人多就能赢得了我
VideoUpdate(0, false);
SetDlgLower(44, 0, false);
//盖罗娇：
//好说．．石老长您虽神功盖世
//终究要叹岁月不饶人吧
VideoUpdate(0, false);
SetDlgUpper(60, 0, false);
//石长老：
//哼！　老夫就算敌不过你
//也要拼个同归于尽
EnemySetMagic(77, 0);
ReplaceAndPause();
ReplaceAndPause();
EnemySetMagic(32, 0);
ReplaceAndPause();
EnemySetMagic(-1, 0);
ReplaceAndPause();
EnemySetMagic(-1, 0);
BattleSetResult(BattleResult.脚本结束);

['@A5A3'];
EnemySetMagic(72, 3);
ReplaceAndPauseWithNop("Enemy_00142_TurnStart", 0);

['@A5A6'];
EnemySetMagic(53, 4);
ReplaceAndPauseWithNop("Enemy_00142_TurnStart", 0);

['@A81F'];
RoleApplyPoison(true, 10);

['@A827'];
RoleApplyPoison(true, 5);

['@A832'];
SetDlgBox(0);
//道具不足无法使用
ScriptFailed();

['@A838'];
SetDlgBox(0);
//钱不够，只好作罢
ScriptFailed();

['@A840'];
SetDlgBox(0);
//失败　没有效果

['@A846'];
SetDlgCenter(0, false);
//酒不足，无法召唤酒神
ScriptFailed();

['@A851'];
GotoWithProbability(70, "@A840");
GotoWithNop("Item_00067_Use", 0);

['@A858'];
GotoWithProbability(50, "@A840");
GotoWithNop("Item_00068_Use", 0);

['@A873'];
GotoWithProbability(30, "@A840");
KillRole();

['@A974'];
SetDlgLower(2, 0, false);
//灵儿～你还好吧？~60
SetDlgUpper(15, 0, false);
//我．．我没事．
//这点伤．．我还捱得了~60

['@A97A'];
SetDlgLower(2, 0, false);
//哎呀，你伤得不轻呢！
//先替你疗伤再说~60
SetDlgUpper(11, 0, false);
//谢谢．．逍遥哥哥
//你自己也受了伤吧~60

['@A981'];
SetDlgUpper(15, 0, false);
//逍遥哥哥．．对不起．．
//我．．都是我连累了你~60
SetDlgLower(9, 0, false);
//说这什么傻话！
//我保护你是应该的~60

['@A98E'];
SetDlgLower(24, 0, false);
//呜．．好痛喔～不来了啦！~60

['@A991'];
SetDlgUpper(22, 0, false);
//喂～人家不行了啦！
//你看见了没有？~60
SetDlgLower(8, 0, false);
//我的大小姐，你还真麻烦呢~60
VideoUpdate(0, false);
SetDlgUpper(22, 0, false);
//呜．．你根本就不关心我~60
SetDlgLower(10, 0, false);
//这．．你说到哪去了~60

['@A99C'];
SetDlgUpper(22, 0, false);
//喂～别只是顾着对付敌人
//人家受了伤，你都不管吗？~60
SetDlgLower(9, 0, false);
//我来护着你，赶快疗伤吧~60

GotoWithProbability(75, "@A9A8");
GotoWithProbability(66, "@A9AC");
GotoWithProbability(50, "@A9AF");
SetDlgLower(31, 0, false);
//逍遥哥哥，阿奴快没体力了~60

['@A9A8'];
SetDlgUpper(31, 0, false);
//逍遥哥哥，阿奴受了伤呢～
//你怎么都不管阿奴．．~60

['@A9AC'];
SetDlgLower(31, 0, false);
//呜．．好痛喔．．~60

['@A9AF'];
SetDlgLower(2, 0, false);
//阿奴．．你还撑得住吗？~60
SetDlgUpper(31, 0, false);
//呜．．逍遥哥哥，对不起
//都是阿奴拖累了你．．~60

['@A9BF'];
SetDlgLower(5, 0, false);
//　可恶的家伙！~60
SetDlgBox(0);
//李逍遥斗志燃烧，真气恢复
RoleModifyMP(false, 9999);
RoleModifyAttrTemp(Attribute.AttrDefense, 10, 0);

['@A9C6'];
SetDlgLower(5, 0, false);
//　　　可恶～！~60
SetDlgBox(0);
//李逍遥发出怒吼，力量提高
RoleModifyAttrTemp(Attribute.AttrMagicStrength, 25, 0);
RoleModifyAttrTemp(Attribute.AttrDefense, 25, 0);

['@A9CD'];
SetDlgLower(10, 0, false);
//　　啊．．糟了～！~60
RoleModifyAttrTemp(Attribute.AttrFleeRate, 90, 0);
RoleModifyAttrTemp(Attribute.ResistancePoison, 90, 0);

['@A9DC'];
SetDlgLower(23, 0, false);
//可恶～我替你报仇！~60
SetDlgBox(0);
//林月如怒火燃烧，体力恢复
RoleModifyHP(false, 9999);
RoleModifyAttrTemp(Attribute.AttrMagicStrength, 5, 0);

['@A9E3'];
SetDlgLower(22, 0, false);
//你真没用～看我的！~60
SetDlgBox(0);
//林月如斗志燃烧，真气恢复
RoleModifyMP(false, 9999);
RoleModifyAttrTemp(Attribute.AttrDefense, 9, 0);

['@A9EA'];
SetDlgLower(24, 0, false);
//　哇～　怎么办！~60
RoleModifyAttrTemp(Attribute.AttrFleeRate, 50, 0);
RoleModifyAttrTemp(Attribute.ResistancePoison, 90, 0);

['@A9F3'];
EventSetTriggerScript(181, 2, "Event_00181_00002_Trigger");
EventSetState(2985, 1, 0);
GotoWithNop("@6B39", 0);

['@A9F7'];
VideoUpdate(0, false);
GotoWithNop("@387E", 0);

['@A9FA'];
//巡捕：
//奉太守之命，可让两位出城。
EventModifyPos(85, 27, -32, 0);
VideoUpdate(0, false);
EventSetAutoScript(85, 27, "Event_00006_00014_Auto");
EventSetTriggerScript(85, 27, "@3A97");
EventSetTriggerScript(85, 29, "@3A97");
ReplaceAndPause();
GotoWithNop("@3A97", 0);

['@AA04'];
//巡捕：
//奉太守之命，可让两位出城。
EventModifyPos(85, 27, -32, 0);
VideoUpdate(0, false);
EventSetAutoScript(85, 27, "Event_00006_00014_Auto");
EventSetTriggerScript(85, 27, "@3A97");
EventSetTriggerScript(85, 28, "@3A97");
ReplaceAndPause();
GotoWithNop("@3A97", 0);

['@AA0E'];
RemoveItem(92, 36, "");
EventSetStateSequence(216, 5, 11, 0);
GotoWithNop("@6F08", 0);

['@AA12'];
JumpIfEnemyHPMoreThanPercentage(5, "@977C");
KillEnemy();

['@AA15'];
VideoUpdate(0, false);
//有钱好办事．没钱免谈！
ReplaceAndPause();
['@AA18'];
//衙役：
//要探监吗？先缴１００文钱
GotoWithSelect("@AA15");
CashModify(-100, "@AA15");
VideoUpdate(0, false);
//衙役：
//请吧！
EventSetAutoScript(85, 11, "@3904");
EventSetAutoScript(85, 12, "@3908");
EventSetTriggerScript(85, 11, "@3901");
ReplaceAndPause();
GotoWithNop("@3901", 0);

