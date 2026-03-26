['Event_00155_00001_Trigger'];
SceneEnter(149);
PartySetPos(11, 37, 1);
FadeOut(0);

['Event_00155_00002_Trigger'];
SceneEnter(157);
PartySetPos(10, 107, 0);
FadeOut(0);

['Scene_00155_Enter'];
PartySetPos(45, 86, 1);
ReplaceAndPause();

['Event_00155_00006_Trigger'];
EventSetTriggerScript(155, 4, "@5D13");
SetDlgLower(5, 0, false);
//李逍遥：
//这位妖怪仁兄，不想打架
//的话，就请让路吧！
VideoUpdate(0, false);
//沉思鬼：
//我是很想走开呀
//可是．．我有很大的困难．．
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//困难？　什么困难说来听听
//也许我可以帮你一把
VideoUpdate(0, false);
//沉思鬼：
//你～真的要帮我．．？
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//只要你让路，说出来我就帮你
VideoUpdate(0, false);
//沉思鬼：
//太好了～请你们告诉我
//我应该先踏出左脚．．
//还是先踏出右脚呢？
VideoUpdate(0, false);
SetDlgLower(10, 0, false);
//李逍遥：
//这．．．？
//先踏哪只脚不都一样！
VideoUpdate(0, false);
//沉思鬼：
//不对～不对！
//左脚是左脚，右脚是右脚
//二者怎么会一样
VideoUpdate(0, false);
SetDlgLower(5, 0, false);
//李逍遥：
//那就随便啦，你习惯哪只脚
//就是那只脚不就好了，拜托
//你快让路吧！
VideoUpdate(0, false);
//沉思鬼：
//怎么可以随便呢！
//我在这里想了五百年了
//一直参不透这道理呢
VideoUpdate(0, false);
SetDlgLower(7, 0, false);
//李逍遥：
//那．．左脚吧
VideoUpdate(0, false);
//沉思鬼：
//左脚．．为何不是右脚呢？
//先踏右脚也是走的到，为什么
//走路要先出左脚而不出右脚呢
VideoUpdate(0, false);
SetDlgLower(22, 0, false);
//林月如：
//你很烦呢！
//不是左脚那就右脚吧
VideoUpdate(0, false);
//沉思鬼：
//右脚？右脚是我的脚，左脚也
//是我的脚呀！为什么二只脚要
//有左右先后之分呢？为什么？
WaitEventAutoScriptRun(0, false, false);
SetDlgLower(23, 0, false);
//林月如：
//这．．．你．．
//你再不走开我就砍你！
NpcSetDirFrame(1, 0);
VideoUpdate(0, false);
//沉思鬼：
//　砍我？　我没有砍你
//你又为何要砍我呢？
//　你知道这问题的答案吗？
WaitEventAutoScriptRun(2, false, true);
SetDlgLower(23, 0, false);
//林月如：
//　　你．．！！
VideoUpdate(0, false);
RoleSetDirFrame(1, 0, 0);
SetDlgLower(8, 0, false);
//李逍遥：
//月如～算了！
//这种蠢问题应该难不倒我们的
//何况我们答应帮助人家在先
ReplaceAndPause();
//沉思鬼：
//你知道这问题的答案吗？

['Event_00155_00004_Trigger'];
NpcSetFrame(1);
FadeToScene(0, -1);
SetDlgLower(69, 0, false);
//书中仙：
//走开～走开
//俺在看书，别吵！
NpcSetFrame(0);
ReplaceAndPause();
NpcSetFrame(1);
VideoUpdate(0, false);
SetDlgLower(69, 0, false);
//书中仙：
//走开！俺在看书的时候
//不喜欢旁人打扰
NpcSetFrame(0);
ReplaceAndPause();
SetDlgCenter(0, false);
//"书简中的妖怪不理睬你"

['Event_00155_00024_Trigger'];
Call("@8E99", 0, 0);
SetDlgBox(0);
//获得凤鸣刀
AddItem(120, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

Call("@8E99", 0, 0);
SetDlgBox(0);
//获得龙泉剑
AddItem(124, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

Call("@8E99", 0, 0);
SetDlgBox(0);
//获得青蛇杖
AddItem(132, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

['Event_00155_00023_Trigger'];
Call("@8E99", 0, 0);
SetDlgBox(0);
//获得蟠果
AddItem(42, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

