['Scene_00170_Enter'];
SetPalette(Palette.忆往昔_日夜);
HeroSetSprite(0, Sprite.躺李逍遥, true);
RoleSetDirFrame(0, 12, 0);
PartySetPos(18, 93, 0);
VideoUpdate(0, true);
SetDlgLower(0, 0, false);
//　$07姥姥～人家他是来求药医治
//　亲人的病呢，您就放过他嘛～~70
SceneEnter(171);
ReplaceAndPause();
PartySetPos(36, 72, 0);
HeroSetSprite(0, Sprite.李逍遥, true);
RoleSetDirFrame(0, 0, 0);
FadeToScene(6, -1);
EventSetDirFrame(170, 3, 0, 1);
WaitEventAutoScriptRun(10, false, false);
RoleSetDirFrame(3, 0, 0);
WaitEventAutoScriptRun(6, false, false);
SetDlgLower(0, 0, false);
//天亮了．．我必须走了。~70
SceneSetScript(146, "@5DA7", "");
SceneEnter(146);
FadeOut(4);

