using System;
using System.Collections;
using System.Collections.Generic;
using System.IO;
using UnityEngine;
using UnityEngine.UI;

/// <summary>
/// Step 7 验证：脚本执行器 Bootstrap。
///
/// 【核心设计决策】
/// 1. 使用 MeshFilter + MeshRenderer 在 XZ 平面上创建 Quad，而非 SpriteRenderer。
///    原因：项目使用正交相机 rotation=(90,0,0) 俯视 XZ 平面，
///    SpriteRenderer 默认在 XY 平面，俯视时看到的是边缘（厚度为 0），完全不可见。
///    参考 TileMapWalkBootstrap.CreatePlayer() 的实现方式。
///
/// 2. 使用 PAL/MapBase shader（Opaque + clip alpha），与地图瓦片渲染一致。
///
/// 3. 使用 UnityEngine.UI.Text 而非 TextMeshPro，因为 TMP 需要预生成 SDF Atlas，
///    而 UI.Text 可以直接使用系统字体动态渲染中文。
///
/// 4. FadeOverlay 初始完全透明（alpha=0），避免遮挡 Game 视图。
///    Scene 1 脚本没有 FadeIn 指令，如果初始为黑色则永远看不到画面。
/// </summary>
public class ScriptExecutorBootstrap : ScriptExecutorContext
{
    [Header("脚本数据目录")]
    public string scriptDataDir = "";

    [Header("UI 引用")]
    public GameObject dialoguePanel;
    public Text dialogueText;
    public Image fadeOverlay;

    [Header("精灵根目录")]
    public string spriteRoot = "";

    [Header("自动执行场景ID")]
    public int autoSceneId = 1;

    private PalScriptMessageParser _parser;
    private PalScriptCompiler _compiler;
    private PalScriptExecutor _executor;

    private Dictionary<int, CompiledScript> _sceneScripts = new Dictionary<int, CompiledScript>();
    private Dictionary<int, SceneJsonData> _sceneConfigs = new Dictionary<int, SceneJsonData>();

    private DialoguePosition _currentDlgPos = DialoguePosition.Center;
    private bool _waitingForInput = false;

    private Dictionary<int, Texture2D[]> _texCache = new Dictionary<int, Texture2D[]>();
    private int _currentSpriteId = -1;

    private Camera _mainCamera;
    private GameObject _playerGo;
    private MeshFilter _playerMF;
    private MeshRenderer _playerMR;
    private Material _playerMat;

    void Awake()
    {
        if (string.IsNullOrEmpty(scriptDataDir))
            scriptDataDir = Path.Combine(Application.streamingAssetsPath, "GameData", "Script");
        if (string.IsNullOrEmpty(spriteRoot))
            spriteRoot = Path.Combine(Application.dataPath, "_Game", "Textures", "Sprites");

        _mainCamera = Camera.main;

        AutoCreateUIElements();
        AutoCreatePlayer();
    }

    /// <summary>
    /// 自动创建 UI 元素：Canvas、FadeOverlay、DialoguePanel。
    /// Canvas 的 sortingOrder=200 确保在其他 UI 之上。
    /// FadeOverlay 初始 alpha=0（透明），避免遮挡画面。
    /// </summary>
    void AutoCreateUIElements()
    {
        var canvasGo = new GameObject("ScriptExecutorCanvas");
        var canvas = canvasGo.AddComponent<Canvas>();
        canvas.renderMode = RenderMode.ScreenSpaceOverlay;
        canvas.sortingOrder = 200;
        canvasGo.AddComponent<CanvasScaler>();
        canvasGo.AddComponent<GraphicRaycaster>();

        var overlayGo = new GameObject("FadeOverlay");
        overlayGo.transform.SetParent(canvas.transform, false);
        fadeOverlay = overlayGo.AddComponent<Image>();
        var rect = overlayGo.GetComponent<RectTransform>();
        rect.anchorMin = Vector2.zero;
        rect.anchorMax = Vector2.one;
        rect.sizeDelta = Vector2.zero;
        fadeOverlay.color = new Color(0, 0, 0, 0);
        fadeOverlay.raycastTarget = false;

        var panelGo = new GameObject("DialoguePanel");
        panelGo.transform.SetParent(canvas.transform, false);
        dialoguePanel = panelGo;
        dialoguePanel.SetActive(false);

        var panelRect = panelGo.AddComponent<RectTransform>();
        panelRect.anchorMin = new Vector2(0.05f, 0.03f);
        panelRect.anchorMax = new Vector2(0.95f, 0.25f);
        panelRect.sizeDelta = Vector2.zero;

        var panelImage = panelGo.AddComponent<Image>();
        panelImage.color = new Color(0.05f, 0.05f, 0.15f, 0.92f);

        var textGo = new GameObject("DialogueText");
        textGo.transform.SetParent(panelGo.transform, false);
        dialogueText = textGo.AddComponent<Text>();
        var textRect = textGo.GetComponent<RectTransform>();
        textRect.anchorMin = Vector2.zero;
        textRect.anchorMax = Vector2.one;
        textRect.offsetMin = new Vector2(16, 8);
        textRect.offsetMax = new Vector2(-16, -8);

        Font font = LoadChineseFont();
        dialogueText.font = font != null ? font : Resources.GetBuiltinResource<Font>("LegacyRuntime.ttf");
        dialogueText.fontSize = 28;
        dialogueText.alignment = TextAnchor.UpperLeft;
        dialogueText.color = Color.white;
        dialogueText.horizontalOverflow = HorizontalWrapMode.Wrap;
        dialogueText.verticalOverflow = VerticalWrapMode.Overflow;

        Debug.Log("[Step7] Created ScriptExecutorCanvas with FadeOverlay + DialoguePanel");
    }

