import React from 'react'
import "./style.css"

type TitleProps = {
  title: string;
  text?: string;
}

const Heading: React.FC<TitleProps> = ({ title, text }) => {
  return (
    <div className="title">
      <h1 className='main-title'> {title} </h1>
      { text && <p className="text">{text}</p> }
    </div>
  )
}
export default Heading;