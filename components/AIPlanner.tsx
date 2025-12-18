
import React, { useState } from 'react';
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

  const handleGenerate = async () => {
    if (!isLoggedIn) {
      onOpenAuth();
      return;
    }

    if (!role.trim()) return;
    setLoading(true);
    setError(null);
    try {
      const data = await generateTrainingRoadmap(role);
      setRoadmap(data);
      console.log("Roadmap generated (Simulation: Data not saved to database)");
    } catch (err: any) {
      if (err.message === "RATE_LIMIT_REACHED") {
        setError("Our AI is currently busy. Please wait a minute and try again.");
      } else {
        setError("Something went wrong. Please try describing the role in a different way.");
      }
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-24 bg-indigo-50">
      <div className="container mx-auto px-6">
        <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row border border-indigo-100">
          <div className="lg:w-2/5 p-12 bg-indigo-600 text-white relative overflow-hidden">
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-[9px] font-bold mb-6 tracking-widest">
                <i className="fa-solid fa-gift"></i>
                FREE FOR PARTNERS
              </div>
              <h3 className="text-3xl font-black mb-6">Create Your Custom Training Roadmap</h3>
              <p className="text-indigo-100 mb-8 leading-relaxed text-sm">
                Enter a job title or description. Our AI will simulate a specialized 6-phase training cycle for your specific hire.
              </p>
              
              <div className="space-y-4">
                <label className="block text-[10px] font-bold opacity-60 uppercase tracking-widest px-1">Job Role Description</label>
                <textarea 
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  placeholder="e.g. Senior Frontend Engineer for a High-Growth FinTech..."
                  className="w-full h-32 p-4 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-indigo-300 focus:outline-none focus:ring-2 focus:ring-white/50 resize-none transition-all text-sm"
                ></textarea>
                
                {error && (
                  <div className="p-4 bg-red-500/20 border border-red-500/30 rounded-xl text-[10px] flex gap-3 items-center">
                    <i className="fa-solid fa-circle-exclamation text-red-200"></i>
                    <span>{error}</span>
                  </div>
                )}

                <button 
                  onClick={handleGenerate}
                  disabled={loading || !role.trim()}
                  className="w-full py-4 bg-white text-indigo-600 rounded-2xl font-bold hover:bg-indigo-50 transition shadow-lg flex items-center justify-center gap-2 disabled:opacity-50 active:scale-95 text-sm"
                >
                  {loading ? (
                    <><i className="fa-solid fa-circle-notch animate-spin"></i> Designing...</>
                  ) : (
                    <><i className="fa-solid fa-wand-magic-sparkles"></i> {isLoggedIn ? 'Generate AI Roadmap' : 'Login to Generate'}</>
                  )}
                </button>
                <p className="text-[10px] text-center opacity-40 italic">
                  Powered by high-efficiency IBSRA AI Solutions.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:w-3/5 p-12 bg-slate-50 relative min-h-[500px]">
            {roadmap ? (
              <div className="animate-fade-in">
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-200">
                  <h4 className="text-xl font-black text-slate-900">{roadmap.role} Path</h4>
                  <div className="text-right">
                    <span className="px-2 py-0.5 bg-green-100 text-green-700 text-[9px] font-bold rounded-full uppercase">AI Generated</span>
                  </div>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-6">
                  {roadmap.phases.map((p, i) => (
                    <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 group">
                      <div className="flex items-center gap-3 mb-3">
                         <span className="w-6 h-6 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center text-[10px] font-bold">{p.phase}</span>
                         <h5 className="font-bold text-slate-900 text-sm">{p.title}</h5>
                      </div>
                      <p className="text-[11px] text-slate-500 mb-4 line-clamp-2">{p.focus}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {p.kpis.slice(0, 2).map((kpi, j) => (
                          <span key={j} className="px-1.5 py-0.5 bg-slate-50 text-slate-400 text-[8px] font-bold rounded flex items-center gap-1">
                            <i className="fa-solid fa-check text-[7px]"></i>
                            {kpi}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-center p-12">
                <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
                  <i className="fa-solid fa-brain text-3xl text-indigo-300"></i>
                </div>
                <h4 className="text-lg font-bold text-slate-900">{isLoggedIn ? 'Visualization Engine' : 'Unlock Potential'}</h4>
                <p className="max-w-xs text-slate-400 mt-2 text-xs">
                  {isLoggedIn 
                    ? 'Enter a role above to visualize exactly how we would train your next hire for maximum performance.' 
                    : 'Sign in to visualize exactly how we would train your next hire for maximum performance.'}
                </p>
                {!isLoggedIn && (
                   <button 
                    onClick={onOpenAuth}
                    className="mt-6 px-8 py-3 bg-indigo-600 text-white rounded-xl text-sm font-bold shadow-lg hover:bg-indigo-700 transition"
                   >
                    Sign In to Platform
                   </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIPlanner;
