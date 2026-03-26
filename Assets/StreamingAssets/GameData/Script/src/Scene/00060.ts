['Scene_00060_Enter'];
MusicPlay(Music.鬼影幢幢, false, false);
Dos_SetBattlefield(FbpDos.蛤蟆洞_2);
VideoWave(2, 0);
PartySetPos(54, 112, 1);
RoleMoveOneStep(0, 0, 6);
HeroSetSprite(0, Sprite.三人皆昏, false);
PartySetRole(1, 0, 0);
RoleSetDirFrame(0, 0, 0);
WaitEventAutoScriptRun(30, false, false);
RoleSetDirFrame(0, 1, 0);
WaitEventAutoScriptRun(10, false, false);
RoleSetDirFrame(0, 2, 0);
WaitEventAutoScriptRun(6, false, false);
RoleSetDirFrame(0, 3, 0);
WaitEventAutoScriptRun(8, false, false);
RoleSetDirFrame(0, 2, 0);
WaitEventAutoScriptRun(2, false, false);
SetDlgUpper(0, 0, false);
//灵儿！月如！
FadeOut(2);
EventSetState(984, 2, 0);
EventSetState(985, 2, 0);
HeroSetSprite(0, Sprite.李逍遥, true);
PartySetPos(55, 112, 0);
RoleSetDirFrame(3, 0, 0);
WaitEventAutoScriptRun(8, false, false);
EventSetDirFrame(60, 2, 0, 0);
WaitEventAutoScriptRun(7, false, false);
EventSetDirFrame(60, 2, 1, 0);
WaitEventAutoScriptRun(4, false, false);
SetDlgLower(22, 0, false);
//好臭的味道！
//这里是什么鬼地方？
WaitEventAutoScriptRun(2, false, false);
EventSetDirFrame(60, 1, 0, 0);
RoleSetDirFrame(0, 0, 0);
WaitEventAutoScriptRun(5, false, false);
EventSetDirFrame(60, 1, 3, 0);
WaitEventAutoScriptRun(6, false, false);
EventSetDirFrame(60, 1, 0, 0);
WaitEventAutoScriptRun(4, false, false);
SetDlgLower(11, 0, false);
//这一大片红色的池子
//应该就是赤鬼王所在的血池
VideoUpdate(0, false);
SetDlgUpper(23, 0, false);
//天哪～好恶心．．
//哪来这么多血水啊！？
VideoUpdate(0, false);
SetDlgLower(5, 0, false);
//呸．．难闻死了
//这股血腥味实在令人受不了
VideoUpdate(0, false);
SetDlgLower(11, 0, false);
//这么多的血，可见这妖魔
//不知残害了多少生命
PartySetRole(1, 2, 3);
EventSetState(984, 0, 0);
EventSetState(985, 0, 0);
ReplaceAndPause();

['Event_00060_00010_Trigger'];
PlaySound(134);
EventSetTriggerMode(-1, -1, false, 0);
NpcSetFrame(1);
EventSetAutoScript(60, 3, "@8EA1");
EventSetAutoScript(60, 5, "@8EA1");
EventSetAutoScript(60, 6, "@8EA1");
EventSetAutoScript(60, 7, "@8EA1");
EventSetAutoScript(60, 8, "@8EA1");
EventSetState(987, 0, 0);
EventSetState(992, 0, 0);

['Event_00060_00013_Trigger'];
PlaySound(134);
EventSetTriggerMode(-1, -1, false, 0);
NpcSetFrame(1);
EventSetAutoScript(60, 11, "@8EA1");
EventSetState(995, 0, 0);

['Event_00060_00022_Trigger'];
EventSetTriggerMode(-1, -1, false, 0);
NpcSetFrame(1);
PlaySound(134);
EventSetAutoScript(60, 14, "@8EA1");
EventSetAutoScript(60, 16, "@8EA1");
EventSetAutoScript(60, 17, "@8EA1");
EventSetAutoScript(60, 18, "@8EA1");
EventSetAutoScript(60, 19, "@8EA1");
EventSetAutoScript(60, 20, "@8EA1");
EventSetState(998, 0, 0);
EventSetState(1004, 0, 0);

['Event_00060_00025_Trigger'];
EventSetTriggerMode(-1, -1, false, 0);
NpcSetFrame(1);
PlaySound(134);
EventSetAutoScript(60, 23, "@8EA1");
EventSetState(1007, 0, 0);

['Event_00060_00028_Trigger'];
EventSetTriggerMode(-1, -1, false, 0);
NpcSetFrame(1);
PlaySound(134);
EventSetAutoScript(60, 26, "@8EA1");
EventSetState(1010, 0, 0);

