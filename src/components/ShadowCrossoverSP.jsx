// src/components/hero/ShadowCrossoverSP.jsx
import { useEffect, useRef } from "react";
import gsap from "gsap";

// モデル・商品
import modelImg from "../assets/item11.png";
import product1 from "../assets/item2.png";
import product2 from "../assets/item333.png";
import product3 from "../assets/item33.png";
import product4 from "../assets/item5.png";

// 背景テクスチャ
import bgTexture from "../assets/item1.png";

export default function ShadowCrossoverSP() {
  const rootRef = useRef(null);
  const modelRef = useRef(null);
  const productRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // 全体フェード
    tl.fromTo(
      rootRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.0 }
    );

    // モデル → 商品 → テキスト
    tl.fromTo(
      modelRef.current,
      { opacity: 0, y: 28 },
      { opacity: 1, y: 0, duration: 1.0 },
      "-=0.6"
    )
      .fromTo(
        productRef.current,
        { opacity: 0, y: 28 },
        { opacity: 1, y: 0, duration: 1.0 },
        "-=0.7"
      )
      .fromTo(
        textRef.current,
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 1.0 },
        "-=0.8"
      );
  }, []);

  return (
    <section
      ref={rootRef}
      className="
        lg:hidden
        relative w-full
        bg-black text-white
        overflow-hidden select-none
        pt-12 pb-28
      "
    >
      {/* === Background texture === */}
      <div className="absolute inset-0 opacity-[0.18] -z-10">
        <img
          src={bgTexture}
          alt="texture"
          className="w-full h-full object-cover scale-[1.12]"
        />
      </div>

      {/* -----------------------------------
         モデル（縦ヒーロー）
      ----------------------------------- */}
      <div
        ref={modelRef}
        className="relative w-full h-[70vh] overflow-hidden mb-10"
      >
        <img
          src={modelImg}
          alt="model"
          className="
            w-full h-full object-cover
            scale-[1.05] brightness-[0.70] contrast-[1.04]
          "
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/15 to-black/80" />
      </div>

      {/* -----------------------------------
         商品 1（主役）
      ----------------------------------- */}
      <div
        ref={productRef}
        className="w-[70%] mx-auto mb-10 drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
      >
        <a href="/product/noir-frame-01">
          <img
            src={product1}
            alt="Noir Frame 01"
            className="w-full object-contain"
          />
        </a>
      </div>

      {/* -----------------------------------
         テキスト（センター構図）
      ----------------------------------- */}
      <div
        ref={textRef}
        className="text-center px-8 max-w-[90%] mx-auto mb-16"
      >
        <p className="uppercase text-[11px] tracking-[0.28em] text-amber-300 mb-4">
          Shadow Series
        </p>

        <a href="/product/noir-frame-01">
          <h3 className="text-[24px] tracking-[0.05em] font-light mb-3">
            Noir Frame 01
          </h3>
        </a>

        <p className="text-[13px] leading-[1.85] text-neutral-300 mb-2">
          軽量メタル × 高耐久コート。影の造形を際立たせるフラットライン構造。
        </p>

        <p className="text-[13px] text-neutral-400">¥32,000</p>
      </div>

      {/* -----------------------------------
         他ラインナップ（2列 × 余白広め）
      ----------------------------------- */}
      <div className="max-w-[95%] mx-auto px-2">
        <p className="text-right text-[11px] tracking-[0.18em] text-neutral-500 mb-5 pr-1">
          Explore the full lineup →
        </p>

        <div className="grid grid-cols-2 gap-8">
          {[product1, product2, product3, product4].map((img, i) => (
            <a
              key={i}
              href={`/product/noir-frame-0${i + 1}`}
              className="group relative block overflow-hidden"
            >
              <img
                src={img}
                className="
                  w-full h-[180px] object-cover
                  brightness-[0.95]
                  transition group-hover:brightness-[1.05] group-hover:scale-[1.03]
                "
              />

              <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/70" />

              <div className="absolute bottom-3 left-3">
                <p className="text-[13px] text-white/90">Noir Frame 0{i + 1}</p>
                <p className="text-[11px] text-white/60">¥32,000</p>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Safe Area */}
      <div className="h-[max(14px,env(safe-area-inset-bottom))]" />
    </section>
  );
}
