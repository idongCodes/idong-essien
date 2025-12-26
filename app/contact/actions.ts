'use server'

import nodemailer from 'nodemailer'

export async function sendContactEmail(formData: FormData) {
  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const subject = formData.get('subject') as string
  const message = formData.get('message') as string

  // Simple validation
  if (!name || !email || !message) {
    return { success: false, message: 'Please fill out all fields.' }
  }

  try {
    // Configure the transporter (Use your actual email provider settings here)
    // For Comcast: smtp.comcast.net, Port 587 or 465
    // You'll need to set these ENV variables in your .env.local file
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST || 'smtp.comcast.net',
      port: Number(process.env.EMAIL_PORT) || 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER, // Your comcast email
        pass: process.env.EMAIL_PASS, // Your email password
      },
    })

    // Define the email options
    const mailOptions = {
      from: process.env.EMAIL_USER, // Sender address
      to: 'idong.essien@comcast.net', // Your receiving address
      replyTo: email, // So you can hit "Reply" to answer them
      subject: `New Contact: ${subject || 'No Subject'}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    }

    // Send the email
    await transporter.sendMail(mailOptions)

    return { success: true, message: 'Message sent successfully!' }
  } catch (error) {
    console.error('Email Error:', error)
    return { success: false, message: 'Failed to send message. Please try again.' }
  }
}