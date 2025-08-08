import React, { useState, useEffect } from 'react';
import './Skills.css';
import { SKILLS } from "../../utilis/data";
import SkillsCard from "./SkillCard/SkillCard";
import SkillsInfoCard from './SkillsInfoCard/SkillsInfoCard';

const Skills = () => {
    const [selectedSkill, setSelectedSkill] = useState(SKILLS[0]);
    const [isHovered, setIsHovered] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleSelectedSkill = (data) => {
        setSelectedSkill(data);
        setCurrentIndex(SKILLS.indexOf(data)); // Update current index for manual selection
    };

    // Function to switch to the next skill
    const switchSkill = () => {
        const nextIndex = (currentIndex + 1) % SKILLS.length; // Loop back to the first skill
        setSelectedSkill(SKILLS[nextIndex]);
        setCurrentIndex(nextIndex);
    };

    // Set up an interval to switch skills every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            if (!isHovered) {
                switchSkill();
            }
        }, 5000);

        // Clear the interval on component unmount
        return () => clearInterval(interval);
    }, [isHovered, currentIndex]);

    return (
        <section className="skills-container">
            <h5>Technical Proficiency</h5>
            <div 
                className="skills-content"
                onMouseEnter={() => setIsHovered(true)} // Pause on hover
                onMouseLeave={() => setIsHovered(false)} // Resume on leave
            >
                <div className="skills">
                    {SKILLS.map((item) => (
                        <SkillsCard
                            key={item.title}
                            iconUrl={item.icon}
                            title={item.title}
                            isActive={selectedSkill.title === item.title}
                            onClick={() => handleSelectedSkill(item)}
                        />
                    ))}
                </div>
                <div className="skills-info">
                    <SkillsInfoCard 
                        heading={selectedSkill.title}
                        skills={selectedSkill.skills}  
                    />
                </div>
            </div>
        </section>
    );
}

export default Skills;
