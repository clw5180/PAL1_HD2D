using UnityEngine;
using TMPro;

/// <summary>
/// 简易对话框 UI（开发测试用）。
/// 按空格键切换显示/隐藏，目前仅用于验证 UI 系统可用性。
/// 后续将替换为完整的对话系统（支持多段文本、选项、立绘等）。
/// </summary>
public class SimpleDialogueUI : MonoBehaviour
{
    public GameObject dialoguePanel;
    public TMP_Text dialogueText;

    void Update()
    {
        if (Input.GetKeyDown(KeyCode.Space))
        {
            if (dialoguePanel.activeSelf)
                Hide();
            else
                Show("李大婶：逍遥，快起床了！");
        }
    }

    public void Show(string text)
    {
        dialoguePanel.SetActive(true);
        if (dialogueText != null)
            dialogueText.text = text;
    }

    public void Hide()
    {
        dialoguePanel.SetActive(false);
    }
}
