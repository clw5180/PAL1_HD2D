['Event_00208_00001_Trigger'];
SceneEnter(207);
PartySetPos(17, 113, 0);
FadeOut(0);

['Event_00208_00002_Trigger'];
SceneEnter(207);
PartySetPos(51, 94, 0);
FadeOut(0);

['Event_00208_00003_Trigger'];
SceneEnter(207);
PartySetPos(31, 99, 0);
FadeOut(0);

['Event_00208_00004_Trigger'];
SceneEnter(207);
PartySetPos(8, 105, 1);
FadeOut(0);

['Event_00208_00005_Trigger'];
SceneEnter(207);
PartySetPos(50, 76, 0);
FadeOut(0);

['Event_00208_00006_Trigger'];
SceneEnter(207);
PartySetPos(13, 83, 0);
FadeOut(0);

['Event_00208_00007_Trigger'];
SceneEnter(207);
PartySetPos(17, 89, 0);
FadeOut(0);

['Event_00208_00008_Trigger'];
SceneEnter(207);
PartySetPos(23, 81, 1);
FadeOut(0);

['Event_00208_00009_Trigger'];
//店家：
//您要买什么武器吗？
//请随便挑。
VideoUpdate(0, false);
ShowBuyItemMenu(16);

['Event_00208_00010_Trigger'];
//顾客：
//我要赶紧买一件武器
//加入我们白苗族战士的行列
//一同对抗黑苗族的侵略。

['Event_00208_00011_Trigger'];
WaitEventAutoScriptRun(0, false, false);
//小孩：
//阿娘，为什么那些黑苗族的
//人常常要来攻打我们呢？
VideoUpdate(0, false);
//白苗妇女：
//阿欣啊！这件事太复杂了
//等你长大点再告诉你。

['Event_00208_00013_Trigger'];
//店主：
//需要什么尽管挑
//算你便宜点。
VideoUpdate(0, false);
ShowBuyItemMenu(18);

['Event_00208_00015_Trigger'];
//居民：
//我阿爹是个白苗族英勇的战士
//可是在一次黑苗族的偷袭下遇
//害身亡，现在我要继承我阿爹
//做个为白苗族奉献的好战士

['Event_00208_00016_Trigger'];
WaitEventAutoScriptRun(0, false, false);
//居民：
//来啊！阿宝听话
//让阿爹帮你把裤子穿上。
VideoUpdate(0, false);
//阿宝：
//不要！不要！我自己会穿
//···哎哟，有人在看啦！

['Event_00208_00037_Trigger'];
PlaySound(78);
SetDlgBox(0);
//发现迷魂香
AddItem(75, 0);
EventSetState(-1, 0, 0);

['Event_00208_00030_Trigger'];
PlaySound(78);
SetDlgBox(0);
//发现蛊
AddItem(88, 0);
EventSetState(-1, 0, 0);

['Event_00208_00041_Trigger'];
PlaySound(78);
SetDlgBox(0);
//发现幻蛊
AddItem(80, 0);
EventSetState(-1, 0, 0);

['Event_00208_00027_Trigger'];
PlaySound(78);
SetDlgBox(0);
//发现冰蚕蛊
AddItem(82, 0);
EventSetState(-1, 0, 0);

['Event_00208_00023_Trigger'];
PlaySound(78);
SetDlgBox(0);
//发现火蚕蛊
AddItem(83, 0);
EventSetState(-1, 0, 0);

['Event_00208_00024_Trigger'];
PlaySound(78);
SetDlgBox(0);
//发现丝衣
AddItem(150, 0);
EventSetState(-1, 0, 0);

['Event_00208_00031_Trigger'];
PlaySound(78);
SetDlgBox(0);
//发现披风
AddItem(165, 0);
EventSetState(-1, 0, 0);

PlaySound(78);
SetDlgBox(0);
//发现护肩
AddItem(166, 0);
EventSetState(-1, 0, 0);

PlaySound(78);
SetDlgBox(0);
//发现护心镜
AddItem(168, 0);
EventSetState(-1, 0, 0);

['Event_00208_00042_Trigger'];
PlaySound(78);
SetDlgBox(0);
//发现布靴
AddItem(177, 0);
EventSetState(-1, 0, 0);

['Event_00208_00026_Trigger'];
PlaySound(78);
SetDlgBox(0);
//发现护腕
AddItem(189, 0);
EventSetState(-1, 0, 0);

