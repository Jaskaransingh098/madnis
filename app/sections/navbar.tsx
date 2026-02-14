"use client";

import Image from "next/image";
import logo from "../../public/logo/logo-transparent.png";

export default function Navbar() {
  const menuItems = [
    { label: "Work", target: "work" },
    { label: "Process", target: "process" },
    { label: "Services", target: "services" },
    { label: "Clients", target: "clients" },
    { label: "Contact", target: "contact" },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="fixed top-5 left-0 w-full z-50 flex justify-center">
      <div
        className="max-w-[1200px] w-[95%] h-[75px] flex items-center justify-between px-8
                rounded-full
                backdrop-blur-md
                bg-white/10
                border border-white/20
                shadow-lg"
      >
        {/* LOGO LEFT */}
        <Image
          src={logo}
          alt="logo"
          width={75}
          height={45}
          className="cursor-pointer transition-transform duration-300 hover:scale-110"
        />

        {/* MENU RIGHT */}
        <ul className="flex gap-5 text-white tracking-wide">
          {menuItems.map((item) => (
            <li
              key={item.label}
              onClick={() => scrollToSection(item.target)}
              className="relative cursor-pointer group px-5 py-2 rounded-full 
  border border-white/20 
  bg-black/70
  backdrop-blur-sm 
  overflow-hidden transition-all duration-300"
            >
              {/* Hover Fill */}
              <span className="absolute inset-0 bg-white scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />

              {/* Text */}
              <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
                {item.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
