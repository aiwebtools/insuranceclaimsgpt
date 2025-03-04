
import { ArrowRight, Shield } from 'lucide-react';
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="relative overflow-hidden rounded-2xl bg-insurance-600 p-8 md:p-12">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-insurance-300"></div>
            <div className="absolute top-40 right-10 h-40 w-40 rounded-full bg-insurance-400"></div>
            <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-insurance-500"></div>
          </div>
          
          <div className="relative max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm mb-6 animate-fade-in">
              <Shield className="h-8 w-8 text-white" />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 animate-fade-in-up [animation-delay:100ms]">
              Ready to Get the Insurance Claim You Deserve?
            </h2>
            
            <p className="text-xl text-insurance-100 mb-8 animate-fade-in-up [animation-delay:200ms]">
              Don't settle for less. Let our AI-powered system help you get fair and accurate insurance claim assessments.
            </p>
            
            <Button className="bg-white text-insurance-800 hover:bg-insurance-50 px-8 py-3 text-lg font-medium rounded-full flex items-center mx-auto animate-fade-in-up [animation-delay:300ms]">
              <span>Start Your Claim Assessment</span>
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
