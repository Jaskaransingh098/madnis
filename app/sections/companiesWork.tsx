"use client";

import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import Image from "next/image";

const companies = [
    {
        id: 1,
        name: "AMAZON",
        romanYear: "MDCXLII",
        bgImage: "/roman/1.jpg",
        logo: "/client-logos/9.png",
        works: ["/works/nightwatch-1.jpg", "/works/nightwatch-2.jpg", "/works/nightwatch-3.jpg"]
    },
    {
        id: 2,
        name: "DELL",
        romanYear: "MDCLI",
        bgImage: "/roman/2.jpg",
        logo: "/client-logos/5.png",
        works: ["/works/kitchen-1.jpg", "/works/kitchen-2.jpg", "/works/kitchen-3.jpg"]
    },
    {
        id: 3,
        name: "CADBURY",
        romanYear: "MDCXXVIII",
        bgImage: "/roman/3.jpg",
        logo: "/client-logos/7.png",
        works: ["/works/artist-1.jpg", "/works/artist-2.jpg", "/works/artist-3.jpg"]
    },
    {
        id: 4,
        name: "MARUTI SUZUKI",
        romanYear: "MDCLX",
        bgImage: "/roman/4.jpg",
        logo: "/client-logos/4.png",
        works: ["/works/titus-1.jpg", "/works/titus-2.jpg", "/works/titus-3.jpg"]
    },
    {
        id: 5,
        name: "DELL",
        romanYear: "MDCLI",
        bgImage: "/roman/5.jpg",
        logo: "/client-logos/5.png",
        works: ["/works/kitchen-1.jpg", "/works/kitchen-2.jpg", "/works/kitchen-3.jpg"]
    },
    {
        id: 6,
        name: "DELL",
        romanYear: "MDCLI",
        bgImage: "/roman/6.jpg",
        logo: "/client-logos/5.png",
        works: ["/works/kitchen-1.jpg", "/works/kitchen-2.jpg", "/works/kitchen-3.jpg"]
    }
];

export default function CompaniesGallery({ id }: { id?: string }) {

    const [activeIndex, setActiveIndex] = useState(2);
    const capsuleRefs = useRef<(HTMLDivElement | null)[]>([]);
    const worksGridRef = useRef<HTMLDivElement>(null);

    /* Capsule Expansion */
    useEffect(() => {
        capsuleRefs.current.forEach((capsule, index) => {
            if (!capsule) return;

            gsap.to(capsule, {
                flex: activeIndex === index ? 3 : 1,
                duration: 0.8,
                ease: "power3.inOut"
            });
        });
    }, [activeIndex]);

    /* Works Animation */
    useEffect(() => {
        if (!worksGridRef.current) return;

        const items = worksGridRef.current.children;

        gsap.killTweensOf(items);

        gsap.fromTo(
            items,
            { opacity: 0, y: 40, scale: 0.95 },
            { opacity: 1, y: 0, scale: 1, stagger: 0.1, duration: 0.6 }
        );
    }, [activeIndex]);

    return (
        <section id={id} className="relative w-full min-h-screen bg-transparent text-white overflow-hidden pt-40">

            {/* Header */}
            <div className="absolute top- left-0 right-0 z-20 flex justify-between items-center px-12">
                <div className="text-2xl">✱</div>
                <h1 className="text-sm tracking-[0.3em] font-light">COMPANY GALLERY</h1>
                <div className="w-8 h-0.5 bg-white"></div>
            </div>

            <div className="flex flex-col justify-center items-center min-h-screen pt-24 pb-16">

                {/* Capsules */}
                <div className="w-full h-[65vh] flex px-4">

                    {companies.map((company, index) => (
                        <div
                            key={company.id}
                            ref={(el) => { capsuleRefs.current[index] = el; }}
                            onMouseEnter={() => setActiveIndex(index)}
                            className="relative overflow-hidden cursor-pointer"
                        >

                            {/* Background */}
                            <Image
                                src={company.bgImage}
                                alt=""
                                fill
                                className="object-cover"
                            />

                            {/* Overlay */}
                            <div
                                className={`absolute inset-0 transition duration-700 ${activeIndex === index
                                        ? "bg-black/60"
                                        : "bg-black/80"
                                    }`}
                            />

                            {/* Logo Layer */}
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">

                                <div className={`relative transition-all duration-700 ${activeIndex === index
                                        ? "w-[60%] h-[60%] opacity-100"
                                        : "w-[40%] h-[40%] opacity-60 grayscale"
                                    }`}>

                                    {/* <Image
                                        src={company.logo}
                                        alt=""
                                        fill
                                        className="object-contain"
                                    /> */}

                                </div>

                            </div>

                            {/* Content */}
                            <div className="relative z-20 h-full flex flex-col justify-between p-8 md:p-12">

                                <div>
                                    <h2 className={`font-serif transition-all duration-700 ${activeIndex === index
                                            ? "text-4xl md:text-4xl lg:text-6xl"
                                            : "text-xl writing-mode-vertical"
                                        }`}>
                                        {company.name}
                                    </h2>

                                    {/* {activeIndex === index && ( */}
                                        <p className="text-amber-300 text-xs mt-3 tracking-[0.2em]">
                                            {company.romanYear}
                                        </p>
                                    {/* )} */}
                                </div>

                                <span className={`font-serif transition-all duration-700 ${activeIndex === index
                                        ? "text-[160px] text-white/90"
                                        : "text-[110px] text-red-600"
                                    }`}>
                                    {index + 1}
                                </span>

                            </div>

                        </div>
                    ))}

                </div>

                {/* Works Grid */}
                <div className="w-full max-w-7xl px-6 mt-16">
                    <div
                        ref={worksGridRef}
                        key={activeIndex}
                        className="grid grid-cols-1 md:grid-cols-3 gap-6"
                    >

                        {companies[activeIndex].works.map((work, i) => (
                            <div key={i} className="relative h-[300px] overflow-hidden group">

                                <Image
                                    src={work}
                                    alt=""
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/30 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

                            </div>
                        ))}

                    </div>
                </div>

            </div>
        </section>
    );
}
