import Hero from '@organisms/HomePage/Hero'
import Menu from '@organisms/HomePage/Menu'
import AboutComponent from '@organisms/AboutComponent'
import Service from '@organisms/HomePage/Service'
import Content from '@organisms/HomePage/Content'
import Testimonial from '@organisms/Testimonial'
import Blog from '@organisms/HomePage/Blog'

const Home = () => {
  return (
    <>
      <Hero />
      <Menu />
      <AboutComponent img="https://res.cloudinary.com/dpb8gwksd/image/upload/v1703579462/food-web/Image_f5xhnw.png" />
      <Service />
      <Content />
      <Testimonial />
      <Blog />
    </>
  )
}

export default Home;