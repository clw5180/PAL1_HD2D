['Event_00120_00001_Trigger'];
Call("@8E3B", 0, 0);
SceneEnter(119);
PartySetPos(31, 25, 0);
FadeOut(0);

['Event_00120_00002_Trigger'];
SetDlgCenter(0, false);
//刘晋元睡着了．．

['Event_00120_00003_Trigger'];
//婢女阿香：
//不知怎么搞的
//少爷突然又陷入昏睡

['Event_00120_00004_Trigger'];
//婢女阿萍：
//夫人吩咐．．
//不许任何人打扰少爷

['Event_00120_00007_Trigger'];
//刘夫人：
//唉．．　怎么办．．
//这孩子究竟出了什么事

['Event_00120_00013_Trigger'];
EventSetTriggerMode(-1, -1, false, 2);
SetDlgCenter(0, false);
//床上躺著尚书夫人
//而刘晋元却不见了．．
ReplaceAndPause();
SetDlgLower(0, 0, false);
//林月如：
//云姨～　云姨～！
ReplaceAndPause();
SetDlgLower(1, 0, false);
//李逍遥：
//没用的．．她们一定是中了
//什么法术，怎么叫也叫不醒
VideoUpdate(0, false);
SetDlgLower(24, 0, false);
//林月如：
//怎么办．．
//李大哥～你可有办法？
VideoUpdate(0, false);
SetDlgLower(9, 0, false);
//李逍遥：
//若继续待在这屋内，恐怕
//连我们也会有危险．．
VideoRestore();
//我们先到外面，看看是否
//能请人来帮忙
ReplaceAndPauseWithNop("Event_00109_00013_Trigger", 0);

['Event_00120_00014_Trigger'];
Call("@8E99", 0, 0);
SetDlgBox(0);
//得到檀香、蜡烛
AddItem(23, 0);
AddItem(21, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

['Event_00120_00015_Trigger'];
Call("@8E99", 0, 0);
SetDlgBox(0);
//得到符纸
AddItem(22, 0);
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

['Event_00120_00016_Trigger'];
Call("@8E99", 0, 0);
SetDlgBox(0);
//得到三千文钱
CashModify(3000, "");
ReplaceAndPauseWithNop("Event_00185_00003_Trigger", 0);

