import React from 'react'
import './style.css'
import carousel from '../../../../assets/carousel.png';
import Button from '../../../../atoms/button';
import { Link } from 'react-router-dom';

export const Carousel = () => {
  return (
    <section className="carousel" style={{ backgroundImage: `url(${carousel})`}}>
      <div className="content">
        <h1>Best food for your taste</h1>
        <p>Discover delectable cuisine and unforgettable moments in our welcoming, culinary haven.</p>
        <div className="button-container">
          <div className="button1">
            <Link to="/book">
              <Button title="Book A Table" isRed={true} />
            </Link>
          </div>
          <div className="button2">
            <Link to="/menu">
              <Button title="Explore Menu" isRed={false} />
            </Link>
          </div>
        </div>
      </div>
        <div className="blur"></div>
    </section>
  )
}
