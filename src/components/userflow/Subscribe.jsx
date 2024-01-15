import React, { useEffect, useState } from "react";
import "./useraccount.scss";

import { useLocation } from "react-router-dom";
import Profile from "../userflowComponents/profileSetting/Profile";
import Subscription from "../userflowComponents/subscription/Subscription";
import PaymentMethod from "../userflowComponents/paymentMethod/PaymentMethod";
import PaymentHistory from "../userflowComponents/paymentHistory/PaymentHistory";
import BillingAddress from "../userflowComponents/billingAddress/BillingAddress";

const Subscribe = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const tabs = [
    {
      label: "Profile settings",
      content: <Profile onButtonClick={handleTabClick} />,
      id: "local",
    },
    {
      label: "Subscription",
      content: <Subscription onButtonClick={handleTabClick} />,
      id: "roas",
    },
    { label: "Payment method", content: <PaymentMethod /> },
    { label: "Payment history", content: <PaymentHistory /> },
    { label: "Billing Address", content: <BillingAddress /> },
  ];

  const [Widht, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  });

  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      {Widht > 778 ? (
        <>
          <div className="tabbed-content-flow flex justify-start items-start gap-10  fle-wrap  px-0 mb-10">
            <div className="tabs-container-flow w-[20%] px-10 bg-neutral-100 h-[700px]  pt-32">
              {tabs.map((tab, index) => (
                <div
                  key={index}
                  className={`tab ${index === activeTab ? "active" : ""}`}
                  onClick={() => handleTabClick(index)}
                >
                  {tab.label}
                </div>
              ))}
            </div>
            <div className="tab-content-flow w[70%] -ml52 max-sm:ml-0 max-sm:w-full w-[75%] pt-32 pb-20">
              {tabs[activeTab].content}
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="tabs-container w-[25%] px-10 mt-40 max-md:px-0">
            {tabs.map((tab, index) => (
              <div className="accordion-item py-4" key={index}>
                <div
                  className={`tab ${index === activeIndex ? "active" : ""}`}
                  onClick={() => toggleAccordion(index)}
                >
                  {tab.label}
                </div>
                {activeIndex === index && (
                  <div className="accordion-content">
                    {tabs[activeIndex].content}
                  </div>
                )}
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default Subscribe;
