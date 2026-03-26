['Event_00175_00007_Auto'];
NpcMoveToBlockMutexLock(19, 31, 0, 4);

['Scene_00175_Enter'];
PartySetPos(28, 31, 1);
WaitEventAutoScriptRun(5, false, false);
EventSetDirFrame(175, 4, 0, 1);
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//月如！　等等我．．
VideoUpdate(0, false);
SetDlgLower(82, 0, false);
//老婆婆：
//月神保佑．．
//您可终于醒过来了！
EventSetDirFrame(175, 4, 0, 2);
VideoUpdate(0, false);
SetDlgUpper(10, 0, false);
//李逍遥：
//我．．这里是．．
VideoRestore();
//她们．．月如和灵儿呢？
VideoUpdate(0, false);
SetDlgLower(82, 0, false);
//老婆婆：
//这里是我家，二位姑娘在
//另外一间病房．．
EventSetState(2872, 0, 0);
HeroSetSprite(0, Sprite.伤李逍遥, true);
RoleSetDirFrame(0, 0, 0);
WaitEventAutoScriptRun(2, false, false);
EventSetDirFrame(175, 6, 3, 0);
VideoUpdate(0, false);
SetDlgUpper(82, 0, false);
//老婆婆：
//等等！你的伤的不轻啊
//不可以乱动！~50
PartyWalkToBlock(24, 36, 0, 8);
WaitEventAutoScriptRun(3, false, false);
RoleSetDirFrame(1, 0, 0);
WaitEventAutoScriptRun(3, false, false);
PartyWalkToBlock(17, 29, 1, 8);
RoleSetDirFrame(2, 0, 0);
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//　　　灵儿！~40
EventSetState(2874, 0, 0);
EventSetState(2875, 2, 0);
PartyWalkToBlock(18, 29, 0, 4);
SetDlgLower(2, 0, false);
//李逍遥：
//　灵儿．．　听得见我吗？
WaitEventAutoScriptRun(22, false, false);
RoleSetDirFrame(3, 0, 0);
WaitEventAutoScriptRun(4, false, false);
SetDlgUpper(2, 0, false);
//李逍遥：
//老婆婆，灵儿要不要紧？
VideoUpdate(0, false);
SetDlgLower(82, 0, false);
//老婆婆：
//放心～女人虽弱、为母则强
//照她的情形看来～死不了的！
VideoUpdate(0, false);
SetDlgUpper(1, 0, false);
//李逍遥：
//为母．．．？
VideoUpdate(0, false);
SetDlgLower(82, 0, false);
//老婆婆：
//这丫头一直凝聚着全身的真气
//护着肚子里胎儿，只要这股气
//不散，加上我的灵药，十天半
//个月内不成问题
RoleSetDirFrame(2, 0, 0);
WaitEventAutoScriptRun(7, false, false);
RoleSetDirFrame(3, 0, 0);
VideoUpdate(0, false);
SetDlgUpper(2, 0, false);
//李逍遥：
//胎儿．．我～我的？
VideoUpdate(0, false);
SetDlgLower(82, 0, false);
//老婆婆：
//这要问你自己，我怎么知道？
RoleSetDirFrame(2, 0, 0);
VideoUpdate(0, false);
SetDlgUpper(3, 0, false);
//李逍遥：
//哈．．想不到我要当爹了)
VideoUpdate(0, false);
SetDlgLower(82, 0, false);
//老婆婆：
//别高兴的太早，她的身体能不
//能复原还大有问题哩．．
VideoRestore();
//凡人的病，用凡人的药来医
//仙人的命，可得用仙药来救
//要救她母子二人的命，不用
//特别的仙药是办不到的
RoleSetDirFrame(3, 0, 0);
VideoUpdate(0, false);
SetDlgUpper(4, 0, false);
//李逍遥：
//仙药？
VideoUpdate(0, false);
SetDlgLower(82, 0, false);
//老婆婆：
//要治好她们母子的伤
//唯有得"凤凰蛋"、"麒麟角"二物
VideoRestore();
//在这灵山"神木林"深处，找到
//"金翅凤凰"的窝，可取其蛋壳
//，白苗族居住的"大理城麒麟
//洞"中，有只千年火眼麒麟精
//将之降伏可得其角，不过你要
//记住．．此二兽乃我苗族圣兽
//只可取药，不可伤其性命，否
//则会遭天谴
VideoUpdate(0, false);
SetDlgUpper(9, 0, false);
//李逍遥：
//好～取药的事就交给我！
VideoRestore();
//对了．．月如呢？
//我找月如跟我一块去好了
//她比我精明，有她在比较
//不会失手
VideoUpdate(0, false);
EventSetDirFrame(175, 7, 0, 0);
WaitEventAutoScriptRun(6, false, false);
SetDlgLower(82, 0, false);
//老婆婆：
//唉．．有你这句话
//她可以瞑目了．．
RoleSetDirFrame(0, 0, 0);
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//．．．．．！
PartyWalkToBlock(16, 31, 0, 8);
WaitEventAutoScriptRun(6, false, false);
RoleSetDirFrame(3, 0, 0);
VideoUpdate(0, false);
//$07她．．是．．月．．月如？
//老婆婆．．您别跟我开玩笑
EventSetDirFrame(175, 7, 3, 0);
WaitEventAutoScriptRun(2, false, false);
SetDlgLower(82, 0, false);
//老婆婆：
//$05天灵碎裂，回天乏术．．送到
//我这里来时，就已经断气了
RoleSetDirFrame(0, 0, 0);
WaitEventAutoScriptRun(8, false, false);
HeroSetSprite(0, Sprite.空空如也, true);
EventSetDirFrame(175, 2, 0, 1);
WaitEventAutoScriptRun(5, false, false);
EventSetDirFrame(175, 2, 0, 2);
WaitEventAutoScriptRun(20, false, false);
EventSetDirFrame(175, 2, 0, 3);
WaitEventAutoScriptRun(10, false, false);
MusicStop(1);
SetDlgUpper(0, 0, false);
//$08不．．这不会是真的．．~60
FadeOut(6);
PlayCDOrMusic(CD.蝶恋, Music.蝶恋_4);
SceneEnter(194);
ReplaceAndPause();
PartySetPos(16, 31, 0);
EventSetAutoScript(175, 7, "@6C77");
VideoFadeAndUpdate(1);
MusicStop(1);
SetDlgCenter(0, false);
//月如．．．．
EventSetDirFrame(175, 2, 0, 4);
EventSetState(2875, 0, 0);
EventSetState(2876, 2, 0);
SceneEnter(178);
FadeOut(0);
ReplaceAndPause();
PartySetPos(16, 30, 1);
HeroSetSprite(0, Sprite.李逍遥, true);
RoleSetDirFrame(3, 0, 0);
ReplaceAndPause();

