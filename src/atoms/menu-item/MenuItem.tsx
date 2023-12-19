import React from 'react'
import './style.css'
import Button from '../button'

interface MenuItemProps {
  alt?: string;
  src?: string;
  title?: string;
}

export const MenuItem: React.FC<MenuItemProps> = ({ alt, src, title }) => {
  return (
    <div className='menu-item'>
      <div className="box-item">
        <img src={src} alt={alt} />
        <h2>{title}</h2>
        <p className="content">In the new era of technology we look in the future with certainty and pride for our life.</p>

        <div className="menu-button">
          <Button title='Explore Menu' isRed={true} />
        </div>
      </div>
    </div>
  )
}
