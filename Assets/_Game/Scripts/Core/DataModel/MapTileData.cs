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
