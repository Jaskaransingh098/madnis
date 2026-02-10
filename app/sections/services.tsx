"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import Image from "next/image";

type Service = {
  title: string;
  items: string[];
  image: string;
};

const services: Service[] = [
  {
    title: "Creative Direction",
    items: ["Creative Platform", "Campaign Concepts", "Design Ops"],
    image: "/client-logos/4.png",
  },
  {
    title: "Film & Motion Design",
    items: ["Motion Graphics", "Brand Films", "Product Videos"],
    image: "/client-logos/3.png",
  },
  {
    title: "Web & Digital Experience",
    items: ["UI / UX", "Development", "Animations"],
    image: "/client-logos/2.png",
  },
  {
    title: "Brand Strategy",
    items: ["Identity", "Messaging", "Guidelines"],
    image: "/client-logos/1.png",
  },
];

export default function ServicesAccordion() {
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
      ref={containerRef}
      className="relative bg-black text-white py-24 px-6 md:px-16"
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
      <h2 className="text-6xl md:text-9xl font-bold mb-20">What We Do</h2>

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
                  <motion.ul
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-18 text-gray-300 w-[70vw] overflow-hidden"
                  >
                    {service.items.map((item, i) => (
                      <li key={i} className="hover:text-yellow-400 transition">
                        {item}
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
