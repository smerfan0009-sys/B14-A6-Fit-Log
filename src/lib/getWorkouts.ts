import { Workout } from "@/types/fit-log";

const API_URL = "https://api.abcz.workers.dev/api/fitlog";

// 1. Sob workouts fetch korar jonno
export async function getWorkouts(): Promise<Workout[]> {
  try {
    const res = await fetch(API_URL, {
      next: { revalidate: 3600 }, // Next.js ISR Caching (1 hour update interval)
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch workouts: ${res.statusText}`);
    }

    const data: Workout[] = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching workouts:", error);
    return [];
  }
}

// 2. ID onujayi Single Workout pete (Details Page-er jonno)
export async function getWorkoutById(id: number): Promise<Workout | undefined> {
  const workouts = await getWorkouts();
  return workouts.find((item) => item.id === id);
}