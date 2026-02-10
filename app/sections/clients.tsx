"use client";

import { motion } from "framer-motion";

const logos = [
  "/client-logos/1.png",
  "/client-logos/2.png",
  "/client-logos/3.png",
  "/client-logos/4.png",
  "/client-logos/5.png",
  "/client-logos/6.png",
  "/client-logos/7.png",
  "/client-logos/8.png",
  "/client-logos/9.png",
  "/client-logos/10.png",
  "/client-logos/11.png",
  "/client-logos/12.png",
  "/client-logos/13.png",
  "/client-logos/14.png",
  "/client-logos/15.png",
  "/client-logos/16.png",
  "/client-logos/17.png",
  "/client-logos/18.png",
  "/client-logos/19.png",
  "/client-logos/20.png",
  "/client-logos/21.png",
  "/client-logos/22.png",
  "/client-logos/23.png",
  "/client-logos/24.png",
  "/client-logos/25.png",
];

const bubbles = [
  { top: "10%", left: "18%", size: 130 },
  { top: "6%", left: "38%", size: 110 },
  { top: "12%", left: "68%", size: 100 },
  { top: "18%", left: "82%", size: 120 },

  { top: "38%", left: "8%", size: 120 },
  { top: "45%", left: "20%", size: 160 },
  { top: "52%", left: "35%", size: 150 },
  { top: "60%", left: "50%", size: 130 },
  { top: "48%", left: "68%", size: 120 },
  { top: "58%", left: "85%", size: 140 },

  { top: "72%", left: "12%", size: 110 },
  { top: "78%", left: "28%", size: 130 },
  { top: "82%", left: "45%", size: 120 },
  { top: "75%", left: "62%", size: 150 },
  { top: "80%", left: "80%", size: 130 },

  { top: "65%", left: "5%", size: 120 },
  { top: "30%", left: "30%", size: 110 },
  { top: "35%", left: "55%", size: 120 },
  { top: "25%", left: "75%", size: 120 },

  { top: "55%", left: "75%", size: 120 },
  { top: "70%", left: "70%", size: 120 },
  { top: "85%", left: "60%", size: 110 },
  { top: "90%", left: "30%", size: 120 },
  { top: "88%", left: "15%", size: 120 },
  { top: "40%", left: "88%", size: 110 },
];

export default function Clients() {
  return (
    <section className="relative w-full h-screen bg-black overflow-hidden flex items-center justify-center">

      {/* CENTER TEXT */}
      <h2 className="absolute z-20 text-white text-6xl font-serif text-center leading-tight">
        75+ brands <br /> already said "Wow".
      </h2>

      {/* BUBBLES */}
      {bubbles.map((bubble, index) => (
        <FloatingBubble
          key={index}
          bubble={bubble}
          logo={logos[index]}
        />
      ))}
    </section>
  );
}

function FloatingBubble({ bubble, logo }: any) {

  const floatDuration = 6 + Math.random() * 6;

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: [0, -12, 0] }}
      transition={{
        duration: floatDuration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      whileHover={{ scale: 1.15 }}
      className="absolute"
      style={{
        top: bubble.top,
        left: bubble.left,
        width: bubble.size,
        height: bubble.size,
        transform: "translate(-50%, -50%)",
      }}
    >
      {/* Glass Bubble */}
      <div className="relative w-full h-full rounded-full 
      bg-white/5 backdrop-blur-md
      border border-white/10
      shadow-[0_25px_80px_rgba(0,0,0,0.9)]
      flex items-center justify-center">

        {/* Glow Layer */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/10 to-transparent opacity-40" />

        {/* Logo */}
        <img
          src={logo}
          alt="client"
          className="w-[60%] h-[60%] object-contain brightness-110"
        />
      </div>
    </motion.div>
  );
}
