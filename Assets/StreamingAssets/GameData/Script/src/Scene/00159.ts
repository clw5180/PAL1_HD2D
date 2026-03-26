['Event_00159_00001_Trigger'];
SceneEnter(160);
PartySetPos(38, 72, 0);
FadeOut(0);

['Event_00159_00002_Trigger'];
//青衣弟子：
//二位请留步，此去乃蜀山禁地
//没有掌门的命令，不可进入
RoleSetDirFrame(0, 0, 0);
RoleMoveOneStep(-16, 8, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(-16, 8, 0);
WaitEventAutoScriptRun(0, false, false);

['Event_00159_00003_Trigger'];
//青衣弟子：
//听说蜀山禁地的尽头是一座
//"锁妖塔"，自本门开山立派
//以来，历代祖师降伏的妖魔
//都关在塔内
VideoRestore();
//妖魔一旦被关入锁妖塔内，就
//永远也别想出来，直到塔中的
//化妖水将它们的妖气化尽，成
//为尘土为止。
ReplaceAndPause();
//青衣弟子：
//我来这里三年了，也没到过
//禁地，更甭说看过锁妖塔了
//不过～听师父说：那座塔足
//足有百丈高呢！

['Event_00159_00004_Trigger'];
//青衣弟子：
//掌门师父是位嫉恶如仇的人
//他老人家只要听到哪里有妖怪
//作乱，就会立刻御剑乘风遁去
VideoRestore();
//半柱香时间不到，就见他拎者
//乾坤袋回来，定又是收了妖怪
VideoRestore();
//前不久，掌门师父曾在一天
//之内就收了一个蛤蟆精和一
//个蛇妖女。
VideoRestore();
//这等本事，我想～即使是
//二郎神下凡也得汗颜吧！
ReplaceAndPause();
//青衣弟子：
//不知道要到哪一天，我才能
//修炼到像掌门师父那般出神
//入化的本事

['Event_00159_00005_Trigger'];
//酒剑仙：
//唉～　好自为之．

