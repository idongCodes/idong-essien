"use client";

import { useState } from "react";
import { FaTimes, FaCheckCircle, FaSpinner } from "react-icons/fa";
import { submitIntakeForm } from "@/app/actions/submitIntake";

interface IntakeFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function IntakeFormModal({ isOpen, onClose }: IntakeFormModalProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isPending, setIsPending] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsPending(true);
    
    const formData = new FormData(e.currentTarget);
    const result = await submitIntakeForm(formData);
    
    setIsPending(false);
    
    if (result.success) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        onClose();
      }, 3000);
    } else {
      alert("Something went wrong. Please try again or contact me directly.");
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-zinc-950 border border-white/10 rounded-2xl shadow-2xl p-6 md:p-10 scrollbar-hide"
      >
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors p-2 bg-white/5 rounded-full hover:bg-white/10"
        >
          <FaTimes size={20} />
        </button>

        {isSubmitted ? (
          <div className="flex flex-col items-center justify-center h-64 text-center">
            <FaCheckCircle className="text-6xl text-sky-blue mb-4 animate-bounce" />
            <h2 className="text-3xl font-bold text-white mb-2">Request Received!</h2>
            <p className="text-gray-400">Thank you for your interest. I will review your project details and get back to you shortly.</p>
          </div>
        ) : (
          <>
            <h2 className="text-3xl font-bold text-white mb-2">Client Intake Form</h2>
            <p className="text-gray-400 mb-8 font-light">Please provide as much detail as possible so I can understand your project and prepare a tailored proposal.</p>
            
            <form onSubmit={handleSubmit} className="space-y-10">
              
              {/* Section 1: The Basics */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-sky-blue border-b border-white/10 pb-2">1. The Basics</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">Full Name *</label>
                    <input name="fullName" required type="text" placeholder="Jane Doe" className="w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-sky-blue transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">Email Address *</label>
                    <input name="email" required type="email" placeholder="jane@example.com" className="w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-sky-blue transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">Company / Brand Name</label>
                    <input name="company" type="text" placeholder="Acme Corp" className="w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-sky-blue transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">Current Website URL (if any)</label>
                    <input name="website" type="url" placeholder="https://yourwebsite.com" className="w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-sky-blue transition-colors" />
                  </div>
                </div>
              </div>

              {/* Section 2: Project Scope */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-sky-blue border-b border-white/10 pb-2">2. Project Scope</h3>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">What type of project are you looking for? *</label>
                  <select name="projectType" required defaultValue="" className="w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-sky-blue transition-colors appearance-none">
                    <option value="" disabled>Select a project type...</option>
                    <option value="Website">Bespoke Website (Portfolio, Business, E-commerce)</option>
                    <option value="PWA">Progressive Web App (PWA) / Mobile Experience</option>
                    <option value="Software">Internal Software / Digital Tool (Dashboards, Automations)</option>
                    <option value="SEO">SEO Optimization / Website Revamp</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Please describe the project in a few sentences *</label>
                  <textarea name="description" required rows={4} placeholder="We need a PWA for our customers to order products directly from their phones..." className="w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-sky-blue transition-colors resize-none"></textarea>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">What are the core features this project MUST have?</label>
                  <input name="features" type="text" placeholder="e.g. User login, Stripe payments, Booking system" className="w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-sky-blue transition-colors" />
                </div>
              </div>

              {/* Section 3: Goals & Audience */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-sky-blue border-b border-white/10 pb-2">3. Goals & Audience</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">Who is your target audience?</label>
                    <input name="audience" type="text" placeholder="Local homeowners aged 30-50" className="w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-sky-blue transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">What does a successful outcome look like?</label>
                    <input name="success" type="text" placeholder="Increase monthly leads by 30%" className="w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-sky-blue transition-colors" />
                  </div>
                </div>
              </div>

              {/* Section 4: Budget & Timeline */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-sky-blue border-b border-white/10 pb-2">4. Logistics</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">Allocated Budget *</label>
                    <select name="budget" required defaultValue="" className="w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-sky-blue transition-colors appearance-none">
                      <option value="" disabled>Select a budget range...</option>
                      <option value="1500-3000">$1,500 - $3,000 (Basic Websites)</option>
                      <option value="3000-6000">$3,000 - $6,000 (Advanced Sites / Simple Apps)</option>
                      <option value="6000+">$6,000 - $10,000+ (Complex Internal Software / PWAs)</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">Target Launch Date *</label>
                    <select name="timeline" required defaultValue="" className="w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-sky-blue transition-colors appearance-none">
                      <option value="" disabled>Select a timeline...</option>
                      <option value="ASAP">ASAP (Rush fee may apply)</option>
                      <option value="1-2 Months">Within 1-2 months</option>
                      <option value="3+ Months">3+ months / Flexible</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Section 5: Design & Assets */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-sky-blue border-b border-white/10 pb-2">5. Design & Assets</h3>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Share 2-3 links to websites/apps you love, and why</label>
                  <textarea name="inspiration" rows={3} placeholder="https://stripe.com - Love the clean design and animations..." className="w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-sky-blue transition-colors resize-none"></textarea>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Links to hosted assets (Pictures, Videos, Logos)</label>
                  <textarea name="assets" rows={2} placeholder="Google Drive, Dropbox, or Imgur links to media you want included..." className="w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-sky-blue transition-colors resize-none"></textarea>
                  <p className="text-xs text-gray-500 mt-1">If you have specific media you want used on the site, paste the shared links here.</p>
                </div>
              </div>

              {/* Section 6: Ongoing Support */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-sky-blue border-b border-white/10 pb-2">6. Ongoing Support</h3>
                <label className="text-sm font-medium text-gray-300 mb-2 block">After launch, will you need an ongoing retainer for SEO, updates, or maintenance? *</label>
                <div className="flex flex-col space-y-3">
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input type="radio" name="support" value="yes" required className="w-5 h-5 accent-sky-blue cursor-pointer" />
                    <span className="text-gray-400 group-hover:text-white transition-colors">Yes, I'd like to discuss a monthly retainer.</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input type="radio" name="support" value="no" className="w-5 h-5 accent-sky-blue cursor-pointer" />
                    <span className="text-gray-400 group-hover:text-white transition-colors">No, just build it and hand over the keys.</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input type="radio" name="support" value="maybe" className="w-5 h-5 accent-sky-blue cursor-pointer" />
                    <span className="text-gray-400 group-hover:text-white transition-colors">I'm not sure yet, let's discuss it.</span>
                  </label>
                </div>
              </div>

              <div className="pt-6 border-t border-white/10">
                <button disabled={isPending} type="submit" className="w-full bg-sky-blue text-black font-bold text-lg py-4 rounded-xl hover:bg-sky-400 hover:scale-[1.01] transition-all shadow-[0_0_20px_rgba(135,206,235,0.2)] disabled:opacity-70 disabled:hover:scale-100 flex items-center justify-center gap-2">
                  {isPending ? <FaSpinner className="animate-spin" /> : null}
                  {isPending ? "Submitting..." : "Submit Project Details"}
                </button>
                <p className="text-center text-xs text-gray-500 mt-4 flex items-center justify-center gap-2">
                  <FaCheckCircle className="text-sky-blue" />
                  Your information is secure. No commitment required.
                </p>
              </div>
              
            </form>
          </>
        )}
      </div>
    </div>
  );
}
