import React from 'react'
import './style.css'

type IconContentProps = {
  Icon: React.ElementType;
  content: string;
  variant: string;
}
const IconContent = ({
  Icon,
  content,
  variant
}: IconContentProps) => {
  return (
    <div className={variant}>
      {Icon && <Icon />}
      <p>{content}</p>
    </div>
  )
}

export default IconContent;