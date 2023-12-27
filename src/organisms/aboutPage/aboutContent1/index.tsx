import Heading from '@atoms/heading'
import './style.css'

const AboutContent1 = () => {
  return (
    
    <section className="about-content-1">
      <div className="bg-video">
        <img src="https://res.cloudinary.com/dpb8gwksd/image/upload/v1703579015/food-web/BG_f7y1qk.png" className='bg' alt="BG" />
        <div className="video-content">
          <img src="https://res.cloudinary.com/dpb8gwksd/image/upload/v1703579415/food-web/Play_od2h26.png" alt="btn-play" className="btn-play" />
          <Heading title="Feel the authentic & original taste from us" />
        </div>
      </div>
      <div className="features">
        <div className="feature-1">
          <img src="https://res.cloudinary.com/dpb8gwksd/image/upload/v1703579080/food-web/feature1_gd3sxz.png" alt="feature" />
          <div className="text">
            <h4>Multi Cuisine</h4>
            <p>In the new era of technology we look in the future with certainty life.</p>
          </div>
        </div>
        <div className="feature-1">
          <img src="https://res.cloudinary.com/dpb8gwksd/image/upload/v1703579134/food-web/feature2_cbr9n1.png" alt="feature" />
          <div className="text">
            <h4>Easy To Order</h4>
            <p>In the new era of technology we look in the future with certainty life.</p>
          </div>
        </div>
        <div className="feature-1">
          <img src="https://res.cloudinary.com/dpb8gwksd/image/upload/v1703579135/food-web/feature3_ojfbz6.png" alt="feature" />
          <div className="text">
            <h4>Fast Delivery</h4>
            <p>In the new era of technology we look in the future with certainty life.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
export default AboutContent1;