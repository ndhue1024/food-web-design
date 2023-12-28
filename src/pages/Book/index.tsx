import Heading from '@atoms/Heading'
import BookingForm from '@molecules/BookingForm';
import './style.css'

const Book = () => {
  return (
      <section className="book">
        <div className="hero">
            <Heading 
            title="Book A Table" 
            text='We consider all the drivers of change gives you the components you need to change to create a truly happens.'
            />
          <div className="form">
            <BookingForm />
          </div>
        </div>
        <div className="map">
          <img src="https://res.cloudinary.com/dpb8gwksd/image/upload/v1703579414/food-web/Map_xcqcro.png" alt="map" />
        </div>
      </section>
  )
}

export default Book;