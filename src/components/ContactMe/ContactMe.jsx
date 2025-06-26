import React from 'react'
import './ContactMe.css'
import ContactForm from './ContactForm/ContactForm'
import ContactInfoCard from "./ContactInfoCard/ContactInfoCard"
const ContactMe = () => {
  return (
    <section className="contact-container">

        <h5>Contact Me</h5>
        <div className="contact-content">
            <div style={{ flex:1 }}>
                <ContactInfoCard
                iconUrl="./assets/images/01.png"
                text="isaack@gmail.com" />
                <ContactInfoCard
                iconUrl="./assets/images/02.png"
                text="https://github.com/aizooh" />
            </div>
            <div style={{ flex:1 }}>
                <ContactForm/>
            </div>
        </div > 
    </section>
  )
}

export default ContactMe
