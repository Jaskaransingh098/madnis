"use client";

import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Pause, Play, Volume2, VolumeX, X } from "lucide-react";

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

  const getIndex = (offset: number) =>
    (centerIndex + offset + videos.length) % videos.length;

  const prev = () =>
    setCenterIndex((p) => (p - 1 + videos.length) % videos.length);

  const next = () => setCenterIndex((p) => (p + 1) % videos.length);

  return (
    <section className="min-h-screen bg-transparent py-14 text-white overflow-hidden">
      <div className="mx-auto mb-20 flex w-[82%] items-end justify-between">
        <p className="text-md ml-25 max-w-[460px] pb-25 leading-relaxed text-gray-400">
          Some people create content. We create obsession. Every project we
          touch turns into something that refuses to be ignored, lives rent-free
          in people’s minds, and makes competitors refresh your page wondering
          how you did it.
        </p>

        <h2 className="text-[120px] font-semibold tracking-tight">
          OUR <br /> WORKs
        </h2>
      </div>

      <div className="relative mx-auto flex h-[480px] w-full max-w-[1500px] items-center justify-center">
        {[-2, -1, 0, 1, 2].map((offset) => {
          const index = getIndex(offset);

          const styleMap = {
            "-2":
              "translate-x-[-560px] translate-y-[-70px] rotate-[7deg] scale-[0.98] opacity-80 z-10",
            "-1":
              "translate-x-[-280px] translate-y-[-30px] rotate-[-6deg] scale-[1] opacity-85 z-20",
            "0": "translate-x-0 translate-y-[35px] rotate-0 scale-[1.08] z-30",
            "1":
              "translate-x-[300px] translate-y-[-20px] rotate-[-6deg] scale-[0.9] opacity-85 z-20",
            "2":
              "translate-x-[560px] translate-y-[-40px] rotate-[2deg] scale-[0.98] opacity-80 z-10",
          };

          return (
            <div
              key={`${index}-${offset}`}
              className={`absolute h-[440px] w-[280px] overflow-hidden rounded-[28px] shadow-2xl transition-all duration-700 ease-out ${styleMap[offset.toString() as keyof typeof styleMap]}`}
            >
              <InlineVideoPlayer src={videos[index]} />
            </div>
          );
        })}
      </div>

      <div className="mt-20 flex justify-center gap-6">
        <button
          onClick={prev}
          className="flex h-14 w-14 items-center justify-center rounded-full border border-white/40 transition hover:bg-white hover:text-black"
        >
          <ChevronLeft />
        </button>

        <button
          onClick={next}
          className="flex h-14 w-14 items-center justify-center rounded-full border border-white/40 transition hover:bg-white hover:text-black"
        >
          <ChevronRight />
        </button>
      </div>
    </section>
  );
}

function InlineVideoPlayer({ src }: { src: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const playPause = async () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      await video.play().catch(() => undefined);
      setIsPlaying(!video.paused);
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

  const stopVideo = () => {
    const video = videoRef.current;
    if (!video) return;

    video.pause();
    video.currentTime = 0;
    setIsPlaying(false);
  };

  return (
    <div className="group relative h-full w-full">
      <video
        ref={videoRef}
        src={src}
        muted
        loop
        preload="metadata"
        playsInline
        className="h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/20 opacity-80 transition group-hover:opacity-100" />

      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
        <button
          onClick={playPause}
          className="rounded-full border border-white/30 bg-black/45 p-2 text-white backdrop-blur"
          aria-label={isPlaying ? "Pause video" : "Play video"}
        >
          {isPlaying ? <Pause size={16} /> : <Play size={16} />}
        </button>

        {isPlaying && (
          <div className="flex items-center gap-2">
            <button
              onClick={toggleMute}
              className="rounded-full border border-white/30 bg-black/45 p-2 text-white backdrop-blur"
              aria-label={isMuted ? "Unmute video" : "Mute video"}
            >
              {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
            </button>

            <button
              onClick={stopVideo}
              className="rounded-full border border-white/30 bg-black/45 p-2 text-white backdrop-blur"
              aria-label="Close video"
            >
              <X size={16} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
