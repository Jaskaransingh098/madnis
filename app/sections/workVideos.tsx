"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

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

export default function WorkVideos({ id }: { id?: string }) {
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
      duration: 95,
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
    <section id={id} className="bg-transparent text-white py-32 overflow-hidden flex flex-col items-center">
      {/* Heading */}
      <div className="text-center mb-20 max-w-3xl">
        <h2 className="text-5xl md:text-6xl font-semibold mb-6 leading-tight">
          Where Vision Becomes{" "}
          <span className="text-[#D4AF37]">Cinematic Reality</span>
        </h2>

        <p className="text-gray-400 text-lg leading-relaxed">
          At Madnis Media, we craft visually immersive video experiences
          designed to elevate your brand presence. Every frame is engineered to
          capture attention, ignite emotion, and leave a lasting impression that
          competitors simply cannot replicate.
        </p>
      </div>

      <div className="relative w-full h-[420px] flex justify-center items-center [perspective:1400px]">
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
        autoPlay
        playsInline
        className="w-full h-full object-cover"
      />
    </div>
  );
}
