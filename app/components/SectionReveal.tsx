"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SectionReveal({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const variants = [
      "fadeUp",
      "fadeLeft",
      "fadeRight",
      "scaleUp",
      "rotateSoft",
    ];

    const randomVariant = variants[Math.floor(Math.random() * variants.length)];

    const animations: any = {
      fadeUp: { opacity: 0, y: 80 },
      fadeLeft: { opacity: 0, x: -80 },
      fadeRight: { opacity: 0, x: 80 },
      scaleUp: { opacity: 0, scale: 0.9 },
      rotateSoft: { opacity: 0, rotation: 5, y: 40 },
    };

    gsap.fromTo(el, animations[randomVariant], {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      rotation: 0,
      duration: 1.5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start: "top 50%",
        toggleActions: "play none none none",
        once: true,
      },
    });
  }, []);

  return (
    <div ref={sectionRef} className={className}>
      {children}
    </div>
  );
}
