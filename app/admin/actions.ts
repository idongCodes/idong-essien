'use server'

// The only allowed number
const ALLOWED_NUMBER = '7743126471'

export async function sendLoginCode(formData: FormData) {
  const input = formData.get('input') as string
  
  // 1. Sanitize the input (remove spaces, dashes, parentheses)
  const cleanNumber = input.replace(/\D/g, '')

  // 2. Check if number matches (checking both with and without country code '1')
  if (cleanNumber !== ALLOWED_NUMBER && cleanNumber !== `1${ALLOWED_NUMBER}`) {
    return { success: false, message: 'Unauthorized number.' }
  }

  // 3. Generate Random 6-char code (Uppercase + Numbers)
  const code = Math.random().toString(36).slice(2, 8).toUpperCase()

  // 4. "Send" the SMS
  // TODO: Replace this console.log with Twilio/AWS SNS later
  console.log('--------------------------------')
  console.log(`🔐 ADMIN LOGIN CODE: ${code}`)
  console.log('--------------------------------')

  // Return the code to the client component to compare 
  // (In a production app with a database, you would store this in a session/db, not return it)
  return { success: true, message: 'Code sent!', code: code }
}