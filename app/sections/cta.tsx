"use client";

import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { useState } from "react";

const interests = [
  "Request app demo",
  "Product info / Support",
  "Become a Partner",
  "Working with you",
  "General Information",
  "Other",
];

export default function CTA({ id }: { id?: string }) {
  const [selected, setSelected] = useState("Product info / Support");

  return (
    <div id={id} className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <h1 className="text-white font-semibold">
            <span
              className="text-5xl md:text-[10rem] font-bold leading-none
              bg-gradient-to-b from-[#f7e7b6] via-[#c9a227] to-[#8f7a2a]
              bg-clip-text text-transparent"
            >
              Contact Us
            </span>
          </h1>
        }
      >
        <div className="w-full max-w-4xl mx-auto text-white">
          {/* INTEREST PILLS */}
          <div className="mb-12">
            <p className="text-xl mb-6 font-medium text-white/90">
              I’m interested in ...
            </p>

            <div className="flex flex-wrap gap-3">
              {interests.map((item) => (
                <button
                  key={item}
                  onClick={() => setSelected(item)}
                  className={`px-5 py-2 rounded-full border text-sm transition-all duration-300
                  ${
                    selected === item
                      ? "bg-[#c9a227] text-black border-[#c9a227] shadow-[0_0_18px_rgba(201,162,39,0.4)]"
                      : "border-white/20 text-white/70 hover:border-[#c9a227] hover:text-[#e6d8a8]"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* FORM */}
          <form className="space-y-12 text-xl md:text-2xl text-white/90">
            <Sentence>
              Hello, my name is
              <LineInput placeholder="Full name" className="w-64" />,
            </Sentence>

            <Sentence>
              My Company is
              <LineInput placeholder="Category" className="w-52" />
              with
              <LineInput placeholder="Contact Number" className="w-52" />.
            </Sentence>

            <Sentence>
              You can reach me at
              <LineInput placeholder="Email Address" className="w-80" />
            </Sentence>

            <div className="pt-6">
              <button
                type="submit"
                className="px-10 py-3 rounded-xl font-semibold
      bg-gradient-to-b from-[#f7e7b6] via-[#c9a227] to-[#8f7a2a]
      text-black
      shadow-[0_8px_30px_rgba(201,162,39,0.35)]
      hover:brightness-110 transition-all duration-300"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </ContainerScroll>
    </div>
  );
}

/* ---------- Sentence Wrapper ---------- */

function Sentence({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-wrap items-center gap-3 leading-relaxed">
      {children}
    </div>
  );
}

/* ---------- INPUT ---------- */

function LineInput({
  placeholder,
  className,
}: {
  placeholder: string;
  className?: string;
}) {
  return (
    <input
      placeholder={placeholder}
      className={`bg-transparent border-b border-white/20 
      focus:border-[#c9a227] outline-none px-2 py-1 
      text-white placeholder:text-white/40 
      transition-all duration-300 
      focus:shadow-[0_6px_15px_-8px_rgba(201,162,39,0.7)]
      ${className}`}
    />
  );
}
