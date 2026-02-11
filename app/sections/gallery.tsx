import React from "react";
import { motion } from "framer-motion";

// Dummy images (Replace these with your actual neon/cyberpunk images)
const imagesCol1 = [
  "https://images.unsplash.com/photo-1542931287-023b922fa89b?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1518773553398-650c184e0bb3?q=80&w=600&auto=format&fit=crop",
];

const imagesCol2 = [
  "https://images.unsplash.com/photo-1504280533034-7d2d3a77d5b1?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1511447333015-45b65e60f6d5?q=80&w=600&auto=format&fit=crop",
];

const imagesCol3 = [
  "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1519608487953-e999c86e7455?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1605806616949-1e87b487cb2a?q=80&w=600&auto=format&fit=crop",
];

const imagesCol4 = [
  "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=600&auto=format&fit=crop",
];

// Helper component for scrolling columns
interface ScrollColumnProps {
  images: string[];
  duration: number;
  reverse?: boolean;
}

const ScrollColumn: React.FC<ScrollColumnProps> = ({
  images,
  duration,
  reverse = false,
}) => {
  // Duplicate images to create a seamless infinite scroll loop
  const duplicatedImages = [...images, ...images];

  return (
    <div className="flex flex-col gap-4 w-1/4">
      <motion.div
        animate={{
          y: reverse ? ["-50%", "0%"] : ["0%", "-50%"],
        }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: duration,
        }}
        className="flex flex-col gap-4"
      >
        {duplicatedImages.map((src, i) => (
          <div
            key={i}
            className="relative w-full h-[250px] rounded-lg overflow-hidden border border-white/10 shadow-xl"
          >
            {/* Adding a blue/purple tint overlay to match the image aesthetic */}
            <div className="absolute inset-0 bg-blue-600/20 mix-blend-overlay z-10 pointer-events-none" />
            <img
              src={src}
              alt="Design inspiration"
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default function Gallery() {
  return (
    <div className="relative w-full h-[140vh] bg-transparent overflow-hidden flex flex-col items-center pt-24">
      {/* --- HERO TEXT SECTION --- */}
      <div className="relative z-20 text-center max-w-2xl px-4 flex flex-col items-center">
        <h1 className="text-5xl md:text-6xl font-serif font-medium leading-tight text-gray-100">
          Your{" "}
          <span className="text-[#FFD700] font-sans font-semibold tracking-wide">
            one source
          </span>{" "}
          <br />
          for all your designs
        </h1>

        <p className="mt-6 text-gray-500 text-sm md:text-base max-w-md">
          No waste of time and money, we provide you with collection of designs
          to plan your next project.
        </p>

        {/* <div className="flex items-center gap-6 mt-8 font-medium">
          <button className=" hover:bg-[#FFD700] transition-colors text-white px-6 py-3 rounded-md flex items-center gap-2 shadow-lg shadow-blue-500/30">
            Book free call
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="6" width="16" height="12" rx="2" ry="2"></rect>
              <polygon points="22 8 18 11 18 13 22 16 22 8"></polygon>
            </svg>
          </button>
          <button className="text-gray-300 hover:text-gray-500 transition-colors">
            About Us
          </button>
        </div> */}
      </div>

      {/* --- 3D PERSPECTIVE IMAGE GRID --- */}
      {/* The perspective container */}
      <div
        className="absolute top-[25%] md:top-[10%] left-0 w-full h-full perspective-[1200px] flex justify-center pointer-events-none"
        style={{ perspective: "1000px" }}
      >
        {/* The tilted floor wrapper */}
        <div
          className="w-[150%] md:w-[220%] flex justify-center gap-6"
          style={{
            transform: "rotateX(55deg) translateY(-150px) translateZ(-200px)",
            transformStyle: "preserve-3d",
          }}
        >
          {/* Top gradient fade out so images don't clip harshly into the text */}
          {/* <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-white via-white/80 to-transparent z-10 pointer-events-none" /> */}

          {/* Left Column (Scrolls Up, standard speed) */}
          <ScrollColumn images={imagesCol1} duration={10} />

          {/* Middle Column (Scrolls Down, slower speed) */}
          <ScrollColumn images={imagesCol2} duration={10} reverse={true} />

          {/* Right Column (Scrolls Up, faster speed) */}
          <ScrollColumn images={imagesCol3} duration={10} />

          <ScrollColumn images={imagesCol4} duration={10} reverse />
        </div>
      </div>
    </div>
  );
}
