"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Play } from "lucide-react";

const videos = [
  "/horizontal/v1.mp4",
  "/horizontal/v2.mp4",
  "/horizontal/v3.mp4",
  "/horizontal/v4.mp4",
  "/horizontal/v5.mp4",
  "/horizontal/v6.mp4",
  "/horizontal/v7.mp4",
  "/horizontal/v8.mp4",
  "/horizontal/v9.mp4",
  "/horizontal/v10.mp4",
  "/horizontal/v11.mp4",
];

export default function WorkVideos() {
  const trackRef = useRef<HTMLDivElement>(null);
  const rotationTween = useRef<gsap.core.Tween | null>(null);

  const [playingIndex, setPlayingIndex] = useState<number | null>(null);

  const carouselItems = [...videos, ...videos];

  const cardWidth = 620;
  const totalCards = carouselItems.length;
  const gapFactor = 0.8;

  const radius =
    ((cardWidth * gapFactor) / 2 / Math.tan(Math.PI / totalCards)) * 0.95;

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const rotationObj = { value: 0 };

    rotationTween.current = gsap.to(rotationObj, {
      value: 360,
      duration: 85,
      ease: "none",
      repeat: -1,
      onUpdate: () => {
        const currentRotation = rotationObj.value;

        el.style.transform = `
          translateZ(${radius}px)
          rotateY(${currentRotation}deg)
        `;

        const cards = el.children;

        Array.from(cards).forEach((card, index) => {
          const baseAngle = (360 / totalCards) * index;

          let relativeAngle = (baseAngle + currentRotation) % 360;

          if (relativeAngle > 180) {
            relativeAngle = 360 - relativeAngle;
          }

          const scale = gsap.utils.mapRange(0, 180, 0.65, 1.1)(relativeAngle);

          gsap.set(card, { scale });

          // Stop video if card rotates away
          if (relativeAngle > 60 && playingIndex === index) {
            setPlayingIndex(null);
          }
        });
      },
    });

    gsap.to("#goldGlow", {
      scale: 2.1,
      opacity: 2,
      yoyo: true,
      // repeat: -1,
    });
  }, [radius, totalCards, playingIndex]);

  const pauseRotation = () => rotationTween.current?.pause();
  const resumeRotation = () => rotationTween.current?.play();

  return (
    <section className="bg-black text-white py-32 overflow-hidden flex flex-col items-center">
      {/* Heading */}
      <div className="text-center mb-20 max-w-3xl">
        <h2 className="text-5xl md:text-6xl font-semibold mb-6 leading-tight">
          Where Vision Becomes{" "}
          <span className="text-[#D4AF37]">Cinematic Reality</span>
        </h2>
      </div>

      <div className="relative w-full h-[420px] flex justify-center items-center [perspective:1400px]">
        <div
          id="goldGlow"
          className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[220px] rounded-full opacity-70"
          style={{
            background:
              "radial-gradient(circle, rgba(212,175,55,0.45) 0%, rgba(212,175,55,0.18) 40%, transparent 75%)",
            filter: "blur(90px)",
          }}
        />

        <div
          ref={trackRef}
          onMouseEnter={pauseRotation}
          onMouseLeave={resumeRotation}
          className="relative"
          style={{
            width: `${cardWidth}px`,
            aspectRatio: "4/3",
            transformStyle: "preserve-3d",
            transform: `translateZ(${radius}px)`,
          }}
        >
          {carouselItems.map((src, i) => {
            const angle = (360 / totalCards) * i;

            return (
              <VideoCard
                key={i}
                src={src}
                angle={angle}
                radius={radius}
                index={i}
                isPlaying={playingIndex === i}
                onToggle={() =>
                  setPlayingIndex((prev) => (prev === i ? null : i))
                }
                pauseRotation={pauseRotation}
                resumeRotation={resumeRotation}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

function VideoCard({
  src,
  angle,
  radius,
  index,
  isPlaying,
  onToggle,
  pauseRotation,
  resumeRotation,
}: {
  src: string;
  angle: number;
  radius: number;
  index: number;
  isPlaying: boolean;
  onToggle: () => void;
  pauseRotation: () => void;
  resumeRotation: () => void;
}) {
  const poster = src.replace(/\.(mp4|MP4|mov|MOV)$/, ".webp");
  const videoRef = useRef<HTMLVideoElement>(null);

  // 🔥 Force play when active
  useEffect(() => {
    if (isPlaying && videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, [isPlaying]);

  return (
    <div
      onClick={onToggle}
      onMouseEnter={pauseRotation}
      onMouseLeave={resumeRotation}
      className="group absolute top-0 left-0 w-full aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl cursor-pointer"
      style={{
        transform: `
          rotateY(${angle}deg)
          translateZ(-${radius}px)
          rotateY(${Math.sin((angle * Math.PI) / 180) * 8}deg)
        `,
        backfaceVisibility: "hidden",
      }}
    >
      {isPlaying ? (
        <video
          ref={videoRef}
          src={src}
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

          <div className="absolute inset-0 flex items-center justify-center bg-black/25">
            <Play
              size={52}
              className="text-white opacity-80 transition-all duration-300 group-hover:scale-110 group-hover:opacity-100 drop-shadow-lg"
            />
          </div>
        </>
      )}
    </div>
  );
}
