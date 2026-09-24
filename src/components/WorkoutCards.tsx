import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Workout } from "@/types/fit-log";

interface WorkoutCardsProps {
  workout: Workout;
}

const WorkoutCards: React.FC<WorkoutCardsProps> = ({ workout }) => {
  return (
    <Link href={`/workouts/${workout.id}`} className="block h-full">
      <div className="bg-[#12141a] border border-gray-800/80 rounded-2xl p-4 flex flex-col justify-between hover:border-gray-700 transition-all duration-300 h-full cursor-pointer">
        <div>
          {/* Card Image Container */}
          <div className="relative w-full h-48 rounded-xl overflow-hidden mb-4 bg-gray-900">
            <Image
              src={workout.image}
              alt={workout.name}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Muscle Group Badges */}
          <div className="flex flex-wrap gap-1.5 mb-3">
            {workout.muscleGroups.map((muscle, index) => (
              <span
                key={index}
                className="bg-[#1e2c14] text-[#a3e635] text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full tracking-wider"
              >
                {muscle}
              </span>
            ))}
          </div>

          {/* Workout Name & Equipment */}
          <h3 className="text-white font-extrabold text-base md:text-lg uppercase tracking-wide line-clamp-1">
            {workout.name}
          </h3>
          <p className="text-gray-400 text-xs mb-4">{workout.equipment}</p>
        </div>

        {/* Footer Info: Duration, Calories, Rating */}
        <div className="flex items-center gap-4 text-gray-400 text-xs pt-3 border-t border-gray-800/50">
          <div className="flex items-center gap-1">
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
            <span>{workout.duration} min</span>
          </div>

          <div className="flex items-center gap-1">
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
            <span>{workout.caloriesBurned} kcal</span>
          </div>

          <div className="flex items-center gap-1">
            <svg
              className="w-3.5 h-3.5 text-yellow-500 fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
            <span>{workout.rating}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default WorkoutCards;
