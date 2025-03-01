"use client";

import type React from "react";

import { ModeToggle } from "@/components/mode-toggle";
import { UserNav } from "@/components/user-nav";
import { MainNav } from "@/components/main-nav";
import { Bell, Ship } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Search } from "@/components/search";
import { DashboardProvider, useDashboard } from "@/contexts/dashboard-context";

function DashboardLayout({ children }: { children: React.ReactNode }) {
  const { mode, setMode, userName } = useDashboard();

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <Sidebar className="bg-background">
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

        <div className="flex flex-1 flex-col">
          <header className="sticky top-0 z-50 border-b bg-background">
            <div className="flex h-16 items-center gap-4 px-6">
              <SidebarTrigger className="md:hidden" />
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

// Wrap the layout with the DashboardProvider
export default function DashboardLayoutWithProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <DashboardProvider>
      <DashboardLayout>{children}</DashboardLayout>
    </DashboardProvider>
  );
}
