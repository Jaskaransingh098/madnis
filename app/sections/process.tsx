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

export default function Process({ id }: { id?: string }) {
  const data = [
    {
      title: "Idea Alchemy",
      content: (
        <div>
          <p className="text-neutral-300 text-sm md:text-xl mb-6">
            You bring us ideas that feel ordinary. We turn them into visual
            storytelling experiences that hit differently. Think of us as your
            creative genie — minus the lamp, plus insane execution speed.
          </p>

          <div className="mt-10 min-h-[300px] border border-neutral-800 rounded-xl p-8 flex flex-col justify-center">
            <h4 className="text-2xl md:text-3xl font-semibold text-white mb-4">
              From Concept to Clarity
            </h4>

            <p className="text-neutral-400 text-lg leading-relaxed">
              Strategy alignment · Brand positioning · Narrative direction ·
              Audience psychology
            </p>
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
                  <div className="mt-10 min-h-[300px] border border-neutral-800 rounded-xl p-8 flex flex-col justify-center">
          <h4 className="text-2xl md:text-3xl font-semibold text-white mb-4">
            Strategic Creative Thinking
          </h4>

          <p className="text-neutral-400 text-lg leading-relaxed">
            Market research · Trend forecasting · Visual ideation · Creative
            direction
          </p>
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

          <div className="mt-10 min-h-[300px] border border-neutral-800 rounded-xl p-8 flex flex-col justify-center">
          <h4 className="text-2xl md:text-3xl font-semibold text-white mb-4">
            Production With Precision
          </h4>

          <p className="text-neutral-400 text-lg leading-relaxed">
            Visual design · Motion graphics · Video production · Sound &
            storytelling
          </p>
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

          <div className="mt-10 min-h-[300px] border border-neutral-800 rounded-xl p-8 flex flex-col justify-center">
          <h4 className="text-2xl md:text-3xl font-semibold text-white mb-4">
            Agile Workflow System
          </h4>

          <p className="text-neutral-400 text-lg leading-relaxed">
            Rapid iteration · Seamless collaboration · Quality control ·
            Performance optimization
          </p>
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

          <div className="mt-10 min-h-[300px] border border-neutral-800 rounded-xl p-8 flex flex-col justify-center">
          <h4 className="text-2xl md:text-3xl font-semibold text-white mb-4">
            Measured Results & Growth
          </h4>

          <p className="text-neutral-400 text-lg leading-relaxed">
            Performance tracking · Audience insights · Optimization strategy ·
            Long-term brand scaling
          </p>
        </div>
        </div>
      ),
    },
  ];

  return (
    <section id={id} className="relative w-full bg-black py-24">
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
