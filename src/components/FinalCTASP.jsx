// src/components/hero/FinalCTASP.jsx
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function FinalCTASP() {
  const rootRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      rootRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.2, ease: "power2.out" }
    );

    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 22 },
      {
        opacity: 1,
        y: 0,
        duration: 1.3,
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
        py-28
        bg-black text-white
        overflow-hidden select-none
      "
    >
      {/* --- 背景：黒の中に沈むグラデ --- */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black via-black/80 to-black" />

      {/* --- 金ライン（SP専用・控えめ） --- */}
      <div
        className="
          absolute left-1/2 top-0 -translate-x-1/2
          w-[1px] h-full
          bg-gradient-to-b
          from-amber-300/30 via-amber-500/60 to-amber-300/30
          opacity-80
          [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]
          [-webkit-mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]
          blur-[0.3px]
        "
      />

      {/* --- 内容 --- */}
      <div
        ref={textRef}
        className="relative z-10 max-w-[90%] mx-auto text-center"
      >
        {/* 小タイトル */}
        <p className="uppercase text-[11px] tracking-[0.36em] text-amber-300/90 mb-5">
          Shadow Series
        </p>

        {/* メインタイトル */}
        <h2 className="text-[26px] font-light tracking-[0.04em] mb-7 leading-[1.45]">
          影が、美を完成させる。
        </h2>

        {/* サブコピー */}
        <p className="text-[14px] text-neutral-300 leading-[1.9] mb-12">
          静けさが形をつくり、ラインが佇まいを磨く。  
          Noir & Lux のミニマルデザインは、  
          あなたの表情に “影の美” を落とし込みます。
        </p>

        {/* CTAボタン（横幅広め・軽い） */}
        <a
          href="/product/noir-frame-01"
          className="
            inline-block
            w-[85%]
            px-6 py-3.5
            border border-amber-300/80
            text-[12px] tracking-[0.22em] uppercase
            bg-black/10 backdrop-blur-[2px]
            rounded-sm
            hover:bg-amber-300/10
            hover:border-amber-300
            transition-all duration-300
          "
        >
          View Product →
        </a>

        {/* FAQリンク */}
        <div className="mt-12 text-[12px] text-neutral-500">
          <a
            href="#"
            className="hover:text-neutral-300 transition underline underline-offset-4"
          >
            FAQ（よくある質問）
          </a>
        </div>
      </div>

      {/* Safe area */}
      <div className="h-[max(18px,env(safe-area-inset-bottom))]" />
    </section>
  );
}
