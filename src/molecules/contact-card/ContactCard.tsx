import React from "react";
import { IconContent } from "../../atoms/icon-content";

import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";

import './style.css';

export const ContactCard = () => {
  return (
    <section className="contact-card">
      <div className="contact-card-box">
        <h3>Come and visit us</h3>
        <div className="list-contact">
          <a href="/">
            <IconContent
              Icon={PhoneOutlinedIcon}
              content="(414) 857 - 0107"
              isRed={false}
            />
          </a>
          <a href="/">
            <IconContent
              Icon={EmailOutlinedIcon}
              content="happytummy@restaurant.com"
              isRed={false}
            />
          </a>
          <a href="/">
            <IconContent
              Icon={FmdGoodOutlinedIcon}
              content="837 W. Marshall Lane Marshalltown, IA 50158, Los Angeles"
              isRed={false}
            />
          </a>
        </div>
      </div>
    </section>
  );
};
