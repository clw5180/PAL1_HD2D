['Scene_00184_Enter'];
MusicPlay(Music.桃花幻梦, false, false);
PartySetRole(1, 0, 0);
RoleSetDirFrame(1, 0, 0);
PartySetPos(32, 80, 1);
VideoUpdate(0, false);
SetDlgLower(6, 0, false);
//李逍遥：
//恭喜三位一切圆满
//我们也该告辞了．．
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//老村长：
//等等，老朽有个东西
//想赠予二位英雄
VideoUpdate(0, false);
SetDlgLower(27, 0, false);
//阿奴：
//哦！　是什么宝物？)
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//老村长：
//请女英雄在您左手边
//的井口内一探便知．．
RoleSetDirFrame(0, 0, 0);
EventSetAutoScript(184, 1, "@6B33");
WaitEventAutoScriptRun(18, false, false);
EventSetAutoScript(184, 1, "@6B36");
WaitEventAutoScriptRun(14, false, false);
SetDlgLower(28, 0, false);
//阿奴：
//哗～　你看！
//是琥珀雕成的葫芦呢
RoleSetDirFrame(1, 0, 0);
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//老伯，这东西太贵重了
//我们不能收
EventSetDirFrame(184, 1, 1, 0);
WaitEventAutoScriptRun(6, false, false);
EventSetDirFrame(184, 1, 2, 0);
VideoUpdate(0, false);
SetDlgLower(30, 0, false);
//阿奴：
//喂！　你很死脑筋呢
//人家诚心诚意要送我们的
//你不收，我可没说不要
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//老村长：
//呵呵～此物乃是寿葫芦
//是我年轻时在一次偶然的
//机会中所得到的稀世珍宝
VideoRestore();
//可是～这东西对我们桃源村
//的人说，却是毫无用处
//而且还惹来这么一场风波
VideoRestore();
//不如送给二位，对你们行走
//江湖的人来说，或多或少会
//有所帮助
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//晚辈就恭敬不如从命了
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//老村长：
//呵呵～天下无不散的宴席
//让老朽送你们一程．．
EventSetDirFrame(184, 1, 1, 0);
VideoUpdate(0, false);
SetDlgLower(27, 0, false);
//阿奴：
//你不会也要我们喝仙水
//把这里的事忘掉吧？
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//老村长：
//二位是我们的恩人
//我们怎会如此对待呢？
VideoRestore();
//二位若再有机会经过此地
//看见这片桃树结满果实时
//别忘了来喝我孙子的满月
//酒喔，呵呵．．．
VideoUpdate(0, false);
EventSetState(2998, 0, 0);
EventSetState(2999, 0, 0);
EventSetState(3000, 0, 0);
EventSetState(3006, 2, 0);
EventSetState(3007, 2, 0);
EventSetState(3008, 2, 0);
FadeToScene(0, -1);
RoleSetDirFrame(2, 0, 0);
VideoUpdate(0, false);
EventSetState(3001, 0, 0);
EventSetState(3002, 0, 0);
EventSetState(3009, 2, 0);
EventSetState(3010, 2, 0);
FadeToScene(0, -1);
EventSetDirFrame(184, 1, 0, 0);
WaitEventAutoScriptRun(2, false, false);
RoleSetDirFrame(1, 0, 0);
WaitEventAutoScriptRun(4, false, false);
EventSetDirFrame(184, 1, 1, 0);
VideoUpdate(0, false);
SetDlgLower(10, 0, false);
//李逍遥：
//原来你们是桃树精！
//那～宋兄．．．
VideoUpdate(0, false);
EventSetState(2995, 0, 0);
EventSetState(2996, 0, 0);
EventSetState(2997, 0, 0);
EventSetState(3003, 2, 0);
EventSetState(3004, 2, 0);
EventSetState(3005, 2, 0);
FadeToScene(2, -1);
SetDlgCenter(0, false);
//谢谢你们．．再见～
AddItem(209, 0);
SceneEnter(183);

