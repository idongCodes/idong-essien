"use client";

import Image from "next/image"
import { useState } from "react"
import { sendContactEmail } from "@/app/contact/actions"
import { 
  FaFacebook, FaFacebookMessenger, FaInstagram, FaTumblr, FaLinkedin, 
  FaMastodon, FaSnapchatGhost, FaGithub, FaWhatsapp, FaMedium,
  FaTiktok, FaTwitch, FaDiscord
} from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import { SiThreads, SiBluesky, SiHashnode } from "react-icons/si"

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState<{ success: boolean; msg: string } | null>(null)

  const socialLinks = [
    { icon: <FaFacebook />, url: "https://www.facebook.com/idngcodes/", color: "hover:text-blue-500" },
    { icon: <FaFacebookMessenger />, url: "https://m.me/idngcodes", color: "hover:text-[#0084FF]" },
    { icon: <FaInstagram />, url: "https://www.instagram.com/idongcodes/", color: "hover:text-pink-500" },
    { icon: <SiThreads />, url: "https://www.threads.com/@idongcodes", color: "hover:text-white" },
    { icon: <FaXTwitter />, url: "https://x.com/idongCodes", color: "hover:text-gray-400" },
    { icon: <FaTiktok />, url: "https://www.tiktok.com/@idongcodes", color: "hover:text-pink-500" },
    { icon: <FaTwitch />, url: "https://www.twitch.tv/idongcodes", color: "hover:text-purple-500" },
    { icon: <FaDiscord />, url: "https://discord.com/users/660597284676829216", color: "hover:text-indigo-500" },
    { icon: <FaTumblr />, url: "https://www.tumblr.com/idongcodes", color: "hover:text-blue-300" },
    { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/idongcodes", color: "hover:text-blue-600" },
    { icon: <SiBluesky />, url: "https://bsky.app/profile/idongcodes.bsky.social", color: "hover:text-sky-500" },
    { icon: <FaMastodon />, url: "https://indieweb.social/@idongcodes", color: "hover:text-purple-500" },
    { icon: <FaSnapchatGhost />, url: "https://www.snapchat.com/add/idongcxdes?share_id=xDbAEOcbstE&locale=en-US", color: "hover:text-yellow-400" },
    { icon: <FaGithub />, url: "https://github.com/idongCodes", color: "hover:text-gray-400" },
    { icon: <FaWhatsapp />, url: "https://wa.me/17743126471", color: "hover:text-green-500" },
    { icon: <SiHashnode />, url: "https://hashnode.com/@idongcodes", color: "hover:text-blue-600" },
    { icon: <FaMedium />, url: "https://medium.com/@idongcodes", color: "hover:text-white" },
    { 
      icon: (
        <svg 
          stroke="currentColor" 
          fill="currentColor" 
          strokeWidth="0" 
          viewBox="0 0 45 63" 
          height="1em" 
          width="1em" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M 0 44.082 L 11.745 40.97 Q 12.948 45.618 16.227 48.149 Q 19.505 50.681 24.444 50.681 Q 28.054 50.681 30.046 49.166 A 5.035 5.035 0 0 0 32.038 44.912 L 32.038 44.622 Q 32.038 42.256 30.295 40.659 A 16.045 16.045 0 0 0 26.193 38.194 A 43.281 43.281 0 0 0 24.111 37.318 L 16.019 34.122 Q 3.445 29.184 3.445 17.605 L 3.445 17.439 A 16.324 16.324 0 0 1 5.997 8.33 Q 8.549 4.408 13.073 2.209 Q 17.596 0.009 23.614 0.009 A 24.267 24.267 0 0 1 34.995 2.489 A 18.078 18.078 0 0 1 37.08 3.765 Q 42.372 7.521 44.571 14.825 L 32.91 18.145 Q 30.959 11.588 23.614 11.588 Q 20.169 11.588 18.156 13.02 Q 16.144 14.451 16.144 16.9 L 16.144 17.149 A 4.471 4.471 0 0 0 17.575 20.51 A 13.811 13.811 0 0 0 21.483 22.851 A 34.488 34.488 0 0 0 22.535 23.291 L 30.627 26.486 A 29.305 29.305 0 0 1 38.97 31.29 A 17.323 17.323 0 0 1 41.334 33.749 Q 44.737 38.106 44.737 44.663 L 44.737 44.995 A 16.22 16.22 0 0 1 42.205 54.063 A 16.853 16.853 0 0 1 35.13 60.101 Q 30.586 62.259 24.485 62.259 A 27.976 27.976 0 0 1 13.239 60.081 Q 8.217 57.902 4.814 53.814 A 24.106 24.106 0 0 1 0 44.0 Z" />
        </svg>
      ),
      url: "https://seenu.io/idongcodes",
      color: "hover:text-[#FE6D98]" 
    }
  ]

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true)
    setStatus(null)

    const result = await sendContactEmail(formData)
    
    setIsSubmitting(false)
    setStatus({ success: result.success, msg: result.message })
    
    if (result.success) {
      const form = document.getElementById('contact-form') as HTMLFormElement
      form.reset()
    }
  }

  return (
    <section id="contact" className="relative w-full py-20 min-h-[900px] flex items-center justify-center bg-black">
      
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src="/contact.JPG"
          alt="Contact"
          fill
          className="object-cover object-top"
        />
      </div>
      <div className="absolute inset-0 bg-black/50 z-10"></div>
      <div 
        className="absolute inset-0 z-20 pointer-events-none"
        style={{ background: 'radial-gradient(circle at center, transparent 5%, black 100%)' }}
      ></div>
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent z-30"></div>

      <div className="relative z-40 w-full max-w-lg px-6">
        
        <div className="bg-black/40 backdrop-blur-md border border-white/10 p-8 rounded-2xl shadow-2xl">

          <div className="w-full h-48 rounded-xl overflow-hidden mb-8 border border-white/10 shadow-inner">
            <iframe 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              loading="lazy" 
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              title="Greendale, Worcester, MA 01606"
              src="https://maps.google.com/maps?q=Greendale,+Worcester,+MA+01606&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="grayscale hover:grayscale-0 transition-all duration-700 opacity-80 hover:opacity-100"
            ></iframe>
          </div>

          <h2 className="text-3xl font-bold text-white mb-2 text-center">Get in Touch</h2>
          <p className="text-gray-400 text-sm text-center mb-8">
            Have a project in mind or just want to say hi?
          </p>

          <form id="contact-form" action={handleSubmit} className="space-y-4">
            
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

            {status && (
              <p className={`text-center text-sm font-bold ${status.success ? 'text-green-400' : 'text-red-400'}`}>
                {status.msg}
              </p>
            )}

            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-sky-blue text-black font-bold py-3 rounded-lg hover:bg-sky-400 transition-colors disabled:opacity-50 mt-2"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>

          <div className="w-full h-px bg-white/10 my-8"></div>

          <div className="flex flex-wrap gap-4 justify-center">
            {socialLinks.map((link, i) => (
              <a 
                key={i}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-2xl text-gray-400 transition-all duration-300 transform hover:scale-110 ${link.color}`}
              >
                {link.icon}
              </a>
            ))}
          </div>

        </div>
      </div>

    </section>
  )
}