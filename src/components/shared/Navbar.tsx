"use client";

import React from "react";
import logo from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useWorkout } from "@/context/WorkoutContext";

const Navbar = () => {
  const pathname = usePathname();
  const { todayPlan, savedPlan } = useWorkout();

  return (
    <header className="bg-[#0a0b0d] text-white border-b border-gray-800/80 sticky top-0 z-50">
      <nav className="navbar container mx-auto px-4 lg:px-12 py-3.5 flex items-center justify-between">
        {/* Left side: Logo & Brand */}
        <div className="navbar-start flex items-center gap-3">
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

        {/* Center Nav Links */}
        <div className="navbar-center hidden lg:flex">
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

        {/* Right Counters */}
        <div className="navbar-end flex items-center gap-6 text-xs font-medium">
          <Link
            href="/my-plan"
            className="flex items-center gap-2 cursor-pointer"
          >
            <span className="text-gray-300 font-semibold">Plan</span>
            <span className="bg-[#ccff00] text-black font-extrabold text-[11px] rounded-full w-5 h-5 flex items-center justify-center">
              {todayPlan.length}
            </span>
          </Link>
          <Link
            href="/my-plan"
            className="flex items-center gap-2 cursor-pointer"
          >
            <span className="text-gray-300 font-semibold">Saved</span>
            <span className="text-gray-300 text-[11px] rounded-full w-5 h-5 flex items-center justify-center border border-gray-700">
              {savedPlan.length}
            </span>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
