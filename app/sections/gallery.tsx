"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import gsap from "gsap";
import { motion } from "framer-motion";
import { Pause, Play, Volume2, VolumeX, X } from "lucide-react";

const images = Array.from(
  { length: 25 },
  (_, i) => `/gallery/${i + 2}-web.jpg`,
);

const aspectRatios = [
  "aspect-[3/4]",
  "aspect-[4/5]",
  "aspect-[1/1]",
  "aspect-[9/16]",
  "aspect-[4/3]",
];

const generateRandomRatios = (count: number) =>
  Array.from(
    { length: count },
    () => aspectRatios[Math.floor(Math.random() * aspectRatios.length)],
  );

export default function BtsMasonry({ id }: { id?: string }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<gsap.core.Tween | null>(null);
  const [activeImage, setActiveImage] = useState<string | null>(null);

  const randomRatios = useMemo(() => generateRandomRatios(images.length), []);

  useEffect(() => {
    if (!scrollRef.current) return;

    const width = scrollRef.current.scrollWidth / 2;

    animationRef.current = gsap.to(scrollRef.current, {
      x: -width,
      duration: 75,
      ease: "none",
      repeat: -1,
    });

    return () => {
      animationRef.current?.kill();
    };
  }, []);

  const pause = () => animationRef.current?.pause();
  const play = () => animationRef.current?.play();

  return (
    <section id={id} className="bg-transparent py-24 overflow-hidden">
      <div className="w-full mx-auto px-6">
        <div className="max-w-7xl mx-auto mb-24 text-white px-4">
          {/* Small Label */}
          <div className="mb-6">
            <span className="uppercase text-sm tracking-[0.3em] text-[#FFD700]">
              Our Creative Work
            </span>
          </div>

          {/* Main Heading */}
          <div className="grid md:grid-cols-2 gap-12 items-end">
            <h1 className="text-5xl md:text-6xl font-serif font-medium leading-tight">
              Crafting Content That <br />
              <span className="text-[#FFD700] font-sans font-semibold">
                Shouts Magic
              </span>{" "}
              & Success
            </h1>

            <p className="text-gray-400 text-lg leading-relaxed md:text-right max-w-md md:ml-auto">
              We blend storytelling, visual excellence, and strategic precision
              to create content that not only captures attention — but drives
              measurable growth and lasting impact.
            </p>
          </div>
        </div>

        <div className="overflow-hidden">
          <div ref={scrollRef} className="flex gap-6 w-max">
            {[...Array(2)].map((_, dup) => (
              <div key={dup} className="flex gap-6">
                {splitIntoColumns(images, randomRatios).map(
                  (column, colIndex) => (
                    <div
                      key={colIndex}
                      className={`flex flex-col gap-6 w-[240px] ${
                        colIndex % 2 === 0 ? "mt-10" : ""
                      }`}
                    >
                      {column.map((item, i) => (
                        <ImageCard
                          key={i}
                          src={item.src}
                          ratio={item.ratio}
                          pause={pause}
                          play={play}
                          onOpen={setActiveImage}
                        />
                      ))}
                    </div>
                  ),
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {activeImage && (
        <ImageModal src={activeImage} onClose={() => setActiveImage(null)} />
      )}
    </section>
  );
}
function splitIntoColumns(
  images: string[],
  ratios: string[],
  columnCount = 4,
  rowsPerColumn = 2,
): Array<Array<{ src: string; ratio: string }>> {
  const columns: Array<Array<{ src: string; ratio: string }>> = [];

  const itemsPerGroup = columnCount * rowsPerColumn;

  for (let i = 0; i < images.length; i += itemsPerGroup) {
    const group = images.slice(i, i + itemsPerGroup);

    for (let col = 0; col < columnCount; col++) {
      const columnItems = group.slice(
        col * rowsPerColumn,
        col * rowsPerColumn + rowsPerColumn,
      );

      if (columnItems.length > 0) {
        columns.push(
          columnItems.map((img, index) => ({
            src: img,
            ratio: ratios[i + col * rowsPerColumn + index],
          })),
        );
      }
    }
  }

  return columns;
}

function ImageCard({
  src,
  ratio,
  pause,
  play,
  onOpen,
}: {
  src: string;
  ratio: string;
  pause: () => void;
  play: () => void;
  onOpen: (src: string) => void;
}) {
  return (
    <motion.div
      onMouseEnter={pause}
      onMouseLeave={play}
      onClick={() => onOpen(src)}
      whileHover={{ scale: 1.05 }}
      className={`group relative w-[240px] ${ratio} rounded-2xl overflow-hidden shadow-xl cursor-pointer`}
    >
      <img
        src={src}
        alt="Gallery"
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all duration-300" />
    </motion.div>
  );
}

function ImageModal({ src, onClose }: { src: string; onClose: () => void }) {
  useEffect(() => {
    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onEscape);
    return () => window.removeEventListener("keydown", onEscape);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4"
      onClick={onClose}
    >
      <div className="max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
        <div className="flex justify-end mb-4">
          <button
            onClick={onClose}
            className="rounded-full border border-white/20 p-2 text-white hover:bg-white/10 transition"
          >
            <X size={18} />
          </button>
        </div>

        <img
          src={src}
          alt="Preview"
          className="w-full max-h-[80vh] object-contain rounded-2xl"
        />
      </div>
    </div>
  );
}
