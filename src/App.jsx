import React from 'react'
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import './App.css';
import Skills from './components/Skills/Skills';
import WorkExperience from './components/WorkExperience/WorkExperience';

const App = () => {
  return (
    <>
<Navbar />
<div className="container">
<Hero />
<Skills/>
<WorkExperience/>
</div>
    </>
  );
};

export default App;
