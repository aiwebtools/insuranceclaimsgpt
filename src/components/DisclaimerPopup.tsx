
import { useState, useEffect } from 'react';
import { Shield, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const DisclaimerPopup = () => {
  const [showDisclaimer, setShowDisclaimer] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Check if user has already agreed to disclaimer
    const hasAgreed = localStorage.getItem('disclaimerAgreed');
    
    if (!hasAgreed) {
      // Wait a moment before showing the popup
      const timer = setTimeout(() => {
        setShowDisclaimer(true);
      }, 1500);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAgree = () => {
    localStorage.setItem('disclaimerAgreed', 'true');
    setShowDisclaimer(false);
    toast({
      title: "Welcome aboard!",
      description: "Thanks for agreeing to our terms.",
    });
  };

  if (!showDisclaimer) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-md p-6 mx-4 rounded-xl shadow-2xl animate-scale-in"
           style={{
             background: "linear-gradient(90deg, hsla(221, 45%, 73%, 1) 0%, hsla(220, 78%, 29%, 1) 100%)"
           }}>
        <button 
          onClick={() => setShowDisclaimer(false)}
          className="absolute top-3 right-3 p-1 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors"
        >
          <X className="h-5 w-5" />
        </button>
        
        <div className="flex flex-col items-center text-white">
          <div className="mb-3 p-3 bg-white/20 rounded-full">
            <Shield className="h-8 w-8 text-white" />
          </div>
          
          <h2 className="text-2xl font-bold mb-3 text-center font-['Playfair_Display']">
            Insurance Claims Disclaimer
          </h2>
          
          <p className="text-white/90 mb-5 text-center">
            By proceeding, you acknowledge that Insurance Claims GPT provides AI-assisted recommendations and not legal advice. Results should be reviewed by professionals.
          </p>
          
          <Button 
            onClick={handleAgree} 
            size="lg"
            className="w-full py-6 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105 bg-white text-blue-800 hover:bg-blue-50 hover:shadow-lg"
          >
            I AGREE
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DisclaimerPopup;
