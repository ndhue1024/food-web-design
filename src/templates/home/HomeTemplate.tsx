import React from 'react'
import { Header } from '../../organisms/header/Header';
import { Footer } from '../../organisms/footer/Footer';
import { TopBar } from '../../organisms/top-bar/TopBar';

interface HomeTemplateProps {
  children: React.ReactNode;
}
export const HomeTemplate: React.FC<HomeTemplateProps> = ({ children }) => {
  return (
    <>
      <TopBar />
      <Header />
        {children}
      <Footer />
    </>
  )
}
