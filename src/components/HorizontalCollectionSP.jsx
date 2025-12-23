// src/components/hero/HorizontalCollectionSP.jsx
import { useEffect, useRef } from "react";
import gsap from "gsap";

import bgTexture from "../assets/shadow-wall-bg3.png";
import p1 from "../assets/1.png";
import p2 from "../assets/2.png";
import p3 from "../assets/3.png";
import p4 from "../assets/4.png";
import p5 from "../assets/5.png";

const ITEMS = [
  {
    id: 1,
    name: "Noir Frame 01",
    note: "Ultra-Light Metal / Anti-Glare Coat",
    price: "¥32,000",
    img: p1,
    tag: "PICKUP",
    href: "/product/noir-frame-01",
  },
  {
    id: 2,
    name: "Noir Frame 02",
    note: "0.1mm Precision / Pressure-Free Fit",
    price: "¥34,000",
    img: p2,
    tag: "NEW",
    href: "/product/noir-frame-02",
  },
  {
    id: 3,
    name: "Noir Frame 03",
    note: "Skin-Tone Enhance Lens / UV 99%",
    price: "¥33,000",
    img: p3,
    tag: "SIGNATURE",
    href: "/product/noir-frame-03",
  },
  {
    id: 4,
    name: "Noir Frame 04",
    note: "Durability Core / Reinforced Hinge",
    price: "¥35,000",
    img: p4,
    tag: "LIMITED",
    href: "/product/noir-frame-04",
  },
  {
    id: 5,
    name: "Noir Frame 05",
    note: "Stylish / Move",
    price: "¥35,000",
    img: p5,
    tag: "STYLE",
    href: "/product/noir-frame-05",
  },
];

export default function HorizontalCollectionSP() {
  const rootRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      rootRef.current.querySelectorAll("[data-reveal]"),
      { opacity: 0, y: 24 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.15,
        duration: 1,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <section
      ref={rootRef}
      className="
        lg:hidden
        relative w-full
        bg-black text-white
        pt-20 pb-24
        overflow-hidden select-none
      "
    >
      {/* 背景テクスチャ */}
      <div className="absolute inset-0 opacity-[0.16] -z-10">
        <img
          src={bgTexture}
          alt="texture"
          className="w-full h-full object-cover scale-[1.1]"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/75 -z-10" />

      {/* 見出し */}
      <div className="px-6 text-center mb-12">
        <p
          data-reveal
          className="uppercase text-[11px] tracking-[0.34em] text-neutral-400"
        >
          Collection
        </p>
        <h2
          data-reveal
          className="mt-3 text-[26px] font-light tracking-wide"
        >
          A line of shadow.
        </h2>
        <p
          data-reveal
          className="mt-4 text-[13px] text-neutral-300 leading-[1.85] max-w-[86%] mx-auto"
        >
          光を抑え、輪郭を整える。影の設計思想をベースにした Noir & Lux のコレクション。
        </p>
      </div>

      {/* 横スワイプエリア */}
      <div className="relative px-0">
        <div
          className="
            flex gap-8
            overflow-x-auto
            snap-x snap-mandatory
            px-6
            scrollbar-none
          "
        >
          {ITEMS.map((item, i) => (
            <a
              key={i}
              href={item.href}
              className="
                relative snap-start
                w-[80vw] max-w-[420px]
                h-[68vh] min-h-[480px]
                flex-shrink-0
                overflow-hidden
                border border-white/10
                bg-black/40
                shadow-[0_30px_90px_rgba(0,0,0,0.7)]
                backdrop-blur-[2px]
              "
            >
              {/* 画像 */}
              <img
                src={item.img}
                alt={item.name}
                className="
                  absolute inset-0
                  w-full h-full object-cover
                  scale-[1.03]
                  brightness-[0.9]
                "
              />

              {/* 下のフェード */}
              <div className="absolute inset-x-0 bottom-0 h-[55%] bg-gradient-to-b from-transparent to-black/90" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-black/25" />

              {/* タグ */}
              <span
                className="
                  absolute left-5 top-5
                  inline-flex items-center
                  text-[10px] tracking-[0.32em] uppercase
                  text-amber-300/90 border border-amber-300/25
                  px-3 py-1.5
                  bg-black/40 backdrop-blur-[2px]
                "
              >
                {item.tag}
              </span>

              {/* テキスト */}
              <div className="absolute left-5 right-5 bottom-5">
                <p className="text-[18px] font-light tracking-wide text-white/90">
                  {item.name}
                </p>
                <p className="mt-1 text-[13px] text-neutral-300 leading-[1.7]">
                  {item.note}
                </p>
                <p className="mt-2 text-[13px] text-neutral-400">{item.price}</p>
              </div>
            </a>
          ))}

          {/* 右側余白（呼吸） */}
          <div className="w-[12vw] flex-shrink-0" />
        </div>
      </div>

      {/* 下の導線 */}
      <div className="mt-10 px-6 text-right">
        <a
          href="/collections/all"
          className="text-[11px] tracking-[0.28em] uppercase text-neutral-400 border-b border-white/20 pb-1"
        >
          View All Collection →
        </a>
      </div>
    </section>
  );
}
