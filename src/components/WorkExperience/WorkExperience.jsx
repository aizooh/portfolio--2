import React, { useRef } from 'react';
import {Work_Experience} from '../../utilis/data';
import ExperienceCard from './ExperienceCard/ExperienceCard';
import './WorkExperience.css';
import Slider from "react-slick"
const WorkExperience = () => {
    const sliderRef =useRef();
    const settings={
        dots:false,
        infinite:true,
        speed:500,
        slideToShow:2,
        slideToSroll:1,
        arrows:false,
        responsive: [
            {
                breakpoint:769,
                settings:{
                    slideToShow:1,
                    slideToSroll:1.
                },
            },
        ],
    };
    const slideRight=() =>{
        sliderRef.current.slickNext();
    };
    const slideLeft=()=>{
        sliderRef.current.slickPrev();
    };
  return (
    <section className="experience-container">
        <h5>Work Experience</h5>
        <div className="experience-content">
            <div className="arrow-right" onClick={slideRight}>
                <span class="material-symbols-outlined">
                    chevron_right </span>
            </div>
<div className="arrow-left" onClick={slideLeft}>
    <span class="material-symbols-outlined">chevron_left </span>
</div>

            <slider red ={ sliderRef } {...settings}>
            {Work_Experience.map((item)=>(
                <ExperienceCard key={item.title} details={item}/>
            ))}
</slider>
        </div>
        </section>
  )
}

export default WorkExperience
