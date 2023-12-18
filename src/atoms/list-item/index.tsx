import React from 'react'
import './style.css'

interface ListItemProps {
  Icon?: React.ElementType;
  content: string;
  isRed: boolean;
}
export const ListItem: React.FC<ListItemProps> = ({ Icon, content, isRed }) => {
  return (
    <div className={isRed ? 'info-content' : 'info-contact'}>
      {Icon && <Icon className={isRed ? 'info-content-icon' : 'info-contact'} />}
      <span className={isRed ? 'info-content-content' : 'info-contact-content'}>{content}</span>
    </div>
  )
}
