import React from 'react'
import './ContactForm.css'

const ContactForm = () => {
  return (
    <div className="coontact-form-content">
        <form action="">
            <div className="name-container">
                <input type="text" name="firstname " placeholder="First Name"  />
                <input type="text" name="lastname " placeholder="Last Name"  />

            </div>
            <input type="text" name="email" placeholder="Email" />
            <textarea type="text" name="Message" placeholder="Message" rows={3}  />
            <button>
                SEND
            </button>
        </form>

    </div>
  )
}

export default ContactForm
