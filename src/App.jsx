import React from 'react'
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import './App.css';
import Skills from './components/Skills/Skills';
import WorkExperience from './components/WorkExperience/WorkExperience';
import ContactMe from './components/ContactMe/ContactMe'
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <>
{/* <Navbar />
<div className="container">
<Hero />
<Skills/>
<WorkExperience/>
<ContactMe/>
</div>
<Footer/> */}
 <Navbar />
      <div className="container">
        <div id="home"><Hero /></div>
        <div id="skills"><Skills /></div>
        <div id="work-experience"><WorkExperience /></div>
        <div id="contact-me"><ContactMe /></div>
      </div>
      <Footer />
    </>
  );
};

export default App;
