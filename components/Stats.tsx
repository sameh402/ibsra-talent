
import React from 'react';

const Stats: React.FC = () => {
  const items = [
    { label: "Developers Trained", value: "4,000+", icon: "fa-user-graduate" },
    { label: "Enterprise Partners", value: "7+", icon: "fa-building" },
    { label: "Hiring Success Rate", value: "98%", icon: "fa-chart-line" },
    { label: "Markets Served", value: "3", icon: "fa-earth-africa" }
  ];

  return (
    <section className="py-12 bg-white relative -mt-16 z-30 mx-6 lg:mx-20 rounded-[3rem] shadow-2xl border border-slate-50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-0 divide-x-0 lg:divide-x divide-slate-100">
          {items.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center text-center p-6 group">
              <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mb-5 text-lg group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500 shadow-sm">
                <i className={`fa-solid ${item.icon}`}></i>
              </div>
              <span className="text-2xl md:text-3xl font-black text-slate-900 mb-2 tracking-tighter">{item.value}</span>
              <span className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em]">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
