"use client";

import FooterModel from "../components/FooterModel";

export default function Footer() {
  return (
    <footer className="relative bg-black text-white overflow-hidden">
      {/* CTA */}
      <div className="relative z-10 pt-2 pb-24 text-center">
        <h2 className="text-3xl md:text-5xl font-light leading-tight">
          Ready To <span className="font-semibold">Build A Story</span>
          <br />
          That Hits A Different?
        </h2>

        <button className="mt-8 px-6 py-3 border border-white/30 rounded-full text-sm hover:border-white transition">
          let’s connect →
        </button>
      </div>

      {/* NAV */}
      <div className="relative z-10 flex justify-between items-center px-6 md:px-16 text-sm text-white/60">
        <div className="flex gap-6">
          <a className="hover:text-white">Work</a>
          <a className="hover:text-white">About</a>
          <a className="hover:text-white">Resume</a>
        </div>
        <div className="flex gap-6">
          <a className="hover:text-white">LinkedIn</a>
          <a className="hover:text-white">Behance</a>
          <a className="hover:text-white">Dribbble</a>
          <a className="hover:text-white">Instagram</a>
        </div>
      </div>

      {/* 3D BRAND ZONE */}
      <div className="relative h-[635px] mt-20 overflow-hidden">
        <FooterModel />

        {/* BRAND TEXT */}
        <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
          {/* <h1 className="text-[14vw] font-bold tracking-tight">MADNIS <br/> <span className="align-center">MEDIA</span></h1> */}
          <h1 className="flex flex-col items-center text-[14vw] font-bold tracking-tight leading-[0.85] text-center">
            <span>MADNIS</span>
            <span>MEDIA</span>
          </h1>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="relative z-10 px-6 md:px-16 pb-8 text-xs text-white/40">
        © 2026 Madnis. All Rights Reserved.
      </div>
    </footer>
  );
}
