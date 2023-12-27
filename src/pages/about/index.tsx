import AboutContent1 from '@organisms/aboutPage/aboutContent1' 
import AboutContent2 from '@organisms/aboutPage/aboutContent2' 
import AboutComponent from '@organisms/about'
import './style.css'

const About = () => {
  return (
    <>
      <AboutComponent img="https://res.cloudinary.com/dpb8gwksd/image/upload/v1703579013/food-web/about-page_oieqdn.png" />
      <AboutContent1 />
      <AboutContent2 />
    </>
  )
}

export default About;