
import React from 'react';

const Partners: React.FC = () => {
  const row1 = [
    "MICROSOFT", "GOOGLE", "META", "IBM", "PENN UNIVERSITY", "UNIVERSITY OF MICHIGAN", "KING SAUD UNIVERSITY"
  ];

  const row2 = [
    "BANQUE MISR", "NATIONAL BANK OF EGYPT", "ETISALAT", "CIRCLE K", "PICO ENERGY", "AMAN", "ISCORE", "PROMPT ADVISERS", "ORANGE DIGITAL CENTER", "BUE EGYPT", "MCIT EGYPT", "EAE&AT ACADEMY", "ENGINEERS SYNDICATE"
  ];

  return (
    <section className="py-32 bg-white border-y border-slate-200 overflow-hidden">
      <div className="text-center mb-20">
        <h2 className="text-indigo-600 font-black tracking-[1em] uppercase text-sm">Our Network</h2>
      </div>
      
      <div className="space-y-16">
        {/* Row 1: Global & Universities */}
        <div className="relative flex overflow-x-hidden">
          <div className="animate-marquee-slow flex items-center gap-32 whitespace-nowrap px-16">
            {[...row1, ...row1, ...row1].map((p, i) => (
              <span key={i} className="text-5xl md:text-7xl font-black text-slate-900/10 uppercase tracking-tighter hover:text-indigo-600 transition-colors duration-700 cursor-default select-none">
                {p}
              </span>
            ))}
          </div>
        </div>

        {/* Row 2: Industry & Local Partners */}
        <div className="relative flex overflow-x-hidden">
          <div className="animate-marquee-reverse flex items-center gap-24 whitespace-nowrap px-16">
            {[...row2, ...row2, ...row2].map((p, i) => (
              <span key={i} className="text-2xl md:text-3xl font-black text-slate-400 uppercase tracking-tighter hover:text-indigo-500 transition-colors duration-700 cursor-default select-none">
                {p} <span className="mx-6 opacity-20 text-slate-300">•</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
