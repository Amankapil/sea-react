import React, { useEffect, useState } from "react";
import "./home.scss";
import trust from "./assets/Row.png";
import notes from "./assets/Notes (1).png";
import Lottie from "lottie-react";

import animationData from "./assets/first_animation.json";
import animationData2 from "./assets/second_animation.json";
import animationData3 from "./assets/third_animation.json";
import { Link } from "react-router-dom";
import down from "./assets/down-arrow.svg";

// import PhoneInput from "react-phone -input-2";
// import "react-phone-input-2/lib/style.css";

import ReactFlagsSelect from "react-flags-select";

const Home = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const [selected, setSelected] = useState("");
  return (
    <>
      <section class="hero-section flex items-center justify-center max-sm:h-[700px]">
        <div class="main-hero flex-col ">
          <div class="headind-hero pt-36  max-sm:pt-20">
            <h2 className="sear-engine">Search Engine Amplify</h2>
            <div class="flex items-center justify-center pt-6">
              <p className="w-1/2 max-sm:w-full">
                Lorem ipsum dolor sit amet consectetur. Faucibus id nec aliquam
                urna iaculis
              </p>
            </div>

            <div class="pt-12  flex items-center justify-center max-sm:flex-wrap ">
              <div class="input-hero ">
                <input type="text" placeholder="Enter a topic" />

                <div class="flag-dropdown">
                  <div class="selected-option" id="selected-option">
                    <span class="flag-icon us"></span>US
                    <img class="ml-2" src={down} alt="" />
                  </div>
                  <ul class="options-list" id="options-list">
                    <li data-value="uk">
                      <span class="flag-icon uk"></span>UK
                    </li>
                    <li data-value="in">
                      <span class="flag-icon in"></span>IN
                    </li>
                    <li data-value="in">
                      <span class="flag-icon ch"></span>CH
                    </li>
                    <li data-value="in">
                      <span class="flag-icon cn"></span>CN
                    </li>
                  </ul>
                </div>

                {/* <PhoneInput
                  country={"in"}
                  enableAreaCodes={false}
                  // value={phone}
                /> */}

                {/* <span class="flag-icon us"></span> */}
                {/* <ReactFlagsSelect
                  searchable
                  selected={selected}
                  onSelect={(code) => setSelected(code)}
                  defaultCountry="US"
                  placeholder="US"
                  className="max-md:w-[280px] max-md:justify-start bg-none"
                /> */}
                {/* <div class="selected-option" id="selected-option"> */}
                {/* <img class="ml-2" src={down} alt="" /> */}
                {/* </div> */}
              </div>
              {/* Select element for countries */}
              <div>
                <button class="go-button ml-5 max-sm:mt-12">Go</button>
              </div>
            </div>
          </div>

          <div class="trust-by pt-36 w-full  min-[1700px]:pt-36  max-sm:pt-10">
            <div class="trust pb-3">Trusted By:</div>

            <div class="clients pt-6">{/* <img src={trust} alt="" /> */}</div>
          </div>
        </div>
      </section>

      {/* <div class="gcse-search"></div> */}
      {/* <!-- <div id="wave-container"></div>                                             --> */}
      <section class="features relative mt-16">
        <div class="main-features  flex items-center justify-center flex-col">
          <div class="absolute orange-circle">
            {/* <img src="./assets/Ellipse 2471.svg" alt="" /> */}
          </div>

          <div class="absolute blue-cicle">
            {/* <!-- <img src="./assets/Ellipse 2472.svg"
                alt=""> --> */}
          </div>
          <div class="topic-keyword-card">
            <div class="topic">
              <div class="zero-one">01</div>
              <div class="head-card py-6">
                Topic Keyword Research & SEO Analysis
              </div>
              <div class="card-pera">
                Lorem ipsum dolor sit amet consectetur. Velit faucibus dignissim
                cursus varius ut. Quam a quam tincidunt ut et ullamcorper. Vitae
                mattis bibendum non egestas faucibus leo urna erat at sed enim
                sit.
              </div>
            </div>
            <div class="lotti w-[420px] h-[300px]">
              <div
                class="absoute lottie w-[420px] h-[300px]"
                id="lottie-container1"
              >
                <Lottie
                  className="mt-5"
                  animationData={animationData} // Your animation JSON
                  loop={true} // Set to true if you want the animation to loop
                  autoplay={true} // Set to true to automatically play the animation
                />
              </div>
            </div>
          </div>
          <div class="topic-keyword-card topic-keyword-card-2 my-16">
            <div class="topic">
              <div class="zero-one">02</div>
              <div class="head-card py-6">
                SEO Outline &
                <br />
                Content Generation
              </div>
              <div class="card-pera">
                Lorem ipsum dolor sit amet consectetur. Velit faucibus dignissim
                cursus varius ut. Quam a quam tincidunt ut et ullamcorper. Vitae
                mattis bibendum non egestas faucibus leo urna erat at sed enim
                sit.
              </div>
            </div>

            <div class="lotti w-[420px] h-[300px]">
              <div class="absoute lottie w-[420px] h-[300px]" id="l">
                <Lottie
                  className="mt-5"
                  animationData={animationData2} // Your animation JSON
                  loop={true} // Set to true if you want the animation to loop
                  autoplay={true} // Set to true to automatically play the animation
                />
              </div>
            </div>
          </div>

          <div class="topic-keyword-card topic-keyword-card-3 mb-16">
            <div class="topic">
              <div class="zero-one">03</div>
              <div class="head-card py-6">Competitor Analysis</div>
              <div class="card-pera">
                Lorem ipsum dolor sit amet consectetur. Velit faucibus dignissim
                cursus varius ut. Quam a quam tincidunt ut et ullamcorper. Vitae
                mattis bibendum non egestas faucibus leo urna erat at sed enim
                sit.
              </div>
            </div>
            <div class="lotti w-[420px] h-[300px]">
              <div
                class="absoute lottie w-[420px] h-[300px]"
                id="lottie-container3"
              >
                <Lottie
                  className="mt-5"
                  animationData={animationData3} // Your animation JSON
                  loop={true} // Set to true if you want the animation to loop
                  autoplay={true} // Set to true to automatically play the animation
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="digital-marketing-tool bg-[#fff]">
        <div class="main-tools  flex items-center justify-center flex-col ">
          <div class="heading-tool ">Our Digital Marketing Tools</div>
          {/* <div class="bookH2">
            <h2>
                Lorem ipsum dolor sit
            </h2>
            <p>
                Lorem ipsum dolor sit amet consectetur. Velit faucibus dignissim cursus varius ut. Quam a quam tincidunt ut et ullamcorper. 
            </p>
        </div>  */}
          <div class="tools-card pt-20  flex items-center justify-center gap-6">
            <Link onClick={scrollToTop} to="/product ">
              <div class="Roas-card">
                <img src={notes} alt="" />
                <span>ROAS Calculator</span>
              </div>
            </Link>
            <Link onClick={scrollToTop} to={"/product/#roas"}>
              <div class="Roas-card">
                <img src={notes} alt="" />
                <span>Local SERP Check</span>
              </div>
            </Link>
            <Link onClick={scrollToTop} to={"/product"}>
              <div class="Roas-card">
                <img src={notes} alt="" />
                <span>FAQ Generator</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="book-demo bg-[#F4F7FA]">
        <div className="main-book-demo flex justify-center items-center gap- flex-wrap">
          <div className="left-book-demo w-1/2">
            <h1>Lorem ipsum dolor sit</h1>
            <p className="mt-6">
              Lorem ipsum dolor sit amet consectetur. Velit faucibus dignissim
              cursus varius ut. Quam a quam tincidunt ut et ullamcorper.
            </p>
          </div>
          <div className="right-book-demo">
            <Link onClick={scrollToTop} to={"/contact"}>
              <button>Book a Demo</button>
            </Link>
          </div>
        </div>
      </section>

      <section class="review-section flex items-center justify-center mt-20 mb-20 max-sm:mt-0">
        <div class="main-review flex mt-20 max-sm:mt-0">
          <div class="left-review">
            <div class="head-review">
              <h1 class="mt-8">Reviews</h1>
              <p class="pb-8 pt-2">
                Lorem ipsum dolor sit amet consectetur. Velit faucibus dignissim
                cursus varius ut.
              </p>
              <button class="clutch">Clutch</button>
            </div>

            <div class="review-card flex-col mt-20">
              <div class="review-card-pera">
                Lorem ipsum dolor sit amet consectetur. Eget mattis amet elit
                nulla nisl sagittis quis eleifend. Mi nibh pellentesque morbi et
                arcu pulvinar. Pulvinar commodo.
              </div>
              <div class="profile  flex items-center justify-center mt-6">
                <p class="profile-circle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="34"
                    height="35"
                    viewBox="0 0 34 35"
                    fill="none"
                  >
                    <circle
                      cx="16.9097"
                      cy="17.4772"
                      r="16.8743"
                      fill="#D9D9D9"
                    />
                  </svg>
                </p>

                <span class="review-name mx-4">Lorem ipsum</span>
              </div>
            </div>
            <div class="review-card flex-col mt-10">
              <div class="review-card-pera">
                Lorem ipsum dolor sit amet consectetur. Velit ut nisl donec hac
                quis eget. Duis et enim pellentesque praesent quam eleifend
                nisl. Nunc at a luctus pharetra. Faucibus vitae sed consequat mi
                varius id eget sed ac. Gravida tristique venenatis urna
                ultrices. Aliquam tortor faucibus ipsum.
              </div>
              <div class="profile  flex items-center justify-center mt-6">
                <p class="profile-circle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="34"
                    height="35"
                    viewBox="0 0 34 35"
                    fill="none"
                  >
                    <circle
                      cx="16.9097"
                      cy="17.4772"
                      r="16.8743"
                      fill="#D9D9D9"
                    />
                  </svg>
                </p>

                <span class="review-name mx-4">Lorem ipsum</span>
              </div>
            </div>
            <div class="review-card flex-col mt-10">
              <div class="review-card-pera">
                Lorem ipsum dolor sit amet consectetur. Vitae nibh mattis in at
                ornare. Nibh praesent eget vitae tortor erat. Lobortis ultricies
                est quis malesuada id at ac luctus. Nisi massa gravida
                ullamcorper convallis senectus vulputate nunc. In quis id vitae
                vel quisque amet turpis elit. Tortor at adipiscing metus urna
                convallis risus nibh. Lacus posuere orci accumsan lorem augue.
              </div>
              <div class="profile  flex items-center justify-center mt-6">
                <p class="profile-circle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="34"
                    height="35"
                    viewBox="0 0 34 35"
                    fill="none"
                  >
                    <circle
                      cx="16.9097"
                      cy="17.4772"
                      r="16.8743"
                      fill="#D9D9D9"
                    />
                  </svg>
                </p>

                <span class="review-name mx-4">Lorem ipsum</span>
              </div>
            </div>
          </div>
          <div class="right-review ml-8">
            <div class="review-card flex-col mt-10">
              <div class="review-card-pera">
                Lorem ipsum dolor sit amet consectetur. Vitae nibh mattis in at
                ornare. Nibh praesent eget vitae tortor erat. Lobortis ultricies
                est quis malesuada id at ac luctus. Nisi massa gravida
                ullamcorper convallis senectus vulputate nunc. In quis id vitae
                vel quisque amet turpis elit. Tortor at adipiscing metus urna
                convallis risus nibh. Lacus posuere orci accumsan lorem augue.
              </div>
              <div class="profile  flex items-center justify-center mt-6">
                <p class="profile-circle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="34"
                    height="35"
                    viewBox="0 0 34 35"
                    fill="none"
                  >
                    <circle
                      cx="16.9097"
                      cy="17.4772"
                      r="16.8743"
                      fill="#D9D9D9"
                    />
                  </svg>
                </p>

                <span class="review-name mx-4">Lorem ipsum</span>
              </div>
            </div>
            <div class="review-card flex-col mt-10">
              <div class="review-card-pera">
                Lorem ipsum dolor sit amet consectetur. Vitae nibh mattis in at
                ornare. Nibh praesent eget vitae tortor erat. Lobortis ultricies
                est quis malesuada id at ac luctus. Nisi massa gravida
                ullamcorper convallis senectus vulputate nunc. In quis id vitae
                vel quisque amet turpis elit. Tortor at adipiscing metus urna
                convallis risus nibh. Lacus posuere orci accumsan lorem augue.
              </div>
              <div class="profile  flex items-center justify-center mt-6">
                <p class="profile-circle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="34"
                    height="35"
                    viewBox="0 0 34 35"
                    fill="none"
                  >
                    <circle
                      cx="16.9097"
                      cy="17.4772"
                      r="16.8743"
                      fill="#D9D9D9"
                    />
                  </svg>
                </p>

                <span class="review-name mx-4">Lorem ipsum</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
