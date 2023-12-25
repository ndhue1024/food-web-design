import React from 'react'
import { TopBar } from '../../organisms/top-bar/TopBar';
import { Header } from '../../organisms/header/Header';
import { About } from '../../organisms/about/About';
import { Testimonial } from '../../organisms/testimonial/Testimonial';
import { Footer } from '../../organisms/footer/Footer';
import { ScrollToTop } from '../../organisms/scroll-to-top/ScrollToTop';

interface AboutTemplateProps {
  children: React.ReactNode;
}

export const AboutTemplate: React.FC<AboutTemplateProps> = ({ children }) => {
  return (
    <ScrollToTop>
      <TopBar />
      <Header />
      <div className="about-page">
        <About img="../../../assets/about-page.png" />
        {children}
      </div>
      <Testimonial />
      <Footer />
    </ScrollToTop>
  )
}
