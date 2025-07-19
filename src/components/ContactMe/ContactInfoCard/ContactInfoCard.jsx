import React from 'react'
import './ContactInfoCard.css'

const ContactInfoCard = ({ icon, text }) => {
  return (
    <div className="contact-details-card">
      <div className="icon">
        {icon}
      </div>
      <p>{text}</p>
    </div>
  )
}

export default ContactInfoCard