    /// <summary>
    /// 从系统字体中加载支持中文的字体。
    /// 优先级：STHeiti > Heiti SC > PingFang SC > Songti SC > Hiragino Sans GB
    /// 使用 Font.CreateDynamicFontFromOSFont() 动态创建，无需预生成 Atlas。
    /// </summary>
    Font LoadChineseFont()
    {
        string[] names = Font.GetOSInstalledFontNames();
        string[] preferred = { "STHeiti", "Heiti SC", "Heiti", "PingFang SC", "Songti SC", "Hiragino Sans GB" };
        foreach (string pref in preferred)
        {
            foreach (string name in names)
            {
                if (name.IndexOf(pref, StringComparison.OrdinalIgnoreCase) >= 0)
                {
                    Font f = Font.CreateDynamicFontFromOSFont(name, 28);
                    if (f != null)
                    {
                        Debug.Log($"[Step7] Using system font: {name}");
                        return f;
                    }
                }
            }
        }
        Debug.LogWarning("[Step7] No Chinese system font found");
        return null;
    }

    /// <summary>
    /// 创建角色渲染对象：MeshFilter + MeshRenderer + XZ 平面 Quad。
    ///
    /// 【为什么不用 SpriteRenderer？】
    /// 项目使用正交相机 rotation=(90,0,0) 俯视 XZ 平面。
    /// SpriteRenderer 创建的精灵默认在 XY 平面（面朝 Z 轴负方向），
    /// 从正上方往下看，精灵的厚度为 0，完全不可见。
    ///
    /// 【解决方案】
    /// 手动创建 Mesh，顶点在 XZ 平面上（Y=0），面朝 Y 轴正方向（对着相机）。
    /// 顶点顺序（俯视）：
    ///   v0(-w/2, 0, h) --- v1(w/2, 0, h)
    ///   |                    |
    ///   v3(-w/2, 0, 0) --- v2(w/2, 0, 0)
    /// </summary>
    void AutoCreatePlayer()
    {
        _playerGo = new GameObject("ScriptPlayer");

        float ppu = 100f;
        float defaultW = 32f / ppu;
        float defaultH = 48f / ppu;

        var mesh = new Mesh();
        mesh.vertices = new Vector3[]
        {
            new Vector3(-defaultW / 2f, 0f, defaultH),
            new Vector3( defaultW / 2f, 0f, defaultH),
            new Vector3( defaultW / 2f, 0f, 0f),
            new Vector3(-defaultW / 2f, 0f, 0f),
        };
        mesh.uv = new Vector2[]
        {
            new Vector2(0f, 1f),
            new Vector2(1f, 1f),
            new Vector2(1f, 0f),
            new Vector2(0f, 0f),
        };
        mesh.triangles = new int[] { 0, 1, 2, 0, 2, 3 };
        mesh.RecalculateNormals();

        _playerMF = _playerGo.AddComponent<MeshFilter>();
        _playerMF.mesh = mesh;

        _playerMR = _playerGo.AddComponent<MeshRenderer>();
        _playerMat = new Material(Shader.Find("PAL/MapBase"));
        _playerMat.SetFloat("_Cutoff", 0.01f);
        _playerMR.material = _playerMat;
        _playerMR.shadowCastingMode = UnityEngine.Rendering.ShadowCastingMode.Off;
        _playerMR.receiveShadows = false;

        _playerGo.transform.position = Vector3.zero;

        Debug.Log("[Step7] Created ScriptPlayer with XZ-plane Quad + PAL/MapBase shader");
    }

