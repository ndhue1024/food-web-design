import React from 'react'
import './style.css'
import Heading from '@atoms/heading'
import IconContent from '@atoms/iconContent';

import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const Content = () => {
  return (
    <section className="content-web">
      <div className="container">
        <div className="img">
          <div className="img-left">
            <img src="https://res.cloudinary.com/dpb8gwksd/image/upload/v1703579409/food-web/img1_g5hm1h.png" alt="1" />
          </div>
          <div className="img-right">
            <img src="https://res.cloudinary.com/dpb8gwksd/image/upload/v1703579409/food-web/img2_aehwct.png" alt="2" />
            <img src="https://res.cloudinary.com/dpb8gwksd/image/upload/v1703579409/food-web/img3_esufdp.png" alt="3" className='img-3' />
          </div>
        </div>
        <div className="detail">
          <Heading title="Fastest Food Delivery in City" />
          <p className='text'>Our visual designer lets you quickly and of drag a down your way to customapps for both keep desktop. </p>
          <div className="list">
          <IconContent Icon={AccessTimeOutlinedIcon} content="Delivery within 30 minutes" variant='icon-primary' />
          <IconContent Icon={ReceiptOutlinedIcon} content="Best Offer & Prices" variant='icon-primary' />
          <IconContent Icon={ShoppingCartOutlinedIcon} content="Online Services Available" variant='icon-primary' />
          </div>
        </div>
      </div>
    </section>
  )
}
export default Content;