['Event_00040_00001_Trigger'];
SceneEnter(43);
PartySetPos(55, 112, 0);
FadeOut(0);

['Event_00040_00002_Trigger'];
SetDlgUpper(21, 0, false);
//林月如：
//喂～呆瓜小贼，三更半夜的
//你打算从何找起呀？
VideoUpdate(0, false);
SetDlgLower(2, 0, false);
//李逍遥：
//林姑娘！怎么你也来了？
VideoUpdate(0, false);
SetDlgUpper(22, 0, false);
//林月如：
//怎么？我不能来吗？好歹～
//赵姑娘是在我家失踪，道义上
//我有责任帮你去寻找她的下落
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//谢谢你！林姑娘．．
//我从不知道，你是这样一个
//热血心肠的女孩。
VideoUpdate(0, false);
SetDlgUpper(21, 0, false);
//林月如：
//你怎么还叫我林姑娘呐～！！
SetDlgLower(6, 0, false);
//李逍遥：
//不然．．该怎么叫？
VideoUpdate(0, false);
SetDlgUpper(21, 0, false);
//林月如：
//我们都已经．．已经是伙伴了
//以后应该兄妹相称，我喊你一
//句李大哥，你就应该回我一声
//月如妹子．．
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//好～月如妹子．．
//　这样可以了吧？
SetDlgUpper(21, 0, false);
//林月如：
//　　嘻．．！
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//对了，说正格的，这一带你熟
//依你看～抓走灵儿的妖怪会往
//哪去了？
VideoUpdate(0, false);
EventSetDirFrame(40, 2, 1, 0);
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//林月如：
//嗯．．．
EventSetDirFrame(40, 2, 0, 0);
VideoUpdate(0, false);
SetDlgUpper(21, 0, false);
//林月如：
//前面不远处有座"隐龙窟"
//听说洞窟内深处住着一群蛇妖
//常在附近出没，有不少年轻的
//少女被它掳到洞中下落不明。
//我爹曾多次招募志士进入洞内
//除妖，可是都没有成功过，还
//死伤了不少人，因此我爹对那
//些蛇妖恨之入骨，也才会说出
//那些误解赵姑娘的话来．．
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//好～你带我到隐龙窟
//等我找到灵儿，一切就明白了
EventSetState(-1, 0, 0);
HeroSetSprite(2, Sprite.林月如, false);
PartySetRole(3, 1, 0);

['Scene_00040_Enter'];
PartySetPos(50, 61, 1);
Replace();
['Scene_00043_Enter'];
SetPaletteTime(0);
MusicPlay(Music.险境_2, false, false);
Dos_SetBattlefield(FbpDos.毒仙林);
SetBattleMusic(Music.势如破竹);

['Event_00040_00003_Auto'];
WaitEventAutoScriptRun(3, false, false);
PlaySound(79);
WaitEventAutoScriptRun(6, false, false);
GotoWithProbability(40, "Event_00040_00003_Auto");
WaitEventAutoScriptRun(2, false, false);
PlaySound(67);
WaitEventAutoScriptRun(16, false, false);
ReplaceAndPauseWithNop("Event_00040_00003_Auto", 0);

