
import { Upload, SearchCheck, FileText } from 'lucide-react';
import { Button } from "@/components/ui/button";

const steps = [
  {
    icon: <Upload className="h-8 w-8 text-white" />,
    title: "Provide Claim Details",
    description: "Upload damage photos and answer a few questions about the incident to get started.",
    color: "bg-insurance-500",
    number: "1",
  },
  {
    icon: <SearchCheck className="h-8 w-8 text-white" />,
    title: "AI Analysis & Web Search",
    description: "Our AI examines damage and searches for real-time repair costs, parts, and labor rates.",
    color: "bg-insurance-600",
    number: "2",
  },
  {
    icon: <FileText className="h-8 w-8 text-white" />,
    title: "Generate Insurance Report",
    description: "Receive a comprehensive, professional insurance claim report ready to submit.",
    color: "bg-insurance-700",
    number: "3",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="section-padding">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-300 mb-4 animate-fade-in-up">
            How Insurance Claims GPT Works
          </h2>
          <p className="text-lg text-white animate-fade-in-up [animation-delay:100ms]">
            Our simple 3-step process helps you get accurate insurance claim assessments in minutes, not days.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative animate-fade-in-up"
              style={{ animationDelay: `${index * 150 + 200}ms` }}
            >
              <div className={`absolute -top-6 left-8 w-12 h-12 ${step.color} rounded-full flex items-center justify-center`}>
                {step.icon}
              </div>
              <div className="absolute top-4 right-6 text-3xl font-bold text-insurance-100">
                {step.number}
              </div>
              <div className="pt-6">
                <h3 className="text-xl font-semibold text-insurance-900 mb-3">{step.title}</h3>
                <p className="text-insurance-700">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto text-center">
          <a 
            href="https://chatgpt.com/g/g-ols85Scif-insurance-claims-gpt" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button className="button-primary text-base animate-fade-in-up [animation-delay:700ms]">
              Start Your Damage Claim Assessment
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
