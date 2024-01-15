import React from "react";

const Cnctsup = () => {
  return (
    <>
      <section id="contactt" className="flex justify-center items-center pt-20">
        <div className="w-[518.05px] h-full flex-col justify-start items-center gap-[63px] inline-flex support-contact">
          <div className="flex-col justify-center items-center gap-4 flex">
            <div className="text-center text-neutral-800 text-[46px] font-medium font-['Poppins']">
              Contact support
            </div>
            <div className="w-[387.62px] opacity-70 text-center text-zinc-800 text-base font-normal font-['Poppins'] max-sm:w-full">
              Ask a question or report a problem. Our Support Team will answer
              you within one business day.
            </div>
          </div>
          <div className=" support-inputs px-[50.18px] pt-[30.71px] pb-[61.79px] bg-stone-50 bg-opacity-80 rounded-xl backdrop-blur-[91.70px] flex-col justify-start items-center flex max-sm:px-0 max-sm:ml-5">
            <div className="self-stretch flex-col justify-start items-center gap-[39.71px] inline-flex">
              <div className="flex-col justify-start items-start gap-[18.05px] flex">
                <div className="flex-col justify-start items-start gap-[8.66px] flex w-full">
                  <div className="text-stone-950 text-xs font-normal font-['Poppins'] leading-[17.33px]">
                    Name
                  </div>
                  <input
                    type="text"
                    className="pl-[16.25px] pt-[9.39px] pb-[9.05px] bg-white rounded-md justify-end items-center inline-flex"
                    placeholder=" This will be autofilled if the user is logged in"
                  />
                </div>
                <div className="flex-col justify-start items-start gap-[8.66px] flex w-full">
                  <div className="text-stone-950 text-xs font-normal font-['Poppins'] capitalize leading-[17.33px]">
                    Email
                  </div>
                  <input
                    type="text"
                    className="pl-[16.25px] pt-[9.39px] pb-[9.05px] bg-white rounded-md justify-end items-center inline-flex"
                    placeholder=" This will be autofilled if the user is logged in"
                  />
                </div>
                <div className="flex-col justify-start items-start gap-[8.66px] flex w-full">
                  <div className="text-stone-950 text-xs font-normal font-['Poppins'] leading-[17.33px]">
                    How can we help you
                  </div>
                  <select name="subject" id="subject">
                    <option value="tools">
                      I have a question about the tools
                    </option>
                    <option value="billing">
                      I have a question about billing
                    </option>
                    <option value="login">I have trouble logging in</option>
                    <option value="featres">
                      Some features don’t work as expected
                    </option>
                  </select>
                </div>
                <div className="flex-col justify-start items-start gap-[8.66px] flex w-full">
                  <div className="text-stone-950 text-xs font-normal font-['Poppins'] leading-[17.33px]">
                    Describe your issue
                  </div>
                  <textarea
                    className="h-88.09px] pl-[19.58px] pr-[14.11px] pt-[9.05px] pb-[57.04px] bg-white rounded-md justify-start items-center inline-flex"
                    placeholder=" I have a doubt on sdgln."
                  />
                </div>
              </div>
              <div className="px-10 py-[11px] bg-[#3040D0] rounded-md justify-center items-center gap-2 inline-flex cursor-pointer">
                <div className="text-white text-base font-medium font-['Poppins']">
                  Submit
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cnctsup;
