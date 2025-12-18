
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold text-lg">I</div>
              <span className="text-xl font-bold">IBSRA <span className="text-indigo-500 text-sm">Talent</span></span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Pre-training passionate talent to your exact specifications. Operating in Egypt, Riyadh, and UAE.
            </p>
            <div className="flex items-center gap-4">
              {['linkedin', 'twitter', 'instagram'].map(s => (
                <a key={s} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-indigo-600 transition">
                  <i className={`fa-brands fa-${s}`}></i>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h5 className="font-bold mb-6">Platform</h5>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-white transition">How it Works</a></li>
              <li><a href="#" className="hover:text-white transition">For Enterprises</a></li>
              <li><a href="#" className="hover:text-white transition">For Candidates</a></li>
              <li><a href="#" className="hover:text-white transition">Success Stories</a></li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-bold mb-6">Resources</h5>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-white transition">Training Syllabus</a></li>
              <li><a href="#" className="hover:text-white transition">Hiring ROI Calculator</a></li>
              <li><a href="#" className="hover:text-white transition">Market Insights</a></li>
              <li><a href="#" className="hover:text-white transition">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-bold mb-6">Contact</h5>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li className="flex items-center gap-3">
                <i className="fa-solid fa-location-dot text-indigo-500"></i>
                Riyadh, Saudi Arabia
              </li>
              <li className="flex items-center gap-3">
                <i className="fa-solid fa-envelope text-indigo-500"></i>
                hello@ibsratalent.com
              </li>
              <li className="flex items-center gap-3">
                <i className="fa-solid fa-phone text-indigo-500"></i>
                +966 123 456 789
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-xs">
            © {new Date().getFullYear()} IBSRA Talent. All rights reserved.
          </p>
          <div className="flex gap-8 text-xs text-slate-500">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Terms of Service</a>
            <a href="#" className="hover:text-white transition">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
