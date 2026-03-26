['Event_00286_00001_Trigger'];
RoleSetDirFrame(1, 0, 0);
['@88F4'];
RoleMoveOneStep(-8, -8, 0);
WaitEventAutoScriptRun(0, false, false);
GotoWithNop("@88F4", 4);
SceneEnter(278);
PartySetPos(26, 95, 1);
FadeOut(0);

['Event_00286_00004_Trigger'];
SceneEnter(287);
PartySetPos(50, 99, 0);
FadeOut(0);

['Event_00286_00005_Trigger'];
SceneEnter(287);
PartySetPos(41, 108, 0);
FadeOut(0);

['Event_00286_00006_Trigger'];
SceneEnter(287);
PartySetPos(21, 43, 1);
FadeOut(0);

['Event_00286_00007_Trigger'];
SceneEnter(287);
PartySetPos(29, 51, 0);
FadeOut(0);

['Event_00286_00008_Trigger'];
SceneEnter(287);
PartySetPos(36, 65, 1);
FadeOut(0);

['Event_00286_00002_Trigger'];
PartyWalkToBlock(32, 43, 1, 4);
WaitEventAutoScriptRun(0, false, false);
RoleSetDirFrame(3, 0, 0);
WaitEventAutoScriptRun(0, false, false);
HeroSetSprite(0, Sprite.空空如也, false);
PartySetRole(1, 0, 0);
RoleSetDirFrame(0, 0, 0);
EventSetDirFrame(286, 3, 0, 1);
WaitEventAutoScriptRun(2, false, false);
PlaySound(155);
EventSetAutoScript(286, 3, "Event_00023_00011_Auto");
WaitEventAutoScriptRun(16, false, false);
FadeOut(0);
EventSetDirFrame(286, 3, 0, 0);
EventSetAutoScript(286, 3, "");
HeroSetSprite(0, Sprite.李逍遥, false);
PartySetRole(2, 1, 5);
RoleSetDirFrame(2, 0, 0);
SceneEnter(288);
PartySetPos(15, 91, 1);

