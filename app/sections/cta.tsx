// "use client";
// import { useState } from "react";

// const interests = [
//   "Request app demo",
//   "Product info / Support",
//   "Become a Partner",
//   "Working with you",
//   "General Information",
//   "Medical Enquiries",
//   "Other",
// ];

// export default function CTA() {
//   const [selected, setSelected] = useState("Product info / Support");

//   return (
//     <section className="bg-transparent py-24 px-6 md:px-20 mt-22">
//       <div className=" mx-auto">

//         <h1 className="text-6xl md:text-7xl font-semibold text-white mb-6">
//           Contact Us
//         </h1>

//         <p className="text-white/60 max-w-2xl leading-relaxed mb-12">
//           Got a question, or interested in learning more about Madnis Media? Let
//           us know how we can help. Choose your topic of interest, fill in your
//           details, and we'll get back to you as soon as possible. We look
//           forward to connecting.
//         </p>

//         <div className="mb-14">
//           <p className="text-xl text-white mb-5 font-medium">
//             I’m interested in ...
//           </p>

//           <div className="flex flex-wrap gap-3">
//             {interests.map((item) => (
//               <button
//                 key={item}
//                 onClick={() => setSelected(item)}
//                 className={`px-5 py-2 rounded-full border text-sm transition-all duration-300
//                   ${
//                     selected === item
//                       ? "bg-[#c9a227] text-black border-[#c9a227] shadow-[0_0_15px_rgba(201,162,39,0.35)]"
//                       : "border-white/20 text-white/70 hover:border-[#c9a227] hover:text-[#e6d8a8]"
//                   }`}
//               >
//                 {item}
//               </button>
//             ))}
//           </div>
//         </div>

//         <form className="space-y-10 text-xl md:text-2xl text-white/90">

//           <div className="flex flex-wrap items-center gap-3">
//             <span>Hello, my name is</span>
//             <LineInput placeholder="Full name" className="w-64" />
//             <span>,</span>
//           </div>

//           <div className="flex flex-wrap items-center gap-3">
//             <span>My Company is</span>
//             <LineInput placeholder="Category" className="w-52" />
//             <span>with</span>
//             <LineInput placeholder="Contact Number" className="w-52" />
//             <span>.</span>
//           </div>

//           <div className="flex flex-wrap items-center gap-3">
//             <span>You can reach me at</span>
//             <LineInput placeholder="Email Address" className="w-80" />
//           </div>
//         </form>
//       </div>
//     </section>
//   );
// }

// function LineInput({
//   placeholder,
//   className,
// }: {
//   placeholder: string;
//   className?: string;
// }) {
//   return (
//     <input
//       placeholder={placeholder}
//       className={`bg-transparent border-b border-white/20
//       focus:border-[#c9a227] outline-none px-2 py-1
//       text-white placeholder:text-white/40
//       transition-all duration-300
//       focus:shadow-[0_6px_15px_-8px_rgba(201,162,39,0.6)]
//       ${className}`}
//     />
//   );
// }
"use client";

import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { useState } from "react";

const interests = [
  "Request app demo",
  "Product info / Support",
  "Become a Partner",
  "Working with you",
  "General Information",
  "Medical Enquiries",
  "Other",
];

export default function CTA() {
  const [selected, setSelected] = useState("Product info / Support");

  return (
    <div className="flex flex-col overflow-hidden">
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
