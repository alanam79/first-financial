import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="content">
        <p>Call Us</p>
        <p>800-456-7890</p>
        <p>Because Money </p>
        <p>Doesn't Grow on Trees</p>
        <button href="/" className="button">
          Free Consultation
        </button>
      </div>
    </div>
  );
};

export default Hero;
