
import { Facebook, Instagram, Linkedin, Shield, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-insurance-950 text-white py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="h-6 w-6 text-insurance-400" />
              <span className="text-xl font-semibold text-white">Insurance Claims GPT</span>
            </div>
            <p className="text-insurance-300 mb-2">
              AI-powered insurance claim assessments with unmatched accuracy and professionalism.
            </p>
            <p className="text-insurance-400 mb-6">
              Presented by AiWebTools.Ai
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-insurance-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-insurance-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-insurance-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-insurance-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
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
              <li><a href="#" className="text-insurance-300 hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#faq" className="text-insurance-300 hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="text-insurance-300 hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-insurance-300">AI Web Tools LLC</li>
              <li className="text-insurance-300">Email: support@ai-webtools.com</li>
              <li className="text-insurance-300">Support: (475) 800-8096</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-insurance-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-insurance-400 text-sm">
            © {currentYear} AI Web Tools LLC. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex flex-wrap gap-4 text-sm">
            <a href="#" className="text-insurance-400 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-insurance-400 hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-insurance-400 hover:text-white transition-colors">
              Disclaimer
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
