"use client";

import FadeIn from "@/components/FadeIn";
import { FaLaptopCode, FaMobileAlt, FaTools, FaCheckCircle, FaArrowRight } from "react-icons/fa";

export default function HireMe() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-sky-blue selection:text-black">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto flex flex-col items-center justify-center text-center">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top,rgba(135,206,235,0.1)_0%,transparent_50%)]"></div>
        <FadeIn>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-6 relative z-10">
            Build Something <span className="text-sky-blue">Extraordinary.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed mb-10 relative z-10">
            Specializing in modern Progressive Web Apps (PWAs), bespoke software, and high-performance digital tools. Less noise, more impact.
          </p>
          <a href="#intake" className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-sky-blue hover:text-black transition-all duration-300 hover:scale-105 shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(135,206,235,0.4)]">
            Start a Project <FaArrowRight />
          </a>
        </FadeIn>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 md:px-12 max-w-6xl mx-auto">
        <FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 border border-white/5 rounded-3xl bg-zinc-900/30 hover:bg-zinc-900/60 transition-colors">
              <FaMobileAlt className="text-4xl text-sky-blue mb-6" />
              <h3 className="text-xl font-bold mb-3">PWAs & Mobile</h3>
              <p className="text-gray-400 font-light text-sm">App-like experiences directly in the browser, optimized for all devices with offline capabilities.</p>
            </div>
            <div className="p-8 border border-white/5 rounded-3xl bg-zinc-900/30 hover:bg-zinc-900/60 transition-colors">
              <FaLaptopCode className="text-4xl text-sky-blue mb-6" />
              <h3 className="text-xl font-bold mb-3">Web Applications</h3>
              <p className="text-gray-400 font-light text-sm">Scalable, secure, and fast full-stack applications tailored precisely to your business needs.</p>
            </div>
            <div className="p-8 border border-white/5 rounded-3xl bg-zinc-900/30 hover:bg-zinc-900/60 transition-colors">
              <FaTools className="text-4xl text-sky-blue mb-6" />
              <h3 className="text-xl font-bold mb-3">Digital Tools</h3>
              <p className="text-gray-400 font-light text-sm">Internal dashboards, automation scripts, and custom software tools that save you time and money.</p>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* How it Works / Process */}
      <section className="py-24 px-6 md:px-12 bg-zinc-950 border-y border-white/5">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl font-bold mb-12 text-center tracking-tight">The <span className="text-sky-blue">Process</span></h2>
            
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/20 before:to-transparent">
              
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-white/20 bg-black text-sky-blue shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 shadow-[0_0_10px_rgba(135,206,235,0.2)]">
                  1
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl border border-white/5 bg-zinc-900/40 backdrop-blur-sm">
                  <h4 className="font-bold text-lg mb-2 text-white">Intake & Discovery</h4>
                  <p className="text-sm text-gray-400 font-light">We discuss your vision, requirements, and timeline to ensure we are a perfect fit.</p>
                </div>
              </div>
              
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-white/20 bg-black text-sky-blue shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 shadow-[0_0_10px_rgba(135,206,235,0.2)]">
                  2
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl border border-white/5 bg-zinc-900/40 backdrop-blur-sm">
                  <h4 className="font-bold text-lg mb-2 text-white">Contract & 33% Deposit</h4>
                  <p className="text-sm text-gray-400 font-light">Review the proposal, sign the digital contract, and make a 33% upfront payment to lock in the project start date.</p>
                </div>
              </div>

              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-white/20 bg-black text-sky-blue shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 shadow-[0_0_10px_rgba(135,206,235,0.2)]">
                  3
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl border border-white/5 bg-zinc-900/40 backdrop-blur-sm">
                  <h4 className="font-bold text-lg mb-2 text-white">Design & Development</h4>
                  <p className="text-sm text-gray-400 font-light">I build your product with regular updates, ensuring transparency and alignment with your goals.</p>
                </div>
              </div>

              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-white/20 bg-black text-sky-blue shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 shadow-[0_0_10px_rgba(135,206,235,0.2)]">
                  4
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl border border-white/5 bg-zinc-900/40 backdrop-blur-sm">
                  <h4 className="font-bold text-lg mb-2 text-white">Launch & Handoff</h4>
                  <p className="text-sm text-gray-400 font-light">Final payment is made, and your project goes live. You receive full ownership and documentation.</p>
                </div>
              </div>

            </div>
          </FadeIn>
        </div>
      </section>

      {/* Intake Form (CTA) */}
      <section id="intake" className="py-24 px-6 md:px-12 max-w-3xl mx-auto">
        <FadeIn>
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Ready to start?</h2>
            <p className="text-gray-400 font-light">Fill out the intake form below to request a proposal. Once approved, you'll receive a contract and a link for the 33% initial deposit.</p>
          </div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Name</label>
                <input type="text" placeholder="Jane Doe" className="w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-sky-blue transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Email</label>
                <input type="email" placeholder="jane@example.com" className="w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-sky-blue transition-colors" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">Project Type</label>
              <select className="w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-sky-blue transition-colors appearance-none">
                <option>Progressive Web App (PWA)</option>
                <option>Custom Software</option>
                <option>Digital Tool / Dashboard</option>
                <option>Other</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">Project Details</label>
              <textarea rows={5} placeholder="Tell me about your idea, timeline, and budget expectations..." className="w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-sky-blue transition-colors resize-none"></textarea>
            </div>

            <button type="submit" className="w-full bg-sky-blue text-black font-bold text-lg py-4 rounded-xl hover:bg-sky-400 hover:scale-[1.02] transition-all shadow-[0_0_20px_rgba(135,206,235,0.2)]">
              Submit Intake Request
            </button>
            <p className="text-center text-xs text-gray-500 mt-4 flex items-center justify-center gap-2">
              <FaCheckCircle className="text-sky-blue" />
              No commitment required to submit.
            </p>
          </form>
        </FadeIn>
      </section>
      
      {/* Footer Spacing for mobile nav */}
      <div className="h-24 md:h-0"></div>
    </div>
  );
}
