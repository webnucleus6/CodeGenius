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
    <div className="md:flex justify-center mx-auto">
      <div>
        <img src={faqImg} alt="" />
      </div>
      <div className="my-auto">
        <h2 className="text-3xl">Empowering You With IT Knowledge</h2>
        <div className="w-full max-w-md p-4 mx-auto  rounded-md shadow-md">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between w-full p-4 text-left text-blue-600 font-medium bg-gray-100 rounded-md focus:outline-none"
              >
                {faq?.question}
                <span>{openIndex === index ? "-" : "+"}</span>
              </button>
              {openIndex === index && (
                <div className="p-4 text-gray-700 bg-white border-t border-gray-200">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
