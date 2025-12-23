// src/components/hero/FooterSP.jsx
export default function FooterSP() {
  return (
    <footer
      className="
        lg:hidden
        w-full py-20
        bg-black text-white
        relative overflow-hidden select-none
      "
    >
      {/* --- 上のフェードライン（SP用に控えめ） --- */}
      <div
        className="
          absolute top-0 left-1/2 -translate-x-1/2
          w-[1px] h-24
          bg-gradient-to-b from-amber-300/40 to-transparent
          opacity-80 blur-[0.4px]

          [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]
          [-webkit-mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]
        "
      />

      {/* --- 中身 --- */}
      <div className="relative z-10 max-w-[90%] mx-auto text-center">

        {/* メニュー：縦並び */}
        <nav className="mb-12">
          <ul className="flex flex-col items-center gap-5 text-[12px]">
            <li>
              <a
                href="#"
                className="text-neutral-400 hover:text-white transition tracking-[0.18em] uppercase"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-neutral-400 hover:text-white transition tracking-[0.18em] uppercase"
              >
                FAQ
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-neutral-400 hover:text-white transition tracking-[0.18em] uppercase"
              >
                Policy
              </a>
            </li>
          </ul>
        </nav>

        {/* コピーライト */}
        <p className="text-neutral-500 text-[11px] tracking-wide mb-6">
          © Noir & Lux — Shadow Series
        </p>

    <p className="text-neutral-500 text-[11px] tracking-[0.16em] mb-4">
    © 2025 Noir & Lux — Shadow Edition
  </p>

  {/* ---- GUSHIKEN DESIGN link (SP & PC共通) ---- */}
  <a
    href="https://gushikendesign.com/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Visit GUSHIKEN DESIGN Official Website"
    className="
      inline-block
      text-[10px]
      tracking-[0.18em]
      text-neutral-500/60
      hover:text-amber-200/90
      hover:tracking-[0.25em]
      transition-all duration-300
    "
  >
    GUSHIKEN DESIGN
  </a>
      </div>

      {/* 安全領域 */}
      <div className="h-[max(24px,env(safe-area-inset-bottom))]" />
    </footer>
  );
}
