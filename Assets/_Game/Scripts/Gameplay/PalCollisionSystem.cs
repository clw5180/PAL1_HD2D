using System.Collections.Generic;
using UnityEngine;

/// <summary>
/// 仙剑奇侠传1 碰撞检测系统。
///
/// 【碰撞逻辑（移植自 SDLPal-CS Scene.cs CheckObstacle）】
/// 1. 边界检查：超出地图范围 (128×64 网格) 视为阻挡
/// 2. 地图瓦片碰撞：通过 PalCoordinate.PixelToGrid 将像素坐标转为网格坐标 (x, y, h)，
///    查询 MapTileData.IsBlocked 标记（编码在 Tile DWORD 的 bit 13）
/// 3. 事件对象碰撞：遍历当前场景的事件对象，使用菱形距离判定
///
/// 【菱形距离碰撞判定】
/// |evt.X - px| + |evt.Y - py| * 2 &lt; 16
/// 这是 sdlpal 原版的碰撞公式，形成一个菱形碰撞区域而非矩形。
/// 与等距菱形瓦片的形状一致。
///
/// 【PixelToGrid 与菱形区域判定】
/// 直接用整数除法 (px/32, py/16) 只能得到矩形网格坐标，
/// 但地图使用菱形网格，需要通过余数 (xr, yr) 判断像素点落在菱形的哪个子区域。
/// 详见 PalCoordinate.PixelToGrid 的注释。
/// 早期使用简单除法时出现"碰撞体延迟一格"的 Bug。
///
/// 【使用方式】
/// 场景加载完成后调用 Init() 注入地图和事件数据。
/// 角色控制器在移动前调用 CheckObstacle() 判断目标位置是否可通行。
/// 角色、NPC 的碰撞检测均通过此系统统一处理。
/// </summary>
public class PalCollisionSystem
{
    private MapDataLoader _mapLoader;
    private MapTileData[,,] _tiles;
    private List<EventObjectData> _events;

    public void Init(MapDataLoader mapLoader, MapTileData[,,] tiles, List<EventObjectData> events)
    {
        _mapLoader = mapLoader;
        _tiles = tiles;
        _events = events;
    }

    public bool IsReady => _tiles != null && _mapLoader != null;

    public bool CheckObstacle(int px, int py)
    {
        if (px < 0 || px > MapDataLoader.TileCountX * 32 ||
            py < 0 || py > MapDataLoader.TileCountY * 16)
            return true;

        PalCoordinate.PixelToGrid(px, py, out int x, out int y, out int h);

        if (_mapLoader.IsTileBlocked(_tiles, x, y, h))
            return true;

        if (_events != null)
        {
            foreach (var evt in _events)
            {
                if (!evt.IsBlocking) continue;
                if (Mathf.Abs(evt.X - px) + Mathf.Abs(evt.Y - py) * 2 < 16)
                    return true;
            }
        }

        return false;
    }
}
