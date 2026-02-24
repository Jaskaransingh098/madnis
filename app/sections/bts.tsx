"use client";

import { useState } from "react";
import { Play, ChevronLeft, ChevronRight } from "lucide-react";

const videos = [
  "/bts/compressed_1.mp4",
  "/bts/compressed_2.MOV",
  "/bts/compressed_3.MP4",
  "/bts/compressed_4.MP4",
  "/bts/compressed_5.MOV",
  "/bts/compressed_6.MOV",
  "/bts/compressed_7.MOV",
  "/bts/compressed_8.MOV",
  "/bts/compressed_9.MOV",
  "/bts/compressed_10.MOV",
  "/bts/compressed_11.MOV",
];

export default function OurWork({ id }: { id?: string }) {
  const [centerIndex, setCenterIndex] = useState(2);
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);

  const getIndex = (offset: number) =>
    (centerIndex + offset + videos.length) % videos.length;

  const prev = () => {
    setPlayingIndex(null);
    setCenterIndex((p) => (p - 1 + videos.length) % videos.length);
  };

  const next = () => {
    setPlayingIndex(null);
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
            const poster = src.replace(/\.(mp4|MP4|mov|MOV)$/, ".webp");
            const isPlaying = playingIndex === index;

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
                onClick={() => {
                  if (offset === 0) setPlayingIndex(index);
                }}
                className={`group absolute w-[280px] h-[440px] rounded-[28px] overflow-hidden transition-all duration-700 ease-out shadow-2xl cursor-pointer ${
                  styleMap[offset.toString() as keyof typeof styleMap]
                }`}
              >
                {isPlaying ? (
                  <video
                    src={src}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="none"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <>
                    <img
                      src={poster}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />

                    {offset === 0 && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                        <Play
                          size={46}
                          className="text-white opacity-70 transition-all duration-300 group-hover:opacity-100 group-hover:scale-110"
                        />
                      </div>
                    )}
                  </>
                )}
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
