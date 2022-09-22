import React from "react";
import john from "./images/john-doe.png";
import "./About.css";

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <img src={john} alt="john" />
        <div className='col-2'>
            <h2>About</h2>
            {/* line is the class name we built in App.css */}
            <span className='line'></span>
            <p>This is a mock up financial page to teach me how to use React to built professional style pages.</p>
            <p>This is John Doe, he is helping me make this page look awesome!</p>
            <button className='button'>Explore More</button>
        </div>
      </div>
    </div>
  );
};

export default About;
