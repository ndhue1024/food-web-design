import React from 'react'
import { Title } from '../../../atoms/title'
import './style.css'

export const BlogDetailsHero = () => {
  return (
    <section className="blog-details-hero">
      <div className="container">
        <div className="title">
          <Title title="The secret tips & tricks to prepare a perfect burger & pizza for our customers" />
        </div>
        <div className="blog-img-1">
            <img src="./assets/blog-details-1.png" alt="blog-details" />
        </div>
        <div className="content">
          <div className="para-1">
            <h5 className='sub-title'>What do you need to prepare a home-made burger?</h5>
            <p>Creating the perfect burger and pizza is an art, combining ingredients, techniques, and passion to craft dishes that truly delight the palate. Today, we'll unveil some closely guarded secrets and insider tips for mastering these beloved staples of the culinary world.<br />
              1. <span className="marked"> Quality Beef: </span> The heart of a perfect burger is top-notch beef. Opt for fresh, high-quality ground beef with a fat content of about 20% for the juiciest, most flavorful results.
            
            </p>
            
          </div>
        </div>
      </div>
    </section>
  )
}
