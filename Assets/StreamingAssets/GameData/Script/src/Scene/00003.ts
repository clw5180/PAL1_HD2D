['Event_00003_00001_Trigger'];
PartySetPos(40, 91, 1);
SceneEnter(4);
FadeOut(0);

['Event_00003_00003_Trigger'];
SetDlgLower(0, 0, false);
//李逍遥：
//我．．自小失了爹娘，还不
//全靠婶婶一手把我拉拔长大
//婶婶也只有我这一个亲人
//我一定要想办法找人医好她
Replace();
//可是．．连洪大夫都说没救了
//我．．我该怎么办？

['Event_00003_00005_Trigger'];
EventSetState(60, 2, 0);
EventSetPos(4, 16, 976, 1704);
EventSetTriggerScript(4, 16, "@042E");
EventSetAutoScript(4, 16, "@048E");
EventSetTriggerMode(4, 16, true, 2);
EventSetTriggerScript(5, 8, "@03C0");
SetDlgLower(10, 0, false);
//李逍遥：
//小虎子．．
//是你去请洪大夫过来的吗？
VideoUpdate(0, false);
SetDlgUpper(87, 0, false);
//王小虎：
//是的～逍遥哥哥！我到你家来
//就看到李大娘倒在厨房内，我
//就赶快跑去叫洪大夫来
SetDlgLower(6, 0, false);
//李逍遥：
//谢谢你，小虎子！
VideoUpdate(0, false);
SetDlgUpper(87, 0, false);
//王小虎：
//你看～李大娘会不会有事呀？
SetDlgLower(1, 0, false);
//李逍遥：
//小虎子，你当真曾在岛上向神
//仙求得灵药，治好你爹的病？
VideoUpdate(0, false);
SetDlgUpper(87, 0, false);
//王小虎：
//对呀．．逍遥哥哥！
//你也可以到"仙灵岛"求药
//仙女姐姐给的丹药真的很灵
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//　　　仙女？
SetDlgUpper(87, 0, false);
//王小虎：
//我没骗你，那个仙女姐姐长得
//好漂亮喔，心肠又好好喔．．
VideoUpdate(0, false);
SetDlgLower(9, 0, false);
//李逍遥：
//谢谢你告诉我这些．．
//我想上仙灵岛一趟，我婶婶能
//不能麻烦你照顾
VideoUpdate(0, false);
SetDlgUpper(87, 0, false);
//王小虎：
//好！没问题！
ReplaceAndPause();
SetDlgUpper(87, 0, false);
//王小虎：
//不过最近老天爷在生气
//风浪大得紧，出海很危险呢
ReplaceAndPause();
SetDlgUpper(87, 0, false);
//王小虎：
//希望李大娘平安无事，不然以
//后就吃不到她包的粽子了

['Event_00003_00004_Trigger'];
EventSetTriggerMode(0, 0, false, 2);
//洪大夫：
//你跑哪去了？
//你婶婶病倒了你知不知道！
VideoUpdate(0, false);
SetDlgLower(4, 0, false);
//李逍遥：
//是．．
//我婶婶怎么会突然病倒呢？
//我出门的时候，她还好好的啊
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//洪大夫：
//你婶婶的病已经拖很久了
//只是她一直瞒着你．．
SetDlgLower(4, 0, false);
//李逍遥：
//那．．严不严重？
//求求你，大夫～花多少钱都没
//关系，请你一定要医好她．．
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//洪大夫：
//唉～久病未医，加上操劳过度
//恐怕．．没指望了。
VideoUpdate(0, false);
SetDlgLower(2, 0, false);
//李逍遥：
//啊！不会的，求求你！
//大夫你一定要救我婶婶！
SetDlgUpper(0, 0, false);
//洪大夫：
//我开副药试试，但也只能略尽
//人事了，你等会到我的药铺来
//抓药吧．．
EventSetState(192, 2, 0);
EventSetTriggerScript(11, 1, "@07E2");
EventSetState(-1, 0, 0);
FadeOut(0);
RoleSetDirFrame(0, 0, 0);
EventSetDirFrame(3, 5, 0, 0);
WaitEventAutoScriptRun(3, false, false);
EventSetDirFrame(3, 5, 1, 0);

['Event_00003_00002_Trigger'];
PlaySound(78);
SetDlgBox(0);
//得到驱魔香
AddItem(30, 0);
EventSetState(-1, 0, 0);

