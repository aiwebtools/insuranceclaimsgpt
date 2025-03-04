
import { Car, Home, UserRound } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: <Car className="h-12 w-12 text-insurance-400" />,
    title: "Auto Damage Claims",
    features: [
      "AI-driven image analysis to assess vehicle damage",
      "Web search for real-time part and labor costs",
      "Determines if the vehicle is totaled",
      "Accurately itemizes all damage costs"
    ],
    cta: "Assess Auto Damage",
    accent: "bg-gray-800/50",
  },
  {
    icon: <Home className="h-12 w-12 text-insurance-400" />,
    title: "Property Damage Claims",
    features: [
      "Calculates home or business repair estimates",
      "Uses industry-standard valuation techniques",
      "Provides a professional claim report",
      "Itemizes all damage and required repairs"
    ],
    cta: "Assess Property Damage",
    accent: "bg-gray-800/50",
  },
  {
    icon: <UserRound className="h-12 w-12 text-insurance-400" />,
    title: "Personal Injury Claims",
    features: [
      "Includes pain and suffering in estimates",
      "Determines liability factors in accident claims",
      "Compiles loss of income estimates",
      "Creates comprehensive injury claim reports"
    ],
    cta: "Assess Injury Claim",
    accent: "bg-gray-800/50",
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 animate-fade-in-up">
            Expert Insurance Claim Services
          </h2>
          <p className="text-lg text-gray-300 animate-fade-in-up [animation-delay:100ms]">
            Insurance Claims GPT provides specialized assessments for different types of insurance claims.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-gray-800 rounded-2xl shadow-lg border border-gray-700 overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-blue-900/20 animate-fade-in-up"
              style={{ animationDelay: `${index * 150 + 200}ms` }}
            >
              <div className={`p-6 ${service.accent}`}>
                <div className="w-16 h-16 rounded-2xl bg-gray-900 flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold text-white mb-2">{service.title}</h3>
              </div>
              
              <div className="p-6">
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <div className="mr-2 mt-1 h-4 w-4 rounded-full bg-gray-700 flex items-center justify-center">
                        <div className="h-2 w-2 rounded-full bg-insurance-400"></div>
                      </div>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button className="w-full bg-insurance-600 hover:bg-insurance-700 text-white">
                  {service.cta}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
