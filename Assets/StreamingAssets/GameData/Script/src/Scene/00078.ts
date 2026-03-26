['Event_00078_00001_Trigger'];
SceneEnter(79);
PartySetPos(13, 66, 0);
FadeOut(0);

['Scene_00078_Enter'];
HeroSetSprite(0, Sprite.躺李逍遥, false);
PartySetRole(1, 0, 0);
RoleSetDirFrame(0, 12, 0);
PartySetPos(38, 61, 0);
WaitEventAutoScriptRun(16, false, false);
EventSetDirFrame(78, 2, 0, 0);
WaitEventAutoScriptRun(20, false, false);
SetDlgLower(65, 0, false);
//韩医仙：
//乖女儿！　你没事吧？
SetDlgUpper(51, 0, false);
//韩梦慈：
//爹～您先医治李少侠
//他被苗人打伤了
EventSetDirFrame(78, 3, 1, 0);
EventSetDirFrame(78, 2, 1, 0);
VideoUpdate(0, false);
EventSetAutoScript(78, 3, "@3271");
WaitEventAutoScriptRun(10, false, false);
SetDlgUpper(26, 0, false);
//林月如：
//医仙，求您救救李大哥！
SetDlgLower(65, 0, false);
//韩医仙：
//放心～有我在死不了的
FadeOut(0);
EventSetState(1493, 0, 0);
HeroSetSprite(0, Sprite.李逍遥, false);
PartySetRole(1, 3, 0);
RoleSetDirFrame(3, 0, 0);
RoleSetDirFrame(0, 0, 1);
EventModifyPos(78, 3, 32, 16);
EventSetDirFrame(78, 3, 1, 0);
RoleRevive(true, 10);
VideoUpdate(0, false);
SetDlgLower(24, 0, false);
//林月如：
//谢谢你，韩大夫
VideoUpdate(0, false);
SetDlgLower(65, 0, false);
//韩医仙：
//哪儿的话，我们才要向
//你们道谢呢．．．
VideoRestore();
//对了．．赵姑娘呢？
VideoUpdate(0, false);
SetDlgLower(24, 0, false);
//林月如：
//她．．为了救我们
//跟那些苗人走了
VideoUpdate(0, false);
SetDlgLower(65, 0, false);
//韩医仙：
//唉．．赵姑娘是个好女孩
//许多事情她不愿连累别人
//都自己承担了．．
VideoRestore();
//李大侠．．你可要再
//去找赵姑娘吗？
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//我不会让她离开我！
VideoUpdate(0, false);
SetDlgLower(65, 0, false);
//韩医仙：
//呵呵～那我就安心了．．
VideoRestore();
//打起精神来吧！
//我相信你和赵姑娘还有缘份的
FadeOut(0);
RoleSetDirFrame(0, 0, 0);
RoleSetDirFrame(0, 0, 1);
EventSetState(1488, 0, 0);
EventSetState(1489, 0, 0);
EventSetState(1490, 0, 0);
EventSetState(1491, 0, 0);
EventSetState(1492, 0, 0);
EventSetState(908, 0, 0);
EventSetState(910, 2, 0);
EventSetState(909, 2, 0);
EventSetAutoScript(54, 6, "Event_00002_00026_Auto");
EventSetState(906, 2, 0);
EventSetState(923, 1, 0);
EventSetState(898, 2, 0);
EventSetTriggerScript(54, 6, "@2A97");
EventSetTriggerScript(54, 3, "@2A9A");
VideoUpdate(0, false);
SetDlgCenter(0, false);
//"韩医仙一行人走了"
GotoWithNop("@0002", 0);
['Event_00078_00003_Auto'];
NpcMoveToBlock(38, 62, 1, 3);

['Event_00078_00004_Auto'];
NpcMoveToBlock(36, 62, 1, 3);

['Event_00078_00005_Auto'];
NpcMoveToBlock(38, 64, 0, 3);
NpcSetDirFrame(1, 0);

['Event_00078_00006_Auto'];
NpcMoveToBlock(36, 61, 0, 3);
ReplaceAndPause();
NpcSetDirFrame(3, 0);

