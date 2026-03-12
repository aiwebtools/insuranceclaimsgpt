
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
        isScrolled ? 'py-2 md:py-3 bg-gray-950/95 backdrop-blur-md shadow-sm' : 'py-3 md:py-5 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex flex-col items-start sm:items-center transition-opacity hover:opacity-90 shrink-0">
            <div className="flex items-center space-x-1.5 sm:space-x-2">
              <Shield className="h-5 w-5 sm:h-7 sm:w-7 text-purple-500" />
              <span className="text-base sm:text-xl font-semibold text-purple-300">Insurance Claims GPT</span>
            </div>
            <a 
              href="https://aiwebtools.lovable.app/?via=aiwebtools" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[10px] sm:text-xs text-purple-400 mt-0.5 hover:text-purple-300 transition-colors"
            >
              Presented by AiWebTools.Ai
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-4 xl:space-x-6">
            <a href="https://aiwebtools.lovable.app/?via=aiwebtools" target="_blank" rel="noopener noreferrer" className="text-sm text-purple-300 hover:text-purple-400 transition-colors whitespace-nowrap">More AI Tools</a>
            <a href="#how-it-works" className="text-sm text-purple-300 hover:text-purple-400 transition-colors whitespace-nowrap">How It Works</a>
            <a 
              href="https://medicalbillinggpt.lovable.app/?via=aiwebtools" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-purple-300 hover:text-purple-400 transition-colors flex items-center gap-1 whitespace-nowrap"
            >
              <FileText className="h-3.5 w-3.5" />
              Medical Billing GPT
            </a>
            <a 
              href="https://automobilegpt.lovable.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-purple-300 hover:text-purple-400 transition-colors flex items-center gap-1 whitespace-nowrap"
            >
              <Car className="h-3.5 w-3.5" />
              Automobile GPT
            </a>
            <a 
              href="https://healthinsurenceclaimsgpt.lovable.app/?via=aiwebtools" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-purple-300 hover:text-purple-400 transition-colors flex items-center gap-1 whitespace-nowrap"
            >
              <Heart className="h-3.5 w-3.5" />
              Health Insurance GPT
            </a>
            <a 
              href="https://chatgpt.com/g/g-ols85Scif-insurance-claims-gpt"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button className="bg-purple-600 hover:bg-purple-700 text-white text-sm whitespace-nowrap">Damage Assessment GPT</Button>
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden text-purple-300 focus:outline-none active:scale-95 transition-transform p-2 -mr-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`lg:hidden absolute top-full left-0 right-0 bg-gray-950/98 backdrop-blur-lg shadow-2xl border-t border-gray-800 transition-all duration-200 ease-out overflow-hidden ${
          isMenuOpen ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <nav className="flex flex-col p-4 space-y-1">
          <a 
            href="https://aiwebtools.lovable.app/?via=aiwebtools" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-purple-300 hover:text-purple-400 hover:bg-purple-500/10 transition-colors py-3 px-3 rounded-lg active:bg-purple-500/20"
            onClick={() => setIsMenuOpen(false)}
          >
            More AI Tools
          </a>
          <a 
            href="#how-it-works" 
            className="text-purple-300 hover:text-purple-400 hover:bg-purple-500/10 transition-colors py-3 px-3 rounded-lg active:bg-purple-500/20"
            onClick={() => setIsMenuOpen(false)}
          >
            How It Works
          </a>
          <a 
            href="https://medicalbillinggpt.lovable.app/?via=aiwebtools" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-purple-300 hover:text-purple-400 hover:bg-purple-500/10 transition-colors py-3 px-3 rounded-lg flex items-center gap-2 active:bg-purple-500/20"
            onClick={() => setIsMenuOpen(false)}
          >
            <FileText className="h-4 w-4" />
            Medical Billing & Coding GPT
          </a>
          <a 
            href="https://automobilegpt.lovable.app/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-purple-300 hover:text-purple-400 hover:bg-purple-500/10 transition-colors py-3 px-3 rounded-lg flex items-center gap-2 active:bg-purple-500/20"
            onClick={() => setIsMenuOpen(false)}
          >
            <Car className="h-4 w-4" />
            Automobile GPT
          </a>
          <a 
            href="https://healthinsurenceclaimsgpt.lovable.app/?via=aiwebtools" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-purple-300 hover:text-purple-400 hover:bg-purple-500/10 transition-colors py-3 px-3 rounded-lg flex items-center gap-2 active:bg-purple-500/20"
            onClick={() => setIsMenuOpen(false)}
          >
            <Heart className="h-4 w-4" />
            Health Insurance GPT
          </a>
          <div className="pt-2">
            <a 
              href="https://chatgpt.com/g/g-ols85Scif-insurance-claims-gpt"
              target="_blank" 
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
            >
              <Button className="bg-purple-600 hover:bg-purple-700 text-white w-full py-3">
                Damage Assessment Insurance Claims GPT
              </Button>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
