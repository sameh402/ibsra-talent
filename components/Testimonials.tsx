
import React from 'react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "IBSRA reduced our technical onboarding time by 70%. Their candidates hit the ground running on day one.",
      author: "Sarah Khalid",
      role: "VP of Engineering, CairoTech",
      initial: "S"
    },
    {
      quote: "The cultural alignment feature is real. We've hired three people who feel like they've been with us for years.",
      author: "Mohammed Fahad",
      role: "Head of Talent, Riyadh Bank",
      initial: "M"
    },
    {
      quote: "Zero hiring risk sounds too good to be true, but it's exactly what they delivered. We only pay for proven results.",
      author: "Elena Rossi",
      role: "HR Director, UAE Solutions",
      initial: "E"
    }
  ];

  // Global Partners from Proposal PDF
  const globalPartners = [
    "Microsoft", 
    "Google", 
    "Meta", 
    "IBM", 
    "Penn University", 
    "University of Michigan", 
    "King Saud University"
  ];

  // Local & Industry Partners from Proposal PDF and Screenshots
  const regionalPartners = [
    "Banque Misr",
    "National Bank of Egypt",
    "Orange Digital Center",
    "Circle K",
    "Pico Energy",
    "Aman",
    "iScore",
    "Prompt Advisers",
    "AMIT Learning",
    "Takamul Education",
    "Diamond Oilfield Tech (DOT)",
    "Marahil",
    "Creativa",
    "ITI Egypt",
    "Ain Shams University",
    "Etisalat",
    "BUE Egypt",
    "MCIT Egypt",
    "Engineers Syndicate",
    "EAE&AT Academy"
  ];

  return (
    <section id="testimonials" className="py-24 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-6 mb-20">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-indigo-600 font-bold tracking-widest uppercase text-[10px] mb-4">Social Proof</h2>
          <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 tracking-tight">Trusted by Industry Titans</h3>
          <p className="text-slate-500 text-sm leading-relaxed">
            Our graduates are driving growth at the world's most prestigious organizations and local market leaders.
          </p>
        </div>
      </div>

      {/* Testimonial Cards */}
      <div className="container mx-auto px-6 mb-24">
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100 flex flex-col hover:shadow-xl transition-all duration-500 group">
              <div className="flex gap-1 text-yellow-400 mb-6 text-xs group-hover:scale-105 transition-transform">
                {[1, 2, 3, 4, 5].map(s => <i key={s} className="fa-solid fa-star"></i>)}
              </div>
              <p className="text-slate-600 text-base leading-relaxed mb-8 flex-grow italic">"{t.quote}"</p>
              <div className="flex items-center gap-4 pt-6 border-t border-slate-50">
                <div className="w-10 h-10 bg-indigo-600 rounded-2xl flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-indigo-100">
                  {t.initial}
                </div>
                <div>
                  <span className="block font-bold text-slate-900 text-sm">{t.author}</span>
                  <span className="block text-[10px] text-slate-400 font-bold uppercase tracking-widest">{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Brand Partnership Section */}
      <div className="bg-white border-y border-slate-100 py-16">
        <div className="text-center mb-12">
            <span className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.3em]">Our Network</span>
        </div>
        
        {/* Track 1: Global Partners (Primary Color) */}
        <div className="relative flex overflow-x-hidden group mb-12">
          <div className="animate-marquee whitespace-nowrap flex items-center gap-20 pr-20">
            {[...globalPartners, ...globalPartners].map((partner, i) => (
              <span key={i} className="text-2xl md:text-3xl font-black text-slate-200 hover:text-indigo-600 transition-colors duration-500 uppercase tracking-tighter cursor-default">
                {partner}
              </span>
            ))}
          </div>
        </div>

        {/* Track 2: Industry Partners (Secondary Color - Reverse) */}
        <div className="relative flex overflow-x-hidden group">
          <div className="animate-marquee-reverse whitespace-nowrap flex items-center gap-16 pr-16">
            {[...regionalPartners, ...regionalPartners].map((partner, i) => (
              <div key={i} className="flex items-center gap-3 group/item cursor-default">
                <span className="text-lg md:text-xl font-bold text-slate-200 group-hover/item:text-indigo-400 transition-colors duration-500 uppercase tracking-tight">
                    {partner}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-slate-100"></span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee {
          animation: marquee 50s linear infinite;
        }
        .animate-marquee-reverse {
          animation: marquee-reverse 65s linear infinite;
        }
        .animate-marquee:hover, .animate-marquee-reverse:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
