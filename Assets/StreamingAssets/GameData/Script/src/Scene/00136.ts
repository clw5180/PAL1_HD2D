['Event_00136_00001_Trigger'];
SceneEnter(101);
PartySetPos(44, 53, 0);
FadeOut(0);

['Event_00136_00002_Trigger'];
//老板：
//客人好，我们这儿有京城里最
//好的打铁师父，打造出来的武
//器一定让您满意，挑挑看吧！
VideoUpdate(0, false);
ShowBuyItemMenu(13);
VideoUpdate(0, false);
//老板：
//欢迎再来！

['Event_00136_00003_Trigger'];
//顾客：
//这儿卖的兵器都十分的名贵
//就怕有名无实。

['Event_00136_00004_Trigger'];
//顾客：
//京城卖的东西就是不一样
//好～贵！

['Event_00136_00005_Trigger'];
//茅山道士：
//什么！？
//要退回那一万五！
VideoRestore();
//我的梵音铃、桃木剑全没了
//还有那十二张天师符，是我
//用每张一千文钱买来的！
VideoRestore();
//作这趟生意，不但钱没赚到
//还害我的头发给烧掉一半！
ReplaceAndPause();
//茅山道士：
//我没有找你们赔就不错了
//居然还想退钱！

