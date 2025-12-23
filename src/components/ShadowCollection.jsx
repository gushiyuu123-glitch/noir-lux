// src/components/ShadowCrossover.jsx
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// モデル・商品
import modelImg from "../assets/item11.png";
import product1 from "../assets/item2.png";
import product2 from "../assets/item333.png";
import product3 from "../assets/item33.png";
import product4 from "../assets/item5.png";

// 背景テクスチャ（薄い縦影）
import bgTexture from "../assets/item1.png";

export default function ShadowCrossover() {
  const rootRef = useRef(null);
  const modelRef = useRef(null);
  const productRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // パララックスを控えめに
      gsap.to(modelRef.current, {
        yPercent: -4,
        ease: "none",
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      });

      gsap.to(productRef.current, {
        yPercent: -9,
        ease: "none",
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.2,
        },
      });

      // フェードイン
      gsap.fromTo(
        [modelRef.current, productRef.current, textRef.current],
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 1.3,
          stagger: 0.22,
          ease: "power3.out",
        }
      );
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      className="
        relative
        w-full py-40
        bg-black text-white
        overflow-hidden select-none
      "
    >
      {/* --- 背景テクスチャ（Missionと統一感） --- */}
      <div className="absolute inset-0 opacity-[0.22]">
        <img
          src={bgTexture}
          className="w-full h-full object-cover scale-[1.1]"
          alt="background texture"
        />
      </div>

      {/* 黒い薄グラデでブランド感を加算 */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

      {/* --- コンテンツ本体 --- */}
      <div className="relative max-w-[1550px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 z-10">
        
        {/* モデル（左） */}
        <div className="relative flex items-center">
          <div
            ref={modelRef}
            className="relative w-full h-[620px] overflow-hidden"
          >
            <img
              src={modelImg}
              alt="model"
              className="
                w-full h-full object-cover
                scale-[1.05]
                brightness-[0.68]
                contrast-[1.02]
              "
            />

            {/* モデル下グラデ強化（主張を抑える） */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />
          </div>
        </div>

        {/* 商品（右） */}
        <div className="relative flex items-center justify-center lg:justify-start">
          
          <div
            ref={productRef}
            className="
              relative -left-[4%] bottom-[2%]
              w-[64%] lg:w-[58%]
              drop-shadow-[0_14px_40px_rgba(0,0,0,0.75)]
            "
          >
            <a href="/product/noir-frame-01">
              <img
                src={product1}
                alt="Noir Frame 01"
                className="w-full object-contain"
              />
            </a>
          </div>

          {/* ------------------ テキスト ------------------ */}
          <div
            ref={textRef}
            className="
              absolute right-[1%] top-1/2 -translate-y-1/2
              max-w-[320px] text-right pr-2 hidden lg:block
            "
          >
            <p className="uppercase text-[12px] tracking-[0.38em] text-amber-300 mb-4">
              Shadow Series
            </p>

            <a href="/product/noir-frame-01">
              <h3 className="text-[28px] tracking-[0.05em] font-light mb-3">
                Noir Frame 01
              </h3>
            </a>

            <p className="text-[14px] leading-[1.75] text-neutral-300 mb-4">
              軽量メタル × 高耐久コート。<br></br>
              影の造形を際立たせるフラットライン構造。
            </p>

            <p className="text-[13px] text-neutral-400">¥32,000</p>
          </div>

        </div>
      </div>
{/* --- 他ラインナップ（Dior式） --- */}
<div className="relative mt-24 max-w-[1550px] mx-auto px-6 z-10">

  {/* ← 追加：右上に偽リンク */}
  <div className="flex justify-end mb-6 pr-1">
    <a
      href="/products"
      className="
        text-[13px] tracking-[0.18em] uppercase
        text-neutral-400 hover:text-white
        transition select-none
      "
    >
      Explore the full Shadow Series →
    </a>
  </div>

  {/* ---- グリッド ---- */}
  <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
    {[product1, product2, product3, product4].map((img, i) => (
      <a
        key={i}
        href={`/product/noir-frame-0${i + 1}`}
        className="group relative block overflow-hidden"
      >
        <img
          src={img}
          className="
            w-full h-[250px] object-cover
            brightness-[0.9] transition
            group-hover:brightness-[1.04]
            group-hover:scale-[1.03]
          "
          alt={`Noir Frame 0${i + 1}`}
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/65 opacity-80" />

        <div className="absolute bottom-4 left-4">
          <p className="text-[14px] text-white/90">
            Noir Frame 0{i + 1}
          </p>
          <p className="text-[12px] text-white/60">¥32,000</p>
        </div>
      </a>
    ))}
  </div>

</div>

    </section>
  );
}
