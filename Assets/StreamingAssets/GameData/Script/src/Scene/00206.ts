['Event_00206_00001_Trigger'];
SceneEnter(207);
PartySetPos(15, 18, 1);
FadeOut(0);

['Event_00206_00002_Trigger'];
SceneEnter(211);
PartySetPos(27, 25, 1);
FadeOut(0);

['Event_00206_00003_Trigger'];
//守卫：
//公子，请留步！
//族长与众长老正在开会
//外人不得进入
RoleSetDirFrame(0, 0, 0);
VideoUpdate(0, false);
SetDlgLower(27, 0, false);
//阿奴：
//那．．你先在这里等我一下
//我去见阿娘
EventSetState(3456, 1, 0);
PartySetRole(5, 0, 0);
PartySetPos(27, 80, 0);
Call("@8E0D", 0, 0);
PartyWalkToBlock(35, 69, 0, 8);
PartyWalkToBlock(34, 68, 0, 8);
RoleSetDirFrame(2, 0, 0);
VideoUpdate(0, false);
SetDlgLower(32, 0, false);
//阿奴：
//阿娘～　我回来了！
EventSetDirFrame(206, 12, 0, 0);
EventSetDirFrame(206, 10, 0, 0);
VideoUpdate(0, false);
SetDlgUpper(45, 0, false);
//白苗族长：
//阿奴，娘和诸位长老
//有重要的军情要商议
//你先退下吧
VideoUpdate(0, false);
SetDlgLower(31, 0, false);
//阿奴：
//唔～　为什么？
//我也要参加嘛．．
VideoUpdate(0, false);
SetDlgUpper(45, 0, false);
//白苗族长：
//别孩子气，我们一会就又
//要和黑苗族的人开战了
//你乖乖待在城里不要乱跑
VideoUpdate(0, false);
SetDlgLower(31, 0, false);
//阿奴：
//人家才不是小孩呢～
//我的法术已经不输给盖大姐了
//我也可以跟你们去打仗！
VideoUpdate(0, false);
SetDlgLower(36, 0, false);
//唐钰：
//阿奴，你是白族的继承人
//你阿娘当然不能让你去冒险呀
VideoRestore();
//不过你放心．．唐大哥会
//尽力替你保护你阿娘的
VideoUpdate(0, false);
SetDlgLower(30, 0, false);
//阿奴：
//谁让你直呼我的小名？！
//没大没小！
VideoUpdate(0, false);
SetDlgLower(36, 0, false);
//唐钰：
//是～是．．少主，属下失态
EventSetDirFrame(206, 10, 3, 0);
VideoUpdate(0, false);
SetDlgUpper(45, 0, false);
//白苗族长：
//对于刚才所订定的策略
//诸位可有意见？
EventSetDirFrame(206, 12, 1, 0);
VideoUpdate(0, false);
SetDlgLower(36, 0, false);
//唐钰：
//使用五毒兽来作战，会不会
//有风险？万一毒兽反过头来
//攻击我们自己的人怎么办？
VideoUpdate(0, false);
SetDlgUpper(44, 0, false);
//盖罗娇：
//这点你大可放心，调教那些大
//家伙是我拿手的。何况～黑苗
//人都已经用魔兽来对付咱们了
//咱们可不能白白吃闷亏
EventSetDirFrame(206, 10, 1, 0);
VideoUpdate(0, false);
SetDlgLower(45, 0, false);
//白苗族长：
//阿娇，训练五毒兽的事
//就拜托你了
VideoUpdate(0, false);
SetDlgUpper(44, 0, false);
//盖罗娇：
//是．．交给我～您放心！
VideoUpdate(0, false);
SetDlgLower(27, 0, false);
//阿奴：
//阿娘～我想求您一件事．．
EventSetDirFrame(206, 10, 0, 0);
VideoUpdate(0, false);
SetDlgUpper(45, 0, false);
//白苗族长：
//求也没用，我是决
//不可能带你上战场的
VideoUpdate(0, false);
SetDlgLower(29, 0, false);
//阿奴：
//不是啦．．
//人家是想进麒麟洞一趟
VideoUpdate(0, false);
SetDlgUpper(45, 0, false);
//白苗族长：
//不行！麒麟洞又不是什么好玩
//的地方，而且你一个人进去太
//危险了
VideoUpdate(0, false);
SetDlgLower(27, 0, false);
//阿奴：
//自然有人会陪我去嘛．．
//而且～他的武功很厉害喔！
VideoUpdate(0, false);
SetDlgUpper(45, 0, false);
//白苗族长：
//阿奴！你这么大了，阿娘也
//管不了你。可是你要知道．．
//我不在的时候，你就是算是
//代理族长，如果你真的有心
//想帮阿娘的忙，就安份一点
//不要成天到处乱跑
VideoUpdate(0, false);
SetDlgLower(31, 0, false);
//阿奴：
//人家真的是想帮大家的忙嘛
//我想～只要把水灵珠找回来
//就可以解除这场旱灾。
VideoRestore();
//有了雨水，大家就不必再为
//争夺水源而打来打去了
VideoUpdate(0, false);
SetDlgUpper(45, 0, false);
//白苗族长：
//傻孩子～事情没那么简单
//水灵珠自从十二年前被盗后
//阿娘派人多方追查，至今仍
//毫无下落。
VideoRestore();
//而且～就算我们真的能找回
//水灵珠，但是现今世上已经
//没有人会使用灵珠。除非巫
//后娘娘再世，否则也是枉然
VideoUpdate(0, false);
SetDlgLower(31, 0, false);
//阿奴：
//唔．．．
VideoUpdate(0, false);
SetDlgUpper(44, 0, false);
//盖罗娇：
//少主～属下认为．．
//眼前最重要的是，我们必须靠
//自己的力量渡过目前的难关
RoleSetDirFrame(1, 0, 0);
VideoUpdate(0, false);
SetDlgLower(27, 0, false);
//阿奴：
//这场战争，真的非要
//一直打下去不可了吗？
VideoUpdate(0, false);
SetDlgUpper(45, 0, false);
//白苗族长：
//黑、白苗疆二大族之间，已经
//不可能再回复过去那种和睦共
//存的日子了．．
VideoRestore();
//没有人愿意战争，可是我身为
//族长就必须为全族人的生命财
//产而战，既然巫王派人来攻打
//我们，我就得奉陪到底．．
RoleSetDirFrame(2, 0, 0);
VideoUpdate(0, false);
SetDlgLower(31, 0, false);
//阿奴：
//唔．．我要是男孩子就好了
VideoUpdate(0, false);
SetDlgUpper(45, 0, false);
//白苗族长：
//呵～丫头．．等你再长大些
//选一位勇敢而善良的男人做
//丈夫，就可以替阿娘分担这
//些事了．．．
EventSetState(3473, 0, 0);
EventSetState(3457, 2, 0);
EventSetState(3458, 2, 0);
EventSetTriggerMode(207, 14, true, 2);
EventSetTriggerScript(207, 14, "@71C6");
ReplaceAndPause();
EventSetState(3456, 1, 0);
PartySetRole(5, 0, 0);
['@7404'];
PartySetPos(27, 80, 0);
Call("@8E0D", 0, 0);

