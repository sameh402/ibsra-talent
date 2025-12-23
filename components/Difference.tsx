
import React from 'react';

// DNA-level talent cultivation difference section
const Difference: React.FC = () => {
  const listItems = [
    "Candidates who genuinely believe in your mission",
    "Technology specific training (your exact stack)",
    "Workflows tailored to your internal processes",
    "Proven problem-solving through real-world internships"
  ];

  return (
    <section id="difference" className="bg-white overflow-hidden py-24 md:py-32">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="flex flex-col gap-16 lg:gap-24">
          
          {/* Top/Left Content: Now utilizing more horizontal space */}
          <div className="w-full">
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-indigo-50 text-indigo-600 text-[11px] font-black uppercase tracking-widest mb-10">
              Deployment DNA
            </div>
            
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-slate-900 mb-10 leading-tight tracking-tight">
              Passion Meets Precision.
            </h2>
            
            <p className="text-xl md:text-2xl text-slate-500 font-medium leading-relaxed mb-16 max-w-4xl opacity-90">
              Elite talent dreams of contribution, not just employment. We find individuals with latent excitement for your industry and weaponize their potential through DNA-specific training that mirrors your exact operational environment.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-start gap-16 lg:gap-24">
            {/* Left Side: Horizontal Image */}
            <div className="lg:w-1/2 relative">
              {/* Decorative soft glow behind image */}
              <div className="absolute -top-12 -left-12 w-64 h-64 bg-indigo-50 rounded-full blur-[80px] opacity-60"></div>
              <div className="relative rounded-[3rem] overflow-hidden shadow-[0_80px_150px_-30px_rgba(0,0,0,0.3)] border-[12px] border-slate-50 aspect-[16/10]">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200" 
                  alt="Horizontal Collaboration" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600/20 to-transparent"></div>
              </div>
              
              {/* Floating Metric Card */}
              <div className="absolute -bottom-10 -right-6 bg-white p-8 rounded-[2rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.2)] border border-slate-50 animate-bounce-slow hidden sm:block">
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 bg-emerald-50 text-emerald-500 rounded-2xl flex items-center justify-center text-xl shadow-sm">
                    <i className="fa-solid fa-certificate"></i>
                  </div>
                  <div>
                    <span className="block text-2xl font-black text-slate-900 leading-none mb-1">KPI-Proven</span>
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Performance Guaranteed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: Features and Quote */}
            <div className="lg:w-1/2 flex flex-col justify-center">
              <div className="space-y-8 mb-16">
                {listItems.map((item, i) => (
                  <div key={i} className="flex items-center gap-5 group">
                    <div className="w-8 h-8 rounded-xl bg-indigo-600 text-white flex items-center justify-center text-[12px] shadow-[0_8px_16px_rgba(79,70,229,0.3)] transition-transform group-hover:scale-110">
                      <i className="fa-solid fa-check"></i>
                    </div>
                    <span className="text-slate-700 font-bold text-lg md:text-xl group-hover:text-indigo-600 transition-colors">{item}</span>
                  </div>
                ))}
              </div>

              <div className="p-10 bg-slate-50 rounded-[3rem] border border-slate-100 flex items-start gap-8 shadow-inner relative">
                <div className="text-indigo-600 text-4xl opacity-10 absolute top-8 left-8">
                  <i className="fa-solid fa-quote-left"></i>
                </div>
                <p className="text-slate-600 font-bold italic leading-relaxed text-lg md:text-xl relative z-10">
                  "Turning raw potential into high-performance specialists who are ready to deliver value from hour one on the job."
                </p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Difference;
