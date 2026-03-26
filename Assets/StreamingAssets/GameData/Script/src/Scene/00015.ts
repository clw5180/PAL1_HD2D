['Event_00015_00002_Trigger'];
PartySetPos(13, 104, 0);
SceneEnter(16);
FadeOut(0);

['Scene_00015_Teleport'];
PartySetPos(44, 30, 0);
SceneEnter(15);
FadeOut(0);

['Event_00015_00001_Trigger'];
//张四哥：
//怎么了，找到菩萨娘娘了吗？
ReplaceAndPause();
//张四哥：
//加油啊！我这有帖止血疗伤的
//药，你带着或许用的上
AddItem(40, 0);
ReplaceAndPause();
//张四哥：
//我看～咱们还是回去算了．．
//那些仙女啦～仙药啦，也许是
//村里那些三姑六婆捏造出来的
SetDlgLower(5, 0, false);
//李逍遥：
//不！我绝不放弃．．

['Scene_00015_Enter'];
SetBattleMusic(Music.势如破竹);
MusicPlay(Music.灵山, false, false);
RoleSetDirFrame(0, 0, 0);
PartySetPos(23, 50, 1);
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//谢谢啦．．
SetDlgUpper(39, 0, false);
//张四哥：
//总算靠岸了。逍遥老弟，你可
//要早去早回啊，可千万别迷路
//我在这里看船，不陪你进去了
ReplaceAndPause();

