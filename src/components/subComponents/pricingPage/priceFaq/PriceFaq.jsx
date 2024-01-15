import React, { useState } from "react";
import "./pricefaq.scss";
import down from "./up.svg";
import downw from "./down.svg";
import { Link } from "react-router-dom";
const PriceFaq = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  const faqData = [
    {
      question: "FAQ 1",
      answer:
        "Lorem ipsum dolor sit amet consectetur. In donec nibh vitae ultricies hac non a. Volutpat feugiat et augue egestas commodo arcu. Est pellentesque felis nec sapien vestibulum sollicitudin at aliquam. Enim dictumst phasellus adipiscing malesuada.",
    },
    {
      question: "FAQ 2",
      answer:
        "Lorem ipsum dolor sit amet consectetur. In donec nibh vitae ultricies hac non a. Volutpat feugiat et augue egestas commodo arcu. Est pellentesque felis nec sapien vestibulum sollicitudin at aliquam. Enim dictumst phasellus adipiscing malesuada.",
    },
    {
      question: "FAQ 3",
      answer:
        "Lorem ipsum dolor sit amet consectetur. In donec nibh vitae ultricies hac non a. Volutpat feugiat et augue egestas commodo arcu. Est pellentesque felis nec sapien vestibulum sollicitudin at aliquam. Enim dictumst phasellus adipiscing malesuada.",
    },
    {
      question: "FAQ 4",
      answer:
        "Lorem ipsum dolor sit amet consectetur. In donec nibh vitae ultricies hac non a. Volutpat feugiat et augue egestas commodo arcu. Est pellentesque felis nec sapien vestibulum sollicitudin at aliquam. Enim dictumst phasellus adipiscing malesuada.",
    },
    // Add more FAQ items as needed
  ];
  return (
    <>
      <div className="price-faq flex flex-col justify-center items-center pt-20">
        <div className="price-faq-heading">
          <h1>Frequently asked questions</h1>
        </div>

        <div className="main-faq mt-12">
          {faqData.map((faq, index) => (
            <div className="accordion-item py-4" key={index}>
              <div
                className="accordion-header flex justify-between"
                onClick={() => toggleAccordion(index)}
              >
                {faq.question}
                {activeIndex === index ? (
                  <img src={down} alt="" />
                ) : (
                  <img src={downw} alt="" />
                )}
              </div>
              {activeIndex === index && (
                <div className="accordion-content">
                  <p className="p-[20px]">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="faq-contact-btn w-full flex justify-center items-center mt-8 mb-20">
        Didn’t find your question?
        <button className="ml-1">
          <Link onClick={scrollToTop} to={"/contact"}>
            Contact Us
          </Link>
        </button>
      </div>
    </>
  );
};

export default PriceFaq;
