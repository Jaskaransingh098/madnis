"use client";

import TextType from "../components/TextType";4
import { Monoton, Bitcount_Grid_Double } from "next/font/google";

const monoton = Monoton({
  subsets: ["latin"],
  weight: "400",
});

const Bitcount = Bitcount_Grid_Double({
  subsets: ["latin"],
  weight: "300",
});
export default function Hero() {
  return (
    <>
      <section className="hero-section relative w-full h-screen overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source
            src="/hero-section/compressed_hero-section-video.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />

        <div className="relative z-10 h-full flex items-center">
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
        </div>
        <div className="absolute bottom-50 left-[5vw] z-10">
          <button className="px-8 py-3 rounded-full border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition">
            Start Your Project
          </button>
        </div>

        <div className="pointer-events-none absolute bottom-0 left-0 w-full h-7 bg-gradient-to-b from-transparent to-black backdrop-blur-sm" />
      </section>
    </>
  );
}
