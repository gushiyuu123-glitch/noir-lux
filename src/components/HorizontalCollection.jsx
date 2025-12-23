// src/components/HorizontalCollection.jsx
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// --- 仮画像（差し替えOK） ---
import p1 from "../assets/1.png";
import p2 from "../assets/2.png";
import p3 from "../assets/3.png";
import p4 from "../assets/4.png";
import p5 from "../assets/5.png";

// 背景テクスチャ（Missionと統一）
import bgTexture from "../assets/shadow-wall-bg3.png";

/**
 * Noir & Lux — Horizontal Collection（海外ブランド系）
 * --------------------------------------------------
 * ・フルワイド1行 × 横スクロール
 * ・縦スクロールで「横に進む」(ScrollTrigger pin)
 * ・影のレール背景 + 上下グラデで継ぎ目を消す
 * ・カードは角丸なし（シャープ）
 * ・下フェードで高級感
 */

const ITEMS = [
  {
    id: "noir-frame-01",
    name: "Noir Frame 01",
    note: "Ultra-Light Metal / Anti-Glare Coat",
    price: "¥32,000",
    img: p1,
    href: "/product/noir-frame-01",
    tag: "PICKUP",
  },
  {
    id: "noir-frame-02",
    name: "Noir Frame 02",
    note: "0.1mm Precision / Pressure-Free Fit",
    price: "¥34,000",
    img: p2,
    href: "/product/noir-frame-02",
    tag: "NEW",
  },
  {
    id: "noir-frame-03",
    name: "Noir Frame 03",
    note: "Skin-Tone Enhance Lens / UV 99%",
    price: "¥33,000",
    img: p3,
    href: "/product/noir-frame-03",
    tag: "SIGNATURE",
  },
  {
    id: "noir-frame-04",
    name: "Noir Frame 04",
    note: "Durability Core / Reinforced Hinge",
    price: "¥35,000",
    img: p4,
    href: "/product/noir-frame-04",
    tag: "LIMITED",
  },
    {
    id: "noir-frame-05",
    name: "Noir Frame 05",
    note: "Stylish / Move",
    price: "¥35,000",
    img: p5,
    href: "/product/noir-frame-05",
    tag: "style",
  },
];

