import React from 'react'
import { Carousel } from './components/hero/Hero'
import { Menu } from './components/menu/Menu'
import { About } from '../components/about/About'
import { Services } from './components/services/Services'
import { Content } from './components/content/Content'
import { Testimonial } from './components/testimonial/Testimonial'
import { Blog } from './components/blog/Blog'
import { HomeTemplate } from '../../templates/home/HomeTemplate'

export const Home = () => {
  return (
    <HomeTemplate>
      <Carousel />
      <Menu />
      <About />
      <Services />
      <Content />
      <Testimonial />
      <Blog />
    </HomeTemplate>
  )
}
