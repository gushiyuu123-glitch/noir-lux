// src/components/FinalCTA.jsx
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function FinalCTA() {
  const rootRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      rootRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.4, ease: "power2.out" }
    );

    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power3.out",
        delay: 0.2,
      }
    );
  }, []);

  return (
    <section
      ref={rootRef}
      className="
        relative w-full py-44
        bg-black text-white
        overflow-hidden select-none
      "
    >
      {/* ---- 背景：黒のみ＋深いグラデ ---- */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-black" />

      {/* ---- 中央の金ライン（Diorの“締め”） ---- */}
  {/* ---- フェードアウト縦ライン（高級ブランド仕様） ---- */}
<div
  className="
    absolute left-1/2 top-0 -translate-x-1/2
    w-[2px] h-full
    bg-gradient-to-b 
    from-amber-300/50 via-amber-500/80 to-amber-300/40
    opacity-90 blur-[0.5px]

    [mask-image:linear-gradient(to_bottom,transparent,black_18%,black_82%,transparent)]
    [-webkit-mask-image:linear-gradient(to_bottom,transparent,black_18%,black_82%,transparent)]
  "
/>

      {/* ---- テキスト ---- */}
      <div
        ref={textRef}
        className="
          relative z-10 max-w-[720px]
          mx-auto text-center px-6
        "
      >
        {/* 小タイトル */}
        <p className="uppercase text-[14px] tracking-[0.38em] text-amber-300/90 mb-6">
          Shadow Series
        </p>

        {/* メインコピー */}
        <h2
          className="
            text-[40px] md:text-[50px]
            font-light tracking-[0.03em]
            mb-10
          "
        >
          影が、美を完成させる。
        </h2>

        {/* サブコピー */}
        <p
          className="
            text-neutral-300 text-[16px]
            leading-relaxed mb-14
          "
        >
          静けさが形をつくり、ラインが佇まいを磨く。  
          Noir & Lux のミニマルデザインは、あなたの表情に  
          “影の美” を落とし込みます。
        </p>

        {/* CTAボタン */}
        <a
          href="/product/noir-frame-01"
          className="
            inline-block
            px-14 py-4
            border border-amber-300/80
            text-[14px]
            tracking-[0.22em] uppercase
            rounded-sm
            bg-black/10 backdrop-blur-[2px]
            hover:bg-amber-300/10
            hover:border-amber-300
            transition-all duration-300
          "
        >
          View Product →
        </a>

        {/* FAQリンク */}
        <div className="mt-16 text-[13px] text-neutral-500">
          <a
            href="#"
            className="hover:text-neutral-300 transition underline underline-offset-4"
          >
            FAQ（よくある質問）
          </a>
        </div>
      </div>
    </section>
  );
}
