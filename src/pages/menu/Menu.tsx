import React from 'react'
import { GeneralTemplate } from '../../templates/GeneralTemplate'
import { MenuHero } from './components/menu-hero/MenuHero'
import { MenuBrand } from './components/menu-brand/MenuBrand'

export const Menu = () => {
  return (
    <GeneralTemplate>
      <MenuHero />
      <MenuBrand />
    </GeneralTemplate>
  )
}
