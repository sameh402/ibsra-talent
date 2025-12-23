
import React, { useState, useEffect } from 'react';
import { generateTrainingRoadmap, TrainingRoadmap } from '../services/geminiService';

interface AIDashboardProps {
  onBack: () => void;
}

const AIDashboard: React.FC<AIDashboardProps> = ({ onBack }) => {
  const [role, setRole] = useState('');
  const [roadmap, setRoadmap] = useState<TrainingRoadmap | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [usageCount, setUsageCount] = useState(0);

  useEffect(() => {
    const storedCount = localStorage.getItem('ibsra_ai_usage_count');
    if (storedCount) setUsageCount(parseInt(storedCount));
  }, []);

  const handleGenerate = async () => {
    if (usageCount >= 2) {
      setError("Free preview limit reached (2/2). Contact support for enterprise access.");
      return;
    }
    if (!role.trim()) return;
    
    setLoading(true);
    setError(null);
    try {
      const data = await generateTrainingRoadmap(role);
      setRoadmap(data);
      const newCount = usageCount + 1;
      setUsageCount(newCount);
      localStorage.setItem('ibsra_ai_usage_count', newCount.toString());
    } catch (err: any) {
      setError("Failed to generate roadmap. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-40 pb-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3">
            <button onClick={onBack} className="flex items-center gap-3 text-indigo-600 font-black text-sm mb-12 hover:translate-x-[-8px] transition-transform uppercase tracking-widest">
              <i className="fa-solid fa-arrow-left"></i>
              Exit Dashboard
            </button>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight tracking-tighter uppercase">Partner <br /><span className="text-indigo-600">AI Architect</span></h2>
            <p className="text-slate-500 mb-12 text-lg font-medium leading-relaxed">Map your technical DNA to our training engine. Create specialized roadmaps in seconds.</p>
            
            <div className="space-y-8 bg-white p-10 rounded-[3rem] shadow-2xl border border-slate-100">
              <div className="space-y-4">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] px-2 block">Role Specification & Stack</label>
                <textarea 
                  placeholder="e.g. Senior Flutter Developer for a real-time logistics app with gRPC and Node.js backend..." 
                  className="w-full h-56 p-6 bg-slate-50 border border-slate-100 rounded-[2rem] focus:outline-none focus:border-indigo-500 resize-none font-bold text-slate-700 shadow-inner"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                />
              </div>
              
              {error && <div className="p-4 bg-red-50 text-red-500 text-[11px] font-black rounded-2xl border border-red-100">{error}</div>}
              
              <div className="space-y-4">
                <button 
                  onClick={handleGenerate} 
                  disabled={loading || !role.trim() || usageCount >= 2}
                  className="w-full py-6 bg-indigo-600 text-white rounded-2xl font-black text-sm shadow-xl hover:bg-indigo-700 transition active:scale-95 flex items-center justify-center gap-4 disabled:opacity-50"
                >
                  {loading ? <i className="fa-solid fa-circle-notch animate-spin text-xl"></i> : <i className="fa-solid fa-wand-magic-sparkles text-xl"></i>}
                  {usageCount >= 2 ? 'Limit Reached' : 'Generate Strategy'}
                </button>
                <div className="flex items-center justify-between px-2">
                  <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Free Preview Tier</span>
                  <span className="text-[9px] font-black text-indigo-500 uppercase tracking-widest">Usage: {usageCount}/2</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-2/3 bg-white rounded-[4rem] p-12 lg:p-20 min-h-[700px] flex flex-col justify-center border border-slate-100 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.05)] relative overflow-hidden">
             {/* Decorative Background for Canvas */}
             <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-50 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 opacity-50"></div>
             
            {roadmap ? (
              <div className="animate-fade-in w-full relative z-10">
                <div className="flex items-center justify-between mb-16 pb-10 border-b border-slate-100">
                  <div>
                    <h3 className="text-4xl font-black text-slate-900 tracking-tighter uppercase mb-2">{roadmap.role}</h3>
                    <p className="text-slate-400 font-bold uppercase text-[10px] tracking-widest">Deployment Strategy Document v1.0</p>
                  </div>
                  <button className="w-14 h-14 bg-indigo-600 text-white rounded-2xl flex items-center justify-center text-xl shadow-xl hover:scale-105 transition active:scale-95">
                    <i className="fa-solid fa-download"></i>
                  </button>
                </div>
                
                <div className="grid md:grid-cols-2 gap-10">
                  {roadmap.phases.map((p, i) => (
                    <div key={i} className="bg-slate-50 p-10 rounded-[3rem] border border-slate-100 group hover:bg-white hover:shadow-2xl hover:border-indigo-500/20 transition-all duration-700">
                      <div className="flex items-center gap-5 mb-6">
                        <span className="w-12 h-12 rounded-2xl bg-indigo-600 text-white flex items-center justify-center font-black text-sm shadow-lg group-hover:scale-110 transition-transform">{p.phase}</span>
                        <h4 className="font-black text-slate-900 text-lg leading-tight uppercase tracking-tight">{p.title}</h4>
                      </div>
                      <p className="text-slate-500 text-base mb-8 leading-relaxed font-medium">{p.focus}</p>
                      <div className="flex flex-wrap gap-2 pt-6 border-t border-slate-200/50">
                        {p.kpis.map((kpi, j) => (
                          <span key={j} className="px-4 py-1.5 bg-white text-indigo-600 text-[10px] font-black rounded-xl border border-indigo-50 uppercase tracking-tighter shadow-sm">{kpi}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="text-center relative z-10">
                <div className="w-32 h-32 bg-indigo-50 text-indigo-600 rounded-[3rem] flex items-center justify-center mx-auto mb-10 shadow-inner">
                  <i className="fa-solid fa-microchip text-5xl opacity-40"></i>
                </div>
                <h3 className="text-4xl font-black text-slate-200 uppercase tracking-tighter">Blueprint Canvas</h3>
                <p className="text-slate-300 text-xl mt-6 max-w-sm mx-auto font-medium">Input your technical requirements to generate a localized training architecture.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIDashboard;
