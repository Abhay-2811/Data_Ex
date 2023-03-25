import React from "react";
import "./about.css";
import Slider from "../components/Slider/Slider";
const About = () => {
  return (
    <div className="about__container">
      <div className="header_container">
        <h1>Contact Us</h1>
        <p>Any questions or remarks? Just write a message!</p>
      </div>
      <div className="about_middle">
        <div className="left">
          <Slider />
        </div>
        <div className="right">
          <h1>Get in Touch</h1>
          <p>
            Have an inquiry or some feedbak for us? Fill out the form below to
            contact our team.
          </p>
          <form>
            <label>Name </label>
            <input type="text" placeholder="Enter your Name"></input>
            <label>Email</label>
            <input type="email" placeholder="Enter your email address"></input>
            <label>How can we help?</label>
            <textarea rows="3" cols="50"></textarea>
          </form>
          <button type="submit">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default About;
