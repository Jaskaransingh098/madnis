"use client";

import Image from "next/image";
import logo from "../../public/logo/logo-transparent.png";

export default function Navbar() {
    return (
        <div className="fixed top-5 left-0 w-full z-50 flex justify-center">

            {/* Glass Container */}
            <div className="max-w-[1200px] w-[95%] h-[75px] flex items-center justify-between px-8
                rounded-4xl
                backdrop-blur-md
                bg-white/10
                border border-white/20
                shadow-lg">

                {/* Logo */}
                <Image
                    src={logo}
                    alt="logo"
                    width={70}
                    height={40}
                />

                {/* Nav Links */}
                <ul className="flex gap-10 text-white font-light tracking-wide">

                    {["Features", "Clients", "Results", "Work", "Process"].map((item) => (
                        <li
                            key={item}
                            className="relative cursor-pointer group"
                        >
                            {item}
                            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#D4AF37] transition-all duration-300 group-hover:w-full" />
                        </li>
                    ))}

                </ul>

                {/* Button */}
                <button className="relative px-6 py-2 rounded-full border border-white/30 text-white overflow-hidden group">

                    <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
                        Contact Us
                    </span>

                    <span className="absolute inset-0 bg-white scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />

                </button>

            </div>
        </div>
    );
}
