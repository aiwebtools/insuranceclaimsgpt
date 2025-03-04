
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "How accurate are the insurance claim assessments?",
    answer: "Insurance Claims GPT provides highly accurate assessments by combining AI image analysis with real-time web searches for current pricing data. The system uses multiple sources to verify costs and follows industry-standard calculation methods. While extremely precise, we recommend using our reports as a well-informed starting point when dealing with your insurance company."
  },
  {
    question: "Is my data secure when I upload photos?",
    answer: "Yes, all data uploaded to Insurance Claims GPT is encrypted and securely processed. We do not share your information with third parties, and images are only used for the purpose of claim assessment. Our system follows strict privacy protocols to ensure your personal and claim information remains confidential."
  },
  {
    question: "Can I use the reports with my insurance company?",
    answer: "Absolutely. Insurance Claims GPT generates professional, detailed reports in industry-standard formats that you can submit directly to your insurance company. These reports include all necessary documentation, itemized costs, and supporting evidence to strengthen your claim. Many users report improved claim outcomes when using our detailed reports."
  },
  {
    question: "What types of insurance claims can be assessed?",
    answer: "Our system can assess auto damage claims, property damage claims (homes and businesses), and personal injury claims. The AI is trained to evaluate a wide range of damage types and can provide detailed assessments for most common insurance claim scenarios."
  },
  {
    question: "How long does it take to get a claim assessment?",
    answer: "Most claim assessments are completed within minutes. The process includes AI analysis of your uploaded images, web searches for current pricing data, and report generation. More complex claims with extensive damage may take slightly longer to process, but you'll still receive your assessment much faster than traditional methods."
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section-padding">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 animate-fade-in-up">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-white animate-fade-in-up [animation-delay:100ms]">
            Get answers to common questions about Insurance Claims GPT.
          </p>
        </div>

        <div className="max-w-3xl mx-auto divide-y border-t border-b animate-fade-in-up [animation-delay:200ms]">
          {faqs.map((faq, index) => (
            <div key={index} className="py-6">
              <button
                className="flex justify-between items-center w-full text-left focus:outline-none"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                <h3 className="text-xl font-medium text-white">{faq.question}</h3>
                <div className="ml-4 flex-shrink-0">
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-white" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-white" />
                  )}
                </div>
              </button>
              
              <div
                className={`mt-3 overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-white">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
