
import React from 'react';

const ProblemSection: React.FC = () => {
  return (
    <section id="problem" className="bg-[#f8fafc]">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tighter">
            Stop Guessing. <span className="text-indigo-600">See Results First.</span>
          </h2>
          <p className="text-slate-500 text-lg md:text-xl font-medium leading-relaxed opacity-80 max-w-3xl mx-auto">
            Strong Teams Build Strong Companies. You Deserve Certainty, Not Guesswork.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {[
            { 
              icon: "fa-filter-circle-xmark", 
              title: "The Qualification Gap", 
              desc: "You interview 50 candidates. Only 2 are qualified. The time drain is immense and slows down your roadmap." 
            },
            { 
              icon: "fa-hourglass-half", 
              title: "The Onboarding Slog", 
              desc: "New hires take 6+ months to become productive. You're paying full salaries for half productivity." 
            },
            { 
              icon: "fa-people-arrows", 
              title: "Cultural Mismatch", 
              desc: "Culture misalignment costs you time and money. Skills can be taught, but values are often fixed." 
            }
          ].map((p, i) => (
            <div key={i} className="bg-white p-12 rounded-[3.5rem] border border-slate-100 flex flex-col items-center text-center shadow-[0_30px_100px_-15px_rgba(0,0,0,0.15)] hover:shadow-[0_40px_120px_-20px_rgba(79,70,229,0.2)] transition-all duration-500 group">
              <div className="w-20 h-20 bg-red-50 text-red-500 rounded-[2rem] flex items-center justify-center mb-8 text-3xl transition-transform duration-500 group-hover:scale-110 shadow-sm">
                <i className={`fa-solid ${p.icon}`}></i>
              </div>
              <h4 className="text-2xl font-black text-slate-900 mb-6 tracking-tight">{p.title}</h4>
              <p className="text-slate-500 text-sm md:text-base leading-relaxed font-medium px-4 max-w-[280px]">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