export default function HorizontalCollection() {
  const rootRef = useRef(null);
  const pinRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    const pin = pinRef.current;
    const track = trackRef.current;
    if (!root || !pin || !track) return;

    const ctx = gsap.context(() => {
      // 横移動距離（track全幅 - 画面幅）
      const getDistance = () => Math.max(0, track.scrollWidth - pin.clientWidth);

      // 1) ふわっと入場（高級：控えめ）
      gsap.fromTo(
        root.querySelectorAll("[data-reveal]"),
        { opacity: 0, y: 18 },
        {
          opacity: 1,
          y: 0,
          duration: 1.1,
          ease: "power3.out",
          stagger: 0.08,
          scrollTrigger: {
            trigger: root,
            start: "top 75%",
          },
        }
      );

      // 2) 縦スクロール → 横スクロール（pin）
      const st = ScrollTrigger.create({
        trigger: root,
        start: "top top",
        end: () => `+=${getDistance() + window.innerWidth * 0.6}`, // 少し余韻
        pin: pin,
        scrub: 1.15, // ゆっくり
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const dist = getDistance();
          gsap.to(track, {
            x: -dist * self.progress,
            duration: 0.05,
            ease: "none",
            overwrite: true,
          });
        },
      });

      // 3) 背景テクスチャの“微揺らぎ”（0.5%）
      gsap.to(root.querySelector("[data-bg]"), {
        x: -18,
        y: 10,
        scale: 1.06,
        duration: 18,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });

      return () => {
        st.kill();
      };
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      className="
        relative w-full
        bg-black text-white
        overflow-hidden select-none
      "
    >
      {/* ---- 背景テクスチャ（統一） ---- */}
      <div className="absolute inset-0 opacity-[0.18] pointer-events-none">
        <img
          data-bg
          src={bgTexture}
          alt="shadow texture"
          className="w-full h-full object-cover scale-[1.1]"
        />
      </div>

      {/* 上下の継ぎ目消し（重要） */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-[18vh] bg-gradient-to-b from-black via-black/70 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-[22vh] bg-gradient-to-t from-black via-black/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/30 to-black/65" />
      </div>

      {/* ---- pinエリア（ここが固定されて横に流れる） ---- */}
      <div ref={pinRef} className="relative h-[92vh] min-h-[720px]">
        {/* 見出し（上に固定） */}
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 pt-20">
          <div data-reveal className="flex items-end justify-between gap-6">
            <div>
              <p className="uppercase text-[12px] tracking-[0.34em] text-neutral-400">
                Collection
              </p>
              <h2 className="mt-3 text-[34px] md:text-[42px] font-light tracking-[0.04em]">
                A line of shadow.
              </h2>
            </div>

            {/* “他にもある感” の偽リンク */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href="/collections/all"
                className="
                  text-[12px] tracking-[0.24em] uppercase
                  text-neutral-300 hover:text-white transition
                  border-b border-white/25 hover:border-white/70
                  pb-1
                "
              >
                View All
              </a>
              <a
                href="/collections/shadow-series"
                className="
                  text-[12px] tracking-[0.24em] uppercase
                  text-neutral-500 hover:text-neutral-200 transition
                "
              >
                Shadow Series
              </a>
            </div>
          </div>

          {/* サブ文（Aesop系の静けさ） */}
          <p
            data-reveal
            className="mt-6 max-w-[620px] text-[14px] leading-[1.9] text-neutral-300"
          >
            光を抑え、輪郭を整える。軽さ・耐久性・視界の澄みまで、造形を裏側から支えるための機能を積んだコレクション。
          </p>
        </div>

        {/* ---- 横トラック ---- */}
        <div className="relative z-10 mt-14">
          <div
            ref={trackRef}
            className="
              flex gap-10
              px-6
              will-change-transform
            "
            style={{ width: "max-content" }}
          >
            {/* 先頭の“余白ブロック”で呼吸を作る */}
            <div className="w-[6vw] min-w-[64px]" />

            {ITEMS.map((it) => (
              <a
                key={it.id}
                href={it.href}
                className="
                  group relative
                  block
                  w-[72vw] max-w-[520px]
                  h-[62vh] min-h-[520px] max-h-[640px]
                  overflow-hidden
                  border border-white/10
                  bg-black/35
                  backdrop-blur-[2px]
                  shadow-[0_40px_120px_rgba(0,0,0,0.75)]
                "
              >
                {/* 画像 */}
                <img
                  src={it.img}
                  alt={it.name}
                  className="
                    absolute inset-0
                    w-full h-full object-cover
                    scale-[1.02]
                    brightness-[0.92] contrast-[1.06]
                    transition duration-700
                    group-hover:scale-[1.06]
                    group-hover:brightness-[1.02]
                  "
                />

                {/* 下フェード（高級の鉄板） */}
                <div className="absolute inset-x-0 bottom-0 h-[55%] bg-gradient-to-b from-transparent to-black/90" />

                {/* 上の薄影（締まる） */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-black/25" />

                {/* タグ */}
                <div className="absolute left-6 top-6">
                  <span
                    className="
                      inline-flex items-center
                      text-[11px] tracking-[0.32em] uppercase
                      text-amber-300/90
                      border border-amber-300/30
                      px-4 py-2
                      bg-black/35
                      backdrop-blur-[2px]
                    "
                  >
                    {it.tag}
                  </span>
                </div>

                {/* テキスト */}
                <div className="absolute left-6 right-6 bottom-6">
                  <div className="flex items-end justify-between gap-6">
                    <div>
                      <p className="text-[18px] font-light tracking-[0.04em] text-white/92">
                        {it.name}
                      </p>
                      <p className="mt-2 text-[13px] text-neutral-300 leading-[1.7]">
                        {it.note}
                      </p>
                    </div>
                    <p className="text-[13px] tracking-[0.08em] text-neutral-300">
                      {it.price}
                    </p>
                  </div>

                  {/* 偽リンク：他カテゴリ */}
                  <div className="mt-5 flex items-center gap-5">
                    <span className="h-px flex-1 bg-white/10" />
                    <span className="text-[11px] tracking-[0.28em] uppercase text-neutral-500 group-hover:text-neutral-300 transition">
                      Explore →
                    </span>
                  </div>
                </div>
              </a>
            ))}

            {/* 最後の“余白ブロック” */}
            <div className="w-[10vw] min-w-[120px]" />
          </div>
        </div>

        {/* 下部の補助導線（スマホでも“他にもある”を伝える） */}
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 mt-12">
          <div className="flex items-center justify-between text-[12px] tracking-[0.22em] uppercase">
            <a
              href="/collections/all"
              className="text-neutral-300 hover:text-white transition border-b border-white/20 hover:border-white/70 pb-1"
            >
              View All Collection
            </a>
            <span className="text-neutral-600 hidden md:inline">
              Scroll to slide
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
