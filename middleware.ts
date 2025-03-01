import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  // For demo purposes, we'll just check if the URL is /dashboard
  // In a real app, you'd check for authentication here
  if (request.nextUrl.pathname === "/dashboard") {
    // In a real app, you'd verify the token/session here
    // For now, we'll just let it through
    return NextResponse.next()
  }

  return NextResponse.next()
}

export const config = {
  matcher: "/dashboard",
}

