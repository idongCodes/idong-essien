import { NextRequest, NextResponse } from 'next/server'
import { updateSession } from '@/lib/session' // We will add this helper below

export async function middleware(request: NextRequest) {
  // Only run on admin routes
  if (request.nextUrl.pathname.startsWith('/admin')) {
    const res = NextResponse.next()
    
    // Check if session cookie exists
    const session = request.cookies.get('session')?.value
    
    if (session) {
      // Extend cookie expiration by another 15 mins (Sliding Window)
      const expiresAt = new Date(Date.now() + 15 * 60 * 1000)
      res.cookies.set({
        name: 'session',
        value: session,
        httpOnly: true,
        secure: true,
        expires: expiresAt,
        sameSite: 'lax',
        path: '/',
      })
    }
    
    return res
  }
  return NextResponse.next()
}