import React from 'react'
import './style.css'

interface ServiceBoxProps {
  src: string;
  title: string;
  detail: string;
}
export const ServiceBox: React.FC<ServiceBoxProps> = ({ src, title, detail }) => {
  return (
    <div className='service-box'>
      <div className="service-container">
        <div className="img">
          <img src={src} alt="service-img" />
        </div>
        <h4 className="title">{title}</h4>
        <p className="detail">{detail}</p>
      </div>
    </div>
  )
}
