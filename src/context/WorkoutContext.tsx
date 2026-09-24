"use client";

import React, { createContext, useContext, useState } from "react";
import { Workout } from "@/types/fit-log";
import { toast } from "react-toastify";

interface WorkoutContextType {
  todayPlan: Workout[];
  savedPlan: Workout[];
  addToTodayPlan: (workout: Workout) => void;
  addToSavedPlan: (workout: Workout) => void;
  removeFromTodayPlan: (id: number) => void;
  removeFromSavedPlan: (id: number) => void;
  completedIds: number[];
  toggleMarkAsDone: (id: number) => void;
}

const WorkoutContext = createContext<WorkoutContextType | undefined>(undefined);

export const WorkoutProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [todayPlan, setTodayPlan] = useState<Workout[]>([]);
  const [savedPlan, setSavedPlan] = useState<Workout[]>([]);
  const [completedIds, setCompletedIds] = useState<number[]>([]);

  const addToTodayPlan = (workout: Workout) => {
    const exists = todayPlan.some((item) => item.id === workout.id);
    if (!exists) {
      setTodayPlan((prev) => [...prev, workout]);
      toast.success(`${workout.name} added to Today's Plan!`);
    } else {
      toast.info(`${workout.name} is already in Today's Plan!`);
    }
  };

  const addToSavedPlan = (workout: Workout) => {
    const exists = savedPlan.some((item) => item.id === workout.id);
    if (!exists) {
      setSavedPlan((prev) => [...prev, workout]);
      toast.success(`${workout.name} saved for later!`);
    } else {
      toast.info(`${workout.name} is already saved!`);
    }
  };

  const removeFromTodayPlan = (id: number) => {
    const workout = todayPlan.find((item) => item.id === id);
    setTodayPlan((prev) => prev.filter((item) => item.id !== id));
    if (workout) toast.error(`${workout.name} removed from Today's Plan`);
  };

  const removeFromSavedPlan = (id: number) => {
    const workout = savedPlan.find((item) => item.id === id);
    setSavedPlan((prev) => prev.filter((item) => item.id !== id));
    if (workout) toast.error(`${workout.name} removed from Saved`);
  };

  const toggleMarkAsDone = (id: number) => {
    const isCompleted = completedIds.includes(id);
    setCompletedIds((prev) =>
      isCompleted ? prev.filter((item) => item !== id) : [...prev, id],
    );

    if (isCompleted) {
      toast.info("Marked as pending");
    } else {
      toast.success("Workout completed! Great job 🎉");
    }
  };

  return (
    <WorkoutContext.Provider
      value={{
        todayPlan,
        savedPlan,
        addToTodayPlan,
        addToSavedPlan,
        removeFromTodayPlan,
        removeFromSavedPlan,
        completedIds,
        toggleMarkAsDone,
      }}
    >
      {children}
    </WorkoutContext.Provider>
  );
};

export const useWorkout = () => {
  const context = useContext(WorkoutContext);
  if (!context) {
    throw new Error("useWorkout must be used within a WorkoutProvider");
  }
  return context;
};
