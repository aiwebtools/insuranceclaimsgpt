
import { useState, useEffect } from 'react';
import { Menu, X, Shield } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-3 bg-white/90 backdrop-blur-md shadow-sm' : 'py-5 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center space-x-2 transition-opacity hover:opacity-90">
            <Shield className="h-7 w-7 text-insurance-600" />
            <span className="text-xl font-semibold text-insurance-950">Insurance Claims GPT</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-insurance-800 hover:text-insurance-600 transition-colors">Features</a>
            <a href="#how-it-works" className="text-insurance-800 hover:text-insurance-600 transition-colors">How It Works</a>
            <a href="#services" className="text-insurance-800 hover:text-insurance-600 transition-colors">Services</a>
            <a href="#faq" className="text-insurance-800 hover:text-insurance-600 transition-colors">FAQ</a>
            <Button className="button-primary">Get Started</Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-insurance-800 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg p-4 border-t animate-fade-in-up">
          <nav className="flex flex-col space-y-4">
            <a 
              href="#features" 
              className="text-insurance-800 hover:text-insurance-600 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#how-it-works" 
              className="text-insurance-800 hover:text-insurance-600 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </a>
            <a 
              href="#services" 
              className="text-insurance-800 hover:text-insurance-600 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </a>
            <a 
              href="#faq" 
              className="text-insurance-800 hover:text-insurance-600 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </a>
            <Button className="button-primary w-full" onClick={() => setIsMenuOpen(false)}>
              Get Started
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
