import 'server-only'
import { SignJWT, jwtVerify } from 'jose'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

const SECRET_KEY = process.env.SESSION_SECRET || 'default-secret-key-change-this'
const key = new TextEncoder().encode(SECRET_KEY)

// 1. Create the Session (Login)
export async function createSession() {
  const expiresAt = new Date(Date.now() + 15 * 60 * 1000) // 15 mins from now
  
  const session = await new SignJWT({ isAdmin: true })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('15m') // Token itself expires in 15m
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

// 2. Verify Session (Check if logged in)
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

// 3. Delete Session (Logout)
export async function deleteSession() {
  const cookieStore = await cookies()
  cookieStore.delete('session')
}