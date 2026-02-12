import { useRef } from "react";
import { motion, useMotionValue, useAnimationFrame } from "framer-motion";
import Image from "next/image";

const allImages = Array.from(
  { length: 25 },
  (_, i) => `/gallery/graphics/compressed_${i + 1}.webp`,
);

const imagesCol1 = allImages.slice(0, 7);
const imagesCol2 = allImages.slice(7, 13);
const imagesCol3 = allImages.slice(13, 19);
const imagesCol4 = allImages.slice(19, 25);

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
            <div className="absolute inset-0 bg-blue-600/20 mix-blend-overlay z-10 pointer-events-none" />
            <Image
              src={src}
              alt="Design inspiration"
              fill
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
      <div className="relative z-20 text-center max-w-2xl px-4 flex flex-col items-center">
        <h1 className="text-5xl md:text-6xl font-serif font-medium leading-tight text-gray-100">
          Crafting Content that{" "}
          <span className="text-[#FFD700] font-sans font-semibold tracking-wide">
            shouts Magic
          </span>{" "}
          <br />
          and Success
        </h1>

        {/* <p className="mt-6 text-gray-500 text-sm md:text-base max-w-md">
          At Madnis Media, we turn mundane ideas into mind-blowing masterpieces
          through visual storytelling. Our sleep-deprived creatives craft
          content so captivating it makes competitors wonder, “Who’s behind this
          strategy?” Ordinary is overrated — let’s make you unforgettable.
        </p> */}
      </div>

      {/* The perspective container */}
      <div
        className="absolute top-[25%] md:top-[22%] left-0 w-full h-full perspective-[1200px] flex justify-center pointer-events-none"
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
