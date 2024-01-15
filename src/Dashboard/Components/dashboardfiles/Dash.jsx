import React from "react";
import "./dash.scss";

import profile from "./images/logout.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { useState, useEffect, useRef } from "react";
// import EditIcon from "@mui/icons-material/Edit";
// import DeleteIcon from "@mui/icons-material/Delete";

// import ContactHero from "./ContactTab/ContactHero";

// import Cunsulting from "./innerpagess/Consulting";
// import UserExper from "./innerpagess/UserExper";
// import Productdev from "./innerpagess/Productdev";
// import DigitalMarketing from "./innerpagess/DigitalMarketing";

import Mascot from "./images/Screenshot 2023-04-09 144546 1.svg";
import Dashimg from "./images/dash.svg";
import Home from "./images/home.svg";
import About from "./images/about.svg";
import Blog from "./images/blog.svg";
import Setting from "./images/settings.svg";
import Contact from "./images/contact.svg";
import Case from "./images/case.svg";
import view from "./images/view.svg";
import edit from "./images/edit.svg";
import close from "./images/close.svg";
import Search from "./images/scg.svg";
import Add from "./images/add.svg";
import gsap from "gsap";
import imgicon from "./images/icons8-profiles-96 (2).png";
import logo from "../../../components/navbar/Sea Transparant 1.svg";
// import HomeAbout from "../Home/homeAbout";
// import HeroAbout from "./aboutTab/HeroAbout";
// import Job from "./application/Job";
// import ChartrComponent from "./application/Chart";

