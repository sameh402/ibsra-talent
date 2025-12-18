
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-32 overflow-hidden bg-gradient-primary">
      {/* Background blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-purple-500/10 rounded-full blur-[100px] -translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        <div className="text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/90 text-[10px] font-bold uppercase tracking-[0.2em] mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
            Enterprise Growth Partner
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-8">
            Hire <span className="text-indigo-400">Qualified</span> Talent <br />
            Who Want to <br />
            <span className="gradient-text">Work with You</span>
          </h1>
          <p className="text-base md:text-lg text-white/60 mb-10 max-w-lg leading-relaxed">
            We transform passionate individuals into industry-ready professionals trained specifically for your tech stack, company culture, and long-term goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-14">
            <button className="px-8 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full font-bold text-sm transition shadow-xl shadow-indigo-600/20 flex items-center justify-center gap-2 active:scale-95">
              Build Your Team
              <i className="fa-solid fa-arrow-right text-xs"></i>
            </button>
            <button className="px-8 py-3.5 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-full font-bold text-sm transition glass active:scale-95">
              Our Process
            </button>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-5">
               <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <img 
                    key={i} 
                    src={`https://picsum.photos/100/100?random=${i+10}`} 
                    alt="User" 
                    className="w-11 h-11 rounded-full border-2 border-indigo-900 object-cover shadow-lg" 
                  />
                ))}
                <div className="w-11 h-11 rounded-full border-2 border-indigo-900 bg-indigo-800 flex items-center justify-center text-[10px] font-bold text-white shadow-lg">
                  +4k
                </div>
              </div>
              <div className="text-white/60 text-[11px] leading-tight">
                <span className="block font-black text-white text-sm mb-0.5 tracking-tight">4,000+ Developers</span>
                Already trained and placed globally.
              </div>
            </div>

            <div className="flex items-center gap-2 text-white/30 font-bold text-[9px] uppercase tracking-[0.25em]">
              <span>Global Reach:</span>
              <span className="text-white/60">Egypt</span>
              <span className="w-1 h-1 rounded-full bg-indigo-500"></span>
              <span className="text-white/60">Riyadh</span>
              <span className="w-1 h-1 rounded-full bg-indigo-500"></span>
              <span className="text-white/60">UAE</span>
            </div>
          </div>
        </div>

        <div className="relative hidden lg:block">
           <div className="relative z-20 rounded-[3rem] overflow-hidden shadow-2xl border border-white/5 transform rotate-1 hover:rotate-0 transition duration-1000">
             <img 
               src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000" 
               alt="Team collaborating" 
               className="w-full h-auto object-cover aspect-[4/5]" 
             />
             <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/95 via-indigo-950/20 to-transparent"></div>
             <div className="absolute bottom-8 left-8 right-8 glass p-6 rounded-3xl border border-white/10">
                <p className="text-white/90 text-sm italic mb-4 leading-relaxed font-medium">"They didn't just find us a developer; they cultivated a team member who understands our DNA."</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center font-bold text-white text-xs">AS</div>
                  <div>
                    <span className="block text-white font-bold text-sm tracking-tight">Amr Salem</span>
                    <span className="block text-indigo-300 text-[9px] font-bold uppercase tracking-widest">Head of Engineering, Cairo Fintech</span>
                  </div>
                </div>
             </div>
           </div>
           
           <div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-500/15 rounded-full blur-3xl animate-pulse"></div>
           <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-purple-600/15 rounded-full blur-3xl"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
