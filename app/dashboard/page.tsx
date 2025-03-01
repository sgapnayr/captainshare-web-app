"use client";

import CaptainDashboard from "@/components/captain-dashboard";
import OwnerDashboard from "@/components/owner-dashboard";
import { useDashboard } from "@/contexts/dashboard-context";

export default function DashboardPage() {
  const { mode, userName } = useDashboard();

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">
          {mode === "captain" ? "Captain Dashboard" : "Owner Dashboard"}
        </h2>
        <div className="flex items-center space-x-2">
          <p className="text-sm text-muted-foreground">
            Welcome back, {userName}!
          </p>
        </div>
      </div>
      <div className="space-y-4">
        {mode === "captain" ? <CaptainDashboard /> : <OwnerDashboard />}
      </div>
    </div>
  );
}
