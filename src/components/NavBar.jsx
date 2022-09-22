import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "./images/logo.png";
import "./NavBar.css";

const NavBar = () => {
  // setting default to false, as we do not want the hamburger in the 'clicked' state
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <div className="header">
      <nav className="navbar">
        <a href="/" className="logo">
          <img src={logo} alt="logo" />
        </a>
        <div className="hamburger" onClick={handleClick}>
          {/* ternary operator stating, if clicked, show FaTime, else show FaBars   */}
          {click ? (
            <FaTimes size={30} style={{ color: "#ffffff" }} />
          ) : (
            <FaBars size={30} style={{ color: "#ffffff" }} />
          )}
        </div>
        {/* ternary operating stating if the menu is clicked it will pull from -100% to 0, which will pull the menu onto the screen, else nav-menu, no menu pulled over*/}
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <a href="/">Home</a>
          </li>
          <li className="nav-item">
            <a href="/">About</a>
          </li>
          <li className="nav-item">
            <a href="/">Testimonials</a>
          </li>
          <li className="nav-item">
            <a href="/">Demo</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
