"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ModeToggle } from "@/components/mode-toggle";
import { UserNav } from "@/components/user-nav";
import { MainNav } from "@/components/main-nav";
import { Bell, Ship } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarProvider,
} from "@/components/ui/sidebar";
import { Search } from "@/components/search";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [mode, setMode] = useState<"captain" | "owner">("captain");
  const [userName, setUserName] = useState<string>("");

  useEffect(() => {
    // Get stored role and name from signup
    const storedRole = localStorage.getItem("userRole") as "captain" | "owner";
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

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        {/* Sidebar */}
        <Sidebar>
          <SidebarHeader className="border-b px-6 py-4">
            <div className="flex items-center gap-2">
              <Ship className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">CaptainShare</span>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <MainNav mode={mode} />
          </SidebarContent>
        </Sidebar>

        {/* Main Content */}
        <div className="flex flex-1 flex-col">
          <header className="sticky top-0 z-50 border-b bg-background">
            <div className="flex h-16 items-center gap-4 px-6">
              <div className="flex flex-1">
                <Search />
              </div>
              <ModeToggle mode={mode} setMode={setMode} />
              <button className="relative">
                <Bell className="h-5 w-5 text-muted-foreground" />
                <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-medium text-primary-foreground">
                  3
                </span>
              </button>
              <UserNav userName={userName} />
            </div>
          </header>

          <main className="flex-1 space-y-4 p-4 pt-6">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  );
}
