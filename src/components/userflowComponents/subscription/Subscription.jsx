import React from "react";
import "./subscription.scss";
import { useState } from "react";
import { Link } from "react-router-dom";
import rigth from "../profileSetting/right.svg";

const Subscription = ({ onButtonClick }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [modify, setModify] = useState(false);
  // const [selectedOption, setSelectedOption] = useState("");

  const [selectedOption, setSelectedOption] = useState("");
  const [showReasonInput, setShowReasonInput] = useState(false);
  const [reason, setReason] = useState("");

  const handleOptionChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedOption(selectedValue);

    // If "none of above" is selected, show the reason input field
    if (selectedValue === "none") {
      setShowReasonInput(true);
    } else {
      setShowReasonInput(false);
    }
  };

  const handleReasonChange = (e) => {
    setReason(e.target.value);
  };

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };
  const handleNextStepverify = () => {
    setCurrentStep(1);
    setModify(true);
  };

  const handleNextStepback = () => {
    setCurrentStep(currentStep - 1);
  };
  return (
    <>
      <div className="subscription  pl-[100px]">
        <div className="head-subscription mb-10">
          <h1>Subscription</h1>
        </div>

        {currentStep === 1 && (
          <div className="credit-card-details w-[528px]">
            <div className="card-about">
              <div className="card-head">
                <div className="el-doredo">
                  <h1 className="ml-8 pt-6">Et scelerisque</h1>
                  <div className="main-price flex justify-center items-center w-3/4 gap-3">
                    <h2>
                      <span>$</span>00
                    </h2>
                    <p className="billed mt-10">billed monthly</p>
                  </div>
                </div>
              </div>
              <div className="card-plan-details flex  justify-between items-start mt-5 mb-9  w-[428px]">
                <div className="plan-name-user flex flex-col gap-4">
                  <p>Plan:</p>
                  <p className="">Payment method:</p>
                  <p>Billing date:</p>
                </div>
                <div className="plan-name-vale flex flex-col gap-4 ">
                  <p>Et scelerisque</p>
                  <p className="flex relative ">
                    Credit card ending with
                    <span>XX69</span>
                    <div
                      onClick={() => onButtonClick(2)}
                      className="change-btn absolute right-[-130px] max-md:right-0 max-md:top-6  flex items-center  cursor-pointer gap-2"
                    >
                      change
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                      >
                        <rect
                          x="0.9"
                          y="0.766211"
                          width="16.4676"
                          height="16.4676"
                          rx="3.6"
                          stroke="#3040D0"
                          stroke-width="0.8"
                        />
                        <path
                          d="M13.2326 7.26275L10.8595 4.91752L11.6412 4.13577C11.8553 3.92172 12.1183 3.8147 12.4302 3.8147C12.7422 3.8147 13.005 3.92172 13.2187 4.13577L14.0004 4.91752C14.2144 5.13157 14.3261 5.38991 14.3354 5.69256C14.3447 5.99521 14.2424 6.25337 14.0283 6.46705L13.2326 7.26275ZM12.4229 8.08638L6.50402 14.0053H4.13086V11.6322L10.0498 5.71322L12.4229 8.08638Z"
                          fill="#3040D0"
                        />
                      </svg>
                    </div>
                  </p>
                  <p>28/08/23</p>
                </div>
              </div>

              <div className="modify-btns max-md:flex-wrap flex gap-6 justify-start items-center">
                {modify ? (
                  <>
                    <button
                      onClick={handleNextStep}
                      className="modify opacity-60"
                      disabled
                    >
                      Modify your plan
                    </button>
                  </>
                ) : (
                  <>
                    <button onClick={handleNextStep} className="modify">
                      Modify your plan
                    </button>
                  </>
                )}

                <button className="view-features text-[16px]">
                  <Link to="/price" className="text-[16px]">
                    View features covered
                  </Link>
                </button>
              </div>

              {/* <div className="modify-btns flex gap-6 justify-start items-center">
                <button className="modify">Change payment method</button>
                <button className="cancel-subscription">
                  Cancel Subscription
                </button>
              </div> */}

              {modify ? (
                <>
                  <div
                    className="frame w-[300px]
                    h-[44px] absolute left-[%] mt-5"
                  >
                    <div className="div">
                      <img
                        className="material-symbols"
                        alt="Material symbols"
                        src={rigth}
                      />
                      <div className="div-wrapper">
                        <p className="text-wrapper">
                          Our Agent will contact you soon to help you with the
                          cancellation.
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                ""
              )}
            </div>
          </div>
        )}

        {currentStep === 2 && (
          <>
            <div className="w-[434px] max-md:w-full h-[21px] mb-8 justify-start items-start gap-1 inline-flex">
              <div className="opacity-50 text-zinc-800 text-sm font-normal font-['Poppins']">
                Subscription
              </div>
              <div className="opacity-50 text-zinc-800 text-sm font-normal font-['Poppins']">
                {"<"}
              </div>
              <div className="opacity0 text-zinc-800 text-sm font-normal font-['Poppins']">
                Modify Your Subscription
              </div>
            </div>

            <div className="h1 mb-8">
              <div className="text-zinc-800 text-2xl font-medium font-['Poppins']">
                Modify Your Subscription
              </div>
            </div>

            <div className="credit-card-details w-[528px]">
              <div className="card-about">
                <div className="card-head">
                  <div className="el-doredo">
                    <h1 className="ml-8 pt-6">Et scelerisque</h1>
                    <div className="main-price flex justify-center items-center w-3/4 gap-3">
                      <h2>
                        <span>$</span>00
                      </h2>
                      <p className="billed mt-10">billed monthly</p>
                    </div>
                  </div>
                </div>
                <div className="card-plan-details flex justify-between w-[428px] items-start mt-5 mb-9">
                  <div className="plan-name-user flex flex-col gap-4">
                    <p>Plan:</p>
                    <p className="">Payment method:</p>
                    <p>Billing date:</p>
                  </div>
                  <div className="plan-name-vale flex flex-col gap-4 ">
                    <p>Et scelerisque</p>
                    <p className="flex relative ">
                      Credit card ending with
                      <span>XX69</span>
                      <div
                        onClick={() => onButtonClick(2)}
                        className="change-btn absolute right-[-130px] max-md:right-0 max-md:top-6  flex items-center  cursor-pointer gap-2"
                      >
                        change
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                        >
                          <rect
                            x="0.9"
                            y="0.766211"
                            width="16.4676"
                            height="16.4676"
                            rx="3.6"
                            stroke="#3040D0"
                            stroke-width="0.8"
                          />
                          <path
                            d="M13.2326 7.26275L10.8595 4.91752L11.6412 4.13577C11.8553 3.92172 12.1183 3.8147 12.4302 3.8147C12.7422 3.8147 13.005 3.92172 13.2187 4.13577L14.0004 4.91752C14.2144 5.13157 14.3261 5.38991 14.3354 5.69256C14.3447 5.99521 14.2424 6.25337 14.0283 6.46705L13.2326 7.26275ZM12.4229 8.08638L6.50402 14.0053H4.13086V11.6322L10.0498 5.71322L12.4229 8.08638Z"
                            fill="#3040D0"
                          />
                        </svg>
                      </div>
                    </p>
                    <p>28/08/23</p>
                  </div>
                </div>

                {/* <div className="modify-btns flex gap-6 justify-start items-center">
                <button className="modify">Modify your plan</button>
                <button className="view-features">View features covered</button>
              </div> */}

                <div className="modify-btns flex gap-6 justify-start items-center max-md:flex-wrap">
                  <button onClick={() => onButtonClick(2)} className="modify">
                    Change payment method
                  </button>
                  <button
                    onClick={handleNextStep}
                    className="cancel-subscription"
                  >
                    Cancel Subscription
                  </button>
                </div>
              </div>
            </div>
          </>
        )}

        {currentStep === 3 && (
          <>
            <div className="w-[434px]  max-md:w-full  h-[21px] mb-8 justify-start items-start gap-1 inline-flex">
              <div className="opacity-50 text-zinc-800 text-sm font-normal font-['Poppins']">
                Subscription
              </div>
              <div className="opacity-50 text-zinc-800 text-sm font-normal font-['Poppins']">
                {"<"}
              </div>
              <div className="opacity-50 text-zinc-800 text-sm font-normal font-['Poppins']">
                Modify Your Subscription
              </div>
              <div className="opacity-50 text-zinc-800 text-sm font-normal font-['Poppins']">
                {"<"}
              </div>
              <div className="opacity0 text-zinc-800 text-sm font-normal font-['Poppins']">
                Cancel Subscription
              </div>
            </div>
            <div className="cancel-reason">
              <div className="text-zinc-800 text-2xl font-medium font-['Poppins'] pb-8">
                We are sorry to see you go.
              </div>
              <div className="w-[399px]  max-md:w-full  h-[78px] flex-col justify-start items-start gap-[9px] inline-flex relative">
                <div className="text-stone-950 text-xs font-normal font-['Poppins'] capitalize leading-[18px]">
                  Please state your reason below
                </div>

                <select
                  // onChange={(e) => setCompanysize(e.target.value)}
                  id="cancel0reason"
                  // value={selectedOption}
                  // onChange={setSelectedOption}
                  value={selectedOption}
                  onChange={handleOptionChange}
                  className="w-[401px] h-[45px]  max-md:w-full  pl-[17.38px] pr-3.5 pt-[11.70px] pb-[9.30px] bg-white rounded-md border border-black border-opacity-50 justify-center items-start gap-[182.62px] inline-flex"
                >
                  <option value="us">Price too high</option>
                  <option value="u">I don’t need this anymore</option>
                  <option value="two">
                    I found a better solution elsewhere
                  </option>
                  <option value="none">My reason is unlisted</option>
                </select>
                <div className="w-5 h-5  flex-col justify-start items-start flex absolute left-[90%] top-[45px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="9"
                    viewBox="0 0 14 9"
                    fill="none"
                  >
                    <path
                      d="M0.694336 1.30713L6.97753 7.69306L13.3054 1.30713"
                      stroke="black"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {showReasonInput && (
              <div className="profile-details ">
                <div className="save-sucess flex gap-20 items-center mt-7">
                  <div className="username-profile flex flex-col gap-4 justify-start w-[309px]">
                    <label>
                      Please state your reason below
                      <input
                        type="text"
                        className="form-c mt-3 w-full"

                        value={reason}
                        onChange={handleReasonChange}
                      />
                    </label>
                  </div>
                </div>
              </div>
            )}
            <button
              onClick={handleNextStepverify}
              className="w-[197px] h-[45px] px-6 py-3 bg-indigo-700 rounded justify-center items-start gap-2 inline-flex mt-10"
            >
              <div className="text-white text-sm font-medium font-['Poppins']">
                Request cancellation
              </div>
            </button>
          </>
        )}
      </div>
    </>
  );
};

export default Subscription;
