import React from 'react'
import './SkillsCard.css'

const SkillCard = ({ title, iconUrl, isActive, onClick }) => {
  return (
    <div
      className={`skills-card ${isActive ? "active" : ""}`}
      onClick={onClick}
    >
      <div className="skills-icon">
        {iconUrl && <img src={iconUrl} alt={title} />}
      </div>
      <span>{title}</span>
    </div>
  )
}

export default SkillCard