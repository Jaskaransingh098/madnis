"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const videos = [
  "/videos-section/compressed_work1.mp4",
  "/videos-section/compressed_work2.mp4",
  "/videos-section/compressed_work3.mp4",
  "/videos-section/compressed_work4.mp4",
  "/videos-section/compressed_work5.mp4",
  "/videos-section/compressed_work6.mp4",
];

export default function WorkVideos() {
  const trackRef = useRef<HTMLDivElement>(null);

  const carouselItems = [...videos, ...videos];

  const cardWidth = 620;
  const totalCards = carouselItems.length;
  const gapFactor = 0.8;
  //   const radius = (cardWidth * gapFactor) / 2 / Math.tan(Math.PI / totalCards);
  const radius =
    ((cardWidth * gapFactor) / 2 / Math.tan(Math.PI / totalCards)) * 0.95;

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const rotationObj = { value: 0 };

    // Rotate cylinder
    gsap.to(rotationObj, {
      value: 360,
      duration: 35,
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

          // Calculate card's current visible angle
          let relativeAngle = (baseAngle + currentRotation) % 360;

          if (relativeAngle > 180) {
            relativeAngle = 360 - relativeAngle;
          }

          const scale = gsap.utils.mapRange(
            0,
            180,
            0.65, // center small
            1.1, // sides big
          )(relativeAngle);

          gsap.set(card, {
            scale,
          });
        });
      },
    });

    gsap.to("#goldGlow", {
      scale: 2.1,
      opacity: 2,
      yoyo: true,
    });
  }, []);

  return (
    <section className="bg-black text-white py-32 overflow-hidden flex flex-col items-center">
      {/* Heading */}
      <div className="text-center mb-20">
        <h2 className="text-5xl md:text-6xl font-semibold mb-4">
          Create Stunning Videos
        </h2>
      </div>

      {/* 3D Container */}
      <div className="relative w-full h-[420px] flex justify-center items-center [perspective:1400px]">
        {/* ⭐ GOLD CENTER GLOW */}
        <div
          id="goldGlow"
          className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
               w-[550px] h-[220px] rounded-full opacity-70"
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
              <VideoCard key={i} src={src} angle={angle} radius={radius} />
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
}: {
  src: string;
  angle: number;
  radius: number;
}) {
  return (
    <div
      className="absolute top-0 left-0 w-full aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
      style={{
        // transform: `rotateY(${angle}deg) translateZ(-${radius}px)`,
        transform: `
  rotateY(${angle}deg)
  translateZ(-${radius}px)
  rotateY(${Math.sin((angle * Math.PI) / 180) * 8}deg)
`,
        backfaceVisibility: "hidden",
      }}
    >
      <video
        src={src}
        muted
        loop
        // autoPlay
        playsInline
        className="w-full h-full object-cover"
      />
    </div>
  );
}
