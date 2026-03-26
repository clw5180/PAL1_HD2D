['Event_00010_00001_Trigger'];
PartySetPos(31, 58, 0);
SceneEnter(5);
FadeOut(0);

['Event_00010_00002_Trigger'];
SceneEnter(6);
PartySetPos(18, 106, 1);
FadeOut(0);

['Event_00010_00003_Trigger'];
//居民：
//啊～　请随便坐

['Event_00010_00004_Trigger'];
//居民：
//我有一个故事你想要听吗？
GotoWithSelect("@0F55");
VideoUpdate(0, false);
//中年人：
//你相不相信老夫就是十多年前
//叱咤江南的名捕，人称铁臂神
//鹰的皇甫英？
GotoWithSelect("@0F55");
VideoUpdate(0, false);
//中年人：
//哈哈～好小子！
//终于有人相信我说的话了
VideoRestore();
//小伙子～不是老夫在吹牛
//十二年前，老夫曾亲手擒服四
//大恶人中的东江虎－游天霸、
//西淫鼠－司马无忧、北神偷－
//钱无通。这铁臂神英的封号
//就是当时的皇上亲口御封的
VideoRestore();
//唉．．可是．．
//老夫在追捕南盗侠李三思时
//却犯下这一生最大的错误．．
//使得老夫自此退隐江湖
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//哦！是什么事情这么严重？
VideoUpdate(0, false);
//中年人：
//说来就惭愧．．老夫不但数次
//败在南盗侠夫妇的手下，还欠
//下他们一份永远无法还的恩情
VideoRestore();
//老夫为了练烈鹰毒爪，长期用
//断肠草汁液浸泡十指，却因而
//毒入及腑藏而不自知
VideoRestore();
//直到当时老夫性命垂危之际
//李三思夫妇却不计前嫌，远
//赴苗疆，从苗人那里偷来一
//颗毒龙胆解了我的毒
//虽然．．我捡回一条命
//但一身武功也废了．．
VideoRestore();
//当我想到要报答他们夫妇时
//却听说盗侠夫妇已双双亡故
//年幼的儿子也不知所踪
VideoRestore();
//而且～据说盗侠夫妇是因为
//盗走苗人的圣物而被诅咒
//所以才会突然暴毙的
ReplaceAndPause();
//中年人：
//咦．．小伙子，我怎么越看你
//越觉得～你跟南盗侠有几分神
//似哩！
ReplaceAndPause();
//中年人：
//呵．．怎么可能嘛，不要放
//在心上，大概是我老眼昏花
//看错了。


['Event_00010_00006_Trigger'];
PlaySound(78);
SetDlgBox(0);
//发现糯米糕
AddItem(16, 0);
EventSetState(-1, 0, 0);

['Event_00010_00005_Trigger'];
PlaySound(78);
SetDlgBox(0);
//发现烧肉
AddItem(33, 0);
EventSetState(-1, 0, 0);

