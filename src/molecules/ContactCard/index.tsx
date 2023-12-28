import IconContent from "@atoms/IconContent";
import {
  PhoneOutlined,
  EmailOutlined,
  FmdGoodOutlined
} from "@mui/icons-material";

import './style.css';

const ContactCard = () => {
  return (
    <section className="contact-card">
      <div className="contact-card-box">
        <h3>Come and visit us</h3>
        <div className="list-contact">
          <a href="tel:414-857-0107" target="_blank" rel="noreferrer">
            <IconContent
              Icon={PhoneOutlined}
              content="(414) 857 - 0107"
              variant="icon-secondary"
            />
          </a>
          <a href="mailto:happytummy@restaurant.com" target="_blank" rel="noreferrer">
            <IconContent
              Icon={EmailOutlined}
              content="happytummy@restaurant.com"
              variant="icon-secondary"
            />
          </a>
          <a href={`https://www.google.com/maps?q=${encodeURIComponent('837 W. Marshall Lane Marshalltown, IA 50158, Los Angeles')}`} target="_blank" rel="noreferrer">
            <IconContent
              Icon={FmdGoodOutlined}
              content="837 W. Marshall Lane Marshalltown, IA 50158, Los Angeles"
              variant="icon-secondary"
            />
          </a>
        </div>
      </div>
    </section>
  );
};
export default ContactCard;