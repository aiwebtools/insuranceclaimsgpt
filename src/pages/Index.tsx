
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import FloatingBubble from '../components/FloatingBubble';
import RecommendationCard from '../components/RecommendationCard';
import DisclaimerPopup from '../components/DisclaimerPopup';

const Index = () => {
  // Implement smooth scrolling
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = target.getAttribute('href')?.substring(1);
        if (!id) return;
        
        const element = document.getElementById(id);
        if (element) {
          window.scrollTo({
            top: element.offsetTop - 80, // Offset for header
            behavior: 'smooth',
          });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  // Enhanced animations on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            entry.target.classList.add('opacity-100');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const animateElements = document.querySelectorAll('.js-animate');
    animateElements.forEach((el) => {
      el.classList.add('opacity-0');
      observer.observe(el);
    });

    return () => {
      animateElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-pink-950 text-white overflow-hidden relative">
      {/* Enhanced divine background effects */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Animated gradient orbs */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-cyan-400/20 via-purple-500/20 to-pink-400/20 rounded-full blur-3xl animate-float transform translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-1/4 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-blue-500/15 via-indigo-500/15 to-purple-500/15 rounded-full blur-3xl animate-pulse-subtle transform -translate-x-1/3"></div>
        <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-gradient-to-bl from-emerald-400/15 via-cyan-500/15 to-blue-500/15 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-tl from-pink-500/20 via-purple-500/20 to-indigo-500/20 rounded-full blur-3xl animate-pulse"></div>
        
        {/* Moving light rays */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-2 h-96 bg-gradient-to-b from-transparent via-cyan-400/50 to-transparent rotate-12 animate-pulse"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-80 bg-gradient-to-b from-transparent via-purple-400/50 to-transparent -rotate-12 animate-pulse-subtle"></div>
          <div className="absolute bottom-1/4 left-1/3 w-1.5 h-72 bg-gradient-to-b from-transparent via-pink-400/50 to-transparent rotate-45 animate-float"></div>
        </div>
        
        {/* Glowing grid overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-purple-500/5 to-transparent"></div>
      </div>
      
      <div className="relative z-10">
        <Navbar />
        
        {/* Enhanced spacing between sections */}
        <div className="space-y-24">
          <Hero />
          <Features />
          <HowItWorks />
          <Services />
          <Testimonials />
          <FAQ />
          <CTA />
          <RecommendationCard />
        </div>
        
        {/* Enhanced Disclaimer Section with divine styling */}
        <section className="relative bg-gradient-to-r from-gray-900/80 via-purple-900/80 to-gray-900/80 py-16 border-t border-purple-500/30 backdrop-blur-sm mt-24">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/10 to-transparent"></div>
          <div className="container mx-auto px-6 md:px-8 relative z-10">
            <div className="text-center max-w-5xl mx-auto">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm mb-8">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 animate-pulse"></div>
              </div>
              <p className="text-gray-300 text-base leading-relaxed font-medium">
                <span className="font-bold text-purple-300">Disclaimer:</span> This tool is provided for informational, educational, and research purposes only. 
                The assessments and estimates generated are not official insurance evaluations and should not be used as the 
                sole basis for insurance claims or legal decisions. Always consult with qualified insurance professionals, 
                adjusters, and legal advisors for official claim processing and legal matters.
              </p>
            </div>
          </div>
        </section>
        
        <Footer />
      </div>
      <FloatingBubble />
      <DisclaimerPopup />
    </div>
  );
};

export default Index;
