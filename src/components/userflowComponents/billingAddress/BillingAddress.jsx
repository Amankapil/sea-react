import React from "react";
import "./bill.scss";
import { useState } from "react";

import rigth from "../profileSetting/right.svg";
import esc from "../profileSetting/esc.svg";

const BillingAddress = () => {
  const [currentStep, setCurrentStep] = useState(1);

  // name input
  const [errorpage, setErrorpage] = useState(false);
  const [inputerror, setInputerror] = useState(false);
  const [namebilling, setNamebilling] = useState(false);
  const [lastname, setLastname] = useState("");
  const [country, setCountry] = useState("");
  const [town, setSetTown] = useState("");
  const [address, setAddress] = useState("");
  const [state, setState] = useState("");
  const [postal, setPstal] = useState("");
  const [email, setEmail] = useState("");

  const onNameClick = (e) => {
    if (
      namebilling ||
      lastname ||
      country ||
      town ||
      address ||
      state ||
      postal ||
      email
    ) {
      setErrorpage(true);
      setInputerror(false);
      return;
    }

    if (
      !namebilling ||
      !lastname ||
      !country ||
      !town ||
      !address ||
      !postal ||
      !state ||
      !email
    ) {
      setInputerror(true);
      setErrorpage(false);
    }
    e.preventDefault();
  };
  return (
    <>
      <div className="main-billing-address">
        <div className="head-subscription mb-10">
          <h1>Billing details</h1>
        </div>
        <div className="postal-addres">
          <div className="credit-details">
            <div className="save-sucess flex gap-12">
              <div className="username-profile flex flex-col gap-4 justify-start">
                <label htmlFor="Card-Number">First name</label>
                <input
                  id="Card-Number-frist"
                  type="text"
                  placeholder="Tellus diam varius"
                  onChange={(e) => setNamebilling(e.target.value)}
                />
              </div>
              <div className="username-profile flex flex-col gap-4 justify-start">
                <label htmlFor="Card-Holder">Last Name</label>
                <input
                  id="Card-Holder-last-name"
                  type="text"
                  placeholder="Ultrices nunc"
                  onChange={(e) => setLastname(e.target.value)}
                />
              </div>
            </div>
            <div className="save-sucess flex gap-12 my-5">
              <div className="username-profile flex flex-col gap-4 justify-start">
                <label htmlFor="Card-Number">Country</label>
                <input
                  id="Card-Number-country"
                  type="text"
                  placeholder="Cursus ipsum"
                  onChange={(e) => setCountry(e.target.value)}
                />
              </div>
              <div className="username-profile flex flex-col gap-4 justify-start">
                <label htmlFor="Card-Holder">Town/City</label>
                <input
                  id="Card-Holder-town"
                  type="text"
                  placeholder="Cras neque eget nisl"
                  onChange={(e) => setSetTown(e.target.value)}
                />
              </div>
            </div>
            <div className="save-sucess flex gap-12">
              <div className="username-profile flex flex-col gap-4 justify-start">
                <label htmlFor="Card-Number">Street Address</label>
                <input
                  id="Card-Number-street"
                  type="text"
                  placeholder="Auctor rhoncus nunc"
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
              <div className="username-profile flex flex-col gap-4 justify-start">
                <label htmlFor="Card-Holder">State/Province</label>
                <input
                  id="Card-Holder-state"
                  type="text"
                  placeholder="Pretium leo ultricies"
                  onChange={(e) => setState(e.target.value)}
                />
              </div>
            </div>
            <div className="save-sucess flex gap-12 my-5">
              <div className="username-profile flex flex-col gap-4 justify-start">
                <label htmlFor="Card-Number">Postal ZIP Code</label>
                <input
                  id="Card-Number-postal"
                  type="text"
                  placeholder="Dictumst posuere sit"
                  onChange={(e) => setPstal(e.target.value)}
                />
              </div>
            </div>
            <div className="save-sucess flex gap-12 ">
              <div className="username-profile flex flex-col gap-4 justify-start w-[43%]">
                <label htmlFor="Card-Number">Email</label>
                <input
                  id="Card-billing-email"
                  type="email"
                  placeholder="Example@gmail.com"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="password-save mt-8">
              <div className="username-profile flex flex-col gap-4 justify-start w-[20%]  max-md:w-[70%] ">
                <button onClick={onNameClick} className="save-btn-payment">
                  <span>Save changes</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {errorpage ? (
        <>
          <div className="frame h-[44px] mt-4">
            <div className="div">
              <img
                className="material-symbols"
                alt="Material symbols"
                src={rigth}
              />
              <div className="div-wrapper">
                <p className="text-wrapper">
                  Your card was successfully updated
                </p>
              </div>
            </div>
          </div>
        </>
      ) : (
        ""
      )}

      {inputerror ? (
        <>
          <div className="w-[214px] h-11 p-2.5 bg-orange-100 rounded-xl flex-col justify-start items-start gap-2 inline-flex mt-4">
            <div className="justify-center items-center gap-[19px] inline-flex">
              <img
                className="material-symbols"
                alt="Material symbols"
                src={esc}
              />
              <div className="text-orange-900 text-xs font-normal font-['poppins'] leading-[18px]">
                please fill all details
              </div>
            </div>
          </div>
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default BillingAddress;
