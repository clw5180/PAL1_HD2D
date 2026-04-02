using System.Collections.Generic;
using UnityEngine;

/// <summary>
/// 仙剑奇侠传1 地图渲染器。
///
/// 【项目背景】
/// 本项目是仙剑奇侠传1的 HD-2D 风格重制版，使用 Unity URP 管线。
/// 摄像机为正交模式俯视 XZ 平面（Euler 90,0,0），Y 轴用于渲染层级排序。
/// 所有地图瓦片以动态 Mesh 方式渲染在 XZ 平面上，通过 Y 坐标控制遮挡关系。
///
/// 【渲染层级系统 —— 核心设计】
/// 原版仙剑使用 "画家算法"（从远到近绘制）+ CalcCoverTiles 遮挡系统。
/// 在 Unity 3D 中，我们把原版“参与排序的屏幕像素 Y”映射到世界 Y，借助 Z-buffer 复现遮挡：
///   - Shader 使用 Opaque + ZWrite On + ZTest LEqual（不是 Transparent 队列！）
///   - Y 值越大的物体离摄像机越近，会遮挡 Y 值较小的物体
///   - 底层瓦片（地面）: Y = BaseLayerY（-1，最低层，永远在最后面）
///   - 角色: Y = SortYFromPlayerPixelY(playerPy)，对应原版加入绘制列表时的 pos.y
///   - 遮挡层瓦片: Y = SortYFromCoverTile(...)，对应 cover tile 加入绘制列表时的 pos.y
///
/// 注意：PAL_CalcCoverTiles 里的“是否需要遮挡”阈值
/// (y + height) * 16 + h * 8
/// 与最终参与排序的绘制值
/// y * 16 + h * 8 + 7 + layer + height * 8
/// 不是同一个公式。之前书架错误就是把两者混用了。
///
/// 【SortYFromWorldZ 排序逻辑】
/// sortY = -worldZ * 0.01
/// worldZ 越小（屏幕越下方）→ sortY 越大 → 渲染在前面。
/// 这确保了"屏幕下方的物体遮挡屏幕上方的物体"这一等距视角的正确行为。
///
/// 【两层 Mesh 架构】
/// 1. BaseLayer（底层）:
///    - 包含所有 BottomSpriteId 有效的瓦片
///    - 包含 TopSpriteId 有效但 TopHeight == 0 的瓦片（地面装饰，不参与遮挡）
///    - 统一放在 Y = BaseLayerY（-1），永远在角色后面
///    - TopHeight==0 的顶层瓦片比底层瓦片高 0.001（避免 Z-fighting）
///
/// 2. OccluderLayer（遮挡层）:
///    - 底层 BottomHeight > 0（墙体等，对应 PAL_MapGetTileHeight layer=0）
///    - 顶层 TopHeight > 0（家具/树木等，layer=1）
///    - 脚底像素 Y 与 scene.c PAL_CalcCoverTiles 一致: footPixelY = (y + height) * 16 + h * 8
///    - 角色走到这些物体"前面"（屏幕下方）时会被遮挡，走到"后面"（屏幕上方）时不被遮挡
///
/// 【瓦片渲染偏移 (-16, -8)】
/// 原版瓦片渲染位置相对于逻辑网格位置有固定偏移:
///   renderPx = x*32 + h*16 - 16
///   renderPy = y*16 + h*8  - 8
/// 这是因为菱形瓦片的绘制原点在左上角，而逻辑坐标指向菱形中心。
/// 碰撞 Gizmo 也需要应用同样的偏移才能与地图对齐。
///
/// 【渲染层级方案演进历史】
/// 方案1: sortY 分组 Mesh（将顶层瓦片按屏幕Y分组为多个Mesh）
///   → 失败：URP Transparent 排序按物体包围盒中心距离排序（不是逐像素），
///     导致小物件被错误排序，变成了地板瓦片。
///
/// 方案2: CoverTile 动态精灵（参考 sdlpal 的 CalcCoverTiles 算法）
///   → 失败：在家具附近出现额外的遮挡瓦片，视觉效果不正确。
///     CalcCoverTiles 在原版2D画家算法中工作正常，但在 Unity 3D 的 Z-buffer 排序中不适用。
///
/// 方案3: 当前方案 —— Opaque + ZWrite + Y轴排序
///   → 遮挡判定参考 PAL_CalcCoverTiles，但真正排序值对齐 PAL_AddSpriteToDraw 的 pos.y。
///   → 使用 Opaque 队列 + clip() Alpha 裁剪，避免了 Transparent 排序的不确定性。
///
/// </summary>
public class MapRenderer : MonoBehaviour
{
    /// <summary>底层（地面）统一 Y 值，设为 -1 确保永远在角色和遮挡层后面。</summary>
    public const float BaseLayerY = -1f;

