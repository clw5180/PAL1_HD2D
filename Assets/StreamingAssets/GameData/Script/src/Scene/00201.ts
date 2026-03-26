['Scene_00201_Enter'];
SetPalette(Palette.忆往昔_日夜);
PartySetPos(28, 52, 0);
RoleSetDirFrame(2, 0, 0);
MusicPlay(Music.回梦, true, false);
VideoUpdate(0, true);
EventSetState(3352, 1, 0);
FadeToScene(4, -1);
SetDlgLower(10, 0, false);
//李逍遥：
//$05你．．你．．是人．．
//还是．．鬼！？
VideoUpdate(0, false);
SetDlgUpper(73, 0, false);
//巫后：
//$08李逍遥．．哀家问你～
//你可是真心爱着灵儿？
VideoUpdate(0, false);
SetDlgLower(3, 0, false);
//李逍遥：
//$02啊．．．难道．．
//您就是灵儿的娘亲！？
SetDlgUpper(73, 0, false);
//巫后：
//$03回答我的话！
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//是～　灵儿是我的妻子
//我当然永远爱她
VideoUpdate(0, false);
SetDlgUpper(73, 0, false);
//巫后：
//$06即使．．她非人类？
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//$03我的灵儿是人间的仙女
//当然与凡人不同
VideoUpdate(0, false);
SetDlgUpper(73, 0, false);
//巫后：
//$08．．．．．．．
//好．．你去吧．．
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//$02我？　去哪？！
VideoUpdate(0, false);
SetDlgUpper(73, 0, false);
//巫后：
//$08我要你回到十年前
//去做一件你该做的事．．
SetDlgLower(10, 0, false);
//李逍遥：
//$02咦．．？(
FadeOut(2);
SetPalette(Palette.平常_日夜);
SceneEnter(247);

