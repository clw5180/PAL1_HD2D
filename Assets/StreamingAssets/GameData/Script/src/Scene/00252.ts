['Scene_00252_Enter'];
MusicStop(0);
PartySetPos(16, 91, 1);
HeroSetSprite(0, Sprite.躺李逍遥, false);
PartySetRole(1, 0, 0);
RoleSetDirFrame(0, 8, 0);
VideoUpdate(0, false);
FadeColor(127, 0, true);
WaitEventAutoScriptRun(4, false, false);
RoleSetDirFrame(0, 9, 0);
WaitEventAutoScriptRun(2, false, false);
EventSetState(4438, 1, 0);
PlaySound(175);
FadeToScene(0, -1);
EventSetDirFrame(252, 1, 0, 1);
FadeToScene(2, -1);
HeroSetSprite(0, Sprite.李逍遥, true);
RoleSetDirFrame(1, 0, 0);
WaitEventAutoScriptRun(8, false, false);
PlaySound(192);
EventSetDirFrame(252, 1, 0, 2);
FadeToScene(4, -1);
SetDlgLower(0, 0, false);
//李逍遥：
//娘娘．．．？！
EventSetState(4439, 1, 0);
WaitEventAutoScriptRun(14, false, false);
RoleSetDirFrame(2, 0, 0);
WaitEventAutoScriptRun(4, false, false);
RoleSetDirFrame(3, 0, 0);
WaitEventAutoScriptRun(2, false, false);

['Event_00252_00002_Auto'];
EventWalkOneStep(-1, -1, 6, 4);
EventModifyPos(-1, -1, 6, 4);
GotoWithNop("Event_00252_00002_Auto", 9);
EventWalkOneStep(-1, -1, 4, 2);
EventModifyPos(-1, -1, 2, 1);
EventSetTriggerMode(-1, -1, true, 3);
['@83EE'];
EventAnimate(Direction.Current);
ReplaceAndPause();
GotoWithNop("@83EE", 0);

['Event_00252_00002_Trigger'];
EventSetTriggerMode(-1, -1, false, 0);
HeroSetSprite(0, Sprite.坠落李逍遥, true);
RoleSetDirFrame(0, 0, 0);
RoleMoveOneStep(0, 0, 9);
RideNpcToPos(45, 120, 0, 8);
FadeOut(0);
SceneEnter(267);

