['Event_00085_00007_Trigger'];
Call("Event_00002_00003_Trigger", 0, 0);
SceneEnter(87);

['Event_00085_00001_Trigger'];
SceneEnter(83);
PartySetPos(53, 25, 1);
FadeOut(0);

['Event_00085_00002_Trigger'];
SceneEnter(83);
PartySetPos(52, 77, 0);
FadeOut(0);

['Event_00085_00003_Trigger'];
SceneEnter(97);
PartySetPos(38, 62, 1);
FadeOut(0);

['Event_00085_00004_Trigger'];
EventSetDirFrame(85, 19, 3, 0);
VideoUpdate(0, false);
//衙役：
//这里是县衙，没事别乱闯
PartySetPos(17, 57, 0);
PartyWalkToBlock(16, 58, 0, 8);

SceneEnter(82);
PartySetPos(28, 82, 0);
FadeOut(0);

['Event_00085_00005_Trigger'];
SceneEnter(89);
PartySetPos(14, 113, 1);
FadeOut(0);

['Event_00085_00006_Trigger'];
SceneEnter(90);
PartySetPos(25, 76, 1);
FadeOut(0);

['Event_00085_00008_Trigger'];
SceneEnter(100);
PartySetPos(17, 29, 0);
FadeOut(0);

['Event_00085_00009_Trigger'];
SceneEnter(100);
PartySetPos(38, 24, 1);
FadeOut(0);

['Event_00085_00013_Auto'];
WaitEventAutoScriptRun(2, false, false);
NpcMoveToBlockMutexLock(53, 63, 1, 2);
ReplaceAndPause();
NpcSetDirFrame(0, 0);
WaitEventAutoScriptRun(5, false, false);
NpcSetDirFrame(1, 0);
WaitEventAutoScriptRun(2, false, false);
NpcMoveToBlockMutexLock(52, 62, 0, 2);
NpcSetDirFrame(0, 0);
WaitEventAutoScriptRun(6, false, false);
NpcSetDirFrame(3, 0);
ReplaceAndPauseWithNop("Event_00085_00013_Auto", 0);

['Event_00085_00016_Auto'];
ReplaceAndPause();
GotoWithProbability(8, "Event_00085_00016_Auto");
NpcMoveToBlockMutexLock(33, 85, 0, 2);
WaitEventAutoScriptRun(3, false, false);
NpcSetDirFrame(2, 0);
WaitEventAutoScriptRun(10, false, false);
NpcMoveToBlockMutexLock(28, 80, 1, 2);
WaitEventAutoScriptRun(4, false, false);
NpcSetDirFrame(0, 0);
WaitEventAutoScriptRun(11, false, false);
NpcSetDirFrame(1, 0);
NpcMoveToBlockMutexLock(27, 79, 0, 2);
ReplaceAndPause();
NpcSetDirFrame(2, 0);
WaitEventAutoScriptRun(2, false, false);
NpcSetDirFrame(3, 0);
WaitEventAutoScriptRun(3, false, false);
NpcMoveToBlockMutexLock(29, 81, 0, 2);
ReplaceAndPauseWithNop("Event_00085_00016_Auto", 0);

NpcSetDirFrame(3, 0);
NpcMoveToBlockMutexLock(1, 90, 0, 2);
EventSetState(-1, 0, 0);

['Event_00085_00037_Trigger'];
EventSetState(-1, 0, 0);
SceneEnter(93);
PartySetPos(16, 19, 0);
RoleSetDirFrame(3, 0, 0);
FadeOut(0);

PartySetRole(1, 0, 0);
SceneEnter(85);
PartySetPos(16, 18, 0);
RoleSetDirFrame(2, 0, 0);
FadeOut(0);

['Event_00085_00041_Trigger'];
//查封告示：
//公孙氏一家，贪赃枉法、官商
//勾结，判决财产全数充公
//及查封屋宅，公孙氏一家十
//四口流放边疆。

['Event_00085_00040_Trigger'];
//悬赏告示：
//江洋大盗游天霸，杀人放火、
//奸淫掳掠、偷抢拐骗、无恶不
//作，特颁此令，严厉缉捕游天
//霸，协助捕获者赏银五百两。

['Event_00085_00039_Trigger'];
//告示：
//奉扬州城县令口谕，严格实施
//宵禁，一干闲杂人等晚间一律
//不准外出，违反规定者拘禁三
//日并罚银三十两。
//于犯罪集团知情不报者
//罚银三百两。
//随地吐痰、小便者罚银二十两。
//妨碍官差公务者罚银一百两。
//严禁聚赌，违反者罚银三百两。
//纵犬伤人，罚银十两。

