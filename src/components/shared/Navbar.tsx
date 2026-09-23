import React from "react";
import logo from "@/assets/logo.png";
import Image from "next/image";

const Navbar = () => {
  return (
    <header className="bg-[#0a0b0d] text-white border-b border-gray-800">
      <nav className="navbar container mx-auto px-4 lg:px-12 py-4">
        {/* Left side: Logo & Brand */}
        <div className="navbar-start flex items-center gap-3">
          <div className="dropdown lg:hidden">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-[#13151b] text-white rounded-box z-50 mt-3 w-52 p-2 shadow-lg border border-gray-800"
            >
              <li>
                <a className="text-[#a3e635] font-semibold">Workouts</a>
              </li>
              <li>
                <a>My Plan</a>
              </li>
            </ul>
          </div>

          <div className="flex items-center gap-2">
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
          </div>
        </div>

        {/* Center Nav Links */}
        <div className="navbar-center hidden lg:flex">
          <ul className="flex items-center gap-3 text-sm font-medium">
            <li>
              <button
                type="button"
                className="bg-[#182713] text-[#a3e635] px-5 py-2 rounded-full font-semibold transition-colors"
              >
                Workouts
              </button>
            </li>
            <li>
              <button
                type="button"
                className="text-gray-400 hover:text-white px-4 py-2 transition-colors"
              >
                My Plan
              </button>
            </li>
          </ul>
        </div>

        {/* Right Counters */}
        <div className="navbar-end flex items-center gap-6 text-sm font-medium">
          <div className="flex items-center gap-2 cursor-pointer">
            <span className="text-gray-300">Plan</span>
            <span className="bg-[#a3e635] text-black font-bold text-xs rounded-full w-5 h-5 flex items-center justify-center">
              0
            </span>
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <span className="text-gray-300">Saved</span>
            <span className="bg-[#1d1f25] text-gray-400 text-xs rounded-full w-5 h-5 flex items-center justify-center border border-gray-700">
              0
            </span>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
