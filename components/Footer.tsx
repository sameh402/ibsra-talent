
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#030212] text-white py-20 border-t border-white/5">
      <div className="container mx-auto px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex items-center gap-5">
            <div className="w-12 h-12 rounded-[1.2rem] bg-indigo-600 flex items-center justify-center text-white font-black text-2xl shadow-2xl shadow-indigo-500/30">I</div>
            <span className="text-3xl font-black tracking-tighter">IBSRA <span className="text-indigo-500 font-medium">Talent</span></span>
          </div>

          <div className="flex flex-wrap justify-center gap-16 text-xs font-black uppercase tracking-[0.4em] text-slate-600">
            <a href="#" className="hover:text-indigo-400 transition-colors">Platform</a>
            <a href="#" className="hover:text-indigo-400 transition-colors">Resources</a>
            <a href="#" className="hover:text-indigo-400 transition-colors">Contact</a>
            <a href="#" className="hover:text-indigo-400 transition-colors">Legal</a>
          </div>

          <div className="flex gap-10 text-slate-600 text-2xl">
            <a href="#" className="hover:text-indigo-500 transition-all hover:scale-125"><i className="fa-brands fa-linkedin-in"></i></a>
            <a href="#" className="hover:text-indigo-500 transition-all hover:scale-125"><i className="fa-brands fa-x-twitter"></i></a>
          </div>
        </div>
        <div className="mt-20 pt-10 border-t border-white/5 text-center text-slate-700 font-bold text-[10px] uppercase tracking-[0.8em]">
          &copy; {new Date().getFullYear()} IBSRA TALENT DEPLOYMENT. ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
