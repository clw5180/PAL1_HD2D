['Scene_00254_Enter'];
PartySetPos(44, 68, 0);
PartySetRole(1, 4, 0);
RoleSetDirFrame(0, 0, 0);
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//李逍遥：
//娘娘．．有件事
//我不知道该不该问
VideoUpdate(0, false);
SetDlgLower(73, 0, false);
//巫后：
//你有什么要求就说吧
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//李逍遥：
//不～我并不想要求报酬
//而是想问您．．
//．．您还爱巫王吗？
RoleSetDirFrame(3, 1, 0);
VideoUpdate(0, false);
SetDlgLower(73, 0, false);
//巫后：
//．．．．．．
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//李逍遥：
//您不便回答那就算了
VideoUpdate(0, false);
SetDlgLower(73, 0, false);
//巫后：
//我仍然像当初一样爱着他．．
//不管他今天对我们母子做了
//什么，毕竟～他给了我这八
//年来幸福快乐的日子．．
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//李逍遥：
//我想你丈夫不至于那么绝情
//才是。那什么教主的不是好
//东西，我猜都是他在搞鬼
VideoRestore();
//找机会我一定想办法揭穿他
//的阴谋，还您的清白。让你
//们一家人团聚
VideoUpdate(0, false);
SetDlgLower(73, 0, false);
//巫后：
//唉．．你的好意我心领
//我自己不敢抱这种希望了

['Event_00254_00006_Trigger'];
EventSetState(-1, 0, 0);
PartyWalkToBlock(39, 72, 0, 8);
PartyWalkToBlock(37, 74, 0, 8);
PartyWalkToBlock(36, 73, 1, 8);
SetDlgUpper(0, 0, false);
//站住．．！
RoleSetDirFrame(1, 0, 1);
EventSetAutoScript(254, 2, "@8287");
ViewportMove(-2, -1, 24);
SetDlgLower(73, 0, false);
//巫后：
//大王．．．
VideoUpdate(0, false);
SetDlgUpper(71, 0, false);
//巫王：
//青儿．．你真的要背叛我吗？
VideoUpdate(0, false);
SetDlgLower(73, 0, false);
//巫后：
//大王～您误会臣妾了
VideoUpdate(0, false);
SetDlgUpper(71, 0, false);
//巫王：
//他们都说～你不是人、而是妖
//你说，我该不该相信你呢？
SetDlgLower(73, 0, false);
//巫后：
//臣妾．．臣妾对大王的
//忠心天地可表，神人共知
//臣妾绝无害大王之心啊！
EventSetAutoScript(254, 3, "@828B");
WaitEventAutoScriptRun(16, false, false);
SetDlgUpper(80, 0, false);
//拜月教主：
//大王！不必听她狡辩
//事实证明一切
EventSetDirFrame(254, 3, 3, 0);
VideoUpdate(0, false);
SetDlgUpper(80, 0, false);
//拜月教主：
//属下就让她在您面前现
//出原形，让她伏首认罪！
VideoUpdate(0, false);
SetDlgUpper(71, 0, false);
//巫王：
//．．．．．．．．
EventSetDirFrame(254, 2, 0, 0);
WaitEventAutoScriptRun(2, false, false);
EventSetDirFrame(254, 2, 1, 0);
WaitEventAutoScriptRun(3, false, false);
SetDlgUpper(0, 0, false);
//巫王：
//你动手吧！
EventSetAutoScript(254, 2, "@8289");
WaitEventAutoScriptRun(4, false, false);
EventSetDirFrame(254, 3, 0, 0);
WaitEventAutoScriptRun(4, false, false);
MusicPlay(Music.十面埋伏, false, false);
EventSetAutoScript(254, 3, "@828E");
EventSetAutoScript(254, 4, "@8293");
EventSetAutoScript(254, 5, "@8297");
WaitEventAutoScriptRun(16, false, false);
SetDlgLower(0, 0, false);
//巫后：
//大王．．！！
VideoUpdate(0, false);
EventSetDirFrame(254, 3, 0, 12);
VideoUpdate(0, false);
SetDlgUpper(80, 0, false);
//拜月教主：
//妖女！现出原形吧！
PlaySound(175);
FadeColor(79, 2, false);
HeroSetSprite(0, Sprite.李逍遥, false);
PartySetRole(1, 0, 0);
EventSetState(4465, 1, 0);
VideoUpdate(0, false);
FadeColor(79, 2, true);
WaitEventAutoScriptRun(4, false, false);
RoleSetDirFrame(2, 0, 0);
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//李逍遥：
//哇呀～　！！(
RoleSetDirFrame(1, 0, 0);
WaitEventAutoScriptRun(4, false, false);
EventSetDirFrame(254, 3, 3, 0);
PartyWalkToBlock(37, 72, 1, 4);
HeroSetSprite(0, Sprite.空空如也, true);
RoleSetDirFrame(0, 0, 0);
EventSetDirFrame(254, 7, 0, 1);
VideoUpdate(0, false);
SetDlgLower(5, 0, false);
//李逍遥：
//你们想动她，先过我这一关！
VideoUpdate(0, false);
SetDlgUpper(80, 0, false);
//拜月教主：
//小子，你算哪根葱？
EventSetDirFrame(254, 7, 0, 2);
WaitEventAutoScriptRun(3, false, false);
EventSetDirFrame(254, 7, 0, 3);
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//巫后：
//你敌不过他们的，快跟我走！
EventSetAutoScript(254, 7, "@829B");
WaitEventAutoScriptRun(4, false, false);
EventSetAutoScript(254, 3, "@8291");
EventSetAutoScript(254, 4, "@8295");
EventSetAutoScript(254, 5, "@8299");
ViewportMove(4, 2, 16);
EventSetState(4465, 0, 0);
WaitEventAutoScriptRun(14, false, false);
FadeOut(0);
SceneEnter(253);

