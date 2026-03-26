['Event_00255_00001_Trigger'];
SceneEnter(249);
PartySetPos(38, 94, 0);
FadeOut(0);

['Scene_00255_Enter'];
RoleSetDirFrame(1, 0, 0);
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//士兵甲：
//啧．．洪水好像又淹的更高了
//这样下去恐怕连王宫也会不保
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//士兵乙：
//可不是吗．．
//我家房子完全泡在水底啦！
EventSetDirFrame(255, 2, 1, 0);
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//士兵甲：
//听说这场灾难都是巫后搞的鬼
//真不知我们族人跟她有什么仇
//竟然要毁灭我们的国家
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//士兵乙：
//是啊，要不是教主揭穿那妖女
//的真面目，不然连大王都被蒙
//在鼓里
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//士兵甲：
//啧．．想不到一向受族人敬爱
//的巫后娘娘居然是蛇妖女
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//士兵乙：
//是呀～传说蛇女出现之处必定
//带来灾难，所以只要妖女一死
//洪水一定就会退了
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//士兵甲：
//可是你想～大王和那妖女毕竟
//是多年的夫妻，大王能狠下心
//处死她吗？
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//士兵乙：
//所以说啦，这回教主突然召集
//所有人到王宫，一定是有重要
//的决定要向大家宣布
RoleSetDirFrame(2, 0, 0);
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//请问．．．．
EventSetDirFrame(255, 2, 0, 0);
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//士兵甲：
//你还站在这里干什么？
VideoRestore();
//我们还要跟其它弟兄会合
//你又不是我们小队的人
//自己去王宫报到
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//李逍遥：
//好～是、是！
ReplaceAndPause();

['Event_00255_00004_Auto'];
NpcMoveToBlockMutexLock(41, 87, 0, 2);
GotoWithProbability(5, "");
ReplaceAndPause();
NpcSetDirFrame(2, 0);
GotoWithProbability(8, "");
NpcSetDirFrame(0, 0);
GotoWithProbability(10, "");
NpcMoveToBlockMutexLock(37, 91, 0, 2);
GotoWithProbability(6, "");
ReplaceAndPauseWithNop("Event_00255_00004_Auto", 0);

['Event_00255_00006_Auto'];
NpcMoveToBlockMutexLock(36, 97, 0, 2);
GotoWithProbability(10, "");
NpcSetDirFrame(2, 0);
GotoWithProbability(8, "");
NpcMoveToBlockMutexLock(37, 98, 1, 2);
GotoWithProbability(10, "");
NpcSetDirFrame(2, 0);
GotoWithProbability(10, "");
ReplaceAndPauseWithNop("Event_00255_00006_Auto", 0);

['Event_00255_00011_Auto'];
NpcMoveToBlockMutexLock(26, 88, 0, 2);
GotoWithProbability(20, "");
NpcMoveToBlockMutexLock(17, 79, 0, 2);
GotoWithProbability(3, "");
NpcMoveToBlockMutexLock(28, 90, 1, 2);
GotoWithProbability(10, "");
NpcSetDirFrame(0, 0);
GotoWithProbability(4, "");
NpcMoveToBlockMutexLock(26, 88, 1, 2);
NpcSetDirFrame(2, 0);
GotoWithProbability(5, "");
ReplaceAndPauseWithNop("Event_00255_00011_Auto", 0);

['Event_00255_00003_Trigger'];
SetDlgLower(0, 0, false);
//黑苗士兵甲：
//哼！我说咧～几百年来黑苗、
//白苗两族一向水火不容，而
//白苗族的人竟然会让他们的
//大祭司嫁给我们大王
//现在想起来，这一定是白苗
//族的兵力比不过我们，于是
//使出这种阴毒的计谋

['Event_00255_00002_Trigger'];
//黑苗士兵乙：
//快去王宫集合！
ReplaceAndPause();
//黑苗士兵乙：
//还有事吗？

['Event_00255_00004_Trigger'];
//苗民：
//呜．．．该死的水灾
//我的家当全泡水了

['Event_00255_00005_Trigger'];
//苗女：
//打从我出娘胎以来
//从没见过这么大的洪水
//整个南诏除了王宫以外
//都被淹没了

['Event_00255_00006_Trigger'];
//苗民：
//这是天谴！一定是有人冒犯了
//天神，天神要来惩罚我们的
//听说～王后就是罪魁祸首
//是她使的妖术！

['Event_00255_00007_Trigger'];
SetDlgLower(0, 0, false);
//苗女：
//听说从前王后还是白苗族祭司
//的时候，曾使呼风唤雨的咒术
//现在我们的国家变成这样，一
//定是她搞的把戏！
//我就知道白苗族的人全都不是
//好东西，王后一定是他们派来
//的间谍，用美色来迷惑大王
//让我们的国家灭亡后，白苗族
//就可以并吞我们

['Event_00255_00008_Trigger'];
SetDlgLower(0, 0, false);
//苗女：
//哎．．自从洪水来犯后
//族人们都人心惶惶
VideoRestore();
//听说大王下令将境内的汉人
//全部抓起来了，不知道要做
//什么耶

['Event_00255_00009_Trigger'];
//小孩：
//哗～　你看！好多水喔

['Event_00255_00010_Trigger'];
//小孩：
//大人都说巫后娘娘是坏妖女
//可是．．娘娘一向对我们
//很好呀！

['Event_00255_00011_Trigger'];
SetDlgLower(0, 0, false);
//苗民：
//我们苗人一向非常重视树木
//每户人家若是生了一个男孩
//就得到山上种一百株树，等
//到这孩子要娶老婆时，才能
//上山砍下这些树来盖新房子
//要是违反这禁忌，可是会触
//怒山神的。万一山神生气了
//会用山崩和洪水来惩罚我们
//可是那些外地来的汉族商人
//就很乱来，随便砍伐我们的
//树林，讲也讲不听！

['Event_00255_00012_Trigger'];
//小孩：
//我阿爹是英勇的战士
//他要把可恶的汉人赶出苗疆！

['Event_00255_00013_Trigger'];
//小孩：
//这么大的洪水，不知道
//有没有人被淹死喔

['Event_00255_00014_Trigger'];
//苗女：
//幸亏教主神通广大，事先警告
//大家避难，才没有人被淹死

['Event_00255_00015_Trigger'];
//苗女：
//我们族人都信奉拜月教，可是
//汉人都说他们的神明比较伟大
//什么佛祖啦、玉帝啦～
//说我们拜的都只是一些地缚灵

['Event_00255_00016_Trigger'];
//苗女：
//听说王宫里出了大事啦
//王后被关起来了，而
//小公主下落不明

['Event_00255_00017_Trigger'];
//苗民：
//水呀～水呀！　我痛恨水啊！

