import { useNavigate } from "react-router-dom";
import Heading from "@atoms/heading";
import Button from "@atoms/button";
import ContactCard from "@molecules/contactCard";

import "./style.css";

type AboutProps = {
  img: string;
}
const AboutComponent = ({ img }: AboutProps) => {
  const navigate = useNavigate();

  return (
    <section className="about">
      <div className="container">
        <div className="img" style={{ backgroundImage: `url(${img})` }}>
          <ContactCard />
        </div>
        <div className="content">
          <Heading title="We provide healthy food for your family." />
          <p className="content-1">
            Our story began with a vision to create a unique dining experience
            that merges fine dining, exceptional service, and a vibrant
            ambiance. Rooted in city's rich culinary culture, we aim to honor
            our local roots while infusing a global palate.
          </p>
          <p className="content-2">
            At place, we believe that dining is not just about food, but also
            about the overall experience. Our staff, renowned for their warmth
            and dedication, strives to make every visit an unforgettable event.
          </p>
          <div className="about-button">
            <Button 
              title="More About Us"
              onClick={() => navigate('/about')} 
              variant="secondary" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutComponent;