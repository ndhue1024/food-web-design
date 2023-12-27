import Heading from '@atoms/heading'
import TestimonialCard from '@molecules/testimonialCard'
import './style.css'

const data = [
  {
    "title": "“The best restaurant”",
    "text": "Last night, we dined at place and were simply blown away. From the moment we stepped in, we were enveloped in an inviting atmosphere and greeted with warm smiles.",
    "src": "https://res.cloudinary.com/dpb8gwksd/image/upload/v1703579418/food-web/user1_gfi7gh.png",
    "name": "Sophire Robson",
    "address": "Los Angeles, CA"
  },
  {
    "title": "“Simply delicious”",
    "text": "Place exceeded my expectations on all fronts. The ambiance was cozy and relaxed, making it incredibly a perfect venue for our anniversary dinner. Each dish was prepared and beautifully presented.",
    "src": "https://res.cloudinary.com/dpb8gwksd/image/upload/v1703579418/food-web/user2_wopozr.png",
    "name": "Matt Cannon",
    "address": "San Diego, CA"
  },
  {
    "title": "“One of a kind restaurant”",
    "text": "The culinary experience at place is first to none. The atmosphere is vibrant, the food - nothing short of extraordinary. The food was the highlight of our evening. Highly recommended.",
    "src": "https://res.cloudinary.com/dpb8gwksd/image/upload/v1703579419/food-web/user3_ntgnl7.png",
    "name": "Andy Smith",
    "address": "San Francisco, CA"
  }
]
const Testimonial = () => {
  const renderTestimonial = () => {
    return data.map((item, index) => (
      <TestimonialCard
        key={index+1}
        title={item.title}
        text={item.text}
        src={item.src}
        name={item.name}
        address={item.address}
      />
    ))
  }
  return (
    <section className="testimonial">
      <div className="container">
        <Heading title="What Our Customers Say" />
        <div className="list-card">
          {renderTestimonial()}
        </div>
      </div>
    </section>
  )
}
export default Testimonial;