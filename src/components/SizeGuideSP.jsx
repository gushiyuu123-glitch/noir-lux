// src/components/hero/SizeGuideSP.jsx
import { useEffect, useRef } from "react";
import gsap from "gsap";
import measureImg from "../assets/measure.png";

export default function SizeGuideSP() {
  const rootRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      rootRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.0, ease: "power3.out" }
    );

    gsap.fromTo(
      itemsRef.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 1.0,
        ease: "power3.out",
        stagger: 0.18,
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
        pt-20 pb-28
        bg-black text-white
        overflow-hidden select-none
      "
    >
      {/* 背景（静かな黒レイヤー） */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black via-black/80 to-black" />

      <div className="relative max-w-[90%] mx-auto px-2 z-10">

        {/* 見出し */}
        <div
          ref={(el) => (itemsRef.current[0] = el)}
          className="text-center mb-14"
        >
          <h2 className="uppercase text-[11px] tracking-[0.30em] text-neutral-400">
            Size Guide
          </h2>
          <p className="text-[24px] font-light mt-3 leading-[1.5]">
            最適な一本を、迷わず選べるように。
          </p>
        </div>

        {/* --- 計測イラスト --- */}
        <div
          ref={(el) => (itemsRef.current[1] = el)}
          className="flex justify-center mb-12"
        >
          <img
            src={measureImg}
            alt="measurement guide"
            className="
              w-[260px] opacity-[0.92]
              drop-shadow-[0_10px_35px_rgba(0,0,0,0.45)]
            "
          />
        </div>

        {/* --- サイズ比較 --- */}
        <div
          ref={(el) => (itemsRef.current[2] = el)}
          className="flex flex-col gap-8 mb-16"
        >
          {[
            { name: "Noir Frame 01", w: 139, h: 48, b: 20 },
            { name: "Noir Frame 02", w: 142, h: 50, b: 18 },
            { name: "Noir Frame 03", w: 137, h: 46, b: 19 },
            { name: "Noir Frame 04", w: 144, h: 52, b: 21 },
          ].map((item, i) => (
            <div
              key={i}
              className="
                p-5 rounded-xl
                bg-black/40 border border-white/10
                backdrop-blur-[2px]
              "
            >
              <h3 className="text-[17px] font-light mb-2">
                {item.name}
              </h3>
              <p className="text-[13px] leading-[1.9] text-neutral-300">
                フレーム幅：{item.w}mm<br />
                レンズ高：{item.h}mm<br />
                ブリッジ幅：{item.b}mm
              </p>
            </div>
          ))}
        </div>

        {/* --- 顔型 × 推奨モデル --- */}
        <div
          ref={(el) => (itemsRef.current[3] = el)}
          className="mb-10"
        >
          <h3 className="text-[17px] font-light tracking-wide mb-6">
            顔型 × 推奨モデル
          </h3>

          <div className="flex flex-col gap-6 text-[13px] leading-[1.9] text-neutral-300">
            <div>
              <p>
                <span className="text-white">● Oval（卵型）</span><br />
                全モデルと相性◎
              </p>
            </div>
            <div>
              <p>
                <span className="text-white">● Round（丸型）</span><br />
                直線ラインの 01 / 03
              </p>
            </div>
            <div>
              <p>
                <span className="text-white">● Square（四角）</span><br />
                柔らかい 02
              </p>
            </div>
            <div>
              <p>
                <span className="text-white">● Long（面長）</span><br />
                レンズ高のある 02 / 04
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* Safe Area */}
      <div className="h-[max(14px,env(safe-area-inset-bottom))]" />
    </section>
  );
}
