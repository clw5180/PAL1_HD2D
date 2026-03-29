using UnityEngine;
using TMPro;

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
