
import React from 'react';

const Benefits: React.FC = () => {
  const benefits = [
    {
      title: "Rapid Resource Deployment",
      desc: "Get pre-trained individuals in 48 hours or complete ready-made teams in 4 days. Zero delays in your development roadmap.",
      icon: "fa-bolt"
    },
    {
      title: "Reduced Management Burden",
      desc: "Our full outsourcing handles recruitment, training, and delivery. You focus on strategy; we focus on executing the objectives.",
      icon: "fa-vial-circle-check"
    },
    {
      title: "DNA-Specific Training",
      desc: "Build your dream team from scratch. We train candidates to your exact tech stack and company culture over a precision 16-week cycle.",
      icon: "fa-dna"
    },
    {
      title: "Total Risk Mitigation",
      desc: "Test contract talent before committing or hire a pre-integrated team. Eliminate hiring guesswork with proven results first.",
      icon: "fa-shield-halved"
    }
  ];

  return (
    <section id="business-impact" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-indigo-600 font-bold tracking-widest uppercase text-sm mb-4">Value Proposition</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-12 leading-tight">What This Means <br /> for Your Business</h3>
            
            <div className="grid sm:grid-cols-2 gap-8">
              {benefits.map((b, i) => (
                <div key={i} className="flex flex-col gap-4">
                  <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center text-xl">
                    <i className={`fa-solid ${b.icon || 'fa-check'}`}></i>
                  </div>
                  <h4 className="text-xl font-bold text-slate-900">{b.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-slate-900 p-12 rounded-[2.5rem] text-white relative">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none"></div>
             
             <h4 className="text-2xl font-extrabold mb-8">Not Just Training. <br /><span className="text-indigo-400">It's Transformation.</span></h4>
             <p className="text-slate-400 mb-8 leading-relaxed">
                Behind every great company are people who believed in its vision before they even joined. We find those people—the ones with energy, ideas, and genuine passion for what you do—and give them the skills to make your company even greater.
             </p>
             <p className="text-slate-400 mb-10 leading-relaxed font-bold italic">
                "This isn't transactional hiring. It's building a team that truly cares."
             </p>
             
             <div className="flex items-center gap-4 p-6 bg-white/5 rounded-2xl border border-white/10">
                <img src="https://picsum.photos/100/100?ceo=1" alt="CEO" className="w-16 h-16 rounded-full object-cover" />
                <div>
                  <span className="block font-bold">Ahmed Al-Sayed</span>
                  <span className="block text-sm text-slate-500">Founder & CEO, IBSRA Talent</span>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
