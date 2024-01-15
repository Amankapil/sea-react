import React, { useEffect, useState } from "react";
import "./roas.scss";
import ReactFlagsSelect from "react-flags-select";
const Roas = () => {
  const [revenue, setRevenue] = useState("");
  const [adCost, setAdCost] = useState("");
  const [roas, setROAS] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [countries, setCountries] = useState([]);
  const [selected, setSelected] = useState("");
  const [nozero, setNozero] = useState(false);

  const calculateROAS = () => {
    if (!revenue || !adCost) {
      return;
    }

    const revenueNum = parseFloat(revenue);
    const adCostNum = parseFloat(adCost);
    if (isNaN(revenueNum) || isNaN(adCostNum) || adCostNum === 0) {
      setNozero(true);
      return;
    }
    const calculatedROAS = (revenueNum / adCostNum).toFixed(2);
    setROAS(calculatedROAS);
    setNozero(false);
  };

  const [isOpen, setIsOpen] = useState(false);
  // const [selectedCountry, setSelectedCountry] = useState('');

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectCountry = (countryCode) => {
    setSelectedCountry(countryCode);
    setIsOpen(false);
  };

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => setCountries(data));
    // console.log(data);
  }, []);

  const handleCountryChange = (e) => {
    const selectedCountry = e.target.value;
    setSelectedCountry(selectedCountry);
  };

  return (
    <>
      <div className="main-roas pt20">
        <div className="roas-hero flex justify-center items-center">
          <div className="head-roas roas-hero flex justify-center items-center flex-col">
            <h1>ROAS Calculator</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur. Massa vulputate varius id
              in. Tortor non odio.
            </p>
          </div>
        </div>

        <div className="roas-cal mt-12">
          <div className="channel-select flex justify-center items-center flex-col">
            <div className="channel ">
              <p>Select your channel</p>
              <div className="flex gap-8 pt-4 max-md:flex-wrap">
                <div className="radio-one">
                  <input
                    type="radio"
                    id="Display"
                    name="fav_language"
                    value="Display"
                    className="radio-btn-raos"
                  />
                  <label for="Display">Display</label>
                </div>
                <div className="radio-one">
                  <input
                    type="radio"
                    id="Search"
                    name="fav_language"
                    value="Search"
                    className="radio-btn-raos"
                    checked
                    // checked
                  />
                  <label for="Search">Paid Search</label>
                </div>
                <div className="radio-one">
                  <input
                    type="radio"
                    id="Social"
                    name="fav_language"
                    value="Social"
                    className="radio-btn-raos"
                  />
                  <label for="Social">Paid Social</label>
                </div>
                <div className="radio-one">
                  <input
                    type="radio"
                    id="Platform"
                    name="fav_language"
                    value="Platform"
                    className="radio-btn-raos"
                  />
                  <label for="Platform">Other Platform</label>
                </div>
              </div>
            </div>

            <div className="industry flex justify-center pt-12 gap-10 max-md:flex-wrap">
              <div className="industry-select">
                <p>Select your industry:</p>
                <div className="relative">
                  <select
                    id="fieldname50_1"
                    name="fieldname50_1"
                    className="roas-select"
                  >
                    <option
                      class="depItem"
                      value="Arts &amp; Entertainment"
                      vt="Arts &amp; Entertainment"
                      data-i="1"
                    >
                      Arts &amp; Entertainment
                    </option>
                    <option
                      class="depItem"
                      value="Beauty &amp; Fashion"
                      vt="Beauty &amp; Fashion"
                      data-i="2"
                    >
                      Beauty &amp; Fashion
                    </option>
                    <option
                      class="depItem"
                      value="Books &amp; Literature"
                      vt="Books &amp; Literature"
                      data-i="3"
                    >
                      Books &amp; Literature
                    </option>
                    <option
                      class="depItem"
                      value="Business &amp; Brand"
                      vt="Business &amp; Brand"
                      data-i="4"
                    >
                      Business &amp; Brand
                    </option>
                    <option
                      class="depItem"
                      value="Charity &amp; Non-Profit"
                      vt="Charity &amp; Non-Profit"
                      data-i="5"
                    >
                      Charity &amp; Non-Profit
                    </option>
                    <option
                      class="depItem"
                      value="eCommerce &amp; Shopping"
                      vt="eCommerce &amp; Shopping"
                      data-i="6"
                    >
                      eCommerce &amp; Shopping
                    </option>
                    <option
                      class="depItem"
                      value="Finance"
                      vt="Finance"
                      data-i="7"
                    >
                      Finance
                    </option>
                    <option
                      class="depItem"
                      value="Food &amp; Drink"
                      vt="Food &amp; Drink"
                      data-i="8"
                    >
                      Food &amp; Drink
                    </option>
                    <option class="depItem" value="Games" vt="Games" data-i="9">
                      Games
                    </option>
                    <option
                      class="depItem"
                      value="Housing &amp; Real Estate"
                      vt="Housing &amp; Real Estate"
                      data-i="10"
                    >
                      Housing &amp; Real Estate
                    </option>
                    <option
                      class="depItem"
                      value="Health &amp; Fitness"
                      vt="Health &amp; Fitness"
                      data-i="11"
                    >
                      Health &amp; Fitness
                    </option>
                    <option
                      class="depItem"
                      value="Hobbies &amp; Leisure"
                      vt="Hobbies &amp; Leisure"
                      data-i="12"
                    >
                      Hobbies &amp; Leisure
                    </option>
                    <option
                      class="depItem"
                      value="Home &amp; Garden"
                      vt="Home &amp; Garden"
                      data-i="13"
                    >
                      Home &amp; Garden
                    </option>
                    <option
                      class="depItem"
                      value="Jobs &amp; Education"
                      vt="Jobs &amp; Education"
                      data-i="14"
                    >
                      Jobs &amp; Education
                    </option>
                    <option
                      class="depItem"
                      value="Law &amp; Government"
                      vt="Law &amp; Government"
                      data-i="15"
                    >
                      Law &amp; Government
                    </option>
                    <option
                      class="depItem"
                      value="Marketing &amp; Advertising"
                      vt="Marketing &amp; Advertising"
                      data-i="16"
                    >
                      Marketing &amp; Advertising
                    </option>
                    <option class="depItem" value="News" vt="News" data-i="17">
                      News
                    </option>
                    <option
                      class="depItem"
                      value="Online Communities"
                      vt="Online Communities"
                      data-i="18"
                    >
                      Online Communities
                    </option>
                    <option
                      class="depItem"
                      value="Personal"
                      vt="Personal"
                      data-i="19"
                    >
                      Personal
                    </option>
                    <option
                      class="depItem"
                      value="Pets &amp; Animals"
                      vt="Pets &amp; Animals"
                      data-i="20"
                    >
                      Pets &amp; Animals
                    </option>
                    <option
                      class="depItem"
                      value="Science &amp; Technology"
                      vt="Science &amp; Technology"
                      data-i="21"
                    >
                      Science &amp; Technology
                    </option>
                    <option
                      class="depItem"
                      value="Sports"
                      vt="Sports"
                      data-i="22"
                    >
                      Sports
                    </option>
                    <option
                      class="depItem"
                      value="Travel"
                      vt="Travel"
                      data-i="23"
                    >
                      Travel
                    </option>
                  </select>

                  <div class="select-icon absolute right-2 top-4">▼</div>
                </div>
                {/* <select name="cars" id="cars" className="roas-select">
                  <option
                    class="depItem"
                    value="(not set)"
                    vt="(not set)"
                    data-i="0"
                  >
                    (not set)
                  </option>
                  <option
                    class="depItem"
                    value="Arts &amp; Entertainment"
                    vt="Arts &amp; Entertainment"
                    data-i="1"
                  >
                    Arts &amp; Entertainment
                  </option>
                
                </select> */}
              </div>
              <div className="industry-select">
                <p>Select your country:</p>
                <div class="search relative">
                  <ReactFlagsSelect
                    searchable
                    selected={selected}
                    onSelect={(code) => setSelected(code)}
                    className="max-md:w-[280px] max-md:justify-start"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="main-calculate flex justify-center items-center gap-12 pt-10">
          <div className="revenue dolar max-sm:w-full">
            <p>Spend on ads</p>
            <input
              type="number"
              // placeholder="$"
              value={adCost}
              onChange={(e) => setAdCost(e.target.value)}
              className="max-md:w-[280px] max-md:justify-start"
            />
          </div>
          <div className="revenue dolar max-sm:w-full">
            <p>Revenue from ads</p>
            <input
              type="number"
              // placeholder="$"
              value={revenue}
              onChange={(e) => setRevenue(e.target.value)}
              className="max-md:w-[240px] max-md:justify-start"
            />
          </div>

          <div className="revenue ans-value max-sm:w-full">
            <p>ROAS</p>
            {/* <input type="text" placeholder= /> */}
            {roas && <p>: {roas} %</p>}
          </div>
        </div>

        {nozero ? (
          <>
            <div className=" w-full flex-col justify-center items-center mt-8 inline-flex ">
              <div className="w-[260px] h-11 p-2.5 bg-orange-100 rounded-xl flex-col justify-center items-center gap-2 inline-flex -mt-4">
                <div className="justify-center items-center gap-[19px] inline-flex">
                  {/* <img
                  className="material-symbols"
                  alt="Material symbols"
                  src={esc}
                /> */}
                  <div className="text-orange-900 text-xs font-normal font-['poppins'] leading-[18px]">
                    spend ad dose not contain value 0
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          ""
        )}

        <div className="calculate-btn mt-10 flex justify-center">
          <button onClick={calculateROAS}>Calculate</button>
        </div>
      </div>
    </>
  );
};

export default Roas;
