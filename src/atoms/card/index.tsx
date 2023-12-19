import React from 'react'
import './style.css'

interface CardProps {
  src?: string;
  title?: string;
  detail?: string;
  isService?: boolean;
  isBlog?: boolean;
  isRemarkable?: string;
}
export const Card: React.FC<CardProps> = ({ src, title, detail, isBlog, isService,isRemarkable }) => {
  return (
    <div className='card-box'>
      <div className="card-container">
        <div className="img">
          <img src={src} alt="service-img" />
        </div>
        {isService && (
          <>
            <h4 className="title">{title}</h4>
            <p className="detail">{detail}</p>
          </>
        )}
        {isBlog && (
          <div className="card-blog-content">
            <h4 className="blog-title">{title}</h4>
            <p className="blog-detail">{detail}</p>
            
          </div>
        )}
        {isRemarkable && (
          <div className="card-blog-content remarkable">
            <h4 className="blog-title">{title}</h4>
            <p className="blog-detail">{detail}</p>
            <p className="blog-text">{isRemarkable}</p>     
          </div>
        )}
      </div>
    </div>
  )
}
