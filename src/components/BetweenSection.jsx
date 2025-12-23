// src/components/BetweenSection.jsx
import React from "react";
import bg from "../assets/between-bg.png";

export default function BetweenSection() {
  return (
    <section
      className="
        relative w-full h-[55vh]
        md:h-[70vh]
        overflow-hidden
        bg-black
      "
    >
      {/* 背景画像 */}
      <img
        src={bg}
        alt="shadow waves"
        className="
          w-full h-full object-cover
          opacity-[0.80]
          scale-[1.06]
        "
      />

      {/* ---- 上グラデ：前のセクションと馴染ませる ---- */}
      <div
        className="
          absolute top-0 left-0 w-full h-[40%]
          bg-gradient-to-b from-black via-black/60 to-transparent
        "
      />

      {/* ---- 下グラデ：次の黒背景へ自然に繋げる ---- */}
      <div
        className="
          absolute bottom-0 left-0 w-full h-[45%]
          bg-gradient-to-t from-black via-black/60 to-transparent
        "
      />
    </section>
  );
}
