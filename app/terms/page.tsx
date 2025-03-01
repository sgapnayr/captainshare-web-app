import { LandingNav } from "@/components/landing-nav"
import { Footer } from "@/components/footer"

export default function TermsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <LandingNav />

      <main className="flex-1">
        <section className="container py-12">
          <div className="mx-auto max-w-3xl space-y-8">
            <h1 className="text-4xl font-bold">Terms of Service</h1>

            <div className="prose prose-slate dark:prose-invert max-w-none">
              <p className="text-xl text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>

              <h2>1. Acceptance of Terms</h2>
              <p>
                By accessing and using CaptainShare, you agree to be bound by these Terms of Service and all applicable
                laws and regulations. If you do not agree with any of these terms, you are prohibited from using this
                service.
              </p>

              <h2>2. User Responsibilities</h2>
              <h3>For Captains:</h3>
              <ul>
                <li>Maintain valid certifications (USCG 6-Pack, Marine Mariners, or PBO)</li>
                <li>Provide accurate information about qualifications and experience</li>
                <li>Operate vessels safely and in compliance with local regulations</li>
                <li>Maintain appropriate insurance coverage</li>
              </ul>

              <h3>For Owners:</h3>
              <ul>
                <li>Maintain vessels in safe operating condition</li>
                <li>Provide accurate information about vessels</li>
                <li>Carry appropriate insurance coverage</li>
                <li>Comply with all local boating regulations</li>
              </ul>

              <h2>3. Safety Requirements</h2>
              <p>
                All operations must comply with Lake Austin boating regulations and safety requirements. Captains must
                maintain valid certifications and follow all local maritime laws.
              </p>

              <h2>4. Booking and Cancellations</h2>
              <p>
                Detailed booking and cancellation policies will be provided during the reservation process. Both parties
                agree to honor confirmed bookings and provide reasonable notice for any necessary changes.
              </p>

              <h2>5. Liability</h2>
              <p>
                CaptainShare serves as a platform connecting captains and owners. We are not responsible for any
                damages, accidents, or incidents that occur during boating operations.
              </p>

              <h2>6. Modifications</h2>
              <p>
                We reserve the right to modify these terms at any time. Users will be notified of significant changes.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

