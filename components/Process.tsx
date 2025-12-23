
import React from 'react';

interface ProcessProps {
  onCompareClick: () => void;
  onConsultClick: () => void;
}

const Process: React.FC<ProcessProps> = ({ onCompareClick, onConsultClick }) => {
  const services = [
    {
      id: "SERVICE 1",
      title: "Contract Talent Deployment",
      subtitle: "Immediate Access to Pre-Trained Professionals",
      desc: "Rent industry-ready specialists on a flexible contract basis. Our candidates are already trained, vetted, and ready to contribute from day one.",
      timeline: "48 hours max",
      icon: "fa-user-clock",
      highlightColor: "bg-blue-600"
    },
    {
      id: "SERVICE 2",
      title: "Ready-Made Team Deployment",
      subtitle: "Deploy Complete Teams in Days",
      desc: "Hire pre-built teams with complementary skills already trained to collaborate effectively. Each team member is vetted and cross-trained.",
      timeline: "4 business days max",
      icon: "fa-users-gear",
      highlightColor: "bg-purple-600"
    },
    {
      id: "SERVICE 3",
      title: "Full Outsourcing Partnership",
      subtitle: "Your Extended Team, Fully Managed",
      desc: "We become your dedicated talent partner—handling recruitment, training, management, and delivery based on your objectives.",
      timeline: "7 days max",
      icon: "fa-handshake-angle",
      highlightColor: "bg-blue-500"
    },
    {
      id: "SERVICE 4",
      title: "Custom Training Pipeline",
      subtitle: "Build Your Dream Team with Precision",
      desc: "Transform promising candidates into company-specific experts. We train them to your exact tech stack, workflows, and culture.",
      timeline: "16 weeks max",
      icon: "fa-graduation-cap",
      highlightColor: "bg-orange-600"
    }
  ];

  return (
    <section id="process" className="py-32 bg-[#05041a] text-white rounded-[4rem] shadow-[0_50px_150px_rgba(0,0,0,0.6)] mx-6 md:mx-12">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-5xl mx-auto mb-20">
          <h2 className="text-indigo-400 font-bold tracking-widest uppercase text-[10px] mb-4">
            FLEXIBLE TALENT SOLUTIONS
          </h2>
          <h3 className="text-3xl md:text-5xl lg:text-6xl font-black mb-8 tracking-tight whitespace-nowrap overflow-hidden text-ellipsis">
            Every Business Need, One Partner
          </h3>
          <p className="text-slate-400 text-lg leading-relaxed max-w-3xl mx-auto">
            Whether you need immediate deployment or long-term team building, we deliver pre-trained, industry-ready professionals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, i) => (
            <div key={i} className="bg-white/5 p-10 rounded-[2.5rem] border border-white/5 hover:border-indigo-500/40 transition-all group flex flex-col h-full shadow-2xl">
              <div className={`w-14 h-14 ${service.highlightColor} rounded-2xl flex items-center justify-center text-2xl mb-8 shadow-xl transition duration-500 group-hover:scale-110`}>
                <i className={`fa-solid ${service.icon}`}></i>
              </div>
              
              <h4 className="text-xl font-bold mb-3 group-hover:text-indigo-400 transition-colors">{service.title}</h4>
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-8">{service.subtitle}</p>
              
              <div className="mb-8 inline-flex items-center gap-3 px-5 py-2.5 bg-white/5 border border-white/10 rounded-full w-fit">
                <i className="fa-solid fa-bolt text-yellow-500 text-xs"></i>
                <span className="text-xs font-bold text-white/80">{service.timeline}</span>
              </div>
              
              <p className="text-slate-400 text-sm leading-relaxed mb-12 flex-grow font-medium">{service.desc}</p>
              
              <button 
                onClick={onConsultClick}
                className="w-full py-4 bg-white/5 hover:bg-white/10 text-white rounded-2xl text-xs font-bold border border-white/10 transition-colors shadow-lg"
              >
                Learn More
              </button>
            </div>
          ))}
        </div>
        
        <div className="mt-20 text-center bg-white/5 p-16 rounded-[3.5rem] border border-white/5 shadow-3xl">
          <h4 className="text-2xl font-black mb-6">Need help deciding?</h4>
          <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto font-medium">Explore the detailed differences between our engagement models with a strategic consultant.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button 
              onClick={onConsultClick} 
              className="px-10 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full font-black text-sm transition shadow-[0_15px_30px_rgba(79,70,229,0.3)] active:scale-95"
            >
              Schedule a Consultation
            </button>
            <button 
              onClick={onCompareClick} 
              className="px-10 py-4 border border-white/20 text-white hover:bg-white/10 rounded-full font-black text-sm transition"
            >
              Compare All Services
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
