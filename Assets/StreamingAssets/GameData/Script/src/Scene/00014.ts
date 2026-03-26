['Event_00014_00001_Trigger'];
SceneEnter(6);
PartySetPos(12, 84, 0);
FadeOut(0);

['Event_00014_00002_Trigger'];
//林木匠：
//材料不够，没把围篱补好
//改明儿再去进一些竹板
VideoUpdate(0, false);
//说来说去还不都是一些
//猴死囝仔，讲也讲不听
//常常爬墙跑到十里坡去
//捕蝉找鸟窝，给攀垮的
ReplaceAndPause();
//你要买啥？
VideoUpdate(0, false);
ShowBuyItemMenu(3);

['Event_00014_00003_Trigger'];
//学徒：
//林师父出去修十里坡山下
//的围篱，很晚才会回来

