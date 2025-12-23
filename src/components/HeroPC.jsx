// src/components/HeroPC.jsx
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// デフォルト画像
import defaultLeft from "../assets/hero-left.jpg";
import defaultRight from "../assets/hero-right.jpg";
import defaultLogo from "../assets/logo-gold.png";

export default function HeroPC({
  leftImage = defaultLeft,
  rightImage = defaultRight,
  logoImage = defaultLogo,
}) {
  const rootRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const centerRef = useRef(null);
  const ctaPrimaryRef = useRef(null);
  const ctaSecondaryRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // モデル浮上
      tl.fromTo(
        [leftRef.current, rightRef.current],
        { opacity: 0, y: 60, filter: "blur(9px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1.25,
          stagger: 0.2,
        }
      );

      // 中央パネル
      tl.fromTo(
        centerRef.current,
        { opacity: 0, y: 30, scale: 0.985 },
        { opacity: 1, y: 0, scale: 1, duration: 1.05 },
        "-=0.7"
      );

      // CTA
      tl.fromTo(
        ctaPrimaryRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.7 },
        "-=0.45"
      );

      tl.fromTo(
        ctaSecondaryRef.current,
        { opacity: 0, y: 24 },
        { opacity: 0.9, y: 0, duration: 0.7 },
        "-=0.38"
      );

      // パララックス
      [leftRef, rightRef].forEach((ref, i) => {
        gsap.to(ref.current, {
          yPercent: i === 0 ? -3.5 : -4.5,
          ease: "none",
          scrollTrigger: {
            trigger: rootRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      className="
        hidden lg:block
        relative w-full min-h-screen
        bg-black text-white overflow-hidden
      "
    >
      {/* 背景 */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-950 to-black " />

      {/* 左モデル */}
      <div
        ref={leftRef}
        className="
          pointer-events-none absolute inset-y-0 left-[10%]
          w-[22vw] min-w-[260px] flex items-center
          translate-y-[-3%]
        "
      >
        <div className="relative w-full h-[90vh] overflow-hidden shadow-2xl translate-y-[1%]">
          <img
            src={leftImage}
            alt="model-left"
            className="h-full w-full object-cover scale-[1.015] contrast-[1.06] "
          />

          {/* 下フェード */}
          <div className="absolute inset-x-0 bottom-0 h-[42%] bg-gradient-to-b from-transparent to-black/95" />

          {/* 上の空気 */}
          <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-black/5" />
        </div>
      </div>

      {/* 右モデル */}
      <div
        ref={rightRef}
        className="
          pointer-events-none absolute inset-y-0 right-[10%]
          w-[22vw] min-w-[260px] flex items-center
          translate-y-[-3%]
        "
      >
        <div className="relative w-full h-[90vh] overflow-hidden shadow-2xl translate-y-[1%]">
          <img
            src={rightImage}
            alt="model-right"
            className="h-full w-full object-cover scale-[1.015] contrast-[1.06]"
          />

          {/* 下フェード */}
          <div className="absolute inset-x-0 bottom-0 h-[42%] bg-gradient-to-b from-transparent to-black/95" />

          <div className="absolute inset-0 bg-gradient-to-tl from-black/40 via-transparent to-black/5" />
        </div>
      </div>

      {/* 中央パネル */}
      <div className="relative z-10 flex min-h-screen items-center">
        <div
          ref={centerRef}
          className="
            mx-auto max-w-[400px]
            px-14 py-14
            bg-black/70 backdrop-blur-[5px]
            border border-white/10
            shadow-[0_40px_130px_rgba(0,0,0,0.88)]
            flex flex-col items-center
          "
        >
          {/* ロゴ */}
          <div className="mb-12 opacity-95">
            <img
              src={logoImage}
              className="h-[96px] scale-[1.04]"
              alt="Noir & Lux Logo"
            />
          </div>

          <p className="mb-3 text-[11px] tracking-[0.34em] uppercase text-neutral-400">
            refined sunglasses
          </p>

          <h1 className="text-[31px] leading-tight tracking-[0.14em] text-center mb-6">
            Shadow makes <br />
            <span className="text-amber-300">beauty.</span>
          </h1>

          <p className="text-[13px] text-neutral-300 leading-relaxed text-center mb-12 opacity-90">
            光を抑えれば、輪郭が浮かび上がる。  
            Noir & Lux は “影の美学” をまとうアイウェアブランドです。
          </p>

          {/* CTA */}
          <div className="flex items-center gap-4">
            <button
              ref={ctaPrimaryRef}
              className="
                px-9 py-3
                rounded-full
                bg-white text-black
                text-[11px] tracking-[0.22em]
                border border-white
                shadow-[0_0_25px_rgba(255,255,255,0.18)]
                transition hover:bg-transparent hover:text-white
              "
            >
              View Collection
            </button>

            <button
              ref={ctaSecondaryRef}
              className="
                px-7 py-3
                rounded-full
                text-[10px] tracking-[0.22em]
                text-neutral-300
                border border-white/30
                hover:border-amber-300 hover:text-amber-300
                transition
              "
            >
              Lookbook
            </button>
          </div>
        </div>
      </div>

      {/* Scroll */}
      <div className="absolute bottom-12 inset-x-0 flex justify-center">
        <div className="flex flex-col items-center text-[10px] tracking-[0.28em] text-neutral-500">
          <span className="mb-2">SCROLL</span>
          <span className="w-px h-10 bg-neutral-600 opacity-70 animate-pulse" />
        </div>
      </div>
    </section>
  );
}
