['Event_00113_00002_Trigger'];
SceneEnter(108);
PartySetPos(27, 55, 0);
FadeOut(0);

['Event_00113_00001_Trigger'];
SceneEnter(112);

['Event_00113_00024_Auto'];
GotoWithProbability(40, "");
NpcSetFrame(0);
GotoWithProbability(30, "");
WaitEventAutoScriptRun(2, false, false);
NpcSetFrame(1);
GotoWithProbability(30, "Event_00113_00024_Auto");
['@51AC'];
NpcSetFrame(2);
GotoWithProbability(50, "");
WaitEventAutoScriptRun(2, false, false);
NpcSetFrame(1);
GotoWithProbability(40, "");
GotoWithProbability(30, "@51AC");
['@51B2'];
NpcSetFrame(3);
ReplaceAndPause();
GotoWithProbability(30, "");
NpcSetFrame(4);
ReplaceAndPause();
GotoWithProbability(40, "");
GotoWithProbability(30, "@51B2");
ReplaceAndPauseWithNop("Event_00113_00024_Auto", 0);

['Event_00113_00008_Trigger'];
//小贩：
//客倌要买些什么
//东西，这儿应有尽有。

['Event_00113_00005_Trigger'];
//商人：
//待会儿我们就准备搭渡船进城
//趁现在休息一下。
VideoUpdate(0, false);
//伙计：
//是的，老板。

['Event_00113_00007_Trigger'];
//旅客：
//要赶紧趁天黑之前
//进城，否则没地方住啊！

['Event_00113_00009_Trigger'];
//小贩：
//本店的青草茶是京城内外远近
//驰名的，喝过的人都称叹！

['Event_00113_00020_Trigger'];
//孩童甲：
//哈哈～站在这里看得好清楚呢

['Event_00113_00021_Trigger'];
SetDlgLower(0, 0, false);
//孩童乙：
//今天是演什么戏啊？
VideoUpdate(0, false);
//孩童甲：
//就是水淹什么金山的嘛！
//你自己不会看呐。
VideoUpdate(0, false);
//孩童乙：
//为什么不是银山，而是金山？
EventSetDirFrame(113, 20, 0, 0);
VideoUpdate(0, false);
//孩童甲：
//笨喔！　金山比银山值钱嘛
VideoUpdate(0, false);
//孩童乙：
//喔．．．．

['Event_00113_00022_Trigger'];
//孩童丙：
//白蛇传那么好看吗？
//怎么这么多人喜欢看。

['Event_00113_00023_Trigger'];
//观众：
//这戏我前前后后看了十几
//二十遍，怎么看都不腻。
//白蛇精化身的白素贞为了报恩
//而嫁给许仙，最后却悲剧收场

['Event_00113_00012_Trigger'];
//观众：
//呜··白素贞好可怜喔！

['Event_00113_00014_Trigger'];
//路人：
//江湖好汉是不看这玩意儿的
//我只是刚巧在这儿歇歇脚。

['Event_00113_00018_Trigger'];
//老头：
//想当年我演许仙的时候
//你们都还不知道在哪儿！

['Event_00113_00013_Trigger'];
//观众：
//这个许仙到底是
//谁演的，真烂！

['Event_00113_00010_Trigger'];
//观众：
//西湖断桥、借伞姻缘
//我看现实生活中是碰
//不到这种好事的

['Event_00113_00016_Trigger'];
//观众：
//喂！别挡着人看戏。

['Event_00113_00019_Trigger'];
//观众：
//嘘，小声点～
//现在正是最精彩的一段。

['Event_00113_00017_Trigger'];
//观众：
//这扮小青的娘们儿长的不错。

['Event_00113_00015_Trigger'];
//观众：
//别吵！老子正在看戏。

['Event_00113_00011_Trigger'];
//观众：
//法海，好样的！
//快把那蛇妖给收进雷峰塔！

['Event_00113_00025_Trigger'];
//许仙：
//想不到无双美质今双遇，
//分明是第一佳人第一仙。
//二位娘子听我言，
//贵姓高名何方住，
//为何的冒雨冲风到此间？
VideoUpdate(0, false);
//白娘子：
//乍闻此言暗含笑，半是欢喜半羞惭
//定睛把那许仙看，目秀眉清非等闲
VideoUpdate(0, false);
//群唱：
//必是前生缘法今生遇，
//千里姻缘一线牵。
ReplaceAndPause();
//小青：
//娘子呵！
//公子问你话，
//为何对面相逢无一言？
VideoUpdate(0, false);
//白娘子：
//奴家住杭州城黑竹巷
//姓白今年虚度十八秋
//祖居云南年深久，
//如今寄居在杭州。
VideoUpdate(0, false);
//许仙：
//敝人也在城南住，姓许名仙家业寒
//今日游湖归来晚，偏遇天气雨连绵
VideoUpdate(0, false);
//白娘子：
//鞋弓袜小难移步
//弱体柔姿太可怜
VideoUpdate(0, false);
//许仙：
//我居心与你们同路走
//送你到家中我心也安。
ReplaceAndPause();
//小青：
//小姐哦！
//这秀才胆大似狂颠
//听他的话头真有趣
//奉劝娘子休错过
//何不学那文箫配彩鸾？
VideoUpdate(0, false);
//白娘子：
//此人总是多情种，
//还要试探他真心虔不虔，
//你我行踪须隐密，
//休要泄露巧机关。
VideoUpdate(0, false);
//小青：
//小姐！那该如何是好？
VideoUpdate(0, false);
//白娘子：
//借他的伞儿打回去
//约他来取在两日间
//那时我自有瞒天手
//妙法通灵元上元。
VideoUpdate(0, false);
//小青：
//不怕他不入迷魂阵
//就是那八洞神仙要脱逃难
//岂不是人间天上无双美
//玉洞金屋巧姻缘。
ReplaceAndPause();
//群唱：
//人间天上无双美呀无双美，
//玉洞金屋巧姻缘呀巧姻缘。

['Event_00113_00004_Trigger'];
RoleSetDirFrame(2, 0, 0);
RoleMoveOneStep(16, 8, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(16, 8, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(16, 8, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(16, 8, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(16, 8, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(16, -8, 0);
WaitEventAutoScriptRun(0, false, true);

['Event_00113_00003_Trigger'];
RoleSetDirFrame(0, 0, 0);
RoleMoveOneStep(-16, -8, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(-16, -8, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(-16, -8, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(-16, -8, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(-16, -8, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(-16, 8, 0);
WaitEventAutoScriptRun(0, false, true);

