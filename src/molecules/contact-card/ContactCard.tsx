import React from 'react'
import './style.css'

import { ListItem } from '../../atoms/list-item'

import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';

export const ContactCard = () => {
  return (
    <section className="contact-card">
      <div className="card-box">
        <h3>Come and visit us</h3>
        <div className="list-contact">
          <ListItem Icon={PhoneOutlinedIcon} content="(414) 857 - 0107" isRed={false} />
          <ListItem Icon={EmailOutlinedIcon} content="happytummy@restaurant.com" isRed={false} />
          <ListItem Icon={FmdGoodOutlinedIcon} content="837 W. Marshall Lane Marshalltown, IA 50158, Los Angeles" isRed={false} />
        </div>
      </div>
    </section>
  )
}
