['Event_00229_00001_Trigger'];
SceneEnter(230);
PartySetPos(10, 108, 1);
FadeOut(0);

['Event_00229_00002_Trigger'];
SceneEnter(215);
PartySetPos(23, 11, 1);
FadeOut(0);

['Scene_00229_Enter'];
Dos_SetBattlefield(FbpDos.木道人);
SetBattleMusic(Music.战意昂_副本);
MusicPlay(Music.救黎民, false, false);

['Event_00229_00014_Trigger'];
BattleStart(316, "@A073", "");
EventSetStateSequence(229, 14, 15, 0);
EventSetStateSequence(229, 32, 33, 2);

['Event_00229_00018_Trigger'];
BattleStart(318, "@A073", "");
EventSetStateSequence(229, 18, 19, 0);
EventSetStateSequence(229, 34, 35, 2);

['Event_00229_00020_Trigger'];
BattleStart(319, "@A073", "");
EventSetStateSequence(229, 20, 21, 0);
EventSetStateSequence(229, 36, 37, 2);

['Event_00229_00026_Trigger'];
BattleStart(319, "@A073", "");
EventSetStateSequence(229, 26, 27, 0);
EventSetStateSequence(229, 38, 39, 2);

['Event_00229_00028_Trigger'];
BattleStart(318, "@A073", "");
EventSetStateSequence(229, 28, 29, 0);
EventSetStateSequence(229, 40, 41, 2);

['Event_00229_00012_Trigger'];
BattleStart(239, "@A073", "");
EventSetStateSequence(229, 12, 13, 0);
EventSetStateSequence(229, 30, 31, 2);

['Event_00229_00003_Trigger'];
SetDlgCenter(0, false);
//一具阵亡士兵的尸体

['Event_00229_00030_Trigger'];
//白苗士兵：
//黑苗兵不知从哪突然冒出来的
//大理城内外到处一片混乱
//各部队之间都失去连络了

['Event_00229_00038_Trigger'];
//白苗士兵：
//黑苗族利用魔兽兵袭击
//盖将军护卫着族长及老弱平民
//撤退到神殿内

['Event_00229_00032_Trigger'];
//白苗士兵

['Event_00229_00016_Auto'];
NpcSetFrame(0);
GotoWithProbability(55, "");
NpcSetFrame(2);
NpcSetFrame(1);
ReplaceAndPause();
NpcSetFrame(2);
WaitEventAutoScriptRun(2, false, false);
NpcSetFrame(1);
WaitEventAutoScriptRun(2, false, false);
NpcSetFrame(0);
GotoWithProbability(55, "");
NpcSetFrame(3);
ReplaceAndPauseWithNop("Event_00229_00016_Auto", 0);

['Event_00229_00012_Auto'];
NpcSetFrame(0);
ReplaceAndPause();
NpcSetFrame(1);
ReplaceAndPause();
GotoWithProbability(50, "Event_00229_00012_Auto");
['@8F74'];
NpcSetFrame(0);
ReplaceAndPause();
NpcSetFrame(2);
ReplaceAndPause();
GotoWithProbability(50, "Event_00229_00012_Auto");
GotoWithNop("@8F74", 0);

['Event_00229_00044_Auto'];
GotoWithProbability(33, "");
GotoWithProbability(60, "@976A");
GotoWithProbability(55, "@976C");
GotoWithProbability(50, "@976E");
GotoWithProbability(50, "@9770");
ReplaceAndPauseWithNop("Event_00229_00044_Auto", 0);
['@976A'];
PlaySound(18);
ReplaceAndPauseWithNop("Event_00229_00044_Auto", 0);
['@976C'];
PlaySound(17);
ReplaceAndPauseWithNop("Event_00229_00044_Auto", 0);
['@976E'];
PlaySound(16);
ReplaceAndPauseWithNop("Event_00229_00044_Auto", 0);
['@9770'];
PlaySound(15);
ReplaceAndPauseWithNop("Event_00229_00044_Auto", 0);

SetDlgBox(0);
//这项物品此人不能装备

SetDlgBox(0);
//这玩意可不能随便丢掉

SetDlgBox(0);
//这项物品此人无法使用

['Event_00229_00042_Auto'];
NpcChase(12, 0, false);
GotoWithNop("Event_00041_00003_Auto", 0);

