['Scene_00204_Enter'];
MusicPlay(Music.情怨_1, false, false);

['Event_00204_00001_Trigger'];
SceneEnter(212);
PartySetPos(41, 46, 0);
FadeOut(0);

['Event_00204_00002_Trigger'];
SceneEnter(205);
PartySetPos(15, 93, 0);
FadeOut(0);

['Event_00204_00015_Trigger'];
//守卫：
//女娲大神是我们苗族百姓
//信仰的精神支柱。能够被
//派来此处值勤是我的荣耀

['Event_00204_00016_Trigger'];
//守卫：
//大家都说苗疆这几来年的天灾
//人祸，一定是妖魔在作怪，只
//有这处神殿受到女娲娘娘圣灵
//的庇护
VideoRestore();
//才会别的地方的水源都已干涸
//殆尽，而殿内祭坛四周却依旧
//源源不断冒出泉水来

['Event_00204_00017_Trigger'];
//守卫：
//我搞不懂为什么女娲大神
//会是半人半蛇身，既然我们
//人类是她创造出来的，那就
//应该跟她长的一样才对呀？

['Event_00204_00018_Trigger'];
//守卫：
//听说这里供俸的女娲神像
//是十年前随着洪水从上游
//被冲到这里来的
VideoRestore();
//记得那一年正好是巫后娘娘
//亡故那年，苗疆正发生一场
//罕见的大水灾。像天河决堤
//般大雨连续下了一个多月，
//大理城内外全成了一遍汪洋
//当时洪水都已淹进这里来了
//许多族人都躲到山上去避难
//有人发现了这具石像，便将
//她供奉在祭坛上，说也奇怪
//不久之后雨就停了，洪水也
//消退了
VideoRestore();
//从此以后，大家就把这石像
//当作女娲大神的祭拜，此处
//祭坛就改建为女娲神殿，供
//白苗族的百姓前来瞻仰

['Event_00204_00019_Trigger'];
//守卫：
//真不知女娲大神的石像是
//那一位工匠所做，雕刻的
//栩栩如生，就像活着似的

['Event_00204_00020_Trigger'];
//守卫：
//前天夜里我在这里当班时
//听到神像发出叹息的声音
//可是大家都不相信，说是
//我打瞌睡才有的幻觉
ReplaceAndPause();
//守卫：
//我一直有个感觉．．
//觉得这尊女娲神像会突然
//变成活的走下祭坛来

['Event_00204_00004_Trigger'];
PartySetPos(35, 50, 0);
WaitEventAutoScriptRun(0, false, false);
Call("Event_00205_00005_Trigger", 0, 0);

['Event_00204_00024_Auto'];
ReplaceAndPause();
NpcSetFrame(1);
ReplaceAndPause();
NpcSetFrame(2);
ReplaceAndPause();
NpcSetFrame(3);
ReplaceAndPause();
NpcSetFrame(4);
WaitEventAutoScriptRun(4, false, false);
NpcSetFrame(5);
ReplaceAndPause();
NpcSetFrame(6);
WaitEventAutoScriptRun(2, false, false);
NpcSetFrame(5);
ReplaceAndPause();
NpcSetFrame(4);
ReplaceAndPause();
NpcSetFrame(3);
ReplaceAndPause();
NpcSetFrame(2);
ReplaceAndPause();
NpcSetFrame(1);
ReplaceAndPause();
NpcSetFrame(0);

['Event_00204_00025_Auto'];
NpcMoveToBlockMutexLock(36, 46, 1, 2);
NpcMoveToBlockMutexLock(36, 47, 0, 2);
NpcSetDirFrame(3, 0);

['Event_00204_00027_Auto'];
ReplaceAndPause();
NpcSetDirFrame(1, 0);
NpcSetDirFrame(0, 0);
ReplaceAndPause();
NpcMoveToBlock(37, 47, 0, 3);

['Event_00204_00028_Trigger'];
SetDlgLower(2, 0, false);
//李逍遥：
//这尊石像看起来好面熟．．
ReplaceAndPause();
SetDlgLower(2, 0, false);
//李逍遥：
//的确是栩栩如生
//简直就是活人变成的
ReplaceAndPauseWithNop("Event_00204_00028_Trigger", 0);

['Event_00204_00021_Trigger'];
//守卫：
//此处是往祭坛的入口
//是过去我族历代大祭司
//祭天祈福的圣地
ReplaceAndPause();
//守卫：
//不过．．这座祭坛已经
//荒废很久了

['Event_00204_00012_Trigger'];
RoleSetDirFrame(0, 0, 0);
RoleMoveOneStep(-10, 10, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(-6, 6, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(-10, 10, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(-6, 6, 0);
WaitEventAutoScriptRun(0, false, false);
['Event_00204_00008_Trigger'];
RoleSetDirFrame(0, 0, 0);
RoleMoveOneStep(-10, 10, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(-6, 6, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(-10, 10, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(-6, 6, 0);
WaitEventAutoScriptRun(0, false, false);
['Event_00204_00006_Trigger'];
RoleSetDirFrame(0, 1, 0);
RoleMoveOneStep(-10, 10, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(-6, 6, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(-10, 10, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(-6, 6, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(-16, 8, 0);
WaitEventAutoScriptRun(0, false, false);

['Event_00204_00009_Trigger'];
RoleSetDirFrame(2, 0, 0);
RoleMoveOneStep(10, -10, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(6, -6, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(10, -10, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(6, -6, 0);
WaitEventAutoScriptRun(0, false, false);
['Event_00204_00007_Trigger'];
RoleSetDirFrame(2, 0, 0);
RoleMoveOneStep(10, -10, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(6, -6, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(10, -10, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(6, -6, 0);
WaitEventAutoScriptRun(0, false, false);
['Event_00204_00005_Trigger'];
RoleSetDirFrame(2, 0, 0);
RoleMoveOneStep(10, -10, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(6, -6, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(10, -10, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(6, -6, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(16, -8, 0);
WaitEventAutoScriptRun(0, false, false);

