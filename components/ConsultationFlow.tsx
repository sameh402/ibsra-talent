
import React, { useState } from 'react';

interface ConsultationFlowProps {
  onClose: () => void;
}

const ConsultationFlow: React.FC<ConsultationFlowProps> = ({ onClose }) => {
  const [step, setStep] = useState(1); // 1: Info, 2: Schedule, 3: Success
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    linkedin: '',
    company: '',
    website: '',
    phone: '',
    date: '',
    time: '',
    timezone: 'GMT+3 (Riyadh)',
    tool: 'Google Meet'
  });

  const handleStep1Submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulation: Lead data would normally be saved here
    setTimeout(() => {
      console.log("Lead captured:", formData);
      setLoading(false);
      setStep(2);
    }, 800);
  };

  const handleStep2Submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulation: Consultation data would normally be saved here
    setTimeout(() => {
      console.log("Consultation scheduled:", formData);
      setLoading(false);
      setStep(3);
      setTimeout(() => {
        onClose();
        document.getElementById('business-impact')?.scrollIntoView({ behavior: 'smooth' });
      }, 3000);
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-6 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-[2.5rem] w-full max-w-xl overflow-hidden relative shadow-2xl flex flex-col md:flex-row min-h-[500px]">
        {/* Left sidebar - Brand */}
        <div className="md:w-1/3 bg-indigo-600 p-8 text-white flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="relative z-10">
            <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center mb-6 font-bold">I</div>
            <h4 className="text-xl font-black mb-2 leading-tight">Expert Strategy Session</h4>
            <p className="text-indigo-100 text-xs opacity-70">Design a deployment strategy that works for your unique DNA.</p>
          </div>
          
          <div className="relative z-10 space-y-3">
             <div className="flex items-center gap-2 text-[10px]">
               <div className={`w-2 h-2 rounded-full ${step >= 1 ? 'bg-white' : 'bg-white/30'}`}></div>
               <span className={step === 1 ? 'font-bold' : 'opacity-40'}>Partner Info</span>
             </div>
             <div className="flex items-center gap-2 text-[10px]">
               <div className={`w-2 h-2 rounded-full ${step >= 2 ? 'bg-white' : 'bg-white/30'}`}></div>
               <span className={step === 2 ? 'font-bold' : 'opacity-40'}>Scheduling</span>
             </div>
             <div className="flex items-center gap-2 text-[10px]">
               <div className={`w-2 h-2 rounded-full ${step >= 3 ? 'bg-white' : 'bg-white/30'}`}></div>
               <span className={step === 3 ? 'font-bold' : 'opacity-40'}>Confirmed</span>
             </div>
          </div>
        </div>

        {/* Right side - Forms */}
        <div className="md:w-2/3 p-10 bg-white relative">
          <button onClick={onClose} className="absolute top-6 right-6 text-slate-300 hover:text-slate-900 transition">
            <i className="fa-solid fa-xmark"></i>
          </button>

          {step === 1 && (
            <div className="animate-fade-in">
              <h5 className="text-xl font-black text-slate-900 mb-6">Let's get started</h5>
              <form onSubmit={handleStep1Submit} className="grid grid-cols-1 gap-4">
                <input 
                  type="text" placeholder="Full Name" required 
                  className="p-3 bg-slate-50 border border-slate-100 rounded-xl text-sm focus:border-indigo-500 focus:outline-none"
                  value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})}
                />
                <input 
                  type="email" placeholder="Business Email (e.g. name@company.com)" required 
                  className="p-3 bg-slate-50 border border-slate-100 rounded-xl text-sm focus:border-indigo-500 focus:outline-none"
                  value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})}
                />
                <input 
                  type="url" placeholder="LinkedIn Profile" required 
                  className="p-3 bg-slate-50 border border-slate-100 rounded-xl text-sm focus:border-indigo-500 focus:outline-none"
                  value={formData.linkedin} onChange={e => setFormData({...formData, linkedin: e.target.value})}
                />
                <div className="grid grid-cols-2 gap-4">
                  <input 
                    type="text" placeholder="Company Name" required 
                    className="p-3 bg-slate-50 border border-slate-100 rounded-xl text-sm focus:border-indigo-500 focus:outline-none"
                    value={formData.company} onChange={e => setFormData({...formData, company: e.target.value})}
                  />
                  <input 
                    type="url" placeholder="Website" required 
                    className="p-3 bg-slate-50 border border-slate-100 rounded-xl text-sm focus:border-indigo-500 focus:outline-none"
                    value={formData.website} onChange={e => setFormData({...formData, website: e.target.value})}
                  />
                </div>
                <input 
                  type="tel" placeholder="Phone Number" required 
                  className="p-3 bg-slate-50 border border-slate-100 rounded-xl text-sm focus:border-indigo-500 focus:outline-none"
                  value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})}
                />
                <button type="submit" disabled={loading} className="mt-4 py-4 bg-indigo-600 text-white rounded-xl font-bold text-sm shadow-xl hover:bg-indigo-700 transition active:scale-95 flex items-center justify-center gap-2">
                  {loading && <i className="fa-solid fa-circle-notch animate-spin"></i>}
                  Next: Pick a Time
                </button>
              </form>
            </div>
          )}

          {step === 2 && (
            <div className="animate-fade-in">
              <h5 className="text-xl font-black text-slate-900 mb-6">Schedule Session</h5>
              <form onSubmit={handleStep2Submit} className="grid grid-cols-1 gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Date</label>
                    <input 
                      type="date" required 
                      className="p-3 bg-slate-50 border border-slate-100 rounded-xl text-sm focus:border-indigo-500 focus:outline-none"
                      value={formData.date} onChange={e => setFormData({...formData, date: e.target.value})}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Time</label>
                    <input 
                      type="time" required 
                      className="p-3 bg-slate-50 border border-slate-100 rounded-xl text-sm focus:border-indigo-500 focus:outline-none"
                      value={formData.time} onChange={e => setFormData({...formData, time: e.target.value})}
                    />
                  </div>
                </div>
                
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Meeting Platform</label>
                  <div className="grid grid-cols-4 gap-2">
                    {['Google Meet', 'Teams', 'Zoom', 'Phone'].map(tool => (
                      <button 
                        key={tool}
                        type="button"
                        onClick={() => setFormData({...formData, tool})}
                        className={`p-3 rounded-xl border flex flex-col items-center gap-1 transition-all ${formData.tool === tool ? 'bg-indigo-50 border-indigo-500 text-indigo-600' : 'bg-slate-50 border-slate-100 text-slate-400'}`}
                      >
                        <i className={`fa-solid ${tool === 'Google Meet' ? 'fa-video' : tool === 'Teams' ? 'fa-users' : tool === 'Zoom' ? 'fa-camera-movie' : 'fa-phone'} text-xs`}></i>
                        <span className="text-[8px] font-bold uppercase">{tool}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <button type="submit" disabled={loading} className="mt-4 py-4 bg-indigo-600 text-white rounded-xl font-bold text-sm shadow-xl hover:bg-indigo-700 transition active:scale-95 flex items-center justify-center gap-2">
                  {loading && <i className="fa-solid fa-circle-notch animate-spin"></i>}
                  Confirm Booking
                </button>
              </form>
            </div>
          )}

          {step === 3 && (
            <div className="h-full flex flex-col items-center justify-center text-center animate-fade-in">
              <div className="w-16 h-16 bg-green-100 text-green-500 rounded-full flex items-center justify-center text-2xl mb-6 animate-bounce">
                <i className="fa-solid fa-check"></i>
              </div>
              <h5 className="text-2xl font-black text-slate-900 mb-2">You're all set!</h5>
              <p className="text-slate-500 text-sm leading-relaxed">
                Thank you for filling out the form. A confirmation email with the {formData.tool} link has been sent to <strong>{formData.email}</strong>.
              </p>
              <div className="mt-8 p-4 bg-indigo-50 rounded-2xl border border-indigo-100 flex items-center gap-3">
                 <i className="fa-solid fa-calendar-check text-indigo-500"></i>
                 <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest">{formData.date} @ {formData.time}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ConsultationFlow;
