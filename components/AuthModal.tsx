
import React, { useState } from 'react';

interface AuthModalProps {
  onClose: () => void;
  onSuccess: () => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ onClose, onSuccess }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    // Simulated Authentication
    setTimeout(() => {
      setLoading(false);
      onSuccess();
      onClose();
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-[250] flex items-center justify-center p-6 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-[2.5rem] w-full max-w-md p-10 relative shadow-2xl border border-slate-100">
        <button onClick={onClose} className="absolute top-6 right-6 text-slate-300 hover:text-slate-900 transition">
          <i className="fa-solid fa-xmark"></i>
        </button>
        
        <h3 className="text-2xl font-black mb-2">{isLogin ? 'Welcome Back' : 'Create Partner Account'}</h3>
        <p className="text-slate-500 text-sm mb-8">
          {isLogin ? 'Log in to access the platform demo.' : 'Join IBSRA to build custom training plans.'}
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-1">Full Name</label>
              <input 
                type="text" 
                placeholder="Ahmed Ali" 
                required 
                className="w-full p-4 rounded-xl border border-slate-100 bg-slate-50 text-sm focus:border-indigo-500 focus:outline-none transition-all"
                value={fullName}
                onChange={e => setFullName(e.target.value)}
              />
            </div>
          )}
          
          <div className="space-y-1.5">
            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-1">Email Address</label>
            <input 
              type="email" 
              placeholder="name@company.com" 
              required 
              className="w-full p-4 rounded-xl border border-slate-100 bg-slate-50 text-sm focus:border-indigo-500 focus:outline-none transition-all"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-1">Password</label>
            <input 
              type="password" 
              placeholder="••••••••" 
              required 
              className="w-full p-4 rounded-xl border border-slate-100 bg-slate-50 text-sm focus:border-indigo-500 focus:outline-none transition-all"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>

          {error && (
            <div className="p-3 bg-red-50 text-red-500 text-[10px] rounded-lg border border-red-100 flex items-center gap-2">
              <i className="fa-solid fa-circle-exclamation"></i>
              <span>{error}</span>
            </div>
          )}

          <button 
            type="submit" 
            disabled={loading}
            className="w-full py-4 bg-indigo-600 text-white rounded-xl font-bold text-sm shadow-xl active:scale-95 transition flex items-center justify-center gap-2"
          >
            {loading ? (
              <i className="fa-solid fa-circle-notch animate-spin"></i>
            ) : (
              isLogin ? 'Sign In' : 'Create Account'
            )}
          </button>
        </form>

        <div className="mt-8 pt-8 border-t border-slate-50 text-center">
          <p className="text-sm text-slate-500">
            {isLogin ? "Don't have an account?" : "Already have an account?"}
            <button 
              onClick={() => setIsLogin(!isLogin)} 
              className="ml-2 text-indigo-600 font-bold hover:underline"
            >
              {isLogin ? 'Sign Up' : 'Log In'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
