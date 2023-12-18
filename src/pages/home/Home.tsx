import React from 'react'
import { Header } from '../../organisms/header/Header'
import { Carousel } from '../../organisms/carousel/Carousel'
import { Menu } from '../../organisms/menu/Menu'
import { About } from '../../organisms/about/About'
import { Services } from '../../organisms/services/Services'
import { Content } from '../../organisms/content/Content'
import { Testimonial } from '../../organisms/testimonial/Testimonial'

export const Home = () => {
  return (
    <>
      <Header />
      <Carousel />
      <Menu />
      <About />
      <Services />
      <Content />
      <Testimonial />
    </>
  )
}
