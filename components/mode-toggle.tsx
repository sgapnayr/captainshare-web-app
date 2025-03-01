"use client";

import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Anchor, Sailboat } from "lucide-react";
import { useDashboard } from "@/contexts/dashboard-context";

export function ModeToggle() {
  const { mode, setMode } = useDashboard();

  return (
    <div className="flex items-center space-x-2 sm:space-x-4 rounded-lg border p-1 sm:p-2">
      <div className="flex items-center space-x-1 sm:space-x-2">
        <Sailboat
          className={`h-4 w-4 ${
            mode === "captain" ? "text-primary" : "text-muted-foreground"
          }`}
        />
        <Label
          htmlFor="mode-toggle"
          className={`text-xs sm:text-sm font-medium ${
            mode === "captain" ? "text-primary" : "text-muted-foreground"
          } hidden sm:inline`}
        >
          Captain
        </Label>
      </div>

      <Switch
        id="mode-toggle"
        checked={mode === "owner"}
        onCheckedChange={(checked) => setMode(checked ? "owner" : "captain")}
      />

      <div className="flex items-center space-x-1 sm:space-x-2">
        <Anchor
          className={`h-4 w-4 ${
            mode === "owner" ? "text-primary" : "text-muted-foreground"
          }`}
        />
        <Label
          htmlFor="mode-toggle"
          className={`text-xs sm:text-sm font-medium ${
            mode === "owner" ? "text-primary" : "text-muted-foreground"
          } hidden sm:inline`}
        >
          Owner
        </Label>
      </div>
    </div>
  );
}
