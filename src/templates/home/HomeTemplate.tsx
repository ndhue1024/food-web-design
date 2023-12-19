import React from 'react'
import { Header } from '../../organisms/header/Header';
import { Footer } from '../../organisms/footer/Footer';

interface HomeTemplateProps {
  children: React.ReactNode;
}
export const HomeTemplate: React.FC<HomeTemplateProps> = ({ children }) => {
  return (
    <>
      <Header />
        {children}
      <Footer />
    </>
  )
}
