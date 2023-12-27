import React from 'react'
import './style.css'

type ListItemProps = {
  Icon: React.ElementType;
  content: string;
  variant: string;
}
const IconContent: React.FC<ListItemProps> = ({ Icon, content, variant }) => {
  return (
    <div className={variant}>
      {Icon && <Icon />}
      <p>{content}</p>
    </div>
  )
}

export default IconContent;