['Event_00060_00031_Trigger'];
EventSetTriggerMode(-1, -1, false, 0);
NpcSetFrame(1);
PlaySound(134);
EventSetAutoScript(60, 29, "@8EA1");
EventSetState(1013, 0, 0);

['Event_00060_00036_Trigger'];
EventSetTriggerMode(-1, -1, false, 0);
NpcSetFrame(1);
PlaySound(134);
EventSetAutoScript(60, 32, "@8EA1");
EventSetAutoScript(60, 33, "@8EA1");
EventSetState(1017, 0, 0);
EventSetState(1018, 0, 0);

['Event_00060_00041_Trigger'];
EventSetTriggerMode(-1, -1, false, 0);
NpcSetFrame(1);
PlaySound(134);
EventSetAutoScript(60, 37, "@8EA1");
EventSetAutoScript(60, 38, "@8EA1");
EventSetState(1022, 0, 0);
EventSetState(1023, 0, 0);

['Event_00060_00046_Trigger'];
EventSetTriggerMode(-1, -1, false, 0);
NpcSetFrame(1);
PlaySound(134);
EventSetAutoScript(60, 42, "@8EA1");
EventSetAutoScript(60, 43, "@8EA1");
EventSetState(1027, 0, 0);
EventSetState(1028, 0, 0);

['Event_00060_00049_Trigger'];
EventSetTriggerMode(-1, -1, false, 0);
NpcSetFrame(1);
PlaySound(134);
EventSetAutoScript(60, 47, "@8EA1");
EventSetState(1031, 0, 0);

EventSetTriggerMode(-1, -1, false, 0);
NpcSetFrame(1);
PlaySound(134);
EventSetAutoScript(60, 50, "@8EA1");
EventSetAutoScript(0, 0, "@8EA1");
EventSetAutoScript(0, 0, "@8EA1");
EventSetAutoScript(0, 0, "@8EA1");
EventSetAutoScript(0, 0, "@8EA1");
EventSetState(1034, 0, 0);
EventSetState(1035, 0, 0);

['Event_00060_00059_Trigger'];
EventSetTriggerMode(-1, -1, false, 0);
NpcSetFrame(1);
PlaySound(134);
EventSetAutoScript(60, 53, "@8EA1");
EventSetAutoScript(60, 55, "@8EA1");
EventSetAutoScript(60, 56, "@8EA1");
EventSetAutoScript(60, 57, "@8EA1");
EventSetState(1037, 0, 0);
EventSetState(1041, 0, 0);

['Event_00060_00064_Trigger'];
EventSetTriggerMode(-1, -1, false, 0);
NpcSetFrame(1);
PlaySound(134);
EventSetAutoScript(60, 60, "@8EA1");
EventSetAutoScript(60, 62, "@8EA1");
EventSetAutoScript(60, 63, "@8EA1");
EventSetState(1044, 0, 0);

['Event_00060_00065_Trigger'];
SetDlgBox(0);
//从骷颅头内取得二只傀儡虫
AddItem(92, 2);
ReplaceAndPause();
SetDlgBox(0);
//一具骷颅头

