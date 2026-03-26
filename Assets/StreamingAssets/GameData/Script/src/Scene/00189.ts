['Scene_00189_Enter'];
HeroSetSprite(0, Sprite.阿奴救活逍遥, true);
RoleSetDirFrame(0, 0, 0);
PartySetPos(17, 90, 0);
VideoUpdate(0, true);
RoleSetDirFrame(0, 1, 0);
WaitEventAutoScriptRun(4, false, false);
RoleSetDirFrame(0, 2, 0);
WaitEventAutoScriptRun(2, false, false);
RoleSetDirFrame(0, 1, 0);
WaitEventAutoScriptRun(2, false, false);
RoleSetDirFrame(0, 2, 0);
WaitEventAutoScriptRun(1, false, false);
RoleSetDirFrame(0, 1, 0);
WaitEventAutoScriptRun(2, false, false);
RoleSetDirFrame(0, 2, 0);
WaitEventAutoScriptRun(2, false, false);
RoleSetDirFrame(0, 1, 0);
WaitEventAutoScriptRun(3, false, false);
RoleSetDirFrame(0, 2, 0);
WaitEventAutoScriptRun(2, false, false);
RoleSetDirFrame(0, 1, 0);
WaitEventAutoScriptRun(2, false, false);
RoleSetDirFrame(0, 2, 0);
WaitEventAutoScriptRun(2, false, false);
RoleSetDirFrame(0, 3, 0);
WaitEventAutoScriptRun(4, false, false);
RoleSetDirFrame(0, 4, 0);
WaitEventAutoScriptRun(6, false, false);
RoleSetDirFrame(0, 5, 0);
WaitEventAutoScriptRun(5, false, false);
RoleSetDirFrame(0, 6, 0);
WaitEventAutoScriptRun(3, false, false);
PlaySound(263);
RoleSetDirFrame(0, 7, 0);
WaitEventAutoScriptRun(6, false, false);
RoleSetDirFrame(0, 6, 0);
WaitEventAutoScriptRun(3, false, false);
RoleSetDirFrame(0, 5, 0);
WaitEventAutoScriptRun(2, false, false);
RoleSetDirFrame(0, 8, 0);
WaitEventAutoScriptRun(2, false, false);
RoleSetDirFrame(0, 9, 0);
WaitEventAutoScriptRun(3, false, false);
RoleSetDirFrame(0, 10, 0);
WaitEventAutoScriptRun(4, false, false);
RoleSetDirFrame(0, 11, 0);
WaitEventAutoScriptRun(20, false, false);
RoleSetDirFrame(0, 12, 0);
WaitEventAutoScriptRun(14, false, false);
RoleSetDirFrame(0, 13, 0);
WaitEventAutoScriptRun(10, false, false);
RoleSetDirFrame(0, 12, 0);
WaitEventAutoScriptRun(3, false, false);
RoleSetDirFrame(0, 13, 0);
WaitEventAutoScriptRun(10, false, false);
RoleSetDirFrame(0, 14, 0);
WaitEventAutoScriptRun(4, false, false);
SetDlgLower(0, 0, false);
//李逍遥：
//　　$06唔．．．．~50
RoleSetDirFrame(0, 15, 0);
VideoUpdate(0, false);
//李逍遥：
//　　$02灵儿！！~40
RoleSetDirFrame(0, 16, 0);
WaitEventAutoScriptRun(3, false, false);
RoleSetDirFrame(0, 17, 0);
WaitEventAutoScriptRun(5, false, false);
//李逍遥：
//$06太好了．．灵儿！
//　没事了．．我．．~40
RoleSetDirFrame(0, 18, 0);
WaitEventAutoScriptRun(3, false, false);
RoleSetDirFrame(0, 17, 0);
WaitEventAutoScriptRun(7, false, false);
RoleSetDirFrame(0, 18, 0);
WaitEventAutoScriptRun(2, false, false);
RoleSetDirFrame(0, 17, 0);
WaitEventAutoScriptRun(5, false, false);
RoleSetDirFrame(0, 18, 0);
WaitEventAutoScriptRun(2, false, false);
RoleSetDirFrame(0, 17, 0);
WaitEventAutoScriptRun(24, false, false);
RoleSetDirFrame(0, 19, 0);
WaitEventAutoScriptRun(3, false, false);
RoleSetDirFrame(0, 20, 0);
VideoUpdate(0, false);
PlaySound(89);
SetDlgCenter(0, false);
//$00"呀　～　啊！！"~40
RoleSetDirFrame(0, 21, 0);
WaitEventAutoScriptRun(2, false, false);
RoleSetDirFrame(0, 22, 0);
WaitEventAutoScriptRun(2, false, false);
SetDlgLower(0, 0, false);
//李逍遥：
//　　$02灵儿．．　？~50
VideoUpdate(0, false);
RoleSetDirFrame(0, 23, 0);
FadeToScene(4, -1);
//李逍遥：
//　　啊．．．！？(
VideoUpdate(0, false);
SetDlgLower(30, 0, false);
//阿奴：
//人家．．人家．．
//好心救你，你～你却．．
VideoUpdate(0, false);
SetDlgLower(6, 0, false);
//李逍遥：
//对不起，我一时迷糊
//将你看错为另一个人
HeroSetSprite(0, Sprite.李逍遥, true);
RoleSetDirFrame(2, 0, 0);
EventSetState(3157, 2, 0);
VideoUpdate(0, false);
EventSetDirFrame(189, 2, 2, 0);
VideoUpdate(0, false);
SetDlgUpper(28, 0, false);
//阿奴：
//哼～好心好意救你
//你却轻薄人家！你们汉族
//的男人就是这么下流呐？
VideoUpdate(0, false);
SetDlgLower(6, 0, false);
//李逍遥：
//是．．在下不该
//不过我真的是认错人了
//请姑娘宽宏大量．．(
EventSetDirFrame(189, 2, 0, 0);
VideoUpdate(0, false);
SetDlgUpper(28, 0, false);
//阿奴：
//我长得跟那位叫灵儿的人
//真的那么相像吗？
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//不．．并非是容貌
//而是方才姑娘对在下所施的
//救命法术，造成在下的错觉
VideoUpdate(0, false);
SetDlgUpper(27, 0, false);
//阿奴：
//哦？　她也会赎魂咒？
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//是．．
//因为感觉很类似，所以．．
VideoUpdate(0, false);
SetDlgUpper(30, 0, false);
//阿奴：
//对了！　我问你．．
//你要凤凰蛋做什么？
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//因为在下的妻子怀有身孕
//却因故受了重伤，必须找到
//凤凰蛋壳和火麒麟角二种圣药
//才能医治其母子二人
VideoUpdate(0, false);
SetDlgUpper(27, 0, false);
//阿奴：
//你把我认错成你的妻子？
SetDlgLower(1, 0, false);
//李逍遥：
//是．．．实在很抱歉(
VideoUpdate(0, false);
SetDlgUpper(27, 0, false);
//阿奴：
//嗯．．你说～你只要蛋壳吧？
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//是，可否请姑娘通融
VideoUpdate(0, false);
SetDlgUpper(27, 0, false);
//阿奴：
//好～这颗蛋暂时由我保管
//等小凤凰孵出来后，再把
//蛋壳给你
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//这颗蛋．．你．．孵？(
VideoUpdate(0, false);
SetDlgUpper(27, 0, false);
//阿奴：
//我自有方法，不用你操心
VideoRestore();
//而且我也不是白白送你的！
//你也得帮我去拿一件东西
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//可以，那是应该的
SetDlgUpper(29, 0, false);
//阿奴：
//嘻嘻～一言为定，跟我走！)
EventSetState(3157, 0, 0);
PartySetRole(5, 1, 0);
RoleSetDirFrame(0, 0, 0);
RoleRevive(true, 10);
RoleModifyHPMP(true, 9999);
VideoUpdate(0, false);
SetDlgUpper(10, 0, false);
//李逍遥：
//去哪啊？
RoleSetDirFrame(2, 0, 0);
VideoUpdate(0, false);
SetDlgUpper(29, 0, false);
//阿奴：
//这个林子里有处隐密的树洞
//洞里藏有妖怪所藏的宝物，
//我要你跟我去找一件东西
RoleSetDirFrame(0, 0, 0);
EventSetDirFrame(175, 2, 0, 0);
EventSetTriggerScript(175, 8, "@6F87");
SceneSetScript(183, "@6B38", "");
EventSetTriggerScript(181, 2, "@620C");
Replace();
Dos_SetBattlefield(FbpDos.玉佛寺);

