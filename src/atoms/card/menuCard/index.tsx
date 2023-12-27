import React from 'react'
import "./style.css";

type MenuCardProps = {
  src: string;
  content1: string;
  content2: string;
  content3?: string;
};
const MenuCard: React.FC<MenuCardProps> = ({
  src,
  content1,
  content2,
  content3
}) => {
  return (
    <div className="card-box">
      <div className="card-container">
        <div className="img">
          <img src={src} alt="service-img" />
        </div>
        <div className="text">
          <p className="price">$ {content1}</p>
          <p className="name">{content2}</p>
          <p className="desc">{content3}</p>
        </div>
      </div>
    </div>
  )
}

export default MenuCard