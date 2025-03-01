"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";

type DashboardMode = "captain" | "owner";

interface DashboardContextType {
  mode: DashboardMode;
  setMode: (mode: DashboardMode) => void;
  userName: string;
  setUserName: (name: string) => void;
}

const DashboardContext = createContext<DashboardContextType | undefined>(
  undefined
);

export function DashboardProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [mode, setMode] = useState<DashboardMode>("captain");
  const [userName, setUserName] = useState("");

  useEffect(() => {
    // Get stored role and name from signup
    const storedRole = localStorage.getItem("userRole") as DashboardMode;
    const storedName = localStorage.getItem("userName");

    if (storedRole) {
      setMode(storedRole);
    }

    if (storedName) {
      setUserName(storedName);
    } else {
      router.push("/signup");
    }
  }, [router]);

  // Update localStorage when mode changes
  useEffect(() => {
    localStorage.setItem("userRole", mode);
  }, [mode]);

  return (
    <DashboardContext.Provider value={{ mode, setMode, userName, setUserName }}>
      {children}
    </DashboardContext.Provider>
  );
}

export function useDashboard() {
  const context = useContext(DashboardContext);
  if (context === undefined) {
    throw new Error("useDashboard must be used within a DashboardProvider");
  }
  return context;
}
