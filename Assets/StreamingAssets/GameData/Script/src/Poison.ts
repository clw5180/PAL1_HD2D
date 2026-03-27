['Poison_00014_Player'];
RoleModifyMP(false, 20);

['Poison_00013_Player'];
RoleModifyHP(false, 20);

['Poison_00001_Player'];
RoleModifyHP(false, -7);

['Poison_00001_Enemy'];
EnemyModifyHP(false, 7);

['Poison_00002_Player'];
RoleModifyHP(false, -12);

['Poison_00002_Enemy'];
EnemyModifyHP(false, 12);

['Poison_00003_Player'];
RoleModifyHP(false, -20);

['Poison_00003_Enemy'];
EnemyModifyHP(false, 20);

['Poison_00004_Player'];
RoleModifyHP(false, -32);

['Poison_00004_Enemy'];
EnemyModifyHP(false, 32);

['Poison_00005_Player'];
ReplaceAndPause();
ReplaceAndPause();
RoleModifyHP(false, -1);
ReplaceAndPause();
RoleModifyHP(false, -2);
ReplaceAndPause();
RoleModifyHP(false, -3);
ReplaceAndPause();
RoleModifyHP(false, -200);
RoleCurePoisonById(false, 5);

['Poison_00005_Enemy'];
ReplaceAndPause();
EnemyModifyHP(false, 111);
ReplaceAndPause();
EnemyModifyHP(false, 222);
ReplaceAndPause();
EnemyModifyHP(false, 333);
EnemyCurePoisonById(false, 5);

['Poison_00006_Player'];
RoleModifyHP(false, -50);

['Poison_00007_Player'];
RoleModifyHP(false, -50);

['Poison_00008_Player'];
RoleModifyHP(false, -50);

['Poison_00009_Player'];
RoleModifyHP(false, -50);

['Poison_00010_Player'];
RoleModifyHP(false, -50);

['Poison_00006_Enemy'];
EnemyModifyHP(false, 100);

['Poison_00007_Enemy'];
EnemyModifyHP(false, 100);

['Poison_00008_Enemy'];
EnemyModifyHP(false, 100);

['Poison_00009_Enemy'];
EnemyModifyHP(false, 100);

['Poison_00010_Enemy'];
EnemyModifyHP(false, 100);

['Poison_00011_Enemy'];
ReplaceAndPause();
EnemyModifyHP(false, 1);
ReplaceAndPause();
EnemyModifyHP(false, 2);
ReplaceAndPause();
EnemyModifyHP(false, 3);
ReplaceAndPause();
EnemyModifyHP(false, 4);
ReplaceAndPause();
EnemyModifyHP(false, 5);
ReplaceAndPause();
EnemyModifyHP(false, 6);
ReplaceAndPause();
EnemyModifyHP(false, 7);
ReplaceAndPause();
EnemyModifyHP(false, 8);
ReplaceAndPause();
SetDlgBox(0);
//由食妖虫炼成一只灵蛊
AddItem(85, 0);
EnemyCurePoisonById(false, 11);
ReplaceAndPause();

['Poison_00012_Enemy'];
ReplaceAndPause();
EnemyModifyHP(false, 1);
ReplaceAndPause();
EnemyModifyHP(false, 2);
ReplaceAndPause();
EnemyModifyHP(false, 3);
ReplaceAndPause();
EnemyModifyHP(false, 4);
ReplaceAndPause();
EnemyModifyHP(false, 5);
ReplaceAndPause();
EnemyModifyHP(false, 6);
ReplaceAndPause();
EnemyModifyHP(false, 7);
ReplaceAndPause();
EnemyModifyHP(false, 8);
ReplaceAndPause();
SetDlgBox(0);
//由碧血蚕炼成一只赤血蚕
AddItem(89, 0);
EnemyCurePoisonById(false, 12);
ReplaceAndPause();

