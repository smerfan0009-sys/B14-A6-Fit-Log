import React from "react";

const WorkoutDetailsLoading = () => {
  return (
    <div className="bg-[#0a0b0d] text-white min-h-screen py-8 px-4 lg:px-12 animate-pulse">
      <div className="container mx-auto max-w-6xl space-y-6">
        <div className="h-4 w-32 bg-[#181b22] rounded-md"></div>
        <div className="bg-[#12141a] border border-gray-800/80 rounded-3xl p-6 md:p-8 lg:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="w-full h-[320px] sm:h-[420px] lg:h-[500px] bg-[#1e232d] rounded-2xl"></div>
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="h-8 md:h-10 w-3/4 bg-[#1e232d] rounded-xl"></div>
                <div className="h-4 w-full bg-[#161922] rounded"></div>
              </div>
              <div className="flex gap-2">
                <div className="h-6 w-20 bg-[#1d2916] rounded-full"></div>
                <div className="h-6 w-24 bg-[#1d2916] rounded-full"></div>
              </div>
              <div className="bg-[#0a0b0d]/70 border border-gray-800/60 rounded-xl p-4 space-y-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="flex justify-between items-center py-1"
                  >
                    <div className="h-3 w-20 bg-[#161922] rounded"></div>
                    <div className="h-3 w-24 bg-[#1d212b] rounded"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkoutDetailsLoading;
