"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";

const videos = [
  "/videos-section/compressed_work1.mp4",
  "/videos-section/compressed_work2.mp4",
  "/videos-section/compressed_work3.mp4",
  "/videos-section/compressed_work4.mp4",
  "/videos-section/compressed_work5.mp4",
  "/videos-section/compressed_work6.mp4",
  "/videos-section/compressed_work7.mp4",
  "/videos-section/compressed_work8.mp4",
  "/videos-section/compressed_work9.mp4",
  "/videos-section/compressed_work10.mp4",
  "/videos-section/compressed_work11.mp4",
  "/videos-section/compressed_work12.mp4",
  "/videos-section/compressed_work13.mp4",
  "/videos-section/compressed_work14.mp4",
  "/videos-section/compressed_work15.mp4",
  "/videos-section/compressed_work16.mp4",
  "/videos-section/compressed_work17.mp4",
];

export default function OurWork() {
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
    <section className="min-h-screen bg-transparent text-white py-14 overflow-hidden">
      {/* Header */}
      <div className="w-[82%] mx-auto mb-20 flex justify-between items-end">
        <p className="text-md text-gray-400 max-w-[460px] leading-relaxed ml-25 pb-25">
          Some people create content. We create obsession. Every project we
          touch turns into something that refuses to be ignored, lives rent-free
          in people’s minds, and makes competitors refresh your page wondering
          how you did it.
        </p>

        <h2 className="text-[120px] font-semibold tracking-tight">
          OUR <br /> WORKs
        </h2>
      </div>

      {/* Carousel */}
      <div className="relative w-full max-w-[1500px] h-[480px] mx-auto flex items-center justify-center">
        {[-2, -1, 0, 1, 2].map((offset) => {
          const index = getIndex(offset);
          const src = videos[index];
          const poster = src.replace(/\.(mp4|MP4|mov|MOV)$/, ".webp");
          const isPlaying = playingIndex === index;

          const styleMap = {
            "-2": "translate-x-[-560px] translate-y-[-70px] rotate-[7deg] scale-[0.98] opacity-80 z-10",
            "-1": "translate-x-[-280px] translate-y-[-30px] rotate-[-6deg] scale-[1] opacity-85 z-20",
            "0": "translate-x-0 translate-y-[35px] rotate-0 scale-[1.08] z-30",
            "1": "translate-x-[300px] translate-y-[-20px] rotate-[-6deg] scale-[0.9] opacity-85 z-20",
            "2": "translate-x-[560px] translate-y-[-40px] rotate-[2deg] scale-[0.98] opacity-80 z-10",
          };

          return (
            <div
              key={index}
              onClick={() => {
                if (offset === 0) setPlayingIndex(index); // Only center card playable
              }}
              className={`group absolute w-[280px] h-[440px] rounded-[28px] overflow-hidden transition-all duration-700 ease-out shadow-2xl cursor-pointer ${styleMap[offset.toString() as keyof typeof styleMap]}`}
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

                  {/* Play Overlay */}
                  {offset === 0 && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/10">
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

      {/* Arrows */}
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
    </section>
  );
}
