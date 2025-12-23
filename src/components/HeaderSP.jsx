// src/components/hero/HeaderSP.jsx
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function HeaderSP() {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // スクロールで背景変化
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    gsap.to(headerRef.current, {
      backgroundColor: scrolled ? "rgba(0,0,0,0.75)" : "rgba(0,0,0,0.25)",
      backdropFilter: scrolled ? "blur(8px)" : "blur(4px)",
      duration: 0.35,
      ease: "power2.out",
    });
  }, [scrolled]);

  // MENU アニメ
  useEffect(() => {
    if (open) {
      gsap.fromTo(
        menuRef.current,
        { opacity: 0, y: -20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.45,
          ease: "power3.out",
          pointerEvents: "auto",
        }
      );
    } else {
      gsap.to(menuRef.current, {
        opacity: 0,
        duration: 0.35,
        ease: "power2.out",
        pointerEvents: "none",
      });
    }
  }, [open]);

  const toggleMenu = () => setOpen((v) => !v);
  const closeMenu = () => setOpen(false);

  // ---- ページ内ジャンプ ----
  const go = (id) => {
    closeMenu();
    const el = document.getElementById(id);
    if (!el) return;
    window.scrollTo({
      top: el.offsetTop - 60,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* ---- Header ---- */}
      <header
        ref={headerRef}
        className="
          lg:hidden
          fixed top-0 left-0 w-full z-50
          px-6 h-[64px]
          flex items-center justify-between
          bg-black/30 backdrop-blur-[4px]
          border-b border-white/10
          transition-all
        "
      >
        {/* Logo */}
        <h1
          className="
            text-[15px] tracking-[0.22em] uppercase
            text-white font-light select-none
          "
        >
          Noir & Lux
        </h1>

        {/* ☰ → × 切替 */}
        <button
          onClick={toggleMenu}
          className="text-white text-[28px] select-none"
        >
          {open ? "×" : "☰"}
        </button>
      </header>

      {/* ---- MENU PANEL ---- */}
      <div
        ref={menuRef}
        className="
          lg:hidden
          fixed inset-0 z-40
          bg-black/90 backdrop-blur-[6px]
          flex flex-col items-center justify-center
          opacity-0 pointer-events-none
        "
      >
        <nav className="text-center flex flex-col gap-8">
          <button onClick={() => go("mission-sp")}>Mission</button>
<button onClick={() => go("collection-sp")}>Collection</button>
<button onClick={() => go("features-sp")}>Features</button>
<button onClick={() => go("size-sp")}>Size Guide</button>
<button onClick={() => go("cta-sp")}>Buy</button>

        </nav>
      </div>
    </>
  );
}