['Event_00003_00007_Trigger'];
EventSetTriggerMode(-1, -1, false, 2);
SetDlgLower(55, 0, false);
//李大娘：
//呵～　呵～　你这小子！
VideoUpdate(0, false);
SetDlgUpper(1, 0, false);
//李逍遥：
//婶婶．．你干嘛笑得那么诡异
WaitEventAutoScriptRun(5, false, false);
NpcSetDirFrame(2, 0);
WaitEventAutoScriptRun(5, false, false);
NpcSetDirFrame(1, 0);
WaitEventAutoScriptRun(4, false, false);
EventWalkOneStep(-1, -1, -8, -4);
VideoUpdate(0, false);
EventWalkOneStep(-1, -1, -8, -4);
VideoUpdate(0, false);
SetDlgLower(55, 0, false);
//李大娘：
//少跟老娘装傻！
//自己干了啥坏事还会不知？
SetDlgUpper(2, 0, false);
//李逍遥：
//我！？　．．．我又怎么了？
VideoUpdate(0, false);
SetDlgLower(55, 0, false);
//李大娘：
//老娘决定了！！
//就让你带灵儿去苗疆找妈妈
VideoUpdate(0, false);
SetDlgUpper(4, 0, false);
//李逍遥：
//她都告诉您啦？
WaitEventAutoScriptRun(4, false, false);
NpcSetDirFrame(0, 0);
VideoUpdate(0, false);
NpcSetDirFrame(3, 0);
VideoUpdate(0, false);
SetDlgLower(55, 0, false);
//李大娘：
//嘿～　从小到大．．
//你有哪件事瞒得过你婶婶的？
VideoUpdate(0, false);
SetDlgUpper(1, 0, false);
//李逍遥：
//到苗疆可是数千里之远喔！
//我要是去了，这一趟可不只是
//十天半个月的哦！
SetDlgLower(55, 0, false);
//李大娘：
//你这么大了。再说．．你这个
//性．．也不可能在这乡下地方
//待的下去。年青人出去见见世
//面也未尝不好
VideoUpdate(0, false);
SetDlgUpper(3, 0, false);
//李逍遥：
//婶婶～　您终于了解我了！
VideoUpdate(0, false);
SetDlgLower(55, 0, false);
//李大娘：
//先别得意忘形．．这趟路呢
//你得给我办成一件事！
SetDlgUpper(3, 0, false);
//李逍遥：
//哈！别说一件、一百件也行！
VideoUpdate(0, false);
SetDlgLower(55, 0, false);
//李大娘：
//你见到赵夫人后．．就当面
//向她提亲．．说你想娶灵儿
//为妻。
SetDlgUpper(10, 0, false);
//李逍遥：
//　啥！？
VideoUpdate(0, false);
SetDlgLower(55, 0, false);
//李大娘：
//婚姻大事～父母之命！
//你的婚事当然由婶婶我作主
//灵儿呢．．如果她娘亲尚在
//人世，就该向人家当面禀明
VideoUpdate(0, false);
SetDlgUpper(10, 0, false);
//李逍遥：
//万一．．找不到呢？
SetDlgLower(55, 0, false);
//李大娘：
//要是找不到，你们直接抱
//个孙子回来也行
VideoUpdate(0, false);
SetDlgUpper(10, 0, false);
//李逍遥：
//哪有那么快的．．
EventSetAutoScript(3, 7, "@0C03");
WaitEventAutoScriptRun(25, false, false);
SetDlgLower(55, 0, false);
//李大娘：
//少罗唆．．这包袱拿着！
VideoUpdate(0, false);
SetDlgUpper(1, 0, false);
//李逍遥：
//里面是什么东西啊？
SetDlgLower(55, 0, false);
//李大娘：
//自己不会打开来看看
AddItem(220, 0);
EventSetTriggerScript(9, 3, "@0CB6");
EventSetTriggerScript(5, 9, "@0CC2");
EventSetTriggerScript(5, 1, "@0CC7");
ReplaceAndPause();
SetDlgLower(55, 0, false);
//李大娘：
//去吧．．路上小心

['Event_00003_00006_Trigger'];
SceneSetScript(5, "@0DCB", "");
EventSetTriggerScript(6, 11, "@0D9D");
SetDlgLower(9, 0, false);
//李逍遥：
//咱们走吧．．！
SetDlgUpper(11, 0, false);
//赵灵儿：
//　嗯．．．
PartySetRole(1, 2, 0);
EventSetState(-1, 0, 0);

['Event_00003_00010_Trigger'];
PlaySound(78);
SetDlgBox(0);
//发现５０文钱
CashModify(50, "");
EventSetState(-1, 0, 0);

['Event_00003_00011_Trigger'];
PlaySound(78);
SetDlgBox(0);
//发现还神丹
AddItem(45, 0);
EventSetState(-1, 0, 0);

['Event_00003_00012_Trigger'];
PlaySound(78);
SetDlgBox(0);
//发现忘魂花
AddItem(67, 0);
EventSetState(-1, 0, 0);

