// src/components/SizeGuide.jsx
import { useEffect, useRef } from "react";
import gsap from "gsap";

// 計測イラスト
import measureImg from "../assets/measure.png";

export default function SizeGuide() {
  const rootRef = useRef(null);

  useEffect(() => {
    const items = gsap.utils.toArray(".sg-anim");
    gsap.fromTo(
      items,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 1.1,
        stagger: 0.16,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <section
      ref={rootRef}
      className="
        relative w-full py-28 
        bg-black text-white 
        overflow-hidden select-none
      "
    >
      {/* --- 背景グラデのみ（超高級ミニマル） --- */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-black" />

      {/* --- 中身 --- */}
      <div className="relative max-w-[1100px] mx-auto px-6 z-10">

        {/* 見出し */}
        <div className="text-center mb-14 sg-anim">
          <h2 className="uppercase text-[14px] tracking-[0.32em] text-neutral-400">
            Size Guide
          </h2>
          <p className="text-[28px] font-light mt-3">
            最適な一本を、迷わず選べるように。
          </p>
        </div>

        {/* ① 計測ガイド */}
        <div className="sg-anim flex justify-center mb-14">
          <img
            src={measureImg}
            alt="measurement guide"
            className="
              w-[380px] opacity-[0.92] 
              drop-shadow-[0_10px_35px_rgba(0,0,0,0.45)]
            "
          />
        </div>

        {/* ② サイズ比較（圧縮） */}
        <div className="sg-anim grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
          {[
            { name: "Noir Frame 01", w: 139, h: 48, b: 20 },
            { name: "Noir Frame 02", w: 142, h: 50, b: 18 },
            { name: "Noir Frame 03", w: 137, h: 46, b: 19 },
            { name: "Noir Frame 04", w: 144, h: 52, b: 21 },
          ].map((item, i) => (
            <div
              key={i}
              className="
                p-5 border border-white/10 
                bg-black/40 backdrop-blur-[2px]
              "
            >
              <h3 className="text-[18px] mb-2">{item.name}</h3>
              <p className="text-[13px] text-neutral-300 leading-relaxed">
                フレーム幅：{item.w}mm<br />
                レンズ高：{item.h}mm<br />
                ブリッジ幅：{item.b}mm
              </p>
            </div>
          ))}
        </div>

        {/* ③ 顔型 × 推奨モデル */}
        <div className="sg-anim mb-8">
          <h3 className="text-[17px] mb-5 font-light tracking-wide">
            顔型 × 推奨モデル
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-neutral-300 leading-relaxed">
                <span className="text-white">● Oval（卵型）</span><br />
                全モデルと相性◎
              </p>
              <p className="mt-4 text-neutral-300 leading-relaxed">
                <span className="text-white">● Round（丸型）</span><br />
                直線ラインの 01 / 03
              </p>
            </div>
            <div>
              <p className="text-neutral-300 leading-relaxed">
                <span className="text-white">● Square（四角）</span><br />
                柔らかい 02
              </p>
              <p className="mt-4 text-neutral-300 leading-relaxed">
                <span className="text-white">● Long（面長）</span><br />
                レンズ高のある 02 / 04
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