['Event_00060_00066_Trigger'];
EventSetTriggerMode(-1, -1, false, 0);
MusicPlay(Music.十面埋伏, false, false);
EventSetState(1050, 1, 0);
WaitEventAutoScriptRun(22, false, false);
SetDlgLower(86, 0, false);
//小石头：
//主人～他就是赤鬼王！
VideoUpdate(0, false);
SetDlgUpper(61, 0, false);
//刚才我还在纳闷．．
//凡人怎么可能到的了这里！？
//原来～是玉佛珠在帮你们
VideoRestore();
//哼！　小秃驴．．
//你修你的佛，我炼我的魔
//咱们曾言明井水不犯河水
//今日你竟背信带凡人来砸
//我的地盘！？
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//谁理你，看这血池就知道
//你这妖魔残害了多少人命。
//今日我等便要为世间除害！
VideoUpdate(0, false);
SetDlgUpper(61, 0, false);
//笑话．．！
EventSetState(-1, 0, 0);
SceneSetScript(60, "", "Scene_00061_Teleport");
EventSetStateSequence(62, 6, 15, 0);
EventSetStateSequence(64, 3, 14, 0);
EventSetStateSequence(65, 4, 10, 0);
EventSetStateSequence(61, 31, 50, 0);
EventSetStateSequence(66, 67, 85, 0);
EventSetStateSequence(60, 68, 0, 0);
EventSetStateSequence(54, 13, 20, 0);
EventSetStateSequence(53, 5, 14, 0);
EventSetStateSequence(51, 3, 17, 0);
EventSetStateSequence(50, 33, 40, 0);
EventSetState(906, 0, 0);
EventSetState(907, 2, 0);
EventSetState(909, 0, 0);
EventSetTriggerScript(51, 3, "@2B27");
EventSetTriggerScript(51, 4, "@2B2A");
EventSetTriggerScript(51, 2, "@2B2D");
EventSetTriggerScript(50, 14, "@2B35");
EventSetTriggerScript(50, 12, "@2B47");
EventSetTriggerScript(52, 9, "@2B5D");
EventSetTriggerScript(52, 13, "@2B59");
EventSetTriggerScript(52, 14, "@2B4F");
SetBattleMusic(Music.腥风血雨);
Dos_SetBattlefield(FbpDos.神木林底);
BattleStart(27, "@A073", "");
AddItem(207, 0);
SetDlgBox(0);
//得到一颗土灵珠
Dos_SetBattlefield(FbpDos.蛤蟆洞_2);
SetBattleMusic(Music.心急如焚);
MusicPlay(Music.血海余生, false, false);
BattleEnd();
VideoUpdate(0, false);
EventSetState(1050, 0, 0);
VideoShake(72, 0);
FadeToScene(5, -1);
SetDlgLower(11, 0, false);
//原来．．．
//土灵珠在这妖怪身上！
RoleSetDirFrame(3, 0, 0);
VideoUpdate(0, false);
SetDlgUpper(1, 0, false);
//土灵珠．．这又是啥玩意？
VideoUpdate(0, false);
SetDlgLower(11, 0, false);
//我听师父说过．．自古相传
//女娲大神聚天地灵气～风、雷
//、水、火、土，炼成五珠以镇
//伏群魔。
//传说～这些灵珠早已失落多年
//我们今日竟能得到此物，莫非
//是天意．．
VideoUpdate(0, false);
SetDlgUpper(3, 0, false);
//哈！　既然是千年古物．．
//应该值不少钱啰！
SetDlgLower(22, 0, false);
//就只会想到钱！
VideoUpdate(0, false);
SetDlgLower(11, 0, false);
//我们逃脱这洞窟就靠这灵珠了
//灵珠于此时此地现世，或许意
//谓着．．我．．不该再躲藏了
VideoUpdate(0, false);
SetDlgUpper(4, 0, false);
//灵儿．．怎么你今天讲的话
//都好深奥，好像变个人似的
//是有什么心事吗？
VideoUpdate(0, false);
SetDlgLower(11, 0, false);
//没．．没有啦，我没事
//这些日子．．我过得很快乐
//你们不要担心．．
SetDlgUpper(24, 0, false);
//．．．．．．．．
VideoUpdate(0, false);
SetDlgLower(11, 0, false);
//我们快离开这里吧
//村民们在等我们的好消息呢

['Event_00060_00067_Auto'];
WaitEventAutoScriptRun(2, false, false);
NpcSetFrame(1);
WaitEventAutoScriptRun(3, false, false);
NpcSetFrame(2);
WaitEventAutoScriptRun(3, false, false);
NpcSetFrame(3);
WaitEventAutoScriptRun(3, false, false);
NpcSetFrame(4);
WaitEventAutoScriptRun(3, false, false);
NpcSetFrame(5);

['Event_00060_00093_Trigger'];
Call("@8E99", 0, 0);
SetDlgBox(0);
//获得观音符
AddItem(1, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

['Event_00060_00090_Trigger'];
Call("@8E99", 0, 0);
SetDlgBox(0);
//获得还魂香
AddItem(35, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

['Event_00060_00094_Trigger'];
Call("@8E99", 0, 0);
SetDlgBox(0);
//获得赎魂灯
AddItem(36, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

['Event_00060_00092_Trigger'];
Call("@8E99", 0, 0);
SetDlgBox(0);
//获得透骨钉
AddItem(95, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

['Event_00060_00096_Trigger'];
Call("@8E99", 0, 0);
SetDlgBox(0);
//获得土灵符
AddItem(11, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

Call("@8E99", 0, 0);
SetDlgBox(0);
//获得毒蛇卵
AddItem(57, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

Call("@8E99", 0, 0);
SetDlgBox(0);
//获得毒蝎卵
AddItem(58, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

Call("@8E99", 0, 0);
SetDlgBox(0);
//获得毒蟾卵
AddItem(59, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

Call("@8E99", 0, 0);
SetDlgBox(0);
//获得蜘蛛卵
AddItem(60, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

Call("@8E99", 0, 0);
SetDlgBox(0);
//获得蜈蚣卵
AddItem(61, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

['Event_00060_00091_Trigger'];
Call("@8E99", 0, 0);
SetDlgBox(0);
//获得净衣符
AddItem(4, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

['Event_00060_00069_Auto'];
NpcChase(9, 0, false);
ReplaceAndPauseWithNop("Event_00060_00069_Auto", 0);

