['Scene_00178_Enter'];
PartySetPos(44, 44, 0);
WaitEventAutoScriptRun(26, false, false);
EventSetDirFrame(178, 2, 3, 0);
VideoUpdate(0, false);
SetDlgUpper(63, 0, false);
//剑圣：
//圣姑，他们的情况如何？
VideoUpdate(0, false);
SetDlgLower(82, 0, false);
//老婆婆：
//小俩口的命是捡回来了
//而林姑娘那边我就没办法了。
VideoRestore();
//你可真有一套，居然找上我
//这用毒的老太婆来医病人。
//还有～我早已经退位几十年
//别再叫我圣姑啦！
VideoUpdate(0, false);
SetDlgUpper(63, 0, false);
//剑圣：
//唉．．天下人皆知～
//您的医术是世上绝无仅有
//连您也救不活那丫头吗？
VideoUpdate(0, false);
SetDlgLower(82, 0, false);
//老婆婆：
//要她活过来是不可能，不过～
//让她不死的方法我倒是不少
VideoUpdate(0, false);
SetDlgUpper(63, 0, false);
//剑圣：
//您这话我可听糊涂了
VideoUpdate(0, false);
SetDlgLower(82, 0, false);
//老婆婆：
//呵呵．．时候到了你自然明白
//只不过～我可不保证一定成功
VideoUpdate(0, false);
SetDlgUpper(63, 0, false);
//剑圣：
//好吧～无论如何请您一定要
//帮助这些孩子．．
EventSetDirFrame(178, 2, 2, 0);
WaitEventAutoScriptRun(8, false, false);
EventSetDirFrame(178, 2, 3, 0);
VideoUpdate(0, false);
SetDlgUpper(63, 0, false);
//剑圣：
//我该告辞了．．
//别让他们知道我来过这里
EventSetAutoScript(178, 2, "@6D77");
WaitEventAutoScriptRun(12, false, false);
EventSetDirFrame(178, 1, 0, 0);
WaitEventAutoScriptRun(30, false, false);
FadeOut(0);
EventSetState(2945, 0, 0);
EventSetState(2946, 0, 0);
SceneEnter(175);
ReplaceAndPause();

['Event_00178_00001_Auto'];
NpcMoveToBlockMutexLock(44, 44, 1, 2);
NpcSetDirFrame(1, 0);

