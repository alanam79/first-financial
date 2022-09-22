import React from "react";
import user1 from "./images/user1.jpeg";
import user2 from "./images/user2.jpeg";
import user3 from "./images/user3.jpeg";
import "./Testimonials.css";

const Testimonials = () => {
  return (
    <div className="testimonials">
      <div className="container">
        <h2>Testimonials</h2>
        <span className="line"></span>
        <div className="content">
          <div className="card">
            <img src={user1} alt="user2" />
            <p>
              Alana is a dedicated, fast learner, willing to take on new
              challenges to benefit her coding career.
            </p>
            <p>
              <span>Jim Jones</span>
            </p>
            <p>Director of "Coding Today"</p>
          </div>
          <div className="card">
            <img src={user2} alt="user2" />
            <p>
              Alana worked thru a 6 month Coding Camp, while working a full time
              job and maintained perfect attendance and completing all necessary
              assignments and projects.
            </p>
            <p>
              <span>Carol Hinz</span>
            </p>
            <p>Director of "Stack Alert"</p>
          </div>
          <div className="card">
            <img src={user3} alt="user3" />
            <p>
              Alana is looking for a full time position as a Full Stack Software
              Engineer and is open to learning new software languages to best
              assist a company.
            </p>
            <p>
              <span>James Harris</span>
            </p>
            <p>Manager of Global Engineering</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
