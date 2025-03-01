"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar, Clock, MapPin } from "lucide-react";
import { SidebarProvider } from "@/components/ui/sidebar";

// Mock data - replace with real data later
const mockTrips = [
  {
    id: 1,
    date: "2024-03-15",
    time: "14:00",
    location: "Lake Austin",
    status: "Unassigned",
    type: "Pontoon Tour",
  },
  {
    id: 2,
    date: "2024-03-16",
    time: "10:00",
    location: "Lake Austin",
    status: "Assigned",
    captainName: "John Doe",
    type: "Wake Boarding",
  },
];

const mockCaptains = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Smith" },
  { id: 3, name: "Mike Johnson" },
];

export default function TripsPage() {
  const [userRole] = useState(() =>
    typeof window !== "undefined" ? localStorage.getItem("userRole") : "owner"
  );

  return (
    <SidebarProvider>
      <div className="space-y-6">
        <div className="flex flex-col items-start justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Trips</h2>
            <p className="text-muted-foreground">
              {userRole === "owner"
                ? "Manage your upcoming trips and assign captains"
                : "View your upcoming assigned trips"}
            </p>
          </div>
          {userRole === "owner" && (
            <Button className="mt-4">Import from FareHarbor</Button>
          )}
        </div>

        <div className="grid gap-4">
          {mockTrips.map((trip) => (
            <Card key={trip.id}>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle>{trip.type}</CardTitle>
                  <div className="flex items-center gap-2">
                    {userRole === "owner" && trip.status === "Unassigned" && (
                      <Button variant="secondary">Post as Job</Button>
                    )}
                    {userRole === "captain" && trip.status === "Assigned" && (
                      <Button variant="secondary">Mark Complete</Button>
                    )}
                  </div>
                </div>
                <CardDescription>Trip #{trip.id}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-2">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span>{trip.date}</span>
                    <Clock className="ml-2 h-4 w-4 text-muted-foreground" />
                    <span>{trip.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span>{trip.location}</span>
                  </div>
                  {userRole === "owner" && (
                    <div className="mt-4">
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Assign Captain" />
                        </SelectTrigger>
                        <SelectContent>
                          {mockCaptains.map((captain) => (
                            <SelectItem
                              key={captain.id}
                              value={captain.id.toString()}
                            >
                              {captain.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </SidebarProvider>
  );
}
