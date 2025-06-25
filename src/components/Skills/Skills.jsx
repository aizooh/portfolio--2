import React, { useState } from 'react';
import './Skills.css';
import {SKILLS} from "../../utilis/data";
import SkillsCard from "./SkillCard/SkillCard";
import  SkillsInfoCard from './SkillsInfoCard/SkillsInfoCard'

const Skills = () => {
    const [selectedSkill, SetSelectedSkill]= useState(SKILLS[0]);
    const handleSelectedSkill= (data)=>{
        SetSelectedSkill(data);
    };
  return (
    <section className="skills-container">
        <h5> Technical Proficiency</h5>
        <div className="skills-content">
            <div className="skills">
                {SKILLS.map((item) => (
                    <SkillsCard
                    key={item.title}
                    iconUrl={item.icon}
                    title={item.title}
                    isActive={selectedSkill.title === item.title}
                    onClick={()=>{
                        handleSelectedSkill(item);
                    }}
                    />
                ))}
            </div>
            <div className="skills-info">

                <SkillsInfoCard 
                heading={selectedSkill.title}
                skills={selectedSkill.skills}  />
            </div>

        </div>
    </section>
  )
}

export default Skills
