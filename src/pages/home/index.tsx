import Hero from '@organisms/homePage/hero'
import Menu from '@organisms/homePage/menu'
import AboutComponent from '@organisms/about'
import Service from '@organisms/homePage/service'
import Content from '@organisms/homePage/content'
import Testimonial from '@organisms/testimonial'
import Blog from '@organisms/homePage/blog'

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