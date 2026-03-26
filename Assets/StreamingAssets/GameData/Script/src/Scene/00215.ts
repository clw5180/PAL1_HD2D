['Scene_00215_Enter'];
MusicPlay(Music.灵山, false, false);
Dos_SetBattlefield(FbpDos.白苗街巷);

['Event_00215_00001_Trigger'];
SceneEnter(216);
PartySetPos(55, 96, 1);
FadeOut(0);

['Event_00215_00002_Trigger'];
SceneEnter(203);
PartySetPos(39, 50, 0);
FadeOut(0);

['Event_00215_00003_Trigger'];
//白苗士兵：
//这位兄弟，请留步！
//我们正在围捕五毒兽
//请不要随便靠近，以免危险
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//啊．．对不起
//我改走别的路好了
VideoUpdate(0, false);
//白苗士兵：
//这座山谷暂时封闭了
//闲杂人等不得近入
//等到我们任务完成後
//才可以通行
RoleMoveOneStep(16, -8, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(16, -8, 0);
WaitEventAutoScriptRun(0, false, false);
ReplaceAndPause();
//白苗士兵：
//请不要在此逗留，妨碍
//我们的任务
RoleMoveOneStep(16, -8, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(16, -8, 0);
WaitEventAutoScriptRun(0, false, false);

