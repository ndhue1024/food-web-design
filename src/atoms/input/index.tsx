import React from "react";
import './style.css'

type InputProps = {
  type: string;
  label: string;
  placeholder?: string;
  value?: string;
  name?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  Icon?: React.ElementType;
  min?: string;
}

const Input= ({
  type,
  label,
  value,
  name,
  placeholder,
  onChange,
  Icon,
  min
}: InputProps) => {
  return (
    <div className="input-group">
      <label>{label}</label>
      <input 
        className="input" 
        type={type} 
        value={value}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        min={min}
      />
      {Icon && <Icon className="input-icon" />}
    </div>
  );
};

export default Input;