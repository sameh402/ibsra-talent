
import React, { useState, useEffect } from 'react';
import { generateTrainingRoadmap, TrainingRoadmap } from '../services/geminiService';

interface AIPlannerProps {
  isLoggedIn: boolean;
  onOpenAuth: () => void;
}

const AIPlanner: React.FC<AIPlannerProps> = ({ isLoggedIn, onOpenAuth }) => {
  const [role, setRole] = useState('');
  const [roadmap, setRoadmap] = useState<TrainingRoadmap | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [usageCount, setUsageCount] = useState(0);

  // Load usage count from localStorage on mount
  useEffect(() => {
    const storedCount = localStorage.getItem('ibsra_ai_usage_count');
    if (storedCount) setUsageCount(parseInt(storedCount));
  }, []);

  const handleGenerate = async () => {
    if (!isLoggedIn) { 
      onOpenAuth(); 
      return; 
    }

    if (usageCount >= 2) {
      setError("Free preview limit reached (2/2). Upgrade to Enterprise for unlimited architecting.");
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
      setError(err.message === "RATE_LIMIT_REACHED" ? "AI Busy. Try again in 60s." : "Generation failed.");
    } finally { 
      setLoading(false); 
    }
  };

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="bg-white rounded-[5rem] shadow-[0_60px_150px_-40px_rgba(79,70,229,0.25)] overflow-hidden flex flex-col lg:flex-row border border-slate-100">
          <div className="lg:w-[40%] p-16 bg-indigo-600 text-white relative overflow-hidden flex flex-col justify-center">
            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-white/10 rounded-full blur-[100px]"></div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/20 text-[11px] font-black mb-10 tracking-[0.4em] uppercase">
                <i className="fa-solid fa-sparkles text-yellow-300"></i>
                AI Architect Tool
              </div>
              <h3 className="text-5xl font-black mb-8 leading-tight tracking-tighter">Build Your DNA Training Roadmap</h3>
              <p className="text-indigo-100 mb-12 leading-relaxed text-xl font-medium opacity-80 max-w-md">
                Enter a job title or stack. Our AI will simulate a specialized 6-phase training cycle for your specific hire.
              </p>
              
              <div className="space-y-6">
                <textarea 
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  placeholder="e.g. Flutter Developer for a real-time logistics app..."
                  className="w-full h-48 p-8 rounded-3xl bg-white/10 border border-white/20 text-white placeholder-indigo-300 focus:outline-none focus:ring-4 focus:ring-white/10 resize-none transition-all text-lg font-bold shadow-inner"
                ></textarea>
                
                {error && (
                  <div className="p-5 bg-red-500/20 border border-red-500/30 rounded-2xl text-[11px] font-black flex gap-3 items-center">
                    <i className="fa-solid fa-circle-exclamation"></i>
                    <span>{error}</span>
                  </div>
                )}

                <div className="space-y-3">
                  <button 
                    onClick={handleGenerate}
                    disabled={loading || (isLoggedIn && !role.trim() && usageCount < 2)}
                    className="w-full py-6 bg-white text-indigo-600 rounded-[2rem] font-black text-lg hover:bg-indigo-50 transition shadow-2xl flex items-center justify-center gap-4 disabled:opacity-50 active:scale-95"
                  >
                    {loading ? (
                      <><i className="fa-solid fa-circle-notch animate-spin"></i> Analyzing...</>
                    ) : (
                      <>
                        <i className="fa-solid fa-wand-magic-sparkles"></i> 
                        {isLoggedIn ? (usageCount >= 2 ? 'Limit Reached' : 'Generate Strategy') : 'Sign In to Access Platform'}
                      </>
                    )}
                  </button>
                  {isLoggedIn && (
                    <p className="text-center text-[10px] uppercase font-black tracking-widest text-indigo-200">
                      Usage Limit: {usageCount}/2 Simulations Remaining
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-[60%] p-16 lg:p-24 bg-slate-50 relative min-h-[700px] flex flex-col justify-center shadow-inner">
            {roadmap ? (
              <div className="animate-fade-in w-full">
                <div className="flex items-center justify-between mb-12 pb-8 border-b border-slate-200">
                  <h4 className="text-3xl font-black text-slate-900 tracking-tighter uppercase">{roadmap.role} Architect</h4>
                  <span className="px-5 py-2 bg-green-100 text-green-700 text-xs font-black rounded-full uppercase tracking-widest">DNA-Aligned</span>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-10">
                  {roadmap.phases.map((p, i) => (
                    <div key={i} className="bg-white p-10 rounded-[3rem] shadow-xl border border-slate-100 group hover:border-indigo-500 transition-all">
                      <div className="flex items-center gap-5 mb-6">
                         <span className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center text-sm font-black shadow-lg">{p.phase}</span>
                         <h5 className="font-black text-slate-900 text-base tracking-tight">{p.title}</h5>
                      </div>
                      <p className="text-sm text-slate-500 mb-6 font-bold leading-relaxed">{p.focus}</p>
                      <div className="flex flex-wrap gap-2">
                        {p.kpis.map((kpi, j) => (
                          <span key={j} className="px-3 py-1 bg-indigo-50 text-indigo-600 text-[10px] font-black rounded-lg border border-indigo-100 uppercase tracking-tighter">{kpi}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-center">
                <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center mb-10 shadow-2xl border border-slate-100">
                  <i className="fa-solid fa-microchip text-6xl text-indigo-100"></i>
                </div>
                <h4 className="text-4xl font-black text-slate-300 uppercase tracking-tighter">Strategy Canvas</h4>
                <p className="max-w-md text-slate-300 mt-6 text-xl font-semibold leading-relaxed">
                  Design a roadmap that perfectly clones your company's workflows and technical standards.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIPlanner;
