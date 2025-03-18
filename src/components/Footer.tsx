
import { Instagram, Shield, Car } from 'lucide-react';

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
    <footer className="bg-insurance-950 text-white py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="h-6 w-6 text-insurance-400" />
              <span className="text-xl font-semibold text-white">Auto Insurance Claims GPT</span>
            </div>
            <p className="text-insurance-300 mb-2">
              AI-powered insurance claim assessments with unmatched accuracy and professionalism.
            </p>
            <a 
              href="https://www.aiwebtools.ai" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-insurance-400 hover:text-white transition-colors mb-6 inline-block"
            >
              Presented by AiWebTools.Ai
            </a>
            <div className="flex space-x-4 mt-4">
              <a href="https://www.instagram.com/aiwebtools" target="_blank" rel="noopener noreferrer" className="text-insurance-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://www.tiktok.com/@aiwebtools" target="_blank" rel="noopener noreferrer" className="text-insurance-400 hover:text-white transition-colors">
                <TikTokIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="https://chatgpt.com/g/g-ols85Scif-insurance-claims-gpt" target="_blank" rel="noopener noreferrer" className="text-insurance-300 hover:text-white transition-colors">Auto Damage Claims</a></li>
              <li><a href="https://chatgpt.com/g/g-ols85Scif-insurance-claims-gpt" target="_blank" rel="noopener noreferrer" className="text-insurance-300 hover:text-white transition-colors">Property Damage Claims</a></li>
              <li><a href="https://chatgpt.com/g/g-ols85Scif-insurance-claims-gpt" target="_blank" rel="noopener noreferrer" className="text-insurance-300 hover:text-white transition-colors">Personal Injury Claims</a></li>
              <li><a href="https://chatgpt.com/g/g-ols85Scif-insurance-claims-gpt" target="_blank" rel="noopener noreferrer" className="text-insurance-300 hover:text-white transition-colors">Claim Report Generation</a></li>
              <li><a href="https://chatgpt.com/g/g-ols85Scif-insurance-claims-gpt" target="_blank" rel="noopener noreferrer" className="text-insurance-300 hover:text-white transition-colors">Insurance Negotiations</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="https://www.aiwebtools.ai" target="_blank" rel="noopener noreferrer" className="text-insurance-300 hover:text-white transition-colors">More AI Tools</a></li>
              <li><a href="#how-it-works" className="text-insurance-300 hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#testimonials" className="text-insurance-300 hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="https://automobilegpt.lovable.app/" target="_blank" rel="noopener noreferrer" className="text-insurance-300 hover:text-white transition-colors flex items-center gap-2">
                <Car className="h-4 w-4" />
                Automobile GPT
              </a></li>
              <li><a href="#faq" className="text-insurance-300 hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="text-insurance-300 hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-insurance-300">
                <a href="https://www.aiwebtools.ai" target="_blank" rel="noopener noreferrer" className="text-insurance-300 hover:text-white transition-colors">
                  AI Web Tools LLC
                </a>
              </li>
              <li className="text-insurance-300">
                <a href="mailto:support@ai-webtools.com" className="text-insurance-300 hover:text-white transition-colors">
                  Email: support@ai-webtools.com
                </a>
              </li>
              <li className="text-insurance-300">
                <a href="tel:+14758008096" className="text-insurance-300 hover:text-white transition-colors">
                  Support: (475) 800-8096
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-insurance-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-insurance-400 text-sm">
            © {currentYear} AI Web Tools LLC. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex flex-wrap gap-4 text-sm">
            <a href="https://openai.com/policies/privacy-policy/" target="_blank" rel="noopener noreferrer" className="text-insurance-400 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="https://aiwebtools.ai/terms-of-services" target="_blank" rel="noopener noreferrer" className="text-insurance-400 hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="https://aiwebtools.ai/terms-of-services" target="_blank" rel="noopener noreferrer" className="text-insurance-400 hover:text-white transition-colors">
              Disclaimer
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
