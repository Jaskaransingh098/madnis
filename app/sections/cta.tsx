"use client";

import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative bg-black text-white py-28 px-6 md:px-20 overflow-hidden mt-20">
      {/* GOLDEN BACKGROUND GLOW */}
      {/* <div className="absolute inset-0 bg-gradient-to-tr from-[#c9a227]/25 via-transparent to-transparent blur-[140px]" /> */}

      {/* FADED BIG TEXT */}
      <h1 className="absolute right-64 top-2 text-[14vw] font-bold tracking-tight pointer-events-none select-none">
        <span
          className="bg-gradient-to-b 
    from-[#e6d8a8]/40 
    via-[#c9a227]/25 
    to-[#8f7a2a]/30 
    bg-clip-text text-transparent"
        >
          CONTACT
        </span>
      </h1>

      <div className="relative grid md:grid-cols-2 gap-16 mt-34">
        {/* LEFT SIDE */}
        <div className="space-y-10">
          <span className="px-4 py-1 bg-white/10 rounded-full text-sm">
            Contact
          </span>

          <div>
            <h2 className="text-4xl md:text-5xl font-semibold mb-4">
              Get in touch
            </h2>

            <p className="text-white/60 max-w-sm">
              Have questions or ready to transform your business with AI
              automation?
            </p>
          </div>

          {/* CONTACT CARDS */}
          <div className="space-y-4">
            <ContactCard
              icon={<Mail size={18} />}
              title="Email us"
              value="hello@madnis.com"
            />

            <ContactCard
              icon={<Phone size={18} />}
              title="Call us"
              value="+91 98765 43210"
            />

            <ContactCard
              icon={<MapPin size={18} />}
              title="Our location"
              value="Delhi, India"
            />
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="relative">
          <form className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl space-y-5">
            <Input placeholder="Name" />
            <Input placeholder="Email" />

            <textarea
              placeholder="Message"
              className="w-full h-40 bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-[#c9a227] transition"
            />

            <button className="w-full bg-[#c9a227] text-black py-3 rounded-xl font-semibold hover:brightness-110 transition">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

/* ---------- COMPONENTS ---------- */

function ContactCard({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) {
  return (
    <div className="flex justify-between items-center bg-white/5 border border-white/10 rounded-xl px-5 py-4 hover:border-[#c9a227] transition">
      <div className="flex gap-4 items-center">
        <div className="p-2 bg-white/10 rounded-lg">{icon}</div>

        <div>
          <p className="text-sm text-white/60">{title}</p>
          <p className="text-sm">{value}</p>
        </div>
      </div>

      <ArrowUpRight className="text-white/40" size={18} />
    </div>
  );
}

function Input({ placeholder }: { placeholder: string }) {
  return (
    <input
      placeholder={placeholder}
      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-[#c9a227] transition"
    />
  );
}
