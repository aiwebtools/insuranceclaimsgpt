
import { Calculator, FileText, Image, Search, DollarSign, FileCheck } from 'lucide-react';

const features = [
  {
    icon: <Calculator className="h-8 w-8 text-insurance-600" />,
    title: "Precise Cost Calculation",
    description: "Calculate repair costs for parts and labor with pinpoint accuracy using real-time market data.",
  },
  {
    icon: <Search className="h-8 w-8 text-insurance-600" />,
    title: "Web Search Integration",
    description: "Searches multiple sources to find current pricing for parts, labor rates, and market values.",
  },
  {
    icon: <Image className="h-8 w-8 text-insurance-600" />,
    title: "AI Image Analysis",
    description: "Uploads images of damage for detailed AI assessment of required repairs and part replacements.",
  },
  {
    icon: <FileText className="h-8 w-8 text-insurance-600" />,
    title: "Professional Reports",
    description: "Generates comprehensive, legally formatted insurance claim documents ready for submission.",
  },
  {
    icon: <DollarSign className="h-8 w-8 text-insurance-600" />,
    title: "Total Loss Assessment",
    description: "Determines if a vehicle is totaled by comparing repair costs to current market value.",
  },
  {
    icon: <FileCheck className="h-8 w-8 text-insurance-600" />,
    title: "Downloadable Documents",
    description: "Creates downloadable DOCX files with all claim details, images, and valuations.",
  },
];

const Features = () => {
  return (
    <section id="features" className="section-padding bg-insurance-50">
      <div className="container mx-auto px-4 md:px-6">
        {/* YouTube Video Section */}
        <div className="mb-16 w-full max-w-4xl mx-auto animate-fade-in-up">
          <div className="relative pb-[56.25%] h-0 rounded-xl overflow-hidden shadow-lg">
            <iframe 
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
              title="Insurance Claims GPT Demo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="mt-4 text-center text-insurance-700 text-lg font-medium">
            Watch how Insurance Claims GPT simplifies your claim process
          </div>
        </div>

        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-insurance-950 mb-4 animate-fade-in-up">
            Powerful Features for Accurate Claims
          </h2>
          <p className="text-lg text-insurance-700 animate-fade-in-up [animation-delay:100ms]">
            Our AI assistant combines multiple technologies to ensure you receive fair and accurate insurance claim assessments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="feature-card animate-fade-in-up"
              style={{ animationDelay: `${index * 100 + 200}ms` }}
            >
              <div className="w-14 h-14 rounded-2xl bg-insurance-100 flex items-center justify-center mb-5">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-insurance-900 mb-3">{feature.title}</h3>
              <p className="text-insurance-700">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
