
import React from 'react';

const Stats: React.FC = () => {
  const items = [
    { label: "DEVELOPERS TRAINED", value: "4,000+", icon: "fa-graduation-cap" },
    { label: "ENTERPRISE PARTNERS", value: "7+", icon: "fa-building" },
    { label: "HIRING SUCCESS RATE", value: "98%", icon: "fa-chart-line" },
    { label: "MARKETS SERVED", value: "3", icon: "fa-earth-americas" }
  ];

  return (
    <div className="container mx-auto px-6 md:px-12 relative z-30 -mt-24 mb-24 md:mb-32">
      <div className="bg-white rounded-[2.5rem] md:rounded-[3.5rem] shadow-[0_60px_150px_-30px_rgba(0,0,0,0.3),0_30px_60px_-15px_rgba(0,0,0,0.2)] border border-slate-50 py-12 md:py-20 px-8 md:px-0">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 lg:gap-y-0 lg:divide-x divide-slate-100">
          {items.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center text-center px-4 md:px-8 group">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-indigo-50 text-indigo-600 rounded-[1.5rem] flex items-center justify-center mb-6 md:mb-10 text-xl md:text-2xl shadow-sm transition-transform duration-500 group-hover:scale-110">
                <i className={`fa-solid ${item.icon}`}></i>
              </div>
              <span className="text-3xl md:text-[3rem] font-black text-slate-900 mb-3 tracking-tighter leading-none">
                {item.value}
              </span>
              <span className="text-[10px] md:text-[11px] font-black text-slate-400 uppercase tracking-[0.3em] leading-tight max-w-[160px]">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;
