import React from "react";
import "./About.css";
import aboutImg from "../assets/boom.png";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">

        {/* Left Image */}
        <div className="about-image">
          <img src={aboutImg} alt="Security System" />
        </div>

        {/* Right Content */}
        <div className="about-content">
          <h2>About Prilinesha Tech</h2>
          <p>
            Prilinesha Tech is a leading provider of advanced ANPR, Boom
            Barrier and RFID-based access control systems. We deliver
            smart security automation solutions for residential,
            commercial and industrial sectors.
          </p>

          <div className="about-highlights">
            <div className="highlight">
              <h4>✔ Smart Automation</h4>
              <p>Modern vehicle access control & monitoring systems.</p>
            </div>

            <div className="highlight">
              <h4>✔ Reliable Technology</h4>
              <p>High accuracy ANPR & RFID integration.</p>
            </div>

            <div className="highlight">
              <h4>✔ Secure Solutions</h4>
              <p>End-to-end security with boom barrier automation.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
