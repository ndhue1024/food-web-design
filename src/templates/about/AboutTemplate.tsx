import React from 'react'
import { TopBar } from '../../organisms/top-bar/TopBar';
import { Header } from '../../organisms/header/Header';
import { About } from '../../pages/components/about/About';
import { Testimonial } from '../../pages/components/testimonial/Testimonial';
import { Footer } from '../../organisms/footer/Footer';

interface AboutTemplateProps {
  children: React.ReactNode;
}

export const AboutTemplate: React.FC<AboutTemplateProps> = ({ children }) => {
  return (
    <>
      <TopBar />
      <Header />
      <About img="../../../assets/about-page.png" />
        {children}
      <Testimonial />
      <Footer />
    </>
  )
}
