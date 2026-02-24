"use client";

const allImages = [
  "/videos-section/compressed_work1.mp4",
  "/videos-section/compressed_work2.mp4",
  "/videos-section/compressed_work3.mp4",
  "/videos-section/compressed_work4.mp4",
  "/videos-section/compressed_work5.mp4",
  "/videos-section/compressed_work6.mp4",
  "/videos-section/compressed_work7.mp4",
  "/videos-section/compressed_work8.mp4",
  "/videos-section/compressed_work9.mp4",
  "/videos-section/compressed_work10.mp4",
  "/videos-section/compressed_work11.mp4",
  "/videos-section/compressed_work12.mp4",

];

const split = [
  allImages.slice(0, 3),
  allImages.slice(3, 6),
  allImages.slice(6, 9),
  allImages.slice(9, 12),
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
            <video
              src={src}
              muted
              autoPlay
              loop
              playsInline
              preload="none"
              // loading="lazy"
              className="w-full h-full object-cover"
              // alt=""
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function OurWork({ id }: { id?: string }) {

  return (
    <section
      id={id}
      className="min-h-screen h-[120vh] bg-transparent text-white py-14 overflow-hidden"
    >
      {/* Header */}
      <div className="w-[85%] mx-auto mb-40 flex justify-between items-end">
        <p className="text-md text-gray-400 max-w-[460px] leading-relaxed ml-25 pb-25">
          Some people create content. We create obsession. Every project we
          touch turns into something that refuses to be ignored, lives rent-free
          in people’s minds, and makes competitors refresh your page wondering
          how you did it.
        </p>

        <h2 className="text-[120px] font-semibold tracking-tight">
          OUR <br /> WORKs
        </h2>
      </div>

      <div className="absolute top-[15%] left-0 w-full h-full flex justify-center pointer-events-none perspective-[500px]">
        <div
          className="w-[200%] flex justify-center gap-6"
          style={{
            transform: "rotateX(35deg) translateY(-150px) translateZ(-170px)",
            transformStyle: "preserve-3d",
          }}
        >
          <ScrollColumn images={split[0]} />
          <ScrollColumn images={split[1]} reverse />
          <ScrollColumn images={split[2]} />
          <ScrollColumn images={split[3]} reverse />
        </div>
      </div>
    </section>
  );
}
