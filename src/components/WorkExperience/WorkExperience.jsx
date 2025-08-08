import React, { useRef, useEffect, useState } from 'react';
import { Work_Experience } from '../../utilis/data';
import ExperienceCard from './ExperienceCard/ExperienceCard';
import './WorkExperience.css';
import Slider from "react-slick";

const WorkExperience = () => {
    const sliderRef = useRef();
    const [isHovered, setIsHovered] = useState(false);
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const slideRight = () => {
        sliderRef.current.slickNext();
    };

    const slideLeft = () => {
        sliderRef.current.slickPrev();
    };

    // Set up an interval to slide every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            if (!isHovered) {
                slideRight();
            }
        }, 5000);

        // Clear the interval on component unmount
        return () => clearInterval(interval);
    }, [isHovered]);

    return (
        <section className="experience-container">
            <h5>Work Experience</h5>
            <div
                className="experience-content"
                onMouseEnter={() => setIsHovered(true)} // Pause on hover
                onMouseLeave={() => setIsHovered(false)} // Resume on leave
            >
                <div className="arrow-right" onClick={slideRight}>
                    <span className="material-symbols-outlined">
                        chevron_right
                    </span>
                </div>
                <div className="arrow-left" onClick={slideLeft}>
                    <span className="material-symbols-outlined">chevron_left</span>
                </div>

                <Slider ref={sliderRef} {...settings}>
                    {Work_Experience.map((item) => (
                        <ExperienceCard key={item.title} details={item} />
                    ))}
                </Slider>
            </div>
        </section>
    );
}

export default WorkExperience;
