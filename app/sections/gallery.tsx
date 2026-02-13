import Image from "next/image";

const allImages = Array.from(
  { length: 25 },
  (_, i) => `/gallery/graphics/compressed_${i + 1}.webp`,
);

const split = [
  allImages.slice(0, 7),
  allImages.slice(7, 13),
  allImages.slice(13, 19),
  allImages.slice(19, 25),
];

function ScrollColumn({
  images,
  reverse = false,
}: {
  images: string[];
  reverse?: boolean;
}) {
  const duplicated = [...images, ...images];

  return (
    <div className="flex flex-col gap-4 w-1/4 overflow-hidden">
      <div
        className={`flex flex-col gap-4 ${
          reverse ? "animate-scrollReverse" : "animate-scroll"
        }`}
      >
        {duplicated.map((src, i) => (
          <div
            key={i}
            className="relative w-full h-[250px] rounded-lg overflow-hidden border border-white/10 shadow-xl"
          >
            <div className="absolute inset-0 bg-blue-600/20 mix-blend-overlay z-10 pointer-events-none" />

            {/* ⚡ Faster than Next Image for animations */}
            <img
              src={src}
              loading="lazy"
              className="w-full h-full object-cover"
              alt=""
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Gallery() {
  return (
    <div className="relative w-full h-[140vh] bg-transparent overflow-hidden flex flex-col items-center pt-24">
      {/* Heading */}
      <div className="relative z-20 text-center max-w-2xl px-4">
        <h1 className="text-5xl md:text-6xl font-serif font-medium leading-tight text-gray-100">
          Crafting Content that{" "}
          <span className="text-[#FFD700] font-sans font-semibold tracking-wide">
            shouts Magic
          </span>{" "}
          and Success
        </h1>
      </div>

      {/* Tilted floor */}
      <div className="absolute top-[25%] left-0 w-full h-full flex justify-center pointer-events-none perspective-[1000px]">
        <div
          className="w-[200%] flex justify-center gap-6"
          style={{
            transform: "rotateX(55deg) translateY(-150px) translateZ(-200px)",
            transformStyle: "preserve-3d",
          }}
        >
          <ScrollColumn images={split[0]} />
          <ScrollColumn images={split[1]} reverse />
          <ScrollColumn images={split[2]} />
          <ScrollColumn images={split[3]} reverse />
        </div>
      </div>
    </div>
  );
}
