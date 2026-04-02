using UnityEngine;

/// <summary>
/// 仙剑奇侠传1 等距地图角色控制器。
///
/// 对齐 sdlpal 场景区主循环：game.h FPS=10、每帧最多一格（±16/±8 像素）、无插值纯格子跳。
/// 对应关系：PAL_GameMain 循环 → DelayUntil + FRAME_TIME → PAL_StartFrame → PAL_UpdateParty。
///
/// 【职责】
/// 处理键盘输入、移动意图、碰撞判断、行走姿态状态机。
/// 渲染委托给 PalSpriteRenderer，碰撞检测委托给 PalCollisionSystem。
///
/// 【方向约定（来自 PalDirection）】
///   South=0 西南（左下）帧 0-2   键盘: S (screen: 左下)
///   West =1 西北（左上）帧 3-5   键盘: A (screen: 左上)
///   North=2 东北（右上）帧 6-8   键盘: W (screen: 右上)
///   East =3 东南（右下）帧 9-11  键盘: D (screen: 右下)
///
/// 【坐标系统说明】
///   - Tile 图片尺寸: 32×15 像素（菱形瓦片，上下尖角各占 1px 用于拼接）
///   - 网格单元尺寸: 32×16 像素（每个网格包含 H=0 和 H=1 两个瓦片）
///   - H=0: 左上瓦片，像素偏移 (0, 0)
///   - H=1: 右下瓦片，像素偏移 (16, 8)，相对 H=0 偏移半格
///   - 移动步长: 每帧 X 方向 ±16 像素，Y 方向 ±8 像素
///   - 原版使用像素坐标直接存储，不使用网格坐标转换
///
/// 【渲染排序】
/// 角色不直接按脚底线阈值排序，而是对齐 scene.c 中加入绘制列表时的 pos.y。
/// 当前测试场景未实现原版 wLayer，暂按 playerPy + sortPixelOffset 排序。
/// </summary>
public class SimplePlayerController : MonoBehaviour
{
    public const float SdlpalSceneFps = 10f;

    [Header("渲染：角色排序像素偏移")]
    [Tooltip("对齐 scene.c：pos.y = party.y + wLayer + 10。当前尚未实现 wLayer，默认 +10。")]
    [SerializeField] private float sortPixelOffset = 10f;

    private PalSpriteRenderer _spriteRenderer;
    private PalCollisionSystem _collision;

    private int _playerPx;
    private int _playerPy;
    private int _direction;
    private int _frameIndex;
    private int _walkCount;
    private float _accTime;
    private const float FrameTime = 1f / 10f;

    public int PlayerPx => _playerPx;
    public int PlayerPy => _playerPy;
    public int Direction => _direction;

    public void Init(int startPx, int startPy, PalSpriteRenderer spriteRenderer, PalCollisionSystem collision)
    {
        _playerPx = startPx;
        _playerPy = startPy;
        _spriteRenderer = spriteRenderer;
        _collision = collision;
        SyncWorldPos();
    }

    void Update()
    {
        if (_spriteRenderer == null) return;

        _accTime += Time.deltaTime;
        if (_accTime >= FrameTime)
        {
            _accTime -= FrameTime;
            GameFrame();
        }
    }

    /// <summary>
    /// 等价于 PAL_StartFrame 内对队伍的一次更新（走路 + 碰撞 + 姿态 + 贴图）。
    /// 10fps 逻辑帧：每轮主循环只跑一帧，避免同一渲染帧内连跳多格。
    /// </summary>
    void GameFrame()
    {
        float h = Input.GetAxisRaw("Horizontal");
        float v = Input.GetAxisRaw("Vertical");
        bool isWalking = h != 0f || v != 0f;

        if (isWalking)
        {
            int dir = InputToDirection(h, v);
            _direction = dir;

            int targetPx = _playerPx + PalCoordinate.DirectionMovePixels[dir].x;
            int targetPy = _playerPy + PalCoordinate.DirectionMovePixels[dir].y;

            if (_collision == null || !_collision.CheckObstacle(targetPx, targetPy))
            {
                _playerPx = targetPx;
                _playerPy = targetPy;
                SyncWorldPos();
            }
        }

        UpdateGestures(isWalking);

        if (_spriteRenderer != null)
            _spriteRenderer.SetFrame(_direction, _frameIndex);
    }

    void SyncWorldPos()
    {
        float wx = _playerPx / MapRenderer.Ppu;
        float wz = -_playerPy / MapRenderer.Ppu;
        float sortY = MapRenderer.SortYFromPlayerPixelY(_playerPy, sortPixelOffset);
        transform.position = new Vector3(wx, sortY, wz);
    }

    /// <summary>
    /// 更新角色行走姿态（参考 SDLPal Scene.cs 的 UpdateCharacterGestures）。
    /// 3帧模式（旧版形象）: walkCount % 4 → 映射为帧索引 [0, 1, 0, 2]
    /// 实现左脚-站立-右脚-站立的循环动画。
    /// 9帧模式（新仙剑形象）: walkCount % 10 的映射。
    /// </summary>
    void UpdateGestures(bool isWalking)
    {
        int framesPerDir = _spriteRenderer != null ? _spriteRenderer.FramesPerDirection : 3;

        if (isWalking)
        {
            if (framesPerDir == 9)
            {
                if (_walkCount == 0)
                    _walkCount = (Random.value > 0.5f) ? 1 : 5;
                else
                    _walkCount++;

                _frameIndex = _walkCount % 10;
                if (_frameIndex == 5 && _walkCount > 5) _frameIndex = 0;
                else if (_frameIndex > 5) _frameIndex--;
            }
            else if (framesPerDir == 3)
            {
                if (_walkCount == 0)
                    _walkCount = (Random.value > 0.5f) ? 1 : 3;
                else
                    _walkCount++;

                _frameIndex = _walkCount % 4;
                if (_frameIndex == 2) _frameIndex = 0;
                if (_frameIndex == 3) _frameIndex = 2;
            }
            else if (framesPerDir > 0)
            {
                _frameIndex++;
                _frameIndex %= framesPerDir;
            }
        }
        else
        {
            _walkCount = 0;
            _frameIndex = 0;
        }
    }

    /// <summary>
    /// 将键盘输入映射到仙剑方向索引。
    /// 等距视角下键盘映射:
    ///   A+W → West(1) 左上    D+W → North(2) 右上
    ///   A+S → South(0) 左下   D+S → East(3) 右下
    ///   纯A → West(1)  纯D → East(3)  纯W → North(2)  纯S → South(0)
    /// </summary>
    static int InputToDirection(float h, float v)
    {
        if (h <= -0.5f && v >= 0.5f) return 1;
        if (h >= 0.5f && v >= 0.5f) return 2;
        if (h >= 0.5f && v <= -0.5f) return 3;
        if (h <= -0.5f && v <= -0.5f) return 0;
        if (h <= -0.5f) return 1;
        if (h >= 0.5f) return 3;
        if (v >= 0.5f) return 2;
        return 0;
    }
}
