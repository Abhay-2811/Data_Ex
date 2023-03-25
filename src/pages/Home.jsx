import React from "react";
import landPage from "../images/landpage.png";
import tri from "../images/tri.png";
import thread from "../images/thread.png";
import tri2 from "../images/tri2.png";
import donut from "../images/donut.png";
import { CiAlarmOn } from "react-icons/ci";
import { FaLaptopCode } from "react-icons/fa";
import { HiArrowNarrowRight } from "react-icons/hi";

import "./home.css";
const Home = () => {
  const Clia = <CiAlarmOn />;
  const Code = <FaLaptopCode className="icon" />;
  return (
    <div className="home__container">
      <h2 className="heading">Best Digital Agency</h2>
      <h1 className="heading__sec first">Digital Solutions Agency For</h1>
      <h1 className="heading__sec">Growth Business</h1>
      <p className="para">
        et netus et malesuada fames ac turpis egestas integer eget aliquet nibh
        praesent tristique magna sit amet purus gravida quis blandit turpis
        cursus in hac habitasse platea dictumst quisque sagittis
      </p>
      <a className="getStarted">
        Get Started With Us
        <HiArrowNarrowRight className="arrowicon" />
      </a>
      <img src={tri} className="tri"></img>
      <img src={tri2} className="tri2"></img>
      <img src={thread} className="thread"></img>
      <img src={donut} className="donut"></img>

      <img src={landPage} className="landpage"></img>
      <p>&copy; created by team brocode </p>
    </div>
  );
};

export default Home;
