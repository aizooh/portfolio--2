import React from 'react'
import './ContactInfoCard.css'

const ContactInfoCard = ({ icon, text, link }) => {
  return (
     <div className="contact-details-card">
      <div className="icon">
        {icon}
      </div>
      {/* Wrap the text in an <a> tag */}
      {link ? ( // <--- Conditionally render the link if 'link' prop is provided
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="contact-text-link" // Add a class for styling the link specifically
        >
          {text}
        </a>
      ) : (
        <p>{text}</p> // <--- Fallback to a <p> tag if no link is provided
      )}
    </div>
  )
}

export default ContactInfoCard