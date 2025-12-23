
import React, { useState, useEffect } from 'react';

interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  client: string;
  sector: string;
  date: string;
  readTime: string;
  coverImage: string;
  impact: string;
  metrics: { label: string; value: string }[];
  content: {
    executiveSummary: string;
    theChallenge: string;
    methodology: string[];
    theOutcome: string;
    conclusion: string;
  };
}

const cases: CaseStudy[] = [
  {
    id: '1',
    title: 'Architecting Hyper-Growth: The Cairo Pay Deployment Strategy',
    subtitle: 'How DNA-synced engineering squads accelerated mobile wallet adoption across the MENA region.',
    client: 'Cairo Pay',
    sector: 'Financial Technology',
    date: 'March 14, 2024',
    readTime: '8 min read',
    coverImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200',
    impact: '85% Reduction in Onboarding Friction',
    metrics: [
      { label: 'Time-to-Hire', value: '48 Hours' },
      { label: 'Scaling Velocity', value: '+300%' },
      { label: 'Annualized Savings', value: '$240k+' }
    ],
    content: {
      executiveSummary: 'Cairo Pay faced a critical bottleneck: their ambitious roadmap was stalled by the local talent gap in high-performance Java architectures. Standard recruitment cycles were exceeding 180 days, leading to feature stagnation and market share loss.',
      theChallenge: 'The primary friction was not just finding developers, but finding individuals who understood the nuances of the regional financial compliance landscape while possessing top-tier technical proficiency. Previous attempts with generalist outsourcing agencies resulted in high churn and low codebase alignment.',
      methodology: [
        'Rigorous DNA-Matching phase targeting candidates with latent fintech passion.',
        '16-week intensive bootcamp focused on Cairo Pay\'s specific microservices architecture.',
        'Integrated compliance training (PCI-DSS & Local Regulations).',
        'Direct mentorship from IBSRA senior architects during the first 30 days of deployment.'
      ],
      theOutcome: 'Within 4 days of the project start, IBSRA deployed a pre-integrated squad of 5 engineers. By the end of Q3, Cairo Pay had successfully launched three major modules, capturing a 12% increase in active users.',
      conclusion: 'The strategic deployment demonstrated that customized talent cultivation is not just a hiring solution, but a fundamental growth lever for modern enterprises.'
    }
  },
  {
    id: '2',
    title: 'Precision in Health: MedStream’s Regulatory Scaling Report',
    subtitle: 'Scaling specialized medical software development in the KSA through compliant talent development.',
    client: 'MedStream Riyadh',
    sector: 'Health Information Technology',
    date: 'February 28, 2024',
    readTime: '12 min read',
    coverImage: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1200',
    impact: '100% Retention in Critical Dev Roles',
    metrics: [
      { label: 'Compliance Accuracy', value: '100%' },
      { label: 'System Uptime', value: '99.99%' },
      { label: 'Team Capacity', value: '+12 Devs' }
    ],
    content: {
      executiveSummary: 'MedStream Riyadh required a rapid expansion of their engineering team to meet the Ministry of Health\'s new digital transformation mandates. The challenge was finding developers with deep knowledge of HL7/FHIR protocols.',
      theChallenge: 'In the KSA market, health-tech expertise is highly centralized. MedStream found itself competing for the same 5% of specialized talent, leading to bidding wars and unsustainable recruitment costs.',
      methodology: [
        'Identification of high-potential regional CS graduates.',
        'Custom 12-week HL7/FHIR specialization track designed with MedStream CTO.',
        'Simulated project environment mirroring MedStream’s internal CI/CD pipelines.',
        'Final phase internships on non-critical production branches.'
      ],
      theOutcome: 'IBSRA successfully graduated 12 specialists who were absorbed into MedStream’s core team. These developers achieved 100% productivity within 2 weeks, compared to the industry average of 4 months.',
      conclusion: 'By shifting from a "hiring" mindset to a "cultivation" mindset, MedStream secured their long-term technical sovereignty in the Riyadh market.'
    }
  },
  {
    id: '3',
    title: 'Logistics Revolution: The LogiCore Operational Scale Study',
    subtitle: 'Managing a permanent rotation of 15 industry-ready specialists to power UAE logistics.',
    client: 'LogiCore',
    sector: 'Logistics & Supply Chain',
    date: 'January 15, 2024',
    readTime: '10 min read',
    coverImage: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=90&w=1200',
    impact: '30% Reduction in OpEx',
    metrics: [
      { label: 'Deployment Speed', value: '4 Days' },
      { label: 'Team Size', value: '15 Devs' },
      { label: 'Uptime', value: '99.9%' }
    ],
    content: {
      executiveSummary: 'LogiCore struggled with seasonal turnover and productivity dips. They needed a partner who could manage the talent lifecycle end-to-end without slowing down their aggressive rollout in the UAE.',
      theChallenge: 'Seasonal demand required a team that could flex in size without losing institutional knowledge or code quality standards.',
      methodology: [
        'Managed rotation of pre-trained developers.',
        'Institutional knowledge base shared through IBSRA training hubs.',
        'Agile scaling on-demand for peak periods like Black Friday.'
      ],
      theOutcome: 'Reduced OpEx by 30% while maintaining 100% feature delivery accuracy during peak demand.',
      conclusion: 'Managed talent deployment is the key to decoupling overhead from technical output.'
    }
  }
];

