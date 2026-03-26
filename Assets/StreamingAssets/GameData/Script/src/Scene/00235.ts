['Event_00235_00025_Trigger'];
EventSetState(-1, 0, 0);
RoleSetDirFrame(2, 0, 0);
WaitEventAutoScriptRun(4, false, false);
SceneEnter(234);

['Event_00235_00001_Trigger'];
SceneEnter(233);
PartySetPos(41, 46, 0);
FadeOut(0);

['Event_00235_00002_Trigger'];
SceneEnter(242);
PartySetPos(15, 93, 0);
FadeOut(0);

['Event_00235_00003_Trigger'];
PartySetPos(33, 52, 1);
WaitEventAutoScriptRun(0, false, false);
Call("Event_00205_00002_Trigger", 0, 0);

['Event_00235_00004_Trigger'];
PartySetPos(35, 50, 0);
WaitEventAutoScriptRun(0, false, false);
Call("Event_00205_00005_Trigger", 0, 0);

['Event_00235_00026_Trigger'];
SetDlgCenter(0, false);
//巫后的石像

['Event_00235_00015_Trigger'];
NpcSetDirFrame(2, 0);
VideoUpdate(0, false);
SetDlgUpper(45, 0, false);
//白苗族长：
//难道．．老天无眼
//真的要让我族灭亡吗？
VideoRestore();
//女娲娘娘啊．．您若有灵
//请您保佑这些无辜的族人吧

['Event_00235_00016_Trigger'];
//侍卫：
//誓死与神殿共存亡！

['Event_00235_00017_Trigger'];
//侍卫：
//誓死与神殿共存亡！

['Event_00235_00019_Trigger'];
//唐钰：
//阿奴小姐，您平安没事
//实在太好了！

['Event_00235_00020_Trigger'];
//汉人：
//你们苗族人自相残杀就算了
//为什么连汉人也不放过呢？

['Event_00235_00021_Trigger'];
//汉族妇女：
//黑苗人一进城，见人就杀
//仿佛死神降临一样。
//我好不容易才得以逃命
//可是我家相公却．．

['Event_00235_00022_Trigger'];
//小孩：
//哇．．我爹我娘都被黑苗兵
//杀死了啊！

['Event_00235_00023_Trigger'];
//苗女：
//怎么办，万一黑苗兵杀进来
//我们就无处可逃了

['Event_00235_00024_Trigger'];
//小孩：
//呜．．我好怕，我不要死啊

