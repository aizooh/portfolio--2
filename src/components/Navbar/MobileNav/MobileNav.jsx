import React from 'react'
import './MobileNav.css'

const MobileNav = ({isOpen, toogleMenu }) => {
  return <>
  
  <div className={`mobile-menu ${isOpen ? "active" : ""}`} 
  onClick={toogleMenu}>
    <div className="mobile-menu-container">
    <img className="logo" src="./assets/image/logo.svg  " alt="" />
    <ul>
        <li><a className="menu-item">Home</a>
         <li>  <a className="menu-item">Skills</a>        </li>  
         <li>  <a className="menu-item">Work Experience</a>       </li>  
         <li>  <a className="menu-item">Contact Me</a> </li>  
            </li>
            <button className="contact-btn" onClick={()=>{}}>
                Hire Me</button>
        </ul>

    </div>
    </div>
  </>
}

export default MobileNav