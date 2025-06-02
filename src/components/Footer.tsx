
import { Instagram, Shield, Car, Heart, FileText } from 'lucide-react';
import { Button } from "@/components/ui/button";

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M9 12a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" />
    <path d="M15 8h.01" />
    <path d="M9 2h6v8.5l4-1v4l-4 1V20c0 .6-.4 1-1 1H9a5 5 0 0 1-5-5 5 5 0 0 1 5-5v-2.5C9 8 9 4.5 9 2z" />
  </svg>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-br from-indigo-950 via-purple-950 to-pink-950 text-white py-20 overflow-hidden">
      {/* Animated background effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-gradient-to-r from-emerald-400 to-cyan-500 rounded-full blur-3xl animate-pulse-subtle"></div>
      </div>
      
      {/* Glowing grid overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-purple-500/5 to-transparent"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 rounded-xl bg-gradient-to-br from-cyan-400 to-purple-500 shadow-lg shadow-purple-500/25">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Insurance Claims GPT</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              AI-powered insurance claim assessments with unmatched accuracy and professionalism.
            </p>
            <a 
              href="https://www.aiwebtools.ai" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block text-cyan-400 hover:text-white transition-all duration-300 font-medium hover:shadow-lg hover:shadow-cyan-400/20 rounded-lg p-2"
            >
              Presented by AiWebTools.Ai
            </a>
            <div className="flex space-x-4 mt-6">
              <a href="https://www.instagram.com/aiwebtools" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-gradient-to-br from-pink-500 to-purple-600 hover:shadow-lg hover:shadow-pink-500/25 transition-all duration-300 transform hover:scale-110">
                <Instagram className="h-5 w-5 text-white" />
              </a>
              <a href="https://www.tiktok.com/@aiwebtools" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-gradient-to-br from-gray-700 to-gray-900 hover:shadow-lg hover:shadow-gray-500/25 transition-all duration-300 transform hover:scale-110">
                <TikTokIcon className="h-5 w-5 text-white" />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">Services</h3>
            <ul className="space-y-3">
              <li><a href="https://chatgpt.com/g/g-ols85Scif-insurance-claims-gpt" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-cyan-400 transition-all duration-300 hover:translate-x-2 inline-block">Auto Damage Claims</a></li>
              <li><a href="https://chatgpt.com/g/g-ols85Scif-insurance-claims-gpt" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-cyan-400 transition-all duration-300 hover:translate-x-2 inline-block">Property Damage Claims</a></li>
              <li><a href="https://chatgpt.com/g/g-ols85Scif-insurance-claims-gpt" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-cyan-400 transition-all duration-300 hover:translate-x-2 inline-block">Personal Injury Claims</a></li>
              <li><a href="https://medicalbillinggpt.lovable.app/?via=aiwebtools" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-emerald-400 transition-all duration-300 hover:translate-x-2 inline-block flex items-center gap-2">
                <FileText className="h-4 w-4" />
                Medical Billing & Coding GPT
              </a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-6">Company</h3>
            <ul className="space-y-3">
              <li><a href="https://www.aiwebtools.ai" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-emerald-400 transition-all duration-300 hover:translate-x-2 inline-block">More AI Tools</a></li>
              <li><a href="#how-it-works" className="text-gray-300 hover:text-emerald-400 transition-all duration-300 hover:translate-x-2 inline-block">How It Works</a></li>
              <li><a href="#testimonials" className="text-gray-300 hover:text-emerald-400 transition-all duration-300 hover:translate-x-2 inline-block">Testimonials</a></li>
              <li><a href="https://automobilegpt.lovable.app/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-all duration-300 hover:translate-x-2 inline-block flex items-center gap-2">
                <Car className="h-4 w-4" />
                Automobile GPT
              </a></li>
              <li><a href="https://healthinsurenceclaimsgpt.lovable.app/?via=aiwebtools" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-pink-400 transition-all duration-300 hover:translate-x-2 inline-block flex items-center gap-2">
                <Heart className="h-4 w-4" />
                Health Insurance GPT
              </a></li>
              <li><a href="https://medicalbillinggpt.lovable.app/?via=aiwebtools" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-emerald-400 transition-all duration-300 hover:translate-x-2 inline-block flex items-center gap-2">
                <FileText className="h-4 w-4" />
                Medical Billing & Coding GPT
              </a></li>
              <li><a href="#faq" className="text-gray-300 hover:text-emerald-400 transition-all duration-300 hover:translate-x-2 inline-block">FAQ</a></li>
              <li><a href="#" className="text-gray-300 hover:text-emerald-400 transition-all duration-300 hover:translate-x-2 inline-block">Contact Us</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-6">Contact</h3>
            <ul className="space-y-3">
              <li className="text-gray-300">
                <a href="https://www.aiwebtools.ai" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-cyan-400 transition-all duration-300">
                  AI Web Tools LLC
                </a>
              </li>
              <li className="text-gray-300">
                <a href="mailto:support@ai-webtools.com" className="text-gray-300 hover:text-pink-400 transition-all duration-300">
                  Email: support@ai-webtools.com
                </a>
              </li>
              <li className="text-gray-300">
                <a href="tel:+14758008096" className="text-gray-300 hover:text-purple-400 transition-all duration-300">
                  Support: (475) 800-8096
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <a 
                href="https://healthinsurenceclaimsgpt.lovable.app/?via=aiwebtools" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white mt-2 flex items-center gap-2 shadow-lg shadow-pink-500/25 hover:shadow-pink-500/40 transition-all duration-300 transform hover:scale-105">
                  <Heart className="h-4 w-4" />
                  Health Insurance GPT
                </Button>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gradient-to-r from-purple-800/30 to-pink-800/30 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center backdrop-blur-sm">
          <p className="text-gray-400 text-sm">
            © {currentYear} AI Web Tools LLC. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex flex-wrap gap-6 text-sm">
            <a href="https://openai.com/policies/privacy-policy/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-all duration-300">
              Privacy Policy
            </a>
            <a href="https://aiwebtools.lovable.app/disclaimers" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-all duration-300">
              Terms of Service
            </a>
            <a href="https://aiwebtools.lovable.app/disclaimers" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-400 transition-all duration-300">
              Disclaimer
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
