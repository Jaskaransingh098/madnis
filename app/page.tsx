"use client";

import SmoothScroll from "./components/SmoothScroll";
import Hero from "./sections/hero";
import BTS from "./sections/bts";
import Services from "./sections/services";
import Navbar from "./sections/navbar";
import CTA from "./sections/cta";
import Process from "./sections/process";
import OurWork from "./sections/videos";
// import Clients from "./sections/clients";
import Footer from "./sections/footer";
import TestimonialsSection from "./sections/testimonial";
import CompaniesCapsuleSection from "./sections/companiesWork";

export default function Home() {
  return (
    <>
      <SmoothScroll />

      <main>
        <Navbar />
        <Hero />
        {/* <Clients /> */}
        <CompaniesCapsuleSection />
        <OurWork />
        <Process/>
        <Services />
        <BTS />
        <TestimonialsSection/>
        <CTA />
        <Footer />
      </main>
    </>
  )
}