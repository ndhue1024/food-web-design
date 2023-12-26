import React from "react";
import './style.css'

interface InputProps {
  type: string;
  label: string;
  value?: string;
  placeholder?: string;
  Icon?: React.ElementType;
}

export const Input: React.FC<InputProps> = ({ type, label, value, placeholder, Icon }) => {
  return (
    <div className="input-group">
      <label>{label}</label>
      <input className="input" type={type} placeholder={placeholder} defaultValue={value} />
      {Icon && <Icon className="input-icon" />}
    </div>
  );
};
