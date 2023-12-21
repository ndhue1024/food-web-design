import React from 'react'
import { Header } from '../organisms/header/Header';
import { TopBar } from '../organisms/top-bar/TopBar';
import { Footer } from '../organisms/footer/Footer';

interface GeneralTemplateProps {
  children: React.ReactNode;
}

export const GeneralTemplate: React.FC<GeneralTemplateProps> = ({
  children
}) => {
  return (
    <>
      <TopBar />
      <Header />
      {children}
      <Footer />
    </>
  )
}
