"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Home, Calendar, Briefcase } from "lucide-react";

interface MainNavProps {
  mode: "captain" | "owner";
}

export function MainNav({ mode }: MainNavProps) {
  const pathname = usePathname();

  const routes = [
    {
      href: "/dashboard",
      label: "Home",
      icon: Home,
    },
    {
      href: "/dashboard/trips",
      label: "Trips",
      icon: Calendar,
    },
    {
      href: "/dashboard/jobs",
      label: "Job Board",
      icon: Briefcase,
    },
  ];

  return (
    <nav className="flex flex-col gap-2 p-4">
      {routes.map((route) => (
        <Link key={route.href} href={route.href}>
          <Button
            variant="ghost"
            className={cn(
              "w-full justify-start gap-2",
              pathname === route.href && "bg-accent"
            )}
          >
            <route.icon className="h-4 w-4" />
            {route.label}
          </Button>
        </Link>
      ))}
    </nav>
  );
}
