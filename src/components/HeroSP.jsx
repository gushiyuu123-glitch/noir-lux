// src/components/hero/HeroSP.jsx
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

import leftImg from "../assets/hero-left.jpg";
import logo from "../assets/logo-gold.png";

export default function HeroSP() {
  const rootRef = useRef(null);
  const logoRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(
      rootRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.9 }
    )
      .fromTo(
        logoRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1 },
        "-=0.45"
      )
      .fromTo(
        textRef.current,
        { opacity: 0, y: 18 },
        { opacity: 1, y: 0, duration: 0.9 },
        "-=0.55"
      );
  }, []);

  return (
    <section
      ref={rootRef}
      className="
        lg:hidden relative
        w-full min-h-[100svh]
        bg-black text-white overflow-hidden
      "
    >
      {/* ==== 背景（縦没入） ==== */}
      <div className="absolute inset-0">
        <img
          src={leftImg}
          alt="Background"
          className="
            w-full h-full object-cover
            brightness-[0.52]
            scale-[1.22]
          "
        />

        {/* 上：ごく薄い光（高級感） */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-transparent" />

        {/* 下：読みやすくする静寂フェード */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/45 to-black/85" />
      </div>

      {/* ==== ロゴ ==== */}
      <div
        ref={logoRef}
        className="absolute inset-x-0 top-[30%] flex justify-center"
      >
        <img
          src={logo}
          alt="Noir & Lux Logo"
          className="w-[160px] opacity-95"
        />
      </div>

      {/* ==== テキスト ==== */}
      <div
        ref={textRef}
        className="
          absolute inset-x-0 top-[50%]
          flex flex-col items-center text-center
          px-8
        "
      >
        <p className="text-[10px] tracking-[0.32em] uppercase text-neutral-400 mb-3">
          refined sunglasses
        </p>

        <h1 className="text-[24px] leading-snug tracking-[0.12em] mb-4">
          Shadow makes <br />
          <span className="text-amber-300">beauty.</span>
        </h1>

        <p className="text-[12px] text-neutral-300 leading-relaxed opacity-90 max-w-[92%]">
          光を抑え、影の美しさをまとう。
          Noir & Lux のスマートな新作コレクション。
        </p>
      </div>

      {/* ==== Scroll indicator ==== */}
      <div className="absolute bottom-8 inset-x-0 flex justify-center pointer-events-none">
        <div className="flex flex-col items-center text-[10px] tracking-[0.28em] text-neutral-500">
          <span className="mb-2">SCROLL</span>
          <span className="w-px h-8 bg-neutral-600 animate-pulse opacity-70" />
        </div>
      </div>

      {/* ==== Safe area ==== */}
      <div className="h-[max(12px,env(safe-area-inset-bottom))]" />
    </section>
  );
}
