
import React, { useState } from 'react';

interface AuthPageProps {
  onClose: () => void;
  onSuccess: (isDashboardLogin?: boolean) => void;
}

type AuthMode = 'CHOICE' | 'LOGIN' | 'SIGNUP' | 'COMING_SOON' | 'CONTACT';

const countries = [
  "Egypt", "Saudi Arabia", "United Arab Emirates", "Jordan", "Kuwait", "Qatar", "Oman", "Bahrain", "USA", "UK"
];

const AuthPage: React.FC<AuthPageProps> = ({ onClose, onSuccess }) => {
  const [mode, setMode] = useState<AuthMode>('CHOICE');
  const [loading, setLoading] = useState(false);
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    country: 'Egypt',
    businessEmail: '',
    businessPhone: '',
    companyWebsite: '',
    companyLinkedin: '',
    personalEmail: '',
    personalPhone: '',
    password: '',
    confirmPassword: '',
  });

  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const [contactData, setContactData] = useState({
    subject: '',
    message: ''
  });

  const validateBusinessEmail = (email: string) => {
    const publicDomains = ['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 'icloud.com'];
    const domain = email.split('@')[1]?.toLowerCase();
    return domain && !publicDomains.includes(domain);
  };

  const handleBlur = (name: string) => {
    setTouched(prev => ({ ...prev, [name]: true }));
    let err = "";
    const val = (formData as any)[name];
    if (!val && !['personalEmail', 'personalPhone'].includes(name)) err = "Required";
    if (name === 'businessEmail' && val && !validateBusinessEmail(val)) err = "Use business email only";
    if (name === 'confirmPassword' && val !== formData.password) err = "Passwords mismatch";
    setFieldErrors(prev => ({ ...prev, [name]: err }));
  };

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setMode('COMING_SOON');
    }, 1500);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onSuccess(true); // Signal it was a dashboard login
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-[100] bg-slate-50 flex items-center justify-center p-6 md:p-12 font-sans overflow-y-auto">
      <div className="w-full max-w-4xl bg-white p-10 md:p-14 rounded-[3.5rem] shadow-2xl border border-slate-100 relative">
        <button onClick={onClose} className="absolute top-8 right-8 text-slate-300 hover:text-slate-900 transition active:scale-90">
          <i className="fa-solid fa-xmark text-xl"></i>
        </button>

        {mode === 'CHOICE' && (
          <div className="text-center animate-fade-in py-10 max-w-md mx-auto">
            <div className="w-20 h-20 bg-indigo-50 text-indigo-600 rounded-3xl flex items-center justify-center text-3xl mx-auto mb-8 shadow-inner"><i className="fa-solid fa-rocket"></i></div>
            <h3 className="text-4xl font-black mb-4">Partner Portal</h3>
            <p className="text-slate-500 mb-12">Access DNA-specific talent deployment tools.</p>
            <div className="grid gap-4">
              <button onClick={() => setMode('SIGNUP')} className="w-full py-5 bg-indigo-600 text-white rounded-2xl font-black text-sm shadow-xl hover:bg-indigo-700 transition active:scale-95">Join Partner Network</button>
              <button onClick={() => setMode('LOGIN')} className="w-full py-5 border border-slate-200 text-slate-900 rounded-2xl font-black text-sm hover:bg-slate-50 transition active:scale-95">Dashboard Login</button>
            </div>
          </div>
        )}

        {mode === 'SIGNUP' && (
          <div className="animate-fade-in">
            <h3 className="text-3xl font-black mb-8 text-slate-900 uppercase">Partner Network Enrollment</h3>
            <form onSubmit={handleSignUp} className="space-y-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-1">First Name</label>
                  <input type="text" required className="w-full p-4 rounded-2xl bg-slate-50 border border-slate-100 text-sm focus:border-indigo-500 focus:outline-none" value={formData.firstName} onChange={e => setFormData({...formData, firstName: e.target.value})} onBlur={() => handleBlur('firstName')} />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-1">Last Name</label>
                  <input type="text" required className="w-full p-4 rounded-2xl bg-slate-50 border border-slate-100 text-sm focus:border-indigo-500 focus:outline-none" value={formData.lastName} onChange={e => setFormData({...formData, lastName: e.target.value})} onBlur={() => handleBlur('lastName')} />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-1">Country</label>
                  <select className="w-full p-4 rounded-2xl bg-slate-50 border border-slate-100 text-sm focus:border-indigo-500 focus:outline-none" value={formData.country} onChange={e => setFormData({...formData, country: e.target.value})}>
                    {countries.map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-indigo-500 uppercase tracking-widest px-1">Business Email</label>
                  <input type="email" required placeholder="name@company.com" className={`w-full p-4 rounded-2xl bg-slate-50 border ${fieldErrors.businessEmail ? 'border-red-300' : 'border-slate-100'} text-sm focus:border-indigo-500 focus:outline-none`} value={formData.businessEmail} onChange={e => setFormData({...formData, businessEmail: e.target.value})} onBlur={() => handleBlur('businessEmail')} />
                  {fieldErrors.businessEmail && <p className="text-[9px] text-red-500 font-bold">{fieldErrors.businessEmail}</p>}
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-1">Business Phone</label>
                  <input type="tel" required className="w-full p-4 rounded-2xl bg-slate-50 border border-slate-100 text-sm focus:border-indigo-500 focus:outline-none" value={formData.businessPhone} onChange={e => setFormData({...formData, businessPhone: e.target.value})} onBlur={() => handleBlur('businessPhone')} />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-1">Company Website</label>
                  <input type="url" required placeholder="https://..." className="w-full p-4 rounded-2xl bg-slate-50 border border-slate-100 text-sm focus:border-indigo-500 focus:outline-none" value={formData.companyWebsite} onChange={e => setFormData({...formData, companyWebsite: e.target.value})} onBlur={() => handleBlur('companyWebsite')} />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-1">Company LinkedIn</label>
                  <input type="url" required className="w-full p-4 rounded-2xl bg-slate-50 border border-slate-100 text-sm focus:border-indigo-500 focus:outline-none" value={formData.companyLinkedin} onChange={e => setFormData({...formData, companyLinkedin: e.target.value})} onBlur={() => handleBlur('companyLinkedin')} />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-1">Personal Email (Opt)</label>
                  <input type="email" className="w-full p-4 rounded-2xl bg-slate-50 border border-slate-100 text-sm focus:border-indigo-500 focus:outline-none" value={formData.personalEmail} onChange={e => setFormData({...formData, personalEmail: e.target.value})} />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-1">Personal Phone (Opt)</label>
                  <input type="tel" className="w-full p-4 rounded-2xl bg-slate-50 border border-slate-100 text-sm focus:border-indigo-500 focus:outline-none" value={formData.personalPhone} onChange={e => setFormData({...formData, personalPhone: e.target.value})} />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6 pt-4">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-1">Password</label>
                  <input type="password" required className="w-full p-4 rounded-2xl bg-slate-50 border border-slate-100 text-sm focus:border-indigo-500 focus:outline-none" value={formData.password} onChange={e => setFormData({...formData, password: e.target.value})} />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-1">Confirm Password</label>
                  <input type="password" required className={`w-full p-4 rounded-2xl bg-slate-50 border ${fieldErrors.confirmPassword ? 'border-red-300' : 'border-slate-100'} text-sm focus:border-indigo-500 focus:outline-none`} value={formData.confirmPassword} onChange={e => setFormData({...formData, confirmPassword: e.target.value})} onBlur={() => handleBlur('confirmPassword')} />
                </div>
              </div>
              <button type="submit" disabled={loading} className="w-full py-5 bg-indigo-600 text-white rounded-3xl font-black text-sm shadow-xl active:scale-95 transition">Join Partner Network</button>
            </form>
          </div>
        )}

        {mode === 'LOGIN' && (
          <div className="animate-fade-in max-w-md mx-auto">
            <h3 className="text-3xl font-black mb-10 text-slate-900 uppercase">Sign In</h3>
            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-1.5">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-1">Business Email</label>
                <input type="email" required placeholder="name@company.com" className="w-full p-4 rounded-2xl bg-slate-50 border border-slate-100 text-sm focus:border-indigo-500 focus:outline-none" value={loginData.email} onChange={e => setLoginData({...loginData, email: e.target.value})} />
              </div>
              <div className="space-y-1.5">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-1">Password</label>
                <input type="password" required className="w-full p-4 rounded-2xl bg-slate-50 border border-slate-100 text-sm focus:border-indigo-500 focus:outline-none" value={loginData.password} onChange={e => setLoginData({...loginData, password: e.target.value})} />
              </div>
              <button type="submit" className="w-full py-5 bg-indigo-600 text-white rounded-2xl font-black text-sm shadow-xl active:scale-95 transition">Access Dashboard</button>
              <p className="text-center text-xs text-slate-400">New here? <button type="button" onClick={() => setMode('SIGNUP')} className="text-indigo-600 font-bold hover:underline">join us here</button></p>
            </form>
          </div>
        )}

        {mode === 'COMING_SOON' && (
          <div className="text-center animate-fade-in py-16 max-w-md mx-auto">
            <div className="w-24 h-24 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center text-4xl mx-auto mb-8 shadow-inner"><i className="fa-solid fa-hourglass-start animate-pulse"></i></div>
            <h3 className="text-3xl font-black mb-4 text-slate-900 uppercase tracking-tighter">Application Received</h3>
            <p className="text-slate-500 mb-8 leading-relaxed">Our compliance team is verifying your business domain. You will receive an activation link shortly.</p>
            <div className="flex flex-col gap-3">
              <button onClick={() => onSuccess()} className="w-full py-4 bg-indigo-600 text-white rounded-2xl font-black text-sm shadow-xl active:scale-95 transition">Return to Home</button>
              <button onClick={() => setMode('CONTACT')} className="w-full py-4 border border-slate-200 text-slate-900 rounded-2xl font-black text-sm hover:bg-slate-50 transition active:scale-95 flex items-center justify-center gap-2"><i className="fa-solid fa-envelope"></i> Contact Us</button>
            </div>
          </div>
        )}

        {mode === 'CONTACT' && (
          <div className="animate-fade-in max-w-lg mx-auto">
            <h3 className="text-3xl font-black mb-2 text-slate-900">Direct Support</h3>
            <p className="text-slate-500 text-sm mb-10">Escalating to: <strong>business@ibsra.com</strong></p>
            <form onSubmit={(e) => { e.preventDefault(); setMode('COMING_SOON'); }} className="space-y-6">
              <div className="space-y-1.5">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-1">Subject</label>
                <input type="text" required placeholder="Verification Issue" className="w-full p-4 rounded-2xl bg-slate-50 border border-slate-100 text-sm focus:border-indigo-500 focus:outline-none" value={contactData.subject} onChange={e => setContactData({...contactData, subject: e.target.value})} />
              </div>
              <div className="space-y-1.5">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-1">Message</label>
                <textarea required placeholder="Briefly describe your request..." className="w-full h-40 p-4 rounded-2xl bg-slate-50 border border-slate-100 text-sm focus:border-indigo-500 focus:outline-none resize-none" value={contactData.message} onChange={e => setContactData({...contactData, message: e.target.value})} ></textarea>
              </div>
              <button type="submit" className="w-full py-5 bg-indigo-600 text-white rounded-2xl font-black text-sm shadow-xl transition active:scale-95">Send To Support</button>
              <button type="button" onClick={() => setMode('COMING_SOON')} className="w-full text-slate-400 font-bold text-xs hover:text-slate-900 underline">Cancel</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthPage;
