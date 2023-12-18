import React from 'react'
import './style.css'
import { Title } from '../../atoms/title'
import Button from '../../atoms/button'
import { ContactCard } from '../../molecules/contact-card/ContactCard'

import image from "../../assets/Image.png";

export const About = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="img"  style={{ backgroundImage: `url(${image})`}}>
          <ContactCard />
        </div>
        <div className="content">
          <Title title="We provide healthy food for your family." />
          <p className='content-1'>Our story began with a vision to create a unique dining experience that merges fine dining, exceptional service, and a vibrant ambiance. Rooted in city's rich culinary culture, we aim to honor our local roots while infusing a global palate.</p>
          <p className='content-2'>At place, we believe that dining is not just about food, but also about the overall experience. Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event.</p>
          <div className="about-button">
            <Button title="More About Us" isRed={false} />
          </div>
        </div>
      </div>
    </section>
  )
}
