
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
        isScrolled ? 'py-3 bg-gray-950/90 backdrop-blur-md shadow-sm' : 'py-5 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <a href="#" className="flex flex-col items-center transition-opacity hover:opacity-90">
            <div className="flex items-center space-x-2">
              <Shield className="h-7 w-7 text-purple-500" />
              <span className="text-xl font-semibold text-purple-300">Insurance Claims GPT</span>
            </div>
            <span className="text-xs text-purple-400 mt-0.5">Presented by AiWebTools.Ai</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="https://www.aiwebtools.ai" target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:text-purple-400 transition-colors">More AI Tools</a>
            <a href="#how-it-works" className="text-purple-300 hover:text-purple-400 transition-colors">How It Works</a>
            <a href="#services" className="text-purple-300 hover:text-purple-400 transition-colors">Services</a>
            <a href="#faq" className="text-purple-300 hover:text-purple-400 transition-colors">FAQ</a>
            <Button className="bg-purple-600 hover:bg-purple-700 text-white">Get Started</Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-purple-300 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-gray-950 shadow-lg p-4 border-t border-gray-800 animate-fade-in-up">
          <nav className="flex flex-col space-y-4">
            <a 
              href="https://www.aiwebtools.ai" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-purple-300 hover:text-purple-400 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              More AI Tools
            </a>
            <a 
              href="#how-it-works" 
              className="text-purple-300 hover:text-purple-400 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </a>
            <a 
              href="#services" 
              className="text-purple-300 hover:text-purple-400 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </a>
            <a 
              href="#faq" 
              className="text-purple-300 hover:text-purple-400 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </a>
            <Button className="bg-purple-600 hover:bg-purple-700 text-white w-full" onClick={() => setIsMenuOpen(false)}>
              Get Started
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
