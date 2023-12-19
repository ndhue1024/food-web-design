import React from 'react'
import './style.css'
import { Title } from '../../../../atoms/title'

import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { ListItem } from '../../../../atoms/list-item';

export const Content = () => {
  return (
    <section className="content-web">
      <div className="container">
        <div className="img">
          <div className="img-left">
            <img src="./assets/img1.png" alt="1" />
          </div>
          <div className="img-right">
            <img src="./assets/img2.png" alt="2" />
            <img src="./assets/img3.png" alt="3" className='img-3' />
          </div>
        </div>
        <div className="detail">
          <Title title="Fastest Food Delivery in City" />
          <p className='text'>Our visual designer lets you quickly and of drag a down your way to customapps for both keep desktop. </p>
          <div className="list">
          <ListItem Icon={AccessTimeOutlinedIcon} content="Delivery within 30 minutes" isRed={true} />
          <ListItem Icon={ReceiptOutlinedIcon} content="Best Offer & Prices" isRed={true} />
          <ListItem Icon={ShoppingCartOutlinedIcon} content="Online Services Available" isRed={true} />
          </div>
        </div>
      </div>
    </section>
  )
}
