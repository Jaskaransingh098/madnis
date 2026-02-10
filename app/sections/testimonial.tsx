"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";

type Testimonial = {
  type: "text" | "image" | "audio";
  name: string;
  content?: string;
  image?: string;
  audio?: string;
};

const testimonials: Testimonial[] = [
  {
    type: "text",
    name: "Patrick Martin",
    content:
      "This product completely changed the way I work every day. Highly recommended.",
  },
  {
    type: "image",
    name: "Megan Walters",
    image: "/testimonials/1.jpg",
  },
  {
    type: "audio",
    name: "Bruce Murphy",
    audio: "/testimonials/audio1.mp3",
  },
  {
    type: "text",
    name: "Crystal Perkins",
    content:
      "The experience feels premium and thoughtful. Everything just flows.",
  },
  {
    type: "image",
    name: "Andrew Cook",
    image: "/testimonials/2.jpg",
  },
  {
    type: "audio",
    name: "Gregory Wallace",
    audio: "/testimonials/audio2.mp3",
  },
];

export default function TestimonialsSection() {
  const col1 = useRef<HTMLDivElement>(null);
  const col2 = useRef<HTMLDivElement>(null);
  const col3 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const animateColumn = (
      el: HTMLDivElement | null,
      direction: 1 | -1,
      duration: number,
    ) => {
      if (!el) return;

      const height = el.scrollHeight / 2;

      gsap.fromTo(
        el,
        { y: direction === 1 ? 0 : -height },
        {
          y: direction === 1 ? -height : 0,
          duration,
          ease: "none",
          repeat: -1,
        },
      );
    };

    animateColumn(col1.current, 1, 30); // down → up
    animateColumn(col2.current, -1, 40); // up → down
    animateColumn(col3.current, 1, 35); // down → up
  }, []);

  const renderCard = (item: Testimonial, i: number) => (
    <div key={i} className="bg-[#111] rounded-xl p-5 shadow-lg mb-6">
      {item.type === "text" && (
        <>
          <p className="text-sm text-gray-300 mb-4">“{item.content}”</p>
          <span className="text-xs text-gray-500">— {item.name}</span>
        </>
      )}

      {item.type === "image" && item.image && (
        <>
          <div className="relative w-full h-40 rounded-lg overflow-hidden mb-3">
            <Image
              src={item.image}
              alt={item.name}
              fill
              className="object-cover"
            />
          </div>
          <span className="text-xs text-gray-400">— {item.name}</span>
        </>
      )}

      {item.type === "audio" && item.audio && (
        <>
          <audio controls className="w-full mb-3">
            <source src={item.audio} type="audio/mpeg" />
          </audio>
          <span className="text-xs text-gray-400">— {item.name}</span>
        </>
      )}
    </div>
  );

  return (
    <section className="bg-black text-white py-32 px-6 md:px-20 overflow-hidden h-[100vh]">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-16">
        {/* LEFT CONTENT */}
        <div className="max-w-xl mt-30">
          <p className="text-sm uppercase tracking-widest text-gray-400 mb-4">
            Community
          </p>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            We believe in the power of community
          </h2>
          <p className="text-gray-400">
            Our goal is to create a product people genuinely love and use every
            day.
          </p>
        </div>

        {/* RIGHT AUTO SCROLL */}
        <div className="grid grid-cols-3 gap-6 h-[600px] overflow-hidden">
          {/* COLUMN 1 */}
          <div className="relative">
            <div ref={col1}>
              {[...testimonials, ...testimonials].map(renderCard)}
            </div>
          </div>

          {/* COLUMN 2 */}
          <div className="relative mt-20">
            <div ref={col2}>
              {[...testimonials, ...testimonials].map(renderCard)}
            </div>
          </div>

          {/* COLUMN 3 */}
          <div className="relative mt-40">
            <div ref={col3}>
              {[...testimonials, ...testimonials].map(renderCard)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