    private MapTileData[,,] _tiles;
    private TileSpriteLoader _tileSprites;
    private GameObject _baseLayerGO;
    private GameObject _occluderLayerGO;
    private Texture2D _atlas;       // 所有瓦片打包成的纹理图集
    private Material _baseMat;      // 底层材质（PAL/MapBase shader）
    private Material _occluderMat;  // 遮挡层材质（同 shader，独立材质实例）
    private int _atlasW;            // 图集宽度（固定 2048）
    private int _atlasH;            // 图集高度（根据瓦片数量计算）
    private int _tilesPerRow;       // 图集中每行可容纳的瓦片数

    public void Render(MapTileData[,,] tiles, TileSpriteLoader tileSprites)
    {
        _tiles = tiles;
        _tileSprites = tileSprites;

        Clear();
        BuildAtlas();
        BuildBaseMaterial();
        BuildOccluderMaterial();
        _baseLayerGO = BuildBaseLayer();
        _occluderLayerGO = BuildOccluderLayer();
    }

    public void Clear()
    {
        if (_baseLayerGO != null) Destroy(_baseLayerGO);
        if (_occluderLayerGO != null) Destroy(_occluderLayerGO);
    }

    /// <summary>与 TileMapWalkBootstrap / PAL 一致的像素→世界 Z：wz = -footPixelY / Ppu。</summary>
    public const float Ppu = 100f;

    /// <summary>
    /// 将世界坐标 Z 转换为排序用 Y 值。
    /// worldZ 越小（屏幕越下方）→ 返回值越大 → 渲染在更前面。
    /// </summary>
    public static float SortYFromWorldZ(float worldZ)
    {
        return -worldZ * 0.01f;
    }

    /// <summary>
    /// 将 PAL 里用于排序的屏幕像素 Y（scene.c 中的 pos.y）映射到 Unity 的排序深度。
    /// 该值越大，表示对象越靠屏幕下方，应绘制在越前面。
    /// </summary>
    public static float SortYFromRenderPixelY(float renderPixelY)
    {
        return renderPixelY / Ppu * 0.01f;
    }

    /// <summary>
    /// 角色排序不直接取 cover 判定阈值，而是取原版加入绘制队列时的 pos.y。
    /// 当前测试场景等价于 wLayer=0，因此对应 scene.c 的 party.y + 10。
    /// </summary>
    public static float SortYFromPlayerPixelY(float playerPixelY, float playerSortPixelOffset = 10f)
    {
        return SortYFromRenderPixelY(playerPixelY + playerSortPixelOffset);
    }

    /// <summary>
    /// cover tile 的排序值对应 scene.c / UnityPAL 中加入绘制列表时的 pos.y:
    /// y*16 + h*8 + 7 + layerIndex + logicHeight*8。
    /// 注意这与“是否需要收集为遮挡 tile”的阈值 (y+height)*16+h*8 不是同一个公式。
    /// </summary>
    public static float SortYFromCoverTile(int tileY, int tileH, int layerIndex, int logicHeight)
    {
        float renderPixelY = tileY * 16 + tileH * 8 + 7 + layerIndex + logicHeight * 8;
        return SortYFromRenderPixelY(renderPixelY);
    }

    /// <summary>
    /// 加在遮挡层 Mesh 顶点 Y 上，略大于同脚底线上的角色，避免深度完全相等时的 Z-fight（书架与角色“融为一体”）。
    /// 量级需远小于相邻半格（8px）对应的深度差 (~8e-5）。
    /// </summary>
    public const float OccluderSortYBias = 3e-5f;

    /// <summary>
    /// 构建纹理图集，将所有瓦片精灵打包到一张 2048×N 的大纹理中。
    /// 图集避免了逐瓦片切换纹理带来的 Draw Call 开销。
    /// 每个瓦片在图集中的位置由 spriteId 计算: (spriteId % tilesPerRow, spriteId / tilesPerRow)
    /// </summary>
    void BuildAtlas()
    {
        _atlasW = 2048;
        int tileW = TileSpriteLoader.TileWidth;
        int tileH = TileSpriteLoader.TileHeight;
        _tilesPerRow = _atlasW / tileW;

        int tileCount = _tileSprites.TileCount;
        int rows = (tileCount + _tilesPerRow - 1) / _tilesPerRow;
        _atlasH = rows * tileH;
        if (_atlasH > _atlasW) _atlasH = _atlasW;

        _atlas = new Texture2D(_atlasW, _atlasH, TextureFormat.RGBA32, false);
        _atlas.filterMode = FilterMode.Point;
        // Scene 视图斜视角下更容易踩到图集边界采样，Clamp 可减少白边/串图伪影。
        _atlas.wrapMode = TextureWrapMode.Clamp;
        var clearColors = new Color32[_atlasW * _atlasH];
        _atlas.SetPixels32(clearColors);

        for (int i = 0; i < tileCount; i++)
        {
            var tex = _tileSprites.GetTileTexture(i);
            if (tex == null) continue;
            int ax = (i % _tilesPerRow) * tileW;
            int ay = (i / _tilesPerRow) * tileH;
            Color32[] pixels = tex.GetPixels32();
            for (int py = 0; py < tex.height && py < tileH; py++)
                for (int px = 0; px < tex.width && px < tileW; px++)
                    _atlas.SetPixel(ax + px, ay + py, pixels[py * tex.width + px]);
        }
        _atlas.Apply();
    }

