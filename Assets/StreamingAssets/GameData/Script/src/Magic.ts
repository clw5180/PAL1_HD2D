['Magic_00003_Success'];
RoleModifyHP(false, 75);

['Magic_00005_Success'];
RoleModifyHP(false, 220);

['Magic_00006_Success'];
RoleModifyHP(false, 500);

['Magic_00002_Success'];
RoleModifyBattleSpriteTemp(5);
RoleModifyAttrTemp(Attribute.AttrMagicStrength, 100, 0);
RoleModifyAttrTemp(Attribute.AttrFleeRate, 100, 0);

['Magic_00017_Success'];
RoleSetStatus(Status.MoreDefense, 9);

['Magic_00018_Success'];
RoleSetStatus(Status.MorePhysicalAttacks, 7);

['Magic_00072_Success'];
JumpIfEnemyTurn("@A81F");
EnemyApplyPoison(true, 10);

['Magic_00072_Use'];
JumpIfEnemyTurn("@A823");
RemoveItem(88, 1, "@A832");
['@A823'];

['Magic_00071_Success'];
JumpIfEnemyTurn("@A827");
EnemyApplyPoison(true, 5);

['Magic_00071_Use'];
JumpIfEnemyTurn("@A82B");
RemoveItem(88, 1, "@A832");
['@A82B'];

['Magic_00053_Success'];
JumpIfEnemyTurn("Item_00078_Use");
EnemyApplyPoison(false, 5);

['Magic_00053_Use'];
JumpIfEnemyTurn("@A831");
RemoveItem(88, 1, "@A832");
['@A831'];

['Magic_00047_Use'];
CashModify(-500, "@A838");

['Magic_00092_Use'];
CashModify(-1, "@A838");
CashModify(1, "");
MagicSetBaseDamageByMoney(92);

['SummonGold_00008_Use'];
RemoveItem(26, 1, "@A846");
MagicSetBaseDamageByMP(30008, 0);

['Magic_00015_Success'];
RoleCurePoisonBylevel(false, 2);
GotoWithNop("Item_00005_Use", 0);

['Magic_00010_Success'];
JumpIfEnemyTurn("@A851");
GotoWithProbability(60, "@977F");
EnemySetStatus(Status.Sleep, 4, "@977F");

['Magic_00012_Success'];
JumpIfEnemyTurn("@A858");
GotoWithProbability(44, "@977F");
EnemySetStatus(Status.AttackFriends, 4, "@977F");

['Magic_00075_Success'];
RoleApplyPoison(false, 3);

['Magic_00093_Success'];
RoleApplyPoison(true, 3);

['Magic_00021_Use'];
BattleBlowAwayEnemy(-2);

['SummonGold_00001_Use'];
BattleBlowAwayEnemy(-3);

['Magic_00058_Use'];
VideoShake(24, 0);

['Magic_00034_Use'];
VideoShake(20, 0);

['Magic_00045_Use'];
VideoShake(14, 0);

['Magic_00083_Success'];
JumpIfEnemyHPMoreThanPercentage(25, "@A840");
GotoWithProbability(60, "@A840");
CaptureTheEnemy("@A840");
KillEnemy();

['Magic_00011_Success'];
JumpIfEnemyTurn("@A873");
EnemySetStatus(Status.AttackFriends, 0, "@A840");
GotoWithProbability(33, "@A840");
KillEnemy();

['SummonGold_00008_Success'];
ReplaceAndPause();
ReplaceAndPause();
ReplaceAndPause();
ReplaceAndPause();
ReplaceAndPause();
ReplaceAndPause();
ReplaceAndPause();
ReplaceAndPause();
HeroRemoveMagic(30008, 1);
SetDlgCenter(0, false);
//"酒神咒"使用次数已用尽

['Magic_00088_Success'];
RoleSetStatus(Status.DualAttack, 5);

['Magic_00091_Success'];
RoleSetStatus(Status.ActionsFaster, 9);

['Magic_00090_Use'];
RoleFleeBattle("@A840");

['Magic_00076_Success'];
PlaySound(174);
BattleStealFromEnemy(6);

