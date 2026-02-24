"use client";

import SmoothScroll from "./components/SmoothScroll";
import SmoothCursor from "./components/SmoothCursor";
import SectionReveal from "./components/SectionReveal";
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
        <SectionReveal>
          <Hero id="hero" />
        </SectionReveal>

       

        {/* <SectionReveal>
          <CompaniesCapsuleSection id="companies" />
        </SectionReveal> */}

        <SectionReveal>
          <OurWork id="work" />
        </SectionReveal>

        <SectionReveal>
          <WorkVideos id="videos" />
        </SectionReveal>

         <SectionReveal>
          <Gallery id="gallery" />
        </SectionReveal>

        <SectionReveal>
          <Services id="services" />
        </SectionReveal>

        <SectionReveal>
          <Process id="process" />
        </SectionReveal>

        <SectionReveal>
          <BTS id="bts" />
        </SectionReveal>

        <SectionReveal>
          <Clients id="clients" />
        </SectionReveal>

        <SectionReveal>
          <TestimonialsSection id="testimonials" />
        </SectionReveal>

        <SectionReveal>
          <CTA id="contact" />
        </SectionReveal>

        <Footer />
      </main>
    </>
  );
}
