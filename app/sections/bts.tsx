"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import gsap from "gsap";
import { motion } from "framer-motion";
import { Pause, Play, Volume2, VolumeX, X } from "lucide-react";



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
  const [activeVideo, setActiveVideo] = useState<string | null>(null);


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

  const handleOpenVideo = (src: string) => {
    setActiveVideo(src);
    pause();
  };

  const handleCloseVideo = () => {
    setActiveVideo(null);
    play();
  };

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
                          onOpen={handleOpenVideo}
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

      {activeVideo && (
        <VideoModal src={activeVideo} onClose={handleCloseVideo} />
      )}
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
  onOpen,
}: {
  src: string;
  height: string;
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
      className={`rounded-2xl overflow-hidden shadow-xl ${height} cursor-pointer`}
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

function VideoModal({ src, onClose }: { src: string; onClose: () => void }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.play().catch(() => setIsPlaying(false));

    const updateProgress = () => {
      if (!video.duration) return;
      setProgress((video.currentTime / video.duration) * 100);
    };

    video.addEventListener("timeupdate", updateProgress);

    return () => {
      video.removeEventListener("timeupdate", updateProgress);
    };
  }, [src]);

  useEffect(() => {
    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", onEscape);

    return () => {
      window.removeEventListener("keydown", onEscape);
    };
  }, [onClose]);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  const onSeek = (value: string) => {
    const video = videoRef.current;
    if (!video || !video.duration) return;

    const nextProgress = Number(value);
    video.currentTime = (nextProgress / 100) * video.duration;
    setProgress(nextProgress);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 px-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-4xl rounded-2xl border border-white/15 bg-zinc-950 p-4 md:p-6"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="mb-3 flex justify-end">
          <button
            onClick={onClose}
            className="rounded-full border border-white/20 p-2 text-white transition hover:bg-white/10"
            aria-label="Close video"
          >
            <X size={18} />
          </button>
        </div>

        <div className="overflow-hidden rounded-xl">
          <video
            ref={videoRef}
            src={src}
            className="max-h-[70vh] w-full object-cover"
            playsInline
          />
        </div>

        <div className="mt-4 flex flex-col gap-4">
          <input
            type="range"
            min="0"
            max="100"
            value={progress}
            onChange={(e) => onSeek(e.target.value)}
            className="h-1 w-full cursor-pointer appearance-none rounded-full bg-white/20"
            aria-label="Seek video"
          />

          <div className="flex items-center gap-3">
            <button
              onClick={togglePlay}
              className="rounded-full border border-white/20 p-2 text-white transition hover:bg-white/10"
              aria-label={isPlaying ? "Pause video" : "Play video"}
            >
              {isPlaying ? <Pause size={18} /> : <Play size={18} />}
            </button>

            <button
              onClick={toggleMute}
              className="rounded-full border border-white/20 p-2 text-white transition hover:bg-white/10"
              aria-label={isMuted ? "Unmute video" : "Mute video"}
            >
              {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
