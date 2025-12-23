// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer
      className="
        w-full py-20
        bg-black text-white
        relative overflow-hidden select-none
      "
    >
      {/* ---- 上のフェードライン ---- */}
      <div
        className="
          absolute top-0 left-1/2 -translate-x-1/2
          w-[1px] h-32
          bg-gradient-to-b from-amber-300/60 to-transparent
          blur-[0.5px]
        "
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 text-center">

        {/* メニュー */}
        <nav className="mb-10">
          <ul className="flex items-center justify-center gap-10 text-[13px]">
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
        <p className="text-neutral-500 text-[12px] tracking-wider mb-6">
          © Noir & Lux — Shadow Series
        </p>

        {/* ---- GUSHIKEN DESIGN link ---- */}
        <a
          href="https://gushikendesign.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="
            block
            text-[11px]
            tracking-[0.22em]
            text-neutral-500/60
            hover:text-amber-200 hover:tracking-[0.28em]
            transition-all duration-300
          "
        >
          GUSHIKEN DESIGN
        </a>
      </div>
    </footer>
  );
}
