"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

interface MainNavProps {
  mode: "captain" | "owner";
}

export function MainNav({ mode }: MainNavProps) {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col gap-2 p-4">
      <Link href="/dashboard">
        <Button
          variant="ghost"
          className={cn(
            "w-full justify-start gap-2",
            pathname === "/dashboard" && "bg-accent"
          )}
        >
          <Home className="h-4 w-4" />
          Home
        </Button>
      </Link>
    </nav>
  );
}
