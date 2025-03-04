
import { ArrowRight, Shield } from 'lucide-react';
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="relative overflow-hidden rounded-2xl bg-gray-900 p-8 md:p-12 border border-purple-500/20 shadow-xl shadow-purple-500/10">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-purple-500"></div>
            <div className="absolute top-40 right-10 h-40 w-40 rounded-full bg-indigo-500"></div>
            <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-fuchsia-500"></div>
          </div>
          
          <div className="animate-float relative max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm mb-6 animate-pulse-subtle">
              <Shield className="h-8 w-8 text-purple-400" />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 animate-fade-in-up [animation-delay:100ms]">
              Ready to Get the Insurance Claim You Deserve?
            </h2>
            
            <p className="text-xl text-violet-200 mb-8 animate-fade-in-up [animation-delay:200ms]">
              Don't settle for less. Let our AI-powered system help you get fair and accurate insurance claim assessments.
            </p>
            
            <a 
              href="https://chatgpt.com/g/g-ols85Scif-insurance-claims-gpt" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button className="bg-gradient-to-r from-fuchsia-600 to-purple-600 hover:from-fuchsia-700 hover:to-purple-700 text-white px-8 py-6 text-lg font-medium rounded-full flex items-center mx-auto animate-scale-in shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 transition-all duration-300">
                <span>Start Your Claim Assessment</span>
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
