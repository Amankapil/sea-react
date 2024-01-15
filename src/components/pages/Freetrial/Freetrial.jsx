import React from "react";
import Fish from "../../subComponents/freetrails/fishanimate/Fish";
import HowitWorks from "../../subComponents/freetrails/howWorks/HowitWorks";
import HeroFt from "../../subComponents/freetrails/ftHero/HeroFt";
import Coverft from "../../subComponents/freetrails/ftCover/Coverft";

const Freetrial = () => {
  return (
    <>
      {/* <div>Freetrial</div> */}
      <HeroFt />
      
      <Coverft />
      <HowitWorks />
      <Fish />
    </>
  );
};

export default Freetrial;
