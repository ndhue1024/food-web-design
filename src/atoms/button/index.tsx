import React from 'react'
import './style.css'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title?: string;
  isRed?: boolean;
}

const Button: React.FC<ButtonProps> = ({ title, isRed, ...props }) => {
  return (
    <button {...props} className={isRed ? 'isRed' : ''}>
      {title}
    </button>
  )
}

export default Button;
