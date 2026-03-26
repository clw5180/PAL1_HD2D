['Event_00143_00001_Auto'];
EventWalkOneStep(-1, -1, -1, 4);
GotoWithNop("Event_00143_00001_Auto", 0);

['Event_00143_00003_Auto'];
NpcSetDirFrame(1, 0);
NpcSetDirFrame(2, 0);
NpcSetDirFrame(3, 0);
NpcSetDirFrame(0, 0);

['Scene_00143_Enter'];
SetPalette(Palette.忆往昔_日夜);
ViewportMove(15, 56, -1);
WaitEventAutoScriptRun(30, false, false);
EventSetAutoScript(143, 1, "");
WaitEventAutoScriptRun(8, false, false);
EventSetState(2383, 0, 0);
EventSetState(2384, 1, 0);
FadeToScene(3, -1);
EventSetDirFrame(143, 2, 1, 0);
WaitEventAutoScriptRun(6, false, false);
EventSetDirFrame(143, 2, 3, 0);
WaitEventAutoScriptRun(6, false, false);
EventSetDirFrame(143, 2, 0, 0);
WaitEventAutoScriptRun(6, false, false);
EventSetAutoScript(143, 2, "Event_00143_00003_Auto");
WaitEventAutoScriptRun(4, false, false);
EventSetState(2384, 0, 0);
EventSetState(2385, 1, 0);
WaitEventAutoScriptRun(10, false, false);
SceneEnter(144);
FadeOut(0);
ReplaceAndPause();

