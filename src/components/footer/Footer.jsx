import React from "react";
import "./footer.scss";
import logfooter from "./assets/Sea Transparant 1.svg";
import tweet from "./assets/Vector (2).svg";
import tweet2 from "./assets/Vector (3).svg";
import tweet3 from "./assets/Vector.svg";
import air from "./assets/airbtn.svg";
import verbo from "./assets/image 24.svg";
import tweet4 from "./assets/facebook-3-3 2.svg";
import { Link, useLocation } from "react-router-dom";

import Vector from "./assets/Ellipse 2471.png";
import Vector2 from "./assets/Ellipse 2471 (2).png";
const Footer = () => {
  const url = useLocation();
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  if (url.pathname === "/contact") {
    return (
      <>
        {/* <section className="book-demo-footer mt-10 bg-[#F4F7FA]">
        <div className="main-book-demo flex justify-center items-center gap- flex-wrap">
          <div className="left-book-demo w-1/2">
            <h1>Lorem ipsum dolor sit</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur. Velit faucibus dignissim
              cursus varius ut. Quam a quam tincidunt ut et ullamcorper.
            </p>
          </div>
          <div className="right-book-demo">
            <Link onClick={scrollToTop} to={"/product"}>
              <button>Start your free trial</button>
            </Link>
          </div>
        </div>
      </section> */}
        <footer class="mt-20 relative">
          <div className="circle-footer-contat">
            <img src={Vector2} alt="" />
          </div>
          <div class="footer-section  flex items-start justify-start w-full pl-12 pb-8">
            <div class="left-foot ml6 w-[50%]  ">
              <div className="footer-logo-new">
                <img class="w-[124px] h-[44px]" src={logfooter} alt="" />
                <p class="mt-9">
                  Lorem ipsum dolor sit amet, consectetur. Velit faucibus
                </p>
              </div>

              <div className="flex-col justify-start items-start gap-2.5 inline-flex mt-7">
                <div className="text-zinc-800 text-sm font-normal font-['Poppins']">
                  hello@sea.com
                </div>
                <div className="text-zinc-800 text-sm font-normal font-['Poppins']">
                  +1 (680) 445-0901
                </div>
              </div>

              <div class="follow-us flex items-start justify-start mt-5 mb-10">
                <div class="follow mr-6">Follow us on</div>
                <div class="link-icon flex mr-5 ">
                  <img src={tweet3} alt="" />
                  <img src={tweet} alt="" />
                  <img src={tweet4} alt="" />
                  <img src={tweet2} alt="" />
                </div>
              </div>

              <div className="opacity-50 text-zinc-800 text-[13px] font-normal font-['Poppins']">
                @2023 SEA Technologies. All rights reserved.
              </div>
            </div>

            <div class="right-foot -mr-5 w-[50%]">
              <div className="justify-start items-start gap-[93px] inline-flex  quick-links">
                <div className="flex-col justify-start items-start gap-5 inline-flex">
                  <div className="text-zinc-800 text-base font-semibold font-['Poppins']">
                    Company
                  </div>
                  <div className="rounded-[26px] flex-col justify-center items-start gap-2 flex">
                    <div className="text-zinc-800 text-sm font-normal font-['Poppins']">
                      <Link onClick={scrollToTop} to={"/price"}>
                        Pricing
                      </Link>
                    </div>
                    {/* <div className="text-zinc-800 text-sm font-normal font-['Poppins']">
                      <Link onClick={scrollToTop} to={"/blog"}>
                        Blogs
                      </Link>
                    </div> */}
                    {/* <div className="text-zinc-800 text-sm font-normal font-['Poppins']">
                      <Link onClick={scrollToTop} to={"/contact"}>
                        Contact Us
                      </Link>
                    </div> */}
                    <div className="text-zinc-800 text-sm font-normal font-['Poppins']">
                      <Link onClick={scrollToTop} to={"/owner"}>
                        Meet the owner
                      </Link>
                    </div>
                    <div className="text-zinc-800 text-sm font-normal font-['Poppins']">
                      <Link onClick={scrollToTop} to={"/freetrail"}>
                        Free trial
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="flex-col justify-start items-start gap-5 inline-flex">
                  <div className="text-zinc-800 text-base font-semibold font-['Poppins']">
                    Tools
                  </div>
                  <div className="rounded-[26px] flex-col justify-center items-start gap-2 flex">
                    <div className="self-stretch text-zinc-800 text-sm font-normal font-['Poppins']">
                      <Link onClick={scrollToTop} to={"/product"}>
                        Local SERP Checker{" "}
                      </Link>
                    </div>

                    <div className="text-zinc-800 text-sm font-normal font-['Poppins']">
                      <Link onClick={scrollToTop} to={"/product"}>
                        ROAS Calculator
                      </Link>
                    </div>
                    <div className="text-zinc-800 text-sm font-normal font-['Poppins']">
                      <Link onClick={scrollToTop} to={"/product"}>
                        FAQ Generator
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="flex-col justify-start items-start gap-5 inline-flex">
                  <div className="text-zinc-800 text-base font-semibold font-['Poppins']">
                    {/* <Link onClick={scrollToTop} to={"/support"}> */}
                    Help
                    {/* </Link> */}
                  </div>
                  <div className="rounded-[26px] flex-col justify-center items-start gap-2 flex">
                    <div className="self-stretch text-zinc-800 text-sm font-normal font-['Poppins']">
                      <Link to="/support">Support</Link>
                    </div>
                    <div className="text-zinc-800 text-sm font-normal font-['Poppins']">
                      <Link onClick={scrollToTop} to={"/contact"}>
                        Contact Us
                      </Link>
                    </div>
                    <div className="text-zinc-800 text-sm font-normal font-['Poppins']">
                      <Link onClick={scrollToTop} to={"/blog"}>
                        Blogs
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </>
    );
  } else if (url.pathname === "/login") {
    return (
      <>
        <div className="circle-footer-login">
          <img src={Vector} alt="" />
        </div>

        <footer class="mt-40">
          <div class="footer-section  flex items-start justify-start w-full pl-12 pb-8">
            <div class="left-foot ml6 w-[50%]  ">
              <div className="footer-logo-new">
                <img class="w-[124px] h-[44px]" src={logfooter} alt="" />
                <p class="mt-9">
                  Lorem ipsum dolor sit amet, consectetur. Velit faucibus
                </p>
              </div>

              <div className="flex-col justify-start items-start gap-2.5 inline-flex mt-7">
                <div className="text-zinc-800 text-sm font-normal font-['Poppins']">
                  hello@sea.com
                </div>
                <div className="text-zinc-800 text-sm font-normal font-['Poppins']">
                  +1 (680) 445-0901
                </div>
              </div>

              <div class="follow-us flex items-start justify-start mt-5 mb-10">
                <div class="follow mr-6">Follow us on</div>
                <div class="link-icon flex mr-5 ">
                  <img src={tweet3} alt="" />
                  <img src={tweet} alt="" />
                  <img src={tweet4} alt="" />
                  <img src={tweet2} alt="" />
                </div>
              </div>

              <div className="opacity-50 text-zinc-800 text-[13px] font-normal font-['Poppins']">
                @2023 SEA Technologies. All rights reserved.
              </div>
            </div>

            <div class="right-foot -mr-5 w-[50%]">
              <div className="justify-start items-start gap-[93px] inline-flex  quick-links">
                <div className="flex-col justify-start items-start gap-5 inline-flex">
                  <div className="text-zinc-800 text-base font-semibold font-['Poppins']">
                    Company
                  </div>
                  <div className="rounded-[26px] flex-col justify-center items-start gap-2 flex">
                    <div className="text-zinc-800 text-sm font-normal font-['Poppins']">
                      <Link onClick={scrollToTop} to={"/price"}>
                        Pricing
                      </Link>
                    </div>
                    {/* <div className="text-zinc-800 text-sm font-normal font-['Poppins']">
                      <Link onClick={scrollToTop} to={"/blog"}>
                        Blogs
                      </Link>
                    </div> */}
                    {/* <div className="text-zinc-800 text-sm font-normal font-['Poppins']">
                      <Link onClick={scrollToTop} to={"/contact"}>
                        Contact Us
                      </Link>
                    </div> */}
                    <div className="text-zinc-800 text-sm font-normal font-['Poppins']">
                      <Link onClick={scrollToTop} to={"/owner"}>
                        Meet the owner
                      </Link>
                    </div>
                    <div className="text-zinc-800 text-sm font-normal font-['Poppins']">
                      <Link onClick={scrollToTop} to={"/freetrail"}>
                        Free trial
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="flex-col justify-start items-start gap-5 inline-flex">
                  <div className="text-zinc-800 text-base font-semibold font-['Poppins']">
                    Tools
                  </div>
                  <div className="rounded-[26px] flex-col justify-center items-start gap-2 flex">
                    <div className="self-stretch text-zinc-800 text-sm font-normal font-['Poppins']">
                      <Link onClick={scrollToTop} to={"/product"}>
                        Local SERP Checker{" "}
                      </Link>
                    </div>

                    <div className="text-zinc-800 text-sm font-normal font-['Poppins']">
                      <Link onClick={scrollToTop} to={"/product"}>
                        ROAS Calculator
                      </Link>
                    </div>
                    <div className="text-zinc-800 text-sm font-normal font-['Poppins']">
                      <Link onClick={scrollToTop} to={"/product"}>
                        FAQ Generator
                      </Link>
                    </div>
                    <div className="text-zinc-800 text-sm font-normal font-['Poppins']">
                      <Link onClick={scrollToTop} to={"/user"}>
                        user
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="flex-col justify-start items-start gap-5 inline-flex">
                  <div className="text-zinc-800 text-base font-semibold font-['Poppins']">
                    {/* <Link onClick={scrollToTop} to={"/support"}> */}
                    Help
                    {/* </Link> */}
                  </div>
                  <div className="rounded-[26px] flex-col justify-center items-start gap-2 flex">
                    <div className="self-stretch text-zinc-800 text-sm font-normal font-['Poppins']">
                      <Link onClick={scrollToTop} to="/support">
                        Support
                      </Link>
                    </div>
                    <div className="text-zinc-800 text-sm font-normal font-['Poppins']">
                      <Link onClick={scrollToTop} to={"/contact"}>
                        Contact Us
                      </Link>
                    </div>
                    <div className="text-zinc-800 text-sm font-normal font-['Poppins']">
                      <Link onClick={scrollToTop} to={"/blog"}>
                        Blogs
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </>
    );
  } else if (url.pathname === "/signup") {
    return (
      <>
        <div className="circle-footer-login">
          <img src={Vector} alt="" />
        </div>

        <footer class="mt-40">
          <div class="footer-section  flex items-start justify-start w-full pl-12 pb-8">
            <div class="left-foot ml6 w-[50%]  ">
              <div className="footer-logo-new">
                <img class="w-[124px] h-[44px]" src={logfooter} alt="" />
                <p class="mt-9">
                  Lorem ipsum dolor sit amet, consectetur. Velit faucibus
                </p>
              </div>

              <div className="flex-col justify-start items-start gap-2.5 inline-flex mt-7">
                <div className="text-zinc-800 text-sm font-normal font-['Poppins']">
                  hello@sea.com
                </div>
                <div className="text-zinc-800 text-sm font-normal font-['Poppins']">
                  +1 (680) 445-0901
                </div>
              </div>

              <div class="follow-us flex items-start justify-start mt-5 mb-10">
                <div class="follow mr-6">Follow us on</div>
                <div class="link-icon flex mr-5 ">
                  <img src={tweet3} alt="" />
                  <img src={tweet} alt="" />
                  <img src={tweet4} alt="" />
                  <img src={tweet2} alt="" />
                </div>
              </div>

              <div className="opacity-50 text-zinc-800 text-[13px] font-normal font-['Poppins']">
                @2023 SEA Technologies. All rights reserved.
              </div>
            </div>

            <div class="right-foot -mr-5 w-[50%]">
              <div className="justify-start items-start gap-[93px] inline-flex  quick-links">
                <div className="flex-col justify-start items-start gap-5 inline-flex">
                  <div className="text-zinc-800 text-base font-semibold font-['Poppins']">
                    Company
                  </div>
                  <div className="rounded-[26px] flex-col justify-center items-start gap-2 flex">
                    <div className="text-zinc-800 text-sm font-normal font-['Poppins']">
                      <Link onClick={scrollToTop} to={"/price"}>
                        Pricing
                      </Link>
                    </div>
                    {/* <div className="text-zinc-800 text-sm font-normal font-['Poppins']">
                      <Link onClick={scrollToTop} to={"/blog"}>
                        Blogs
                      </Link>
                    </div> */}
                    {/* <div className="text-zinc-800 text-sm font-normal font-['Poppins']">
                      <Link onClick={scrollToTop} to={"/contact"}>
                        Contact Us
                      </Link>
                    </div> */}
                    <div className="text-zinc-800 text-sm font-normal font-['Poppins']">
                      <Link onClick={scrollToTop} to={"/owner"}>
                        Meet the owner
                      </Link>
                    </div>
                    <div className="text-zinc-800 text-sm font-normal font-['Poppins']">
                      <Link onClick={scrollToTop} to={"/freetrail"}>
                        Free trial
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="flex-col justify-start items-start gap-5 inline-flex">
                  <div className="text-zinc-800 text-base font-semibold font-['Poppins']">
                    Tools
                  </div>
                  <div className="rounded-[26px] flex-col justify-center items-start gap-2 flex">
                    <div className="self-stretch text-zinc-800 text-sm font-normal font-['Poppins']">
                      <Link onClick={scrollToTop} to={"/product"}>
                        Local SERP Checker{" "}
                      </Link>
                    </div>

                    <div className="text-zinc-800 text-sm font-normal font-['Poppins']">
                      <Link onClick={scrollToTop} to={"/product"}>
                        ROAS Calculator
                      </Link>
                    </div>
                    <div className="text-zinc-800 text-sm font-normal font-['Poppins']">
                      <Link onClick={scrollToTop} to={"/product"}>
                        FAQ Generator
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="flex-col justify-start items-start gap-5 inline-flex">
                  <div className="text-zinc-800 text-base font-semibold font-['Poppins']">
                    {/* <Link onClick={scrollToTop} to={"/support"}> */}
                    Help
                    {/* </Link> */}
                  </div>
                  <div className="rounded-[26px] flex-col justify-center items-start gap-2 flex">
                    <div className="self-stretch text-zinc-800 text-sm font-normal font-['Poppins']">
                      <Link onClick={scrollToTop} to="/support">
                        Support
                      </Link>
                    </div>
                    <div className="text-zinc-800 text-sm font-normal font-['Poppins']">
                      <Link onClick={scrollToTop} to={"/contact"}>
                        Contact Us
                      </Link>
                    </div>
                    <div className="text-zinc-800 text-sm font-normal font-['Poppins']">
                      <Link onClick={scrollToTop} to={"/blog"}>
                        Blogs
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </>
    );
  } else {
    return (
      <>
        {/* <div class="circle-button">
        <span>Hover me!</span>
      </div> */}

        {/* <section className="book-demo-footer pt-0 bg-[#F4F7FA]">
          <div className="main-book-demo flex justify-center items-center gap- flex-wrap">
            <div className="left-book-demo w-1/2 max-md:w-full">
              <h1>Lorem ipsum dolor sit</h1>
              <p className="mt-4">
                Lorem ipsum dolor sit amet consectetur. Velit faucibus dignissim
                cursus varius ut. Quam a quam tincidunt ut et ullamcorper.
              </p>
            </div>
            <div className="right-book-demo">
              <Link onClick={scrollToTop} to={"/product"}>
                <button>Start your free trial</button>
              </Link>
            </div>
          </div>
        </section> */}

        {/* <section>
        <div className="airbnb-btns">
          <button className="airbtn"></button>
          <button className="verbo-btn"></button>
        </div>
      </section> */}

        <footer class="mt-5">
          <div class="footer-section  flex items-start justify-start w-full pl-12 pb-8">
            <div class="left-foot ml6 w-[50%]  ">
              <div className="footer-logo-new">
                <Link className="cursor-pointer" to="/">
                  <img class="w-[124px] h-[44px]" src={logfooter} alt="" />
                </Link>
                <p class="mt-9">
                  Lorem ipsum dolor sit amet, consectetur. Velit faucibus
                </p>
              </div>

              <div className="flex-col justify-start items-start gap-2.5 inline-flex mt-7">
                <div className="text-zinc-800 text-sm font-normal font-['Poppins']">
                  hello@sea.com
                </div>
                <div className="text-zinc-800 text-sm font-normal font-['Poppins']">
                  +1 (680) 445-0901
                </div>
              </div>

              <div class="follow-us flex items-start justify-start mt-5 mb-10">
                <div class="follow mr-6">Follow us on</div>
                <div class="link-icon flex mr-5 ">
                  <img src={tweet3} alt="" />
                  <img src={tweet} alt="" />
                  <img src={tweet4} alt="" />
                  <img src={tweet2} alt="" />
                </div>
              </div>

              <div className="opacity-50 text-zinc-800 text-[13px] font-normal font-['Poppins']">
                @2023 SEA Technologies. All rights reserved.
              </div>
            </div>

            <div class="right-foot -mr-5 w-[50%]">
              <div className="justify-start items-start gap-[93px] inline-flex  quick-links">
                <div className="flex-col justify-start items-start gap-5 inline-flex">
                  <div className="text-zinc-800 text-base font-semibold font-['Poppins']">
                    Company
                  </div>
                  <div className="rounded-[26px] flex-col justify-center items-start gap-2 flex">
                    <div className="text-zinc-800 text-sm font-normal font-['Poppins']">
                      <Link onClick={scrollToTop} to={"/price"}>
                        Pricing
                      </Link>
                    </div>
                    {/* <div className="text-zinc-800 text-sm font-normal font-['Poppins']">
                      <Link onClick={scrollToTop} to={"/blog"}>
                        Blogs
                      </Link>
                    </div> */}
                    {/* <div className="text-zinc-800 text-sm font-normal font-['Poppins']">
                      <Link onClick={scrollToTop} to={"/contact"}>
                        Contact Us
                      </Link>
                    </div> */}
                    <div className="text-zinc-800 text-sm font-normal font-['Poppins']">
                      <Link onClick={scrollToTop} to={"/owner"}>
                        Meet the owner
                      </Link>
                    </div>
                    <div className="text-zinc-800 text-sm font-normal font-['Poppins']">
                      <Link onClick={scrollToTop} to={"/freetrail"}>
                        Free trial
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="flex-col justify-start items-start gap-5 inline-flex">
                  <div className="text-zinc-800 text-base font-semibold font-['Poppins']">
                    Tools
                  </div>
                  <div className="rounded-[26px] flex-col justify-center items-start gap-2 flex">
                    <div className="self-stretch text-zinc-800 text-sm font-normal font-['Poppins']">
                      <Link onClick={scrollToTop} to={"/product"}>
                        Local SERP Checker{" "}
                      </Link>
                    </div>

                    <div className="text-zinc-800 text-sm font-normal font-['Poppins']">
                      <Link onClick={scrollToTop} to={"/product"}>
                        ROAS Calculator
                      </Link>
                    </div>
                    <div className="text-zinc-800 text-sm font-normal font-['Poppins']">
                      <Link onClick={scrollToTop} to={"/product"}>
                        FAQ Generator
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="flex-col justify-start items-start gap-5 inline-flex">
                  <div className="text-zinc-800 text-base font-semibold font-['Poppins']">
                    {/* <Link onClick={scrollToTop} to={"/support"}> */}
                    Help
                    {/* </Link> */}
                  </div>
                  <div className="rounded-[26px] flex-col justify-center items-start gap-2 flex">
                    <div className="self-stretch text-zinc-800 text-sm font-normal font-['Poppins']">
                      <Link onClick={scrollToTop} to="/support">
                        Support
                      </Link>
                    </div>
                    <div className="text-zinc-800 text-sm font-normal font-['Poppins']">
                      <Link onClick={scrollToTop} to={"/contact"}>
                        Contact Us
                      </Link>
                    </div>
                    <div className="text-zinc-800 text-sm font-normal font-['Poppins']">
                      <Link onClick={scrollToTop} to={"/blog"}>
                        Blogs
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </>
    );
  }
};

export default Footer;