const Dash = () => {
  const [array, setarray] = useState("");
  const [Aboutarray, setAboutarray] = useState();
  const [Servicesarray, setServicesarray] = useState();

  const [show, setShow] = useState(false);
  const [showabout, setShowabout] = useState(false);
  const [showservice, setShowservices] = useState(false);

  const showinput = () => {
    if (!show) {
      setShow(true);
    } else {
      setShow(false);
    }
  };
  const showinputabout = () => {
    if (!showabout) {
      setShowabout(true);
    } else {
      setShowabout(false);
    }
  };
  const showinputservices = () => {
    if (!showservice) {
      setShowservices(true);
    } else {
      setShowservices(false);
    }
  };

  let panel1 = useRef(null);
  let panel2 = useRef(null);
  let panel3 = useRef(null);
  let panel4 = useRef(null);
  let panel5 = useRef(null);
  let dashbutton1 = useRef(null);
  let dashbutton2 = useRef(null);
  let dashbutton3 = useRef(null);
  let dashbutton4 = useRef(null);
  let dashbutton5 = useRef(null);

  const handleSwitchClick1 = () => {
    gsap.to(dashbutton1, 0, { backgroundColor: "#fff" });
    gsap.to(dashbutton2, 0, { backgroundColor: "#EEEEEE" });
    gsap.to(dashbutton3, 0, { backgroundColor: "#EEEEEE" });
    gsap.to(panel1, 0, { display: "block" });
    gsap.to(panel2, 0, { display: "none" });
    gsap.to(panel3, 0, { display: "none" });
  };
  const handleSwitchClick2 = () => {
    gsap.to(dashbutton1, 0, { backgroundColor: "#EEEEEE" });
    gsap.to(dashbutton2, 0, { backgroundColor: "#fff" });
    gsap.to(dashbutton3, 0, { backgroundColor: "#EEEEEE" });
    gsap.to(panel1, 0, { display: "none" });
    gsap.to(panel2, 0, { display: "block" });
    gsap.to(panel3, 0, { display: "none" });
  };
  const handleSwitchClick3 = () => {
    gsap.to(dashbutton1, 0, { backgroundColor: "#EEEEEE" });
    gsap.to(dashbutton2, 0, { backgroundColor: "#EEEEEE" });
    gsap.to(dashbutton3, 0, { backgroundColor: "#fff" });
    gsap.to(panel1, 0, { display: "none" });
    gsap.to(panel2, 0, { display: "none" });
    gsap.to(panel3, 0, { display: "block" });
  };
  const handleSwitchClick4 = () => {
    gsap.to(dashbutton4, 0, { backgroundColor: "#fff" });
    gsap.to(dashbutton5, 0, { backgroundColor: "#EEEEEE" });
    gsap.to(panel4, 0, { display: "block" });
    gsap.to(panel5, 0, { display: "none" });
  };
  const handleSwitchClick5 = () => {
    gsap.to(dashbutton4, 0, { backgroundColor: "#EEEEEE" });
    gsap.to(dashbutton5, 0, { backgroundColor: "#fff" });
    gsap.to(panel4, 0, { display: "none" });
    gsap.to(panel5, 0, { display: "block" });
  };

  const handleLogouttt = async () => {
    localStorage.removeItem("jwt");
    window.location.reload();
  };

  const [homeHero, sethomeHero] = useState("");
  const [homeAbout, setAboutHero] = useState("");

  const [homeServices, setHomeService] = useState("");

  const [error, setError] = useState("");

  // const navigate = useNavigate("/home");

  const handleSubmit = async (event) => {
    // setEditMode(false);
    event.preventDefault();
    try {
      const response = await axios
        .post("https://codelinear.in/code/add", {
          homeHero,
        })
        .then((response) => {
          console.log(response);
          if (response.status === 200) {
            alert("data post successfully");
          } else {
            alert(response.data.message);
          }
        });
    } catch (error) {
      setError(error.response.data.message);
    }
  };
  // ?/////////////////////////////////////handleSubmitAbout/ ////////////////////////////////////////////
  const handleSubmitAbout = async (event) => {
    event.preventDefault();
    try {
      const response = await axios
        .post("https://codelinear.in/code/addAbout", {
          homeAbout,
        })
        .then((response) => {
          console.log(response);

          if (response.status === 200) {
            alert("data post successfully");
          } else {
            alert(response.data.message);
          }
        });
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  const handleSubmitServices = async (event) => {
    event.preventDefault();
    try {
      const response = await axios
        .post("https://codelinear.in/code/addServices", {
          homeServices,
        })
        .then((response) => {
          console.log(response);
          if (response.status === 200) {
            alert("data post successfully");
          } else {
            alert(response.data.message);
          }
        });
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  useEffect(() => {
    axios.get("https://codelinear.in/code").then((response) => {
      setarray(response.data.homeHero);
      console.log(response.data);
    });
  }, []);
  useEffect(() => {
    axios.get("https://codelinear.in/code/homeAbout").then((response) => {
      // setarray(response.data.homeHero);
      setAboutarray(response.data.homeAbout);
      console.log(response.data);
    });
  }, []);
  useEffect(() => {
    axios.get("https://codelinear.in/code/homeServices").then((response) => {
      setServicesarray(response.data.homeServices);
      console.log(response.data);
    });
  }, []);

  // /////////job application/////////////////////////////
  const [job, setJob] = useState([]);
  useEffect(() => {
    // Fetch data from the server using axios
    axios
      .get("http://localhost:7700/bookdata")
      .then((response) => {
        console.log(response.data);
        setJob(response.data);
        console.log(job);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  const [enquery, setEnquery] = useState([]);
  useEffect(() => {
    // Fetch data from the server using axios
    axios
      .get("http://localhost:7700/contactdata")
      .then((response) => {
        console.log(response.data);
        setEnquery(response.data);
        console.log(enquery);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  // console.log(job);

  //   const [imagehome, setImagehome] = useState();

  //   const handleimgsubmit = async (e) => {
  //     e.preventDefault();
  //     let formData = new FormData();
  //     formData.append("imagehome", imagehome);
  //     console.log(formData);
  //     console.log(imagehome);

  //     try {
  //       const response = await axios.post(
  //         "http://localhost:4500/code/addhomeimg",
  //         formData,
  //         {
  //           headers: {
  //             "Content-Type": "multipart/form-data",
  //           },
  //         }
  //       );

  //       console.log(response);

  //       if (response.status === 200) {
  //         alert("Image posted successfully");
  //       } else {
  //         alert(response);
  //       }
  //     } catch (error) {
  //       setError(error);
  //     }
  //   };

  const exportToExcel = async () => {
    try {
      const response = await axios.get(
        "https://codelinear.in/code/application",
        {
          responseType: "blob",
        }
      );

      const blob = new Blob([response.data], {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      });
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "table_data.xlsx";
      link.click();
    } catch (error) {
      console.error("Error exporting to Excel:", error);
    }
  };
  const exportToExcelEnquery = async () => {
    try {
      const response = await axios.get("https://codelinear.in/code/enquery", {
        responseType: "blob",
      });

      const blob = new Blob([response.data], {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      });
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "table_data.xlsx";
      link.click();
    } catch (error) {
      console.error("Error exporting to Excel:", error);
    }
  };
  return (
    <>
      <nav className="dashboard-nav cursor-default">
        <div className="dashboard-item">
          <img src={logo} alt="" className="dash-mascot" />
        </div>
        <div className="logout " onClick={handleLogouttt}>
          <h1 className="logout-txt">Logout</h1>
          <img src={profile} alt="" className="profile" />
        </div>
      </nav>
      <Tabs className="cursor-default remove-curser relative h[100vh] flex   w-full">
        <TabList className="dashboard-left-nav">
          <Tab className="dashboard-left-item">
            <h1 className="dash-item-h1"> DashBoard</h1>
          </Tab>
          <Tab className="dashboard-left-item">
            <h1 className="dash-item-h1"> About Us</h1>
          </Tab>
          <Tab className="dashboard-left-item">
            <h1 className="dash-item-h1"> Clients</h1>
          </Tab>
          <Tab className="dashboard-left-item">
            <h1 className="dash-item-h1"> Services</h1>
          </Tab>
          <Tab className="dashboard-left-item">
            <h1 className="dash-item-h1"> Career</h1>
          </Tab>
          <Tab className="dashboard-left-item">
            <h1 className="dash-item-h1"> Blogs</h1>
          </Tab>
          <Tab className="dashboard-left-item">
            <h1 className="dash-item-h1">Contact Us</h1>
          </Tab>
        </TabList>
        <div className="w-full">
          <TabPanel>
            <div className="flex">
              <div
                className="main flex flexcol justify-center items-center gap-10"
                style={{ height: "100%" }}
              >
                {/* <Job /> */}
                {/* <ChartrComponent /> */}
                {/* {job} */}

                <div>
                  <div className="w-[362.17px] h-[51.87px] bg-gray-200 flex justify-between items-center">
                    <div className="w-[50.61px] h-[50.61px] bg-stone-500 flex justify-center items-center">
                      <img src={imgicon} alt="" />
                    </div>
                    <div className="w-[287.48px] h-[51.79px] text-black text-lg font-bold font-['Helvetica'] flex justify-center items-center">
                      Booked Demos
                    </div>

                    <div
                      onClick={exportToExcel}
                      className="w-[50.83px] h-[50.83px] bg-black rounded-full flex justify-center items-center"
                    >
                      {/* <img src={imgicon} alt="" /> */}

                      <svg
                        className="rotate-90"
                        xmlns="http://www.w3.org/2000/svg"
                        width="35"
                        height="37"
                        viewBox="0 0 35 37"
                        fill="none"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M3.30873 7.67988C4.02664 6.94145 5.00034 6.52661 6.01562 6.52661H19.1406C20.1559 6.52661 21.1296 6.94145 21.8475 7.67988C22.5654 8.4183 22.9688 9.41982 22.9688 10.4641V13.2766C22.9688 13.8979 22.4791 14.4016 21.875 14.4016C21.2709 14.4016 20.7812 13.8979 20.7812 13.2766V10.4641C20.7812 10.0166 20.6084 9.58734 20.3007 9.27087C19.993 8.9544 19.5757 8.77661 19.1406 8.77661H6.01562C5.5805 8.77661 5.1632 8.9544 4.85553 9.27087C4.54785 9.58734 4.375 10.0166 4.375 10.4641V27.3391C4.375 27.7867 4.54785 28.2159 4.85553 28.5324C5.1632 28.8488 5.5805 29.0266 6.01562 29.0266H19.1406C19.5757 29.0266 19.993 28.8488 20.3007 28.5324C20.6084 28.2159 20.7812 27.7867 20.7812 27.3391V24.5266C20.7812 23.9053 21.2709 23.4016 21.875 23.4016C22.4791 23.4016 22.9688 23.9053 22.9688 24.5266V27.3391C22.9688 28.3834 22.5654 29.3849 21.8475 30.1233C21.1296 30.8618 20.1559 31.2766 19.1406 31.2766H6.01562C5.00034 31.2766 4.02664 30.8618 3.30873 30.1233C2.59082 29.3849 2.1875 28.3834 2.1875 27.3391V10.4641C2.1875 9.41982 2.59082 8.4183 3.30873 7.67988ZM25.4766 12.4811C25.9037 12.0418 26.5963 12.0418 27.0234 12.4811L32.4921 18.1061C32.9193 18.5455 32.9193 19.2578 32.4921 19.6971L27.0234 25.3221C26.5963 25.7614 25.9037 25.7614 25.4766 25.3221C25.0495 24.8828 25.0495 24.1705 25.4766 23.7311L29.0782 20.0266H13.0566C12.4526 20.0266 11.9629 19.5229 11.9629 18.9016C11.9629 18.2803 12.4526 17.7766 13.0566 17.7766H29.0782L25.4766 14.0721C25.0495 13.6328 25.0495 12.9205 25.4766 12.4811Z"
                          fill="#fff"
                        />
                      </svg>
                    </div>
                  </div>

                  <div className="w-[362.17px] h-[443.32px] bg-white mt0 overflow-scroll">
                    <ul
                      className="w-full flex justify-center flex-col  items-center gap-4 mt-4"
                      key={job.id}
                    >
                      {job.map((job) => (
                        <>
                          <div className="w-[271.54px] h-[50px] flex justify-center fle-col  items-center gap-2 bg-neutral-100">
                            <li className="text-black text-sm font-bold font-['Helvetica']">
                              {job.name}{" "}
                            </li>
                            <li className="text-black text-sm font- font-['Helvetica'] ">
                              {"   "}| {job.perpose}
                            </li>
                          </div>
                        </>
                      ))}
                    </ul>
                  </div>
                </div>
                <div>
                  <div className="w-[362.17px] h-[51.87px] bg-gray-200 flex justify-between items-center mt-4">
                    <div className="w-[50.61px] h-[50.61px] bg-stone-500 flex justify-center items-center">
                      <img src={imgicon} alt="" />
                    </div>
                    <div className="w-[287.48px] h-[51.79px] text-black text-lg font-bold font-['Helvetica'] flex justify-center items-center">
                      Contacted People
                    </div>

                    <div
                      onClick={exportToExcelEnquery}
                      className="w-[50.83px] h-[50.83px] bg-black rounded-full flex justify-center items-center"
                    >
                      {/* <img src={imgicon} alt="" /> */}

                      <svg
                        className="rotate-90"
                        xmlns="http://www.w3.org/2000/svg"
                        width="35"
                        height="37"
                        viewBox="0 0 35 37"
                        fill="none"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M3.30873 7.67988C4.02664 6.94145 5.00034 6.52661 6.01562 6.52661H19.1406C20.1559 6.52661 21.1296 6.94145 21.8475 7.67988C22.5654 8.4183 22.9688 9.41982 22.9688 10.4641V13.2766C22.9688 13.8979 22.4791 14.4016 21.875 14.4016C21.2709 14.4016 20.7812 13.8979 20.7812 13.2766V10.4641C20.7812 10.0166 20.6084 9.58734 20.3007 9.27087C19.993 8.9544 19.5757 8.77661 19.1406 8.77661H6.01562C5.5805 8.77661 5.1632 8.9544 4.85553 9.27087C4.54785 9.58734 4.375 10.0166 4.375 10.4641V27.3391C4.375 27.7867 4.54785 28.2159 4.85553 28.5324C5.1632 28.8488 5.5805 29.0266 6.01562 29.0266H19.1406C19.5757 29.0266 19.993 28.8488 20.3007 28.5324C20.6084 28.2159 20.7812 27.7867 20.7812 27.3391V24.5266C20.7812 23.9053 21.2709 23.4016 21.875 23.4016C22.4791 23.4016 22.9688 23.9053 22.9688 24.5266V27.3391C22.9688 28.3834 22.5654 29.3849 21.8475 30.1233C21.1296 30.8618 20.1559 31.2766 19.1406 31.2766H6.01562C5.00034 31.2766 4.02664 30.8618 3.30873 30.1233C2.59082 29.3849 2.1875 28.3834 2.1875 27.3391V10.4641C2.1875 9.41982 2.59082 8.4183 3.30873 7.67988ZM25.4766 12.4811C25.9037 12.0418 26.5963 12.0418 27.0234 12.4811L32.4921 18.1061C32.9193 18.5455 32.9193 19.2578 32.4921 19.6971L27.0234 25.3221C26.5963 25.7614 25.9037 25.7614 25.4766 25.3221C25.0495 24.8828 25.0495 24.1705 25.4766 23.7311L29.0782 20.0266H13.0566C12.4526 20.0266 11.9629 19.5229 11.9629 18.9016C11.9629 18.2803 12.4526 17.7766 13.0566 17.7766H29.0782L25.4766 14.0721C25.0495 13.6328 25.0495 12.9205 25.4766 12.4811Z"
                          fill="#fff"
                        />
                      </svg>
                    </div>
                  </div>

                  <div className="w-[362.17px] h-[443.32px] bg-white mt0">
                    <ul className="w-full flex justify-center flex-col  items-center gap-4 pt-4">
                      {enquery.reverse().map((enquery) => (
                        <>
                          <div className="w-[271.54px] h-[50px] flex justify-center fle-col  items-center gap-2 bg-neutral-100">
                            <li className="text-black text-sm font-bold font-['Helvetica']">
                              {enquery.name}{" "}
                            </li>
                            <li className="text-black text-sm font- font-['Helvetica'] ">
                              {""}| {enquery.message}{" "}
                            </li>
                          </div>
                        </>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>

          <TabPanel>
            <div className="main">
              <div
                className="about-page-dash"
                style={{
                  background: "#EAEAEA",
                }}
              >
                <div
                  className="about-page-dash-txt"
                  ref={(el) => (dashbutton4 = el)}
                  onClick={handleSwitchClick4}
                  style={{
                    backgroundColor: "#fff",
                  }}
                >
                  Home Page
                </div>
                <div
                  className="about-page-dash-txt"
                  ref={(el) => (dashbutton5 = el)}
                  onClick={handleSwitchClick5}
                  style={{
                    backgroundColor: "#EEEEEE",
                  }}
                >
                  About Us
                </div>
              </div>

              <div
                className="about-page-dash-panel"
                ref={(el) => (panel4 = el)}
              >
                <div className="operation-container">
                  <div className="search-container">
                    <input
                      type="text"
                      placeholder="search"
                      className="search"
                    />
                    <img src={Search} alt="" className="search-img" />
                  </div>
                  <div className="add-container">
                    <img src={Add} alt="" className="add" />
                  </div>
                </div>

                {show ? (
                  <>
                    <div className="container-dash">
                      <p className="para-container">
                        <div className="images-container">
                          <img src={view} alt="" className="view" />
                          <img
                            onClick={showinput}
                            src={edit}
                            alt=""
                            className="view"
                          />
                          <img src={close} alt="" className="view" />
                        </div>
                        <div className="input">
                          <div className="w-full flex justify-center items-center">
                            <input
                              className="w-[60%] h-12 text-slate-950 border-red-600 border-2"
                              type="text"
                              value={homeHero}
                              onChange={(e) => sethomeHero(e.target.value)}
                              placeholder={array}
                            />
                          </div>
                          <div className="hh w-full flex justify-center items-center my-10">
                            <button
                              onClick={handleSubmit}
                              className="w-[20%] h-9 bg-black text-white"
                            >
                              Submit
                            </button>
                          </div>
                        </div>

                        {/* {array} */}
                      </p>
                      <br />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="container-dash">
                      <p className="para-container">
                        <div className="images-container">
                          <img src={view} alt="" className="view" />
                          <img
                            onClick={showinput}
                            src={edit}
                            alt=""
                            className="view"
                          />
                          <img src={close} alt="" className="view" />
                        </div>
                        <h1 className="title-container">Title : </h1>

                        {array}
                      </p>
                      <br />
                    </div>
                  </>
                )}
                {/* <div>
                  <form onSubmit={handleimgsubmit}>
                    <input
                      type="file"
                      name="imagehome"
                      onChange={(e) => setImagehome(e.target.files[0])}
                    />
                    <button type="submit">Submit</button>
                  </form>
                </div> */}

                {showabout ? (
                  <>
                    <div className="container-dash">
                      <p className="para-container">
                        <div className="images-container">
                          <img src={view} alt="" className="view" />
                          <img
                            onClick={showinputabout}
                            src={edit}
                            alt=""
                            className="view"
                          />
                          <img src={close} alt="" className="view" />
                        </div>
                        <div className="input">
                          <div className="w-full flex justify-center items-center">
                            <input
                              className="w-[60%] h-12 text-slate-950 border-red-600 border-2"
                              type="text"
                              value={homeAbout}
                              onChange={(e) => setAboutHero(e.target.value)}
                              placeholder={Aboutarray}
                            />
                          </div>
                          <div className="hh w-full flex justify-center items-center my-10">
                            <button
                              onClick={handleSubmitAbout}
                              className="w-[20%] h-9 bg-black text-white"
                            >
                              Submit
                            </button>
                          </div>
                        </div>

                        {/* {array} */}
                      </p>
                      <br />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="container-dash">
                      <p className="para-container">
                        <div className="images-container">
                          <img src={view} alt="" className="view" />
                          <img
                            onClick={showinputabout}
                            src={edit}
                            alt=""
                            className="view"
                          />
                          <img src={close} alt="" className="view" />
                        </div>
                        <h1 className="title-container">Title : </h1>

                        {Aboutarray}
                      </p>
                      <br />
                    </div>
                  </>
                )}

                {showservice ? (
                  <>
                    <div className="container-dash">
                      <p className="para-container">
                        <div className="images-container">
                          <img src={view} alt="" className="view" />
                          <img
                            onClick={showinputservices}
                            src={edit}
                            alt=""
                            className="view"
                          />
                          <img src={close} alt="" className="view" />
                        </div>
                        <div className="input">
                          <div className="w-full flex justify-center items-center">
                            <input
                              className="w-[60%] h-12 text-slate-950 border-red-600 border-2"
                              type="text"
                              value={homeServices}
                              onChange={(e) => setHomeService(e.target.value)}
                              placeholder={Servicesarray}
                            />
                          </div>
                          <div className="hh w-full flex justify-center items-center my-10">
                            <button
                              onClick={handleSubmitServices}
                              className="w-[20%] h-9 bg-black text-white"
                            >
                              Submit
                            </button>
                          </div>
                        </div>

                        {/* {array} */}
                      </p>
                      <br />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="container-dash">
                      <p className="para-container">
                        <div className="images-container">
                          <img src={view} alt="" className="view" />
                          <img
                            onClick={showinputservices}
                            src={edit}
                            alt=""
                            className="view"
                          />
                          <img src={close} alt="" className="view" />
                        </div>
                        <h1 className="title-container">Title : </h1>

                        {Servicesarray}
                      </p>
                      <br />
                    </div>
                  </>
                )}
              </div>

              {/* ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;; */}
              <div
                className="about-page-dash-panel"
                style={{
                  display: "none",
                }}
                ref={(el) => (panel5 = el)}
              >
                {/* <AboutTab/> */}
                {/* <HeroAbout /> */}
                <h1>h1</h1>
              </div>
            </div>
          </TabPanel>

          <TabPanel>
            {/* <AboutTab /> */}
            <h1>h1</h1>
          </TabPanel>

          <TabPanel>
            <div className="main">
              <h1>h1</h1>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="main">
              <div
                className="about-page-dash"
                style={{
                  background: "#EAEAEA",
                }}
              >
                <div
                  className="about-page-dash-txt"
                  ref={(el) => (dashbutton4 = el)}
                  onClick={handleSwitchClick4}
                  style={{
                    backgroundColor: "#fff",
                  }}
                >
                  career page
                </div>
                <div
                  className="about-page-dash-txt"
                  ref={(el) => (dashbutton5 = el)}
                  onClick={handleSwitchClick5}
                  style={{
                    backgroundColor: "#EEEEEE",
                  }}
                >
                  Current job openings
                </div>
              </div>

              <div ref={(el) => (panel4 = el)}>
                <h1>h1</h1>
              </div>
              <div ref={(el) => (panel5 = el)}>
                <h1>h1</h1>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div
              className="main"
              style={
                {
                  // height: "100vh",
                }
              }
            >
              {/* <WrokHero /> */}
              <h1>h1</h1>
            </div>
          </TabPanel>
          <TabPanel>
            <div
              className="main"
              style={{
                height: "92vh",
              }}
            >
              <div
                className="about-page-dash"
                style={{
                  background: "#EAEAEA",
                }}
              >
                <h1
                  className="about-page-dash-txt"
                  ref={(el) => (dashbutton1 = el)}
                  onClick={handleSwitchClick1}
                  style={{
                    backgroundColor: "#EEEEEE",
                  }}
                >
                  Page Intro
                </h1>
                <h1
                  className="about-page-dash-txt"
                  ref={(el) => (dashbutton2 = el)}
                  onClick={handleSwitchClick2}
                  style={{
                    backgroundColor: "#fff",
                  }}
                >
                  Contact Details
                </h1>
                {/* <h1
                    className="about-page-dash-txt"
                    ref={(el) => (dashbutton3 = el)}
                    onClick={handleSwitchClick3}
                    style={{
                      backgroundColor: "#EEEEEE",
                    }}
                  >
                    Enquiry Form
                  </h1> */}
              </div>
              <div
                className="about-page-dash-panel"
                style={{
                  display: "none",
                }}
                ref={(el) => (panel1 = el)}
              >
                <div className="operation-container">
                  <div className="search-container">
                    <input
                      type="text"
                      placeholder="search"
                      className="search"
                    />
                    <img src={Search} alt="" className="search-img" />
                  </div>
                  <div className="add-container">
                    <img src={Add} alt="" className="add" />
                  </div>
                </div>
                <div className="container-dash">
                  <p className="para-container">
                    <div className="images-container">
                      <img src={view} alt="" className="view" />
                      <img src={edit} alt="" className="view" />
                      <img src={close} alt="" className="view" />
                    </div>
                    <h1 className="title-container">Title : </h1>
                    The sky's the limit!​
                  </p>
                  <br />
                  <p className="para-container">
                    <h1 className="title-container">Paragraph : </h1>
                    Feel free to contact us for a detailed portfolio or a
                    no-strings-attached quote. Or, if you may, hit us up with a
                    hey to get chatting! After all, the real treasure is the
                    friends we make along the way!​
                  </p>
                </div>
              </div>
              <div
                className="about-page-dash-panel"
                style={{
                  marginTop: "15vh",
                }}
                ref={(el) => (panel2 = el)}
              >
                <div className="container-address">
                  <p className="para-container">
                    <h1 className="title-container">Address : </h1>
                    #671, 26th Main, 17th Cross, 6th Phase,J P Nagar, Bangalore{" "}
                  </p>
                  <img src={edit} alt="" className="view" />
                </div>
                <div className="container-address">
                  <p className="para-container">
                    <h1 className="title-container">Mail Id : </h1>
                    info@codelinear.com{" "}
                  </p>
                  <img src={edit} alt="" className="view" />
                </div>
                <div className="container-address">
                  <p className="para-container">
                    <h1 className="title-container">Phone No. : </h1>
                    +1 415 523 5957{" "}
                  </p>
                  <img src={edit} alt="" className="view" />
                </div>
              </div>
              <div
                className="about-page-dash-panel"
                style={{
                  display: "none",
                  marginTop: "15vh",
                }}
                ref={(el) => (panel3 = el)}
              ></div>
            </div>
          </TabPanel>
        </div>
      </Tabs>
    </>
  );
};

export default Dash;
