import React from 'react'
import './style.css'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  title: string;
  variant: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ title, variant, onClick, ...props }) => {
  return (
    <button 
      onClick={onClick}
      {...props}
      className={variant}
    >
      {title}
    </button>
  )
}

export default Button;
