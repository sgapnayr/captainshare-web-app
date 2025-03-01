import { Skeleton } from "@/components/ui/skeleton";

export default function DashboardLoading() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 border-b bg-background">
        <div className="container flex h-16 items-center justify-between px-4">
          <Skeleton className="h-8 w-32" />
          <div className="flex items-center gap-4">
            <Skeleton className="h-8 w-8 rounded-full" />
            <Skeleton className="h-8 w-8 rounded-full" />
            <Skeleton className="h-8 w-8 rounded-full" />
          </div>
        </div>
      </header>

      <main className="flex-1 container px-4 py-6">
        <div className="space-y-6">
          <Skeleton className="h-8 w-[250px]" />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Skeleton className="h-[120px] rounded-lg" />
            <Skeleton className="h-[120px] rounded-lg" />
            <Skeleton className="h-[120px] rounded-lg" />
            <Skeleton className="h-[120px] rounded-lg" />
          </div>
          <Skeleton className="h-[400px] rounded-lg" />
        </div>
      </main>
    </div>
  );
}
