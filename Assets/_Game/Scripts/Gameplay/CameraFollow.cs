using UnityEngine;

/// <summary>
/// 正交摄像机跟随目标，参考 SDLPal 原版实现。
/// 摄像机俯视 XZ 平面（Euler 90,0,0），Y 轴固定不动。
/// 
/// 原版关键点：
/// 1. 视口位置 = 角色位置 + 固定偏移（使角色居中）
/// 2. sdlpal 纯格子跳时角色坐标只在逻辑帧变化，LateUpdate 每帧跟随即可（位置在多数刷新周期内不变）
/// 3. 边界限制有额外 tile 偏移（32/16 像素）
/// </summary>
public class CameraFollow : MonoBehaviour
{
    [Header("跟随目标")]
    public Transform target;

    [Header("地图边界（世界坐标 XZ 平面）")]
    public float mapMinX = -10.48f;
    public float mapMaxX = 10.48f;
    public float mapMinZ = -10.395f;
    public float mapMaxZ = 10.395f;

    [Header("额外边界偏移（原版 tile 尺寸）")]
    public float extraBorderX = 0.32f;  // 原版 32 像素 / 100 PPU
    public float extraBorderZ = 0.16f;  // 原版 16 像素 / 100 PPU

    [Header("Y 方向额外偏移（原版让角色偏上一点）")]
    public float yOffset = 0.1f;  // 原版 Ratio(10) / 100 PPU

    private Camera _cam;

    void Awake()
    {
        _cam = GetComponent<Camera>();
    }

    void LateUpdate()
    {
        UpdateCameraPosition();
    }

    void UpdateCameraPosition()
    {
        if (target == null) return;

        float halfH = _cam.orthographicSize;
        float halfW = _cam.orthographicSize * _cam.aspect;

        float clampedX = Mathf.Clamp(
            target.position.x,
            mapMinX + halfW + extraBorderX,
            mapMaxX - halfW - extraBorderX
        );
        float clampedZ = Mathf.Clamp(
            target.position.z + yOffset,
            mapMinZ + halfH + extraBorderZ,
            mapMaxZ - halfH - extraBorderZ
        );

        transform.position = new Vector3(clampedX, transform.position.y, clampedZ);
    }
}
