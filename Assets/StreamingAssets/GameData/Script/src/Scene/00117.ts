['Event_00117_00001_Trigger'];
SceneEnter(109);
PartySetPos(19, 116, 0);
FadeOut(0);

['Event_00117_00002_Trigger'];
SceneEnter(116);
PartySetPos(8, 48, 0);
FadeOut(0);

['Event_00117_00003_Trigger'];
//婢　女：
//夫人特别吩咐
//院子里里外外都要扫干净
ReplaceAndPause();
//婢　女：
//夫人和少夫人都很爱干净
//地上连一片落叶都不能留
ReplaceAndPauseWithNop("Event_00117_00003_Trigger", 0);

