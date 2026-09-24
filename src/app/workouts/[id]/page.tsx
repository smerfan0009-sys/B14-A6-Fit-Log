import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getWorkoutById } from "@/lib/getWorkouts";
import WorkoutActions from "@/components/WorkoutActions";

interface DetailsPageProps {
  params: Promise<{ id: string }> | { id: string };
}

const WorkoutDetailsPage = async ({ params }: DetailsPageProps) => {
  const resolvedParams = await params;
  const workoutId = Number(resolvedParams.id);
  const workout = await getWorkoutById(workoutId);

  if (!workout) {
    notFound();
  }

  return (
    <div className="bg-[#0a0b0d] text-white min-h-screen py-8 px-4 lg:px-12">
      <div className="container mx-auto max-w-6xl">
        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-[#ccff00] mb-6 transition-colors"
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
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to Workouts
        </Link>

        {/* Main Details Card Container */}
        <div className="bg-[#12141a] border border-gray-800/80 rounded-3xl p-6 md:p-8 lg:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Side: Large Workout Image */}
            <div className="relative w-full h-[320px] sm:h-[420px] lg:h-[500px] rounded-2xl overflow-hidden bg-gray-900">
              <Image
                src={workout.image}
                alt={workout.name}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            {/* Right Side: Content Details */}
            <div className="flex flex-col justify-between space-y-6">
              {/* Title & Description */}
              <div>
                <h1 className="text-2xl md:text-4xl font-extrabold uppercase tracking-wide text-white mb-2">
                  {workout.name}
                </h1>
                <p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-4">
                  {workout.description}
                </p>

                {/* Muscle Badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {workout.muscleGroups.map((muscle, index) => (
                    <span
                      key={index}
                      className="bg-[#1e2c14] text-[#ccff00] text-xs font-extrabold uppercase px-3 py-1 rounded-full tracking-wider"
                    >
                      {muscle}
                    </span>
                  ))}
                </div>
              </div>

              {/* Workout Key Specifications Table */}
              <div className="bg-[#0a0b0d]/70 border border-gray-800/60 rounded-xl p-4 sm:p-5 space-y-3 text-xs md:text-sm">
                <div className="flex justify-between items-center border-b border-gray-800/40 pb-2">
                  <span className="text-gray-500 font-bold uppercase text-[11px]">
                    EQUIPMENT
                  </span>
                  <span className="text-gray-200 font-semibold">
                    {workout.equipment}
                  </span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-800/40 pb-2">
                  <span className="text-gray-500 font-bold uppercase text-[11px]">
                    DIFFICULTY
                  </span>
                  <span className="text-gray-200 font-semibold">
                    {workout.difficulty}
                  </span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-800/40 pb-2">
                  <span className="text-gray-500 font-bold uppercase text-[11px]">
                    SETS
                  </span>
                  <span className="text-gray-200 font-semibold">
                    {workout.sets}
                  </span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-800/40 pb-2">
                  <span className="text-gray-500 font-bold uppercase text-[11px]">
                    REPS
                  </span>
                  <span className="text-gray-200 font-semibold">
                    {workout.reps}
                  </span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-800/40 pb-2">
                  <span className="text-gray-500 font-bold uppercase text-[11px]">
                    DURATION
                  </span>
                  <span className="text-gray-200 font-semibold">
                    {workout.duration} min
                  </span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-800/40 pb-2">
                  <span className="text-gray-500 font-bold uppercase text-[11px]">
                    CALORIES
                  </span>
                  <span className="text-gray-200 font-semibold">
                    {workout.caloriesBurned} kcal
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 font-bold uppercase text-[11px]">
                    RATING
                  </span>
                  <span className="text-gray-200 font-semibold">
                    {workout.rating}
                  </span>
                </div>
              </div>

              {/* Instructions Section */}
              <div>
                <h3 className="text-white font-extrabold text-xs md:text-sm uppercase tracking-wider mb-3">
                  INSTRUCTIONS
                </h3>
                <ol className="list-decimal list-inside space-y-2 text-xs md:text-sm text-gray-300 leading-relaxed">
                  {workout.instructions.map((step, index) => (
                    <li key={index} className="pl-1">
                      <span className="text-gray-300">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Interactive Action Buttons */}
              <WorkoutActions workout={workout} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkoutDetailsPage;
