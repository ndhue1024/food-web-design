import AboutContent1 from '@organisms/AboutPage/AboutContent1' 
import AboutContent2 from '@organisms/AboutPage/AboutContent2' 
import AboutComponent from '@organisms/AboutComponent'
import './style.css'

const About = () => {
  return (
    <div className="about-page">
      <AboutComponent img="https://res.cloudinary.com/dpb8gwksd/image/upload/v1703579013/food-web/about-page_oieqdn.png" />
      <AboutContent1 />
      <AboutContent2 />
    </div>
  )
}

export default About;