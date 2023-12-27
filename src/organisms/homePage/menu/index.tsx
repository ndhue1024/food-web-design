import React from 'react'
import { useNavigate } from 'react-router-dom'
import Heading from '@atoms/heading'
import Button from '@atoms/button'
import './style.css'

const data = [
  {
    "title": "Breakfast",
    "src": "https://res.cloudinary.com/dpb8gwksd/image/upload/v1703579380/food-web/icon-tea_evgyhm.png",
    "alt": "icon-tea",
    "content": "In the new era of technology we look in the future with certainty and pride for our life."
  },
  {
    "title": "Main Dishes",
    "src": "https://res.cloudinary.com/dpb8gwksd/image/upload/v1703579310/food-web/icon-rice_lpoytj.png",
    "alt": "icon-rice",
    "content": "In the new era of technology we look in the future with certainty and pride for our life."
  },
  {
    "title": "Drinks",
    "src": "https://res.cloudinary.com/dpb8gwksd/image/upload/v1703579240/food-web/icon-drink_efomas.png",
    "alt": "icon-drink",
    "content": "In the new era of technology we look in the future with certainty and pride for our life."
  },
  {
    "title": "Desserts",
    "src": "https://res.cloudinary.com/dpb8gwksd/image/upload/v1703579170/food-web/icon-dessert_g2ytra.png",
    "alt": "icon-dessert",
    "content": "In the new era of technology we look in the future with certainty and pride for our life."
  },
]
const Menu = () => {
  const navigate = useNavigate();

  const renderItem = () => {
    return data.map((item, index) => (
      <div className='menu-item' key={index+1}>
      <div className="box-item">
        <img src={item.src} alt={item.alt} />
        <h2>{item.title}</h2>
        <p className="content">{item.content}</p>
        <div className="menu-button">
            <Button 
              title='Explore Menu' 
              variant='btn-no-border'
              onClick={() => navigate('/menu')}
            />
        </div>
      </div>
    </div>
    ))
  }
  return (
    <section className='menu'>
      <Heading title='Browse Our Menu' />
      <div className="box">
        {renderItem()}
      </div>
    </section>
  )
}

export default Menu;