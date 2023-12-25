import React from 'react'
import './style.css'
import { Heading } from '../../../../atoms/heading'

export const AboutContent2 = () => {
  return (
    <section className="about-content-2">
      <div className="container">
        <div className="left">
          <div className="text">
            <Heading
            title="A little information for our valuable guest" 
            text='At place, we believe that dining is not just about food, but also about the overall experience. Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event.'
            />
          </div>
          <div className="img">
            <div className="statics">
              <div className="card">
                <h2>3</h2>
                <p>Locations</p>
              </div>
              <div className="card">
                <h2>1995</h2>
                <p>Founded</p>
              </div>
              <div className="card">
                <h2>65+</h2>
                <p>Staff Members</p>
              </div>
              <div className="card">
                <h2>100%</h2>
                <p>Satisfied Customers</p>
              </div>
            </div>
            <img src="./assets/about-content.png" alt="" className="mobile-display" />
          </div>
        </div>
        <img src="./assets/about-content.png" alt="" className="right" />
      </div>
    </section>
  )
}
