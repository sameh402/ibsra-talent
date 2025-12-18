
import React from 'react';

interface HeaderProps {
  scrolled: boolean;
  isLoggedIn: boolean;
  onScheduleClick: () => void;
  onLoginClick: () => void;
  onLogoutClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ scrolled, isLoggedIn, onScheduleClick, onLoginClick, onLogoutClick }) => {
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className={`w-9 h-9 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold text-xl`}>I</div>
          <span className={`text-xl font-bold tracking-tight ${scrolled ? 'text-slate-900' : 'text-white'}`}>IBSRA <span className="text-indigo-500 font-medium text-lg">Talent</span></span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#problem" className={`text-sm font-semibold hover:text-indigo-500 transition ${scrolled ? 'text-slate-600' : 'text-white/80'}`}>The Challenge</a>
          <a href="#process" className={`text-sm font-semibold hover:text-indigo-500 transition ${scrolled ? 'text-slate-600' : 'text-white/80'}`}>Solutions</a>
          <a href="#testimonials" className={`text-sm font-semibold hover:text-indigo-500 transition ${scrolled ? 'text-slate-600' : 'text-white/80'}`}>Testimonials</a>
        </nav>

        <div className="flex items-center gap-4">
          {isLoggedIn ? (
            <div className="flex items-center gap-4">
              <span className={`text-[10px] font-bold uppercase tracking-widest hidden sm:block ${scrolled ? 'text-slate-400' : 'text-white/50'}`}>
                Partner Dashboard
              </span>
              <button 
                onClick={onLogoutClick}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition ${scrolled ? 'text-red-500 hover:bg-red-50' : 'text-white/80 hover:bg-white/10'}`}
              >
                Logout
              </button>
            </div>
          ) : (
            <button 
              onClick={onLoginClick}
              className={`hidden sm:block text-sm font-bold transition hover:opacity-80 ${scrolled ? 'text-indigo-600' : 'text-white'}`}
            >
              Login
            </button>
          )}
          
          <button 
            onClick={onScheduleClick}
            className={`px-6 py-2.5 rounded-full text-sm font-bold transition active:scale-95 ${scrolled ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200' : 'bg-white text-indigo-900 shadow-xl'}`}
          >
            Book a Call
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
