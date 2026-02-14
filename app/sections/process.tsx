"use client";

import Image from "next/image";
import { Timeline } from "@/components/ui/timeline";

const ImageCard = ({ src }: { src: string }) => (
  <div className="relative group overflow-hidden rounded-xl border border-neutral-800">
    <Image
      src={src}
      alt="process visual"
      width={500}
      height={400}
      className="object-cover w-full h-40 md:h-52 transition duration-500 group-hover:scale-105"
    />

    {/* Glow Overlay */}
    <div className="absolute inset-0 bg-transparent opacity-0 group-hover:opacity-100 transition" />
  </div>
);

export default function Process() {
  const data = [
    {
      title: "Idea Alchemy",
      content: (
        <div>
          <p className="text-neutral-300 text-sm md:text-base mb-6">
            You bring us ideas that feel ordinary. We turn them into visual
            storytelling experiences that hit differently. Think of us as your
            creative genie — minus the lamp, plus insane execution speed.
          </p>

          <div className="grid grid-cols-2 gap-4">
            <ImageCard src="/process/interaction-1.jpg" />
            <ImageCard src="/process/interaction-2.jpg" />
            <ImageCard src="/process/interaction-3.jpg" />
            <ImageCard src="/process/interaction-4.jpg" />
          </div>
        </div>
      ),
    },

    {
      title: "Chaos Level Creativity",
      content: (
        <div>
          <p className="text-neutral-300 text-sm md:text-base mb-6">
            Our sleep-deprived creatives dive deep into research, trends, and
            psychology to design content that grabs attention and refuses to let
            go.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <ImageCard src="/process/flow-1.jpg" />
            <ImageCard src="/process/flow-2.jpg" />
            <ImageCard src="/process/flow-3.jpg" />
            <ImageCard src="/process/flow-4.jpg" />
          </div>
        </div>
      ),
    },

    {
      title: "Content Creation Madness",
      content: (
        <div>
          <p className="text-neutral-300 text-sm md:text-base mb-6">
            This is where the magic actually happens. From visuals to motion,
            audio to storytelling — we craft content that makes brands
            impossible to ignore.
          </p>

          <div className="grid grid-cols-2 gap-4">
            <ImageCard src="/process/micro-1.jpg" />
            <ImageCard src="/process/micro-2.jpg" />
            <ImageCard src="/process/micro-3.jpg" />
            <ImageCard src="/process/micro-4.jpg" />
          </div>
        </div>
      ),
    },

    {
      title: "Speed Demon Execution",
      content: (
        <div>
          <p className="text-neutral-300 text-sm md:text-base mb-6">
            Deadlines don’t scare us. We move at speeds that would make cheetahs
            jealous while maintaining production quality that makes competitors
            question their life choices.
          </p>

          <div className="grid grid-cols-2 gap-4">
            <ImageCard src="/process/motion-1.jpg" />
            <ImageCard src="/process/motion-2.jpg" />
            <ImageCard src="/process/motion-3.jpg" />
            <ImageCard src="/process/motion-4.jpg" />
          </div>
        </div>
      ),
    },

    {
      title: "Impact & Obsession",
      content: (
        <div>
          <p className="text-neutral-300 text-sm md:text-base mb-6">
            We don’t stop at delivery. We obsess over results, audience
            response, and performance analytics until your brand becomes
            unforgettable.
          </p>

          <div className="grid grid-cols-2 gap-4">
            <ImageCard src="/process/brand-1.jpg" />
            <ImageCard src="/process/brand-2.jpg" />
            <ImageCard src="/process/brand-3.jpg" />
            <ImageCard src="/process/brand-4.jpg" />
          </div>
        </div>
      ),
    },
  ];

  return (
    <section className="relative w-full bg-black py-24">
      <div className="text-center mb-12 px-6">
        <h2 className="text-3xl md:text-8xl font-extrabold text-[#D4AF37]">
          How Madnis Works Its Magic
        </h2>

        <p className="mt-4 text-neutral-400 max-w-xl mx-auto">
          We turn wild ideas into scroll-stopping content that grabs attention,
          sparks obsession, and makes brands impossible to ignore.
        </p>
      </div>

      <Timeline data={data} />
    </section>
  );
}
