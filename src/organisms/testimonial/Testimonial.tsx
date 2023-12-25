import './style.css'
import { Heading } from '../../atoms/heading'
import { TestimonialCard } from '../../molecules/testimonial-card/TestimonialCard'

export const Testimonial = () => {
  
  return (
    <section className="testimonial">
      <div className="container">
        <Heading title="What Our Customers Say" />
        <div className="list-card">
        <TestimonialCard
            title="“The best restaurant”"
            text="Last night, we dined at place and were simply blown away. From the moment we stepped in, we were enveloped in an inviting atmosphere and greeted with warm smiles."
            src="./assets/user1.png"
            name="Sophire Robson"
            address="Los Angeles, CA"
          />
          <TestimonialCard
            title="“Simply delicious”"
            text="Place exceeded my expectations on all fronts. The ambiance was cozy and relaxed, making it incredibly a perfect venue for our anniversary dinner. Each dish was prepared and beautifully presented."
            src="./assets/user2.png"
            name="Matt Cannon"
            address="San Diego, CA"
          />
          <TestimonialCard
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
