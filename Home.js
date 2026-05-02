import React from "react";
import "./Home.css";
import heroImg from "../assets/anpr.png";

const Home = () => {
  return (
    <section
      id="home"   // ✅ Ye add kiya gaya hai (Important)
      className="hero-section"
      style={{
        backgroundImage: `linear-gradient(rgba(10,25,47,0.85), rgba(10,25,47,0.85)), url(${heroImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      <div className="hero-container">
        <div className="hero-text">
          <h1>
            Smart ANPR & RFID <br /> Security Solutions
          </h1>

          <p>
            Prilinesha Tech delivers advanced ANPR systems, Boom Barrier
            automation and RFID-based access control solutions for modern
            enterprises and smart cities.
          </p>

          <div className="hero-buttons">
            <a href="#services" className="btn-primary">Explore Services</a>
            <a href="#contact" className="btn-outline">Get Consultation</a>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
