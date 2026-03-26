['Event_00161_00002_Trigger'];
SceneEnter(160);
PartySetPos(30, 72, 0);
FadeOut(0);

['Event_00161_00001_Trigger'];
SceneEnter(160);
PartySetPos(28, 72, 0);
FadeOut(0);

['Event_00161_00003_Trigger'];
SetDlgLower(1, 0, false);
//李逍遥：
//这．．这不是灵儿戴的
//玉佛珠吗！怎么会在这里？
WaitEventAutoScriptRun(2, false, true);
SetDlgUpper(0, 0, false);
//青衣弟子：
//唉呀！你不能拿走哇
//那是掌门师父交待我
//要拿去炼丹炉销毁的
//我差点给忘了
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//李逍遥：
//销毁？这怎么行！
//这串佛珠是我一个朋友的
EventSetState(-1, 0, 0);
AddItem(214, 0);
VideoUpdate(0, false);
SetDlgCenter(0, false);
//"李逍遥收起玉佛珠"
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//青衣弟子：
//那佛珠是妖魔所化身的呀！
//师父说不能留它在人间
//虽然它的法力被师父封住了
//但还是很危险的！
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//李逍遥：
//先把它交给我吧
//我自会向你们掌门说清楚的
VideoUpdate(0, false);
RoleSetDirFrame(3, 0, 0);
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//李逍遥问道：
//小石头！　小石头！
//你还在吗？
VideoUpdate(0, false);
SetDlgLower(86, 0, false);
//小石头：
//呜．．．主人．．
//主人被关起来了．．
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//李逍遥问道：
//主人？．．是说灵儿吗！
//到底发生什么事了，快告诉我
VideoUpdate(0, false);
SetDlgLower(86, 0, false);
//小石头：
//有一伙苗疆人为了争夺主人
//跟一个独眼的打了起来
//结果通通都死掉了。
VideoRestore();
//住在这里的老头子刚好经过
//硬说那些人是主人杀的，我
//拼命想保护主人，结果主人
//还是被抓走了
VideoRestore();
//我听见那老头子说，他要把
//主人关进锁妖塔
VideoUpdate(0, false);
SetDlgLower(23, 0, false);
//林月如：
//他们怎么可以这么不讲理！？
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//李逍遥：
//怎么．．怎么可能！
//灵儿是活生生的人呐
//怎么会被剑圣前辈当作
//妖怪捉起来了？
VideoUpdate(0, false);
SetDlgLower(86, 0, false);
//小石头：
//求求你们一定要救我的主人
//一旦被关入锁妖塔的人，绝无
//生还的机会啊！
EventSetTriggerScript(161, 4, "@59E1");
EventSetTriggerScript(160, 1, "@59EF");
EventSetTriggerScript(160, 2, "@59E5");

['Event_00161_00004_Trigger'];
//阿青：
//你好，我是负责炼丹的阿青

['Event_00161_00005_Trigger'];
//无可救药！

['Event_00161_00006_Trigger'];
EventSetState(-1, 0, 0);
AddItem(38, 0);
SetDlgBox(0);
//得到 天香续命露

['Event_00161_00007_Trigger'];
EventSetState(-1, 0, 0);
AddItem(43, 0);
SetDlgBox(0);
//得到 紫菁玉蓉膏

['Event_00161_00008_Trigger'];
EventSetState(-1, 0, 0);
AddItem(48, 0);
SetDlgBox(0);
//得到雪莲子

['Event_00161_00009_Trigger'];
EventSetState(-1, 0, 0);
AddItem(51, 0);
SetDlgBox(0);
//得到 灵葫仙丹

['Event_00161_00010_Trigger'];
EventSetState(-1, 0, 0);
AddItem(76, 0);
SetDlgBox(0);
//得到 九阴散

['Event_00161_00011_Trigger'];
EventSetState(-1, 0, 0);
AddItem(3, 0);
SetDlgBox(0);
//得到 金刚符

['Event_00161_00012_Trigger'];
EventSetState(-1, 0, 0);
AddItem(2, 0);
SetDlgBox(0);
//得到 圣灵符