    /// <summary>
    /// 底层材质，使用 PAL/MapBase shader。
    /// 该 shader 为 Opaque + ZWrite On + clip() alpha 裁剪。
    /// 不使用 Transparent 队列是为了避免 URP 的透明排序问题
    /// （URP 透明排序按物体包围盒中心距离，不是逐像素，会导致错误遮挡）。
    /// </summary>
    void BuildBaseMaterial()
    {
        _baseMat = new Material(Shader.Find("PAL/MapBase"));
        _baseMat.mainTexture = _atlas;
        _baseMat.SetFloat("_Cutoff", 0.01f);
    }

    /// <summary>遮挡层材质，与底层使用相同 shader 但独立实例。</summary>
    void BuildOccluderMaterial()
    {
        _occluderMat = new Material(Shader.Find("PAL/MapBase"));
        _occluderMat.mainTexture = _atlas;
        _occluderMat.SetFloat("_Cutoff", 0.01f);
    }

    /// <summary>
    /// 构建底层（地面）Mesh。
    /// 包含:
    ///   1. BottomHeight == 0 的底层瓦片（BottomHeight > 0 的墙体等改由 OccluderLayer 绘制）
    ///   2. TopHeight == 0 的顶层瓦片（地面装饰，不参与遮挡）
    /// 所有瓦片统一放在 Y = BaseLayerY（-1），TopHeight==0 的顶层比底层高 0.001 避免 Z-fighting。
    ///
    /// 瓦片世界坐标计算:
    ///   px = (x * 32 + h * 16 - 16) / 100  （含渲染偏移 -16）
    ///   pz = -(y * 16 + h * 8 - 8) / 100   （含渲染偏移 -8，Y轴反转）
    /// </summary>
    GameObject BuildBaseLayer()
    {
        var parent = new GameObject("MapBaseLayer");
        parent.transform.SetParent(transform, false);

        int tileW = TileSpriteLoader.TileWidth;
        int tileH = TileSpriteLoader.TileHeight;
        int tileCount = _tileSprites.TileCount;
        float ppu = 100f;
        float tw = tileW / ppu;
        float th = tileH / ppu;

        var vertices = new List<Vector3>();
        var uvs = new List<Vector2>();

        for (int y = 0; y < MapDataLoader.TileCountY; y++)
        {
            for (int x = 0; x < MapDataLoader.TileCountX; x++)
            {
                for (int h = 0; h < MapDataLoader.TileCountH; h++)
                {
                    var tile = _tiles[y, x, h];

                    int bottomId = tile.BottomSpriteId;
                    if (bottomId >= 0 && bottomId < tileCount && tile.BottomHeight == 0)
                    {
                        float px = (x * 32 + h * 16 - 16) / ppu;
                        float pz = -(y * 16 + h * 8 - 8) / ppu;
                        AddQuad(vertices, uvs, px, BaseLayerY, pz, tw, th, bottomId, tileW, tileH);
                    }

                    int topId = tile.TopSpriteId;
                    if (topId >= 0 && topId < tileCount && tile.TopHeight == 0)
                    {
                        float px = (x * 32 + h * 16 - 16) / ppu;
                        float pz = -(y * 16 + h * 8 - 8) / ppu;
                        AddQuad(vertices, uvs, px, BaseLayerY + 0.001f, pz, tw, th, topId, tileW, tileH);
                    }
                }
            }
        }

        FlushMeshes(parent, vertices, uvs, "MapBase", _baseMat);
        return parent;
    }

