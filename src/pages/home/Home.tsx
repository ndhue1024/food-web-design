import React from 'react'

import { Carousel } from './components/hero/Hero'
import { Menu } from './components/menu/Menu'
import { About } from '../../organisms/about/About'
import { Services } from './components/services/Services'
import { Content } from './components/content/Content'
import { Testimonial } from '../../organisms/testimonial/Testimonial'
import { Blog } from './components/blog/Blog'
import { GeneralTemplate } from '../../templates/GeneralTemplate'

import './style.css'

export const Home = () => {
  return (
    <GeneralTemplate>
      <Carousel />
      <Menu />
      <About img="../../../assets/Image.png" />
      <Services />
      <Content />
      <Testimonial />
      <Blog />
    </GeneralTemplate>
  )
}
