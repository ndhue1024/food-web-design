import React from 'react'
import './style.css'
import { MenuItem } from '../../molecules/menu-item/MenuItem'
import { Title } from '../../atoms/title'

export const Menu = () => {
  return (
    <section className='menu'>
      <Title title='Browse Our Menu' />
      <div className="box">
        <MenuItem title="Breakfast" src="./icon-tea.png" alt="icon-tea" />
        <MenuItem title="Main Dishes" src="./icon-rice.png" alt="icon-rice" />
        <MenuItem title="Drinks" src="./icon-drink.png" alt="icon-drink" />
        <MenuItem title="Desserts" src="./icon-dessert.png" alt="icon-dessert" />
      </div>
    </section>
  )
}
