['Scene_00191_Teleport'];
SceneEnter(176);
PartySetPos(8, 100, 1);
FadeOut(0);

['Event_00191_00001_Trigger'];
SceneEnter(182);
PartySetPos(48, 117, 1);
FadeOut(0);

['Event_00191_00003_Trigger'];
EventSetTriggerMode(-1, -1, false, 2);
//宋贺文：
//咦！？　你们是．．
WaitEventAutoScriptRun(0, false, false);
SetDlgLower(1, 0, false);
//李逍遥：
//你就是宋公子吧？
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//宋贺文：
//是．．在下宋贺文
//兄台有何指教
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//指教？　我想揍人呢！
EventModifyPos(-1, -1, 8, -4);
VideoUpdate(0, false);
EventModifyPos(-1, -1, 8, -4);
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//宋贺文：
//你．．你们想做什么！？
VideoUpdate(0, false);
SetDlgLower(5, 0, false);
//李逍遥：
//我问你．．你是不是对桃源村
//的村民恩将仇报，还带了一群
//妖道来此谋夺宝物
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//宋贺文：
//我．．我也没想到会变成这样
//当初他们说可以帮我，所以～
RoleMoveOneStep(16, -8, 0);
VideoUpdate(0, false);
SetDlgLower(5, 0, false);
//李逍遥：
//所以你就见财起意？
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//宋贺文：
//不！　我不是为了寿葫芦
//而是．．而是．．阿桃小姐
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//哦？　这我可听糊涂了
//你给我从实招来，不然
//可有你受的！
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//宋贺文：
//当初我在桃花林中迷了路
//又中了瘴毒，幸亏阿桃救了我
//后来．．他们要送我走的时候
//阿桃偷偷把仙水换掉
//因为．．她不想我把她忘了
VideoUpdate(0, false);
SetDlgLower(6, 0, false);
//李逍遥：
//哈哈哈～原来是这么回事
//你当真不是贪图他们的宝物？
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//宋贺文：
//是的，我只想和阿桃在一起
//可是村人们坚决不许外人留在
//桃源村。所以我就凭着记忆，
//沿路潜回来，想带阿桃一起走
//可是．．我又怕被村民发现
//后来我在桃花林外遇见木道人
//他说可以帮助我，所以我就带
//他们通过桃花林进来这里
//谁知～他们是在利用我．．
//而我手无缚鸡之力，敌不过他
//村民又对我误解甚深，我．．
//我真不知该如何是好
VideoUpdate(0, false);
SetDlgLower(9, 0, false);
//李逍遥：
//好吧，你闪一边去
//我来会一会那位木道人！
ReplaceAndPause();
//宋贺文：
//你们要千万小心他手上的金铃
//木道人会用金铃使出很厉害的
//法术

['Scene_00191_Enter'];
SetBattleMusic(Music.势如破竹);

['Event_00191_00018_Trigger'];
Call("@8E99", 0, 0);
SetDlgBox(0);
//获得灵蛊
AddItem(85, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

['Event_00191_00022_Trigger'];
Call("@8E99", 0, 0);
SetDlgBox(0);
//获得神仙茶
AddItem(50, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