    /// <summary>
    /// 根据纹理尺寸更新 Mesh 顶点，保持精灵原始比例。
    /// </summary>
    void UpdatePlayerMesh(Texture2D tex)
    {
        if (tex == null || _playerMF == null) return;

        float ppu = 100f;
        float w = tex.width / ppu;
        float h = tex.height / ppu;

        var mesh = _playerMF.mesh;
        mesh.vertices = new Vector3[]
        {
            new Vector3(-w / 2f, 0f, h),
            new Vector3( w / 2f, 0f, h),
            new Vector3( w / 2f, 0f, 0f),
            new Vector3(-w / 2f, 0f, 0f),
        };
        mesh.RecalculateBounds();

        _playerMat.mainTexture = tex;
    }

    void Start()
    {
        StartCoroutine(InitAndRun());
    }

    IEnumerator InitAndRun()
    {
        Debug.Log("[Step7] ===== 初始化脚本引擎 =====");

        string includeDir = Path.Combine(scriptDataDir, "include");
        string sceneDir = Path.Combine(scriptDataDir, "src", "Scene");

        _parser = new PalScriptMessageParser();
        _parser.LoadAll(includeDir);

        if (!_parser.IsLoaded)
        {
            Debug.LogError("[Step7] PalScriptMessageParser 加载失败");
            yield break;
        }

        Debug.Log($"[Step7] Parser: {_parser.FuncToOpcode.Count} functions, {_parser.EnumForward.Count} enums");

        _compiler = new PalScriptCompiler(_parser);
        _executor = new PalScriptExecutor(this);

        Debug.Log("[Step7] ===== 编译场景脚本 =====");

        yield return CompileAllScenes(sceneDir);

        Debug.Log($"[Step7] 编译完成: {_sceneScripts.Count} 个场景脚本");

        LoadSceneConfigs();

        Debug.Log("[Step7] ===== 执行 Scene 1 Enter 脚本 =====");

        yield return ExecuteSceneEnterScript(autoSceneId);

        Debug.Log("[Step7] ===== Step 7 验证完成 =====");
    }

    IEnumerator CompileAllScenes(string sceneDir)
    {
        if (!Directory.Exists(sceneDir))
        {
            Debug.LogError($"[Step7] Scene directory not found: {sceneDir}");
            yield break;
        }

        var tsFiles = Directory.GetFiles(sceneDir, "*.ts");
        Array.Sort(tsFiles);

        int count = 0;
        foreach (var tsFile in tsFiles)
        {
            string fileName = Path.GetFileNameWithoutExtension(tsFile);
            if (!int.TryParse(fileName, out int sceneId))
                continue;

            var compiled = _compiler.CompileFile(tsFile);
            if (compiled != null)
            {
                _sceneScripts[sceneId] = compiled;
                count++;

                if (count % 50 == 0)
                    yield return null;
            }
        }

        Debug.Log($"[Step7] Compiled {count} scene scripts");
    }

    void LoadSceneConfigs()
    {
        string sceneDataDir = Path.Combine(Application.streamingAssetsPath, "GameData", "Scene");

        foreach (var kv in _sceneScripts)
        {
            int sceneId = kv.Key;
            string sceneJsonPath = Path.Combine(sceneDataDir, $"{sceneId:D5}", "Scene.json");

            if (File.Exists(sceneJsonPath))
            {
                try
                {
                    string json = File.ReadAllText(sceneJsonPath);
                    var data = UnityEngine.JsonUtility.FromJson<SceneJsonData>(json);
                    _sceneConfigs[sceneId] = data;
                }
                catch (Exception e)
                {
                    Debug.LogWarning($"[Step7] Failed to load Scene.json for scene {sceneId}: {e.Message}");
                }
            }
        }

        Debug.Log($"[Step7] Loaded {_sceneConfigs.Count} scene configs");
    }

