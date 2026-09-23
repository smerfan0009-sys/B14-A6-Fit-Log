import React from "react";
import { getWorkouts } from "@/lib/getWorkouts";
import WorkoutCards from "./WorkoutCards";

const Cards = async () => {
  const workouts = await getWorkouts();

  return (
    <section className="bg-[#0a0b0d] text-white py-10 px-4 lg:px-12">
      <div className="container mx-auto">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-extrabold uppercase tracking-wider text-white">
            THE LIBRARY
          </h2>
          <p className="text-gray-400 text-xs md:text-sm mt-1">
            Twelve lifts covering every major muscle group.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {workouts.map((workout) => (
            <WorkoutCards key={workout.id} workout={workout} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cards;