"use client";

import { useState } from "react";
import IntakeFormModal from "./IntakeFormModal";

export default function WorkWithMeSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const services = [
    {
      title: "PWAs & Websites",
      description: "High-performance Progressive Web Apps (PWAs) and bespoke websites. Whether you're a large company, a local small business, or a creative (crafter, artist, etc.), I build the perfect digital footprint for you."
    },
    {
      title: "Internal Software & Tools",
      description: "Custom internal software, automation scripts, and digital tools designed to streamline your business operations, reduce overhead, and scale alongside your team."
    },
    {
      title: "SEO & Ongoing Support",
      description: "Launch is just the beginning. I provide robust SEO services to maximize your reach, and offer dedicated retainer packages for regular updates, maintenance, and feature development for a fee."
    }
  ];

  return (
    <section id="work" className="py-16 my-16 w-full px-6 md:px-12 border border-white/10 rounded-[2.5rem] bg-gradient-to-b from-zinc-900/30 to-black scroll-mt-24 relative overflow-hidden shadow-2xl">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-32 bg-sky-blue/5 blur-[100px] pointer-events-none"></div>
      <h2 className="text-3xl font-bold text-white mb-12 text-center tracking-tight">
        Work <span className="text-sky-blue">With Me</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div 
            key={index}
            className="p-8 rounded-2xl bg-zinc-900/50 border border-white/10 hover:border-sky-blue/50 hover:bg-zinc-900/80 transition-all duration-300 group"
          >
            <h3 className="text-xl font-bold text-white mb-4 group-hover:text-sky-blue transition-colors">
              {service.title}
            </h3>
            <p className="text-gray-400 leading-relaxed text-sm font-light">
              {service.description}
            </p>
          </div>
        ))}
      </div>

      {/* The Process Map */}
      <div className="mt-24 max-w-4xl mx-auto">
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
      </div>

      {/* Centered Intake Form Button */}
      <div className="mt-20 flex flex-col items-center justify-center">
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-sky-blue text-black font-bold py-4 px-12 rounded-full hover:bg-sky-400 transition-all hover:scale-105 shadow-[0_0_20px_rgba(135,206,235,0.3)] text-lg"
        >
          Submit Intake Form
        </button>
        <p className="mt-4 text-xs text-gray-500 font-light flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-sky-blue animate-pulse"></span>
          Clicking this button will open a secure project intake form.
        </p>
      </div>

      <IntakeFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}