    IEnumerator ExecuteSceneEnterScript(int sceneId)
    {
        if (!_sceneScripts.TryGetValue(sceneId, out var compiled))
        {
            Debug.LogError($"[Step7] No compiled script for scene {sceneId}");
            yield break;
        }

        if (!_sceneConfigs.TryGetValue(sceneId, out var config))
        {
            Debug.LogError($"[Step7] No scene config for scene {sceneId}");
            yield break;
        }

        string enterLabel = config.Script?.Enter;
        if (string.IsNullOrEmpty(enterLabel))
        {
            Debug.LogWarning($"[Step7] Scene {sceneId} has no Enter script");
            yield break;
        }

        int startAddr = compiled.GetAddress(enterLabel);
        if (startAddr <= 0)
        {
            Debug.LogError($"[Step7] Label '{enterLabel}' not found in scene {sceneId}");
            yield break;
        }

        Debug.Log($"[Step7] Executing scene {sceneId} Enter script: '{enterLabel}' at address {startAddr}");

        yield return _executor.Run(compiled, startAddr);
    }

    void Update()
    {
        if (_waitingForInput && Input.anyKeyDown)
        {
            _waitingForInput = false;
            if (dialoguePanel != null)
                dialoguePanel.SetActive(false);
        }
    }

    Texture2D[] LoadSpriteTextures(int spriteId)
    {
        if (_texCache.TryGetValue(spriteId, out var cached))
            return cached;

        string dir = Path.Combine(spriteRoot, $"{spriteId:D5}");
        if (!Directory.Exists(dir))
        {
            Debug.LogWarning($"[Step7] Sprite dir not found: {dir}");
            _texCache[spriteId] = null;
            return null;
        }

        string[] files = Directory.GetFiles(dir, "*.png");
        Array.Sort(files);

        var textures = new Texture2D[files.Length];
        for (int i = 0; i < files.Length; i++)
        {
            byte[] bytes = File.ReadAllBytes(files[i]);
            var tex = new Texture2D(2, 2, TextureFormat.RGBA32, false);
            tex.LoadImage(bytes);
            tex.filterMode = FilterMode.Point;
            tex.wrapMode = TextureWrapMode.Clamp;
            textures[i] = tex;
        }

        Debug.Log($"[Step7] Loaded {textures.Length} textures for sprite {spriteId}");
        _texCache[spriteId] = textures;
        return textures;
    }

    #region ScriptExecutorContext 实现

    /// <summary>
    /// 设置队伍位置，同时移动相机跟随。
    /// 坐标转换：Grid(bx,by,bh) → Pixel → UnityWorld
    /// </summary>
    public override void SetPartyPosition(int bx, int by, int bh)
    {
        Debug.Log($"[Context] PartySetPos: bx={bx}, by={by}, bh={bh}");

        var pixelPos = PalCoordinate.GridToPixel(bx, by, bh);
        Vector3 worldPos = PalCoordinate.PixelToUnityWorld(pixelPos.x, pixelPos.y);

        if (_playerGo != null)
            _playerGo.transform.position = worldPos;

        if (_mainCamera != null)
        {
            float camY = _mainCamera.transform.position.y;
            _mainCamera.transform.position = new Vector3(worldPos.x, camY, worldPos.z);
            Debug.Log($"[Context] Camera moved to player at ({worldPos.x:F2}, {camY}, {worldPos.z:F2})");
        }
    }

    public override void SetHeroSprite(int heroId, int spriteId, bool applyNow)
    {
        Debug.Log($"[Context] HeroSetSprite: heroId={heroId}, spriteId={spriteId}, applyNow={applyNow}");

        var textures = LoadSpriteTextures(spriteId);
        if (textures != null && textures.Length > 0)
        {
            _currentSpriteId = spriteId;
            UpdatePlayerMesh(textures[0]);
            Debug.Log($"[Context] Applied sprite {spriteId} ({textures[0].width}x{textures[0].height}), frames={textures.Length}");
        }
        else
        {
            Debug.LogWarning($"[Context] Failed to load sprite {spriteId}");
        }
    }

    public override void SetRoleDirectionAndFrame(int roleId, int direction, int frameId)
    {
        Debug.Log($"[Context] RoleSetDirFrame: roleId={roleId}, direction={direction}, frameId={frameId}");

        if (_currentSpriteId < 0) return;

        var textures = LoadSpriteTextures(_currentSpriteId);
        if (textures == null) return;

        int framesPerDir = 3;
        int frameIndex = direction * framesPerDir + frameId;

        if (frameIndex >= 0 && frameIndex < textures.Length)
        {
            UpdatePlayerMesh(textures[frameIndex]);
            Debug.Log($"[Context] Set frame {frameIndex} (dir={direction}, f={frameId})");
        }
    }

