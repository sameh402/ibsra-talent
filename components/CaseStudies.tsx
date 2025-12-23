
import React from 'react';

const CaseStudies: React.FC = () => {
  const cases = [
    {
      title: "FinTech Deployment Speed-up",
      problem: "A high-growth Cairo fintech faced a 6-month delay in launching their wallet due to hiring and onboarding bottlenecks.",
      solution: "We deployed a pre-trained squad of 3 Frontend & 2 Backend engineers within 4 days, specifically trained on their legacy Java stack.",
      result: "Onboarding time reduced by 85%. Project launched 3 months earlier than predicted.",
      icon: "fa-wallet",
      color: "bg-indigo-600"
    },
    {
      title: "HealthTech Scaling",
      problem: "A Riyadh-based health platform couldn't scale their patient management system because candidates lacked healthcare compliance knowledge.",
      solution: "Designed a 12-week custom pipeline for 10 developers focused on HL7/FHIR standards and HIPAA compliance protocols.",
      result: "100% hiring retention rate over 18 months. System uptime improved from 98.2% to 99.9%.",
      icon: "fa-heart-pulse",
      color: "bg-purple-600"
    },
    {
      title: "E-Commerce Logistics",
      problem: "UAE e-commerce leader struggled with seasonal talent turnover and low productivity in their logistics tech department.",
      solution: "Full Outsourcing Partnership managing a permanent rotation of 15 industry-ready specialists.",
      result: "OpEx reduced by 30% through our managed talent pool. Zero downtime during Black Friday peaks.",
      icon: "fa-truck-fast",
      color: "bg-blue-600"
    }
  ];

  return (
    <section id="case-studies" className="py-24 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-6 mb-16">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-indigo-600 font-bold tracking-widest uppercase text-[10px] mb-4">Case Studies</h2>
          <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 tracking-tight">Proven Success Reports</h3>
          <p className="text-slate-500 text-sm leading-relaxed">
            Discover how our DNA-level talent cultivation solved critical enterprise challenges across the region.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((c, i) => (
            <div key={i} className="bg-white p-10 rounded-[3rem] shadow-sm border border-slate-100 flex flex-col hover:shadow-2xl transition-all duration-500 group relative overflow-hidden">
              <div className={`w-14 h-14 ${c.color} rounded-2xl flex items-center justify-center text-white text-xl mb-8 shadow-lg group-hover:scale-110 transition duration-500`}>
                <i className={`fa-solid ${c.icon}`}></i>
              </div>
              
              <h4 className="text-xl font-black text-slate-900 mb-6 leading-tight">{c.title}</h4>
              
              <div className="space-y-6 flex-grow">
                <div>
                  <span className="text-[9px] font-black text-slate-300 uppercase tracking-widest block mb-2">The Challenge</span>
                  <p className="text-slate-600 text-sm leading-relaxed">{c.problem}</p>
                </div>
                <div>
                  <span className="text-[9px] font-black text-indigo-400 uppercase tracking-widest block mb-2">Our Solution</span>
                  <p className="text-slate-600 text-sm leading-relaxed font-medium">{c.solution}</p>
                </div>
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  <span className="text-[9px] font-black text-green-500 uppercase tracking-widest block mb-2">The Result</span>
                  <p className="text-slate-900 text-sm font-bold leading-relaxed italic">"{c.result}"</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
