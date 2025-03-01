"use client"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar"
import { ModeToggle } from "@/components/mode-toggle"
import { Anchor, Calendar, DollarSign, Home, LifeBuoy, MessageSquare, Settings, Ship, Users } from "lucide-react"

interface MainSidebarProps {
  mode: "captain" | "owner"
  setMode: (mode: "captain" | "owner") => void
}

export function MainSidebar({ mode, setMode }: MainSidebarProps) {
  const captainMenuItems = [
    { icon: Home, label: "Dashboard", href: "/" },
    { icon: Calendar, label: "My Schedule", href: "/schedule" },
    { icon: Ship, label: "Available Boats", href: "/boats" },
    { icon: DollarSign, label: "Earnings", href: "/earnings" },
    { icon: MessageSquare, label: "Messages", href: "/messages" },
    { icon: Users, label: "Reviews", href: "/reviews" },
  ]

  const ownerMenuItems = [
    { icon: Home, label: "Dashboard", href: "/" },
    { icon: Ship, label: "My Fleet", href: "/fleet" },
    { icon: Calendar, label: "Bookings", href: "/bookings" },
    { icon: Anchor, label: "Find Captains", href: "/captains" },
    { icon: MessageSquare, label: "Messages", href: "/messages" },
    { icon: DollarSign, label: "Revenue", href: "/revenue" },
  ]

  const menuItems = mode === "captain" ? captainMenuItems : ownerMenuItems

  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center gap-2 px-4 py-2">
          <Ship className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold">CaptainShare</span>
        </div>
        <div className="p-4">
          <ModeToggle mode={mode} setMode={setMode} />
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.href}>
              <SidebarMenuButton asChild tooltip={item.label} isActive={item.href === "/"}>
                <a href={item.href} className="flex items-center gap-2">
                  <item.icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild tooltip="Help & Support">
              <a href="/support" className="flex items-center gap-2">
                <LifeBuoy className="h-4 w-4" />
                <span>Help & Support</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild tooltip="Settings">
              <a href="/settings" className="flex items-center gap-2">
                <Settings className="h-4 w-4" />
                <span>Settings</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}

