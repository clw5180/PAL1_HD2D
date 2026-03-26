['Event_00036_00001_Trigger'];
SceneEnter(35);
PartySetPos(22, 71, 1);
FadeOut(0);

['Event_00036_00005_Trigger'];
SceneEnter(39);
PartySetPos(13, 48, 1);
FadeOut(0);

['Event_00036_00006_Trigger'];
SceneEnter(39);
PartySetPos(45, 72, 0);
FadeOut(0);

['Event_00036_00007_Trigger'];
SceneEnter(39);
PartySetPos(12, 83, 1);
FadeOut(0);

['Event_00036_00008_Trigger'];
SceneEnter(37);
PartySetPos(34, 31, 0);
FadeOut(0);

['Event_00036_00009_Trigger'];
SetDlgUpper(21, 0, false);
//林月如：
//瞧！我这身衣裳好不好看？
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//喔～好．．好看
VideoUpdate(0, false);
SetDlgUpper(22, 0, false);
//林月如：
//就这样子而已吗．．？！
//人家可是好不容易才穿一次呢
VideoUpdate(0, false);
SetDlgLower(8, 0, false);
//李逍遥：
//林姑娘，我能否私下问你一
//个问题，请你老实回答我
SetDlgUpper(21, 0, false);
//林月如：
//　　说啊！？
VideoUpdate(0, false);
SetDlgLower(7, 0, false);
//李逍遥：
//你．．当真想要嫁给我？
VideoUpdate(0, false);
SetDlgUpper(21, 0, false);
//林月如：
//不是我嫁给你，是你入赘到
//我们林家
VideoUpdate(0, false);
SetDlgLower(10, 0, false);
//李逍遥：
//不是指这个，我是指比武
//招亲太草率了，这门亲事
//不一定要算数
VideoUpdate(0, false);
SetDlgUpper(21, 0, false);
//林月如：
//没关系，我爹说了就算
VideoUpdate(0, false);
SetDlgLower(2, 0, false);
//李逍遥：
//这．．其实我今天上擂你与你
//比武，只是想化解误会，并未
//想到招亲这一层．．
SetDlgUpper(21, 0, false);
//林月如：
//嘻～谁叫你要打赢我
//现在全苏州城的人都知道你是
//林家的新姑爷了，难道你想赖
//帐不成？
VideoUpdate(0, false);
SetDlgLower(2, 0, false);
//李逍遥：
//可是～我们认识才不过二天
VideoUpdate(0, false);
SetDlgUpper(25, 0, false);
//林月如：
//说了半天，原来你讨厌我！
VideoUpdate(0, false);
SetDlgLower(6, 0, false);
//李逍遥：
//不．．而是．．
//我总觉得这样太随便了
SetDlgUpper(21, 0, false);
//林月如：
//我才不是随随便便的女人呢！
//我在做什么，心里清楚的很
VideoUpdate(0, false);
SetDlgLower(7, 0, false);
//李逍遥：
//你该不会是为了昨天的事
//还怀恨在心，故意捉弄我吧？
SetDlgUpper(21, 0, false);
//林月如：
//嘻．．你说呢？)
EventSetState(595, 2, 0);
EventSetTriggerScript(35, 4, "@21D0");
EventSetTriggerMode(35, 4, true, 2);
EventSetDirFrame(35, 4, 3, 0);
EventModifyPos(35, 4, -32, -16);
EventSetState(575, 2, 0);
EventSetPos(35, 6, 1104, 1256);
EventSetDirFrame(35, 6, 3, 0);
EventSetState(578, 2, 0);
EventSetState(579, 2, 0);
EventSetPos(35, 8, 1216, 1248);
EventSetPos(35, 9, 1200, 1240);
EventSetAutoScript(35, 8, "Event_00023_00016_Auto");
EventSetAutoScript(35, 9, "Event_00023_00016_Auto");
ReplaceAndPause();
//我们家的花园很漂亮吧？
//在苏州城就属我家的庭院是
//最大的呢。
ReplaceAndPause();
//你可以四处逛逛看看
//包你这乡巴佬大开眼界！

['Event_00036_00013_Trigger'];
EventSetTriggerMode(-1, -1, false, 2);
//秋菊：
//姑爷！
//老爷在前厅请您过去一趟
ReplaceAndPause();
//老爷请来了一位算命先生
//要替您跟小姐合八字呢！

['Event_00036_00016_Trigger'];
EventSetTriggerMode(-1, -1, false, 0);
//丫鬟：
//妖怪呀！有妖怪啊！

