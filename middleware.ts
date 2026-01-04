import { NextRequest, NextResponse } from 'next/server'
import { updateSession } from '@/lib/session'

export async function middleware(request: NextRequest) {
  // Only run on admin routes
  if (request.nextUrl.pathname.startsWith('/admin')) {
    // Attempt to update the session (sliding window)
    // If updateSession returns a response (meaning it refreshed the cookie), use it.
    // Otherwise, just continue with a standard response.
    return await updateSession(request) || NextResponse.next()
  }
  return NextResponse.next()
}