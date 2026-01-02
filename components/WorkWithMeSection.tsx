export default function WorkWithMeSection() {
  const services = [
    {
      title: "Freelance Development",
      description: "I build responsive, high-performance websites and web applications tailored to your specific needs. From landing pages to full-stack solutions, I bring your vision to life with clean code and modern technologies."
    },
    {
      title: "Consultation",
      description: "Helping creatives and local businesses establish a strong digital footprint. Whether you need a high-impact portfolio, an online store, or a custom booking system, I provide the technical roadmap to help your business thrive."
    },
    {
      title: "Swift Solutions",
      // UPDATED DESCRIPTION: Focus on AI & Velocity
      description: "Leveraging the power of emerging AI technologies to accelerate development cycles. I help you prototype, iterate, and ship full-scale websites and web applications with unmatched velocity, significantly reducing time-to-market without sacrificing quality."
    }
  ];

  return (
    <section className="py-10 w-full px-4 md:px-8 border-b border-white/5">
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
    </section>
  );
}