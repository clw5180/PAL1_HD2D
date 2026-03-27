['Hero_00002_Dying'];
GotoWithProbability(75, "@A974");
GotoWithProbability(66, "@A97A");
GotoWithProbability(50, "@A981");
SetDlgLower(15, 0, false);
//我．．支持不住了．．~60

['Hero_00003_Dying'];
GotoWithProbability(75, "@A98E");
GotoWithProbability(66, "@A991");
GotoWithProbability(50, "@A99C");
SetDlgUpper(24, 0, false);
//喂～人家受伤了，站不起来啦~60

['Hero_00001_Death'];
GotoWithProbability(75, "@A9BF");
GotoWithProbability(66, "@A9C6");
GotoWithProbability(50, "@A9CD");
SetDlgLower(5, 0, false);
//　　啊～！~60
SetDlgBox(0);
//李逍遥怒火燃烧，体力恢复
RoleModifyHP(false, 9999);
RoleModifyAttrTemp(Attribute.AttrMagicStrength, 5, 0);

['Hero_00003_Death'];
GotoWithProbability(75, "@A9DC");
GotoWithProbability(66, "@A9E3");
GotoWithProbability(50, "@A9EA");
SetDlgLower(23, 0, false);
//　可恶～看招！~60
SetDlgBox(0);
//林月如力量突然提高
RoleModifyAttrTemp(Attribute.AttrMagicStrength, 25, 0);
RoleModifyAttrTemp(Attribute.AttrDefense, 25, 0);

