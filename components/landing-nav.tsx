"use client";

import Link from "next/link";
import { Ship } from "lucide-react";
import { Button } from "@/components/ui/button";

export function LandingNav() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="flex items-center gap-2">
          <Ship className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold">CaptainShare</span>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2 sm:space-x-4">
          <Link href="/auth">
            <Button variant="ghost" size="sm">
              Log in
            </Button>
          </Link>
          <Link href="/signup">
            <Button size="sm">Sign up</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
