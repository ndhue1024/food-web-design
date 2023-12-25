import React from 'react'
import { GeneralTemplate } from '../../templates/GeneralTemplate'
import { Heading } from '../../atoms/heading'
import { BookingForm } from '../../molecules/booking-form/BookingForm';
import './style.css'

export const Book = () => {
  return (
    <GeneralTemplate>
      <section className="book">
        <div className="hero">
            <Heading 
            title="Book A Table" 
            text='We consider all the drivers of change gives you the components you need to change to create a truly happens.'
            />
            
          <div className="form">
            <BookingForm />
          </div>
        </div>
        <div className="map">
          <img src="./assets/Map.png" alt="map" />
        </div>
      </section>
    </GeneralTemplate>
  )
}
