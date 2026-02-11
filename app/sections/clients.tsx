"use client";

export default function Clients() {
  const clients = [
    "/clients/client1.jpg",
    "/clients/client2.jpg",
    "/clients/client3.jpg",
    "/clients/client4.jpg",
    "/clients/client5.jpg",
    "/clients/client6.jpg",
    "/clients/client7.jpg",
    "/clients/client8.jpg",
    "/clients/client9.jpg",
    "/clients/client10.jpg",
    "/clients/client11.jpg",
    "/clients/client12.jpg",
  ];

  const positions = [
    "top-16 left-10",
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
  ];

  return (
    <section className="relative py-62 bg-transparent overflow-hidden mt-22">
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
          Testimonials
        </span>

        <h2 className="mt-6 text-5xl font-semibold text-gray-100 leading-tight">
          Trusted by leaders
          <br />
          <span className="text-gray-200">from various industries</span>
        </h2>

        <p className="mt-6 text-gray-500 text-lg">
          Learn why professionals trust our solutions to complete their customer
          journeys.
        </p>

        {/* <button className="mt-8 px-6 py-3 bg-black text-white rounded-full font-medium hover:scale-105 transition">
          Read Success Stories →
        </button> */}
      </div>
    </section>
  );
}
