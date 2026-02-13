"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Pause, Play, Volume2, VolumeX, X } from "lucide-react";

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
  const rotationTweenRef = useRef<gsap.core.Tween | null>(null);
  const glowTweenRef = useRef<gsap.core.Tween | null>(null);
  const [playingVideoId, setPlayingVideoId] = useState<string | null>(null);

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

    rotationTweenRef.current = gsap.to(rotationObj, {
      value: 360,
      duration: 45,
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

          gsap.set(card, {
            scale,
          });
        });
      },
    });

    glowTweenRef.current = gsap.to("#goldGlow", {
      scale: 2.1,
      opacity: 2,
      repeat: -1,
      yoyo: true,
      duration: 3.6,
      ease: "sine.inOut",
    });

    return () => {
      rotationTweenRef.current?.kill();
      glowTweenRef.current?.kill();
    };
  }, [radius, totalCards]);

  useEffect(() => {
    if (playingVideoId) {
      rotationTweenRef.current?.pause();
      glowTweenRef.current?.pause();
      return;
    }

    rotationTweenRef.current?.play();
    glowTweenRef.current?.play();
  }, [playingVideoId]);

  return (
    <section className="flex flex-col items-center overflow-hidden bg-black py-32 text-white">
      <div className="mb-20 max-w-3xl text-center">
        <h2 className="mb-6 text-5xl font-semibold leading-tight md:text-6xl">
          Where Vision Becomes <span className="text-[#D4AF37]">Cinematic Reality</span>
        </h2>

        <p className="text-lg leading-relaxed text-gray-400">
          At Madnis Media, we craft visually immersive video experiences
          designed to elevate your brand presence. Every frame is engineered to
          capture attention, ignite emotion, and leave a lasting impression that
          competitors simply cannot replicate.
        </p>
      </div>

      <div className="relative flex h-[420px] w-full items-center justify-center [perspective:1400px]">
        <div
          id="goldGlow"
          className="pointer-events-none absolute left-1/2 top-1/2 h-[220px] w-[550px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-70"
          style={{
            background:
              "radial-gradient(circle, rgba(212,175,55,0.45) 0%, rgba(212,175,55,0.18) 40%, transparent 75%)",
            filter: "blur(90px)",
          }}
        />

        <div
          ref={trackRef}
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
                key={`${src}-${i}`}
                src={src}
                angle={angle}
                radius={radius}
                isActive={playingVideoId === `${src}-${i}`}
                onPlay={() => setPlayingVideoId(`${src}-${i}`)}
                onStop={() => setPlayingVideoId((current) => (current === `${src}-${i}` ? null : current))}
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
  isActive,
  onPlay,
  onStop,
}: {
  src: string;
  angle: number;
  radius: number;
  isActive: boolean;
  onPlay: () => void;
  onStop: () => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    if (!isActive) {
      const video = videoRef.current;
      if (!video) return;
      video.pause();
      video.currentTime = 0;
    }
  }, [isActive]);

  const togglePlay = async () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      onPlay();
      await video.play().catch(() => undefined);
      setIsPlaying(!video.paused);
      return;
    }

    video.pause();
    setIsPlaying(false);
    onStop();
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  const closeVideo = () => {
    const video = videoRef.current;
    if (!video) return;

    video.pause();
    video.currentTime = 0;
    setIsPlaying(false);
    onStop();
  };

  return (
    <div
      className="absolute left-0 top-0 w-full aspect-video overflow-hidden rounded-3xl border border-white/10 shadow-2xl"
      style={{
        transform: `
  rotateY(${angle}deg)
  translateZ(-${radius}px)
  rotateY(${Math.sin((angle * Math.PI) / 180) * 8}deg)
`,
        backfaceVisibility: "hidden",
      }}
    >
      <div className="group relative h-full w-full">
        <video
          ref={videoRef}
          src={src}
          muted
          preload="metadata"
          playsInline
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/20 opacity-90 transition group-hover:opacity-100" />

        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
          <button
            onClick={togglePlay}
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
                onClick={closeVideo}
                className="rounded-full border border-white/30 bg-black/45 p-2 text-white backdrop-blur"
                aria-label="Close video"
              >
                <X size={16} />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
