import React from 'react'
import './style.css'
import { Title } from '../../../../atoms/title'

export const AboutContent1 = () => {
  return (
    
    <section className="about-content-1">
      <div className="bg-video">
        <img src="./assets/BG.png" className='bg' alt="BG" />
        <div className="video-content">
          <img src="./assets/Play.png" alt="btn-play" className="btn-play" />
          <Title title="Feel the authentic & original taste from us" />
        </div>
      </div>
      <div className="features">
        <div className="feature-1">
          <img src="./assets/feature1.png" alt="feature" />
          <div className="text">
            <h4>Multi Cuisine</h4>
            <p>In the new era of technology we look in the future with certainty life.</p>
          </div>
        </div>
        <div className="feature-1">
          <img src="./assets/feature2.png" alt="feature" />
          <div className="text">
            <h4>Easy To Order</h4>
            <p>In the new era of technology we look in the future with certainty life.</p>
          </div>
        </div>
        <div className="feature-1">
          <img src="./assets/feature3.png" alt="feature" />
          <div className="text">
            <h4>Fast Delivery</h4>
            <p>In the new era of technology we look in the future with certainty life.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
