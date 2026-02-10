// "use client";

// import { useEffect, useRef } from "react";
// import { gsap } from "gsap";

// const logos = [
//   "/client-logos/1.png",
//   "/client-logos/2.png",
//   "/client-logos/3.png",
//   "/client-logos/4.png",
//   "/client-logos/5.png",
//   "/client-logos/6.png",
//   "/client-logos/7.png",
//   "/client-logos/8.png",
//   "/client-logos/9.png",
//   "/client-logos/10.png",
//   "/client-logos/11.png",
//   "/client-logos/12.png",
//   "/client-logos/13.png",
//   "/client-logos/14.png",
//   "/client-logos/15.png",
//   "/client-logos/16.png",
//   "/client-logos/17.png",
//   "/client-logos/18.png",
//   "/client-logos/19.png",
//   "/client-logos/20.png",
//   "/client-logos/21.png",
//   "/client-logos/22.png",
//   "/client-logos/23.png",
//   "/client-logos/24.png",
//   "/client-logos/25.png",
// ];


// const positions = [
//   { x: 0, y: 0 }, 
//   { x: -25, y: -20 },
//   { x: 25, y: -20 },
//   { x: -30, y: 15 }, 
//   { x: 30, y: 15 }, 
//   { x: -15, y: -10 },
//   { x: 15, y: 10 },
//   { x: 0, y: -25 },
//   { x: -35, y: 0 }, 
//   { x: 35, y: 0 }, 
//   { x: -20, y: 20 }, 
//   { x: 20, y: -15 }, 
//   { x: 10, y: -20 }, 
//   { x: -10, y: 18 }, 
//   { x: 0, y: 15 }, 
// ];

// export default function Clients() {
//   const containerRef = useRef(null);
//   const logoRefs = useRef<(HTMLDivElement | null)[]>([]);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       logoRefs.current.forEach((logo, index) => {
//         const pos = positions[index % positions.length];

//         gsap.set(logo, {
//           z: -2000,
//           x: pos.x + "%",
//           y: pos.y + "%",
//           scale: 0.1,
//           opacity: 0,
//           filter: "blur(8px)",
//         });
//       });

//       const masterTimeline = gsap.timeline({
//         repeat: -1,
//       });

//       logoRefs.current.forEach((logo, index) => {
//         const createSpawnPosition = () => ({
//           x: gsap.utils.random(-40, 40),
//           y: gsap.utils.random(-30, 30),
//         });

//         const timeline = gsap.timeline({
//           repeat: -1,
//           repeatRefresh: true,
//         });

//         timeline
//           .fromTo(
//             logo,
//             () => {
//               const pos = createSpawnPosition();

//               return {
//                 z: -2000,
//                 x: pos.x + "%",
//                 y: pos.y + "%",
//                 scale: 0.1,
//                 opacity: 0,
//                 filter: "blur(8px)",
//               };
//             },
//             {
//               z: -1000,
//               scale: 0.35,
//               opacity: 0.4,
//               filter: "blur(4px)",
//               duration: 1.5,
//               ease: "none",
//             },
//           )

//           .to(logo, {
//             z: 0,
//             scale: 1,
//             opacity: 1,
//             filter: "blur(0px)",
//             duration: 2,
//             ease: "none",
//           })

//           .to(logo, {
//             duration: 0.8,
//           })

//           .to(logo, {
//             z: 1500,
//             x: () => gsap.utils.random(-60, 60) + "%",
//             y: () => gsap.utils.random(-40, 40) + "%",
//             scale: 3,
//             opacity: 0,
//             filter: "blur(12px)",
//             duration: 1.5,
//             ease: "none",
//           });

//         masterTimeline.add(timeline, index * 0.6);
//       });
//     }, containerRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section className="relative w-full h-screen bg-black overflow-hidden flex items-center justify-center">
//       <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black opacity-50 pointer-events-none" />

//       <h2 className="absolute z-20 text-white text-4xl md:text-6xl font-serif text-center leading-tight px-4">
//         75+ brands <br /> already said "Wow".
//       </h2>


//       <div
//         ref={containerRef}
//         className="absolute inset-0 flex items-center justify-center"
//         style={{
//           perspective: "1000px",
//           perspectiveOrigin: "50% 50%",
//         }}
//       >

//         <div
//           className="relative w-full h-full flex items-center justify-center"
//           style={{
//             transformStyle: "preserve-3d",
//           }}
//         >

//           {logos.map((logo, index) => (
//             <div
//               key={index}
//               ref={(el) => {
//                 logoRefs.current[index] = el;
//               }}
//               className="absolute"
//               style={{
//                 transformStyle: "preserve-3d",
//                 backfaceVisibility: "hidden",
//               }}
//             >
//               <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56">

//                 <div className="absolute inset-0 rounded-full bg-white/5 backdrop-blur-md border border-white/10 shadow-[0_25px_80px_rgba(0,0,0,0.9)] flex items-center justify-center">

//                   <img
//                     src={logo}
//                     alt={`Client logo ${index + 1}`}
//                     className="w-[60%] h-[60%] object-contain brightness-110 relative z-10"
//                   />
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
