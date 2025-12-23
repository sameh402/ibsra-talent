
import React from 'react';

const Benefits: React.FC = () => {
  const benefitsItems = [
    {
      title: "Rapid Resource Deployment",
      desc: "Get pre-trained individuals in 48 hours or complete ready-made teams in 4 days. Zero delays.",
      icon: "fa-bolt"
    },
    {
      title: "Reduced Management Burden",
      desc: "Our full outsourcing handles recruitment, training, and delivery. You focus on strategy.",
      icon: "fa-vial"
    },
    {
      title: "DNA-Specific Training",
      desc: "Build your dream team from scratch. We train candidates to your exact tech stack over 16 weeks.",
      icon: "fa-hourglass-start"
    },
    {
      title: "Total Risk Mitigation",
      desc: "Test contract talent before committing. Eliminate hiring guesswork with proven results.",
      icon: "fa-shield-halved"
    }
  ];

  return (
    <section id="business-impact" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Side: Content & Grid */}
          <div className="lg:w-3/5">
            <h2 className="text-indigo-600 font-bold tracking-widest uppercase text-[10px] mb-4">
              VALUE PROPOSITION
            </h2>
            
            <h3 className="text-3xl md:text-5xl font-black text-slate-900 mb-12 tracking-tight leading-tight max-w-xl">
              What This Means for Your Business
            </h3>
            
            <div className="grid sm:grid-cols-2 gap-x-12 gap-y-12">
              {benefitsItems.map((b, i) => (
                <div key={i} className="flex flex-col gap-4 group max-w-[280px]">
                  <div className="text-indigo-600 text-2xl transition-transform duration-300 group-hover:scale-110">
                    <i className={`fa-solid ${b.icon}`}></i>
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 tracking-tight">
                    {b.title}
                  </h4>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {b.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right Side: Card */}
          <div className="lg:w-2/5 w-full">
            <div className="bg-[#1e1b4b] p-10 md:p-14 rounded-[2.5rem] text-white relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-40 h-40 bg-indigo-500/10 rounded-full blur-[60px] -translate-y-1/2 translate-x-1/2"></div>
              
              <h4 className="text-2xl font-black mb-6 leading-tight max-w-xs">
                Not Just Training. <br />
                <span className="text-indigo-400">It's Transformation.</span>
              </h4>
              
              <p className="text-slate-400 mb-8 text-base leading-relaxed max-w-xs">
                Behind every great company are people who believed in its vision. We find those people and give them the skills to make your company even greater.
              </p>
              
              <div className="mb-10 border-l-4 border-indigo-500 pl-6 py-1 max-w-xs">
                <p className="text-white text-lg font-bold italic leading-relaxed">
                  "This isn't transactional hiring. It's building a team that truly cares."
                </p>
              </div>
              
              <div className="flex items-center gap-4">
                <img 
                  src="https://i.pravatar.cc/100?u=ceo" 
                  alt="Ahmed Al-Sayed" 
                  className="w-12 h-12 rounded-full object-cover border-2 border-white/10" 
                />
                <div>
                  <span className="block font-bold text-sm text-white">Ahmed Al-Sayed</span>
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                    Founder & CEO, IBSRA Talent
                  </span>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Benefits;
