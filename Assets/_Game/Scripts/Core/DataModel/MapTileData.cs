/// <summary>
/// 仙剑奇侠传1 地图瓦片数据结构。
///
/// 【数据格式】
/// 原版地图文件为二进制格式: DWORD Tiles[128][64][2]
///   - 128 行(Y) × 64 列(X) × 2 层(H)，每个瓦片占 4 字节（DWORD）
///   - 总大小 = 128 × 64 × 2 × 4 = 65536 字节
///   - 注意：palmod 导出的地图文件会将 tile 数据写两遍（131072 字节），所以加载时用 >= 而不是 ==
///
/// 【DWORD 位编码】
///   Bit[ 0.. 7] + Bit[12] = BottomSpriteId（底层瓦片精灵ID，9-bit）
///   Bit[ 8..11]            = BottomHeight（底层逻辑高度；>0 时参与 PAL 遮挡，与 TopHeight 一样用 (y+h)*16 公式）
///   Bit[13]                = IsBlocked（碰撞标记，1=不可通行）
///   Bit[16..23] + Bit[28]  = TopSpriteId（顶层瓦片精灵ID，9-bit，存储值需 -1）
///   Bit[24..27]            = TopHeight（顶层高度，用于遮挡排序）
///
/// 【瓦片坐标系】
///   - 等距菱形网格（isometric diamond grid），非矩形网格
///   - 每个网格单元 32×16 像素，包含 H=0（左上）和 H=1（右下，偏移半格 +16px,+8px）
///   - Tile 图片实际尺寸: 32×15 像素（菱形瓦片上下尖角各占1px用于拼接）
///
/// 【TopHeight 的用途】
///   TopHeight > 0 表示该顶层瓦片是建筑/家具等需要遮挡角色的物体。
///   sdlpal PAL_CalcCoverTiles 用 (gridY + TopHeight) * 16 + h * 8 与角色像素 Y 比较，
///   即 TopHeight 与网格行 y 相加后再乘 16 像素（不是 y*16+h*8+TopHeight*8）。
///   TopHeight == 0 的顶层瓦片视为地面装饰，放在底层一起渲染。
/// </summary>
public struct MapTileData
{
    public bool IsBlocked;
    public int BottomSpriteId;
    public int BottomHeight;
    public int TopSpriteId;
    public int TopHeight;

    public static MapTileData Decode(uint dword)
    {
        return new MapTileData
        {
            BottomSpriteId = (int)(dword & 0xFF) | (int)((dword >> 4) & 0x100),
            BottomHeight = (int)((dword >> 8) & 0xF),
            IsBlocked = (dword & 0x2000) != 0,
            TopSpriteId = (int)(((dword >> 16) & 0xFF) | ((dword >> 20) & 0x100)) - 1,
            TopHeight = (int)((dword >> 24) & 0xF),
        };
    }
}