    /// <summary>
    /// 构建遮挡层 Mesh。
    /// 与 PAL_CalcCoverTiles 一致：底层用 BottomHeight（layer 0）、顶层用 TopHeight（layer 1）。
    /// 这里使用原版真正参与排序的 pos.y 公式，而不是 cover 判定阈值:
    ///   renderPixelY = y*16 + h*8 + 7 + layerIndex + logicHeight*8
    ///   sortY = SortYFromRenderPixelY(renderPixelY)
    /// </summary>
    GameObject BuildOccluderLayer()
    {
        var parent = new GameObject("MapOccluderLayer");
        parent.transform.SetParent(transform, false);

        int tileW = TileSpriteLoader.TileWidth;
        int tileH = TileSpriteLoader.TileHeight;
        int tileCount = _tileSprites.TileCount;
        float ppu = 100f;
        float tw = tileW / ppu;
        float th = tileH / ppu;

        var vertices = new List<Vector3>();
        var uvs = new List<Vector2>();

        for (int y = 0; y < MapDataLoader.TileCountY; y++)
        {
            for (int x = 0; x < MapDataLoader.TileCountX; x++)
            {
                for (int h = 0; h < MapDataLoader.TileCountH; h++)
                {
                    var tile = _tiles[y, x, h];

                    float px = (x * 32 + h * 16 - 16) / ppu;
                    float pz = -(y * 16 + h * 8 - 8) / ppu;

                    int bottomId = tile.BottomSpriteId;
                    if (bottomId >= 0 && bottomId < tileCount && tile.BottomHeight > 0)
                    {
                        // layerIndex=0 对应原版 bottom layer；这里用最终排序值，而非 cover 判定阈值。
                        float sortY = SortYFromCoverTile(y, h, 0, tile.BottomHeight) + OccluderSortYBias;
                        AddQuad(vertices, uvs, px, sortY, pz, tw, th, bottomId, tileW, tileH);
                    }

                    int topId = tile.TopSpriteId;
                    if (topId >= 0 && topId < tileCount && tile.TopHeight > 0)
                    {
                        // layerIndex=1 对应原版 top layer。
                        float sortY = SortYFromCoverTile(y, h, 1, tile.TopHeight) + OccluderSortYBias;
                        AddQuad(vertices, uvs, px, sortY, pz, tw, th, topId, tileW, tileH);
                    }
                }
            }
        }

        FlushMeshes(parent, vertices, uvs, "MapOccluder", _occluderMat);
        return parent;
    }

    /// <summary>
    /// 添加一个四边形（2个三角形，4个顶点）到顶点/UV列表中。
    /// 四边形铺在 XZ 平面上（摄像机俯视），Y 值用于排序深度。
    /// UV 从图集中根据 spriteId 计算对应区域。
    /// </summary>
    void AddQuad(List<Vector3> vertices, List<Vector2> uvs,
        float px, float yPos, float pz, float tw, float th,
        int spriteId, int tileW, int tileH)
    {
        vertices.Add(new Vector3(px, yPos, pz));
        vertices.Add(new Vector3(px + tw, yPos, pz));
        vertices.Add(new Vector3(px + tw, yPos, pz - th));
        vertices.Add(new Vector3(px, yPos, pz - th));

        float uLeft = (float)((spriteId % _tilesPerRow) * tileW) / _atlasW;
        float uRight = uLeft + (float)tileW / _atlasW;
        float vBottom = (float)((spriteId / _tilesPerRow) * tileH) / _atlasH;
        float vTop = vBottom + (float)tileH / _atlasH;

        uvs.Add(new Vector2(uLeft, vTop));
        uvs.Add(new Vector2(uRight, vTop));
        uvs.Add(new Vector2(uRight, vBottom));
        uvs.Add(new Vector2(uLeft, vBottom));
    }

    /// <summary>
    /// 将收集的顶点/UV数据分批生成 Mesh 并挂载到 GameObject 上。
    /// Unity 单个 Mesh 的顶点数有限制（65535），所以按 maxQuadsPerMesh（15000个四边形=60000顶点）分批。
    /// 每个 Mesh 子物体挂载 MeshFilter + MeshRenderer，关闭阴影以节省性能。
    /// </summary>
    void FlushMeshes(GameObject parent, List<Vector3> vertices, List<Vector2> uvs, string name, Material mat)
    {
        if (vertices.Count == 0) return;

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

            var go = new GameObject($"{name}_Mesh{m}");
            go.transform.SetParent(parent.transform, false);
            var mf = go.AddComponent<MeshFilter>();
            mf.mesh = mesh;
            var mr = go.AddComponent<MeshRenderer>();
            mr.material = mat;
            mr.shadowCastingMode = UnityEngine.Rendering.ShadowCastingMode.Off;
            mr.receiveShadows = false;
        }

        Debug.Log($"[MapRenderer] {name}: {totalQuads} quads in {meshCount} mesh(es)");
    }
}
