['Scene_00194_Enter'];
SetPalette(Palette.忆往昔_日夜);
HeroSetSprite(0, Sprite.空空如也, false);
PartySetRole(1, 0, 0);
PartySetPos(35, 45, 1);
VideoFadeAndUpdate(2);
WaitEventAutoScriptRun(9, false, false);
SetDlgLower(10, 0, false);
//李逍遥：
//$03你！．．啊～野蛮丫头！~50
SetDlgUpper(21, 0, false);
//林月如：
//$06亏你还认得我呀～呆瓜小贼！~70
FadeOut(3);
SceneEnter(195);

['Event_00194_00014_Auto'];
NpcSetFrame(2);
WaitEventAutoScriptRun(2, false, false);
NpcSetFrame(3);
WaitEventAutoScriptRun(2, false, false);
NpcSetFrame(2);
WaitEventAutoScriptRun(2, false, false);
NpcSetFrame(3);
WaitEventAutoScriptRun(2, false, false);
NpcSetFrame(2);
WaitEventAutoScriptRun(2, false, false);
NpcSetFrame(3);
WaitEventAutoScriptRun(2, false, false);
NpcSetFrame(2);
WaitEventAutoScriptRun(2, false, false);
NpcSetFrame(3);
WaitEventAutoScriptRun(2, false, false);
NpcSetFrame(2);
WaitEventAutoScriptRun(3, false, false);
NpcSetFrame(3);
WaitEventAutoScriptRun(5, false, false);
NpcSetFrame(4);

['Event_00194_00015_Auto'];
NpcMoveToBlockMutexLock(35, 44, 0, 2);

