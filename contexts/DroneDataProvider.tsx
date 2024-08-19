"use client";
import { createContext, useContext, useEffect, useRef } from "react";

type DroneState = {
  lat: number;
  lon: number;
  alt: number;
};

const DroneDataContext = createContext<React.MutableRefObject<DroneState>>({
  current: {
    lat: 0,
    lon: 0,
    alt: 0,
  },
});

export default function DroneDataProvider({ children }: { children: any }) {
  const droneState = useRef({
    lat: 0,
    lon: 0,
    alt: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      droneState.current.lat = Math.random() * 100;
      droneState.current.lon = Math.random() * 100;
      droneState.current.alt = Math.random() * 100;
    }, 50);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <DroneDataContext.Provider value={droneState}>
      {children}
    </DroneDataContext.Provider>
  );
}

export function useDroneData() {
  const context = useContext(DroneDataContext);
  if (context === undefined) {
    throw new Error("useDroneData must be used within a DroneDataProvider");
  }
  return context;
}

export type { DroneState };
