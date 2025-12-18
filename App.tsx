
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import Difference from './components/Difference';
import Process from './components/Process';
import Benefits from './components/Benefits';
import Stats from './components/Stats';
import AIPlanner from './components/AIPlanner';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import ConsultationFlow from './components/ConsultationFlow';
import AuthModal from './components/AuthModal';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-indigo-100 selection:text-indigo-900">
      <Header 
        scrolled={scrolled} 
        isLoggedIn={isLoggedIn}
        onScheduleClick={() => setIsConsultationOpen(true)} 
        onLoginClick={() => setIsAuthModalOpen(true)}
        onLogoutClick={handleLogout}
      />
      <main className="flex-grow">
        <Hero />
        <Stats />
        <ProblemSection />
        <Difference />
        <Process />
        <AIPlanner isLoggedIn={isLoggedIn} onOpenAuth={() => setIsAuthModalOpen(true)} />
        <Benefits />
        <Testimonials />
        
        <section id="final-cta" className="py-24 bg-gradient-primary text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2"></div>
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight">Let's Build Your Dream Team</h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button 
                onClick={() => setIsConsultationOpen(true)}
                className="px-10 py-4 bg-white text-indigo-900 rounded-full font-bold text-base hover:bg-slate-100 transition shadow-2xl active:scale-95"
              >
                Schedule a Discovery Call
              </button>
            </div>
            <p className="mt-8 text-white/40 text-[10px] font-bold uppercase tracking-widest">Global Partner Network: Egypt • Riyadh • UAE</p>
          </div>
        </section>
      </main>
      <Footer />

      {/* Modals */}
      {isConsultationOpen && (
        <ConsultationFlow onClose={() => setIsConsultationOpen(false)} />
      )}
      {isAuthModalOpen && (
        <AuthModal 
          onClose={() => setIsAuthModalOpen(false)} 
          onSuccess={() => setIsLoggedIn(true)} 
        />
      )}
    </div>
  );
};

export default App;
