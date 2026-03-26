['Event_00100_00001_Trigger'];
SceneEnter(85);
PartySetPos(20, 28, 1);
FadeOut(0);

['Event_00100_00002_Trigger'];
SceneEnter(85);
PartySetPos(23, 30, 1);
FadeOut(0);

['Event_00100_00003_Trigger'];
//居民：
//为什么随便闯进我家
ReplaceAndPause();
//居民：
//不要乱来喔！还不赶快出去。

['Event_00100_00004_Trigger'];
SetDlgLower(0, 0, false);
//父：
//素兰，你都二十多岁了
//还不赶紧找户人家嫁了。
VideoUpdate(0, false);
//女：
//人家还不想离开您的身边嘛！

['Event_00100_00006_Trigger'];
//小孩：
//你不会是江洋大盗吧？
ReplaceAndPause();
//小孩：
//看你的样子也不像。

