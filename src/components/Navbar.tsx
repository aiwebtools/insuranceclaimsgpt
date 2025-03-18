
import { useState, useEffect } from 'react';
import { Menu, X, Shield, Car, Heart, FileText } from 'lucide-react';
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
          <div className="flex flex-col items-center transition-opacity hover:opacity-90">
            <div className="flex items-center space-x-2">
              <Shield className="h-7 w-7 text-purple-500" />
              <span className="text-xl font-semibold text-purple-300">Insurance Claims GPT</span>
            </div>
            <a 
              href="https://www.aiwebtools.ai" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-xs text-purple-400 mt-0.5 hover:text-purple-300 transition-colors"
            >
              Presented by AiWebTools.Ai
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="https://www.aiwebtools.ai" target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:text-purple-400 transition-colors">More AI Tools</a>
            <a href="#how-it-works" className="text-purple-300 hover:text-purple-400 transition-colors">How It Works</a>
            <a 
              href="https://medicalbillinggpt.lovable.app/?via=aiwebtools" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-purple-300 hover:text-purple-400 transition-colors flex items-center gap-1"
            >
              <FileText className="h-4 w-4" />
              Medical Billing & Coding GPT
            </a>
            <a 
              href="https://automobilegpt.lovable.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-purple-300 hover:text-purple-400 transition-colors flex items-center gap-1"
            >
              <Car className="h-4 w-4" />
              Automobile GPT
            </a>
            <a 
              href="https://healthinsurenceclaimsgpt.lovable.app/?via=aiwebtools" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-purple-300 hover:text-purple-400 transition-colors flex items-center gap-1"
            >
              <Heart className="h-4 w-4" />
              Health Insurance GPT
            </a>
            <a 
              href="https://chatgpt.com/g/g-ols85Scif-insurance-claims-gpt"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button className="bg-purple-600 hover:bg-purple-700 text-white">Damage Assessment Insurance Claims GPT</Button>
            </a>
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
              href="https://medicalbillinggpt.lovable.app/?via=aiwebtools" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-purple-300 hover:text-purple-400 transition-colors py-2 flex items-center gap-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <FileText className="h-4 w-4" />
              Medical Billing & Coding GPT
            </a>
            <a 
              href="https://automobilegpt.lovable.app/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-purple-300 hover:text-purple-400 transition-colors py-2 flex items-center gap-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <Car className="h-4 w-4" />
              Automobile GPT
            </a>
            <a 
              href="https://healthinsurenceclaimsgpt.lovable.app/?via=aiwebtools" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-purple-300 hover:text-purple-400 transition-colors py-2 flex items-center gap-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <Heart className="h-4 w-4" />
              Health Insurance GPT
            </a>
            <a 
              href="https://chatgpt.com/g/g-ols85Scif-insurance-claims-gpt"
              target="_blank" 
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
            >
              <Button className="bg-purple-600 hover:bg-purple-700 text-white w-full">
                Damage Assessment Insurance Claims GPT
              </Button>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
