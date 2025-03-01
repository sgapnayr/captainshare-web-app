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
import { Badge } from "@/components/ui/badge";
import { Calendar, DollarSign, MapPin } from "lucide-react";
import { SidebarProvider } from "@/components/ui/sidebar";

// Mock data - replace with real data later
const mockJobs = [
  {
    id: 1,
    title: "Weekend Pontoon Captain",
    date: "2024-03-15",
    location: "Lake Austin",
    rate: "$300/day",
    status: "Open",
    applications: 2,
    description: "Looking for a certified captain for weekend pontoon tours.",
  },
  {
    id: 2,
    title: "Wake Boat Captain Needed",
    date: "2024-03-16",
    location: "Lake Austin",
    rate: "$350/day",
    status: "Open",
    applications: 1,
    description: "Experienced wake boat captain needed for private sessions.",
  },
];

export default function JobsPage() {
  const [userRole] = useState(() =>
    typeof window !== "undefined" ? localStorage.getItem("userRole") : "owner"
  );

  return (
    <SidebarProvider>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Job Board</h2>
            <p className="text-muted-foreground">
              {userRole === "owner"
                ? "Post and manage job listings"
                : "Find available captain positions"}
            </p>
          </div>
          {userRole === "owner" && <Button>Post New Job</Button>}
        </div>

        <div className="grid gap-4">
          {mockJobs.map((job) => (
            <Card key={job.id}>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>{job.title}</CardTitle>
                    <CardDescription>Job #{job.id}</CardDescription>
                  </div>
                  <Badge variant="secondary">{job.status}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span>{job.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <DollarSign className="h-4 w-4 text-muted-foreground" />
                      <span>{job.rate}</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {job.description}
                  </p>
                  <div className="flex items-center justify-between">
                    {userRole === "owner" ? (
                      <div className="text-sm text-muted-foreground">
                        {job.applications} applications
                      </div>
                    ) : (
                      <Button>Apply Now</Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </SidebarProvider>
  );
}
