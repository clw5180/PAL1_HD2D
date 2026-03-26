['Event_00082_00001_Trigger'];
SceneEnter(85);
PartySetPos(16, 58, 0);
FadeOut(0);

['Scene_00082_Enter'];
HeroSetSprite(0, Sprite.跪林月如, false);
PartySetRole(1, 0, 0);
RoleSetDirFrame(0, 0, 0);
PartySetPos(47, 63, 0);
PlaySound(213);
WaitEventAutoScriptRun(10, false, false);
MusicPlay(Music.乐逍遥, false, false);
SetDlgUpper(62, 0, false);
//太守：
//现在人赃俱获，还有什么话
//好说，赶快招出你的党羽，
//或许本官会考虑从轻发落！
VideoUpdate(0, false);
SetDlgLower(22, 0, false);
//林月如：
//招什么？我们又不是贼！
VideoUpdate(0, false);
SetDlgUpper(62, 0, false);
//太守：
//还想狡辩？
//女飞贼、你给本官从实招来。
//否则有你好受的！
VideoUpdate(0, false);
SetDlgLower(23, 0, false);
//林月如：
//你敢！
VideoRestore();
//本姑娘不是什么女飞贼
//我爹爹是苏州林家堡堡主
//也就是当今南武林盟主林天南
//而我伯父正是当今朝中刘尚书
//你给我小心点，赶快放我们走
//要是惹火了本姑娘，定要你乌
//纱帽落地！
VideoUpdate(0, false);
SetDlgUpper(62, 0, false);
//太守：
//大胆刁贼，竟敢对
//本官出言不逊！
EventSetDirFrame(82, 3, 1, 0);
VideoUpdate(0, false);
//师爷：
//大人息怒～这娘们说得跟真
//的似的，如果真的如其所说
//那我们还真不能得罪她
VideoUpdate(0, false);
//太守：
//唔．．如果是假的呢？
EventSetDirFrame(82, 3, 0, 0);
WaitEventAutoScriptRun(7, false, false);
EventSetDirFrame(82, 3, 1, 0);
WaitEventAutoScriptRun(3, false, false);
//师爷：
//不妨从那男的下手．．
VideoUpdate(0, false);
//太守：
//本官听说这帮飞贼的成员全
//是女的，跟这男的有何干系？
VideoUpdate(0, false);
//师爷：
//女飞贼总也有姘头吧？
VideoUpdate(0, false);
//太守：
//喔～　我懂了！
EventSetDirFrame(82, 3, 0, 0);
VideoUpdate(0, false);
SetDlgUpper(62, 0, false);
//太守：
//小伙子，你又是哪里来的？
//家中有何人？
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//小的是余杭县人
//父母早亡，无兄弟姊妹
//有一婶婶在家乡开一间
//小客栈营生．．
VideoUpdate(0, false);
SetDlgUpper(62, 0, false);
//太守：
//好！　来人！
//先打二十大板
VideoUpdate(0, false);
EventSetAutoScript(82, 23, "@3AA3");
EventSetAutoScript(82, 24, "@3AAC");
EventSetAutoScript(82, 22, "@3AB0");
WaitEventAutoScriptRun(5, false, false);
RoleSetDirFrame(0, 1, 0);
WaitEventAutoScriptRun(16, false, false);
RoleSetDirFrame(0, 0, 0);
WaitEventAutoScriptRun(4, false, false);
RoleSetDirFrame(0, 1, 0);
WaitEventAutoScriptRun(10, false, false);
RoleSetDirFrame(0, 0, 0);
WaitEventAutoScriptRun(2, false, false);
SetDlgLower(0, 0, false);
//李逍遥：
//等等！　别打啊！
EventSetAutoScript(82, 23, "");
EventSetAutoScript(82, 24, "");
EventSetAutoScript(82, 22, "");
EventSetDirFrame(82, 23, 0, 0);
EventSetDirFrame(82, 24, 0, 0);
EventSetDirFrame(82, 22, 0, 0);
VideoUpdate(0, false);
SetDlgLower(62, 0, false);
//太守：
//  从实招来！
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//李逍遥：
//哎呦！···
//我们真的是冤枉的呀
//大人···哎呦！
VideoUpdate(0, false);
SetDlgLower(62, 0, false);
//太守：
//还不肯招？再打！
GotoWithNop("@3881", 0);
['@387E'];
SetDlgLower(62, 0, false);
//太守：
//不招？再打！
['@3881'];
EventSetAutoScript(82, 23, "@3AA3");
EventSetAutoScript(82, 24, "@3AAC");
EventSetAutoScript(82, 22, "@3AB0");
WaitEventAutoScriptRun(3, false, false);
RoleSetDirFrame(0, 1, 0);
WaitEventAutoScriptRun(15, false, false);
EventSetDirFrame(82, 3, 1, 0);
WaitEventAutoScriptRun(20, false, false);
EventSetDirFrame(82, 3, 0, 0);
WaitEventAutoScriptRun(4, false, false);
EventSetAutoScript(82, 23, "");
EventSetAutoScript(82, 24, "");
EventSetAutoScript(82, 22, "");
EventSetDirFrame(82, 23, 0, 0);
EventSetDirFrame(82, 24, 0, 0);
EventSetDirFrame(82, 22, 0, 0);
RoleSetDirFrame(0, 0, 0);
VideoUpdate(0, false);
SetDlgLower(62, 0, false);
//太守：
//你招是不招！？
GotoWithSelect("@A9F7");
VideoUpdate(0, false);
//李逍遥：
//大人、大人，别打了！
//我有话要说···哎呦～
EventSetDirFrame(82, 3, 1, 0);
VideoUpdate(0, false);
//师爷：
//大人，不妨听听看他想说些什么。
VideoUpdate(0, false);
SetDlgLower(62, 0, false);
//太守：
//好！停手。那就让你说说看。
EventSetDirFrame(82, 3, 0, 0);
VideoUpdate(0, false);
//李逍遥：
//谢谢大人，我要澄清的是
//我们是看见城内一户人家的
//女主人，拿着这件失物走到
//井边丢下，随后我们在井中
//找到后，爬出来就见你们已
//经包围我们了．．
VideoUpdate(0, false);
SetDlgLower(62, 0, false);
//太守：
//大胆！还想狡赖？
VideoUpdate(0, false);
//李逍遥：
//不是啊，大人。我是说
//能不能给我们几天时间
//我一定能抓到这票飞贼
EventSetDirFrame(82, 3, 1, 0);
VideoUpdate(0, false);
//师爷：
//大人，这主意不错，就利用利用
//他们。能抓到人是最好，要是抓
//不到，就可以名正言顺地把他们
//俩给定罪，您意下如何？
VideoUpdate(0, false);
SetDlgLower(62, 0, false);
//太守：
//好！就这么办，限你两天内抓
//到女飞贼。不过～这女孩子要
//先留下来
VideoUpdate(0, false);
//李逍遥：
//什么！···
VideoUpdate(0, false);
SetDlgLower(62, 0, false);
//太守：
//如果你敢逃走，我立刻办她！
EventSetState(1539, 0, 0);
EventSetState(1540, 0, 0);
EventSetState(1541, 0, 0);
EventSetState(1681, 1, 0);
EventSetTriggerScript(85, 11, "@38F5");
EventSetTriggerScript(85, 12, "@AA18");
EventSetState(1650, 0, 0);
EventSetState(1693, 2, 0);
EventSetState(1695, 2, 0);
EventSetState(1696, 2, 0);
HeroSetSprite(0, Sprite.李逍遥, true);
RoleSetDirFrame(0, 0, 0);
Call("Event_00082_00001_Trigger", 0, 0);
MusicPlay(Music.大开眼界, false, false);
ReplaceAndPause();

