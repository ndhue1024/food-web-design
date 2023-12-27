import React from 'react'
import "./style.css"
import User from '@atoms/user';

type TestimonialCardProps = {
  title: string;
  text: string;
  src: string;
  name: string;
  address: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ title, text, src, name, address }) => {
  return (
    <div className="card-item">
      <div className="card-item-container">
        <h3 className="title">{title}</h3>
        <p className='text'>{text}</p>
        <User
          src={src}
          name={name}
          address={address}
        />
      </div>
    </div>
  )
}
export default TestimonialCard;