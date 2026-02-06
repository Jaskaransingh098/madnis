"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScroll() {

    useEffect(() => {

        const lenis = new Lenis({
            duration: 1.8,
            lerp: 0.07,
            wheelMultiplier: 0.5
        });

        gsap.ticker.add((time) => {
            lenis.raf(time * 1000);
        });

        gsap.ticker.lagSmoothing(0);

        lenis.on("scroll", ScrollTrigger.update);

        return () => {
            gsap.ticker.remove(lenis.raf);
            lenis.destroy();
        };

    }, []);

    return null;
}
