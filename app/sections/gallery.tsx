import { motion, useReducedMotion } from "framer-motion";
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

function ScrollColumn({
  images,
  duration,
  reverse = false,
}: ScrollColumnProps) {
  const duplicatedImages = [...images, ...images];
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="w-1/4 flex-col gap-4 [content-visibility:auto]">
      <motion.div
        animate={
          prefersReducedMotion
            ? undefined
            : {
                y: reverse ? ["-50%", "0%"] : ["0%", "-50%"],
              }
        }
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration,
        }}
        className="flex flex-col gap-4"
      >
        {duplicatedImages.map((src, i) => (
          <div
            key={`${src}-${i}`}
            className="relative h-[250px] w-full overflow-hidden rounded-lg border border-white/10 shadow-xl"
          >
            <div className="pointer-events-none absolute inset-0 z-10 bg-blue-600/20 mix-blend-overlay" />
            <Image
              src={src}
              alt="Design inspiration"
              fill
              loading="lazy"
              sizes="(max-width: 768px) 40vw, 25vw"
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function Gallery() {
  return (
    <div className="relative flex h-[140vh] w-full flex-col items-center overflow-hidden bg-transparent pt-24">
      <div className="relative z-20 flex max-w-2xl flex-col items-center px-4 text-center">
        <h1 className="text-5xl font-serif font-medium leading-tight text-gray-100 md:text-6xl">
          Crafting Content that{" "}
          <span className="font-sans font-semibold tracking-wide text-[#FFD700]">
            shouts Magic
          </span>{" "}
          <br />
          and Success
        </h1>
      </div>

      <div
        className="pointer-events-none absolute left-0 top-[25%] flex h-full w-full justify-center perspective-[1200px] md:top-[22%]"
        style={{ perspective: "1000px" }}
      >
        <div
          className="flex w-[150%] justify-center gap-6 md:w-[220%]"
          style={{
            transform: "rotateX(55deg) translateY(-150px) translateZ(-200px)",
            transformStyle: "preserve-3d",
          }}
        >
          <ScrollColumn images={imagesCol1} duration={16} />
          <ScrollColumn images={imagesCol2} duration={17} reverse />
          <ScrollColumn images={imagesCol3} duration={16} />
          <ScrollColumn images={imagesCol4} duration={17} reverse />
        </div>
      </div>
    </div>
  );
}