['Event_00085_00035_Trigger'];
SetDlgLower(0, 0, false);
//六婆：
//隔壁这户人家呀～
//前不久搬来一位寡妇
//虽说是寡妇，但是她家中
//可有钱呢。
//有次我到她家串门子，不小心
//瞧见她家中有处秘室呢．．
//里头堆满金银珠宝，看得我都
//傻眼了

['Event_00085_00036_Trigger'];
SetDlgLower(0, 0, false);
//三姑：
//我跟你说啊～隔壁那栋宅子
//就是门口挂著灯笼的那户
//前不久才搬来一位寡妇
VideoRestore();
//说也奇怪，白天很少见到有人
//出来，到了半夜却常听见许多
//人进进出出的声音
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//三姑：
//也不知那寡妇靠什么发的财
//连家里头的丫环都穿金戴银的
//那些婢女都守口如瓶，问也问
//不出个头绪来。

['Event_00085_00019_Trigger'];
//衙役：
//申冤的去击鼓
//探监的走侧门
//要见老爷的先上拜帖。

['Event_00085_00043_Trigger'];
//官差：
//这户宅院已被下令查封
//任何人不得进入

['Event_00085_00021_Trigger'];
//此井已被查封

['Event_00085_00034_Trigger'];
//小孩：
//娘叫我不要和陌生人说话。

['Event_00085_00032_Trigger'];
//乞丐：
//哪有这样子的罚钱方式，
//太夸张了吧！

['Event_00085_00033_Trigger'];
SetDlgLower(0, 0, false);
//唉！城内发生这么多可怕的事
//情，已经够叫人心烦的，这时
//候又来了这么一个太守···
//麻烦大了。

['Event_00085_00030_Trigger'];
//路人：
//这新太守一上任，就只会罚这
//儿罚那儿的，不用说也知道，
//到最后所有收来的银子都到他
//自己的荷包去了。

['Event_00085_00031_Trigger'];
//路人：
//贼不好好抓，定那么多的禁令
//这县太爷是要对付我们老百姓
//还是要对付贼啊？

['Event_00085_00016_Trigger'];
//巡捕：
//小伙子，不要到处乱跑
//这儿不是你来的地方。

['Event_00085_00017_Trigger'];
//官差：
//唉！现在当差的真辛苦。
//工作累的半死，还要被
//老百姓骂

['Event_00085_00018_Trigger'];
//官差：
//原本想说当差能多捞一点钱
//现在这种情形，可是赔了夫
//人又折兵。

['Event_00085_00033_Auto'];
NpcMoveToBlockMutexLock(15, 76, 0, 2);
NpcMoveToBlockMutexLock(7, 68, 1, 2);
NpcMoveToBlockMutexLock(13, 62, 1, 2);
NpcMoveToBlockMutexLock(17, 66, 0, 2);
NpcMoveToBlockMutexLock(18, 64, 1, 2);
NpcMoveToBlockMutexLock(24, 70, 0, 2);
NpcMoveToBlockMutexLock(39, 55, 0, 2);
NpcMoveToBlockMutexLock(32, 48, 0, 2);
NpcMoveToBlockMutexLock(35, 44, 1, 2);
NpcMoveToBlockMutexLock(22, 31, 0, 2);
NpcMoveToBlockMutexLock(19, 34, 0, 2);
NpcMoveToBlockMutexLock(9, 24, 1, 2);
NpcMoveToBlockMutexLock(8, 25, 1, 2);
NpcMoveToBlockMutexLock(4, 21, 0, 2);
EventSetState(-1, 0, 0);

['Event_00085_00027_Trigger'];
//巡捕：
//我是北门守城巡捕
//现在太守有令，任何人
//不得离开扬州城。

['Event_00085_00028_Trigger'];
//官差：
//还在这儿磨磨蹭蹭地
//干什么，赶快滚。

['Event_00085_00029_Trigger'];
//官差：
//此处不准久留，赶快离开。

['Event_00085_00011_Trigger'];
//巡捕：
//这儿是牢房重地，不准随意进入。

['Event_00085_00012_Trigger'];
//官差：
//牢房重地，不准随意进入。

['Event_00085_00013_Trigger'];
//来探监的吗？
//有没有带违禁物品啊？

['Event_00085_00010_Trigger'];
SceneEnter(106);
PartySetPos(7, 67, 0);
FadeOut(0);

