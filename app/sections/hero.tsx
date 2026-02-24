"use client";

import TextType from "../components/TextType";
import { Bitcount_Grid_Double } from "next/font/google";

const Bitcount = Bitcount_Grid_Double({
  subsets: ["latin"],
  weight: "300",
});

export default function Hero({ id }: { id?: string }) {
  return (
    <section id={id} className="relative w-full h-screen overflow-hidden">
      {/* Poster Image (Instant load) */}
      <img
        src="/hero-section/hero section video-small-placeholder.webp"
        className="absolute inset-0 w-full h-full object-cover"
        alt="Hero background"
        loading="eager"
      />

      {/* Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/hero-section/hero section video-small-placeholder.webp"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/hero-section/output-web.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/80" />

      {/* Content */}
      {/* <div className="relative z-10 h-full flex items-center">
        <div className="max-w-[600px] ml-[5vw] text-white">
          <TextType
            text="Crafting Content That Screams Magic."
            texts="Where creativity meets AI intelligence and ordinary ideas disappear forever."
            typingSpeed={95}
            pauseDuration={1000}
            className={`${Bitcount.className} text-[45px]`}
            showCursor
            cursorCharacter="_"
            deletingSpeed={80}
            variableSpeed={{ min: 60, max: 120 }}
            cursorBlinkDuration={0.5}
          />
        </div>
      </div> */}

      {/* CTA */}
      {/* Center CTA */}
      <div className="absolute inset-0 z-20 flex items-end mb-40 justify-center">
        <button
          onClick={() => {
            document
              .getElementById("contact")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          className="
  relative
  px-12 py-4
  text-lg font-medium tracking-wide
  rounded-full
  bg-gradient-to-r from-[#D4AF37] via-[#E6C76B] to-[#C9A227]
  text-black
  border border-white/20
  backdrop-blur-xl
  shadow-[0_10px_40px_rgba(212,175,55,0.35)]
  before:absolute before:inset-0 before:rounded-full
  before:bg-white/10 before:opacity-0
  hover:before:opacity-100
  hover:scale-105
  hover:shadow-[0_15px_60px_rgba(212,175,55,0.6)]
  transition-all duration-500 ease-out
"
        >
          Start Your Madnis Journey
        </button>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 w-full h-7 bg-gradient-to-b from-transparent to-black backdrop-blur-sm" />
    </section>
  );
}
