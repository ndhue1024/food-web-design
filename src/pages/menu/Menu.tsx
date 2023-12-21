import React from 'react'
import { GeneralTemplate } from '../../templates/GeneralTemplate'
import { MenuHero } from './menu-hero/MenuHero'
import { MenuBrand } from './menu-brand/MenuBrand'

export const Menu = () => {
  return (
    <GeneralTemplate>
      <MenuHero />
      {/* Chưa responsive nên bể layout */}
      {/* <MenuBrand /> */}
    </GeneralTemplate>
  )
}
