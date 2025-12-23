// src/components/Reviews.jsx
import { useRef, useEffect } from "react";
import gsap from "gsap";
import bgTexture from "../assets/item1.png";

export default function Reviews() {
  const rootRef = useRef(null);

  useEffect(() => {
    const items = gsap.utils.toArray(".review-item");

    gsap.fromTo(
      items,
      { opacity: 0, y: 24 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <section
      ref={rootRef}
      className="
        relative w-full py-36 
        bg-black text-white 
        overflow-hidden select-none
      "
    >
      {/* 背景テクスチャ */}
      <div className="absolute inset-0 opacity-[0.14]">
        <img
          src={bgTexture}
          alt="texture"
          className="w-full h-full object-cover scale-[1.08]"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70" />

      {/* 内容 */}
      <div className="relative max-w-[1150px] mx-auto px-6 z-10">

        {/* 見出し */}
        <div className="text-center mb-20">
          <h2 className="uppercase text-[14px] tracking-[0.32em] text-neutral-400">
            Customer Voices
          </h2>
          <p className="text-[30px] font-light tracking-wide mt-2">
            使うたびに“違い”がわかる。
          </p>
        </div>

        {/* レビュー */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">

          {/* 1 */}
          <div className="review-item">
            <p className="text-[15px] leading-relaxed text-neutral-200 mb-4">
              「通勤で毎日使っています。<br />
              電車の窓の反射が抑えられて、<br />
              朝の顔が整って見えるのが嬉しいです。」
            </p>
            <p className="text-[13px] text-neutral-400 tracking-wide">
              — Tokyo / 30代 男性
            </p>
          </div>

          {/* 2 */}
          <div className="review-item">
            <p className="text-[15px] leading-relaxed text-neutral-200 mb-4">
              「買い物中に友人から『痩せた？』と聞かれました。<br />
              輪郭がシャープに見えるのが自分でも分かります。」
            </p>
            <p className="text-[13px] text-neutral-400 tracking-wide">
              — Osaka / 20代 女性
            </p>
          </div>

          {/* 3 */}
          <div className="review-item">
            <p className="text-[15px] leading-relaxed text-neutral-200 mb-4">
              「出張の飛行機でも全く重さを感じません。<br />
              目元が暗くなりすぎず、写真写りも良いです。」
            </p>
            <p className="text-[13px] text-neutral-400 tracking-wide">
              — Fukuoka / 40代 男性
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
