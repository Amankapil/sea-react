import React from "react";
import "./featured.scss";
import right from "../Heropricing/right.svg";
import downar from "./down.svg";

import img from "../Heropricing/esc.svg";
import { Link } from "react-router-dom";
const Featured = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <>
      <div className="featured flex justify-center items-start gap-20 px-20 pt-52 flex-wrap">
        <div className="left-featured w-[316px] flex flex-col gap-6">
          <div className="head-left-featured">
            <h1>Features List in different prices</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur. Non sit scelerisque
              habitant faucibus.
            </p>
          </div>

          <div className="about-features w-[266px] flex flex-col gap-8">
            <div className="lorem-ecsclaim">
              <div className="flex justify-between head-subleft">
                <h3>Lorem ipsum dolor sit amet</h3>
                <img src={img} alt="" />
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur. Dictum sed est nunc
                platea accumsan. Vitae a eget lacus
              </p>
            </div>
            <div className="lorem-ecsclaim">
              <div className="flex justify-between head-subleft">
                <h3>Lorem ipsum dolor sit amet</h3>
                <img src={img} alt="" />
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur. Dictum sed est nunc
                platea accumsan. Vitae a eget lacus
              </p>
            </div>
            <div className="lorem-ecsclaim">
              <div className="flex justify-between head-subleft">
                <h3>Lorem ipsum dolor sit amet</h3>
                <img src={img} alt="" />
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur. Dictum sed est nunc
                platea accumsan. Vitae a eget lacus
              </p>
            </div>
          </div>
        </div>
        <div className="right-featured">
          <div className="plan-details flex justify-center items-center gap-12 flex-wrap">
            <div className="plan-one-feature ">
              <div className="head-plan flex  bg-[#EBF2FF] justify-center flex-col items-center gap-7 ">
                <div className="justify-between items-start flex w-[219px]">
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

              <div className="plan-keys flex flex-col gap-6 p-4">
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
              </div>
            </div>
            <div className="plan-one-feature ">
              {/* <div className="most-popular">
              <span>Most Popular</span>
            </div> */}

              <div className="head-plan flex  bg-[#EBF2FF] justify-center flex-col items-center gap-7 ">
                <div className="justify-between items-start flex w-[219px]">
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

              <div className="plan-keys flex flex-col gap-6 p-4">
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
              </div>
            </div>
            <div className="plan-one-feature">
              <div className="head-plan flex  bg-[#EBF2FF] justify-center flex-col items-center gap-7 ">
                <div className="justify-between items-start flex w-[219px]">
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

              <div className="plan-keys flex flex-col gap-6 p-4">
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
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center items-center see-more-btn mt-12">
        <button className="flex items-center">
          Show more <img src={downar} alt="" />
        </button>
      </div>
    </>
  );
};

export default Featured;
