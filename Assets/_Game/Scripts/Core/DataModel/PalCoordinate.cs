using UnityEngine;

/// <summary>
/// 仙剑奇侠传1 坐标系统工具类。
///
/// 【坐标系概览】
/// 本项目涉及 3 套坐标系：
///   1. 原版像素坐标 (px, py)：原版2D游戏使用的坐标，所有游戏逻辑（移动、碰撞、事件位置）基于此
///   2. 网格坐标 (x, y, h)：等距菱形网格索引，用于查询 MapTileData[y, x, h]
///   3. Unity 世界坐标 (wx, Y, wz)：3D 世界空间，摄像机俯视 XZ 平面
///      - wx = px / 100（1 像素 = 0.01 Unity 单位，即 PPU=100）
///      - wz = -py / 100（像素 Y 轴向下，Unity Z 轴向上取反）
///      - Y 轴用于渲染排序（而非空间高度），通过 SortYFromWorldZ 计算
///
/// 【等距菱形网格（Isometric Diamond Grid）】
/// 这是 sdlpal 原版使用的坐标系统，不是矩形网格！
/// 每个网格单元为 32×16 像素的菱形区域，包含两个子瓦片：
///   - H=0（左上子瓦片）：无额外偏移
///   - H=1（右下子瓦片）：偏移 (+16, +8) 像素
///
/// 【PixelToGrid 算法 —— 来自 sdlpal 的菱形区域判定】
/// 直接使用整数除法 (px/32, py/16) 只能得到矩形网格坐标，
/// 但实际地图使用菱形网格，需要通过余数 (xr, yr) 判断像素点落在菱形的哪个区域。
///
/// 菱形判定条件（来自 SDLPal-CS 源码）：
///   xr = px % 32;  yr = py % 16;
///   if (xr + yr*2 >= 16):      // 不在左上三角区域
///     if (xr + yr*2 >= 48):    x++, y++（右下区域）
///     elif (32-xr + yr*2 < 16): x++（右侧区域）
///     elif (32-xr + yr*2 < 48): h=1（中心区域，属于H=1子瓦片）
///     else:                      y++（下方区域）
///
/// 【Bug 修复历史】
/// 早期版本使用简单的矩形坐标转换（直接除法），导致碰撞检测严重错位（穿墙/穿物体）。
/// 改用 sdlpal 的菱形区域算法后碰撞才正确。
///
/// 【方向与移动】
/// sdlpal 使用4方向移动，每帧固定步长：
///   South(0): (-16, +8)  屏幕左下  键盘 S
///   West(1):  (-16, -8)  屏幕左上  键盘 A
///   North(2): (+16, -8)  屏幕右上  键盘 W
///   East(3):  (+16, +8)  屏幕右下  键盘 D
///
/// 【Bug 修复历史 —— 方向移动】
/// 早期版本 Y 分量符号写反（如 South 写成 -8 应为 +8），
/// 导致按 D 键角色却向 W 方向移动。对照 SDLPal-CS 源码修正后解决。
/// </summary>
public static class PalCoordinate
{
    /// <summary>像素到 Unity 世界坐标的比例（1像素 = 0.01 Unity单位，PPU=100）</summary>
    public const float PIXEL_TO_UNIT = 0.01f;

    /// <summary>
    /// 网格坐标 → 像素坐标。
    /// 公式: px = x*32 + h*16, py = y*16 + h*8
    /// </summary>
    public static Vector2Int GridToPixel(int x, int y, int h)
    {
        return new Vector2Int(x * 32 + h * 16, y * 16 + h * 8);
    }

    /// <summary>
    /// 像素坐标 → 网格坐标（使用 sdlpal 菱形区域判定算法）。
    /// 不能简单地用 px/32, py/16，必须通过余数判断菱形子区域。
    /// </summary>
    public static void PixelToGrid(int px, int py, out int x, out int y, out int h)
    {
        x = px / 32;
        y = py / 16;
        h = 0;

        int xr = px % 32;
        int yr = py % 16;

        if (xr + yr * 2 >= 16)
        {
            if (xr + yr * 2 >= 48)
            {
                x++;
                y++;
            }
            else if (32 - xr + yr * 2 < 16)
            {
                x++;
            }
            else if (32 - xr + yr * 2 < 48)
            {
                h = 1;
            }
            else
            {
                y++;
            }
        }
    }

    /// <summary>
    /// 像素坐标 → Unity 世界坐标（仅 XZ 平面，Y=0）。
    /// wx = px * 0.01, wz = -py * 0.01（Y轴反转）
    /// </summary>
    public static Vector3 PixelToUnityWorld(int px, int py)
    {
        return new Vector3(px * PIXEL_TO_UNIT, 0f, -py * PIXEL_TO_UNIT);
    }

    /// <summary>
    /// Unity 世界坐标 → 像素坐标（XZ 平面反算）。
    /// </summary>
    public static Vector2Int UnityWorldToPixel(Vector3 worldPos)
    {
        return new Vector2Int(
            Mathf.RoundToInt(worldPos.x / PIXEL_TO_UNIT),
            Mathf.RoundToInt(-worldPos.z / PIXEL_TO_UNIT)
        );
    }

    /// <summary>
    /// 4方向每帧移动的像素偏移量（与 SDLPal-CS 一致）。
    /// 注意 Y 分量的符号：像素坐标 Y 轴向下为正。
    /// </summary>
    public static readonly Vector2Int[] DirectionMovePixels = new Vector2Int[]
    {
        new Vector2Int(-16,  8),  // South(0): 左下
        new Vector2Int(-16, -8),  // West(1):  左上
        new Vector2Int( 16, -8),  // North(2): 右上
        new Vector2Int( 16,  8),  // East(3):  右下
    };
}
