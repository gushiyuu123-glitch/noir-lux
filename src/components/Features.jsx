// src/components/Features.jsx
import { useEffect, useRef } from "react";
import gsap from "gsap";
import bgTexture from "../assets/shadow-wall-bg2.png"; // Missionと統一用

export default function Features() {
  const rootRef = useRef(null);

  useEffect(() => {
    const items = gsap.utils.toArray(".feature-item");

    gsap.fromTo(
      items,
      { opacity: 0, y: 18 },
      {
        opacity: 1,
        y: 0,
        duration: 1.1,
        ease: "power3.out",
        stagger: 0.15,
      }
    );
  }, []);

  return (
    <section
      ref={rootRef}
      className="
        relative w-full py-32
        bg-black text-white
        overflow-hidden select-none
      "
    >
      {/* 背景テクスチャ */}
      <div className="absolute inset-0 opacity-[0.18]">
        <img
          src={bgTexture}
          alt="texture"
          className="w-full h-full object-cover scale-[1.08]"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70" />

      {/* コンテンツ */}
      <div className="relative max-w-[1200px] mx-auto px-6 z-10">

        {/* 見出し */}
        <div className="text-center mb-20">
          <h2 className="uppercase text-[14px] tracking-[0.32em] text-neutral-400">
            Features
          </h2>
          <p className="text-[32px] font-light tracking-wide mt-2">
            機能が、美を磨く。
          </p>
        </div>

        {/* 機能一覧 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">

          {/* 1 */}
          <div className="feature-item">
            <h3 className="text-[18px] mb-2 font-light">Ultra-Light Metal</h3>
            <p className="text-[14px] text-neutral-300 leading-relaxed">
              わずか 18g。影のような軽さで、一日中ストレスを感じさせません。
            </p>
          </div>

          {/* 2 */}
          <div className="feature-item">
            <h3 className="text-[18px] mb-2 font-light">0.1mm Precision Frame</h3>
            <p className="text-[14px] text-neutral-300 leading-relaxed">
              0.1mm 単位で整えられた造形が、影のラインを崩さず美しさを維持。
            </p>
          </div>

          {/* 3 */}
          <div className="feature-item">
            <h3 className="text-[18px] mb-2 font-light">Skin-Tone Enhance Lens</h3>
            <p className="text-[14px] text-neutral-300 leading-relaxed">
              屋内外の光で肌のトーンを均一に補正し、表情をより美しく。
            </p>
          </div>

          {/* 4 */}
          <div className="feature-item">
            <h3 className="text-[18px] mb-2 font-light">Anti-Glare Black Coat</h3>
            <p className="text-[14px] text-neutral-300 leading-relaxed">
              不要な反射を抑え、影の深さを際立たせる特殊ブラックコート。
            </p>
          </div>

          {/* 5 */}
          <div className="feature-item">
            <h3 className="text-[18px] mb-2 font-light">Pressure-Free Fit</h3>
            <p className="text-[14px] text-neutral-300 leading-relaxed">
              圧迫感を感じさせず、長時間でも快適。存在を忘れるフィット感。
            </p>
          </div>

          {/* 6 */}
          <div className="feature-item">
            <h3 className="text-[18px] mb-2 font-light">Durability Core</h3>
            <p className="text-[14px] text-neutral-300 leading-relaxed">
              高耐久メタル × 強化ヒンジで、美しさと実用性を両立します。
            </p>
          </div>

        </div>
      </div>

    </section>
  );
}
