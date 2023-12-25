import React from 'react'

import { GeneralTemplate } from '../../templates/GeneralTemplate'
import { Heading } from '../../atoms/heading'
import { ContactForm } from '../../molecules/contact-form/ContactForm'

import './style.css'

export const Contact = () => {
  return (
    <GeneralTemplate>
      <section className="contact-page">
      <div className="hero">
          <Heading
          title="Contact Us"
          text="We consider all the drivers of change gives you the components you need to change to create a truly happens."
          />
        <ContactForm />
      </div>
      <div className="info">
        <div className="call">
          <p className='title'>Call Us:</p>
          <p className='text'>+1-234-567-8900</p>
        </div>
        <div className="hours">
          <p className='title'>Hours:</p>
          <p className='text'>Mon-Fri: 11am - 8pm</p>
          <p className="text">Sat, Sun: 9am - 10pm</p>
        </div>
        <div className="location">
          <p className='title'>Our Location:</p>
          <p className='text'>123 Bridge Street</p>
          <p className="text">Nowhere Land, LA 12345 United States</p>
        </div>
      </div>
    </section>
    </GeneralTemplate>
  )
}
