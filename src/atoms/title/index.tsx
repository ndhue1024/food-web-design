import React from 'react'
import "./style.css"

interface TitleProps {
  title: string;
}

export const Title: React.FC<TitleProps> = ({ title }) => {
  return (
    <h1 className='main-title'> {title} </h1>
  )
}
