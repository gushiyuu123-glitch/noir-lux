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

      {/* ---- 上のフェードライン（高級ブランドの締め） ---- */}
      <div
        className="
          absolute top-0 left-1/2 -translate-x-1/2
          w-[1px] h-32
          bg-gradient-to-b from-amber-300/60 to-transparent
          blur-[0.5px]
        "
      />

      {/* ---- 中身 ---- */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 text-center">

        {/* メニュー（ミニマル） */}
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
        <p className="text-neutral-500 text-[12px] tracking-wider">
          © Noir & Lux — Shadow Series
        </p>
      </div>
    </footer>
  );
}
