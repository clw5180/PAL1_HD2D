['Scene_00001_Enter'];
PartySetPos(32, 64, 0);
HeroSetSprite(0, Sprite.躺李逍遥, false);
RoleSetDirFrame(0, 0, 0);
PartySetRole(1, 0, 0);
VideoUpdate(0, false);
SetDlgCenter(0, false);
//$10李～逍～遥，李～逍～遥！~30
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//李逍遥:
//$02哇哇！作恶多端的罗煞鬼婆~40
VideoRestore();
//既然落在你的手里，
//  要杀要剐不用多说！~60
SceneEnter(2);

