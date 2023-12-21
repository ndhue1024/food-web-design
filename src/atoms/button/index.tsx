import React from 'react'
import './style.css'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title?: string;
  isRed?: boolean;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ title, isRed, onClick, ...props }) => {
  return (
    <button onClick={onClick} {...props} className={isRed ? 'isRed' : ''}>
      {title}
    </button>
  )
}

export default Button;
