['Event_00121_00001_Trigger'];
SceneEnter(119);
PartySetPos(26, 28, 1);
FadeOut(0);

['Event_00121_00002_Trigger'];
EventSetTriggerMode(-1, -1, false, 2);
//婢　女：
//啊．．李公子、林小姐
//晚宴还没准备好，请稍待片刻
ReplaceAndPause();
//婢　女：
//等一下厨房把酒菜准备齐了
//奴婢会再去请公子和小姐

['Event_00121_00003_Trigger'];
//煮饭婆：
//菜很快就会做好！
//林小姐．．您要是饿了
//奴婢可以先弄一些点心给您吃
VideoUpdate(0, false);
SetDlgLower(21, 0, false);
//林月如：
//不～　您忙．．我不饿
ReplaceAndPause();
//煮饭婆：
//我烧的菜老爷和夫人最喜欢
//只要府里有招待客人，夫人
//总是会请我来掌厨

['Event_00121_00004_Trigger'];
//婢　女：
//林小姐好、李公子好
VideoUpdate(0, false);
SetDlgLower(21, 0, false);
//林月如：
//你在做什么呢？
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//婢　女：
//回禀小姐～这些青菜必须把
//太老的叶子和被虫咬过的部
//份挑干净才可以下锅
VideoRestore();
//要是端出去的菜里看到
//任何不该有的东西，我
//们会被夫人责罚的
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//嘿～　这是我专门的
//要不要我帮忙？
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//婢　女：
//不～　不敢劳动公子
//奴婢自己来就行了
ReplaceAndPause();
//婢　女：
//老爷和夫人非常好客
//每次有重要的客人到来
//就会叫我们准备很多很多菜
ReplaceAndPause();
//婢　女：
//这些青菜和水果都是刚买
//回来的，很新鲜呢！

