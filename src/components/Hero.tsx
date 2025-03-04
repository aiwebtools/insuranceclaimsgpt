
import { ArrowRight, FileImage, Search, Shield } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-center md:space-x-12">
          <div className="md:w-1/2 space-y-6 pb-10 md:pb-0">
            <div className="inline-flex items-center rounded-full bg-insurance-50 px-4 py-1.5 text-sm font-medium text-insurance-700 mb-4 animate-fade-in">
              <Shield className="mr-1 h-4 w-4" />
              <span>AI-Powered Insurance Claims Assistant</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-insurance-950 tracking-tight animate-fade-in-up [animation-delay:100ms]">
              Expert Insurance Claim Assessments
            </h1>
            
            <p className="text-xl text-insurance-700 leading-relaxed max-w-xl animate-fade-in-up [animation-delay:200ms]">
              Get fair and accurate insurance claim valuations backed by AI-powered analysis, real-time pricing data, and professional reports.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4 animate-fade-in-up [animation-delay:300ms]">
              <Button className="button-primary text-base flex items-center justify-center space-x-2">
                <span>Get Your Claim Estimate</span>
                <ArrowRight className="h-5 w-5 ml-1" />
              </Button>
              <Button className="button-secondary text-base">
                Learn More
              </Button>
            </div>
            
            <div className="flex items-center space-x-2 text-insurance-600 text-sm animate-fade-in-up [animation-delay:400ms]">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-insurance-100 flex items-center justify-center">
                  <span className="text-xs font-medium">SD</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-insurance-200 flex items-center justify-center">
                  <span className="text-xs font-medium">JL</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-insurance-300 flex items-center justify-center">
                  <span className="text-xs font-medium">KT</span>
                </div>
              </div>
              <p className="text-insurance-600">
                <span className="font-medium">5,000+</span> claims processed this month
              </p>
            </div>
          </div>
          
          <div className="md:w-1/2 relative animate-fade-in [animation-delay:500ms]">
            <div className="relative z-10 bg-white rounded-2xl shadow-xl p-6 max-w-md mx-auto">
              <div className="absolute -top-10 -right-10 w-20 h-20 bg-insurance-50 rounded-full flex items-center justify-center animate-pulse-subtle">
                <Search className="h-8 w-8 text-insurance-600" />
              </div>
              
              <div className="flex items-center space-x-3 mb-6">
                <Shield className="h-6 w-6 text-insurance-600" />
                <h3 className="text-lg font-semibold text-insurance-950">Insurance Claims Assessment</h3>
              </div>
              
              <div className="space-y-6">
                <div className="p-4 rounded-lg bg-insurance-50 flex items-center space-x-3">
                  <FileImage className="h-6 w-6 text-insurance-700" />
                  <div>
                    <p className="text-sm font-medium text-insurance-800">Upload damage photos</p>
                    <p className="text-xs text-insurance-600">Add images for AI assessment</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3 rounded-lg bg-insurance-50">
                    <p className="text-xs text-insurance-600">Vehicle Type</p>
                    <p className="text-sm font-medium text-insurance-800">2019 Toyota Camry</p>
                  </div>
                  <div className="p-3 rounded-lg bg-insurance-50">
                    <p className="text-xs text-insurance-600">Incident Date</p>
                    <p className="text-sm font-medium text-insurance-800">May 15, 2023</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3 rounded-lg bg-insurance-50">
                    <p className="text-xs text-insurance-600">Damage Type</p>
                    <p className="text-sm font-medium text-insurance-800">Front Collision</p>
                  </div>
                  <div className="p-3 rounded-lg bg-insurance-50">
                    <p className="text-xs text-insurance-600">Airbags Deployed</p>
                    <p className="text-sm font-medium text-insurance-800">Yes</p>
                  </div>
                </div>
                
                <Button className="button-primary w-full text-base">
                  Generate Claim Report
                </Button>
              </div>
            </div>
            
            <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-gradient-to-r from-insurance-50 via-insurance-100 to-insurance-50 rounded-full blur-3xl opacity-50 animate-pulse-subtle"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
