import React from "react";

const GlobalLoading = () => {
  return (
    <div className="bg-[#0a0b0d] text-white min-h-screen py-8 px-4 lg:px-12 animate-pulse">
      <div className="container mx-auto max-w-6xl space-y-8">
        <div className="space-y-3">
          <div className="h-8 md:h-10 w-48 md:w-64 bg-[#181b22] rounded-xl"></div>
          <div className="h-4 w-64 md:w-96 bg-[#13151c] rounded-lg"></div>
        </div>

        <div className="bg-[#12141a] border border-gray-800/80 rounded-2xl p-6 grid grid-cols-3 gap-4">
          <div className="space-y-2">
            <div className="h-3 w-16 bg-[#1d212b] rounded"></div>
            <div className="h-8 md:h-10 w-12 bg-[#252b38] rounded-lg"></div>
          </div>
          <div className="space-y-2">
            <div className="h-3 w-16 bg-[#1d212b] rounded"></div>
            <div className="h-8 md:h-10 w-16 bg-[#252b38] rounded-lg"></div>
          </div>
          <div className="space-y-2">
            <div className="h-3 w-16 bg-[#1d212b] rounded"></div>
            <div className="h-8 md:h-10 w-16 bg-[#252b38] rounded-lg"></div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="h-10 w-52 bg-[#13151c] border border-gray-800/80 rounded-xl"></div>
          <div className="h-9 w-36 bg-[#13151c] border border-gray-800/80 rounded-xl"></div>
        </div>

        <div className="space-y-4">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="bg-[#12141a] border border-gray-800/80 rounded-2xl p-4 flex flex-col md:flex-row md:items-center justify-between gap-4"
            >
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 md:w-24 md:h-20 bg-[#1e232d] rounded-xl flex-shrink-0"></div>
                <div className="space-y-2.5">
                  <div className="h-5 w-36 md:w-48 bg-[#1e232d] rounded-md"></div>
                  <div className="h-3.5 w-24 bg-[#161922] rounded"></div>
                  <div className="flex gap-3 pt-1">
                    <div className="h-3 w-12 bg-[#161922] rounded"></div>
                    <div className="h-3 w-14 bg-[#161922] rounded"></div>
                    <div className="h-3 w-10 bg-[#161922] rounded"></div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-end gap-3">
                <div className="h-9 w-28 bg-[#1d212b] rounded-xl"></div>
                <div className="h-9 w-32 bg-[#232936] rounded-xl"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GlobalLoading;
