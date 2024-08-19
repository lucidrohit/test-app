"use client";
import { useDroneData } from "@/contexts/DroneDataProvider";
import useThrottledState from "@/hooks/useThrottleData";

export default function DroneStats() {
  const droneStateRef = useDroneData();
  const droneState = useThrottledState(droneStateRef, 100);
  return <p>{JSON.stringify(droneState)}</p>;
}
