import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t py-6 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          Built for Lake Austin&apos;s boating community. © {new Date().getFullYear()} CaptainShare. All rights
          reserved.
        </p>
        <nav className="flex items-center gap-4 text-sm">
          <Link href="/privacy" className="text-muted-foreground underline-offset-4 hover:underline">
            Privacy
          </Link>
          <Link href="/terms" className="text-muted-foreground underline-offset-4 hover:underline">
            Terms
          </Link>
          <Link href="/about" className="text-muted-foreground underline-offset-4 hover:underline">
            About
          </Link>
        </nav>
      </div>
    </footer>
  )
}

