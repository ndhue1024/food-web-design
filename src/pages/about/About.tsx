import React from 'react'
import { AboutTemplate } from '../../templates/about/AboutTemplate'
import { AboutContent1 } from './components/about-content-1/AboutContent1'
import { AboutContent2 } from './components/about-content-2/AboutContent2'
import './style.css'

export const About = () => {
  return (
    <AboutTemplate>
      <AboutContent1 />
      <AboutContent2 />
    </AboutTemplate>
  )
}
