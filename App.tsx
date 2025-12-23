
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import Difference from './components/Difference';
import Process from './components/Process';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';
import Partners from './components/Partners';
import Stats from './components/Stats';
import AIPlanner from './components/AIPlanner';
import CaseStudiesPage from './components/CaseStudiesPage';
import Footer from './components/Footer';
import ConsultationPage from './components/ConsultationPage';
import ServiceComparisonPage from './components/ServiceComparisonPage';
import AIDashboard from './components/AIDashboard';
import AuthPage from './components/AuthPage';

type View = 'home' | 'booking' | 'comparison' | 'ai-dashboard' | 'case-studies';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [currentView, setCurrentView] = useState<View>('home');
  const [isJoinPageOpen, setIsJoinPageOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [pendingView, setPendingView] = useState<View | null>(null);
  const [selectedModel, setSelectedModel] = useState<string | null>(null);
  const [initialCaseId, setInitialCaseId] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => window.scrollTo(0, 0), [currentView]);

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentView('home');
  };

  const handleProtectedAction = (targetView: View, model?: string) => {
    if (model) setSelectedModel(model);
    if (isLoggedIn) {
      setCurrentView(targetView);
    } else {
      setPendingView(targetView);
      setIsJoinPageOpen(true);
    }
  };

  const handleAuthSuccess = () => {
    setIsLoggedIn(true);
    setIsJoinPageOpen(false);
    if (pendingView) {
      setCurrentView(pendingView);
      setPendingView(null);
    } else {
      setCurrentView('ai-dashboard');
    }
  };

  if (isJoinPageOpen) {
    return <AuthPage onClose={() => { setIsJoinPageOpen(false); setPendingView(null); }} onSuccess={handleAuthSuccess} />;
  }

  return (
    <div className="min-h-screen flex flex-col selection:bg-indigo-100 selection:text-indigo-900 bg-[#f8fafc] text-slate-900 transition-opacity duration-500 overflow-x-hidden">
      <Header 
        scrolled={scrolled || currentView !== 'home'} 
        isLoggedIn={isLoggedIn}
        onJoinClick={() => setIsJoinPageOpen(true)} 
        onScheduleClick={() => handleProtectedAction('booking')}
        onCaseStudiesClick={() => { setInitialCaseId(null); setCurrentView('case-studies'); }}
        onLogoutClick={handleLogout}
        onLogoClick={() => setCurrentView('home')}
      />
      
      <main className="flex-grow">
        {currentView === 'home' && (
          <div className="flex flex-col">
            <Hero onBuildTeamClick={() => handleProtectedAction('comparison')} onBookCallClick={() => handleProtectedAction('booking')} onCaseClick={id => { setInitialCaseId(id); setCurrentView('case-studies'); }} />
            
            <Stats />
            
            {/* Massive padding to separate the Stats card from the Problem Section */}
            <div className="py-32 md:py-52">
              <ProblemSection />
            </div>
            
            <div className="py-32 md:py-48 bg-white border-y border-slate-100">
              <Difference />
            </div>
            
            <div className="py-32 md:py-48">
              <Process onCompareClick={() => handleProtectedAction('comparison')} onConsultClick={() => handleProtectedAction('booking')} />
            </div>
            
            <div className="py-32 md:py-48 bg-white border-y border-slate-100">
              <AIPlanner isLoggedIn={isLoggedIn} onOpenAuth={() => handleProtectedAction('ai-dashboard')} />
            </div>
            
            <div className="py-32 md:py-48">
              <Benefits />
            </div>
            
            <div className="py-32 md:py-48 bg-[#f8fafc] border-t border-slate-100">
              <Testimonials />
            </div>
            
            <Partners />
            
            <section id="final-cta" className="py-40 md:py-52 bg-[#1b1a4e] text-white text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20"></div>
              <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">
                <h2 className="text-5xl md:text-7xl lg:text-[5.5rem] font-black leading-none tracking-tight mb-16">
                  Let's Build Your Dream Team
                </h2>
                
                <button 
                  onClick={() => handleProtectedAction('booking')}
                  className="px-14 py-6 bg-white text-[#1b1a4e] rounded-full font-black text-xl hover:bg-white/95 transition-all shadow-[0_30px_60px_rgba(0,0,0,0.5)] active:scale-95 mb-20"
                >
                  Schedule a Discovery Call
                </button>

                <div className="text-[10px] md:text-xs font-black text-white/30 uppercase tracking-[0.5em] mt-4">
                  Global Partner Network: Egypt • Riyadh • UAE
                </div>
              </div>
            </section>
          </div>
        )}

        {currentView === 'booking' && <ConsultationPage model={selectedModel} onBack={() => { setCurrentView('home'); setSelectedModel(null); }} />}
        {currentView === 'comparison' && <ServiceComparisonPage onSelectModel={(model) => handleProtectedAction('booking', model)} onBack={() => setCurrentView('home')} />}
        {currentView === 'case-studies' && <CaseStudiesPage initialCaseId={initialCaseId} onBack={() => { setCurrentView('home'); setInitialCaseId(null); }} />}
        {currentView === 'ai-dashboard' && <AIDashboard onBack={() => setCurrentView('home')} />}
      </main>
      
      <Footer />
    </div>
  );
};

export default App;
