import Button from '@atoms/button';
import { useNavigate } from 'react-router-dom';
import './style.css'

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="carousel" style={{ backgroundImage: `url(https://res.cloudinary.com/dpb8gwksd/image/upload/v1703579461/food-web/carousel_u5hlaa.png)`}}>
      <div className="content">
        <h1>Best food for your taste</h1>
        <p>Discover delectable cuisine and unforgettable moments in our welcoming, culinary haven.</p>
        <div className="button-container">
          <div className="button1">
              <Button 
                title="Book A Table"
                onClick={() => navigate('/book')} 
                variant='primary' 
              />
          </div>
          <div className="button2">
              <Button 
                title="Explore Menu" 
                onClick={() => navigate('/menu')}
                variant='secondary' 
              />
          </div>
        </div>
      </div>
        <div className="blur"></div>
    </section>
  )
}

export default Hero;