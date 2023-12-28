import Heading from '@atoms/Heading'
import IconContent from '@atoms/IconContent';
import {
  AccessTimeOutlined,
  ReceiptOutlined,
  ShoppingCartOutlined
} from "@mui/icons-material";
import './style.css'

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
          <IconContent
            Icon={AccessTimeOutlined}
            content="Delivery within 30 minutes"
            variant='icon-primary'
          />
          <IconContent
            Icon={ReceiptOutlined}
            content="Best Offer & Prices"
            variant='icon-primary' />
          <IconContent
            Icon={ShoppingCartOutlined}
            content="Online Services Available"
            variant='icon-primary' />
          </div>
        </div>
      </div>
    </section>
  )
}
export default Content;