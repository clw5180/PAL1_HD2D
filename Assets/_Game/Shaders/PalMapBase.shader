// =============================================================================
// 仙剑奇侠传1 HD-2D 重制版 —— 地图/角色基础着色器
//
// 【设计决策】
// 使用 Opaque 队列 + clip() alpha 裁剪，而非 Transparent 队列 + Alpha Blend。
// 原因: URP 的 Transparent 排序按物体包围盒中心到摄像机的距离排序（per-object），
// 不是逐像素排序，导致多个瓦片 Mesh 之间的排序不可控，
// 小物件会被错误排序到地面瓦片层（之前渲染层级方案1失败的根本原因）。
//
// 使用 Opaque + ZWrite On + ZTest LEqual，利用 Z-buffer（深度缓冲）
// 进行逐像素的深度测试，排序完全由物体的 Y 坐标（映射到深度）决定，
// 精确且可控。
//
// 【Alpha 裁剪】
// clip(col.a - _Cutoff): 当像素 alpha < _Cutoff(0.01) 时直接丢弃，
// 实现"硬边缘"透明效果。虽然边缘没有 Alpha Blend 平滑，
// 但保证了深度写入的正确性（透明像素不会写入深度缓冲）。
//
// 【Cull Off】
// 关闭背面剔除，因为摄像机从正上方俯视，某些旋转的面可能需要双面渲染。
//
// 【使用场景】
// - 地图底层瓦片（MapBaseLayer）
// - 地图遮挡层瓦片（MapOccluderLayer）  
// - 角色精灵
// 三者使用相同 shader 但独立的材质实例。
// =============================================================================
Shader "PAL/MapBase"
{
    Properties
    {
        _MainTex ("Texture", 2D) = "white" {}
        _Cutoff ("Alpha Cutoff", Range(0, 1)) = 0.01
    }
    SubShader
    {
        Tags
        {
            "RenderPipeline" = "UniversalPipeline"
            "RenderType" = "Opaque"
            "Queue" = "Geometry"
        }

        Pass
        {
            Name "PalMapBase"
            Tags { "LightMode" = "UniversalForward" }

            ZWrite On
            ZTest LEqual
            Cull Off
            Blend Off

            HLSLPROGRAM
            #pragma vertex vert
            #pragma fragment frag

            #include "Packages/com.unity.render-pipelines.universal/ShaderLibrary/Core.hlsl"

            CBUFFER_START(UnityPerMaterial)
                float4 _MainTex_ST;
                float _Cutoff;
            CBUFFER_END

            TEXTURE2D(_MainTex);
            SAMPLER(sampler_MainTex);

            struct Attributes
            {
                float4 positionOS : POSITION;
                float2 uv : TEXCOORD0;
            };

            struct Varyings
            {
                float4 positionCS : SV_POSITION;
                float2 uv : TEXCOORD0;
            };

            Varyings vert(Attributes input)
            {
                Varyings output;
                output.positionCS = TransformObjectToHClip(input.positionOS.xyz);
                output.uv = TRANSFORM_TEX(input.uv, _MainTex);
                return output;
            }

            half4 frag(Varyings input) : SV_Target
            {
                half4 col = SAMPLE_TEXTURE2D(_MainTex, sampler_MainTex, input.uv);
                clip(col.a - _Cutoff);
                return col;
            }
            ENDHLSL
        }
    }
}
