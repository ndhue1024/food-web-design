import React from 'react'
import './style.css'
import Button from '../button'
import { Link } from 'react-router-dom';

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
          <Link to="/menu">
            <Button title='Explore Menu' isRed={true} />
          </Link>
        </div>
      </div>
    </div>
  )
}
