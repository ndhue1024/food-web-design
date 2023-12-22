import React from 'react'
import { GeneralTemplate } from '../../templates/GeneralTemplate'
import { MenuHero } from './menu-hero/MenuHero'
import { MenuBrand } from './menu-brand/MenuBrand'
import './style.css'

export const Menu = () => {
  return (
    <GeneralTemplate>
      <MenuHero />
      <MenuBrand />
    </GeneralTemplate>
  )
}
