// src/components/hero/MissionSP.jsx
import { useEffect, useRef } from "react";
import gsap from "gsap";

// 背景（影の壁）
import missionBg from "../assets/shadow-wall-bg2.png";

export default function MissionSP() {
  const rootRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(
      rootRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.0 }
    ).fromTo(
      textRef.current,
      { opacity: 0, y: 28 },
      { opacity: 1, y: 0, duration: 1.0 },
      "-=0.6"
    );
  }, []);

  return (
    <section
      ref={rootRef}
      className="
        lg:hidden
        relative w-full min-h-[100svh]
        flex items-center justify-center
        overflow-hidden bg-black text-white
        pt-20 pb-28
      "
    >
      {/* === 背景 === */}
      <div className="absolute inset-0 -z-10">
        <img
          src={missionBg}
          alt="Shadow Wall Background"
          className="
            w-full h-full object-cover
            scale-[1.18] brightness-[0.60]
            animate-[driftSlow_28s_ease-in-out_infinite]
          "
        />

        {/* 上フェード：静寂の開始 */}
        <div className="
          absolute top-0 inset-x-0 h-[160px]
          bg-gradient-to-b from-black via-black/60 to-transparent
        " />

        {/* 下フェード：文章の可読性を守る */}
        <div className="
          absolute bottom-0 inset-x-0 h-[260px]
          bg-gradient-to-t from-black via-black/50 to-transparent
        " />
      </div>

      {/* === テキスト === */}
      <div
        ref={textRef}
        className="
          relative z-10
          max-w-[88%]
          text-center
          text-neutral-200
          select-none
        "
      >
        <p className="text-[11px] tracking-[0.28em] text-neutral-400 mb-8 uppercase leading-relaxed">
          Shadow sculpts beauty.<br />
          Precision perfects comfort.
        </p>

        <div className="text-[13px] leading-[1.9] font-light whitespace-pre-line opacity-[0.95]">
          Noir & Lux のサングラスは、影の入り方まで精密に設計された
          “表情補正アイウェア” です。

          {"\n\n"}
          フレームラインは 0.1mm 単位で調整され、
          フェイスラインを自然に引き締める造形へ最適化。
          長時間の着用でも負担にならない軽量バランスと、
          精密メタルによる確かな耐久性を備えています。

          {"\n\n"}
          レンズは光のにごりを抑え、
          屋内外どちらでも肌のトーンを上質に整える
          独自コーティングを採用。

          {"\n\n"}
          過剰な装飾ではなく、静けさの中で造形が際立つミニマルデザイン。
          その一本が、あなたの佇まいを上質に変えていきます。
        </div>
      </div>

      {/* セーフエリア */}
      <div className="h-[max(14px,env(safe-area-inset-bottom))]" />
    </section>
  );
}
