
import React from 'react';

interface HeaderProps {
  scrolled: boolean;
  isLoggedIn: boolean;
  onJoinClick: () => void;
  onLogoutClick: () => void;
  onScheduleClick: () => void;
  onCaseStudiesClick: () => void;
  onLogoClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ 
  scrolled, isLoggedIn, onJoinClick, onLogoutClick, onScheduleClick, onCaseStudiesClick, onLogoClick 
}) => {
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-[#1e1b4b]/95 backdrop-blur-md py-4 shadow-lg border-b border-white/5' 
        : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer group" onClick={onLogoClick}>
          <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center text-white font-black text-xl shadow-lg transition-transform group-hover:scale-105">I</div>
          <span className="text-xl font-bold text-white tracking-tighter">
            IBSRA <span className="text-white/60 font-medium">Talent</span>
          </span>
        </div>
        
        {/* Navigation */}
        <nav className="hidden lg:flex items-center gap-10">
          <a href="#problem" className="text-sm font-bold text-white/80 hover:text-white transition-colors">The Challenge</a>
          <a href="#process" className="text-sm font-bold text-white/80 hover:text-white transition-colors">Solutions</a>
          <a href="#business-impact" className="text-sm font-bold text-white/80 hover:text-white transition-colors">Testimonials</a>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-6">
          {isLoggedIn ? (
            <button onClick={onLogoutClick} className="text-sm font-bold text-white/80 hover:text-white transition-colors">Logout</button>
          ) : (
            <button 
              onClick={onJoinClick}
              className="px-6 py-2.5 bg-white text-[#1e1b4b] rounded-full text-sm font-bold hover:bg-slate-100 transition-all shadow-md active:scale-95"
            >
              Join Us
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
