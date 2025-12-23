// src/components/hero/BetweenSectionSP.jsx
import React from "react";
import bg from "../assets/between-bg.png";

export default function BetweenSectionSP() {
  return (
    <section
      className="
        lg:hidden
        relative w-full
        min-h-[65svh]
        overflow-hidden
        bg-black
      "
    >
      {/* === 背景 === */}
      <img
        src={bg}
        alt="shadow waves"
        className="
          w-full h-full object-cover
          opacity-[0.70]
          scale-[1.10]
        "
      />

      {/* === 上グラデ（濃い → 馴染ませる） === */}
      <div
        className="
          absolute top-0 inset-x-0 h-[45%]
          bg-gradient-to-b
          from-black via-black/75 to-transparent
        "
      />

      {/* === 下グラデ（次セクションの黒へ沈める） === */}
      <div
        className="
          absolute bottom-0 inset-x-0 h-[48%]
          bg-gradient-to-t
          from-black via-black/70 to-transparent
        "
      />
    </section>
  );
}
