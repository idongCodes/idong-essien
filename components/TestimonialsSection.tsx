import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "HSC Productions",
    role: "Producer",
    quote: "I appreciate the professional effort put into building this website to help advance my career. Having a website allows creative individuals to showcase an established body of work while connecting with others to achieve their goals. I 100% recommend this—no matter the business or brand, it is important to have an online presence that connects you with colleagues and consumers to build your portfolio and push into a world of possibilities."
  },
  {
    name: "Ahmed Barre",
    role: "Software Engineer",
    quote: "It’s rare that you come across standout talent like Essien. I had the pleasure of working with Essien and collaborating with him on several team projects. I was particularly impressed by Essien’s dedication and passion. Any employer would be lucky to have Essien as a developer."
  }
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 w-full px-4 md:px-8 border-b border-white/5 bg-black">
      <h2 className="text-3xl font-bold text-white mb-16 text-center tracking-tight">
        Client <span className="text-sky-blue">Testimonials</span>
      </h2>

      {/* Updated Grid: 
         Changed from 'grid-cols-1' to 'md:grid-cols-2' to allow 
         testimonials to sit side-by-side on larger screens.
      */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((t, i) => (
          <div key={i} className="relative bg-zinc-900/50 border border-white/10 p-8 rounded-2xl shadow-xl hover:border-sky-blue/30 transition-all duration-300 flex flex-col justify-between">
            
            <div>
              {/* Quote Icon Decoration */}
              <div className="absolute -top-5 -left-2 text-sky-blue/20 text-6xl">
                <FaQuoteLeft />
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-300 italic leading-relaxed mb-8 relative z-10 text-lg font-light">
                "{t.quote}"
              </p>
            </div>

            {/* Client Info */}
            <div className="flex items-center gap-4 border-t border-white/5 pt-6">
              {/* Avatar Placeholder using Initials */}
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-zinc-800 to-black border border-white/10 flex items-center justify-center text-sky-blue font-bold text-xl shadow-inner shrink-0">
                {t.name.charAt(0)}
              </div>
              
              <div>
                <h4 className="text-white font-bold tracking-wide">{t.name}</h4>
                <p className="text-sky-blue text-xs uppercase font-bold tracking-wider">{t.role}</p>
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  )
}