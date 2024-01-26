import React from "react";
import "./blog.scss";
import img from "./assets/unsplash_L1y9f5O8wiA.svg";
import rain from "./assets/Rainbow 1.png";
import rainp from "./assets/unsplash_HRZUzoX1e6w.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import Emailsub from "./Emailsub";
const Blog = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setError(true);
      return;
    }
    // Here you can perform additional validation if needed

    // For simplicity, let's just log the email to the console
    console.log(`Subscribed with email: ${email}`);
    setError(false);

    // You may want to send the email to a server for further processing
    // For example, using fetch or axios

    // After successful subscription, update the state
    setSubscribed(true);
  };
  return (
    <>
      {/* ?///////////////////// */}
      {/* div.fixed */}
      <div class="fixed-button">
        <button class="fixed right-[50px] bottom-[50px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="79"
            height="80"
            viewBox="0 0 79 80"
            fill="none"
          >
            <circle cx="39.4639" cy="39.9436" r="39.375" fill="#3040D0" />
          </svg>
          <div class="absolute up">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="33"
              height="32"
              viewBox="0 0 33 32"
              fill="none"
            >
              <path
                d="M22.9861 18.8026L16.4637 12.2803L9.94141 18.8026"
                stroke="white"
                stroke-width="3.26117"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </button>
      </div>

      <section class="blog-main ">
        <div class="blog flex flex-col items-center justify-center">
          <div class="blog-head pt-[15%] pb-4">All Blogs</div>

          <div class="blog-tags py-10">
            <ul class="flex  items-center justify-center ullist flex-wrap">
              <li class="in-tag">All</li>
              <li class="in-tag">SEO</li>
              <li class="in-tag">Local SERP</li>
              <li class="in-tag">Analysis</li>
            </ul>
          </div>

          <div class="all-blogs flex items-center justify-center flex-wrap pt-12">
            <div class="blog-box">
              <Link to="/dummyblog" class="in-box">
                <img src={img} alt="" />

                <p class="pt-4 pb-0">Lorem ipsum dolor sit amet consectetur.</p>
                <span class="date p4">12/12/2012</span>
                <p class="pt-2">
                  <Link to="/dummyblog">Read More</Link>
                </p>
              </Link>
            </div>
            <div class="blog-box">
              <div class="in-box">
                <img src={img} alt="" />

                <p class="pt-4 pb-0">Lorem ipsum dolor sit amet consectetur.</p>
                <span class="date p4">12/12/2012</span>
                <p class="pt-2">
                  <a href=".">Read More</a>
                </p>
              </div>
            </div>
            <div class="blog-box">
              <div class="in-box">
                <img src={img} alt="" />

                <p class="pt-4 pb-0">Lorem ipsum dolor sit amet consectetur.</p>
                <span class="date p4">12/12/2012</span>
                <p class="pt-2">
                  <a href=".">Read More</a>
                </p>
              </div>
            </div>
            <div class="blog-box">
              <div class="in-box">
                <img src={img} alt="" />

                <p class="pt-4 pb-0">Lorem ipsum dolor sit amet consectetur.</p>
                <span class="date p4">12/12/2012</span>
                <p class="pt-2">
                  <a href=".">Read More</a>
                </p>
              </div>
            </div>
            <div class="blog-box">
              <div class="in-box">
                <img src={img} alt="" />

                <p class="pt-4 pb-0">Lorem ipsum dolor sit amet consectetur.</p>
                <span class="date p4">12/12/2012</span>
                <p class="pt-2">
                  <a href=".">Read More</a>
                </p>
              </div>
            </div>
            <div class="blog-box">
              <div class="in-box">
                <img src={img} alt="" />

                <p class="pt-4 pb-0">Lorem ipsum dolor sit amet consectetur.</p>
                <span class="date p4">12/12/2012</span>
                <p class="pt-2">
                  <a href=".">Read More</a>
                </p>
              </div>
            </div>
            <div class="blog-box">
              <div class="in-box">
                <img src={img} alt="" />

                <p class="pt-4 pb-0">Lorem ipsum dolor sit amet consectetur.</p>
                <span class="date p4">12/12/2012</span>
                <p class="pt-2">
                  <a href=".">Read More</a>
                </p>
              </div>
            </div>
            <div class="blog-box">
              <div class="in-box">
                <img src={img} alt="" />

                <p class="pt-4 pb-0">Lorem ipsum dolor sit amet consectetur.</p>
                <span class="date p4">12/12/2012</span>
                <p class="pt-2">
                  <a href=".">Read More</a>
                </p>
              </div>
            </div>
            <div class="blog-box">
              <div class="in-box">
                <img src={img} alt="" />

                <p class="pt-4 pb-0">Lorem ipsum dolor sit amet consectetur.</p>
                <span class="date p4">12/12/2012</span>
                <p class="pt-2">
                  <a href=".">Read More</a>
                </p>
              </div>
            </div>
            <div class="blog-box">
              <div class="in-box">
                <img src={img} alt="" />

                <p class="pt-4 pb-0">Lorem ipsum dolor sit amet consectetur.</p>
                <span class="date p4">12/12/2012</span>
                <p class="pt-2">
                  <a href=".">Read More</a>
                </p>
              </div>
            </div>
            <div class="blog-box">
              <div class="in-box">
                <img src={img} alt="" />

                <p class="pt-4 pb-0">Lorem ipsum dolor sit amet consectetur.</p>
                <span class="date p4">12/12/2012</span>
                <p class="pt-2">
                  <a href=".">Read More</a>
                </p>
              </div>
            </div>
            <div class="blog-box">
              <div class="in-box">
                <img src={img} alt="" />

                <p class="pt-4 pb-0">Lorem ipsum dolor sit amet consectetur.</p>
                <span class="date p4">12/12/2012</span>
                <p class="pt-2">
                  <a href=".">Read More</a>
                </p>
              </div>
            </div>
          </div>

          <div class="paginate flex items-center justify-center pt-24 max-md:flex-wrap">
            <div class="prev">Prev</div>
            <div class="page-number px-12 flex items-center justify-center">
              <p class=" page active">1</p>
              <span class="page-num ">2</span>
              <span class="page-num ">3</span>
              <span class="page-num ">4</span>
              <span class="page-num ">5</span>
            </div>
            <div class="next">Next</div>
          </div>
        </div>
      </section>

      <Emailsub />
    </>
  );
};

export default Blog;
