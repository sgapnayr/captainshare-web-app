import { LandingNav } from "@/components/landing-nav"
import { Footer } from "@/components/footer"
import { Ship } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <LandingNav />

      <main className="flex-1">
        <section className="container py-12 md:py-24">
          <div className="mx-auto max-w-3xl space-y-8">
            <div className="flex items-center gap-4">
              <Ship className="h-12 w-12 text-primary" />
              <h1 className="text-4xl font-bold">About CaptainShare</h1>
            </div>

            <div className="prose prose-slate dark:prose-invert max-w-none">
              <p className="text-xl text-muted-foreground">
                CaptainShare is Lake Austin's premier platform connecting certified boat captains with vessel owners.
              </p>

              <h2>Our Mission</h2>
              <p>
                We're dedicated to making boating on Lake Austin safer and more accessible by connecting qualified
                captains with boat owners. Whether you're planning a bachelor party, family outing, or corporate event,
                CaptainShare ensures you have a certified captain at the helm.
              </p>

              <h2>Lake Austin Expertise</h2>
              <p>
                Specializing in Lake Austin operations, we understand the unique characteristics of the lake and its
                boating community. Our platform caters specifically to pontoons and wake boats, the most popular vessels
                for Lake Austin adventures.
              </p>

              <h2>Safety First</h2>
              <p>
                All captains on our platform are required to hold valid certifications, including USCG 6-Pack, Marine
                Mariners, or PBO licenses. We verify credentials to ensure the safety of all passengers and vessels.
              </p>

              <h2>Local Community</h2>
              <p>
                Based in Austin, Texas, we're proud to serve our local boating community. We work closely with local
                boat owners, rental companies, and certified captains to create a trusted network of boating
                professionals.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

