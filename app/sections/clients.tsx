"use client";

const logos = [
  "/client-logos/1.png",
  "/client-logos/2.png",
  "/client-logos/3.png",
  "/client-logos/4.png",
  "/client-logos/5.png",
  "/client-logos/6.png",
  "/client-logos/7.png",
  "/client-logos/8.png",
  "/client-logos/9.png",
  "/client-logos/10.png",
  "/client-logos/11.png",
  "/client-logos/12.png",
  "/client-logos/13.png",
  "/client-logos/14.png",
  "/client-logos/15.png",
  "/client-logos/16.png",
  "/client-logos/17.png",
  "/client-logos/18.png",
  "/client-logos/19.png",
  "/client-logos/20.png",
  "/client-logos/21.png",
  "/client-logos/22.png",
  "/client-logos/23.png",
  "/client-logos/24.png",
  "/client-logos/25.png",
];

// 🎯 Carefully designed bubble layout
const bubbles = [
  { top: "10%", left: "18%", size: 130 },
  { top: "6%", left: "38%", size: 110 },
  { top: "12%", left: "68%", size: 100 },
  { top: "18%", left: "82%", size: 120 },

  { top: "38%", left: "8%", size: 120 },
  { top: "45%", left: "20%", size: 160 },
  { top: "52%", left: "35%", size: 150 },
  { top: "60%", left: "50%", size: 130 },
  { top: "48%", left: "68%", size: 120 },
  { top: "58%", left: "85%", size: 140 },

  { top: "72%", left: "12%", size: 110 },
  { top: "78%", left: "28%", size: 130 },
  { top: "82%", left: "45%", size: 120 },
  { top: "75%", left: "62%", size: 150 },
  { top: "80%", left: "80%", size: 130 },

  { top: "65%", left: "5%", size: 120 },
  { top: "30%", left: "30%", size: 110 },
  { top: "35%", left: "55%", size: 120 },
  { top: "25%", left: "75%", size: 120 },

  { top: "55%", left: "75%", size: 120 },
  { top: "70%", left: "70%", size: 120 },
  { top: "85%", left: "60%", size: 110 },
  { top: "90%", left: "30%", size: 120 },
  { top: "88%", left: "15%", size: 120 },
  { top: "40%", left: "88%", size: 110 },
];

export default function Clients() {
  return (
    <section className="relative w-full h-screen bg-black overflow-hidden flex items-center justify-center mt-10">
      {/* CENTER TEXT */}
      <h2 className="absolute z-20 text-white text-6xl font-serif text-center leading-tight">
       75+ brands <br /> already said 'Wow'.
      </h2>

      {/* LOGO BUBBLES */}
      {bubbles.map((bubble, index) => (
        <div
          key={index}
          className="absolute rounded-full flex items-center justify-center pt-10"
          style={{
            top: bubble.top,
            left: bubble.left,
            width: bubble.size,
            height: bubble.size,
            transform: "translate(-50%, -50%)",
          }}
        >
          {/* Circle Styling */}
          <div className="relative w-full h-full rounded-full bg-gradient-to-br from-[#3a3a3a] to-[#1f1f1f] shadow-[0_20px_60px_rgba(0,0,0,0.8)] flex items-center justify-center">
            
            <img
              src={logos[index]}
              alt="client"
              className="w-[205%] h-[205%] object-contain brightness-110"
            />
          </div>
        </div>
      ))}

      {/* Bottom fade */}
      {/* <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-black to-transparent" /> */}
    </section>
  );
}
