
import React from 'react';

const Difference: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <div className="relative">
              <img 
                src="https://picsum.photos/700/800?office=1" 
                alt="Talented professional" 
                className="rounded-3xl shadow-2xl z-10 relative" 
              />
              <div className="absolute -top-8 -left-8 w-48 h-48 bg-purple-100 rounded-3xl -z-0"></div>
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-orange-100 rounded-3xl -z-0"></div>
              
              <div className="absolute top-1/2 -right-12 translate-y-[-50%] bg-white p-6 rounded-2xl shadow-xl hidden md:block max-w-[240px]">
                <div className="flex items-center gap-2 mb-2 text-green-600 font-bold">
                  <i className="fa-solid fa-circle-check"></i>
                  <span>KPI Ready</span>
                </div>
                <p className="text-xs text-slate-500">"They bridge the gap—turning raw potential into polished professionals ready to contribute from day one."</p>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <h2 className="text-indigo-600 font-bold tracking-widest uppercase text-sm mb-4">Our Approach</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-8 leading-tight">Passion Meets Precision</h3>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Talented people dream of working at companies like yours. They have ideas, energy, and genuine excitement about your brand. But they lack the specific skills and experience you need.
            </p>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              We bridge that gap—turning raw potential into polished professionals who are ready to contribute from day one. This isn't just about hiring; it's about cultivation.
            </p>
            
            <ul className="space-y-4">
              {[
                "Candidates who genuinely believe in your mission",
                "Technology specific training (your exact stack)",
                "Workflows tailored to your internal processes",
                "Proven problem-solving through real-world internships"
              ].map((text, i) => (
                <li key={i} className="flex items-center gap-4 text-slate-900 font-semibold">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-600 flex items-center justify-center text-[10px] text-white">
                    <i className="fa-solid fa-check"></i>
                  </div>
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Difference;
