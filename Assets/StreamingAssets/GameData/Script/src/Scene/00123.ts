['Event_00123_00001_Trigger'];
SceneEnter(109);
PartySetPos(27, 69, 0);
FadeOut(0);

['Event_00123_00002_Trigger'];
SceneEnter(123);
PartySetPos(45, 33, 0);
FadeOut(0);

['Event_00123_00003_Trigger'];
SceneEnter(123);
PartySetPos(24, 33, 0);
FadeOut(0);

['Event_00123_00004_Trigger'];
PartySetPos(20, 34, 0);
Call("@8E0D", 0, 0);
SceneEnter(124);

['Scene_00123_Enter'];
RoleSetDirFrame(1, 0, 1);
VideoUpdate(0, false);
SetDlgLower(7, 0, false);
//李逍遥：
//我觉得．．刘晋元是不是
//因为你不答应嫁给他，所以
//他才病倒的？
RoleSetDirFrame(3, 0, 0);
VideoUpdate(0, false);
SetDlgUpper(22, 0, false);
//林月如：
//我．．关我什么事！？
SetDlgLower(1, 0, false);
//李逍遥：
//话不能这么说。
//我总觉得咱们亏欠他．．
VideoUpdate(0, false);
SetDlgUpper(22, 0, false);
//林月如：
//虽然晋元大哥和我是从小一块
//长大的,但是这并不代表我一
//定要对他有什么情爱，我只当
//他是亲大哥看待
VideoUpdate(0, false);
SetDlgLower(9, 0, false);
//李逍遥：
//人家可不是这么想啊！
//在苏州时，他曾当面向你爹
//请求把你许配给他呢．．
SetDlgUpper(25, 0, false);
//林月如：
//就算我爹答应又怎么样
//我跟你说，我一直当刘晋元是
//自己哥哥。信不信由你！
RoleSetDirFrame(1, 0, 0);
ReplaceAndPause();

