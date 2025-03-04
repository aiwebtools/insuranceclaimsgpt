
import { Car } from "lucide-react";
import { Button } from "@/components/ui/button";

const RecommendationCard = () => {
  return (
    <section className="py-12 bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto bg-gray-800/50 rounded-2xl overflow-hidden border border-gray-700 shadow-lg">
          <div className="p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-white mb-3">
                We think you might also like Automobile GPT
              </h3>
              <p className="text-gray-300 mb-4">
                Get expert advice on car buying, maintenance, and repairs with our specialized AI assistant for all things automotive.
              </p>
              <a 
                href="https://automobilegpt.lovable.app/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button className="flex items-center gap-2">
                  <Car className="h-5 w-5" />
                  Try Automobile GPT
                </Button>
              </a>
            </div>
            <div className="flex-shrink-0 w-24 h-24 md:w-32 md:h-32 bg-gray-700 rounded-full flex items-center justify-center">
              <Car className="h-12 w-12 md:h-16 md:w-16 text-insurance-400" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecommendationCard;
