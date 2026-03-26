['Event_00129_00001_Trigger'];
Call("@8E3B", 0, 0);
SceneEnter(128);
PartySetPos(21, 35, 1);
FadeOut(0);

['Event_00129_00002_Trigger'];
WaitEventAutoScriptRun(0, false, false);
SetDlgLower(0, 0, false);
//飞鹰帮：
//阁下是哪条道上的
//报出个名号来！
VideoUpdate(0, false);
//巨鲸帮：
//我是太湖巨鲸帮的
//少帮主─赵海。
VideoUpdate(0, false);
//飞鹰帮：
//巨鲸帮····混水上的
//爬到陆上来干啥？
VideoUpdate(0, false);
//巨鲸帮：
//水上混的就不能上陆地啊！
//谁规定的？我知道最近京城
//会有一桩大买卖，我们想要
//分一票。
VideoUpdate(0, false);
//飞鹰帮：
//说分就分，那我们算什么！
VideoUpdate(0, false);
//巨鲸帮：
//你们算哪根葱啊！
//告诉你，当朝杨太师是我爹
//舅父的妹夫，你听清楚没有！
VideoUpdate(0, false);
//飞鹰帮：
//竟敢在太岁头上动土，朝
//中丞相是我娘叔叔的表兄
//你活得不耐烦啦！
VideoUpdate(0, false);
//巨鲸帮：
//搞不清楚状况，皇上身边的大
//红人杨公公是我舅娘岳丈的拜
//把兄弟。
VideoUpdate(0, false);
//飞鹰帮：
//哼！你们是关公面前耍大刀
//皇帝的宠妃冯妃是我祖父三
//姨婆的外孙女，要想动我们
//的地盘，也要看清楚对象。
ReplaceAndPause();
WaitEventAutoScriptRun(0, false, false);
SetDlgLower(0, 0, false);
//巨鲸帮：
//不服气就来比划比划！
VideoUpdate(0, false);
//飞鹰帮：
//来呀！　谁怕谁？

['Event_00129_00003_Trigger'];
//巨鲸帮众：
//看什么？ 走开！

['Event_00129_00008_Trigger'];
//飞鹰帮：
//没见过黑道谈判吗！？
//离远一点！

['Event_00129_00011_Trigger'];
//小妹：
//好可怕那边都是黑道的人

['Event_00129_00012_Trigger'];
//酒客：
//今朝有酒今朝醉
//家事、国事、天下事
//．．．关我屁事

['Event_00129_00014_Trigger'];
//酒客：
//京城里龙蛇杂处，什么人都有
//你在这儿可要小心点儿。

['Event_00129_00015_Trigger'];
//茅山道士：
//各位乡亲父佬！
//张天师伏魔降妖灵符廉价大
//拍卖，要买要快～数量有限
//晚来就没机会啦！
VideoUpdate(0, false);
ShowBuyItemMenu(20);
VideoUpdate(0, false);
//茅山道士：
//谢谢～
//府上若是需要请人收惊、
//捉妖、勘风水．．请来找
//本山人就对啦！

