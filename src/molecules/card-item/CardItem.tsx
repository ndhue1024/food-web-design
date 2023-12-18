import React from 'react'

interface CardItemProps {
  title: string;
  text: string;
  user: React.Component;
}

export const CardItem: React.FC<CardItemProps> = ({ title, text, user }) => {
  return (
    <div className="card-item">
      <div className="container">
        <h3 className="title">{title}</h3>
        <p className='text'>{text}</p>
        <hr className='line' />
      </div>
    </div>
  )
}
