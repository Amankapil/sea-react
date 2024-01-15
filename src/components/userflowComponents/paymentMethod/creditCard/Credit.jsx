import React from "react";
import { useState } from "react";
import ecs from "../../profileSetting/esc.svg"; 
import right from "../../profileSetting/right.svg"; 

const Credit = () => {
  const [CardNumber, setCardNumber] = useState("");
  const [holderName, setholderName] = useState("");
  const [valid, setValid] = useState("");
  const [cvc, setCvc] = useState("");
  const [postal, setPstal] = useState("");

  const [errorpage, setErrorpage] = useState(false);
  const [inputerror, setInputerror] = useState(false);

  const onNameClick = (e) => {
    if (CardNumber || holderName || valid || cvc || postal) {
      setErrorpage(true);
      setInputerror(false);
      return;
    }
    if (!CardNumber || !holderName || !valid || !cvc || !postal) {
      setInputerror(true);
      setErrorpage(false);
    }
    e.preventDefault();
  };
  return (
    <>
      <div className="credit-card-details w-[518px]">
        <div className="credit-details">
          <div className="save-sucess flex gap-20">
            <div className="username-profile flex flex-col gap-4 justify-start w-full">
              <label htmlFor="Card-Number">Card Number</label>
              <input
                id="Card-Number"
                type="text"
                placeholder="989890 989"
                onChange={(e) => setholderName(e.target.value)}
              />
            </div>
            <div className="username-profile flex flex-col gap-4 justify-start w-full">
              <label htmlFor="Card-Holder">Card Holder Name</label>
              <input
                id="Card-Holder"
                type="text"
                placeholder="Ultrices nunc"
                onChange={(e) => setCardNumber(e.target.value)}
              />
            </div>
          </div>
          <div className="save-sucess flex gap-8 mt-8">
            <div className="username-profile flex flex-col gap-4 justify-start  w-full">
              <label htmlFor="Card-Number">Valid through </label>
              <input
                id="Valid-through"
                type="text"
                placeholder="MM/YY"
                className=" w-[100%]"
                onChange={(e) => setValid(e.target.value)}
              />
            </div>
            <div className="username-profile flex flex-col gap-4 justify-start w-full">
              <label htmlFor="Card-Holder">CVC</label>
              <input
                id="CVC"
                type="text"
                placeholder="CVC"
                className="w-[100%]"
                onChange={(e) => setCvc(e.target.value)}
              />
            </div>
            <div className="username-profile flex flex-col gap-4 justify-start w-full">
              <label htmlFor="Card-Holder">Postal Code</label>
              <input
                id="Postal-Code"
                type="text"
                placeholder="Pretium leo ultricies"
                onChange={(e) => setPstal(e.target.value)}
              />
            </div>
          </div>

          <div className="secur my-8">
            <p>
              Your data is properly secured. We use SSL encryption and are PCI
              DSS-compliant
            </p>
          </div>

          <div className="password-save mt-8">
            <div className="username-profile flex flex-col gap-4 justify-start">
              <button onClick={onNameClick} className="save-btn-payment">
                <span>Save payment method</span>
              </button>
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
                  src={right}
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
                  src={ecs}
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

        {/* //////////////////////////////////// */}
      </div>
    </>
  );
};

export default Credit;
