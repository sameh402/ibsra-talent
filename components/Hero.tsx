
import React, { useState, useEffect } from 'react';

interface HeroProps {
  onBuildTeamClick: () => void;
  onBookCallClick: () => void;
  onCaseClick: (caseId: string) => void;
}

const testimonials = [
  {
    text: "Scaling our team was seamless. The developers are not just skilled, but culturally aligned.",
    name: "David Chen",
    role: "FOUNDER, NEXUS AI",
    avatar: "https://i.pravatar.cc/150?u=david"
  },
  {
    text: "They didn't just find us a developer; they cultivated a team member who understands our DNA.",
    name: "Sarah Chen",
    role: "CTO, LOGIFLOW UAE",
    avatar: "https://i.pravatar.cc/150?u=sarah"
  },
  {
    text: "The pre-training phase meant our new frontend lead was productive by lunch on their first day.",
    name: "Amr Salem",
    role: "HEAD OF ENGINEERING, FINTECH",
    avatar: "https://i.pravatar.cc/150?u=amr"
  }
];

const Hero: React.FC<HeroProps> = ({ onBuildTeamClick, onBookCallClick, onCaseClick }) => {
  const [activeFeedback, setActiveFeedback] = useState(0);

  const nextFeedback = () => setActiveFeedback((prev) => (prev + 1) % testimonials.length);
  const prevFeedback = () => setActiveFeedback((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const interval = setInterval(nextFeedback, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[85vh] flex items-start pt-32 pb-24 overflow-hidden bg-[#1e1b4b]">
      {/* Background Decorative Glow */}
      <div className="absolute top-0 right-0 w-[50%] h-[100%] bg-indigo-500/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-stretch gap-8 lg:gap-12">
          
          {/* Left Content Card */}
          <div className="flex-1 bg-white/5 backdrop-blur-sm border border-white/5 rounded-[4rem] p-10 md:p-14 lg:p-16 flex flex-col justify-center shadow-2xl">
            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/80 text-[10px] font-bold uppercase tracking-widest mb-6 w-fit">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Business Growth Partner
            </div>
            
            <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6 tracking-tight max-w-2xl">
              Hire <span className="text-indigo-400">Qualified <br /> Talent</span> Who <br /> Want to <br />
              <span className="text-orange-400">Work with You</span>
            </h1>
            
            <p className="text-base md:text-lg text-slate-300 mb-10 max-w-lg leading-relaxed font-medium">
              We transform passionate individuals into industry-ready professionals trained specifically for your tech stack, company culture, and long-term goals.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button 
                onClick={onBuildTeamClick}
                className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-xl active:scale-95 group"
              >
                Build Your Team
                <i className="fa-solid fa-arrow-right text-xs transition-transform group-hover:translate-x-1"></i>
              </button>
              <button 
                onClick={onBookCallClick}
                className="px-8 py-4 bg-white/10 text-white border border-white/10 rounded-full font-bold text-sm transition-all hover:bg-white/20 active:scale-95 shadow-lg"
              >
                Book a Call
              </button>
            </div>

            <div className="h-px w-full bg-white/10 mb-10"></div>

            {/* Trust Stack */}
            <div className="flex items-center gap-6">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <img 
                    key={i}
                    src={`https://i.pravatar.cc/100?u=${i + 25}`} 
                    alt="Developer" 
                    className="w-10 h-10 rounded-full border-2 border-[#1e1b4b] object-cover"
                  />
                ))}
                <div className="w-10 h-10 rounded-full border-2 border-[#1e1b4b] bg-indigo-600 flex items-center justify-center text-white text-[9px] font-bold">
                  +4k
                </div>
              </div>
              <div className="text-left">
                <span className="block text-white font-bold text-xs">4,000+ Developers</span>
                <span className="block text-white/40 text-[9px] uppercase tracking-wider">Trained and placed globally.</span>
              </div>
            </div>
          </div>

          {/* Right Content - Picture Card */}
          <div className="flex-1 relative lg:max-w-xl">
            <div className="relative rounded-[4rem] h-full overflow-hidden shadow-2xl border-[8px] border-indigo-900/20 bg-indigo-900/40 min-h-[450px]">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200" 
                alt="Tech Team" 
                className="w-full h-full object-cover grayscale-[0.2]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1e1b4b]/60 via-transparent to-transparent"></div>
              
              {/* Floating Testimonial Card */}
              <div className="absolute bottom-4 left-4 right-4 p-8 rounded-[2.5rem] bg-[#1e1b4b]/70 backdrop-blur-2xl border border-white/10 shadow-2xl">
                <p className="text-white text-base md:text-lg font-medium leading-relaxed mb-8 italic max-w-md mx-auto">
                  "{testimonials[activeFeedback].text}"
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <img 
                      src={testimonials[activeFeedback].avatar} 
                      alt={testimonials[activeFeedback].name} 
                      className="w-10 h-10 rounded-full object-cover border-2 border-white/20"
                    />
                    <div>
                      <h4 className="text-white font-bold text-sm leading-none mb-1">{testimonials[activeFeedback].name}</h4>
                      <p className="text-indigo-300 text-[9px] font-black uppercase tracking-widest">{testimonials[activeFeedback].role}</p>
                    </div>
                  </div>
                  
                  {/* Navigation Arrows */}
                  <div className="flex gap-2">
                    <button 
                      onClick={prevFeedback}
                      className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all border border-white/5 active:scale-90"
                    >
                      <i className="fa-solid fa-chevron-left text-[10px]"></i>
                    </button>
                    <button 
                      onClick={nextFeedback}
                      className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all border border-white/5 active:scale-90"
                    >
                      <i className="fa-solid fa-chevron-right text-[10px]"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
