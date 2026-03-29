using UnityEngine;

public static class PalCoordinate
{
    public const float PIXEL_TO_UNIT = 0.01f;

    public static Vector2Int GridToPixel(int x, int y, int h)
    {
        return new Vector2Int(x * 32 + h * 16, y * 16 + h * 8);
    }

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

    public static Vector3 PixelToUnityWorld(int px, int py)
    {
        return new Vector3(px * PIXEL_TO_UNIT, 0f, -py * PIXEL_TO_UNIT);
    }

    public static Vector2Int UnityWorldToPixel(Vector3 worldPos)
    {
        return new Vector2Int(
            Mathf.RoundToInt(worldPos.x / PIXEL_TO_UNIT),
            Mathf.RoundToInt(-worldPos.z / PIXEL_TO_UNIT)
        );
    }

    public static readonly Vector2Int[] DirectionMovePixels = new Vector2Int[]
    {
        new Vector2Int(-16,  8),  // South(0): 左下
        new Vector2Int(-16, -8),  // West(1):  左上
        new Vector2Int( 16, -8),  // North(2): 右上
        new Vector2Int( 16,  8),  // East(3):  右下
    };
}
