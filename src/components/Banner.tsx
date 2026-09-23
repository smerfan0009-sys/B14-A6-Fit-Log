import Image from "next/image";
import React from "react";
import bannerImg from "@/assets/banner.png";

const Banner = () => {
  return (
    <section className="bg-[#0a0b0d] p-4 md:p-8">
      <div className="container mx-auto">
        {/* Container Box */}
        <div className="bg-[#12141a] rounded-2xl p-8 md:p-14 border border-dashed border-gray-800">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-15">
            {/* Left Text Content */}
            <div className="space-y-6 max-w-xxl">
              <p className="text-[#a3e635] font-semibold tracking-wider text-xs md:text-sm uppercase">
                WORKOUT LIBRARY
              </p>

              <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-[1.08] uppercase tracking-tight">
                TRAIN WITH INTENT. LOG <br className="hidden sm:inline" /> EVERY
                SET.
              </h1>

              <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                FitLog is a dark, no-nonsense gym companion: pick a lift, lock
                it <br className="hidden md:inline" />
                into today&apos;s plan, and watch the week&apos;s work add up.
              </p>

              <button
                type="button"
                className="bg-[#a3e635] hover:bg-[#8ed028] text-black font-extrabold px-6 py-3.5 rounded-lg text-sm tracking-wider uppercase transition-colors"
              >
                BROWSE WORKOUTS
              </button>
            </div>

            {/* Right Image Content */}
            <div className="flex justify-center items-center lg:w-1/2">
              <Image
                src={bannerImg}
                alt="Banner Image"
                width={500}
                height={500}
                className="w-full max-w-md lg:max-w-lg object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
