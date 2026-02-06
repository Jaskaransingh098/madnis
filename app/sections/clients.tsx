"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

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
    "/client-logos/26.png",
    "/client-logos/27.png",
    "/client-logos/28.png",
    "/client-logos/29.png",
    "/client-logos/30.png",
    "/client-logos/31.png",
    "/client-logos/32.png",
    "/client-logos/33.png",
    "/client-logos/34.png",
    "/client-logos/35.png",
    "/client-logos/36.png",
    "/client-logos/37.png",
    "/client-logos/38.png",
    "/client-logos/39.png",
    "/client-logos/40.png",
    "/client-logos/41.png",
    "/client-logos/42.png",
    "/client-logos/43.png",
    "/client-logos/44.png",
    "/client-logos/45.png",
    "/client-logos/46.png",
    "/client-logos/47.png",
    "/client-logos/48.png",
    "/client-logos/49.png",
    "/client-logos/50.png",
    "/client-logos/51.png",
    "/client-logos/52.png",
    "/client-logos/53.png",
    "/client-logos/54.png",
    "/client-logos/55.png",
    "/client-logos/56.png",
    "/client-logos/57.png",
    "/client-logos/58.png",
    "/client-logos/59.png",
    "/client-logos/60.png",
    "/client-logos/61.png",
    "/client-logos/62.png",
    "/client-logos/63.png",
    "/client-logos/64.png",
    "/client-logos/65.png",
];

const Clients = () => {
    const rowRefs = useRef<HTMLDivElement[]>([]);

    useEffect(() => {
        rowRefs.current.forEach((row, index) => {
            if (!row) return;

            const totalWidth = row.scrollWidth / 2;
            const moveLeft = index % 2 === 0;

            gsap.fromTo(
                row,
                {
                    x: moveLeft ? 0 : -totalWidth,
                },
                {
                    x: moveLeft ? -totalWidth : 0,
                    duration: 30,
                    ease: "none",
                    repeat: -1,
                }
            );
        });
    }, []);


    const chunkSize = Math.ceil(logos.length / 4);
    const rows = Array.from({ length: 4 }, (_, i) =>
        logos.slice(i * chunkSize, (i + 1) * chunkSize)
    );

    return (
        <section className="h-[100vh] bg-transparent py-10 overflow-hidden z-20">
            <div className="w-[97%] mx-auto px-8">
                <div className="grid md:grid-cols-2 gap-6 items-center">
                    <div>
                        <h2 className="text-5xl md:text-6xl font-semibold text-white leading-tight">
                            We have worked with{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
                                65+
                            </span>{" "}
                            brands and successfully forced them to say
                            <span className="block mt-4 text-yellow-500 italic">
                                “Waao”
                            </span>
                        </h2>

                        <div className="mt-8 h-[1px] w-32 bg-gradient-to-r from-yellow-500 to-transparent" />
                    </div>

                    <div className="space-y-16 md:space-y-0 relative">

                        <div className="absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-black to-transparent z-10" />
                        <div className="absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-black to-transparent z-10" />

                        {rows.map((row, rowIndex) => (
                            <div key={rowIndex} className="overflow-hidden">

                                <div
                                    ref={(el) => {
                                        if (el) rowRefs.current[rowIndex] = el;
                                    }}
                                    className="flex gap-10 md:gap-3 w-max will-change-transform"

                                >
                                    {[...row, ...row].map((logo, index) => (
                                        <div
                                            key={index}
                                            className="
    w-44 h-28 md:w-38 md:h-45 
    flex items-center justify-center
    opacity-100 hover:opacity-100
    transition duration-300
  "
                                        >
                                            <img
                                                src={logo}
                                                alt="client"
                                                className="
      max-h-full object-contain
      brightness-310 contrast-70
      hover:grayscale-0 hover:scale-110
      hover:drop-shadow-[0_0_10px_rgba(255,215,0,0.35)]
      transition duration-300
    "
                                          />
                                        </div>

                                    ))}
                                </div>

                            </div>
                        ))}

                    </div>

                </div>
            </div>
        </section>
    );
};

export default Clients;