['Event_00206_00004_Trigger'];
PartySetPos(29, 75, 0);
Call("@8E29", 0, 0);
RoleSetDirFrame(3, 0, 0);
VideoUpdate(0, false);
SetDlgUpper(27, 0, false);
//阿奴：
//这个人是怎么回事？
EventSetDirFrame(206, 18, 1, 0);
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//守卫：
//禀少主～属下是守火麒麟洞口
//的卫兵，刚才我们发现这个人
//鬼鬼祟祟的在洞口附近窥探
//就把他抓起来，正准备要交
//给族长发落
VideoUpdate(0, false);
SetDlgUpper(27, 0, false);
//阿奴：
//你做的很好，不过我阿娘
//他们还在开会，你先在这里等
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//守卫：
//是．．！
EventSetState(3456, 0, 0);
PartySetRole(5, 1, 0);
PartyWalkToBlock(25, 82, 0, 8);
EventSetAutoScript(206, 18, "Event_00002_00020_Auto");
PartyWalkToBlock(28, 85, 1, 8);
PartyWalkToBlock(29, 84, 1, 8);
WaitEventAutoScriptRun(6, false, false);
RoleSetDirFrame(1, 0, 0);
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//阿奴：
//　　．．．．．．．．
RoleSetDirFrame(0, 0, 0);
VideoUpdate(0, false);
SetDlgLower(29, 0, false);
//阿奴：
//嘻．．有了！快跟我来
PartyWalkToBlock(31, 83, 0, 8);
PartyWalkToBlock(35, 87, 0, 8);
SceneSetScript(207, "@74F1", "");
SceneEnter(207);
FadeOut(0);
ReplaceAndPause();
PartySetPos(29, 75, 0);
Call("@8E29", 0, 0);
EventSetState(3456, 0, 0);
PartySetRole(5, 1, 0);

['Event_00206_00007_Trigger'];
//侍卫：
//族长和各部落长老在楼上开会

['Event_00206_00008_Trigger'];
//侍卫：
//小少主，您好！

['Event_00206_00009_Trigger'];
//侍卫：
//小少主，你可回来了
//族长正在找你。

['Event_00206_00010_Trigger'];
//白苗族长：
//阿奴～没别的事
//快回去吧，阿娘还有事
//和诸位长老商议

['Event_00206_00011_Trigger'];
//盖罗娇：
//小少主，听你阿娘的话
//等明天盖大姐打胜仗回来
//会带战利品回来送你

['Event_00206_00012_Trigger'];
SetDlgLower(36, 0, false);
//唐钰：
//阿奴小姐～你放心！
//我们住在大理的汉人会全力
//协助你阿娘，打败黑苗族人

['Event_00206_00013_Trigger'];
//白苗长老：
//少主～你的年纪还太小了
//等再过四、五年，你也可以像
//盖罗娇盖将军一样指挥军队啊

['Event_00206_00014_Trigger'];
//白苗长老：
//日后少主应该选择一位
//英勇善战的白苗战士做夫婿
//才好继承族长的重责大任
VideoRestore();
//就是因为老族长不幸战死
//才使得你阿娘必须代夫出征啊

['Event_00206_00015_Trigger'];
//汉人壮丁：
//不分汉人苗人，大理是我们
//的家园，我们誓死与大理城
//共存亡！

['Event_00206_00016_Trigger'];
//汉人壮士：
//盖将军虽是女流，上战场杀敌
//却是万夫莫敌，实在令人敬佩

['Event_00206_00005_Trigger'];
//少主，您好！

WaitEventAutoScriptRun(5, false, false);
NpcSetDirFrame(1, 0);
WaitEventAutoScriptRun(6, false, false);
NpcSetDirFrame(3, 0);

['Event_00206_00018_Trigger'];
//守卫：
//族长还没开完会吗？

['Event_00206_00019_Trigger'];
//黑苗人：
//哎呦．．算你们狠呐．．

