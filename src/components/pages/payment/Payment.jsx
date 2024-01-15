import React, { useState } from "react";
import img from "./assets/image 3 (1).png";
import img2 from "./assets/image 4.png";
import img3 from "./assets/image 6 (1).png";
import img4 from "./assets/image 6 (1).png";
import ppl from "./assets/pappl.svg";
import right from "./assets/rigth.svg";
import { Link } from "react-router-dom";

const Payment = ({ toggleAccordion }) => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordionn = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // home apge testmonila above section 
  // about page hero dot 
  // use conten home page
  // test space 
  // navigate fulll
  // ?b2b b2c button after img
  // contact space
  // 800
  // form left center
  // test alignment 
  // alternate
  // form height
  // about 31 bottom
  // last team member

  // contact page footer space
  // about page tab
  // b2b hero section tab
  // about page 820
  const faqData = [

    {
      question: (
        <>
          {" "}
          <div className="w-[518px] max-md:w-full h-[60px] relative bg-blue-50 rounded-md">
            <div className="left-[0px] top-[18px] absolute justify-start items-start gap-4 inline-flex">
              <div className="w-6 h-6 relative" />
              <div className="text-indigo-700 justify-center items-center text-base font-medium font-['poppins'] capitalize leading-normal flex gap-4">
                <input
                  id="creditCard"
                  type="radio"
                  onChange={() => toggleAccordion(0)} // Use a unique index for each radio button
                  checked={activeIndex === 0}
                />
                <label for="creditCard">Credit Card</label>
              </div>
            </div>
            <div className="left-[267px] max-md:left-[180px] top-[18px] absolute justify-start items-start gap-2 inline-flex max-[390px]:hidden">
              <img alt="" className="w-[38px] h-6" src={img} />
              <img alt="" className="w-[38px] h-6" src={img2} />
              <img alt="" className="w-[38px] h-6" src={img3} />
              <img alt="" className="w-[38px] h-6" src={img4} />
            </div>
            <div className="px-[11px] py-[3px] left-[451px] max-md:left-[320px] top-[18px] absolute bg-white justify-center items-center inline-flex">
              <div className="text-indigo-700 text-xs font-normal font-['Inter'] capitalize leading-[18px]">
                +4
              </div>
            </div>
          </div>
        </>
      ),
      answer: (
        <>
          <div className="credit-details w-[518px] max-md:w-full">
            <div className="save-sucess flex gap-20">
              {/* <div className="username-profile flex flex-col gap-4 justify-start">
                    <label htmlFor="Card-Number">Card Number</label>
                    <input
                      id="Card-Number"
                      type="text"
                      placeholder="989890 989"
                    />
                  </div> */}
              <div className="username-profile flex flex-col gap-4 justify-start w-full mt-5">
                <label htmlFor="Card-Holder">Card Holder Name</label>
                <input
                  id="Card-Holder"
                  type="text"
                  placeholder="989890 989"
                  className="w-full"
                />
              </div>
            </div>
            <div className="save-sucess flex gap-8 mt-6">
              <div className="username-profile flex flex-col gap-4 justify-start  w-[46%]">
                <label htmlFor="Card-Number">Valid through </label>
                <input
                  id="Valid-through"
                  type="text"
                  placeholder="MM/YY"
                  //   className=" w-[80%]"
                />
              </div>
              <div className="username-profile flex flex-col gap-4 justify-start  w-[46%]">
                <label htmlFor="Card-Holder">CVC</label>
                <input
                  id="CVC"
                  type="text"
                  placeholder="CVC"
                  //   className="w-[80%]"
                />
              </div>
            </div>
            <div className="username-profile flex flex-col gap-4 justify-start mt-5">
              <label htmlFor="Card-Holder">Card Holder Name</label>
              <input id="Card-Holder" type="text" placeholder="Ultrices nunc" />
            </div>

            <div className="secur mt-8 mb-4">
              <p>
                Your data is properly secured. We use SSL encryption and are PCI
                DSS-compliant
              </p>
            </div>

            <div className="left-box-tick flex items-center justify-start gap-2">
              <input
                type="checkbox"
                id="vehicle1"
                name="vehicle1"
                value="Bike"
              />
              <label for="vehicle1">
                <span className="remenber">
                  Save this card for all the future purchases
                </span>
              </label>
            </div>

            <div className="password-save mt-5">
              <div className="username-profile flex flex-col gap-4 justify-start">
                <button className="save-btn-payment">
                  <span>Save payment method</span>
                </button>
              </div>
            </div>
          </div>
        </>
      ),
    },
    {
      question: (
        <>
          <div className="pay-palbtn mt-0 max-sm:w-full">
            <div className="w-[518px] max-md:w-full h-[60px] relative bg-blue-50 rounded-md flex justify-between items-center px-10">
              <div className="left- top-[18px]  justify-start items-start gap-4 inline-flex">
                <div className="text-indigo-700 text-base font-medium items-center font-['poppins'] capitalize leading-normal flex gap-4">
                  <input
                    id="paypl"
                    type="radio"
                    onChange={() => toggleAccordion(1)} // Use a unique index for each radio button
                    checked={activeIndex === 1}
                  />
                  <label htmlFor="paypl">PayPal</label>
                </div>
              </div>
              <div className="left-[ top-[18px]  justify-start items-start gap-2 inline-flex">
                <img alt="" className="w-[38px] h-6" src={ppl} />
              </div>
            </div>
          </div>
        </>
      ),
      //   answer: "You can do XYZ by...",
    },

    // Add more FAQ items as needed
  ];
  return (
    <>
      <div className="patment-page pt-[80px] pb-20 max-md:pl-2 ">
        <div className="main-payment  pl-[71px] flex justify- gap-32 max-md:flex-wrap max-sm:pl-2">
          <div className="left-payment-details">
            <div className="payment-method-page">
              <div className="head-profile-setting">
                <h1>Profile settings</h1>
              </div>

              <div className="paypal-button">
                <button className="w-[518px] max-md:w-full h-20 flex-col justify-start items-start gap-4 inline-flex">
                  <div className="opacity-60 text-stone-950 text-xs font-normal font-['poppins'] leading-[18px]">
                    Express checkout
                  </div>
                  <div className="self-stretch h-[46px] bg-amber-400 rounded-md justify-center items-center gap-[83px] inline-flex">
                    <img alt="paypalbtn" className="w-[104px] h-8" src={ppl} />
                  </div>
                </button>
              </div>

              <div className="or-btn my-6">
                <div className="w-[518px] max-md:w-full h-[18px] opacity-60 justify-center items-center gap-[22px] inline-flex">
                  <div className="grow shrink basis-0 h-[0px] border border-black"></div>
                  <div className="text-stone-950 text-xs font-normal font-['poppins'] leading-[18px]">
                    or
                  </div>
                  <div className="grow shrink basis-0 h-[0px] border border-black"></div>
                </div>
              </div>

              <div>
                {faqData.map((faq, index) => (
                  <div
                    className="accordion-ite py-4 my-4 max-md:px-4"
                    key={index}
                  >
                    <div
                      className="accordion-heade flex justify-between"
                      onClick={() => toggleAccordionn(index)}
                    >
                      {faq.question}
                    </div>
                    {activeIndex === index && (
                      <div className="accordion-content">
                        <p>{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
                <div className="credit-card-btn">
                  {/* <div className="w-[518px] h-[60px] relative bg-blue-50 rounded-md">
                    <div className="left-[24px] top-[18px] absolute justify-start items-start gap-4 inline-flex">
                      <div className="w-6 h-6 relative" />
                      <div className="text-indigo-700 text-base font-medium font-['poppins'] capitalize leading-normal flex gap-4">
                        <input id="creditCard" type="radio" />
                        <label htmlFor="creditCard">Credit Card</label>
                      </div>
                    </div>
                    <div className="left-[267px] top-[18px] absolute justify-start items-start gap-2 inline-flex">
                      <img alt="" className="w-[38px] h-6" src={img} />
                      <img alt="" className="w-[38px] h-6" src={img2} />
                      <img alt="" className="w-[38px] h-6" src={img3} />
                      <img alt="" className="w-[38px] h-6" src={img4} />
                    </div>
                    <div className="px-[11px] py-[3px] left-[451px] top-[18px] absolute bg-white justify-center items-center inline-flex">
                      <div className="text-indigo-700 text-xs font-normal font-['Inter'] capitalize leading-[18px]">
                        +4
                      </div>
                    </div>
                  </div> */}

                  {/* credit-card-form */}
                </div>
              </div>
            </div>

            <div className="billing-address-page w-[518px] max-md:w-full max-md:px-4">
              <div className="head-subscription mb-10">
                <h1>Billing details</h1>
              </div>
              <div className="postal-addres">
                <div className="credit-details">
                  <div className="save-sucess flex gap-12 w- mt-5">
                    <div className="username-profile flex flex-col gap-4 justify-start w-[50%]">
                      <label htmlFor="Card-Number">First name</label>
                      <input
                        id="Card-Number"
                        type="text"
                        placeholder="Tellus diam varius"
                      />
                    </div>
                    <div className="username-profile flex flex-col gap-4 justify-start w-[50%]">
                      <label htmlFor="Card-Holder">Last Name</label>
                      <input
                        id="Card-Holder"
                        type="text"
                        placeholder="Ultrices nunc"
                      />
                    </div>
                  </div>
                  <div className="save-sucess flex gap-12 w-  mt-5">
                    <div className="username-profile flex flex-col gap-4 justify-start w-[50%]">
                      <label htmlFor="Card-Number">Country</label>
                      <input
                        id="Card-Number"
                        type="text"
                        placeholder="Cursus ipsum"
                      />
                    </div>
                    <div className="username-profile flex flex-col gap-4 justify-start w-[50%]">
                      <label htmlFor="Card-Holder">Town/City</label>
                      <input
                        id="Card-Holder"
                        type="text"
                        placeholder="Auctor rhoncus nunc"
                      />
                    </div>
                  </div>
                  <div className="save-sucess flex gap-12 w-  mt-5">
                    <div className="username-profile flex flex-col gap-4 justify-start w-[50%]">
                      <label htmlFor="Card-Number">Street Address</label>
                      <input
                        id="Card-Number"
                        type="text"
                        placeholder="Pretium leo ultricies"
                      />
                    </div>
                    <div className="username-profile flex flex-col gap-4 justify-start w-[50%]">
                      <label htmlFor="Card-Holder">State/Province</label>
                      <input
                        id="Card-Holder"
                        type="text"
                        placeholder="Cras neque eget nisl"
                      />
                    </div>
                  </div>
                  <div className="save-sucess flex gap-12 w-[46%] mt-5 max-sm:w-full ">
                    <div className="username-profile flex flex-col gap-4 justify-start">
                      <label htmlFor="Card-Number">Postal ZIP Code</label>
                      <input
                        id="Card-Number"
                        type="text"
                        placeholder="Dictumst posuere sit"
                      />
                    </div>
                  </div>
                  <div className="save-sucess flex gap-12  mt-5">
                    <div className="username-profile flex flex-col gap-4 justify-start w-full w">
                      <label htmlFor="Card-Number">Email</label>
                      <input
                        id="Card-Number"
                        type="text"
                        placeholder="example@gmail.com"
                      />
                    </div>
                  </div>

                  <div className="left-box-tick flex items-center justify-start gap-2 mt-6">
                    <input
                      type="checkbox"
                      id="vehicle1"
                      name="vehicle1"
                      value="Bike"
                    />
                    <label for="vehicle1">
                      <span className="remenber">
                        Save this card for all the future purchases
                      </span>
                    </label>
                  </div>

                  {/* <div className="password-save mt-8">
                    <div className="username-profile flex flex-col gap-4 justify-start w-[20%]">
                      <button className="save-btn-payment">
                        <span>Save changes</span>
                      </button>
                    </div>
                  </div> */}

                  <div className="w-[518px] max-md:w-full h-12 justify-between items-center inline-flex my-10">
                    <div className="pr-[4.69px] justify-start items-end gap-[5.31px] flex">
                      <div className="text-neutral-800 text-[31px] font-medium font-['Poppins']">
                        $000{" "}
                      </div>
                      <div className="w-[57px] h-2.5 text-neutral-800 text-xs font-medium font-['Poppins']">
                        (inc. Tax)
                      </div>
                    </div>
                    <div className="px-6 py-3 bg-indigo-700 rounded justify-center items-start gap-2 flex">
                      <div className="text-white text-base font-medium font-['Poppins']">
                        <Link onClick={scrollToTop} to="/subscribe">
                          Subscribe
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="rigth-card-details bg-[#F8F6F6] px-20 py-20 max-md:px-0  sticky h-[731px] top-10 right-0 max-sm:h-full">
            <div className="credit-card-details w-[528px]  h[731px]">
              <div className="card-about">
                <div className="card-head">
                  <div className="el-doredo">
                    <h1 className="ml-8 pt-6">Et scelerisque</h1>
                    <div className="main-price flex justify-center items-center w-3/4 gap-3 max-sm:w-full">
                      <h2>
                        <span>$</span>00
                      </h2>
                      <p className="billed mt-10">billed monthly</p>
                    </div>
                  </div>
                </div>
                <div className="card-plan-details flex justify-around items-start mt-5 mb-9 max-sm:flex-wrap">
                  <div className="plan-name-user flex flex-col gap-4">
                    <p>Plan:</p>
                    {/* <p className="">Payment method:</p> */}
                    <p>Et scelerisque</p>
                    <p>Billing date:</p>

                    <div className="w-[145.97px] h-[30px] justify-start items-start gap-2 inline-flex mt-[3.5rem]">
                      <div className="opacity-80 text-neutral-800 text-xl font-normal font-['Poppins']">
                        Total Bill:
                      </div>
                      <div className="text-neutral-800 text-xl font-medium font-['Poppins']">
                        $000
                      </div>
                    </div>
                  </div>
                  <div className="plan-name-vale flex flex-col gap-1 ">
                    <div className="text-neutral-800 text-base font-medium font-['Poppins']">
                      This plan contains:
                    </div>

                    <ul className="mt-3">
                      <li className="flex py-0 gap-1">
                        <img src={right} alt="" />
                        Lorem ipsum dolor sit amet
                      </li>
                      <li className="flex py-1 gap-1">
                        <img src={right} alt="" />
                        Lorem ipsum dolor sit amet
                      </li>
                      <li className="flex py-0 gap-1">
                        <img src={right} alt="" />
                        Lorem ipsum dolor sit amet
                      </li>
                      <li className="flex py-1 gap-1">
                        <img src={right} alt="" />
                        Lorem ipsum dolor sit amet
                      </li>
                    </ul>

                    <div className="text-indigo-700 text-base font-medium font-['Poppins'] underline mt-6 ml-4">
                      <Link onClick={scrollToTop} to={"/price"}>
                        View all features list
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;
