
import { useState, useEffect } from 'react';
import { ExternalLink } from 'lucide-react';

interface FloatingBubbleProps {
  text: string;
  url: string;
}

const FloatingBubble = ({ text, url }: FloatingBubbleProps) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Small delay before showing the bubble for a nice entrance effect
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div 
      className={`fixed bottom-6 right-4 sm:bottom-8 sm:right-8 z-50 transition-all duration-500 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
      }`}
    >
      <a 
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1 sm:gap-2 bg-gradient-to-br from-purple-600 to-fuchsia-600 text-white px-3 py-2 sm:px-5 sm:py-3 rounded-full shadow-lg hover:shadow-purple-500/30 transition-all duration-300 hover:scale-105 hover:translate-y-[-5px] animate-pulse-subtle"
      >
        <span className="text-xs sm:text-sm font-medium">{text}</span>
        <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4" />
      </a>
    </div>
  );
};

export default FloatingBubble;
