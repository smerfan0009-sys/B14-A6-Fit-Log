"use client";

import React, { useState } from "react";
import logo from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useWorkout } from "@/context/WorkoutContext";

const Navbar = () => {
  const pathname = usePathname();
  const { todayPlan, savedPlan } = useWorkout();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-[#0a0b0d] text-white border-b border-gray-800/80 sticky top-0 z-50">
      <nav className="container mx-auto px-4 lg:px-12 py-3.5 flex items-center justify-between">
        {/* Left side: Logo & Brand */}
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src={logo}
              alt="Logo"
              width={28}
              height={28}
              className="w-7 h-7 object-contain"
            />
            <span className="font-extrabold text-xl tracking-wider text-white">
              FITLOG
            </span>
          </Link>
        </div>

        {/* Center Nav Links (Desktop) */}
        <div className="hidden lg:flex items-center">
          <ul className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider">
            <li>
              <Link
                href="/"
                className={`px-5 py-2 rounded-full transition-all duration-200 ${
                  pathname === "/"
                    ? "bg-[#1e2c14] text-[#ccff00] font-bold"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                Workouts
              </Link>
            </li>
            <li>
              <Link
                href="/my-plan"
                className={`px-5 py-2 rounded-full transition-all duration-200 ${
                  pathname === "/my-plan"
                    ? "bg-[#1e2c14] text-[#ccff00] font-bold"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                My Plan
              </Link>
            </li>
          </ul>
        </div>

        {/* Right Counters & Mobile Toggle */}
        <div className="flex items-center gap-4 sm:gap-6 text-xs font-medium">
          <Link
            href="/my-plan"
            className="flex items-center gap-1.5 sm:gap-2 cursor-pointer"
          >
            <span className="text-gray-300 font-semibold text-xs">Plan</span>
            <span className="bg-[#ccff00] text-black font-extrabold text-[11px] rounded-full w-5 h-5 flex items-center justify-center">
              {todayPlan.length}
            </span>
          </Link>
          <Link
            href="/my-plan"
            className="flex items-center gap-1.5 sm:gap-2 cursor-pointer"
          >
            <span className="text-gray-300 font-semibold text-xs">Saved</span>
            <span className="text-gray-300 text-[11px] rounded-full w-5 h-5 flex items-center justify-center border border-gray-700">
              {savedPlan.length}
            </span>
          </Link>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            type="button"
            className="lg:hidden p-2 text-gray-400 hover:text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#0d0e11] border-b border-gray-800 px-4 py-4 space-y-2">
          <Link
            href="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`block px-4 py-2.5 rounded-lg text-sm font-semibold uppercase tracking-wider transition-all ${
              pathname === "/"
                ? "bg-[#1e2c14] text-[#ccff00]"
                : "text-gray-400 hover:bg-gray-800 hover:text-white"
            }`}
          >
            Workouts
          </Link>
          <Link
            href="/my-plan"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`block px-4 py-2.5 rounded-lg text-sm font-semibold uppercase tracking-wider transition-all ${
              pathname === "/my-plan"
                ? "bg-[#1e2c14] text-[#ccff00]"
                : "text-gray-400 hover:bg-gray-800 hover:text-white"
            }`}
          >
            My Plan
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
