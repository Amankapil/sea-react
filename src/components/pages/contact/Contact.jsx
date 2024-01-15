import React, { useState } from "react";
import "./contact.scss";
import axios from "axios";
import BookDemo from "./bookademo/BookDemo";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import { useEffect } from "react";
// https://gist.githubusercontent.com/anubhavshrimal/75f6183458db8c453306f93521e93d37/raw/f77e7598a8503f1f70528ae1cbf9f66755698a16/CountryCodes.json
import ReactSelect from "react-select";
import flags from "react-phone-number-input/flags";

const Contact = () => {
  function showForm(formNumber) {
    const forms = document.querySelectorAll(".form");
    forms.forEach((form) => (form.style.display = "none"));
    const formToShow = document.getElementById(`form${formNumber}`);
    if (formToShow) {
      formToShow.style.display = "block";
    }
  }
  const [value, setValue] = useState();

  const [dialingCodes, setDialingCodes] = useState([]);
  const [selectedCode, setSelectedCode] = useState("");

  showForm();
  const [activeTab, setActiveTab] = useState(1);

  const handleTabChange = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  const [currentStep, setCurrentStep] = useState(1);

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };
  const handleNextStepback = () => {
    setCurrentStep(currentStep - 1);
  };

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
  const handleSelectChange = (event) => {
    setSelectedCode(event.target.value);
  };

  //////////////////////////////////////////form/////////////////////////////////////////////////////////////////

  const [name, setName] = useState();
  const [email, setEamil] = useState();
  const [phone, setPhone] = useState();
  const [message, setMessage] = useState();
  // const [err, setMessage] = useState();
  const [errorpage, setErrorpage] = useState("");

  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   phone: "",
  //   message: "",
  // });
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !phone || !message) {
      setErrorpage("all fields required ");
      return;
    }

    if (!email.includes("@")) {
      setValue("please enter valid email address");
    }
    const data = { name, email, phone, message };
    console.log(data);
    const response = await axios
      .post("http://localhost:7700/send_mail", data)
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

  // ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  return (
    <>
      {/* ///////////////// */}
      <section class="contact-us mt-44 pb-10 flex items-center justify-center h-full relative pb28">
        <div class="absolute eclips">
          {/* <img src="./Contact-assetes/Ellipse 2471.svg" alt="" /> */}
        </div>
        <div class="main-contact flex items-start justify-center h-full px10 gap-20 flex-wrap">
          <div class="left-adress w-[41%] max-lg:w-full max-lg:p-10">
            <div class="get-in">
              Get in touch with us today! We're here to help
            </div>
            <div class="company-name pt-12 pb-12">
              {/* <h1>
                        Company Name
                    </h1> */}
              <p class="pt-2">
                Lorem ipsum dolor sit amet, consectetur. Velit faucibus
              </p>
            </div>

            <div class="reach-out">
              {/* <h1>
                        Reach out to us
                    </h1> */}
              <p class="pt-4">9999999999</p>
              <p class="pt-4">saf@asfaf.com</p>
            </div>
          </div>
          <div class="right-form ml8">
            <div class="tab-container">
              <div
                // class="tab tab1 active-tab"
                className={`tab tab1 ${activeTab === 1 ? "active-tab" : ""}`}
                onClick={() => handleTabChange(1)}
              >
                Enquiry
              </div>
              <div
                // class="tab tab2"
                className={`tab tab2 ${activeTab === 2 ? "active-tab" : ""}`}
                onClick={() => handleTabChange(2)}
              >
                Book a Demo
              </div>
              {activeTab === 1 && (
                <div id="tab1Content" class="tab-content">
                  <div class="content-inside ">
                    <div class="name">
                      <span>Name</span>
                      <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        class="input"
                        type="text"
                        placeholder="Enter Your Name"
                        required
                      />
                    </div>
                    <div class="name">
                      <span>Email</span>

                      <input
                        value={email}
                        onChange={(e) => setEamil(e.target.value)}
                        class="input"
                        type="email"
                        placeholder="Enter Your Email"
                        required
                      />
                    </div>
                    <div class="name relative">
                      <span>Phone</span>
                      <div className="absolute dial-sekect">
                        {/* <select
                          value={selectedCode}
                          onChange={handleSelectChange}
                        >
                          {dialingCodes.map((codeData, index) => (
                            <option key={index} value={codeData.dial_code}>
                              {codeData.name} - {codeData.dial_code}
                            </option>
                          ))}
                        </select> */}
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

                    <div class="name">
                      <span>Your Enquiry</span>
                      <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        // name="Enquiry"
                        id=""
                        class="input"
                        cols="30"
                        placeholder="I have a doubt on sdgln."
                        rows="3"
                      ></textarea>
                    </div>

                    <div className="error-search mt-10 text-center text-[red]">
                      {errorpage ? errorpage : ""} {value ? value : ""}{" "}
                    </div>

                    <div class="submit-button pt-8">
                      <button onClick={handleSubmit} class="submit-btn">
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 2 && <BookDemo />}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
