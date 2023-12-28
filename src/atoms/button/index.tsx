import './style.css'

type ButtonProps = {
  title: string;
  variant: string;
  type?: "submit" | undefined;
  onClick?: () => void;
}

const Button = ({
  title, 
  variant, 
  type,
  onClick,
} : ButtonProps) => {
  return (
    <button 
      onClick={onClick}
      className={variant}
      type={type}
    >
      {title}
    </button>
  )
}

export default Button;
