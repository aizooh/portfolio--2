import React from "react";
import "./Hero.css";

import img01 from "../../assets/images/img01.png";
import img02 from "../../assets/images/img02.png";
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

      <div className="Hero-img">
        <div>
          <div className="tech-icon">
            <img src={reactImg} alt="" />
          </div>
          <img src={img01} alt="" />
        </div>
        <div>
          <div className="tech-icon">
            <img scr={ jsImg } alt="" />
          </div>
          <div className="tech-icon">
            <img src={cssImg} alt="" />
          </div>
          <div className="tech-icon">
            <img src={html} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
