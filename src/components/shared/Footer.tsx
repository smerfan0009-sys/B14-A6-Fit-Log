import React from "react";
import Image from "next/image";
import logo from "@/assets/logo.png";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0a0b0d] text-white border-t border-gray-800/80">
      <div className="container mx-auto px-4 lg:px-12 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <Image
            src={logo}
            alt="FitLog Logo"
            width={24}
            height={24}
            className="w-6 h-6 object-contain"
          />

          <span className="font-extrabold text-lg tracking-wider text-white">
            FITLOG
          </span>
        </div>
        <div className="text-gray-500 text-xs sm:text-sm text-center sm:text-right">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
