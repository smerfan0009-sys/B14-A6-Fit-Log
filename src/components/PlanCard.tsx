"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Workout } from "@/types/fit-log";

interface PlanCardProps {
  workout: Workout;
  type: "today" | "saved";
  onRemove: (id: number) => void;
  onToggleDone?: (id: number) => void;
  isDone?: boolean;
}

const PlanCard: React.FC<PlanCardProps> = ({
  workout,
  type,
  onRemove,
  onToggleDone,
  isDone,
}) => {
  return (
    <div className="bg-[#12141a] border border-gray-800/80 rounded-2xl p-4 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-gray-700/80 transition-all">
      {/* Left Side: Image & Info */}
      <div className="flex items-center gap-4">
        <div className="relative w-20 h-20 md:w-24 md:h-20 rounded-xl overflow-hidden bg-gray-900 flex-shrink-0">
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            className="object-cover"
          />
        </div>

        <div className="space-y-1">
          <h4 className="text-white font-extrabold text-sm md:text-base uppercase tracking-wide">
            {workout.name}
          </h4>
          <p className="text-gray-400 text-xs">{workout.equipment}</p>

          <div className="flex items-center gap-3 text-gray-400 text-xs pt-1">
            <span className="flex items-center gap-1">
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              {workout.duration} min
            </span>
            <span className="flex items-center gap-1">
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
                />
              </svg>
              {workout.caloriesBurned} kcal
            </span>
            <span className="flex items-center gap-1">
              <svg
                className="w-3.5 h-3.5 text-yellow-500 fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
              {workout.rating}
            </span>
          </div>
        </div>
      </div>

      {/* Right Side: Action Buttons */}
      <div className="flex items-center justify-end gap-3">
        <Link
          href={`/workouts/${workout.id}`}
          className="bg-[#1a1d26] hover:bg-[#252a36] text-gray-300 text-xs font-semibold px-4 py-2.5 rounded-xl border border-gray-800 transition-colors"
        >
          View Details
        </Link>

        {type === "today" && onToggleDone && (
          <button
            onClick={() => onToggleDone(workout.id)}
            className={`text-xs font-extrabold px-4 py-2.5 rounded-xl flex items-center gap-1.5 transition-colors ${
              isDone
                ? "bg-[#1e2c14] text-[#ccff00] border border-[#ccff00]"
                : "bg-[#ccff00] hover:bg-[#8ed028] text-black"
            }`}
          >
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M5 13l4 4L19 7"
              />
            </svg>
            {isDone ? "Done" : "Mark as Done"}
          </button>
        )}

        <button
          onClick={() => onRemove(workout.id)}
          className="text-gray-500 hover:text-red-400 p-2 transition-colors"
          aria-label="Remove item"
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
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default PlanCard;
