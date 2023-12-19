import React from 'react'
import './style.css'
import { MenuItem } from '../../../../atoms/menu-item/MenuItem'
import { Title } from '../../../../atoms/title'

export const Menu = () => {
  return (
    <section className='menu'>
      <Title title='Browse Our Menu' />
      <div className="box">
        <MenuItem title="Breakfast" src="./assets/icon-tea.png" alt="icon-tea" />
        <MenuItem title="Main Dishes" src="./assets/icon-rice.png" alt="icon-rice" />
        <MenuItem title="Drinks" src="./assets/icon-drink.png" alt="icon-drink" />
        <MenuItem title="Desserts" src="./assets/icon-dessert.png" alt="icon-dessert" />
      </div>
    </section>
  )
}
