using System;
using System.IO;
using UnityEngine;

public class MapDataLoader
{
    public const int TileCountY = 128;
    public const int TileCountX = 64;
    public const int TileCountH = 2;
    public const int TileDataSize = TileCountY * TileCountX * TileCountH * 4;

    public MapTileData[,,] LoadMapTiles(string mapFilePath)
    {
        if (!File.Exists(mapFilePath))
        {
            Debug.LogError($"Map file not found: {mapFilePath}");
            return null;
        }

        byte[] bytes = File.ReadAllBytes(mapFilePath);
        if (bytes.Length < TileDataSize)
        {
            Debug.LogError($"Map file too small: need at least {TileDataSize}, got {bytes.Length}");
            return null;
        }

        if (bytes.Length > TileDataSize)
            Debug.Log($"[MapDataLoader] File has {bytes.Length} bytes, using first {TileDataSize} (palmod writes tile data twice)");

        var tiles = new MapTileData[TileCountY, TileCountX, TileCountH];

        int offset = 0;
        for (int y = 0; y < TileCountY; y++)
        {
            for (int x = 0; x < TileCountX; x++)
            {
                for (int h = 0; h < TileCountH; h++)
                {
                    uint dword = BitConverter.ToUInt32(bytes, offset);
                    tiles[y, x, h] = MapTileData.Decode(dword);
                    offset += 4;
                }
            }
        }

        return tiles;
    }

    public MapTileData[,,] LoadMapTilesById(string mapDir, int mapId)
    {
        string path = Path.Combine(mapDir, $"Map{mapId:D4}");
        return LoadMapTiles(path);
    }

    public bool IsTileBlocked(MapTileData[,,] tiles, int x, int y, int h)
    {
        if (y < 0 || y >= TileCountY || x < 0 || x >= TileCountX || h < 0 || h > 1)
            return true;
        return tiles[y, x, h].IsBlocked;
    }

    public static void PrintMapStats(MapTileData[,,] tiles)
    {
        if (tiles == null)
        {
            Debug.Log("[MapDataLoader] tiles is null");
            return;
        }

        int blocked = 0;
        int total = 0;
        int hasTopLayer = 0;

        for (int y = 0; y < TileCountY; y++)
        {
            for (int x = 0; x < TileCountX; x++)
            {
                for (int h = 0; h < TileCountH; h++)
                {
                    total++;
                    if (tiles[y, x, h].IsBlocked) blocked++;
                    if (tiles[y, x, h].TopSpriteId >= 0) hasTopLayer++;
                }
            }
        }

        Debug.Log($"[MapDataLoader] Total tiles: {total}, Blocked: {blocked}, HasTopLayer: {hasTopLayer}");
    }
}
