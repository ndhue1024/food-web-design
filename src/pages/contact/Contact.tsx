import React from 'react'
import './style.css'
import { Title } from '../../atoms/title'
import { GeneralTemplate } from '../../templates/GeneralTemplate'
import Button from '../../atoms/button'

export const Contact = () => {
  return (
    <GeneralTemplate>
      <section className="contact-page">
      <div className="hero">
        <div className="title">
          <Title title="Contact Us" />
          <p>We consider all the drivers of change gives you the components you need to change to create a truly happens.</p>
        </div>
        <div className="form">
            <form>
              <div className="input-group">
                <label>Name</label>
                <input className='input' type='text' placeholder='Enter you name' />
              </div>
              <div className="input-group">
                <label>Email</label>
                <input className='input' type='text' placeholder='Enter email address' />
              </div>
              <div className="input-group">
                <label>Subject</label>
                <input className='input' type='text' placeholder='Write a subject' />
              </div>
              <div className="input-group">
                <label>Message</label>
                <textarea className='input' placeholder='Write your message' rows={5}></textarea>
              </div>
              <div className="input-group">
                <Button title='Send' isRed={true} />
              </div>
            </form>
          </div>
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
