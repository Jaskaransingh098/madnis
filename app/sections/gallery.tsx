"use client";

import { useState, useMemo } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const allImages = Array.from(
  { length: 25 },
  (_, i) => `/gallery/${i + 2}-web.jpg`,
);

const BATCH_SIZE = 8;

export default function Gallery({ id }: { id?: string }) {
  const [batchIndex, setBatchIndex] = useState(0);

  const totalBatches = Math.ceil(allImages.length / BATCH_SIZE);

  const visibleImages = useMemo(() => {
    const start = batchIndex * BATCH_SIZE;
    return allImages.slice(start, start + BATCH_SIZE);
  }, [batchIndex]);

  const goLeft = () => {
    setBatchIndex((prev) => (prev === 0 ? totalBatches - 1 : prev - 1));
  };

  const goRight = () => {
    setBatchIndex((prev) => (prev === totalBatches - 1 ? 0 : prev + 1));
  };

  return (
    <section id={id} className="relative w-full bg-transparent text-white py-28 overflow-hidden">
      {/* Heading */}
      <div className="text-center mb-20 px-4">
        <h1 className="text-5xl md:text-6xl font-serif font-medium leading-tight">
          Crafting Content that{" "}
          <span className="text-[#FFD700] font-sans font-semibold tracking-wide">
            Shouts Magic
          </span>{" "}
          and Success
        </h1>
      </div>

      {/* Arrows */}
      <button
        onClick={goLeft}
        className="absolute left-10 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-md p-3 rounded-full transition"
      >
        <ChevronLeft size={28} />
      </button>

      <button
        onClick={goRight}
        className="absolute right-10 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-md p-3 rounded-full transition"
      >
        <ChevronRight size={28} />
      </button>

      {/* Collage Layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-4 gap-6 px-6 transition-opacity duration-500">
        {visibleImages.map((src, index) => {
          const isHero = index === 0;

          return (
            <div
              key={src}
              className={`relative overflow-hidden rounded-xl shadow-2xl border border-white/10 transition-all duration-500
                ${isHero ? "col-span-2 row-span-2 h-[520px]" : ""}
                ${
                  !isHero &&
                  ["h-[220px]", "h-[260px]", "h-[300px]", "h-[340px]"][
                    index % 4
                  ]
                }
              `}
            >
              <img
                src={src}
                loading="lazy"
                className="w-full h-full object-cover"
                alt=""
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
