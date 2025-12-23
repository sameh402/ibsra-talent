
import React, { useState } from 'react';

interface ConsultationPageProps {
  model?: string | null;
  onBack: () => void;
}

const ConsultationPage: React.FC<ConsultationPageProps> = ({ model, onBack }) => {
  const [step, setStep] = useState(1); 
  const [loading, setLoading] = useState(false);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    time: '',
    tool: 'Google Meet',
    requirements: '',
    techStack: '',
    teamSize: '1-3 members'
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep(3); 
    }, 1500);
  };

  const nextDates = Array.from({ length: 7 }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() + i + 1);
    return d.toISOString().split('T')[0];
  });

  // 12 slots for a full circular dial
  const timeSlots = [
    { label: "09:00", angle: 0 },
    { label: "10:00", angle: 30 },
    { label: "11:00", angle: 60 },
    { label: "12:00", angle: 90 },
    { label: "13:00", angle: 120 },
    { label: "14:00", angle: 150 },
    { label: "15:00", angle: 180 },
    { label: "16:00", angle: 210 },
    { label: "17:00", angle: 240 },
    { label: "18:00", angle: 270 },
    { label: "19:00", angle: 300 },
    { label: "20:00", angle: 330 },
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-52 pb-40 px-12 animate-fade-in overflow-x-hidden">
      <div className="container mx-auto max-w-7xl">
        <button onClick={onBack} className="flex items-center gap-5 text-indigo-600 font-black text-2xl mb-24 hover:translate-x-[-12px] transition-transform uppercase tracking-[0.3em]">
          <i className="fa-solid fa-arrow-left"></i>
          Exit Session
        </button>

        <div className="bg-white rounded-[6rem] shadow-[0_120px_240px_-60px_rgba(0,0,0,0.15)] border border-slate-100 overflow-hidden flex flex-col lg:flex-row min-h-[1000px]">
          {/* Progress Sidebar */}
          <div className="lg:w-[32%] bg-slate-900 p-20 text-white flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-[180px]"></div>
            <div className="relative z-10">
              <span className="text-[14px] font-black text-indigo-400 uppercase tracking-[0.5em] block mb-12">Protocol Engagement</span>
              <h2 className="text-6xl font-black mb-16 leading-[0.95] tracking-tighter">Precision <br /> Deployment</h2>
              
              <div className="space-y-20">
                {[
                  { id: 1, label: 'Temporal Alignment', icon: 'fa-clock' },
                  { id: 2, label: 'DNA Blueprinting', icon: 'fa-dna' },
                  { id: 3, label: 'Lock & Confirm', icon: 'fa-shield-check' }
                ].map((s) => (
                  <div key={s.id} className="flex items-center gap-10 group">
                    <div className={`w-20 h-20 rounded-[2.5rem] flex items-center justify-center text-3xl transition-all duration-1000 border-2 ${step >= s.id ? 'bg-indigo-600 border-indigo-600 text-white shadow-[0_0_50px_rgba(79,70,229,0.4)]' : 'bg-transparent border-slate-700 text-slate-700'}`}>
                      <i className={`fa-solid ${s.icon}`}></i>
                    </div>
                    <div className="flex flex-col">
                      <span className={`text-[12px] font-black uppercase tracking-[0.4em] mb-2 ${step >= s.id ? 'text-indigo-400' : 'text-slate-700'}`}>Step 0{s.id}</span>
                      <span className={`text-2xl font-bold ${step === s.id ? 'text-white' : 'text-slate-600'}`}>{s.label}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Main Workspace */}
          <div className="lg:w-[68%] p-20 lg:p-32 bg-white flex flex-col">
            {step === 1 && (
              <div className="animate-fade-in flex-grow flex flex-col space-y-28">
                <div>
                  <h3 className="text-6xl font-black text-slate-900 mb-8 tracking-tighter uppercase">Pick Your Slot</h3>
                  <p className="text-slate-400 text-2xl font-medium">Align your organization's timeline with our specialists.</p>
                </div>

                <div className="space-y-12">
                  <label className="text-[15px] font-black text-slate-400 uppercase tracking-[0.5em] px-10">Select Deployment Date</label>
                  <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
                    {nextDates.map(date => {
                      const dayName = new Date(date).toLocaleDateString('en-US', { weekday: 'short' });
                      const dayNum = new Date(date).toLocaleDateString('en-US', { day: 'numeric' });
                      return (
                        <button 
                          key={date}
                          onClick={() => setSelectedDate(date)}
                          className={`flex flex-col items-center justify-center w-36 h-36 rounded-[3.5rem] border-4 transition-all duration-700 ${selectedDate === date ? 'bg-indigo-600 border-indigo-600 text-white shadow-2xl scale-110' : 'bg-slate-50 border-slate-100 text-slate-600 hover:border-indigo-300'}`}
                        >
                          <span className="text-[14px] font-black uppercase mb-1">{dayName}</span>
                          <span className="text-4xl font-black">{dayNum}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {selectedDate && (
                  <div className="space-y-20 animate-fade-in flex flex-col items-center lg:items-start">
                    <label className="text-[15px] font-black text-indigo-500 uppercase tracking-[0.6em] px-10">Analogue Precision Dial</label>
                    <div className="relative w-[450px] h-[450px] rounded-full border-[12px] border-slate-50 flex items-center justify-center shadow-inner">
                      <div className="w-6 h-6 bg-indigo-600 rounded-full z-20 shadow-xl border-4 border-white"></div>
                      
                      {timeSlots.map((slot) => (
                        <div 
                          key={slot.label} 
                          className="absolute"
                          style={{
                            transform: `rotate(${slot.angle}deg) translateY(-180px) rotate(-${slot.angle}deg)`
                          }}
                        >
                          <button 
                            onClick={() => setFormData({...formData, time: slot.label})}
                            className={`w-24 h-24 rounded-full border-2 font-black text-lg transition-all duration-700 shadow-sm ${formData.time === slot.label ? 'bg-indigo-600 border-indigo-600 text-white scale-125 shadow-2xl' : 'bg-white border-slate-100 text-slate-400 hover:bg-slate-50 hover:scale-110'}`}
                          >
                            {slot.label}
                          </button>
                        </div>
                      ))}

                      <div 
                        className="absolute w-1.5 h-[160px] bg-indigo-600 bottom-1/2 origin-bottom transition-all duration-1000 shadow-lg rounded-full"
                        style={{
                          transform: `rotate(${timeSlots.find(s => s.label === formData.time)?.angle || 0}deg)`
                        }}
                      ></div>
                    </div>
                  </div>
                )}

                <div className="space-y-12">
                  <label className="text-[15px] font-black text-slate-400 uppercase tracking-[0.5em] px-10">Select Platform</label>
                  <div className="grid grid-cols-2 xl:grid-cols-4 gap-10">
                    {[
                      { name: 'Google Meet', icon: 'fa-video' },
                      { name: 'Microsoft Teams', icon: 'fa-users' },
                      { name: 'Zoom Meeting', icon: 'fa-video-plus' },
                      { name: 'Enterprise Dial', icon: 'fa-phone-office' }
                    ].map(tool => (
                      <button 
                        key={tool.name}
                        onClick={() => setFormData({...formData, tool: tool.name})}
                        className={`p-12 rounded-[4rem] border-4 flex flex-col items-center justify-center gap-6 transition-all duration-700 min-h-[180px] w-full ${formData.tool === tool.name ? 'bg-indigo-50 border-indigo-500 text-indigo-600 shadow-xl' : 'bg-slate-50 border-slate-100 text-slate-400 hover:bg-slate-100'}`}
                      >
                        <i className={`fa-solid ${tool.icon} text-5xl`}></i>
                        <span className="text-sm font-black uppercase tracking-[0.2em] text-center leading-tight whitespace-nowrap">{tool.name}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <button 
                  onClick={() => setStep(2)}
                  disabled={!selectedDate || !formData.time}
                  className="w-full py-12 bg-indigo-600 text-white rounded-[4rem] font-black text-2xl shadow-[0_50px_100px_-25px_rgba(79,70,229,0.5)] hover:bg-indigo-500 transition-all active:scale-[0.98] disabled:opacity-10"
                >
                  Confirm Window & Blueprint
                </button>
              </div>
            )}

            {step === 2 && (
              <div className="animate-fade-in space-y-24">
                <div>
                  <h3 className="text-6xl font-black text-slate-900 mb-8 tracking-tighter uppercase">Infrastructure DNA</h3>
                  <p className="text-slate-400 text-2xl font-medium">Map your technical ecosystem for precision talent cloning.</p>
                </div>

                <div className="space-y-16">
                  <div className="space-y-8">
                    <label className="text-[15px] font-black text-slate-400 uppercase tracking-[0.5em] px-10">Current Infrastructure Stack</label>
                    <input type="text" placeholder="e.g. AWS, Kubernetes, Node.js, PostgreSQL" className="w-full p-12 rounded-[3.5rem] bg-slate-50 border-4 border-slate-100 text-2xl font-bold focus:border-indigo-500 focus:outline-none transition-all shadow-inner" value={formData.techStack} onChange={e => setFormData({...formData, techStack: e.target.value})} />
                  </div>
                  
                  <div className="space-y-8">
                    <label className="text-[15px] font-black text-slate-400 uppercase tracking-[0.5em] px-10">Strategic Objectives</label>
                    <textarea placeholder="Outline your mission-critical talent requirements..." className="w-full h-80 p-12 rounded-[5rem] bg-slate-50 border-4 border-slate-100 text-2xl font-bold focus:border-indigo-500 focus:outline-none resize-none transition-all shadow-inner" value={formData.requirements} onChange={e => setFormData({...formData, requirements: e.target.value})}></textarea>
                  </div>
                </div>

                <button 
                  onClick={handleSubmit}
                  disabled={loading}
                  className="w-full py-12 bg-indigo-600 text-white rounded-[4rem] font-black text-2xl shadow-[0_50px_100px_-25px_rgba(79,70,229,0.5)] active:scale-[0.98] flex items-center justify-center gap-8 transition-all"
                >
                  {loading ? <i className="fa-solid fa-spinner-third animate-spin"></i> : 'Finalize Session Lockdown'}
                </button>
              </div>
            )}

            {step === 3 && (
              <div className="h-full flex flex-col items-center justify-center text-center animate-fade-in py-40">
                <div className="w-48 h-48 bg-green-50 text-green-500 rounded-full flex items-center justify-center text-7xl mb-20 shadow-inner animate-bounce-slow">
                  <i className="fa-solid fa-calendar-check"></i>
                </div>
                <h3 className="text-[clamp(3rem,6vw,7rem)] font-black text-slate-900 mb-10 tracking-tighter uppercase leading-none">Deployment <br /> Synchronized</h3>
                <p className="text-slate-400 text-3xl leading-relaxed max-w-3xl mx-auto mb-24 font-medium">
                  Your session is locked for <strong>{selectedDate}</strong> at <strong>{formData.time}</strong>. Redirecting to your strategic partner hub.
                </p>
                <button onClick={onBack} className="px-24 py-12 bg-indigo-600 text-white rounded-[4rem] font-black text-2xl shadow-2xl active:scale-95 transition-all">Enter Partner Portal</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultationPage;
