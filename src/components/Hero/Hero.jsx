import React from "react";
import "./Hero.css";
import profile from "../../assets/images/profile.jpg";
// import img01 from "../../assets/images/img01.png";
import cssImg from "../../assets/images/css.png";
import html from "../../assets/images/html.png";
import jsImg from "../../assets/images/java script.png";
import reactImg from "../../assets/images/react.png";

const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-content">
        <h2>Building Digital Experiences That Inspire</h2>
        <p>
          Passionate Frontend Developer | Transforming Ideas into Seamless and
          Visually Stunning Web Solutions
        </p>
      </div>

      <div className="hero-img-and-stack">
        <img className="profile-img" src={profile} alt="Profile" />
        {/* Tech stack: horizontal row below the main image */}
        <div className="tech-stack-row">
          <div className="tech-icon">
            <img src={html} alt="HTML" />
          </div>
          <div className="tech-icon">
            <img src={cssImg} alt="CSS" />
          </div>
          <div className="tech-icon">
            <img src={jsImg} alt="JavaScript" />
          </div>
          <div className="tech-icon">
            <img src={reactImg} alt="React" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;