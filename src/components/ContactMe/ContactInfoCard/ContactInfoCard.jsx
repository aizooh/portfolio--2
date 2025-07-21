import React from 'react'
import './ContactInfoCard.css'

const ContactInfoCard = ({ icon, text, link }) => {
  return (
    <div className="contact-details-card">
      <div className="icon">
        {icon}
      </div>
      <a href={link} className="contact-link" target="_blank" rel="noopener noreferrer">
      <p>{text}</p>
      </a>
    </div>
  )
}

export default ContactInfoCard