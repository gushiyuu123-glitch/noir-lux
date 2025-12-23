// src/components/Mission.jsx
import { useEffect, useRef } from "react";
import gsap from "gsap";

// 影の壁（AI背景）
import missionBg from "../assets/shadow-wall-bg2.png";

export default function Mission() {
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
      { opacity: 0, y: 24 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power3.out", delay: 0.4 }
    );
  }, []);

  return (
    <section
      ref={rootRef}
      className="
        relative w-full h-[100vh]
        flex items-center justify-center
        overflow-hidden bg-black text-white
      "
    >
      {/* ---- 背景：影の壁 ---- */}
      <div className="absolute inset-0 z-0">
        <img
          src={missionBg}
          alt="Shadow Wall Background"
          className="
            w-full h-full object-cover
            opacity-[0.88]
            scale-[1.1]
            animate-[driftSlow_26s_ease-in-out_infinite]
          "
        />

        {/* 上部フェード（継ぎ目消し） */}
        <div className="
          absolute top-0 inset-x-0 h-[180px]
          bg-gradient-to-b from-black/90 via-black/50 to-transparent
        " />

        {/* 下部フェード（継ぎ目消し） */}
        <div className="
          absolute bottom-0 inset-x-0 h-[220px]
          bg-gradient-to-t from-black/90 via-black/50 to-transparent
        " />
      </div>

      {/* ---- テキスト ---- */}
      <div
        ref={textRef}
        className="
          relative z-10 max-w-[680px]
          text-center px-6 select-none
        "
      >
        <p className="text-center text-[15px] md:text-[17px] tracking-[0.24em] text-neutral-300 mb-10 uppercase">
          Shadow sculpts beauty.<br />Precision perfects comfort.
        </p>

        <div className="max-w-[540px] mx-auto text-left text-neutral-200 leading-[1.7] text-[15px] font-light whitespace-pre-line">
          Noir & Lux のサングラスは、影の入り方まで精密に設計された
          “表情補正アイウェア” です。

          {"\n\n"}
          フレームのラインは 0.1mm 単位で調整され、
          頬・フェイスラインを自然に引き締める造形へ最適化。
          長時間の着用でも負担を感じさせない軽量バランスと、
          精密メタルによる確かな耐久性を備えています。

          {"\n\n"}
          レンズには光のにごりを抑える独自コーティングを採用し、
          屋内外どちらでも肌のトーンを上質に整え、
          “影の美” をより立体的に引き立てます。

          {"\n\n"}
          過剰な装飾ではなく、静けさの中で造形が際立つミニマルデザイン。
          その一本が、あなたの佇まいを上質に変えていきます。
        </div>
      </div>
    </section>
  );
}
