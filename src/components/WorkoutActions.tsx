"use client";

import React from "react";
import { Workout } from "@/types/fit-log";
import { useWorkout } from "@/context/WorkoutContext";

interface WorkoutActionsProps {
  workout: Workout;
}

const WorkoutActions: React.FC<WorkoutActionsProps> = ({ workout }) => {
  const { addToTodayPlan, addToSavedPlan, todayPlan, savedPlan } = useWorkout();

  const isAddedToToday = todayPlan.some((item) => item.id === workout.id);
  const isSaved = savedPlan.some((item) => item.id === workout.id);

  return (
    <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
      <button
        type="button"
        onClick={() => addToTodayPlan(workout)}
        className={`w-full sm:w-auto font-extrabold text-xs md:text-sm px-6 py-3.5 rounded-xl flex items-center justify-center gap-2 transition-colors uppercase tracking-wider ${
          isAddedToToday
            ? "bg-[#283818] text-[#a3e635] border border-[#a3e635]"
            : "bg-[#a3e635] hover:bg-[#8ed028] text-black"
        }`}
      >
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 002-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
        {isAddedToToday ? "Added to today's plan" : "Add to today's plan"}
      </button>

      <button
        type="button"
        onClick={() => addToSavedPlan(workout)}
        className={`w-full sm:w-auto border font-semibold text-xs md:text-sm px-6 py-3.5 rounded-xl flex items-center justify-center gap-2 transition-colors uppercase tracking-wider ${
          isSaved
            ? "bg-[#1f242d] text-[#a3e635] border-[#a3e635]"
            : "bg-[#181b22] hover:bg-[#20242d] text-white border-gray-700/80"
        }`}
      >
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
          />
        </svg>
        {isSaved ? "Saved" : "Save for later"}
      </button>
    </div>
  );
};

export default WorkoutActions;
