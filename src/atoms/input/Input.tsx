import React from "react";
import './style.css'

interface InputProps {
  type: string;
  label: string;
  value?: string;
  placeholder?: string;
}

export const Input: React.FC<InputProps> = ({ type, label, value, placeholder }) => {
  return (
    <div className="input-group">
      <label>{label}</label>
      <input className="input" type={type} value={value} placeholder={placeholder} />
    </div>
  );
};
