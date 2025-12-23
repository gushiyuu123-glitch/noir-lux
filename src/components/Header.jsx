// src/components/Header.jsx
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function Header() {
  const headerRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);

  // スクロールでサイズ変更
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    gsap.to(headerRef.current, {
      height: scrolled ? 58 : 80,
      duration: 0.35,
      ease: "power2.out",
    });
  }, [scrolled]);

  // ---- スムーススクロール関数 ----
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    window.scrollTo({
      top: el.offsetTop - 40, // ヘッダー分の余白
      behavior: "smooth",
    });
  };

  return (
    <header
      ref={headerRef}
      className="
        fixed top-0 left-0 w-full 
        z-50 bg-black/70 backdrop-blur-[6px]
        border-b border-amber-300/10
      "
    >
      <div className="max-w-[1500px] mx-auto px-8 h-full flex items-center justify-between">

        {/* Logo */}
        <h1
          className="
            text-[18px] tracking-[0.32em] uppercase 
            text-white font-light select-none
          "
        >
          Noir & Lux
        </h1>

        {/* Navigation */}
        <nav className="hidden lg:flex items-center gap-12">

          <button
            onClick={() => scrollToSection("mission")}
            className="nav-btn"
          >
            Mission
          </button>

          <button
            onClick={() => scrollToSection("collection")}
            className="nav-btn"
          >
            Collection
          </button>

          <button
            onClick={() => scrollToSection("features")}
            className="nav-btn"
          >
            Features
          </button>

          <button
            onClick={() => scrollToSection("size")}
            className="nav-btn"
          >
            Size Guide
          </button>

          <button
            onClick={() => scrollToSection("cta")}
            className="nav-btn"
          >
            Buy
          </button>

        </nav>
      </div>

      {/* 下の金ライン */}
      <div
        className="
          absolute bottom-0 left-0 w-full h-[1px]
          bg-gradient-to-r 
          from-transparent via-amber-300/40 to-transparent
        "
      />
    </header>
  );
}
