"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { ModeToggle } from "@/components/mode-toggle"
import { UserNav } from "@/components/user-nav"
import CaptainDashboard from "@/components/captain-dashboard"
import OwnerDashboard from "@/components/owner-dashboard"
import { Bell, Ship } from "lucide-react"

export default function Dashboard() {
  const router = useRouter()
  const [mode, setMode] = useState<"captain" | "owner">("captain")
  const [userName, setUserName] = useState<string>("")

  useEffect(() => {
    // Get stored role and name from signup
    const storedRole = localStorage.getItem("userRole") as "captain" | "owner"
    const storedName = localStorage.getItem("userName")

    if (storedRole) {
      setMode(storedRole)
    }

    if (storedName) {
      setUserName(storedName)
    } else {
      // If no stored data, redirect to signup
      router.push("/signup")
    }
  }, [router])

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 border-b bg-background">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <Ship className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold hidden sm:inline">CaptainShare</span>
            <span className="text-xl font-bold sm:hidden">CS</span>
          </div>

          <div className="flex items-center gap-2 sm:gap-4">
            <ModeToggle mode={mode} setMode={setMode} />
            <button className="relative">
              <Bell className="h-5 w-5 text-muted-foreground" />
              <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-medium text-primary-foreground">
                3
              </span>
            </button>
            <UserNav userName={userName} />
          </div>
        </div>
      </header>

      <main className="flex-1 container px-2 sm:px-4 py-4 sm:py-6">
        {mode === "captain" ? <CaptainDashboard /> : <OwnerDashboard />}
      </main>

      <footer className="border-t py-4">
        <div className="container px-4 text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} CaptainShare - Lake Austin, TX
        </div>
      </footer>
    </div>
  )
}

