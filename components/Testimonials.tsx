
import React from 'react';

const Testimonials: React.FC = () => {
  const reviews = [
    {
      stars: 5,
      text: "IBSRA reduced our technical onboarding time by 70%. Their candidates hit the ground running on day one.",
      name: "Sarah Khalid",
      role: "VP OF ENGINEERING, CAIROTECH",
      initial: "S",
      color: "bg-[#5c56ff]"
    },
    {
      stars: 5,
      text: "The cultural alignment feature is real. We've hired three people who feel like they've been with us for years.",
      name: "Mohammed Fahad",
      role: "HEAD OF TALENT, RIYADH BANK",
      initial: "M",
      color: "bg-[#4f46e5]"
    },
    {
      stars: 5,
      text: "Zero hiring risk sounds too good to be true, but it's exactly what they delivered. We only pay for proven results.",
      name: "Elena Rossi",
      role: "HR DIRECTOR, UAE SOLUTIONS",
      initial: "E",
      color: "bg-[#6366f1]"
    }
  ];

  return (
    <section className="py-40 bg-white">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="text-center mb-24">
          <h2 className="text-[#5c56ff] font-bold tracking-[0.3em] uppercase text-[10px] md:text-xs mb-6">
            SOCIAL PROOF
          </h2>
          <h3 className="text-5xl md:text-7xl font-black text-[#1b1a4e] tracking-tight mb-8">
            Trusted by Industry
          </h3>
          <p className="text-slate-500 max-w-3xl mx-auto text-lg md:text-xl font-medium leading-relaxed opacity-80">
            Our graduates are driving growth at the world's most prestigious organizations and local market leaders.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 md:gap-10">
          {reviews.map((r, i) => (
            <div key={i} className="bg-white p-12 md:p-14 rounded-[3.5rem] shadow-[0_40px_80px_-15px_rgba(0,0,0,0.05)] border border-slate-100 flex flex-col hover:shadow-[0_50px_100px_-20px_rgba(0,0,0,0.08)] transition-all duration-500 group">
              <div className="flex gap-1.5 text-yellow-400 mb-10">
                {[...Array(r.stars)].map((_, idx) => (
                  <i key={idx} className="fa-solid fa-star text-sm"></i>
                ))}
              </div>
              
              <p className="text-[#334155] text-lg md:text-xl leading-relaxed mb-16 font-medium italic opacity-90">
                "{r.text}"
              </p>
              
              <div className="flex items-center gap-5 mt-auto pt-8 border-t border-slate-50">
                <div className={`w-14 h-14 rounded-2xl ${r.color} text-white flex items-center justify-center font-black text-2xl shadow-xl shadow-indigo-500/20 group-hover:scale-105 transition-transform duration-500`}>
                  {r.initial}
                </div>
                <div className="flex flex-col">
                  <h4 className="font-black text-[#1b1a4e] text-base leading-tight mb-1.5">
                    {r.name}
                  </h4>
                  <p className="text-[9px] font-black text-slate-400 uppercase tracking-[0.15em]">
                    {r.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
