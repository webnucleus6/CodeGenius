import { useState } from "react";
import faqImg from "../../../../image/faq/faq_10_1.png";
import faqLogo from "../../../../image/faq/title_shape_5.svg";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col-reverse md:flex-row items-center  bg-[#EFF1F9] justify-center gap-12 pt-10">
      {/* Image Section */}
      <div className="flex items-center justify-end md:w-1/2 w-full">
        <div className="  md:w-full lg:w-3/5">
          <img src={faqImg} alt="FAQ" className="w-full h-full" />
        </div>
      </div>

      {/* FAQ Section */}
      <div className="w-1/2 flex justify-start items-center">
        <div className="md:w-4/5  w-full">
          <h4 className="uppercase text-blue-600 font-bold flex items-center gap-2 mb-4 md:mb-6 lg:mb-8">
            <span>
              <img src={faqLogo} alt="Logo" />
            </span>
            Frequently Asked Questions
          </h4>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center md:text-left mb-6 md:mb-8 lg:mb-12">
            Empowering You With IT Knowledge
          </h2>
          {/* Accordion */}
          <div className="space-y-4 md:space-y-6 lg:space-y-8">
            {[0, 1, 2, 3].map((index) => (
              <div
                key={index}
                className={`collapse collapse-plus ${
                  openIndex === index ? "bg-blue-600 text-white" : "bg-white"
                }`}
              >
                <input
                  type="radio"
                  name="faq-accordion"
                  checked={openIndex === index}
                  onChange={() => toggleFAQ(index)}
                />
                <div className="collapse-title text-xl font-medium px-4 md:px-7">
                  What is Ecobazar?
                </div>
                <div
                  className={`collapse-content ${
                    openIndex === index
                      ? "bg-white text-gray-400 p-4 md:p-7"
                      : ""
                  }`}
                >
                  <p>
                    Ecobazar is an online marketplace that connects eco-friendly
                    farmers and consumers, providing fresh and organic products
                    directly from farms to your doorstep.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
