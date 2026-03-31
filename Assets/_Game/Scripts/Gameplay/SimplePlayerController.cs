using UnityEngine;

/// <summary>
/// 仙剑1 等距地图角色控制器
/// 对齐 sdlpal 场景区主循环：game.h FPS=10、每帧最多一格（±16/±8 像素）、无插值纯格子跳。
/// 对应关系：PAL_GameMain 循环 → DelayUntil + FRAME_TIME → PAL_StartFrame → PAL_UpdateParty。
/// 
/// 方向约定（来自 PalDirection）:
///   South=0 西南（左下）帧 0-2   键盘: S (screen: 左下)
///   West =1 西北（左上）帧 3-5   键盘: A (screen: 左上)
///   North=2 东北（右上）帧 6-8   键盘: W (screen: 右上)
///   East =3 东南（右下）帧 9-11  键盘: D (screen: 右下)
///
/// 坐标系统说明：
///   - Tile 图片尺寸: 32×15 像素（菱形瓦片，上下尖角各占 1px 用于拼接）
///   - 网格单元尺寸: 32×16 像素（每个网格包含 H=0 和 H=1 两个瓦片）
///   - H=0: 左上瓦片，像素偏移 (0, 0)
///   - H=1: 右下瓦片，像素偏移 (16, 8)，相对 H=0 偏移半格
///   - 移动步长: 每帧 X 方向 ±16 像素，Y 方向 ±8 像素
///   - 原版使用像素坐标直接存储，不使用网格坐标转换
/// </summary>
public class SimplePlayerController : MonoBehaviour
{
    /// <summary>与 sdlpal/game.h 中 FPS 一致。</summary>
    public const float SdlpalSceneFps = 10f;

    [Header("精灵帧数组（12帧：4方向×3帧/方向）")]
    public Sprite[] walkFrames;

    [Header("每方向帧数（原版旧版形象=3，新仙剑形象=9）")]
    public int framesPerDirection = 3;

    [Header("移动速度（像素/帧，原版=16）")]
    public float movePixelsPerFrame = 16f;

    [Header("像素转世界单位比例（PPU）")]
    public float pixelsPerUnit = 100f;

    private SpriteRenderer _sr;
    private int _frameIndex;
    private int _direction;
    private int _walkCount;
    private float _accumulatedTime;

    float FrameTime => 1f / SdlpalSceneFps;

    // isometric 地图中 4 个方向对应的世界移动向量
    // 摄像机俯视：屏幕上=+Z，屏幕下=-Z，屏幕右=+X，屏幕左=-X
    // South(0)=左下(-X,-Z), West(1)=左上(-X,+Z), North(2)=右上(+X,+Z), East(3)=右下(+X,-Z)
    static readonly Vector3[] DirMove = new Vector3[]
    {
        new Vector3(-16f, 0f, -8f),  // South(0): 屏幕左下
        new Vector3(-16f, 0f,  8f),  // West(1):  屏幕左上
        new Vector3( 16f, 0f,  8f),  // North(2): 屏幕右上
        new Vector3( 16f, 0f, -8f),  // East(3):  屏幕右下
    };

    void Awake()
    {
        _sr = GetComponent<SpriteRenderer>();
        if (_sr == null)
            _sr = gameObject.AddComponent<SpriteRenderer>();

        var follow = Camera.main != null ? Camera.main.GetComponent<CameraFollow>() : null;
        if (follow != null && follow.target == null)
            follow.target = transform;
    }

    /// <summary>
    /// 与 MapRenderer / MapTestScene 一致：用世界 Z 映射排序 Y，使 Mesh 地图与角色共用 PAL 深度空间。
    /// </summary>
    void LateUpdate()
    {
        float z = transform.position.z;
        float sortY = MapRenderer.SortYFromWorldZ(z);
        var p = transform.position;
        if (Mathf.Abs(p.y - sortY) > 1e-6f)
            transform.position = new Vector3(p.x, sortY, p.z);
    }

