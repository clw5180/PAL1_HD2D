['Scene_00228_Enter'];
PlayCDOrMusic(CD.雨, Music.神佑);
PartySetPos(36, 65, 0);
HeroSetSprite(0, Sprite.空空如也, false);
PartySetRole(1, 0, 0);
RoleSetDirFrame(0, 0, 0);
ViewportMove(0, 0, 0);
WaitEventAutoScriptRun(8, false, false);
SetDlgCenter(0, false);
//$12灵儿念出祭雨咒文~60~80
EventSetDirFrame(228, 4, 0, 6);
EventSetDirFrame(228, 5, 0, 6);
EventSetDirFrame(228, 6, 0, 6);
EventSetDirFrame(228, 7, 0, 6);
EventSetDirFrame(228, 8, 0, 6);
FadeToScene(5, -1);
SetRng(7);
FadeOut(2);
SetPalette(Palette.动画_立命生民祈甘霖);
PlayRng(0, 0, 8);
SetDlgUpper(0, 0, false);
//天地诸神啊～我以女娲圣灵之名
//请求您赐予这片土地新的生命~90
MusicStop(1);
FadeOut(3);
SetPalette(Palette.平常_日夜);
SceneEnter(231);
ReplaceAndPause();
PartySetPos(36, 65, 0);
ViewportMove(0, 0, 0);
SetDlgUpper(0, 0, false);
//赵灵儿：
//太好了．．．
FadeOut(0);
SceneEnter(232);

