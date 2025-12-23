
import React from 'react';

interface ServiceComparisonPageProps {
  onBack: () => void;
  onSelectModel: (model: string) => void;
}

const ServiceComparisonPage: React.FC<ServiceComparisonPageProps> = ({ onBack, onSelectModel }) => {
  const models = [
    { title: "Contract Deployment", speed: "48h max", custom: "Standardized", management: "You", bestFor: "Immediate Skill Gaps", icon: 'fa-user-clock' },
    { title: "Team Deployment", speed: "4 days max", custom: "Team-Level", management: "Hybrid", bestFor: "Launching New Projects", icon: 'fa-users-gear' },
    { title: "Outsourcing", speed: "7 days max", custom: "Departmental", management: "IBSRA", bestFor: "Rapid Operational Scale", icon: 'fa-handshake-angle' },
    { title: "Custom Training", speed: "16 weeks max", custom: "DNA-Level", management: "Joint", bestFor: "Strategic Long-term Growth", icon: 'fa-dna' }
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-20 px-6 animate-fade-in">
      <div className="container mx-auto max-w-6xl">
        <button onClick={onBack} className="flex items-center gap-2 text-indigo-600 font-bold text-sm mb-12 hover:translate-x-[-4px] transition-transform">
          <i className="fa-solid fa-arrow-left"></i>
          Back to Home
        </button>

        <div className="mb-16">
          <h2 className="text-4xl font-black text-slate-900 mb-4 tracking-tighter uppercase">Build Your Team</h2>
          <p className="text-slate-500 max-w-2xl font-medium">Select the engagement model that best aligns with your organizational timeline and customization needs.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {models.map((m, i) => (
            <div key={i} className="bg-white p-8 rounded-[3.5rem] shadow-xl border border-slate-100 flex flex-col group hover:border-indigo-500 transition-all duration-500">
              <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center text-xl mb-10 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                <i className={`fa-solid ${m.icon}`}></i>
              </div>
              
              <h3 className="text-2xl font-black text-slate-900 mb-10 leading-tight">{m.title}</h3>
              
              <div className="space-y-8 flex-grow">
                <div>
                  <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest block mb-1">Availability</span>
                  <span className="text-lg font-bold text-slate-900">{m.speed}</span>
                </div>
                <div>
                  <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest block mb-1">Customization</span>
                  <span className="text-lg font-bold text-slate-900">{m.custom}</span>
                </div>
                <div>
                  <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest block mb-1">Management</span>
                  <span className="text-lg font-bold text-slate-900">{m.management}</span>
                </div>
                <div className="pt-6 border-t border-slate-50">
                  <span className="text-[10px] font-black text-indigo-400 uppercase tracking-widest block mb-1">Ideal For</span>
                  <span className="text-sm font-black text-slate-700 leading-tight">{m.bestFor}</span>
                </div>
              </div>

              <button 
                onClick={() => onSelectModel(m.title)}
                className="mt-12 w-full py-4 bg-indigo-600 text-white rounded-2xl font-black text-xs uppercase tracking-widest shadow-lg hover:bg-indigo-700 transition active:scale-95"
              >
                Select & Book
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceComparisonPage;
