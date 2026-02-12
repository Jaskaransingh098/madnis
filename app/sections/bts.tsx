"use client";

import { useEffect, useMemo, useRef } from "react";
import gsap from "gsap";
import { motion } from "framer-motion";



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
  // "/bts/compressed_12.mp4",
];



const heights = [
  "h-[160px]",
  "h-[200px]",
  "h-[240px]",
  "h-[280px]",
  "h-[320px]",
  "h-[360px]",
];


const generateRandomHeights = (count: number) => {
  return Array.from({ length: count }, () => {
    return heights[Math.floor(Math.random() * heights.length)];
  });
};

export default function BtsMasonry() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<gsap.core.Tween | null>(null);


  const randomHeights = useMemo(
    () => generateRandomHeights(videos.length),
    []
  );

  useEffect(() => {
    if (!scrollRef.current) return;

    const width = scrollRef.current.scrollWidth / 2;

    animationRef.current = gsap.to(scrollRef.current, {
      x: -width,
      duration: 25,
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
    <section className="bg-black py-24 overflow-hidden">
      <div className="w-full mx-auto px-6">
        <h2 className="text-white text-4xl md:text-5xl font-bold mb-16">
          Behind The Scenes
        </h2>

        <div className="overflow-hidden">
          <div ref={scrollRef} className="flex gap-6 w-max">

            {/* Duplicate for infinite scroll */}
            {[...Array(2)].map((_, dup) => (
              <div key={dup} className="flex gap-6">

                {splitIntoColumns(videos, randomHeights).map(
                  (column, colIndex) => (
                    <div
                      key={colIndex}
                      className="flex flex-col gap-6 w-[240px]"
                    >
                      {column.map((item, i) => (
                        <VideoCard
                          key={i}
                          src={item.src}
                          height={item.height}
                          pause={pause}
                          play={play}
                        />
                      ))}
                    </div>
                  )
                )}

              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}



function splitIntoColumns(
  videos: string[],
  heights: string[],
  columnCount = 4
): Array<Array<{ src: string; height: string }>> {
  const columns: Array<Array<{ src: string; height: string }>> = Array.from(
    { length: columnCount },
    () => []
  );

  videos.forEach((video, index) => {
    columns[index % columnCount].push({
      src: video,
      height: heights[index],
    });
  });

  return columns;
}



function VideoCard({
  src,
  height,
  pause,
  play,
}: {
  src: string;
  height: string;
  pause: () => void;
  play: () => void;
}) {
  return (
    <motion.div
      onMouseEnter={pause}
      onMouseLeave={play}
      whileHover={{ scale: 1.05 }}
      className={`rounded-2xl overflow-hidden shadow-xl ${height}`}
    >
      <video
        src={src}
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover"
      />
    </motion.div>
  );
}
