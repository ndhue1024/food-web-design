import './style.css'

type ButtonProps = {
  title: string;
  variant: string;
  type?: "button" | "submit";
  onClick?: () => void;
  disabled?: boolean;
}

const Button = ({
  title, 
  variant, 
  type,
  onClick,
  disabled
} : ButtonProps) => {
  return (
    <button 
      onClick={onClick}
      className={variant}
      type={type}
      disabled={disabled}
    >
      {title}
    </button>
  )
}

export default Button;
