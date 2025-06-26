import React from 'react'
import './ContactMe.css'
import ContactForm from './ContactForm/ContactForm'
import ContactInfoCard from "./ContactInfoCard/ContactInfoCard"

// SVG components
const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width={24} height={24}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
  </svg>
)
const GitHubIcon = () => (
  <svg width={24} height={24} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.385.6.113.82-.26.82-.577v-2.17c-3.338.726-4.033-1.415-4.033-1.415-.546-1.385-1.333-1.753-1.333-1.753-1.089-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.304.762-1.604-2.665-.3-5.467-1.334-5.467-5.93 0-1.31.47-2.38 1.236-3.22-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 013.003-.404c1.018.005 2.045.138 3.003.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.807 5.625-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .32.218.694.825.576C20.565 21.796 24 17.298 24 12c0-6.627-5.373-12-12-12z"/>
  </svg>
)
const LinkedInIcon = () => (
  <svg width={24} height={24} fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.327-.024-3.037-1.849-3.037-1.851 0-2.133 1.445-2.133 2.939v5.667h-3.554V9h3.414v1.561h.049c.476-.899 1.637-1.849 3.37-1.849 3.602 0 4.268 2.369 4.268 5.455v6.285zM5.337 7.433a2.07 2.07 0 110-4.141 2.07 2.07 0 010 4.141zM7.119 20.452H3.554V9h3.565v11.452z"/>
  </svg>
)

const ContactMe = () => {
  return (
    <section className="contact-container">
      <h5>Contact Me</h5>
      <div className="contact-content">
        <div style={{ flex:1 }}>
          <ContactInfoCard
            icon={<MailIcon />}
            text="isaack@gmail.com"
            link="mailto:isaack@gmail.com"
          />
          <ContactInfoCard
            icon={<GitHubIcon />}
            text="github.com/aizooh"
            link="https://github.com/aizooh"
          />
          <ContactInfoCard
            icon={<LinkedInIcon />}
            text="linkedin.com/in/isaack-gitundu"
            link="https://www.linkedin.com/in/isaack-gitundu"
          />
        </div>
        <div style={{ flex:1 }}>
          <ContactForm/>
        </div>
      </div>
    </section>
  )
}

export default ContactMe