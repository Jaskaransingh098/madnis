"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {

    const wordRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {

        const words = [
            "Magic",
            "Success",
            "Impact",
            "Influence",
            "Growth"
        ];

        const directions = [
            { x: -120, y: -120 },
            { x: 120, y: -120 },
            { x: 120, y: 120 },
            { x: -120, y: 120 }
        ];

        let index = 0;

        const wordsAnimate = gsap.timeline({ repeat: -1, repeatDelay: 0.5 });

        words.forEach((word, i) => {

            const dir = directions[i % directions.length];

            wordsAnimate.to(wordRef.current, {
                x: -40,
                y: -40,
                opacity: 0,
                duration: 0.5,
                ease: "power2.inOut",
                onComplete: () => {
                    if (!wordRef.current) return;
                    wordRef.current.innerText = words[(index + 1) % words.length];
                    index++;
                }
            });

            wordsAnimate.fromTo(
                wordRef.current,
                {
                    x: dir.x,
                    y: dir.y,
                    opacity: 0
                },
                {
                    x: 0,
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: "power3.out"
                }
            );

            wordsAnimate.to({}, { duration: 0.8 });

        });

    }, []);

    return (
        <>
            <section className="hero-section relative w-full h-screen overflow-hidden">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute top-0 left-0 w-full h-full object-cover"
                >
                    <source src='/hero-section/compressed_hero-section-video.mp4' type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />

                <div className="relative z-10 h-full flex items-center">

                    <div className="max-w-[700px] ml-[5vw] mt-[20%] text-white">

                        <h1 className="text-3xl md:text-5xl font-light leading-tight">

                            Crafting Content That Screams

                            <br />

                            <span
                                ref={wordRef}
                                className="inline-block text-[#D4AF37]"
                            >
                                Magic
                            </span>

                        </h1>

                        <p className="mt-6 text-lg text-gray-300 max-w-[500px]">
                            Where creativity meets AI intelligence and ordinary ideas disappear forever.
                        </p>

                        <button className="mt-10 px-8 py-3 rounded-full border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition">
                            Start Your Project
                        </button>

                    </div>

                </div>
                <div className="pointer-events-none absolute bottom-0 left-0 w-full h-7 bg-gradient-to-b from-transparent to-black backdrop-blur-sm" />

            </section>
        </>
    )
}