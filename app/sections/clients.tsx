"use client";

export default function Clients({ id }: { id?: string }) {
  const clients = [
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
    "/client-logos/26.png",
    "/client-logos/27.png",
    "/client-logos/28.png",
    "/client-logos/29.png",
    "/client-logos/30.png",
    "/client-logos/31.png",
    "/client-logos/32.png",
  ];

  const positions = [
    "top-16 left-20",
    "top-0 left-48",
    "top-20 left-80",
    "top-4 right-48",
    "top-16 right-10",

    "top-56 left-20",
    "top-60 right-24",

    "bottom-32 left-4",
    "bottom-20 left-56",
    "bottom-24 right-56",
    "bottom-16 right-6",
    "bottom-40 right-20",
    "top-36 left-126",
    "bottom-70 right-46",
    "top-30 right-106",
    "top-10 left-160",
    "bottom-40 left-120",
    "bottom-30 right-110",
    "top-50 right-70",
    "bottom-40 left-30",
    "bottom-70 left-50",
    "bottom-65 left-10",
    "top-50 left-70",
    "top-50 left-0",
    "top-40 left-50",
    "bottom-30 left-90",
    "bottom-20 left-150",
    "bottom-10 right-80",
    "bottom-40 right-90",
    "top-40 right-50",
    "top-15 right-80",
    "bottom-70 right-10",
  ];

  return (
    <section id={id} className="relative py-62 bg-transparent overflow-hidden mt-22">
      {/* Subtle background pattern */}
      {/* <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="w-full h-full bg-[radial-gradient(#e5e5e5_1px,transparent_1px)] [background-size:28px_28px]" />
      </div> */}

      {/* Floating-style static cards */}
      <div className="absolute inset-0 max-w-7xl mx-auto">
        {clients.map((img, i) => (
          <div
            key={i}
            className={`absolute ${positions[i]} w-24 h-28 rounded-2xl overflow-hidden bg-white shadow-md`}
          >
            <img
              src={img}
              alt="client"
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Center Content */}
      <div className="relative z-10 max-w-2xl mx-auto text-center px-6">
        <span className="px-4 py-1 rounded-full bg-white shadow-sm text-sm font-medium text-gray-600">
          Our Clients
        </span>

        <h2 className="mt-6 text-5xl font-semibold text-gray-100 leading-tight">
          Brands That <span className="text-[#D4AF37]">Trust Our Craft</span>
        </h2>

        <p className="mt-6 text-gray-500 text-lg">
          We partner with visionary brands across industries to create powerful
          visual experiences that elevate presence, strengthen identity, and
          deliver measurable impact.
        </p>
      </div>
    </section>
  );
}
