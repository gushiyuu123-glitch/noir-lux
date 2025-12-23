// src/components/hero/ReviewsSP.jsx
import { useRef, useEffect } from "react";
import gsap from "gsap";
import bgTexture from "../assets/item1.png";

export default function ReviewsSP() {
  const rootRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // セクション全体フェード
    tl.fromTo(
      rootRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.0 }
    );

    // レビューごとのフェード
    gsap.fromTo(
      itemsRef.current,
      { opacity: 0, y: 24 },
      {
        opacity: 1,
        y: 0,
        duration: 1.0,
        stagger: 0.18,
        ease: "power3.out",
        delay: 0.3,
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
      {/* 背景テクスチャ（弱め） */}
      <div className="absolute inset-0 -z-10 opacity-[0.12]">
        <img
          src={bgTexture}
          className="w-full h-full object-cover scale-[1.08]"
          alt="texture"
        />
      </div>

      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/70 via-black/40 to-black/70" />

      {/* 見出し */}
      <div className="text-center mb-14 px-8">
        <h2 className="uppercase text-[11px] tracking-[0.28em] text-neutral-400">
          Customer Voices
        </h2>
        <p className="text-[24px] font-light tracking-wide mt-2">
          使うたびに“違い”がわかる。
        </p>
      </div>

      {/* レビュー */}
      <div className="px-8 flex flex-col gap-14 max-w-[92%] mx-auto">
        {[
          {
            text: `「通勤で毎日使っています。
電車の窓の反射が抑えられて、
朝の顔が整って見えるのが嬉しいです。」`,
            meta: "— Tokyo / 30代 男性",
          },
          {
            text: `「買い物中に友人から『痩せた？』と聞かれました。
輪郭がシャープに見えるのが自分でも分かります。」`,
            meta: "— Osaka / 20代 女性",
          },
          {
            text: `「出張の飛行機でも全く重さを感じません。
目元が暗くなりすぎず、写真写りも良いです。」`,
            meta: "— Fukuoka / 40代 男性",
          },
        ].map((review, i) => (
          <div
            key={i}
            ref={(el) => (itemsRef.current[i] = el)}
            className="review-item"
          >
            <p className="text-[14px] leading-[1.88] text-neutral-200 whitespace-pre-line mb-3">
              {review.text}
            </p>
            <p className="text-[12px] text-neutral-400 tracking-wide">
              {review.meta}
            </p>
          </div>
        ))}
      </div>

      {/* 安全領域 */}
      <div className="h-[max(14px,env(safe-area-inset-bottom))]" />
    </section>
  );
}
