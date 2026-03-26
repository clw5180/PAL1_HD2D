['Event_00101_00006_Auto'];
NpcMoveToBlockMutexLock(11, 17, 1, 2);
EventSetState(-1, 0, 0);

['Event_00101_00007_Auto'];
WaitEventAutoScriptRun(3, false, false);
NpcMoveToBlockMutexLock(12, 17, 0, 2);
EventSetState(-1, 0, 0);

['Event_00101_00010_Trigger'];
SceneEnter(115);
PartySetPos(49, 76, 0);
FadeOut(0);

['Event_00101_00011_Trigger'];
SceneEnter(128);
PartySetPos(23, 42, 1);
FadeOut(0);

['Event_00101_00019_Trigger'];
SceneEnter(130);
PartySetPos(30, 45, 0);
FadeOut(0);

['Event_00101_00020_Trigger'];
EventSetState(1824, 2, 0);
PartySetRole(1, 0, 0);
VideoUpdate(0, false);
RoleSetDirFrame(0, 0, 0);
VideoUpdate(0, false);
SetDlgLower(21, 0, false);
//林月如：
//姑娘家不方便进出这种地方
//我留在门外等你
RoleSetDirFrame(2, 0, 0);
VideoUpdate(0, false);
SceneEnter(131);
PartySetPos(23, 69, 0);
FadeOut(0);
ReplaceAndPause();
EventSetState(1824, 2, 0);
PartySetRole(1, 0, 0);
SceneEnter(131);
PartySetPos(23, 69, 0);
FadeOut(0);

['Event_00101_00021_Trigger'];
SceneEnter(138);
PartySetPos(19, 36, 0);
FadeOut(0);

['Event_00101_00022_Trigger'];
SceneEnter(136);
PartySetPos(12, 29, 1);
FadeOut(0);

['Event_00101_00023_Trigger'];
SceneEnter(137);
PartySetPos(22, 39, 0);
FadeOut(0);

['Event_00101_00024_Trigger'];
EventSetState(-1, 0, 0);
PartySetRole(3, 1, 0);

['Event_00101_00025_Trigger'];
NpcSetFrame(0);
//好心的老爷、夫人赏点钱吧
//我已经三天没吃饭了～
GotoWithSelect("@445C");
CashModify(-10, "");

['Event_00101_00025_Auto'];
EventAnimate(Direction.Current);
WaitEventAutoScriptRun(3, false, false);
ReplaceAndPauseWithNop("Event_00101_00025_Auto", 0);

['Scene_00101_Enter'];
MusicPlay(Music.蝶舞春园_2, false, false);
PartySetRole(3, 1, 0);
RoleSetDirFrame(2, 0, 0);
RoleSetDirFrame(2, 0, 1);
PartySetPos(13, 21, 0);
VideoUpdate(0, false);
WaitEventAutoScriptRun(9, false, false);
PartyWalkToBlock(13, 20, 1, 2);
SetDlgLower(10, 0, false);
//李逍遥：
//刘．．刘晋元的家．．
//是尚书府！？
WaitEventAutoScriptRun(8, false, false);
RoleSetDirFrame(3, 0, 0);
WaitEventAutoScriptRun(0, false, false);
RoleSetDirFrame(0, 0, 0);
WaitEventAutoScriptRun(8, false, false);
RoleSetDirFrame(1, 0, 0);
WaitEventAutoScriptRun(4, false, false);
RoleSetDirFrame(0, 0, 0);
WaitEventAutoScriptRun(4, false, false);
SetDlgUpper(21, 0, false);
//林月如：
//当然啊，刘伯伯是当朝大学士
//官拜二品礼部尚书，现在他家
//的房子比我家的还大一倍呢！
SetDlgLower(4, 0, false);
//李逍遥：
//可是．．我最怕和那些
//当官的打交道了．．．
VideoUpdate(0, false);
SetDlgUpper(21, 0, false);
//林月如：
//放心～没有人敢把你当外人的
//刘家跟我们林家是世交，我小
//时候，刘伯伯在还没高中举人
//以前，一家人都寄住在我家呢
//走吧！
SetDlgLower(10, 0, false);
//李逍遥：
//我穿这样，会不会太失礼了？
VideoUpdate(0, false);
SetDlgUpper(21, 0, false);
//林月如：
//你穿什么还不都是那样子
//．．乡下土包子～哈哈！
SetDlgLower(9, 0, false);
//李逍遥：
//哦？　偏偏就有些千金大小姐
//喜欢吃土土的包子
VideoUpdate(0, false);
SetDlgUpper(22, 0, false);
//林月如：
//哼、你少贫嘴
//谁喜欢吃包子了！？
RoleSetDirFrame(1, 0, 0);
WaitEventAutoScriptRun(0, false, false);
ReplaceAndPause();
MusicPlay(Music.蝶舞春园_2, false, false);