    public override void SetPartyRoles(string rolesStr)
    {
        Debug.Log($"[Context] PartySetRole: '{rolesStr}'");
    }

    public override void SetEventState(int sceneId, int eventId, int stateCode)
    {
        Debug.Log($"[Context] EventSetState: scene={sceneId}, event={eventId}, state={stateCode}");
    }

    public override void SetDialoguePosition(DialoguePosition pos)
    {
        _currentDlgPos = pos;
        Debug.Log($"[Context] DialoguePosition: {pos}");
    }

    /// <summary>
    /// 显示对话文本，等待玩家按键继续。
    /// 调用 CleanDialogueText() 清除 SDLPal 控制码。
    /// </summary>
    public override IEnumerator ShowDialogue(string text)
    {
        if (dialoguePanel == null || dialogueText == null)
        {
            Debug.LogWarning($"[Context] Dialogue UI not set, skipping: \"{text}\"");
            yield break;
        }

        string cleanText = CleanDialogueText(text);

        dialoguePanel.SetActive(true);
        dialogueText.text = cleanText;

        Debug.Log($"[Context] ShowDialogue: \"{cleanText}\"");

        _waitingForInput = true;
        while (_waitingForInput)
        {
            yield return null;
        }
    }

    /// <summary>
    /// 清除 SDLPal 对话控制码：
    /// - $XX：颜色指令（如 $10 表示颜色索引 0x10）
    /// - ~XX：延迟指令（如 ~30 表示延迟 30 单位时间）
    /// 这些控制码在 Unity 中不需要，直接移除以免显示乱码。
    /// </summary>
    string CleanDialogueText(string raw)
    {
        var sb = new System.Text.StringBuilder(raw.Length);
        int i = 0;
        while (i < raw.Length)
        {
            if (raw[i] == '$' && i + 2 < raw.Length &&
                IsHexChar(raw[i + 1]) && IsHexChar(raw[i + 2]))
            {
                i += 3;
                continue;
            }

            if (raw[i] == '~' && i + 2 < raw.Length &&
                char.IsDigit(raw[i + 1]) && char.IsDigit(raw[i + 2]))
            {
                i += 3;
                continue;
            }

            sb.Append(raw[i]);
            i++;
        }
        return sb.ToString();
    }

    bool IsHexChar(char c)
    {
        return (c >= '0' && c <= '9') || (c >= 'a' && c <= 'f') || (c >= 'A' && c <= 'F');
    }

    public override IEnumerator FadeOut(int delay)
    {
        if (fadeOverlay == null) yield break;

        float duration = Mathf.Max(delay * 0.1f, 0.1f);
        float elapsed = 0f;
        Color c = fadeOverlay.color;

        while (elapsed < duration)
        {
            elapsed += Time.deltaTime;
            c.a = Mathf.Clamp01(elapsed / duration);
            fadeOverlay.color = c;
            yield return null;
        }

        c.a = 1f;
        fadeOverlay.color = c;
    }

    public override IEnumerator FadeIn(int delay)
    {
        if (fadeOverlay == null) yield break;

        float duration = Mathf.Max(delay * 0.1f, 0.1f);
        float elapsed = 0f;
        Color c = fadeOverlay.color;

        while (elapsed < duration)
        {
            elapsed += Time.deltaTime;
            c.a = 1f - Mathf.Clamp01(elapsed / duration);
            fadeOverlay.color = c;
            yield return null;
        }

        c.a = 0f;
        fadeOverlay.color = c;
    }

    public override IEnumerator EnterScene(int sceneId)
    {
        Debug.Log($"[Context] EnterScene: {sceneId}");

        yield return FadeOut(1);

        yield return ExecuteSceneEnterScript(sceneId);

        yield return FadeIn(1);
    }

    public override void VideoRestore()
    {
        Debug.Log($"[Context] VideoRestore - clear dialogue");
        if (dialoguePanel != null)
            dialoguePanel.SetActive(false);
    }

    #endregion
}

[Serializable]
public class SceneJsonData
{
    public string Name;
    public int MapId;
    public SceneScriptData Script;
}

[Serializable]
public class SceneScriptData
{
    public string Enter;
    public string Teleport;
}
