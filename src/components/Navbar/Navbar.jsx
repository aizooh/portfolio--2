import React, { useState} from 'react'
import './Navbar.css'
import MobileNav from "./MobileNav/MobileNav"

const Navbar = () => {
    const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth' // This enables smooth scrolling
      });
    }
  };

    const [openMenu, setOpenMenu]= useState(false);
    const toogleMenu=()=>{
        setOpenMenu(!openMenu);
    };
  return (
    <>
    <MobileNav isOpen={openMenu} toogleMenu={toogleMenu} />
    <nav className="nav-wrapper">
        <div className="nav-content">
            <img className="logo" src="./assests/images/logo.svg" alt=""/>
<ul>
         <li> <a className="menu-item" onClick={() => scrollToSection('home')}>Home</a>     </li>  
         <li>  <a className="menu-item"onClick={() => scrollToSection('skills')} >Skills</a>        </li>  
         <li>  <a className="menu-item"onClick={() => scrollToSection('work-experience')}>Work Experience</a>       </li>  
         <li>  <a className="menu-item"onClick={() => scrollToSection('contact-me')}>Contact Me</a> </li>  
         <button className="contact-btn" onClick={()=>{}}>
            Hire Me</button>         
         </ul>
         <button className="menu-btn" onClick={toogleMenu}>
        <span 
        className={"material-symbols-outlined "}
        style={{fontSize :"1.8rem"}}>
            {openMenu ? "close" : "menu"}
            </span>
         </button>
    </div>
            </nav>
            
    </>
    );
};

export default Navbar;
