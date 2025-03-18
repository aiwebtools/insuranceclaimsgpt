
import { useState, useEffect } from 'react';
import { ExternalLink, Shield, Car, Heart, FileText } from 'lucide-react';

// No longer need the props since we're creating a fixed set of buttons
const FloatingBubble = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Small delay before showing the bubbles for a nice entrance effect
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);
  
  const buttons = [
    {
      text: "Start Damage Assessment Now",
      url: "https://chatgpt.com/g/g-ols85Scif-insurance-claims-gpt",
      icon: <Shield className="h-3 w-3 sm:h-4 sm:w-4" />,
      color: "from-purple-600 to-fuchsia-600",
      delay: 0
    },
    {
      text: "Try Health Insurance GPT",
      url: "https://healthinsurenceclaimsgpt.lovable.app/?via=aiwebtools",
      icon: <Heart className="h-3 w-3 sm:h-4 sm:w-4" />,
      color: "from-pink-600 to-red-600",
      delay: 100
    },
    {
      text: "Try Automobile GPT",
      url: "https://automobilegpt.lovable.app/",
      icon: <Car className="h-3 w-3 sm:h-4 sm:w-4" />,
      color: "from-blue-600 to-cyan-600",
      delay: 200
    },
    {
      text: "Try Medical Billing & Coding GPT",
      url: "https://chatgpt.com/g/g-67d9f1b2c9b881918c0fac1ca6ea38ea-medical-billing-coding-gpt",
      icon: <FileText className="h-3 w-3 sm:h-4 sm:w-4" />,
      color: "from-green-600 to-teal-600",
      delay: 300
    }
  ];
  
  return (
    <div className="fixed bottom-6 right-4 sm:bottom-8 sm:right-8 z-50 flex flex-col-reverse gap-2 sm:gap-3">
      {buttons.map((button, index) => (
        <a 
          key={index}
          href={button.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center gap-1 sm:gap-2 bg-gradient-to-br ${button.color} text-white px-3 py-2 sm:px-5 sm:py-3 rounded-full shadow-lg hover:shadow-purple-500/30 transition-all duration-300 hover:scale-105 hover:translate-y-[-5px] animate-pulse-subtle`}
          style={{ 
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
            transition: `all 500ms ease ${button.delay}ms`
          }}
        >
          {button.icon}
          <span className="text-xs sm:text-sm font-medium">{button.text}</span>
          <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4" />
        </a>
      ))}
    </div>
  );
};

export default FloatingBubble;
