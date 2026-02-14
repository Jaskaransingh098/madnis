"use client";

import SmoothScroll from "./components/SmoothScroll";
import SmoothCursor from "./components/SmoothCursor";
import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import Hero from "./sections/hero";
import BTS from "./sections/bts";
import Services from "./sections/services";
import Navbar from "./sections/navbar";
import CTA from "./sections/cta";
import Process from "./sections/process";
import OurWork from "./sections/videos";
import Clients from "./sections/clients";
import WorkVideos from "./sections/workVideos";
import Gallery from "./sections/gallery";
import Footer from "./sections/footer";
import TestimonialsSection from "./sections/testimonial";
import CompaniesCapsuleSection from "./sections/companiesWork";

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <SmoothCursor
        size={30}
        color="white"
        rotateOnMove={true}
        scaleOnClick={true}
        glowEffect={true}
      />
      <HeroGeometric />

      <Navbar />

      <main className="z-10">
        <Hero id="hero" />
        <Gallery id="gallery" />
        <CompaniesCapsuleSection id="companies" />
        <OurWork id="work" />
        <WorkVideos id="videos" />
        <Process id="process" />
        <Services id="services" />
        <BTS id="bts" />
        <Clients id="clients" />
        <TestimonialsSection id="testimonials" />
        <CTA id="contact" />
        <Footer />
      </main>
    </>
  );
}