['Event_00082_00027_Trigger'];
//古董商：
//谢谢你啊！小兄弟
//帮我找回紫金葫芦。

['Event_00082_00028_Trigger'];
//掌柜：
//小兄弟，终于沉冤得雪了！

['Event_00082_00025_Auto'];
NpcMoveToBlock(51, 66, 1, 8);
NpcMoveToBlock(48, 63, 1, 3);

['Event_00082_00004_Trigger'];
//威～　武～

['Event_00082_00002_Trigger'];
SetDlgUpper(62, 0, false);
//太守：
//还有事吗？
VideoUpdate(0, false);
SetDlgLower(21, 0, false);
//林月如：
//奖金啊，抓到飞贼应该
//有悬赏的奖金吧？
VideoUpdate(0, false);
SetDlgUpper(62, 0, false);
//太守：
//哎呀呀！　你看看．．
//给那女贼气的差点给忘了
VideoRestore();
//本府原先悬赏二百两，另外
//李员外和王员外等地方士绅
//集资一千两赏给破案有功者
//一共是一千二百两纹银
//折合现钱约六十万文钱
SetDlgLower(10, 0, false);
//李逍遥：
//哗～　这么多！
VideoUpdate(0, false);
SetDlgUpper(62, 0, false);
//太守：
//本官还没说完．．
VideoRestore();
//按我大唐律法，缉凶赏银
//需先扣除二成的横财税
//另外本城最近在修筑护城河
//要征收一成的建设捐
//这几次捉拿飞贼的行动中
//有二名捕快殉职，七位负伤
//他们的抚恤金一共须二十八
//万文钱．．．
VideoUpdate(0, false);
SetDlgLower(2, 0, false);
//李逍遥：
//好了好了，告诉我们一共剩
//多少可以领吧
VideoUpdate(0, false);
SetDlgUpper(62, 0, false);
//太守：
//余十四万．．参加此次行动的
//有功人员连同二位一共是二十
//名，每人平分应得七千文钱
VideoRestore();
//还有～本府事先订制了一块
//匾额，用来送给协助官府破
//案的民众．．造价是一千五
VideoRestore();
//好啦～剩下这五千五是你的了
CashModify(5500, "");
VideoUpdate(0, false);
SetDlgBox(0);
//获得五千五百文钱
SetDlgLower(10, 0, false);
//李逍遥：
//这．．．就这么一点？
ReplaceAndPause();
SetDlgUpper(62, 0, false);
//太守：
//匾额你不拿吗？
SetDlgLower(5, 0, false);
//李逍遥：
//你自个儿留着用吧！
ReplaceAndPause();
//太守：
//呵呵．．欢迎再来！

