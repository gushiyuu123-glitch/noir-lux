// src/components/hero/FeaturesSP.jsx
import { useEffect, useRef } from "react";
import gsap from "gsap";
import bgTexture from "../assets/shadow-wall-bg2.png";

export default function FeaturesSP() {
  const rootRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(
      rootRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.0 }
    );

    gsap.fromTo(
      itemsRef.current,
      { opacity: 0, y: 18 },
      {
        opacity: 1,
        y: 0,
        duration: 1.0,
        stagger: 0.15,
        ease: "power3.out",
        delay: 0.2,
      }
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
        pt-20 pb-28
      "
    >
      {/* === 背景テクスチャ（静かな薄影） === */}
      <div className="absolute inset-0 opacity-[0.15] -z-10">
        <img
          src={bgTexture}
          alt="texture"
          className="w-full h-full object-cover scale-[1.08]"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/75 -z-10" />

      {/* === 見出し === */}
      <div className="text-center mb-16 px-8">
        <h2 className="uppercase text-[12px] tracking-[0.30em] text-neutral-400">
          Features
        </h2>
        <p className="text-[26px] font-light tracking-wide mt-3">
          機能が、美を磨く。
        </p>
      </div>

      {/* === 機能一覧 === */}
      <div className="px-8 flex flex-col gap-10 max-w-[92%] mx-auto">
        {[
          {
            title: "Ultra-Light Metal",
            text: "わずか 18g。影のような軽さで、一日中ストレスを感じさせません。",
          },
          {
            title: "0.1mm Precision Frame",
            text: "0.1mm 単位で整えられた造形が、影のラインを崩さず美しさを維持。",
          },
          {
            title: "Skin-Tone Enhance Lens",
            text: "光のにごりを抑え、肌トーンを均一に補正。表情を美しく整えます。",
          },
          {
            title: "Anti-Glare Black Coat",
            text: "不要な反射を抑え、影の深さを際立たせる特殊ブラックコート。",
          },
          {
            title: "Pressure-Free Fit",
            text: "圧迫感なく快適。長時間でも存在を忘れる軽いフィット感。",
          },
          {
            title: "Durability Core",
            text: "高耐久メタル × 強化ヒンジで、美しさと実用性を両立。",
          },
        ].map((feature, i) => (
          <div
            key={i}
            ref={(el) => (itemsRef.current[i] = el)}
            className="feature-item"
          >
            <h3 className="text-[17px] mb-2 font-light">
              {feature.title}
            </h3>
            <p className="text-[13px] leading-[1.9] text-neutral-300">
              {feature.text}
            </p>
          </div>
        ))}
      </div>

      {/* === Safe area === */}
      <div className="h-[max(16px,env(safe-area-inset-bottom))]" />
    </section>
  );
}