['Event_00101_00012_Trigger'];
//守　卫：
//这里是刘尚书府
ReplaceAndPause();
['Event_00101_00013_Trigger'];
//守　卫：
//大人上早朝去了，尚未归来

['Event_00101_00014_Trigger'];
//守卫阿德：
//我们正在执勤中
//不可以跟别人聊天

['Event_00101_00016_Trigger'];
//守卫阿方：
//夫人身边的婢女都是美人
//尤其是阿香．．在彩依小姐
//还没进尚书府之前，一直是
//大家心目中的偶像
VideoRestore();
//不过．．说到美女．．
//尚书府的天字第一号大美人
//那是非彩依小姐莫属啊
VideoRestore();
//唉．．彩依小姐刚来没多久
//就嫁给少爷了。当时呀～
//许多弟兄都失恋了呢
ReplaceAndPause();
//守卫阿方：
//嘘．．这些话可不能让
//夫人听见了

['Event_00101_00017_Trigger'];
//守卫阿坤：
//府里的规矩很严。守卫的士
//兵不得与内苑的婢女交谈
//除了扫地、煮饭的低等下人
//内苑的婢女亦不得擅自外出

['Event_00101_00027_Trigger'];
//妓女：
//公子、来嘛～进来坐嘛～

['Event_00101_00029_Trigger'];
//妓女：
//公子、里面坐嘛～
//咱们怡红院的姑娘最漂亮了

['Event_00101_00030_Trigger'];
WaitEventAutoScriptRun(0, false, false);
SetDlgLower(0, 0, false);
//张大夫：
//我行医二十余年
//从来没见过那种怪病
VideoUpdate(0, false);
//赵大夫：
//是啊，我也查不出来
//刘公子的病症实在太奇特了
VideoUpdate(0, false);
//张大夫：
//我想～也许不是生病，搞不
//好是中了什么奇门邪术的毒
//要不然怎么可能数十位名医
//联手也诊断不出病因
ReplaceAndPause();
WaitEventAutoScriptRun(0, false, false);
SetDlgLower(0, 0, false);
//张大夫：
//我只能说，那已经不是医者
//能做到的范围了。换句话说
//要救刘公子，可能要想别的
//途径

['Event_00101_00031_Trigger'];
WaitEventAutoScriptRun(0, false, false);
//赵大夫：
//唉．．实在丢脸
//刘夫人请我们师兄弟前来
//医治尚书公子的病。
VideoRestore();
//可是我们花了七天
//试过所有的方法，还是没用
//只好放弃了
ReplaceAndPause();
WaitEventAutoScriptRun(0, false, false);
//赵大夫：
//现在我们师兄弟没脸在这
//京城混下去了，想明天就
//离开回家乡

['Event_00101_00009_Auto'];
NpcMoveToBlock(14, 47, 0, 3);
['@4F00'];
WaitEventAutoScriptRun(4, false, false);
NpcMoveToBlockMutexLock(14, 47, 1, 2);
WaitEventAutoScriptRun(12, false, false);
NpcSetDirFrame(2, 0);
WaitEventAutoScriptRun(8, false, false);
NpcMoveToBlockMutexLock(22, 39, 1, 2);
WaitEventAutoScriptRun(4, false, false);
NpcMoveToBlockMutexLock(22, 39, 0, 2);
NpcSetDirFrame(0, 0);
WaitEventAutoScriptRun(9, false, false);
ReplaceAndPauseWithNop("@4F00", 0);

