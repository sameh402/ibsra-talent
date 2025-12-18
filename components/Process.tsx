
import React, { useState } from 'react';

const Process: React.FC = () => {
  const [showComparison, setShowComparison] = useState(false);

  const services = [
    {
      id: "SERVICE 1",
      title: "Contract Talent Deployment",
      subtitle: "Immediate Access to Pre-Trained Professionals",
      desc: "Rent industry-ready specialists on a flexible contract basis. Our candidates are already trained, vetted, and ready to contribute from day one. Convert to full-time hire whenever you're ready.",
      idealFor: [
        "Covering immediate skill gaps",
        "Project-based work with defined timelines",
        "Testing talent before permanent commitment"
      ],
      timeline: "48 hours max",
      icon: "fa-user-clock",
      highlightColor: "bg-indigo-600"
    },
    {
      id: "SERVICE 2",
      title: "Ready-Made Team Deployment",
      subtitle: "Deploy Complete Teams in Days, Not Months",
      desc: "Hire pre-built teams with complementary skills already trained to collaborate effectively. Each team member is vetted, cross-trained, and ready to execute together.",
      idealFor: [
        "Launching new projects quickly",
        "Scaling departments rapidly",
        "Replacing underperforming teams"
      ],
      timeline: "4 business days max",
      icon: "fa-users-gear",
      highlightColor: "bg-purple-600"
    },
    {
      id: "SERVICE 3",
      title: "Full Outsourcing Partnership",
      subtitle: "Your Extended Team, Fully Managed",
      desc: "We become your dedicated talent partner—handling recruitment, training, management, and delivery. You define the objectives; we build and manage the team that executes them.",
      idealFor: [
        "Companies scaling without HR overhead",
        "Long-term projects requiring dedicated resources",
        "Businesses seeking operational efficiency"
      ],
      timeline: "7 days max",
      icon: "fa-handshake-angle",
      highlightColor: "bg-blue-600"
    },
    {
      id: "SERVICE 4",
      title: "Custom Training Pipeline",
      subtitle: "Build Your Dream Team with Precision",
      desc: "Transform promising candidates—whether high-potential professionals or passionate students who love your brand—into company-specific experts. We train them to your exact tech stack, workflows, and culture.",
      idealFor: [
        "Strategic long-term hiring with full customization",
        "Converting promising candidates you've identified",
        "Developing passionate beginners into experts",
        "Building teams with your exact DNA"
      ],
      timeline: "16 weeks max",
      icon: "fa-graduation-cap",
      highlightColor: "bg-orange-600"
    }
  ];

  return (
    <section id="process" className="py-24 bg-slate-900 text-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white to-transparent opacity-5 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h2 className="text-indigo-400 font-bold tracking-widest uppercase text-xs mb-4">Flexible Talent Solutions</h2>
          <h3 className="text-4xl md:text-5xl font-black mb-6">Every Business Need, One Partner</h3>
          <p className="text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto">
            Whether you need immediate deployment or long-term team building, we deliver pre-trained, industry-ready professionals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service, i) => (
            <div key={i} className="bg-slate-800/30 p-10 rounded-[2.5rem] border border-white/5 hover:border-indigo-500/50 transition-all duration-500 group flex flex-col h-full relative overflow-hidden">
              <div className={`absolute top-0 left-0 w-1.5 h-full ${service.highlightColor}`}></div>
              
              <div className="flex items-start justify-between mb-8">
                <div className={`w-14 h-14 ${service.highlightColor} rounded-2xl flex items-center justify-center text-xl shadow-lg group-hover:scale-110 transition duration-500`}>
                  <i className={`fa-solid ${service.icon}`}></i>
                </div>
                <div className="text-right">
                  <span className="text-indigo-400 font-bold text-[10px] block mb-1 uppercase tracking-widest">{service.id}</span>
                </div>
              </div>

              <h4 className="text-2xl font-bold mb-2 group-hover:text-indigo-400 transition">{service.title}</h4>
              <p className="text-indigo-200/40 font-medium mb-8 text-xs italic">{service.subtitle}</p>
              
              <div className="mb-8 inline-flex items-center gap-3 px-4 py-3 bg-white/5 border border-white/10 rounded-2xl">
                <i className="fa-solid fa-bolt-lightning text-yellow-400 text-sm"></i>
                <div className="flex flex-col">
                  <span className="text-[9px] uppercase font-bold text-white/30 leading-none mb-1.5">Availability</span>
                  <span className="text-sm font-bold text-white leading-none">{service.timeline}</span>
                </div>
              </div>

              <p className="text-slate-400 leading-relaxed mb-8 flex-grow text-sm">
                {service.desc}
              </p>

              <div className="bg-slate-900/50 p-6 rounded-3xl border border-white/5">
                <span className="block text-[9px] font-bold text-white/30 uppercase tracking-[0.2em] mb-4">Ideal For:</span>
                <ul className="space-y-3">
                  {service.idealFor.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs text-slate-300">
                      <i className="fa-solid fa-circle-check text-indigo-500 mt-0.5"></i>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 text-center bg-white/5 p-12 rounded-[3rem] border border-white/10 glass">
          <h4 className="text-2xl font-bold mb-4">Need help deciding?</h4>
          <p className="text-slate-400 mb-10 text-base">Explore the detailed differences between our engagement models.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="px-10 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full font-bold text-sm transition shadow-xl shadow-indigo-500/30 active:scale-95">
              Schedule a Consultation
            </button>
            <button 
              onClick={() => setShowComparison(true)}
              className="px-10 py-4 border border-white/20 text-white hover:bg-white/10 rounded-full font-bold text-sm transition active:scale-95"
            >
              Compare All Services
            </button>
          </div>
        </div>
      </div>

      {/* Comparison Modal Overlay */}
      {showComparison && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-slate-950/90 backdrop-blur-xl animate-fade-in">
          <div className="bg-white text-slate-900 rounded-[3rem] w-full max-w-5xl max-h-[90vh] overflow-y-auto relative shadow-2xl">
            <button 
              onClick={() => setShowComparison(false)}
              className="absolute top-8 right-8 w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 hover:text-slate-900 transition"
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
            
            <div className="p-12">
              <h3 className="text-3xl font-black mb-2">Service Comparison</h3>
              <p className="text-slate-500 mb-12">Choose the engagement model that aligns with your timeline and customization needs.</p>
              
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-slate-100">
                      <th className="py-6 font-bold text-slate-400 uppercase text-[10px] tracking-widest">Feature</th>
                      {services.map(s => (
                        <th key={s.id} className="py-6 px-4 font-black text-indigo-600 text-sm">{s.title}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr className="border-b border-slate-50">
                      <td className="py-6 font-bold text-slate-900">Availability</td>
                      <td className="py-6 px-4 text-slate-500">48h max</td>
                      <td className="py-6 px-4 text-slate-500">4 days max</td>
                      <td className="py-6 px-4 text-slate-500">7 days max</td>
                      <td className="py-6 px-4 text-indigo-600 font-bold">16 weeks max</td>
                    </tr>
                    <tr className="border-b border-slate-50">
                      <td className="py-6 font-bold text-slate-900">Customization</td>
                      <td className="py-6 px-4 text-slate-500">Standardized</td>
                      <td className="py-6 px-4 text-slate-500">Team-Level</td>
                      <td className="py-6 px-4 text-slate-500">Departmental</td>
                      <td className="py-6 px-4 text-green-600 font-bold">Full DNA-Level</td>
                    </tr>
                    <tr className="border-b border-slate-50">
                      <td className="py-6 font-bold text-slate-900">Management</td>
                      <td className="py-6 px-4 text-slate-500">You Manage</td>
                      <td className="py-6 px-4 text-slate-500">Hybrid</td>
                      <td className="py-6 px-4 text-slate-500">IBSRA Manages</td>
                      <td className="py-6 px-4 text-slate-500">You/IBSRA Joint</td>
                    </tr>
                    <tr>
                      <td className="py-6 font-bold text-slate-900">Best For</td>
                      <td className="py-6 px-4 text-slate-300">Quick Gaps</td>
                      <td className="py-6 px-4 text-slate-300">New Projects</td>
                      <td className="py-6 px-4 text-slate-300">Scale-up</td>
                      <td className="py-6 px-4 text-slate-300">Dream Teams</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Process;
