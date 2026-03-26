['Scene_00217_Enter'];
MusicPlay(Music.神木林, false, false);
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//这是什么地方？
VideoUpdate(0, false);
SetDlgUpper(27, 0, false);
//阿奴：
//这处洞穴我们称之为试炼之窟
//里面栖息著非常多巨大的毒虫
//、毒兽，是个很可怕的地方
VideoRestore();
//从前曾有许多巫蛊师深入洞内
//修炼蛊术，来证明自己的道行
//高深，所以因此而得名
VideoRestore();
//传说．．在这洞窟底最深处
//有太古时代女娲娘娘的遗迹喔
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//　遗迹．．？
VideoUpdate(0, false);
SetDlgUpper(27, 0, false);
//阿奴：
//听说很久很久以前，有人曾
//曾在洞窟最深处，发现女娲
//娘娘的陵墓
VideoRestore();
//不过这也只是传说罢了
//这试炼之窟深不见底，要走
//到尽头之处根本是不可能的
Replace();
MusicPlay(Music.神木林, false, false);
Dos_SetBattlefield(FbpDos.将军冢);

['Event_00217_00001_Trigger'];
SceneEnter(218);
PartySetPos(38, 71, 1);
FadeOut(0);

['Event_00217_00002_Trigger'];
SceneEnter(218);
PartySetPos(36, 90, 1);
FadeOut(0);

['Event_00217_00003_Trigger'];
SceneEnter(218);
PartySetPos(33, 14, 1);
FadeOut(0);

['Event_00217_00004_Trigger'];
SceneEnter(218);
PartySetPos(29, 111, 1);
FadeOut(0);

['Event_00217_00006_Trigger'];
SceneEnter(216);
PartySetPos(32, 52, 0);
FadeOut(0);

['Event_00217_00007_Trigger'];
SceneEnter(216);
PartySetPos(32, 41, 0);
FadeOut(0);

