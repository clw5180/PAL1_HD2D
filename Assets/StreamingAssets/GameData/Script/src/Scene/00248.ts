['Scene_00248_Enter'];
Dos_SetBattlefield(FbpDos.片尾_全剧终);
MusicPlay(Music.情怨_1, false, false);

['Event_00248_00001_Trigger'];
SceneEnter(257);
PartySetPos(55, 89, 1);
FadeOut(0);

['Event_00248_00005_Auto'];
WaitEventAutoScriptRun(3, false, false);
NpcMoveToBlockMutexLock(42, 62, 0, 2);
NpcMoveToBlockMutexLock(43, 63, 1, 2);

['Event_00248_00003_Trigger'];
EventSetTriggerMode(-1, -1, false, 2);
RoleSetDirFrame(1, 0, 0);
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//李逍遥：
//您是．．．巫后娘娘吗？
EventSetDirFrame(248, 4, 0, 1);
WaitEventAutoScriptRun(7, false, false);
EventSetDirFrame(248, 4, 0, 2);
VideoUpdate(0, false);
//巫后：
//．．．．．．．
VideoUpdate(0, false);
//李逍遥：
//娘娘～外头有许多人要
//逼你们大王处死你呢！
//我想办法放你出来，您
//赶紧逃命吧！
EventSetDirFrame(248, 4, 0, 1);
VideoUpdate(0, false);
//巫后：
//你的好意我心领了．．
//我不能走，我要留在这里
//我若逃走，不就证明我就是
//如他们所说的亡国妖女吗？
//如果我的性命可以换回这个
//国家的和平，那么．．我的
//死也是值得的
VideoUpdate(0, false);
//李逍遥：
//留得青山在总比没命好吧
//您若牺牲了，您的冤情谁
//来替您洗清呢？
VideoUpdate(0, false);
//巫后：
//我只希望我的女儿能平安
//就好，其它的都不重要了
VideoUpdate(0, false);
//李逍遥：
//对了～我在城外的路上遇见
//一群士兵在追杀一位老妇人
//她身边还带着小公主．．
EventSetDirFrame(248, 4, 0, 2);
VideoUpdate(0, false);
//巫后：
//你说什么！？
EventSetDirFrame(248, 4, 0, 1);
VideoUpdate(0, false);
EventSetState(4369, 0, 0);
EventSetState(4370, 2, 0);
WaitEventAutoScriptRun(8, false, false);
PartyWalkToBlock(45, 65, 1, 2);
WaitEventAutoScriptRun(6, false, false);
RoleSetDirFrame(1, 0, 0);
WaitEventAutoScriptRun(30, false, false);
SetDlgLower(73, 0, false);
//巫后：
//后来呢？她们逃走了吗？
VideoUpdate(0, false);
SetDlgLower(9, 0, false);
//李逍遥：
//要不是我替她们挡了一阵
//让她们骑着凤凰逃走，不然
//她们差一点就被杀害了
VideoRestore();
//娘娘～　您有没有想过
//您一人牺牲了不要紧，但是
//许多您身边的人呢？谁来救
//她们？
VideoUpdate(0, false);
SetDlgLower(73, 0, false);
//巫后：
//年轻人．．．你究竟是．．？
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//您别管我是谁，只要您相信
//我是来帮助您的就行了
VideoUpdate(0, false);
SetDlgLower(73, 0, false);
//巫后：
//好吧．．你放心
//我不会白白送死的
VideoUpdate(0, false);
SetDlgLower(3, 0, false);
//李逍遥：
//太好了～
//我立刻砍断这门锁救您出来
//然后咱们一块趁乱杀出去
VideoUpdate(0, false);
SetDlgLower(73, 0, false);
//巫后：
//且慢～现在还不能打草惊蛇
//大王为了禁止我再使用法术
//而将我的法杖没收，锁在王
//宫的地下宫殿中
VideoRestore();
//请你先替我取回我的"天蛇杖"
//只要我的法力一恢复，这座
//牢房根本关不住我的
VideoUpdate(0, false);
SetDlgLower(3, 0, false);
//李逍遥：
//好．．我去
VideoUpdate(0, false);
SetDlgLower(73, 0, false);
//巫后：
//负责守护地下宫殿的是石长老
//如果你遇见他，你只要告诉他
//是青儿找你来摘一朵莲花的
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//青儿．．摘莲花．．？
VideoUpdate(0, false);
SetDlgLower(73, 0, false);
//巫后：
//只要你报上这句话
//长老应该不会为难你的
EventSetTriggerScript(263, 3, "@8531");
ReplaceAndPause();
['@8248'];
JumpIfItemCountLessThan(135, 1, "@8250");
SetDlgLower(0, 0, false);
//李逍遥：
//娘娘～我拿到天蛇杖了
RemoveItem(135, 0, "");
FadeOut(0);
SceneEnter(254);

