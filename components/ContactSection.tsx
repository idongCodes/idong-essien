'use client' // Needed for form interactivity

import Image from "next/image"
import { useState } from "react"
import { sendContactEmail } from "@/app/contact/actions"

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState<{ success: boolean; msg: string } | null>(null)

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true)
    setStatus(null)

    const result = await sendContactEmail(formData)
    
    setIsSubmitting(false)
    setStatus({ success: result.success, msg: result.message })
    
    // Optional: Reset form if successful
    if (result.success) {
      const form = document.getElementById('contact-form') as HTMLFormElement
      form.reset()
    }
  }

  return (
    <section id="contact" className="relative w-full py-20 min-h-[800px] flex items-center justify-center bg-black">
      
      {/* --- BACKGROUND LAYERS --- */}
      
      {/* 1. Image */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src="/contact.JPG"
          alt="Contact"
          fill
          className="object-cover object-top"
        />
      </div>

      {/* 2. Black Tint */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>

      {/* 3. Vignette (Focus) */}
      <div 
        className="absolute inset-0 z-20 pointer-events-none"
        style={{ background: 'radial-gradient(circle at center, transparent 5%, black 100%)' }}
      ></div>

      {/* 4. Top Gradient Blend */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent z-30"></div>

      {/* --- CONTENT FORM --- */}
      <div className="relative z-40 w-full max-w-lg px-6">
        
        <div className="bg-black/40 backdrop-blur-md border border-white/10 p-8 rounded-2xl shadow-2xl">
          <h2 className="text-3xl font-bold text-white mb-2 text-center">Get in Touch</h2>
          <p className="text-gray-400 text-sm text-center mb-8">
            Have a project in mind or just want to say hi?
          </p>

          <form id="contact-form" action={handleSubmit} className="space-y-4">
            
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-xs font-bold text-gray-500 mb-1 uppercase tracking-wide">Name</label>
              <input 
                name="name" 
                id="name"
                type="text" 
                required
                placeholder="Your Name"
                className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-sky-blue focus:ring-1 focus:ring-sky-blue transition-all"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-xs font-bold text-gray-500 mb-1 uppercase tracking-wide">Email</label>
              <input 
                name="email" 
                id="email"
                type="email" 
                required
                placeholder="you@example.com"
                className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-sky-blue focus:ring-1 focus:ring-sky-blue transition-all"
              />
            </div>

            {/* Subject */}
            <div>
              <label htmlFor="subject" className="block text-xs font-bold text-gray-500 mb-1 uppercase tracking-wide">Subject</label>
              <input 
                name="subject" 
                id="subject"
                type="text" 
                required
                placeholder="What's this about?"
                className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-sky-blue focus:ring-1 focus:ring-sky-blue transition-all"
              />
            </div>

            {/* Expandable Text Area */}
            <div>
              <label htmlFor="message" className="block text-xs font-bold text-gray-500 mb-1 uppercase tracking-wide">Message</label>
              <textarea 
                name="message" 
                id="message"
                required
                rows={4}
                placeholder="Write your message here..."
                className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-sky-blue focus:ring-1 focus:ring-sky-blue transition-all resize-y min-h-[100px]"
              />
            </div>

            {/* Status Message */}
            {status && (
              <p className={`text-center text-sm font-bold ${status.success ? 'text-green-400' : 'text-red-400'}`}>
                {status.msg}
              </p>
            )}

            {/* Submit Button */}
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-sky-blue text-black font-bold py-3 rounded-lg hover:bg-sky-400 transition-colors disabled:opacity-50 mt-2"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>

    </section>
  )
}