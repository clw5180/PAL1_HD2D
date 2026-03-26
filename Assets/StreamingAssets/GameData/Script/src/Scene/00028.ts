['Event_00028_00001_Trigger'];
SceneEnter(26);
PartySetPos(23, 29, 1);
FadeOut(0);

['Event_00028_00002_Trigger'];
SceneEnter(26);
PartySetPos(18, 34, 1);
FadeOut(0);

['Event_00028_00003_Trigger'];
SceneEnter(26);
PartySetPos(13, 39, 1);
FadeOut(0);

['Event_00028_00004_Trigger'];
SetDlgBox(0);
//捡到一颗八仙石
AddItem(54, 0);
ReplaceAndPause();
SetDlgBox(0);
//一个空的木箱

['Event_00028_00010_Auto'];
NpcMoveToBlockMutexLock(31, 33, 1, 2);
ReplaceAndPause();
NpcSetDirFrame(0, 0);
ReplaceAndPause();
NpcSetDirFrame(3, 0);
WaitEventAutoScriptRun(6, false, false);
NpcMoveToBlockMutexLock(34, 36, 0, 2);
WaitEventAutoScriptRun(6, false, false);
NpcSetDirFrame(0, 0);
ReplaceAndPauseWithNop("Event_00028_00010_Auto", 0);

['Event_00028_00005_Trigger'];
//书生：
//在下只是一介书生，又不
//懂得武术，怎敢觊觎林家
//的千金小姐呢？

['Event_00028_00006_Trigger'];
//刘楚香：
//小生练的是「瞬息万变」的
//绝世轻功，要是打不过对方
//我可以用逃的啊！
VideoRestore();
//大丈夫能屈能伸嘛！

['Event_00028_00007_Trigger'];
//拳师：
//看啥子？他奶奶个熊！
//再看当心俺一掌把你给劈了！

['Event_00028_00008_Trigger'];
//护院：
//就见你那骨瘦如柴、弱不
//禁风的样子，也知道你绝
//不是咱家的对手。

['Event_00028_00009_Trigger'];
//小厮：
//客官您别误会
//我只不过是一个打扫
//房间的小厮而已。

['Event_00028_00010_Trigger'];
//铁面煞星：
//别吵我！我正在练功，警告
//你离我远一点，小心被我运
//劲发出的气功给震伤。

['Event_00028_00011_Trigger'];
//剑客：
//比武招亲志在必得
//鱼跃龙门一步登天
//人人有希望，个个没把握

