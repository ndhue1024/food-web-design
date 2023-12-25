import React from 'react'
import './style.css'

interface CardProps {
  src?: string;
  content1?: string;
  content2?: string;
  content3?: string;
  isService?: boolean;
  isBlog?: boolean;
  isRemarkable?: boolean;
  isMenu?:boolean;    
}
export const Card: React.FC<CardProps> = ({ src, content1, content2, content3, isBlog, isService,isRemarkable, isMenu }) => {
  return (
    <div className='card-box'>
      <div className="card-container">
        <div className="img">
          <img src={src} alt="service-img" />
        </div>
        {isService && (
          <>
            <h4 className="title">{content1}</h4>
            <p className="detail">{content2}</p>
          </>
        )}
        {isBlog && (
          <div className="card-blog-content">
            <h4 className="blog-title">{content1}</h4>
            <p className="blog-detail">{content2}</p>
            
          </div>
        )}
        {isRemarkable && (
          <div className="card-blog-content remarkable">
            <h4 className="blog-title">{content1}</h4>
            <p className="blog-detail">{content2}</p>
            <p className="blog-text">{content3}</p>     
          </div>
        )}
        {isMenu && (
          <div className="text">
          <p className="price">$ {content1}</p>
          <p className="name">{content2}</p>
          <p className="desc">{content3}</p>
        </div>
        )}
      </div>
    </div>
  )
}
