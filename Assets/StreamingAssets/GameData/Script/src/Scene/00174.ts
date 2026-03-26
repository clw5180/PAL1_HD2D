['Scene_00174_Enter'];
MusicPlay(Music.红尘路缈, false, false);
RoleUninstallEquip(1, UninstallEquip.Ornament);
RoleUninstallEquip(2, UninstallEquip.All);
PartySetPos(15, 23, 0);
HeroSetSprite(0, Sprite.空空如也, true);
RoleSetDirFrame(0, 0, 0);
VideoUpdate(0, false);
//$12"李大哥　我娘想见你
//我带你去见她　好不好？"~60
WaitEventAutoScriptRun(4, false, false);
SetDlgLower(0, 0, false);
//$07　哎呦～我很累了
//　　下次再说吧！~50
WaitEventAutoScriptRun(4, false, false);
SetDlgUpper(0, 0, false);
//$12"好吧．．．~70
VideoRestore();
//那．．我自己过去了．．"$02~60
FadeToScene(0, -1);
EventSetAutoScript(174, 1, "@6C59");
WaitEventAutoScriptRun(37, false, false);
EventSetState(2867, 0, 0);
WaitEventAutoScriptRun(3, false, false);
SceneEnter(175);

