
import React from 'react';

const ProblemSection: React.FC = () => {
  const problems = [
    {
      title: "The Qualification Gap",
      desc: "You interview 50 candidates. Only 2 are qualified. The time drain is immense and slows down your roadmap.",
      icon: "fa-filter-circle-xmark"
    },
    {
      title: "The Onboarding Slog",
      desc: "New hires take 6+ months to become productive. You're paying full salaries for half productivity.",
      icon: "fa-hourglass-half"
    },
    {
      title: "Cultural Mismatch",
      desc: "Culture misalignment costs you time and money. Skills can be taught, but values are often fixed.",
      icon: "fa-people-arrows"
    }
  ];

  return (
    <section id="problem" className="py-24 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-20 text-center mx-auto">
          <h2 className="text-indigo-600 font-bold tracking-widest uppercase text-sm mb-4">The Challenge</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 italic tracking-tight">Stop Guessing. <span className="text-indigo-600">See Results First.</span></h3>
          <p className="text-xl text-slate-600">Strong Teams Build Strong Companies. You Deserve Certainty, Not Guesswork.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((p, i) => (
            <div key={i} className="group bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-red-50 text-red-500 rounded-2xl flex items-center justify-center mb-8 text-2xl group-hover:scale-110 transition">
                <i className={`fa-solid ${p.icon}`}></i>
              </div>
              <h4 className="text-2xl font-bold text-slate-900 mb-4">{p.title}</h4>
              <p className="text-slate-600 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
