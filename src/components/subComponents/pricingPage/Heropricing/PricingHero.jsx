import React, { useState, useEffect } from "react";
import axios from "axios";
// import CountryRegionSelector from 'react-country-region-selector';
import countryList from "react-select-country-list";
import "./pricingHero.scss";
import img from "./esc.svg";
import right from "./right.svg";
import { Link } from "react-router-dom";
import { CountryDropdown } from "react-country-region-selector";

const PricingHero = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const faqData = [
    {
      id: 1,
      question: "What is React?",
      answer: "React is a JavaScript library for building user interfaces.",
    },
    // Add more FAQ items
  ];

  const [selectedCountry, setSelectedCountry] = useState("");
  const [languages, setLanguages] = useState([]);

  const handleCountryChange = (country) => {
    setSelectedCountry(country);
    // valueContainerCSS()
  };

  const [metadata, setMetadata] = useState([]);
  // const [languages, setLanguages] = useState([]);
  const [error, setError] = useState(null);
  const [displayMetadata, setDisplayMetadata] = useState(false);

  useEffect(() => {
    const fetchLanguages = async () => {
      try {
        const response = await axios.get(
          `https://restcountries.com/v3.1/name/${selectedCountry}?fields=languages`
        );
        if (response.data.length === 2) {
          const countryData = response.data[1];
          console.log(countryData);

          if (countryData && countryData.languages) {
            const languageValues = Object.values(countryData.languages);
            setLanguages(languageValues);

            // setLanguages([]); // Clear languages when displaying metadata
            setDisplayMetadata(true);
          } else {
            setError("Languages not found in the response.");
          }
        } else if (response.data.length === 1) {
          const metadata = response.data[0];

          console.log(metadata);
          if (metadata && metadata.languages) {
            // Extract values from the "languages" object
            const languageValues = Object.values(metadata.languages);
            setMetadata(languageValues);
            setDisplayMetadata(false);
            // console.log('====================================');
            // console.log('====================================');
          } else {
            setError("Languages not found in the response.");
          }
        } else {
          setError("Empty response or unexpected format.");
        }
      } catch (error) {
        console.error("Error fetching language information:", error);
      }
    };
    if (selectedCountry) {
      fetchLanguages();
    }
  }, [selectedCountry]);

  const [selectedItem, setSelectedItem] = useState("");

  const handleChange = (event) => {
    setSelectedItem(event.target.value);
  };

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (query) => {
    setSearchTerm(query);
  };
  return (
    <>
      <div className="main-hero-pricing flex justify-center items-center flex-col pt-36">
        <div className="plan-heading flex justify-center items-center flex-col">
          <h1>Plans and Pricing</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Non sit scelerisque habitant
            faucibus.
          </p>
        </div>
        <div className="plan-details pt-28 flex justify-center items-center gap-12 flex-wrap">
          <div className="plan-one rounded-[21px]">
            <div className="head-plan flex  bg-[#EBF2FF] justify-center flex-col items-center gap-7 ">
              <div className="justify-between items-start flex w-[268px]">
                <div className="plan-name">
                  <div className="lorem-name">
                    <span>Lorem</span>
                  </div>
                  <div className="main-price flex justify-center items-center w-3/4 gap-3">
                    <h1>
                      <span>$</span>00
                    </h1>
                    <p className="billed">billed monthly</p>
                  </div>
                </div>
                <div className="esclamanation">
                  <img src={img} alt="" />
                </div>
              </div>
              <Link className="w-full" onClick={scrollToTop} to={"/payment"}>
                <div className="subscribe-plan w-full">
                  <button className="w-full">Subscribe</button>
                </div>
              </Link>
            </div>

            <div className="plan-keys flex flex-col gap-6 p-8">
              <div className="key-head">
                <h4>Lorem ipsum dolor sit amet</h4>
                <ul className="mt-3">
                  <li className="flex">
                    <img src={right} alt="" />
                    Lorem ipsum dolor sit amet
                  </li>
                  <li className="flex">
                    <img src={right} alt="" />
                    Lorem ipsum dolor sit amet
                  </li>
                  <li className="flex">
                    <img src={right} alt="" />
                    Lorem ipsum dolor sit amet
                  </li>
                  <li className="flex">
                    <img src={right} alt="" />
                    Lorem ipsum dolor sit amet
                  </li>
                </ul>
              </div>
              <div className="about-plan">
                <h4>Lorem ipsum dolor sit amet</h4>
                <p className="w-[266px]">
                  Lorem ipsum dolor sit amet consectetur. Dictum sed est nunc
                  platea accumsan. Vitae a eget lacus quisque turpis mauris sed
                  in. Tortor.
                </p>
              </div>
            </div>
          </div>
          <div className="plan-one popular rounded-[21px]">
            <div className="most-popular">
              <span>Most Popular</span>
            </div>

            <div className="hea-plan p-[33px] flex rounded-[0px]  bg-[#EBF2FF] justify-center flex-col items-center gap-7 ">
              <div className="justify-between items-start flex w-[268px]">
                <div className="plan-name">
                  <div className="lorem-name">
                    <span>Lorem</span>
                  </div>
                  <div className="main-price flex justify-center items-center w-3/4 gap-3">
                    <h1>
                      <span>$</span>00
                    </h1>
                    <p className="billed">billed monthly</p>
                  </div>
                </div>
                <div className="esclamanation">
                  <img src={img} alt="" />
                </div>
              </div>
              <Link className="w-full" onClick={scrollToTop} to={"/payment"}>
                <div className="subscribe-plan w-full">
                  <button className="w-full">Subscribe</button>
                </div>
              </Link>
            </div>

            <div className="plan-keys flex flex-col gap-6 p-8">
              <div className="key-head">
                <h4>Lorem ipsum dolor sit amet</h4>
                <ul className="mt-3">
                  <li className="flex">
                    <img src={right} alt="" />
                    Lorem ipsum dolor sit amet
                  </li>
                  <li className="flex">
                    <img src={right} alt="" />
                    Lorem ipsum dolor sit amet
                  </li>
                  <li className="flex">
                    <img src={right} alt="" />
                    Lorem ipsum dolor sit amet
                  </li>
                  <li className="flex">
                    <img src={right} alt="" />
                    Lorem ipsum dolor sit amet
                  </li>
                </ul>
              </div>
              <div className="about-plan">
                <h4>Lorem ipsum dolor sit amet</h4>
                <p className="w-[266px]">
                  Lorem ipsum dolor sit amet consectetur. Dictum sed est nunc
                  platea accumsan. Vitae a eget lacus quisque turpis mauris sed
                  in. Tortor.
                </p>
              </div>
            </div>
          </div>
          <div className="plan-one">
            <div className="head-plan flex  bg-[#EBF2FF] justify-center flex-col items-center gap-7 ">
              <div className="justify-between items-start flex w-[268px]">
                <div className="plan-name">
                  <div className="lorem-name">
                    <span>Lorem</span>
                  </div>
                  <div className="main-price flex justify-center items-center w-3/4 gap-3">
                    <h1>
                      <span>$</span>00
                    </h1>
                    <p className="billed">billed monthly</p>
                  </div>
                </div>
                <div className="esclamanation">
                  <img src={img} alt="" />
                </div>
              </div>
              <Link className="w-full" onClick={scrollToTop} to={"/payment"}>
                <div className="subscribe-plan w-full">
                  <button className="w-full">Subscribe</button>
                </div>
              </Link>
            </div>

            <div className="plan-keys flex flex-col gap-6 p-8">
              <div className="key-head">
                <h4>Lorem ipsum dolor sit amet</h4>
                <ul className="mt-3">
                  <li className="flex">
                    <img src={right} alt="" />
                    Lorem ipsum dolor sit amet
                  </li>
                  <li className="flex">
                    <img src={right} alt="" />
                    Lorem ipsum dolor sit amet
                  </li>
                  <li className="flex">
                    <img src={right} alt="" />
                    Lorem ipsum dolor sit amet
                  </li>
                  <li className="flex">
                    <img src={right} alt="" />
                    Lorem ipsum dolor sit amet
                  </li>
                </ul>
              </div>
              <div className="about-plan">
                <h4>Lorem ipsum dolor sit amet</h4>
                <p className="w-[266px]">
                  Lorem ipsum dolor sit amet consectetur. Dictum sed est nunc
                  platea accumsan. Vitae a eget lacus quisque turpis mauris sed
                  in. Tortor.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div>
        <CountryDropdown
          country={selectedCountry}
          value={selectedCountry}
          onChange={handleCountryChange}
          className="country"
        />

        <select placeholder="language" value={selectedItem} onChange={handleChange}>
          {displayMetadata
            ? languages.map((language, index) => (
                <option key={index} value={language}>
                  {language}
                </option>
              ))
            : metadata.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
        </select>
     
      </div> */}
    </>
  );
};

export default PricingHero;
