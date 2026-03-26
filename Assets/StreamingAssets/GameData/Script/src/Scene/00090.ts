['Event_00090_00001_Trigger'];
SceneEnter(85);
PartySetPos(34, 29, 0);
FadeOut(0);

['Event_00090_00002_Trigger'];
//婢女：
//对不住，现在我们家主人
//不在，如果有什么事请晚
//点再来。

['Event_00090_00003_Trigger'];
SetDlgLower(1, 0, false);
//李逍遥：
//请问．．．
VideoUpdate(0, false);
SetDlgUpper(42, 0, false);
//姬三娘：
//哦？　小哥哥～
//您找奴家有何贵事？
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//昨晚我追一群飞贼，追到这附
//近来时给追丢了，所以顺道过
//来看看是否有线索可循
VideoUpdate(0, false);
SetDlgUpper(42, 0, false);
//姬三娘：
//呦～难不成您认为
//飞贼躲在我这吗？
VideoUpdate(0, false);
SetDlgLower(6, 0, false);
//李逍遥：
//啊～不是，夫人这么年轻貌美
//怎么可能是飞贼的同伙呢
VideoUpdate(0, false);
SetDlgUpper(42, 0, false);
//姬三娘：
//呵呵呵～公子您真爱说笑
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//昨天夜里，夫人可曾听见
//屋外有任何不寻常的声响？
VideoUpdate(0, false);
SetDlgUpper(42, 0, false);
//姬三娘：
//呵～　当然有啊．．
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//那可曾看见有人从您这
//屋顶跳入院子中？
VideoUpdate(0, false);
SetDlgUpper(42, 0, false);
//姬三娘：
//月圆之夜．．独守空闺
//奴家昨夜又是孤枕难眠
VideoRestore();
//盼呀盼呀，看会不会盼到
//一位翩翩郎君从天而降，
//来陪陪奴家，不过．．
VideoRestore();
//却没有去盼一个飞贼从
//我家屋顶跳下来啊．．
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//就是说～没有啰？
VideoUpdate(0, false);
SetDlgUpper(42, 0, false);
//姬三娘：
//小哥哥～您这么想抓贼的话
//今晚何不在我家住下来嘛
//说不定，那飞贼又从我这屋顶
//经过，不就可以逮个正着吗？
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//这．．不太妥当吧．．(
VideoUpdate(0, false);
SetDlgUpper(42, 0, false);
//姬三娘：
//哎呀～奴家最崇拜有正义感
//的侠士了．．您就让奴家达
//成这个小小的心愿嘛．．
VideoUpdate(0, false);
SetDlgLower(25, 0, false);
//林月如嘟嚷：
//脸皮真厚．．
VideoUpdate(0, false);
SetDlgUpper(42, 0, false);
//姬三娘：
//呵呵～比起孤男寡女双宿双飞
//投宿客栈还同寝一室的．．
//奴家的脸皮还算薄了点呢
VideoUpdate(0, false);
SetDlgLower(23, 0, false);
//林月如：
//你．．．！
VideoUpdate(0, false);
SetDlgUpper(42, 0, false);
//姬三娘：
//怎么着？我又不是在说你
VideoRestore();
//呵呵～小哥哥．．
//在客栈投宿多花钱呀！
VideoRestore();
//这扬州城治安这么差
//我这房子这么大，就是没
//有一个男主人，到了晚上
//奴家心里会害怕呢．．
//您何不搬来我这住下，岂不
//两全其美？
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//　这．．我考虑看看．．
VideoUpdate(0, false);
SetDlgLower(22, 0, false);
//林月如：
//　　哼！
PartySetRole(1, 0, 0);
RoleSetDirFrame(0, 0, 0);
EventSetState(1660, 2, 0);
VideoUpdate(0, false);
EventSetState(1632, 2, 0);
EventSetState(1615, 2, 0);
WaitEventAutoScriptRun(4, false, false);
RoleMoveOneStep(-8, 4, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(-8, 4, 0);
WaitEventAutoScriptRun(8, false, false);
SetDlgUpper(10, 0, false);
//李逍遥：
//月如！　你去哪？
RoleSetDirFrame(2, 0, 0);
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//对不起，告辞！
RoleSetDirFrame(0, 0, 0);
SceneSetScript(85, "@36C8", "");
ReplaceAndPause();
SetDlgUpper(42, 0, false);
//姬三娘：
//呦．．小妹妹气跑啦？

['Event_00090_00012_Auto'];
NpcMoveToBlock(24, 78, 0, 8);
EventSetState(-1, 0, 0);

['Event_00090_00013_Trigger'];
EventSetTriggerMode(-1, -1, false, 0);
NpcSetFrame(1);
VideoUpdate(0, false);
EventSetTriggerScript(85, 6, "@3327");
SceneEnter(91);
ReplaceAndPause();

['Event_00090_00004_Trigger'];
//婢女：
//客人您好，我家主人回来了。

['Event_00090_00005_Trigger'];
//婢女：
//客人，有何贵干？

['Event_00090_00006_Trigger'];
//婢女：
//客人您好。