['Event_00175_00005_Trigger'];
//赵灵儿依然昏迷不醒

['Event_00175_00008_Trigger'];
SetDlgLower(82, 0, false);
//老婆婆：
//你的伤好的差不多了
//可以出去走走啦，两个丫头
//婆婆我会替你看好的
ReplaceAndPause();
SetDlgLower(82, 0, false);
//老婆婆：
//千万记住喔～
//金翅凤凰喜欢在巨树顶端筑巢
//你到神木林高处找找，也许会
//有收获
ReplaceAndPause();
SetDlgLower(82, 0, false);
//老婆婆：
//大理城外附近黑苗、白苗二族
//经常发生战争，我建议你暂时
//不要靠近那里，等局面平静些
//再去火麟洞吧
ReplaceAndPause();
SetDlgLower(82, 0, false);
//老婆婆：
//对了．．我这房里有许多毒蛊
//和灵药，你可以自由运用
VideoRestore();
//不过～有些胡乱吃会丧命的
//还没搞清楚药性之前，可别
//乱用喔！
ReplaceAndPauseWithNop("Event_00175_00008_Trigger", 0);

['Event_00175_00012_Trigger'];
SetDlgBox(0);
//得到一只金蚕王
AddItem(90, 0);
ReplaceAndPause();

['Event_00175_00014_Trigger'];
SetDlgBox(0);
//得到一包九阴散
AddItem(76, 0);
ReplaceAndPause();

['Event_00175_00015_Trigger'];
SetDlgBox(0);
//得到三株断肠草
AddItem(65, 3);
ReplaceAndPause();

['Event_00175_00016_Trigger'];
SetDlgBox(0);
//得到三包毒龙砂
AddItem(97, 3);
ReplaceAndPause();

['Event_00175_00017_Trigger'];
SetDlgBox(0);
//得到一包无影毒
AddItem(77, 0);
ReplaceAndPause();

['Event_00175_00018_Trigger'];
SetDlgBox(0);
//得到七只碧血蚕
AddItem(87, 7);
ReplaceAndPause();
['Event_00175_00019_Trigger'];
SetDlgBox(0);
//得到一只炼蛊皿
AddItem(208, 0);
ReplaceAndPause();

['Event_00175_00011_Trigger'];
SetDlgLower(0, 0, false);
//李逍遥：
//忆如～爹要出去打坏人
//你要乖乖的喔！

