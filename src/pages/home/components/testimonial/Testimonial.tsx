import React from 'react'
import './style.css'
import { Title } from '../../../../atoms/title'
import { CardItem } from '../../../../molecules/card-item/CardItem'

export const Testimonial = () => {
  return (
    <section className="testimonial">
      <div className="container">
        <Title title="What Our Customers Say" />
        <div className="list-card">
          <CardItem
            title="“The best restaurant”"
            text="Last night, we dined at place and were simply blown away. From the moment we stepped in, we were enveloped in an inviting atmosphere and greeted with warm smiles."
            src="./assets/user1.png"
            name="Sophire Robson"
            address="Los Angeles, CA"
          />
          <CardItem
            title="“Simply delicious”"
            text="Place exceeded my expectations on all fronts. The ambiance was cozy and relaxed, making it a perfect venue for our anniversary dinner. Each dish was prepared and beautifully presented."
            src="./assets/user2.png"
            name="Matt Cannon"
            address="San Diego, CA"
          />
          <CardItem
            title="“One of a kind restaurant”"
            text="The culinary experience at place is first to none. The atmosphere is vibrant, the food - nothing short of extraordinary. The food was the highlight of our evening. Highly recommended."
            src="./assets/user3.png"
            name="Andy Smith"
            address="San Francisco, CA"
          />
        </div>
      </div>
    </section>
  )
}
