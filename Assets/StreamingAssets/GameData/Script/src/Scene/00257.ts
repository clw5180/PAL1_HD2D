['Event_00257_00001_Trigger'];
SceneEnter(256);
PartySetPos(52, 91, 0);
FadeOut(0);

['Event_00257_00002_Trigger'];
SceneEnter(256);
PartySetPos(28, 67, 1);
FadeOut(0);

['Event_00257_00003_Trigger'];
SceneEnter(248);
PartySetPos(17, 51, 1);
FadeOut(0);

['Event_00257_00007_Trigger'];
EventSetState(-1, 0, 0);
EventSetDirFrame(257, 6, 0, 0);
VideoUpdate(0, false);
//守卫：
//这里是牢房重地
//你跑进来做什么？
RoleSetDirFrame(2, 0, 0);
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//李逍遥：
//我～我奉了大王的命令
//要传话给巫后娘娘
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//守卫：
//喔．．你进去吧！
RoleSetDirFrame(3, 0, 0);

['Event_00257_00004_Trigger'];
//王宫卫兵：
//要见大王吗？
//自己进去吧，别来烦我们！
VideoRestore();
//虽然我也是拜月教徒
//但王后娘娘一向对王宫内的
//下人很好，我觉得她并不坏
//所以我不站在任何一边

['Event_00257_00005_Trigger'];
//王宫卫兵：
//真是没王法了，拜月教主
//带着一堆士兵人拿着兵器
//跑进王宫来，根本不把大
//王看在眼里
//他们已经逼得大王将巫后
//娘娘打入大牢了还不满足
//难道非要逼死娘娘不可吗？
//到底娘娘哪里得罪拜月教了
//就算娘娘不是人类又怎么样
//她的为人是大家有目共赌的

['Event_00257_00006_Trigger'];
//王宫卫兵：
//听说娘娘是半人半蛇的妖女
//不知道这是真的还是假的
//搞不好是拜月教捏造的罪名
VideoRestore();
//唉．．就算大王把娘娘囚禁
//起来，还是无法平息众怒的
VideoRestore();
//照这情形看来，恐怕必需大
//王下令处死娘娘，才能平息
//这场动乱．．

