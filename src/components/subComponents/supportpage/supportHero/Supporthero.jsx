import React from "react";
import "./supportHero.scss";

import rock from "./roc.svg";
import acn from "./acn.svg";
import cal from "./cal.svg";
import location from "./location.svg";
import dollor from "./dollor.svg";
import faqq from "./faq.svg";
import { useState } from "react";
import { Link } from "react-router-dom";

function Supporthero() {
  const [searchTerm, setSearchTerm] = useState("");
  const [highlightedCards, setHighlightedCards] = useState([]);

  const cards = [
    {
      title: "Getting started",
      content: "Start using SEA easily with our actionable tips.",
      src: rock,
    },
    {
      title: "Billing and Account",
      content: "Adjust your subscription and limits to your liking.",
      src: dollor,
    },
    {
      title: "Local SERP",
      content: "Understand how to use Local SERP tool to its fullest.",
      src: location,
    },
    {
      title: "FAQ Generator",
      content: "Understand how to generate FAQs that help your users.",
      src: faqq,
    },
    {
      title: "ROAS Calculator",
      content: "Understand how to manage your expenses using ROAS Calculator",
      src: cal,
    },
    {
      title: "Managing Account details",
      content: "Having trouble with your account details?",
      src: acn,
    },
    // Add more cards as needed
  ];

  // const highlightSearchTerm = (text) => {
  //   if (!searchTerm) {
  //     return text;
  //   }

  //   const regex = new RegExp(`(${searchTerm})`, "gi");
  //   return text.split(regex).map((part, index) =>
  //     regex.test(part) ? (
  //       <span key={index} className="highlight">
  //         {part}
  //       </span>
  //     ) : (
  //       part
  //     )
  //   );
  // };

  // const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    // Filter cards based on the search term
    const filteredResults = cards.filter(
      (card) =>
        card.title.toLowerCase().includes(term) ||
        card.content.toLowerCase().includes(term)
    );

    setSearchResults(filteredResults);
  };

  const highlightSearchTerm = (text) => {
    if (!searchTerm) {
      return text;
    }

    const regex = new RegExp(`(${searchTerm})`, "gi");
    return text.split(regex).map((part, index) =>
      regex.test(part) ? (
        <span key={index} className="highlight">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  // const handleSearch = () => {
  //   const newHighlightedCards = cards.filter(
  //     (card) =>
  //       card.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //       card.content.toLowerCase().includes(searchTerm.toLowerCase())
  //   );
  //   setHighlightedCards(newHighlightedCards);
  // };

  // const filteredCards = cards.filter((card) => {
  //   // You can adjust this condition based on your search criteria
  //   return (
  //     card.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //     card.content.toLowerCase().includes(searchTerm.toLowerCase())
  //   );
  // });

  const filteredCard = cards.find((card) => {
    return (
      card.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      card.content.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });
  return (
    <>
      <div className="w-full  px-[374px] pt-[216px] pb-[54px] bg-slate-100 justify-center items-center inline-flex support-hero">
        <div className="self-stretch flex-col justify-center items-center gap-[57px] inline-flex w-full">
          <div className="text-center text-neutral-800 text-[46px] font-medium font-['Poppins'] max-sm:text-[36px]">
            How can we help you?
          </div>
          <div className="justify-center items-center gap-7 inline-flex w-full">
            <input
              type="text"
              className="h-16 pl-[34px] pr-[19px] w-full py-5 bg-white rounded-md border justify-start items-center flex"
              placeholder="How to use FAQ Generator"
              // onChange={(e) => setSearchTerm(e.target.value)}
              onChange={handleSearch}
            />
          </div>

          {searchTerm && (
            <ul>
              {searchResults.map((result, index) => (
                <li className="h-[50px]" key={index}>
                  <Link to={"/qa"}>
                    <strong>{result.title}:</strong> {result.content}
                  </Link>
                </li>
              ))}
            </ul>
          )}

          {/* <button onClick={handleSearch}>search</button> */}
        </div>
      </div>

      <div className="supprt-cards bg-slate-100 h-full px-[72.50px] pb-10">
        <div className="main-card-support flex flex-wrap gap-[44px] justify-center max-sm:mx-5">
          {cards.map((card, index) => (
            <div
              key={index}
              className={highlightedCards.includes(card) ? "highlight" : ""}
            >
              <div className="support-card-1 w-[402px] h-[217px] pl-[32.50px] pr-[43.92px] pt-[37.57px] pb-[46.04px] bg-white rounded flex-col justify-start items-start gap-[31.63px] inline-flex">
                <div className="justify-center items-center gap-5 inline-flex">
                  <div className="w-8 h-8 relative">
                    <div className="w-[29.71px] h-[29.71px] left-[1.14px] top-[1.15px] absolute">
                      <img src={card.src} alt="" />
                    </div>
                  </div>
                  <div className="text-neutral-800 text-xl font-medium font-['Poppins'] heading-box heading-box">
                    {card.title}
                  </div>
                </div>
                <div className="w-[325.58px] h-[69.76px] text-neutral-600 text-base font-normal font-['Poppins']">
                  {card.content}
                </div>
              </div>
            </div>
          ))}
          {/* <div className="support-card-1 w-[402px] h-[217px] pl-[32.50px] pr-[43.92px] pt-[37.57px] pb-[46.04px] bg-white rounded flex-col justify-start items-start gap-[31.63px] inline-flex">
            <div className="justify-center items-center gap-5 inline-flex">
              <div className="w-8 h-8 relative">
                <div className="w-[29.71px] h-[29.71px] left-[1.14px] top-[1.15px] absolute">
                  <img src={rock} alt="" />
                </div>
              </div>
              <div className="text-neutral-800 text-xl font-medium font-['Poppins'] heading-box heading-box">
                Getting started
              </div>
            </div>
            <div className="w-[325.58px] h-[69.76px] text-neutral-600 text-base font-normal font-['Poppins']">
              Start using SEA easily with our actionable tips.
            </div>
          </div> */}

          {/* card2 */}
          {/* <div className="support-card-1 w-[402px] h-[217px] pl-[32.50px] pr-[43.92px] pt-[37.57px] pb-[46.04px] bg-white rounded flex-col justify-start items-start gap-[31.63px] inline-flex">
            <div className="justify-center items-center gap-5 inline-flex">
              <div className="w-8 h-8 relative">
                <div className="w-[29.71px] h-[29.71px] left-[1.14px] top-[1.14px] absolute">
                  <img src={dollor} alt="" />
                </div>
              </div>
              <div className="text-neutral-800 text-xl font-medium font-['Poppins'] heading-box">
                Billing and Account
              </div>
            </div>
            <div className="w-[325.58px] h-[69.76px] text-neutral-600 text-base font-normal font-['Poppins']">
              Adjust your subscription and limits to your liking.
            </div>
          </div> */}
          {/* card3 */}
          {/* <div className="support-card-1 w-[402px] h-[217px] pl-[32.50px] pr-[43.92px] pt-[37.57px] pb-[46.04px] bg-white rounded flex-col justify-start items-start gap-[31.63px] inline-flex">
            <div className="justify-center items-center gap-5 inline-flex">
              <div className="w-8 h-8 relative">
                <div className="w-[29.63px] h-[29.70px] left-[1.19px] top-[1.15px] absolute">
                  <img src={location} alt="" />
                </div>
              </div>
              <div className="text-neutral-800 text-xl font-medium font-['Poppins'] heading-box">
                Local SERP
              </div>
            </div>
            <div className="w-[325.58px] h-[69.76px] text-neutral-600 text-base font-normal font-['Poppins']">
              Understand how to use Local SERP tool to its fullest.
            </div>
          </div> */}
          {/* card4 */}
          {/* <div className=" support-card-1 w-[402px] h-[217px] pl-[32.50px] pr-[43.92px] pt-[37.57px] pb-[46.04px] bg-white rounded flex-col justify-start items-start gap-[31.63px] inline-flex">
            <div className="justify-center items-center gap-5 inline-flex">
              <div className="w-8 h-8 relative">
                <div className="w-[29.71px] h-[29.71px] left-[1.14px] top-[1.14px] absolute">
                  <div className="w-[1.14px] h-[1.14px] left-[14.29px] top-[7.43px] absolute">
                    <img src={faqq} alt="" />
                  </div>
                </div>
              </div>
              <div className="text-neutral-800 text-xl font-medium font-['Poppins'] heading-box">
                FAQ Generator
              </div>
            </div>
            <div className="w-[325.58px] h-[69.76px] text-neutral-600 text-base font-normal font-['Poppins']">
              Understand how to generate FAQs that help your users.
            </div>
          </div> */}
          {/* card5 */}

          {/* <div className=" support-card-1 w-[402px] h-[217px] pl-[32.50px] pr-[43.92px] pt-[37.57px] pb-[46.04px] bg-white rounded flex-col justify-start items-start gap-[31.63px] inline-flex">
            <div className="justify-center items-center gap-5 inline-flex">
              <div className="w-8 h-8 relative">
                <div className="w-[29.71px] h-[29.71px] left-[1.14px] top-[1.14px] absolute">
                  <img src={cal} alt="" />
                </div>
              </div>
              <div className="text-neutral-800 text-xl font-medium font-['Poppins'] heading-box">
                ROAS Calculator
              </div>
            </div>
            <div className="w-[325.58px] h-[69.76px] text-neutral-600 text-base font-normal font-['Poppins']">
              Understand how to manage your expenses using ROAS Calculator
            </div>
          </div> */}
          {/* card6 */}

          {/* <div className="support-card-1 w-[402px] h-[217px] pl-[32.50px] pr-[43.92px] pt-[37.57px] pb-[46.04px] bg-white rounded flex-col justify-start items-start gap-[31.63px] inline-flex">
            <div className="justify-center items-center gap-5 inline-flex">
              <div className="w-8 h-8 relative">
                <div className="w-8 h-8 left-0 top-0 absolute rounded-full border-2 border-blue-800" />
                <img src={acn} alt="" />
              </div>
              <div className="text-neutral-800 text-xl font-medium font-['Poppins'] heading-box">
                Managing Account details
              </div>
            </div>
            <div className="w-[325.58px] h-[69.76px] text-neutral-600 text-base font-normal font-['Poppins']">
              Having trouble with your account details?
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default Supporthero;
