['Event_00135_00001_Trigger'];
SceneEnter(132);
PartySetPos(9, 49, 0);
FadeOut(0);

['Event_00135_00002_Trigger'];
//妓　女：
//呀～　出去、出去！

['Event_00135_00003_Trigger'];
//嫖　客：
//你跑进来干什么？！
//我们正要办好事，别进来打扰
ReplaceAndPause();
['Event_00133_00015_Trigger'];
//嫖客：
//看什么？出去！当心长针眼。

['Event_00135_00005_Trigger'];
NpcSetDirFrame(3, 0);
VideoUpdate(0, false);
//娘．．喝茶．．
ReplaceAndPause();
//．．．．．．

['Event_00135_00004_Trigger'];
SetDlgUpper(56, 0, false);
//莺莺夫人：
//公子的好意．．我心领了
//这是我们的家务事，外人
//也很难评断的
ReplaceAndPause();
//莺莺夫人：
//可怜的是我这乖女儿．．

