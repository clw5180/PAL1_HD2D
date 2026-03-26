['Event_00138_00001_Trigger'];
SceneEnter(101);
PartySetPos(22, 29, 0);
FadeOut(0);

['Event_00138_00003_Auto'];
NpcMoveToBlockMutexLock(30, 24, 1, 2);
ReplaceAndPause();
NpcSetDirFrame(3, 0);
WaitEventAutoScriptRun(3, false, false);
NpcMoveToBlockMutexLock(28, 27, 0, 2);
WaitEventAutoScriptRun(4, false, false);
NpcSetDirFrame(3, 0);
ReplaceAndPauseWithNop("Event_00138_00003_Auto", 0);

['Event_00138_00002_Trigger'];
//宋氏：
//听说二位打从扬州来？
VideoRestore();
//我家相公是个古董商
//上个月到扬州作买卖
//至今音讯全无，我好担心呐！

['Event_00138_00003_Trigger'];
//书生：
//十年寒窗无人问
//一举成名天下知．．
VideoRestore();
//我娘说～想要得取功名
//出人头地，唯有靠勤奋读书