    /// <summary>
    /// 每帧更新一次，帧率10fps
    /// 定位到问题：10Hz 逻辑下每 100ms 才改一次 transform.position，而显示器仍以 60fps+ 刷新，会产生明显阶梯感。
    /// 解决办法：在 Update 中每帧累加时间，当累计时间大于 100ms 时，执行一次 GameFrame 逻辑。
    /// </summary>
    void Update()
    {
        _accumulatedTime += Time.deltaTime;

        // 与 sdlpal 一致：每轮主循环只跑一帧逻辑（避免同一渲染帧内连跳多格），无位置插值，摄像机与逻辑帧同步更新。
        if (_accumulatedTime >= FrameTime)
        {
            _accumulatedTime -= FrameTime;
            GameFrame();
        }
    }

    /// <summary>
    /// 等价于 PAL_StartFrame 内对队伍的一次更新（走路 + 姿态 + 贴图）。
    /// 游戏帧逻辑：每100ms执行一次，帧率10fps
    /// </summary>
    void GameFrame()
    {
        float h = Input.GetAxisRaw("Horizontal");
        float v = Input.GetAxisRaw("Vertical");

        bool isWalking = h != 0f || v != 0f;

        if (isWalking)
        {
            _direction = InputToDirection(h, v);

            Vector3 pixelMove = DirMove[_direction] * movePixelsPerFrame / 16f;
            Vector3 worldMove = pixelMove / pixelsPerUnit;
            transform.position += worldMove;
        }

        UpdateCharacterGestures(isWalking);
        UpdateSprite();
    }

    /// <summary>
    /// 更新角色的行走姿态（参考 SDLPal Scene.cs UpdateCharacterGestures）
    /// </summary>
    void UpdateCharacterGestures(bool isWalking)
    {
        if (isWalking)
        {
            if (framesPerDirection == 9)
            {
                if (_walkCount == 0)
                    _walkCount = (Random.value > 0.5f) ? 1 : 5;
                else
                    _walkCount++;

                _frameIndex = _walkCount % 10;

                if (_frameIndex == 5 && _walkCount > 5) _frameIndex = 0;
                else if (_frameIndex > 5) _frameIndex--;
            }
            else if (framesPerDirection == 3)
            {
                if (_walkCount == 0)
                    _walkCount = (Random.value > 0.5f) ? 1 : 3;
                else
                    _walkCount++;

                _frameIndex = _walkCount % 4;

                if (_frameIndex == 2) _frameIndex = 0;
                if (_frameIndex == 3) _frameIndex = 2;
            }
            else if (framesPerDirection > 0)
            {
                _frameIndex++;
                _frameIndex %= framesPerDirection;
            }
        }
        else
        {
            _walkCount = 0;
            _frameIndex = 0;
        }
    }

    /// <summary>
    /// 将键盘输入映射到仙剑方向索引
    /// h=-1(A/左), h=+1(D/右); v=-1(S/下), v=+1(W/上)
    /// 等距屏幕方向：W=右上(North2), S=左下(South0), A=左上(West1), D=右下(East3)
    /// </summary>
    static int InputToDirection(float h, float v)
    {
        if (h <= -0.5f && v >= 0.5f)  return 1; // A+W → West（左上）
        if (h >= 0.5f  && v >= 0.5f)  return 2; // D+W → North（右上）
        if (h >= 0.5f  && v <= -0.5f) return 3; // D+S → East（右下）
        if (h <= -0.5f && v <= -0.5f) return 0; // A+S → South（左下）
        if (h <= -0.5f)  return 1; // 纯A → West（左上）
        if (h >= 0.5f)   return 3; // 纯D → East（右下）
        if (v >= 0.5f)   return 2; // 纯W → North（右上）
        return 0;                    // 纯S → South（左下）
    }

    void UpdateSprite()
    {
        if (walkFrames == null || walkFrames.Length < framesPerDirection * 4) return;
        int idx = _direction * framesPerDirection + _frameIndex;
        if (idx >= 0 && idx < walkFrames.Length)
            _sr.sprite = walkFrames[idx];
    }
}
