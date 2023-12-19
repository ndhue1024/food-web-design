import React from 'react'
import './style.css'
import carousel from '../../../../assets/carousel.png';
import Button from '../../../../atoms/button';

export const Carousel = () => {
  return (
    <section className="carousel" style={{ backgroundImage: `url(${carousel})`}}>
      <div className="content">
        <h1>Best food for your taste</h1>
        <p>Discover delectable cuisine and unforgettable moments in our welcoming, culinary haven.</p>
        <div className="button-container">
          <div className="button1">
            <Button title="Book A Table" isRed={true} />
          </div>
          <div className="button2">
            <Button title="Explore Menu" isRed={false} />
          </div>
        </div>
      </div>
    </section>
  )
}
