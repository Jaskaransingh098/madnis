"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import Image from "next/image";

type Service = {
  title: string;
  description: string;
  image: string;
};

const services: Service[] = [
  {
    title: "Design & Branding",
    description:
      "We craft distinctive brand identities that resonate deeply with your audience. From visual systems and brand strategy to campaign concepts and creative execution, we build cohesive brand experiences that communicate clarity, emotion, and long-term value.",
    image: "/client-logos/4.png",
  },
  {
    title: "Development & Web Design",
    description:
      "We design and develop high-performance, visually immersive websites tailored to your brand goals. Our process combines modern UI/UX principles, clean code architecture, and responsive design to deliver seamless digital experiences across all devices.",
    image: "/client-logos/3.png",
  },
  {
    title: "Video Production Services",
    description:
      "From concept to final cut, we produce compelling visual stories that elevate your brand presence. Whether it’s product films, brand storytelling, or promotional content, our production approach ensures cinematic quality and strategic messaging.",
    image: "/client-logos/2.png",
  },
  {
    title: "Animation",
    description:
      "We bring ideas to life through motion. Our animation services include explainer videos, motion graphics, and immersive visual storytelling designed to simplify complex ideas and engage audiences with creativity and precision.",
    image: "/client-logos/1.png",
  },
  {
    title: "AI Automation",
    description:
      "We integrate intelligent automation systems to streamline workflows and enhance business efficiency. From AI-powered chatbots to smart process automation, we help brands reduce manual effort, improve accuracy, and scale operations effectively.",
    image: "/client-logos/1.png",
  },
];

export default function ServicesAccordion({ id }: { id?: string }) {
  const [active, setActive] = useState<number | null>(0);
  const [hovered, setHovered] = useState<number | null>(null);

  const previewRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const showPreview = (index: number, e: React.MouseEvent<HTMLDivElement>) => {
    setHovered(index);

    const row = e.currentTarget;
    const container = containerRef.current;
    const preview = previewRef.current;

    if (!row || !container || !preview) return;

    const rowRect = row.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();

    const previewHeight = preview.offsetHeight;

    const y =
      rowRect.top - containerRect.top + rowRect.height / 2 - previewHeight / 2;

    gsap.to(preview, {
      y,
      opacity: 1,
      scale: 1,
      duration: 0.75,
      ease: "power3.out",
    });
  };

  const hidePreview = () => {
    if (!previewRef.current) return;

    gsap.to(previewRef.current, {
      opacity: 0,
      scale: 0.9,
      duration: 0.3,
      onComplete: () => setHovered(null),
    });
  };

  return (
    <section
      id={id}
      ref={containerRef}
      className="relative bg-transparent text-white py-24 px-6 md:px-16"
      onMouseLeave={hidePreview}
    >
      {/* Preview Image */}
      <AnimatePresence>
        {hovered !== null && (
          <motion.div
            ref={previewRef}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute right-80 w-60 h-60 z-20 pointer-events-none"
          >
            <Image
              src={services[hovered].image}
              alt="preview"
              fill
              className="object-contain rounded-xl border border-yellow-500/30 shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Heading */}
      <div className="relative mb-24 text-right ml-auto max-w-3xl">
        {/* Huge Background Word (shifted right) */}
        <div className="absolute -top-10 right-0 text-[120px] md:text-[180px] font-bold text-white/5 select-none pointer-events-none">
          SERVICES
        </div>

        {/* Small Label */}
        <span className="uppercase tracking-[0.4em] text-sm text-yellow-500">
          Our Expertise
        </span>

        {/* Main Heading */}
        <h2 className="mt-6 text-5xl md:text-7xl font-semibold leading-tight">
          Solutions Built for <br />
          <span className="text-yellow-500">Growth & Impact</span>
        </h2>

        {/* Supporting Paragraph */}
        <p className="mt-8 text-gray-400 text-lg leading-relaxed">
          We combine strategy, creativity, and technology to craft scalable
          solutions that elevate brands, streamline operations, and create
          measurable business transformation.
        </p>
      </div>

      {/* Services */}
      <div className="space-y-6">
        {services.map((service, index) => {
          const isOpen = active === index;

          return (
            <div
              key={index}
              className="border-b border-yellow-500/40 pb-15"
              onMouseEnter={(e) => showPreview(index, e)}
            >
              <button
                onClick={() => setActive(active === index ? null : index)}
                className="w-full flex justify-between items-center"
              >
                <h3 className="text-3xl md:text-5xl font-semibold">
                  {service.title}
                </h3>

                <span className="text-4xl text-yellow-500">
                  {isOpen ? "−" : "+"}
                </span>
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mt-10 w-[60vw] overflow-hidden"
                  >
                    <p className="text-gray-400 leading-relaxed text-lg font-bold">
                      {service.description}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
