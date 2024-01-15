import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const BookDemo = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };
  const handleNextStepback = () => {
    setCurrentStep(currentStep - 1);
  };

  //   ///////////////////////////////////////////////////////////////////////

  const [name, setName] = useState();
  const [email, setEamil] = useState();
  const [phone, setPhone] = useState();
  //   const [message, setMessage] = useState();
  const [company, setCompany] = useState();
  const [companysize, setCompanysize] = useState();
  const [role, setRole] = useState();
  const [perpose, setPerpose] = useState();

  const [dialingCodes, setDialingCodes] = useState([]);
  const [selectedCode, setSelectedCode] = useState("");

  const handleSelectChange = (event) => {
    setSelectedCode(event.target.value);
  };

  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   phone: "",
  //   message: "",
  // });

  useEffect(() => {
    // Fetch the JSON data
    fetch(
      "https://gist.githubusercontent.com/anubhavshrimal/75f6183458db8c453306f93521e93d37/raw/f77e7598a8503f1f70528ae1cbf9f66755698a16/CountryCodes.json"
    )
      .then((response) => response.json())
      .then((data) => {
        setDialingCodes(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { name, email, phone, company, companysize, role, perpose };
    if (
      !name ||
      !email ||
      !phone ||
      !company ||
      !perpose ||
      !role ||
      !companysize
    ) {
      alert("Please fill all details");
      return;
    }
    console.log(data);
    const response = await axios
      .post("http://localhost:7700/send_mail_book", data)
      .then((response) => {
        if (response.status === 200) {
          alert("Your Application was sent successfully");
          window.location.reload();
        }
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  //   ///////////////////////////////////////////////////////////////////////

  return (
    <div id="tab2Content" class="tab-content tab-content2">
      {currentStep === 1 && (
        <div class="form " id="form1">
          <div class="details content-inside h[684px] max-[1700px]:h[596px]">
            <div class="ign flex justify-center items-center pb-2">
              <div class="sivg1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                >
                  <circle
                    cx="8.85753"
                    cy="8.37767"
                    r="8.06993"
                    fill="#3040D0"
                  />
                </svg>
              </div>
              <div class="svg2 mx-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="127"
                  height="18"
                  viewBox="0 0 127 18"
                  fill="none"
                >
                  <line
                    opacity="0.5"
                    x1="0.873535"
                    y1="8.625"
                    x2="126.876"
                    y2="8.625"
                    stroke="black"
                    stroke-width="0.75"
                    stroke-dasharray="7.5 7.5"
                  />
                </svg>
              </div>

              <div class="svg3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="17"
                  viewBox="0 0 18 17"
                  fill="none"
                >
                  <circle
                    cx="8.75903"
                    cy="8.38257"
                    r="8.38257"
                    fill="#CACACA"
                  />
                </svg>
              </div>
            </div>

            <div class="details flex justify-between items-center w-[246px] pb-8">
              <p class="personal-details">personal Details</p>
              <p class="company-details">Company Details</p>
            </div>

            <div class="name">
              <span>Name</span>

              <input
                onChange={(e) => setName(e.target.value)}
                class="input"
                type="text"
                placeholder="Enter Your Name"
              />
            </div>
            <div class="name py-6 min-[1300px]:py-0">
              <span>Email</span>

              <input
                onChange={(e) => setEamil(e.target.value)}
                class="input"
                type="text"
                placeholder="Enter Your Email"
              />
            </div>
            <div class="name relative">
              <span>Phone</span>
              <div className="absolute dial-sekect">
                <PhoneInput
                  country={"us"}
                  enableAreaCodes={true}
                  value={phone}
                />
              </div>
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                class="input pl-20 phone-contact"
                type="number"
                placeholder="Enter Your phone"
              />
            </div>

            <div class="submit-button pt-16  flex items-center justify-center max-[1700px]:pt-28">
              <button class="next" onClick={handleNextStep}>
                Next
              </button>
            </div>
          </div>
        </div>
      )}

      {currentStep === 2 && (
        <div class="form" id="form2">
          <div class="details content-inside">
            <div class="ign flex justify-center items-center pb-2">
              <div class="sivg1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                >
                  <circle
                    cx="8.85802"
                    cy="8.28641"
                    r="8.06993"
                    fill="#CACACA"
                  />
                </svg>
              </div>
              <div class="svg2 mx-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="127"
                  height="18"
                  viewBox="0 0 127 18"
                  fill="none"
                >
                  <line
                    opacity="0.5"
                    x1="0.873535"
                    y1="8.625"
                    x2="126.876"
                    y2="8.625"
                    stroke="black"
                    stroke-width="0.75"
                    stroke-dasharray="7.5 7.5"
                  />
                </svg>
              </div>

              <div class="svg3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="17"
                  viewBox="0 0 18 17"
                  fill="none"
                >
                  <circle
                    cx="8.96544"
                    cy="8.28641"
                    r="8.06993"
                    fill="#3040D0"
                  />
                </svg>
              </div>
            </div>

            <div class="details flex justify-between items-center w-[246px] pb-8">
              <p class="personal-details2">personal Details</p>
              <p class="company-details2">Company Details</p>
            </div>
            <div class="name">
              <span>Company Name</span>
              <input
                onChange={(e) => setCompany(e.target.value)}
                class="input"
                type="text"
                placeholder="Enter the name of Your Name"
              />
            </div>
            <div class="name flex py-4 ml-10">
              <div>
                <div>
                  <span>Company size</span>
                </div>
                <div class="select1">
                  <div class="relative">
                    <div class="custom-select-icon-contact mt-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="17"
                        height="9"
                        viewBox="0 0 17 9"
                        fill="none"
                      >
                        <path
                          d="M0.970215 0.706055L8.63329 8.49442L16.3509 0.706055"
                          stroke="black"
                          stroke-width="0.631643"
                        />
                      </svg>
                    </div>

                    <select
                      onChange={(e) => setCompanysize(e.target.value)}
                      id="country-select"
                    >
                      <option value="0-10">0-10</option>
                      <option value="10-20">10-20</option>
                      <option value="20-30">20-30</option>
                      <option value="30-40">30-40</option>
                      <option value="40-50">40-50</option>
                      <option value="50-60">50-60</option>
                      <option value="60-100">60-100</option>
                    </select>
                  </div>
                </div>
              </div>

              <div class="ml-4">
                <div>
                  <span>Your Role</span>
                </div>
                <div class="select1 select2">
                  <div class="relative">
                    <div class="custom-select-icon-contact  mt-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="17"
                        height="9"
                        viewBox="0 0 17 9"
                        fill="none"
                      >
                        <path
                          d="M0.970215 0.706055L8.63329 8.49442L16.3509 0.706055"
                          stroke="black"
                          stroke-width="0.631643"
                        />
                      </svg>
                    </div>
                    <select
                      onChange={(e) => setRole(e.target.value)}
                      id="country-select"
                    >
                      {/* <!-- Options with flag images --> */}
                      <option disabled value="us">
                        Select your role
                      </option>
                      <option value="developer">developer</option>
                      <option value="design">designer</option>
                      <option value="manager">manager</option>
                      <option value="product">product engineer</option>
                      {/* <!-- Add more country options as needed --> */}
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div class="name">
              <span class="mb-8">
                What do you want to achieve with this call?
              </span>
              <textarea
                onChange={(e) => setPerpose(e.target.value)}
                name="Enquiry"
                id=""
                class="input mt-4"
                cols="30"
                placeholder="I want to learn how to use this product"
                rows="3"
              ></textarea>
            </div>

            <div class="submit-button pt-3 flex items-center justify-start -ml-12">
              <button class="pre -mr12" onClick={handleNextStepback}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M13.835 16.8544L9.08198 12.1014L13.835 7.34842"
                    stroke="#3040D0"
                    stroke-width="1.90119"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
              <button class="submit-btn ml-8" onClick={handleSubmit}>
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookDemo;
