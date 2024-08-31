import { useState } from "react";
import faqImg from "../../../../image/faq/faq_10_1.png";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What IT consulting services does Webteck offer?",
      answer:
        "We offer a comprehensive suite of IT consulting services, including strategic planning, cloud solutions, network security, software development, and ongoing IT support.",
    },
    {
      question: "How does the IT consulting process work with Webteck?",
      answer:
        "Our process starts with a detailed consultation to understand your business needs, followed by a custom strategy tailored to achieve your IT goals. We then implement the solutions and provide ongoing support.",
    },
    {
      question: "Do you offer cloud migration services?",
      answer:
        "Yes, we provide comprehensive cloud migration services to ensure a smooth transition of your data and applications to the cloud.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col-reverse md:flex-row items-center mx-auto px-4 py-8 md:py-16 md:px-8">
      {/* Image Section */}
      <div className="md:w-1/2 lg:w-2/5 md:pr-8 lg:pr-16 mb-8 md:mb-0">
        <img src={faqImg} alt="FAQ" className="w-full h-auto" />
      </div>
      
      {/* FAQ Section */}
      <div className="md:w-1/2 lg:w-3/5">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center md:text-left mb-6">
          Empowering You With IT Knowledge
        </h2>
        <div className="w-full p-4 bg-white rounded-md shadow-md">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                onClick={() => toggleFAQ(index)}
                className={`flex justify-between w-full p-4 text-left font-medium rounded-md focus:outline-none ${
                  openIndex === index
                    ? "text-white bg-blue-600" // Styles when open
                    : "text-black bg-gray-100" // Styles when closed
                }`}
              >
                {faq.question}
                <span>{openIndex === index ? "-" : "+"}</span>
              </button>
              {/* Answer with transition */}
              <div
                className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
                  openIndex === index ? "max-h-40" : "max-h-0"
                }`}
              >
                {openIndex === index && (
                  <div className="p-4 text-gray-700 bg-white border-t border-gray-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
