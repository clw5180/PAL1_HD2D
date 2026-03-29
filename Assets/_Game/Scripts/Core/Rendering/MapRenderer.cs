using System.Collections.Generic;
using UnityEngine;

public class MapRenderer : MonoBehaviour
{
    private MapTileData[,,] _tiles;
    private TileSpriteLoader _tileSprites;
    private GameObject _bottomLayer;
    private GameObject _topLayer;

    public void Render(MapTileData[,,] tiles, TileSpriteLoader tileSprites)
    {
        _tiles = tiles;
        _tileSprites = tileSprites;

        Clear();
        _bottomLayer = BuildLayer(0, "MapBottomLayer");
        _topLayer = BuildLayer(1, "MapTopLayer");
    }

    public void Clear()
    {
        if (_bottomLayer != null) Destroy(_bottomLayer);
        if (_topLayer != null) Destroy(_topLayer);
    }

    private GameObject BuildLayer(int layer, string layerName)
    {
        var parent = new GameObject(layerName);
        parent.transform.SetParent(transform, false);

        int atlasSize = 2048;
        int tileW = TileSpriteLoader.TileWidth;
        int tileH = TileSpriteLoader.TileHeight;
        int tilesPerRow = atlasSize / tileW;

        int tileCount = _tileSprites.TileCount;
        int rows = (tileCount + tilesPerRow - 1) / tilesPerRow;
        int atlasHeight = rows * tileH;
        if (atlasHeight > atlasSize) atlasHeight = atlasSize;

        var atlas = new Texture2D(atlasSize, atlasHeight, TextureFormat.RGBA32, false);
        atlas.filterMode = FilterMode.Point;
        var clearColors = new Color32[atlasSize * atlasHeight];
        for (int i = 0; i < clearColors.Length; i++)
            clearColors[i] = new Color32(0, 0, 0, 0);
        atlas.SetPixels32(clearColors);

        for (int i = 0; i < tileCount; i++)
        {
            var tex = _tileSprites.GetTileTexture(i);
            if (tex == null) continue;
            int ax = (i % tilesPerRow) * tileW;
            int ay = (i / tilesPerRow) * tileH;
            Color32[] pixels = tex.GetPixels32();
            for (int py = 0; py < tex.height && py < tileH; py++)
                for (int px = 0; px < tex.width && px < tileW; px++)
                    atlas.SetPixel(ax + px, ay + py, pixels[py * tex.width + px]);
        }
        atlas.Apply();

        var mat = new Material(Shader.Find("Sprites/Default"));
        mat.mainTexture = atlas;

        var vertices = new List<Vector3>();
        var uvs = new List<Vector2>();
        var triangles = new List<int>();

        float ppu = 100f;
        float tw = tileW / ppu;
        float th = tileH / ppu;

        for (int y = 0; y < MapDataLoader.TileCountY; y++)
        {
            for (int x = 0; x < MapDataLoader.TileCountX; x++)
            {
                for (int h = 0; h < MapDataLoader.TileCountH; h++)
                {
                    var tile = _tiles[y, x, h];
                    int spriteId;
                    if (layer == 0)
                        spriteId = tile.BottomSpriteId;
                    else
                    {
                        spriteId = tile.TopSpriteId;
                        if (spriteId < 0) continue;
                    }

                    if (spriteId < 0 || spriteId >= tileCount) continue;

                    float px = (x * 32 + h * 16 - 16) / ppu;
                    float pz = -(y * 16 + h * 8 - 8) / ppu;

                    float sortOrder = layer == 0 ? -0.01f : 0.01f;

                    int vi = vertices.Count;
                    vertices.Add(new Vector3(px, sortOrder, pz));
                    vertices.Add(new Vector3(px + tw, sortOrder, pz));
                    vertices.Add(new Vector3(px + tw, sortOrder, pz - th));
                    vertices.Add(new Vector3(px, sortOrder, pz - th));

                    float uLeft = (float)((spriteId % tilesPerRow) * tileW) / atlasSize;
                    float uRight = uLeft + (float)tileW / atlasSize;
                    float vBottom = (float)((spriteId / tilesPerRow) * tileH) / atlasHeight;
                    float vTop = vBottom + (float)tileH / atlasHeight;

                    uvs.Add(new Vector2(uLeft, vTop));
                    uvs.Add(new Vector2(uRight, vTop));
                    uvs.Add(new Vector2(uRight, vBottom));
                    uvs.Add(new Vector2(uLeft, vBottom));

                    triangles.Add(vi);
                    triangles.Add(vi + 1);
                    triangles.Add(vi + 2);
                    triangles.Add(vi);
                    triangles.Add(vi + 2);
                    triangles.Add(vi + 3);
                }
            }
        }

        if (vertices.Count == 0) return parent;

        int maxQuadsPerMesh = 15000;
        int totalQuads = vertices.Count / 4;
        int meshCount = (totalQuads + maxQuadsPerMesh - 1) / maxQuadsPerMesh;

        for (int m = 0; m < meshCount; m++)
        {
            int startQuad = m * maxQuadsPerMesh;
            int endQuad = Mathf.Min(startQuad + maxQuadsPerMesh, totalQuads);
            int quadCount = endQuad - startQuad;

            int startVert = startQuad * 4;
            int vertCount = quadCount * 4;

            var subVerts = vertices.GetRange(startVert, vertCount);
            var subUvs = uvs.GetRange(startVert, vertCount);
            var subTris = new int[quadCount * 6];
            for (int q = 0; q < quadCount; q++)
            {
                int vi = q * 4;
                int ti = q * 6;
                subTris[ti] = vi;
                subTris[ti + 1] = vi + 1;
                subTris[ti + 2] = vi + 2;
                subTris[ti + 3] = vi;
                subTris[ti + 4] = vi + 2;
                subTris[ti + 5] = vi + 3;
            }

            var mesh = new Mesh();
            mesh.SetVertices(subVerts);
            mesh.SetUVs(0, subUvs);
            mesh.SetTriangles(subTris, 0);

            var go = new GameObject($"{layerName}_Mesh{m}");
            go.transform.SetParent(parent.transform, false);
            var mf = go.AddComponent<MeshFilter>();
            mf.mesh = mesh;
            var mr = go.AddComponent<MeshRenderer>();
            mr.material = mat;
            mr.shadowCastingMode = UnityEngine.Rendering.ShadowCastingMode.Off;
            mr.receiveShadows = false;
        }

        Debug.Log($"[MapRenderer] {layerName}: {vertices.Count / 4} quads in {meshCount} mesh(es)");
        return parent;
    }
}
