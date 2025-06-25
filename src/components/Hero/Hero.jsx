import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <section className="hero-container"> 
    <div className="hero-content"> 
      <h2>Building Digital Experiences That Inspire  </h2>
      <p> Passionate Frontend Developer | Transforming Ideas into Seamless and Visually Stunning Web Solutions</p>
      </div>

      <div className="Hero-img">
        <div> 
          <div className="tech-icon">
            <img src="./assets/images/01.png" alt="html"/>
          </div>
          <img src="./assets/images/02.png" alt="ondsdse"/>
        </div>

      </div>
      <div>
        <div className="tech-icon"> 
          <img src=".\assets\images\02.png" alt="one twor"/>
        </div>
         <div> 
          <img src="./assets/images/01.png" alt="one twor"/>
        </div>
         <div className="tech-icon"> 
          <img src="./assets/images/02.png" alt="one twor"/>
        </div>
         <div className="tech-icon"> 
          <img src="./assets/images/02.png" alt="one twor"/>
        </div>
         <div className="tech-icon"> 
          <img src="./assets/images/02.png" alt="one twor"/>
        </div>
         
      </div>

    </section>
  )
} 

export default Hero
