"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const videos = [
  "/bts/compressed_1_1MB.mp4",
  "/bts/compressed_2_1MB.mp4",
  "/bts/compressed_3_1MB.mp4",
  "/bts/compressed_4_1MB.mp4",
  "/bts/compressed_5_1MB.mp4",
  "/bts/compressed_6_1MB.mp4",
  "/bts/compressed_7_1MB.mp4",
  "/bts/compressed_8_1MB.mp4",
  "/bts/compressed_9_1MB.mp4",
  "/bts/compressed_10_1MB.mp4",
  "/bts/compressed_11_1MB.mp4",
];

export default function OurWork({ id }: { id?: string }) {
  const [centerIndex, setCenterIndex] = useState(2);

  const getIndex = (offset: number) =>
    (centerIndex + offset + videos.length) % videos.length;

  const prev = () => {
    setCenterIndex((p) => (p - 1 + videos.length) % videos.length);
  };

  const next = () => {
    setCenterIndex((p) => (p + 1) % videos.length);
  };

  return (
    <section id={id} className="py-24 bg-transparent overflow-hidden">
      <div className="w-full px-6">
        <div className="max-w-7xl mx-auto mb-24 grid md:grid-cols-2 items-start gap-10">
          {/* LEFT PARAGRAPH */}
          <div>
            <p className="text-gray-400 text-lg leading-relaxed max-w-md">
              Every frame tells a story. From creative direction to final
              execution, our behind-the-scenes moments capture the energy,
              precision, and passion that shape every production we craft.
            </p>
          </div>

          {/* RIGHT TITLE */}
          <div className="md:text-right">
            <h2 className="text-white text-5xl md:text-7xl font-semibold tracking-tight">
              BEHIND THE SCENES
            </h2>
          </div>
        </div>

        {/* STACKED CAROUSEL */}
        <div className="relative w-full max-w-[1500px] h-[480px] mx-auto flex items-center justify-center">
          {[-2, -1, 0, 1, 2].map((offset) => {
            const index = getIndex(offset);
            const src = videos[index];
            const poster = src
              .replace("_1MB", "")
              .replace(/\.(mp4|MP4|mov|MOV)$/, ".webp");

            const styleMap = {
              "-2": "translate-x-[-560px] translate-y-[-70px] rotate-[7deg] scale-[0.95] opacity-60 z-10",
              "-1": "translate-x-[-280px] translate-y-[-30px] rotate-[-6deg] scale-[1] opacity-80 z-20",
              "0": "translate-x-0 translate-y-[35px] rotate-0 scale-[1.08] z-30",
              "1": "translate-x-[300px] translate-y-[-20px] rotate-[-6deg] scale-[0.95] opacity-80 z-20",
              "2": "translate-x-[560px] translate-y-[-40px] rotate-[4deg] scale-[0.9] opacity-60 z-10",
            };

            return (
              <div
                key={index}
                className={`group absolute w-[280px] h-[440px] rounded-[28px] overflow-hidden transition-all duration-700 ease-out shadow-2xl cursor-pointer ${
                  styleMap[offset.toString() as keyof typeof styleMap]
                }`}
              >
                <video
                  src={src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover"
                />
              </div>
            );
          })}
        </div>

        {/* ARROWS */}
        <div className="flex justify-center gap-6 mt-20">
          <button
            onClick={prev}
            className="w-14 h-14 border border-white/40 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition"
          >
            <ChevronLeft />
          </button>

          <button
            onClick={next}
            className="w-14 h-14 border border-white/40 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}
