import { Button } from "@/components/ui/button"
import { LandingNav } from "@/components/landing-nav"
import { Footer } from "@/components/footer"
import Link from "next/link"
import Image from "next/image"
import { Ship, Shield, Users } from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <LandingNav />

      {/* Hero Section */}
      <section className="container flex flex-col items-center gap-4 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <div className="flex max-w-[980px] flex-col items-center gap-4 text-center">
          <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]">
            Connect with Certified Captains & Boat Owners in Lake Austin
          </h1>
          <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
            The easiest way to find qualified captains for your boats or discover exciting boating opportunities.
            Perfect for pontoons, wake boats, and Lake Austin adventures.
          </p>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Link href="/signup?role=owner">
            <Button size="lg">I'm a Boat Owner</Button>
          </Link>
          <Link href="/signup?role=captain">
            <Button size="lg" variant="outline">
              I'm a Captain
            </Button>
          </Link>
        </div>
      </section>

      {/* Feature Section */}
      <section className="container space-y-6 bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-24">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-6xl">Features</h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Everything you need to manage your boating business on Lake Austin
          </p>
        </div>
        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <Ship className="h-12 w-12 text-primary" />
              <div className="space-y-2">
                <h3 className="font-bold">Fleet Management</h3>
                <p className="text-sm text-muted-foreground">Easily manage your boats and track their availability.</p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <Shield className="h-12 w-12 text-primary" />
              <div className="space-y-2">
                <h3 className="font-bold">Verified Captains</h3>
                <p className="text-sm text-muted-foreground">Connect with certified and experienced captains.</p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <Users className="h-12 w-12 text-primary" />
              <div className="space-y-2">
                <h3 className="font-bold">Easy Booking</h3>
                <p className="text-sm text-muted-foreground">Streamlined booking process for trips and events.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="container py-8 md:py-12 lg:py-24">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
          <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-6xl">Trusted by Lake Austin's Best</h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Here's what our community has to say
          </p>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
          <div className="rounded-lg border bg-background p-8">
            <div className="space-y-4">
              <p className="text-lg leading-loose text-muted-foreground">
                "CaptainShare has transformed how I manage my fleet. Finding reliable captains used to be a challenge,
                but now it's seamless."
              </p>
              <div className="flex items-center gap-4">
                <Image
                  src="/placeholder.svg?height=40&width=40"
                  alt="Owner"
                  className="rounded-full"
                  width={40}
                  height={40}
                />
                <div>
                  <p className="text-sm font-medium">Sarah Johnson</p>
                  <p className="text-sm text-muted-foreground">Fleet Owner</p>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-lg border bg-background p-8">
            <div className="space-y-4">
              <p className="text-lg leading-loose text-muted-foreground">
                "As a USCG licensed captain, this platform has helped me connect with great boat owners and maintain a
                steady stream of work."
              </p>
              <div className="flex items-center gap-4">
                <Image
                  src="/placeholder.svg?height=40&width=40"
                  alt="Captain"
                  className="rounded-full"
                  width={40}
                  height={40}
                />
                <div>
                  <p className="text-sm font-medium">Mike Thompson</p>
                  <p className="text-sm text-muted-foreground">USCG Captain</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t bg-slate-50 dark:bg-transparent">
        <div className="container flex flex-col items-center justify-center gap-4 py-12 text-center lg:py-24">
          <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-6xl">Ready to Get Started?</h2>
          <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
            Join the Lake Austin boating community today.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link href="/signup?role=owner">
              <Button size="lg">Register as Owner</Button>
            </Link>
            <Link href="/signup?role=captain">
              <Button size="lg" variant="outline">
                Register as Captain
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

