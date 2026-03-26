['Scene_00195_Enter'];
PartySetPos(45, 28, 0);
VideoUpdate(0, true);
EventSetDirFrame(195, 1, 1, 0);
WaitEventAutoScriptRun(3, false, false);
SetDlgLower(21, 0, false);
//林月如：
//$05瞧！我这身衣裳好不好看？~50
VideoUpdate(0, false);
SetDlgUpper(1, 0, false);
//李逍遥：
//$08喔～好．．好看~70
VideoUpdate(0, false);
EventSetDirFrame(195, 1, 0, 0);
VideoUpdate(0, false);
SetDlgLower(22, 0, false);
//林月如：
//$04就这样子而已吗．．？！
//人家可是好不容易才穿一次呢~50
VideoUpdate(0, false);
SetDlgUpper(8, 0, false);
//李逍遥：
//$06林姑娘，我能否私下问你一
//个问题，请你老实回答我~60
WaitEventAutoScriptRun(2, false, false);
EventSetDirFrame(195, 1, 1, 0);
WaitEventAutoScriptRun(2, false, false);
SetDlgLower(21, 0, false);
//林月如：
//$03　　说啊！？~70
VideoUpdate(0, false);
SetDlgUpper(7, 0, false);
//李逍遥：
//$07你．．当真想要嫁给我？~80
SetDlgLower(21, 0, false);
//林月如：
//$04不是我嫁给你，是你入赘到
//我们林家~70
SceneEnter(196);
FadeOut(3);

