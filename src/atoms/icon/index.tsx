import React from 'react'

interface IconProps {
  Icon: React.ElementType;
  isRed?: boolean;
}
export const Icon: React.FC<IconProps> = ({ Icon, isRed }) => {
  return (
    <>
      {Icon && <Icon className={isRed ? "btn-red" : "btn-reg"} />}
    </>
  )
}
