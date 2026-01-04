import 'server-only'
import { SignJWT, jwtVerify } from 'jose'
import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

const SECRET_KEY = process.env.SESSION_SECRET || 'default-secret-key-change-this'
const key = new TextEncoder().encode(SECRET_KEY)

// 1. Create Session
export async function createSession() {
  const expiresAt = new Date(Date.now() + 15 * 60 * 1000)
  const session = await new SignJWT({ isAdmin: true })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('15m')
    .sign(key)
 
  const cookieStore = await cookies()
  cookieStore.set('session', session, {
    httpOnly: true,
    secure: true,
    expires: expiresAt,
    sameSite: 'lax',
    path: '/',
  })
}

// 2. Verify Session
export async function verifySession() {
  const cookieStore = await cookies()
  const session = cookieStore.get('session')?.value
 
  if (!session) return null
 
  try {
    const { payload } = await jwtVerify(session, key, {
      algorithms: ['HS256'],
    })
    return payload
  } catch (error) {
    return null
  }
}

// 3. Delete Session
export async function deleteSession() {
  const cookieStore = await cookies()
  cookieStore.delete('session')
}

// 4. Update Session (Sliding Window) - THIS WAS MISSING
export async function updateSession(request: NextRequest) {
  const session = request.cookies.get('session')?.value
  if (!session) return

  try {
    // Verify the existing token first
    const { payload } = await jwtVerify(session, key, {
      algorithms: ['HS256'],
    })
    
    if (!payload) return

    // Create a NEW response to pass back
    const res = NextResponse.next()
    
    // Set the cookie again with a NEW expiration time (15m from now)
    res.cookies.set({
      name: 'session',
      value: session,
      httpOnly: true,
      secure: true,
      expires: new Date(Date.now() + 15 * 60 * 1000),
      sameSite: 'lax',
      path: '/',
    })

    return res
  } catch (error) {
    return NextResponse.next()
  }
}