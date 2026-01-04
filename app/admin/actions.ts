'use server'

import twilio from 'twilio'
import { createSession } from '@/lib/session'
import { revalidatePath } from 'next/cache'
import { deleteSession } from '@/lib/session'
import { redirect } from 'next/navigation'

// The only allowed number (Your Google Voice Number)
const ALLOWED_NUMBER = '7743126471'

export async function sendLoginCode(formData: FormData) {
  const input = formData.get('input') as string
  
  // Sanitize input: remove non-digits
  const cleanNumber = input.replace(/\D/g, '')

  // Allow input with or without country code '1'
  if (cleanNumber !== ALLOWED_NUMBER && cleanNumber !== `1${ALLOWED_NUMBER}`) {
    return { success: false, message: 'Unauthorized number.' }
  }

  // Generate 6-char code
  const code = Math.random().toString(36).slice(2, 8).toUpperCase()

  try {
    // Initialize Twilio Client
    const client = twilio(
      process.env.TWILIO_ACCOUNT_SID,
      process.env.TWILIO_AUTH_TOKEN
    )

    // Send the SMS
    await client.messages.create({
      body: `Your Admin Access Code: ${code}`,
      from: process.env.TWILIO_PHONE_NUMBER, // Your Free Twilio Number
      to: `+1${ALLOWED_NUMBER}`,             // Your Personal Number
    })

    return { success: true, message: 'Code sent to your device!', code: code }

  } catch (error) {
    console.error('Twilio Error:', error)
    // Fallback: Log code to console if API fails (so you're not locked out during dev)
    console.log(`(Backup) Code for ${ALLOWED_NUMBER}: ${code}`)
    return { success: false, message: 'SMS failed. Check server console for backup code.' }
  }
}

// --- NEW FUNCTION: VERIFY CODE & CREATE SESSION ---
export async function verifyLoginCode(inputCode: string, serverCode: string) {
  // In a real app, you'd verify against a DB, but for this MVP:
  if (inputCode.toUpperCase() === serverCode) {
    await createSession() // <--- Sets the secure cookie
    revalidatePath('/admin') // <--- Refreshes the page to show dashboard
    return { success: true }
  }
  return { success: false, message: 'Invalid code.' }
}

// --- NEW LOGOUT ACTION ---
export async function logoutAction() {
  await deleteSession()
  redirect('/admin') // Redirect back to login screen
}