['Event_00036_00015_Trigger'];
EventSetTriggerMode(-1, -1, false, 2);
SetDlgLower(5, 0, false);
//李逍遥：
//究竟发生了什么事？
VideoUpdate(0, false);
SetDlgUpper(23, 0, false);
//林月如：
//蛇妖，是只半人半蛇的妖怪
//就在西厢房里面！
RoleMoveOneStep(-16, 8, 0);
VideoUpdate(0, false);
SetDlgLower(2, 0, false);
//李逍遥：
//灵儿！灵儿人呢？
SetDlgUpper(23, 0, false);
//林月如：
//赵姑娘不见了！
RoleSetDirFrame(0, 0, 0);
VideoUpdate(0, false);
RoleMoveOneStep(-16, 8, 0);
VideoUpdate(0, false);
RoleMoveOneStep(-16, 8, 0);
VideoUpdate(0, false);
RoleMoveOneStep(-16, 8, 0);
NpcSetDirFrame(3, 0);
VideoUpdate(0, false);
RoleMoveOneStep(-16, 8, 0);
NpcSetDirFrame(0, 0);
VideoUpdate(0, false);
RoleMoveOneStep(-16, 8, 0);
EventWalkOneStep(-1, -1, -16, 8);
VideoUpdate(0, false);
RoleMoveOneStep(-16, 8, 0);
EventWalkOneStep(-1, -1, -16, 8);
VideoUpdate(0, false);
RoleMoveOneStep(-16, 8, 0);
EventWalkOneStep(-1, -1, -32, 16);
VideoUpdate(0, false);
RoleMoveOneStep(-16, 8, 0);
EventWalkOneStep(-1, -1, -16, 8);
VideoUpdate(0, false);
SetDlgUpper(24, 0, false);
//林月如：
//等一等！很危险呀！
//现在里面一片漆黑，什么也看
//不见，我已经叫人去取灯火了
RoleSetDirFrame(2, 0, 0);
VideoUpdate(0, false);
SetDlgLower(2, 0, false);
//李逍遥：
//灵儿一定还在里面
//我去救灵儿出来！
RoleSetDirFrame(0, 0, 0);
VideoUpdate(0, false);
SetDlgUpper(24, 0, false);
//林月如：
//我跟你去！
EventSetState(-1, 0, 0);
HeroSetSprite(2, Sprite.盛装月如, false);
PartySetRole(1, 3, 0);
RoleMoveOneStep(-16, 8, 0);
VideoUpdate(0, false);
RoleMoveOneStep(-16, 8, 0);
VideoUpdate(0, false);
RoleMoveOneStep(-16, 8, 0);
VideoUpdate(0, false);
RoleMoveOneStep(-16, 8, 0);
VideoUpdate(0, false);
RoleMoveOneStep(-16, 8, 0);
VideoUpdate(0, false);
RoleMoveOneStep(-16, 8, 0);
VideoUpdate(0, false);
RoleMoveOneStep(-16, 8, 0);

['Event_00036_00014_Trigger'];
//丫鬟：
//这里是小姐住的西厢房

['Event_00036_00010_Auto'];
NpcMoveToBlockMutexLock(34, 7, 1, 2);
WaitEventAutoScriptRun(5, false, false);
NpcMoveToBlockMutexLock(33, 8, 1, 2);
WaitEventAutoScriptRun(4, false, false);
NpcMoveToBlockMutexLock(54, 29, 1, 2);
NpcMoveToBlockMutexLock(56, 28, 0, 2);
NpcMoveToBlockMutexLock(56, 28, 1, 2);
NpcMoveToBlockMutexLock(55, 30, 0, 2);
WaitEventAutoScriptRun(7, false, false);
NpcMoveToBlockMutexLock(41, 16, 1, 2);
NpcMoveToBlockMutexLock(34, 23, 1, 2);
NpcMoveToBlockMutexLock(34, 23, 1, 2);
NpcMoveToBlockMutexLock(34, 23, 0, 2);
WaitEventAutoScriptRun(3, false, false);
NpcMoveToBlockMutexLock(29, 27, 1, 2);
NpcMoveToBlockMutexLock(31, 29, 0, 2);
NpcMoveToBlockMutexLock(28, 31, 1, 2);
NpcMoveToBlockMutexLock(33, 36, 0, 2);
NpcMoveToBlockMutexLock(38, 31, 0, 2);
NpcMoveToBlockMutexLock(33, 26, 0, 2);
WaitEventAutoScriptRun(7, false, false);
NpcMoveToBlockMutexLock(40, 18, 1, 2);
NpcMoveToBlockMutexLock(39, 17, 0, 2);
NpcMoveToBlockMutexLock(40, 16, 0, 2);
WaitEventAutoScriptRun(4, false, false);
NpcMoveToBlockMutexLock(33, 9, 0, 2);
NpcMoveToBlockMutexLock(34, 7, 1, 2);
['@2371'];
ReplaceAndPause();
GotoWithProbability(10, "@2371");
GotoWithNop("Event_00036_00010_Auto", 0);

['Event_00036_00016_Auto'];
NpcMoveToBlock(41, 50, 1, 3);
NpcMoveToBlock(45, 47, 0, 3);
NpcMoveToBlock(48, 50, 1, 3);
EventSetState(-1, 0, 0);

['Event_00036_00017_Auto'];
NpcMoveToBlock(45, 47, 1, 3);
NpcMoveToBlock(48, 50, 1, 3);
EventSetState(-1, 0, 0);

['Event_00036_00018_Auto'];
NpcMoveToBlock(47, 45, 0, 3);
NpcMoveToBlock(48, 46, 0, 3);
NpcMoveToBlock(47, 47, 0, 3);
NpcMoveToBlock(49, 49, 1, 3);
EventSetState(-1, 0, 0);

['Event_00036_00010_Trigger'];
//丫鬟：
//姑爷好！有什么事吗？
SetDlgLower(0, 0, false);
//李逍遥：
//别叫我姑爷！
//你知不知道跟我一道来
//的那位姑娘的房间在哪里？
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//丫鬟：
//她住在西厢房，从后花园的
//小径一直走就可以看见了。