['Event_00101_00009_Trigger'];
EventSetTriggerMode(-1, -1, false, 2);
EventSetAutoScript(-1, -1, "@4F0C");
//婢女阿萍：
//林小姐、李公子！
//夫人有要紧的事，想请
//二位尽快回府
VideoUpdate(0, false);
SetDlgLower(21, 0, false);
//林月如：
//哦～是什么事？
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//婢女阿萍：
//是．．是．．
//夫人说：您回去就知道了
VideoUpdate(0, false);
Replace();
//婢女阿萍：
//奴婢话已带到，奴婢告退

['Event_00101_00032_Auto'];
NpcSetDirFrame(0, 0);
GotoWithProbability(5, "Event_00101_00032_Auto");
NpcMoveToBlock(13, 32, 1, 3);
NpcSetDirFrame(0, 0);
WaitEventAutoScriptRun(6, false, false);
NpcMoveToBlockMutexLock(15, 34, 0, 2);
NpcSetDirFrame(0, 0);
WaitEventAutoScriptRun(6, false, false);
NpcMoveToBlock(11, 30, 0, 3);
NpcSetDirFrame(1, 0);
WaitEventAutoScriptRun(4, false, false);
NpcMoveToBlockMutexLock(11, 30, 0, 2);
ReplaceAndPauseWithNop("Event_00101_00032_Auto", 0);

['Event_00101_00032_Trigger'];
//小童：
//呜．．．
//我把彩依姐姐给的花
//掉到河里去了
VideoRestore();
//可是～水好脏，我不敢
//下去拿
ReplaceAndPause();
//小童：
//昨天我抓到一只蝴蝶
//彩依姐姐看到了，就拿
//一朵花和十文钱跟我交换
VideoRestore();
//后来彩依姐姐把蝴蝶放走
//那些钱被我娘拿去，刚才
//我又不小心把花弄掉了
ReplaceAndPause();
//小童：
//我跟你说哦～彩依姐姐很
//漂亮喔，我爹和我哥哥都
//在偷偷喜欢她呢
ReplaceAndPause();
//小童：
//我也喜欢彩依姐姐！

['Event_00101_00033_Trigger'];
SetDlgLower(0, 0, false);
//才　子：
//小姐．．有没有空啊？
//我请你去喝茶，好不好？
VideoUpdate(0, false);
//佳　人：
//不要啦～人家会不好意思
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//才　子：
//别这么说嘛～
//我可是诚心诚意的邀请你呢
VideoUpdate(0, false);
//佳　人：
//不行啦．．！
//太晚回去，爹娘会骂我的
ReplaceAndPause();
SetDlgLower(0, 0, false);
//才　子：
//真是太不给面子了
//我玉面书生想要泡的妞
//还没有攻不下来的！

['Event_00101_00034_Trigger'];
//佳　人：
//嗯～．．真是不好意思

['Event_00101_00035_Trigger'];
//小童：
//哇～你们快来看！
//水里有死人耶
NpcSetDirFrame(1, 0);

['Event_00101_00036_Trigger'];
//士兵：
//一定又是喝醉酒
//掉进运河里淹死的醉汉

['Event_00101_00037_Trigger'];
//士兵：
//唔．．这具尸首全是酒味！
ReplaceAndPause();
//士兵：
//少惹麻烦，还是别去碰为妙

['Event_00101_00039_Trigger'];
JumpIfItemCountLessThan(21, 1, "@503E");
JumpIfItemCountLessThan(23, 1, "@503E");
JumpIfItemCountLessThan(22, 1, "@503E");
JumpIfItemCountLessThan(26, 1, "@5042");
RemoveItem(21, 0, "");
RemoveItem(23, 0, "");
RemoveItem(22, 0, "");
RemoveItem(26, 0, "");
SetDlgUpper(37, 0, false);
//酒剑仙：
//很好！都弄齐了。让你们这些
//小娃儿瞧瞧我尘封已久的独门
//绝招～醉仙封魔大法！
EventSetState(-1, 0, 0);
SceneSetScript(116, "@5047", "");
SceneEnter(116);
FadeOut(0);
MusicPlay(Music.宿命, false, false);

['Event_00101_00040_Trigger'];
ShowBuyItemMenu(14);

['Event_00101_00041_Trigger'];
ShowBuyItemMenu(15);

['Event_00101_00042_Trigger'];
ShowSellItemMenu();