// Extend cases to 10 for dummy selection support from Hero
const ALL_CASES = [
  ...cases,
  ...Array.from({ length: 7 }, (_, i) => ({
    ...cases[0],
    id: (i + 4).toString(),
    client: `Partner ${i + 4}`,
    title: `Scaling Study for Partner ${i + 4}: Engineering Excellence`,
  }))
];

interface CaseStudiesPageProps {
  initialCaseId?: string | null;
  onBack: () => void;
}

const CaseStudiesPage: React.FC<CaseStudiesPageProps> = ({ initialCaseId, onBack }) => {
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);

  useEffect(() => {
    if (initialCaseId) {
      const found = ALL_CASES.find(c => c.id === initialCaseId);
      if (found) setSelectedCase(found);
    }
  }, [initialCaseId]);

  if (selectedCase) {
    return (
      <div className="min-h-screen bg-white animate-fade-in pb-32">
        <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-slate-100 py-4">
          <div className="container mx-auto px-6 flex items-center justify-between">
            <button 
              onClick={() => setSelectedCase(null)}
              className="flex items-center gap-2 text-slate-400 hover:text-indigo-600 font-bold text-xs transition uppercase tracking-widest"
            >
              <i className="fa-solid fa-chevron-left"></i> Back to Reports
            </button>
            <div className="hidden md:flex items-center gap-4">
               <span className="text-[10px] font-black text-indigo-600 uppercase tracking-widest bg-indigo-50 px-3 py-1 rounded-full">Report: {selectedCase.client}</span>
            </div>
            <button className="px-6 py-2 bg-indigo-600 text-white rounded-full text-[10px] font-black uppercase shadow-lg active:scale-95 transition">Download PDF</button>
          </div>
        </nav>

        <header className="pt-40 pb-20 border-b border-slate-50">
          <div className="container mx-auto px-6 max-w-4xl text-center">
            <div className="flex items-center justify-center gap-4 mb-8">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{selectedCase.date}</span>
              <span className="w-1 h-1 bg-slate-200 rounded-full"></span>
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{selectedCase.readTime}</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.1] mb-8 tracking-tight">
              {selectedCase.title}
            </h1>
            <p className="text-xl text-slate-500 leading-relaxed max-w-2xl mx-auto font-medium">
              {selectedCase.subtitle}
            </p>
          </div>
        </header>

        <div className="container mx-auto px-6 max-w-6xl -mt-10 mb-20">
          <img 
            src={selectedCase.coverImage} 
            alt={selectedCase.title} 
            className="w-full aspect-[21/9] object-cover rounded-[3rem] shadow-2xl border border-white"
          />
        </div>

        <div className="container mx-auto px-6 max-w-7xl grid lg:grid-cols-12 gap-16">
          <aside className="lg:col-span-3 space-y-12 order-2 lg:order-1">
             <div className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100">
               <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-8">Key Performance Metrics</h4>
               <div className="space-y-8">
                 {selectedCase.metrics.map(m => (
                   <div key={m.label}>
                     <span className="block text-2xl font-black text-indigo-600 leading-none mb-1">{m.value}</span>
                     <span className="block text-[9px] font-black text-slate-400 uppercase tracking-widest">{m.label}</span>
                   </div>
                 ))}
               </div>
             </div>
          </aside>

          <article className="lg:col-span-9 max-w-3xl order-1 lg:order-2 space-y-12">
            <section>
              <h2 className="text-2xl font-black text-slate-900 mb-6 tracking-tight uppercase">Executive Summary</h2>
              <p className="text-lg text-slate-600 leading-relaxed">{selectedCase.content.executiveSummary}</p>
            </section>
            <section>
              <h2 className="text-2xl font-black text-slate-900 mb-6 tracking-tight uppercase">The Outcome</h2>
              <p className="text-lg text-slate-600 leading-relaxed">{selectedCase.content.theOutcome}</p>
            </section>
          </article>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-20 px-6 animate-fade-in font-sans">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div>
            <button 
              onClick={onBack} 
              className="flex items-center gap-2 text-indigo-600 font-bold text-[10px] mb-6 hover:translate-x-[-4px] transition-transform uppercase tracking-widest"
            >
              <i className="fa-solid fa-arrow-left"></i>
              Partner Overview
            </button>
            <h2 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tighter uppercase leading-[0.9]">
              Enterprise <br />
              <span className="text-indigo-600">Intelligence</span> Hub
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-12">
          {ALL_CASES.map(c => (
            <div 
              key={c.id} 
              onClick={() => setSelectedCase(c)}
              className="group cursor-pointer"
            >
              <div className="aspect-[16/10] overflow-hidden rounded-[3rem] mb-8 shadow-lg border border-white">
                <img src={c.coverImage} className="w-full h-full object-cover transition duration-700 group-hover:scale-105" alt={c.title} />
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-indigo-600 transition tracking-tight">
                {c.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseStudiesPage;
