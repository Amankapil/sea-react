import React from "react";
import "./cover.scss";
import hug from "./hug.svg";

const Coverft = () => {
  return (
    <>
      <div className="what-covers py-20">
        <div className="main-cover flex items-start justify-start gap-[13rem] w-full flex-rap">
          <div className="head-cover max-sm:ml-2">
            <h1>What does Free-trial cover?</h1>
          </div>
          <div className="box-cover flex flex-wrap gap-12">
            <div className="free-search">
              <div className="search-icon flex flex-xol gap-5">
                <img src={hug} alt="" />
              </div>
              <div className="quality-search flex flex-col gap-4">
                <h1>Leo quis id ut</h1>
                <p>
                  Amet hendrerit amet elit dolor cras tellus sit volutpat
                  pretium. Morbi neque.
                </p>
              </div>
            </div>
            <div className="free-search">
              <div className="search-icon flex flex-xol gap-5">
                <img src={hug} alt="" />
              </div>
              <div className="quality-search flex flex-col gap-4">
                <h1>Leo quis id ut</h1>
                <p>
                  Amet hendrerit amet elit dolor cras tellus sit volutpat
                  pretium. Morbi neque.
                </p>
              </div>
            </div>
            <div className="free-search">
              <div className="search-icon flex flex-xol gap-5">
                <img src={hug} alt="" />
              </div>
              <div className="quality-search flex flex-col gap-4">
                <h1>Leo quis id ut</h1>
                <p>
                  Amet hendrerit amet elit dolor cras tellus sit volutpat
                  pretium. Morbi neque.
                </p>
              </div>
            </div>
            <div className="free-search">
              <div className="search-icon flex flex-xol gap-5">
                <img src={hug} alt="" />
              </div>
              <div className="quality-search flex flex-col gap-4">
                <h1>Leo quis id ut</h1>
                <p>
                  Amet hendrerit amet elit dolor cras tellus sit volutpat
                  pretium. Morbi neque.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Coverft;
