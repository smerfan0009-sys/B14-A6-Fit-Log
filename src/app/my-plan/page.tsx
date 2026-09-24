"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { useWorkout } from "@/context/WorkoutContext";
import PlanCard from "@/components/PlanCard";
import { toast } from "react-toastify";

const MyPlanPage = () => {
  const [activeTab, setActiveTab] = useState<"today" | "saved">("today");
  const [sortBy, setSortBy] = useState<"duration" | "calories" | "rating">(
    "duration",
  );

  const {
    todayPlan,
    savedPlan,
    removeFromTodayPlan,
    removeFromSavedPlan,
    completedIds,
    toggleMarkAsDone,
  } = useWorkout();

  const currentList = activeTab === "today" ? todayPlan : savedPlan;

  const sortedList = useMemo(() => {
    return [...currentList].sort((a, b) => {
      if (sortBy === "duration") return b.duration - a.duration;
      if (sortBy === "calories") return b.caloriesBurned - a.caloriesBurned;
      if (sortBy === "rating") return b.rating - a.rating;
      return 0;
    });
  }, [currentList, sortBy]);

  const totalExercises = currentList.length;
  const totalMinutes = currentList.reduce(
    (acc, item) => acc + item.duration,
    0,
  );
  const totalCalories = currentList.reduce(
    (acc, item) => acc + item.caloriesBurned,
    0,
  );

  const handleSortChange = (value: "duration" | "calories" | "rating") => {
    setSortBy(value);
    toast.info(`Sorted by ${value}`);
  };

  return (
    <div className="bg-[#0a0b0d] text-white min-h-screen py-10 px-4 lg:px-12">
      <div className="container mx-auto max-w-6xl space-y-8">
        {/* Title Header */}
        <div>
          <h1 className="text-3xl md:text-4xl font-black uppercase tracking-wider text-white">
            MY PLAN
          </h1>
          <p className="text-gray-400 text-xs md:text-sm mt-1">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

        {/* Dynamic Stats Box */}
        <div className="bg-[#12141a] border border-gray-800/80 rounded-2xl p-6 grid grid-cols-3 gap-4 text-left">
          <div>
            <p className="text-gray-400 text-xs font-medium mb-1">Exercises</p>
            <p className="text-3xl md:text-5xl font-black text-[#a3e635]">
              {totalExercises}
            </p>
          </div>

          <div>
            <p className="text-gray-400 text-xs font-medium mb-1">Minutes</p>
            <p className="text-3xl md:text-5xl font-black text-white">
              {totalMinutes}
            </p>
          </div>

          <div>
            <p className="text-gray-400 text-xs font-medium mb-1">Calories</p>
            <p className="text-3xl md:text-5xl font-black text-white">
              {totalCalories}
            </p>
          </div>
        </div>

        {/* Controls: Tabs & Sort Dropdown */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="bg-[#13151c] p-1 rounded-xl border border-gray-800/80 flex items-center gap-1">
            <button
              onClick={() => setActiveTab("today")}
              className={`px-5 py-2 text-xs font-bold rounded-lg transition-all ${
                activeTab === "today"
                  ? "bg-[#20242f] text-white shadow-sm"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Today&apos;s Plan
            </button>
            <button
              onClick={() => setActiveTab("saved")}
              className={`px-5 py-2 text-xs font-bold rounded-lg transition-all ${
                activeTab === "saved"
                  ? "bg-[#20242f] text-white shadow-sm"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Saved
            </button>
          </div>

          {/* Sort By Dropdown with Toast */}
          <div className="flex items-center gap-2 text-xs">
            <span className="text-gray-400">Sort By</span>
            <select
              value={sortBy}
              onChange={(e) =>
                handleSortChange(
                  e.target.value as "duration" | "calories" | "rating",
                )
              }
              className="bg-[#13151c] text-white border border-gray-800 rounded-xl px-3 py-2 text-xs outline-none cursor-pointer focus:border-gray-700"
            >
              <option value="duration">Duration</option>
              <option value="calories">Calories</option>
              <option value="rating">Rating</option>
            </select>
          </div>
        </div>

        {/* List Items or Empty State */}
        {sortedList.length > 0 ? (
          <div className="space-y-3">
            {sortedList.map((workout) => (
              <PlanCard
                key={workout.id}
                workout={workout}
                type={activeTab}
                onRemove={
                  activeTab === "today"
                    ? removeFromTodayPlan
                    : removeFromSavedPlan
                }
                onToggleDone={toggleMarkAsDone}
                isDone={completedIds.includes(workout.id)}
              />
            ))}
          </div>
        ) : (
          <div className="border border-dashed border-gray-800/80 rounded-2xl p-12 md:p-20 text-center flex flex-col items-center justify-center bg-[#0a0b0d]">
            <h3 className="text-white font-extrabold text-lg md:text-xl uppercase tracking-wider mb-2">
              NOTHING HERE YET
            </h3>
            <p className="text-gray-400 text-xs md:text-sm max-w-md mb-6">
              Browse the library and add a lift to get today moving.
            </p>

            <Link
              href="/"
              className="bg-[#a3e635] hover:bg-[#8ed028] text-black font-extrabold text-xs md:text-sm px-6 py-3 rounded-full transition-colors uppercase tracking-wider"
            >
              Go to workouts
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyPlanPage;
