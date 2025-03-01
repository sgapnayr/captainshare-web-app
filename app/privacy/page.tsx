import { LandingNav } from "@/components/landing-nav"
import { Footer } from "@/components/footer"

export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <LandingNav />

      <main className="flex-1">
        <section className="container py-12">
          <div className="mx-auto max-w-3xl space-y-8">
            <h1 className="text-4xl font-bold">Privacy Policy</h1>

            <div className="prose prose-slate dark:prose-invert max-w-none">
              <p className="text-xl text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>

              <h2>1. Information We Collect</h2>
              <h3>Personal Information:</h3>
              <ul>
                <li>Name and contact information</li>
                <li>Certification details (for captains)</li>
                <li>Vessel information (for owners)</li>
                <li>Payment information</li>
              </ul>

              <h2>2. How We Use Your Information</h2>
              <p>We use the collected information to:</p>
              <ul>
                <li>Facilitate connections between captains and owners</li>
                <li>Verify certifications and credentials</li>
                <li>Process payments and bookings</li>
                <li>Improve our services</li>
                <li>Send important updates and notifications</li>
              </ul>

              <h2>3. Information Sharing</h2>
              <p>We share information only as necessary to provide our services:</p>
              <ul>
                <li>Between matched captains and owners</li>
                <li>With service providers who assist our operations</li>
                <li>When required by law</li>
              </ul>

              <h2>4. Data Security</h2>
              <p>
                We implement appropriate security measures to protect your personal information. However, no internet
                transmission is completely secure, and we cannot guarantee absolute security.
              </p>

              <h2>5. Your Rights</h2>
              <p>You have the right to:</p>
              <ul>
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Opt-out of marketing communications</li>
              </ul>

              <h2>6. Contact Us</h2>
              <p>For privacy-related questions or concerns, please contact us at privacy@captainshare.com</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

